#!/usr/bin/env node

/**
 * CBM-PMO v1.1 Auto Sync Contract Checker
 *
 * Reads:
 *   docs/cbm-capability-cockpit-data.js
 *   docs/os-cbm-data.js
 *   docs/pmo-dashboard-data.js (optional)
 *
 * Writes:
 *   docs/cbm-pmo-sync-latest.json
 *
 * This script is intentionally conservative:
 * - It does not write CONSTITUTION.md.
 * - It does not upgrade any cell to validated / operating / compounding.
 * - It does not upgrade evidence to strong.
 * - It only emits a sync report and warnings.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = process.cwd();

function readWindowFile(filePath, globalName) {
  const abs = path.join(root, filePath);
  if (!fs.existsSync(abs)) return null;
  const raw = fs.readFileSync(abs, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(raw, sandbox, { filename: filePath });
  return sandbox.window[globalName] || null;
}

function evidenceRank(v) {
  return { none: 0, weak: 1, medium: 2, strong: 3 }[String(v || 'none')] ?? 0;
}

function statusRank(v) {
  return { missing: 0, seed: 1, draft: 2, validated: 3, operating: 4, compounding: 5 }[String(v || 'missing')] ?? 0;
}

function hasValue(v) {
  return Array.isArray(v) ? v.length > 0 : Boolean(v);
}

function main() {
  const cockpit = readWindowFile('docs/cbm-capability-cockpit-data.js', 'YUANLI_CBM_CAPABILITY_COCKPIT');
  const osCbm = readWindowFile('docs/os-cbm-data.js', 'YUANLI_OS_CBM_V1');
  const pmo = readWindowFile('docs/pmo-dashboard-data.js', 'YUANLI_PMO_V22');

  if (!cockpit) throw new Error('Missing docs/cbm-capability-cockpit-data.js or window.YUANLI_CBM_CAPABILITY_COCKPIT');

  const cockpitCells = cockpit.pilot_cells || [];
  const osCells = (osCbm && osCbm.cells) || [];
  const osById = Object.fromEntries(osCells.map(c => [c.cbm_cell_id, c]));
  const warnings = [];
  const conflicts = [];
  const humanGates = [];
  const falseGreenRisks = [];

  for (const c of cockpitCells) {
    const id = c.cbm_cell_id;
    const os = osById[id];

    if (!os) {
      conflicts.push({ cell: id, type: 'missing_in_os_cbm', message: 'Pilot cell exists in Cockpit but not in os-cbm-data.js' });
    } else {
      const domain = c.domain || c.capability_domain;
      const layer = c.layer || c.responsibility_layer;
      if (domain && os.capability_domain && domain !== os.capability_domain) conflicts.push({ cell: id, type: 'domain_mismatch', cockpit: domain, os: os.capability_domain });
      if (layer && os.responsibility_layer && layer !== os.responsibility_layer) conflicts.push({ cell: id, type: 'layer_mismatch', cockpit: layer, os: os.responsibility_layer });
    }

    const status = c.status || c.current_status || 'missing';
    const evidence = c.evidence_strength || 'none';
    if (statusRank(status) >= statusRank('validated')) {
      if (evidenceRank(evidence) < evidenceRank('medium')) falseGreenRisks.push({ cell: id, reason: 'validated_or_higher_with_insufficient_evidence' });
      if (!hasValue(c.evidence_path)) falseGreenRisks.push({ cell: id, reason: 'validated_or_higher_without_evidence_path' });
      if (!hasValue(c.evolution_note)) falseGreenRisks.push({ cell: id, reason: 'validated_or_higher_without_evolution_note' });
    }

    if (statusRank(status) >= statusRank('draft') && !hasValue(c.evidence_path)) warnings.push({ cell: id, type: 'draft_without_evidence_path' });
    if (statusRank(status) >= statusRank('draft') && !hasValue(c.evolution_note)) warnings.push({ cell: id, type: 'draft_without_evolution_note' });
    if (!hasValue(c.next_c4_task)) warnings.push({ cell: id, type: 'missing_next_c4_task' });
    if (hasValue(c.approval_gate) || c.is_human_decision_needed) humanGates.push({ cell: id, decision: c.next_decision || null, gates: c.approval_gate || [] });
  }

  const report = {
    generated_at: new Date().toISOString(),
    contract: 'docs/CBM-PMO-AUTO-SYNC-CONTRACT-v1.1.md',
    mode: 'audit_report_only',
    source_files: {
      cockpit: 'docs/cbm-capability-cockpit-data.js',
      os_cbm: osCbm ? 'docs/os-cbm-data.js' : null,
      pmo_dashboard: pmo ? 'docs/pmo-dashboard-data.js' : null,
    },
    stage: cockpit.stage || null,
    overall_maturity: cockpit.maturity && cockpit.maturity.overall,
    cell_count: osCells.length || null,
    pilot_cell_count: cockpitCells.length,
    validated_cells: cockpitCells.filter(c => c.is_validated || c.status === 'validated').length,
    false_green_risks: falseGreenRisks,
    conflicts,
    warnings,
    human_gates: humanGates,
    next_p0: cockpit.next_p0 || null,
    assertions: {
      no_constitution_write: true,
      no_auto_validated_upgrade: true,
      no_auto_strong_evidence_upgrade: true,
      pmo_dashboard_is_derived_view: true,
      cockpit_data_is_durable_source: true,
    },
  };

  const outPath = path.join(root, 'docs/cbm-pmo-sync-latest.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2) + '\n');
  console.log(`CBM-PMO sync report written to ${outPath}`);
  console.log(`conflicts=${conflicts.length} warnings=${warnings.length} false_green_risks=${falseGreenRisks.length}`);
}

main();
