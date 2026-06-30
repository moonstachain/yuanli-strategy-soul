#!/usr/bin/env node
const fs=require('fs');
const file=process.argv[2];
if(!file){console.error('Usage: node scripts/evaluate-evidence-review.js <evidence_markdown>');process.exit(1)}
const text=fs.readFileSync(file,'utf8');
function has(s){return text.toLowerCase().includes(s.toLowerCase())}
const checks={
  has_work_items:has('Work Items')||has('Work Item'),
  has_evidence_path:has('Evidence Path'),
  has_strength:has('Evidence Strength'),
  has_finding:has('Finding'),
  has_evolution:has('Evolution Note'),
  has_next_reuse:has('Next Reuse')
};
const passed=Object.values(checks).filter(Boolean).length;
let state='missing';
if(passed>=5) state='accepted';
if(passed<3) state='rejected';
const result={file,generated_at:new Date().toISOString(),state,checks,score:passed+'/6'};
fs.mkdirSync('docs/evidence-evaluations',{recursive:true});
const out='docs/evidence-evaluations/'+file.replace(/[^a-zA-Z0-9]/g,'_')+'.json';
fs.writeFileSync(out,JSON.stringify(result,null,2)+'\n');
console.log(`Evidence evaluation written to ${out}`);
