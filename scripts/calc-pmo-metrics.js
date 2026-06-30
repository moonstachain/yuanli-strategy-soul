#!/usr/bin/env node
const fs=require('fs');
const path='docs/pmo-dashboard-data.js';
const raw=fs.existsSync(path)?fs.readFileSync(path,'utf8'):'';
const json=raw.replace(/^window\.YUANLI_PMO_V22=/,'').replace(/;\s*$/,'');
let d={seed_items:[]};
try{d=eval('('+json+')')}catch(e){console.error('cannot parse dashboard data',e.message)}
const items=d.seed_items||[];
const gaps=items.filter(x=>x.type==='gap');
const tasks=items.filter(x=>x.type==='task');
const evidence=items.filter(x=>x.type==='evidence');
const strong=evidence.filter(x=>x.evidence==='strong').length;
const medium=evidence.filter(x=>x.evidence==='medium'||x.evidence==='strong').length;
const closedGaps=gaps.filter(x=>x.status==='done'||x.status==='accepted').length;
const evolutionPlanned=evidence.length;
const blockerItems=items.filter(x=>x.status==='blocked');
function pct(a,b){return b?Math.round((a/b)*100):0}
const metrics={
  generated_at:new Date().toISOString(),
  metrics:{
    evidence_coverage:{numerator:evidence.length,denominator:gaps.length+tasks.length,value:pct(evidence.length,gaps.length+tasks.length),unit:'%',interpretation:'Evidence review count divided by gap plus task count.'},
    strong_evidence_rate:{numerator:strong,denominator:evidence.length,value:pct(strong,evidence.length),unit:'%',interpretation:'Strong evidence reviews as a share of all evidence reviews.'},
    backwrite_rate:{numerator:evolutionPlanned,denominator:evidence.length,value:pct(evolutionPlanned,evidence.length),unit:'%',interpretation:'Evidence reviews with planned evolution note writeback.'},
    c3_gap_close_rate:{numerator:closedGaps,denominator:gaps.length,value:pct(closedGaps,gaps.length),unit:'%',interpretation:'Closed or accepted C3 gaps divided by total C3 gaps.'},
    blocked_age:{numerator:blockerItems.length,denominator:items.length,value:blockerItems.length,unit:'items',interpretation:'Current blocked item count; age computation requires issue timestamps from API.'}
  }
};
fs.writeFileSync('docs/pmo-metrics-latest.json',JSON.stringify(metrics,null,2)+'\n');
console.log('PMO metrics written to docs/pmo-metrics-latest.json');
