#!/usr/bin/env node
const fs=require('fs');
const https=require('https');

const repo=process.env.GITHUB_REPOSITORY||'moonstachain/yuanli-strategy-soul';
const token=process.env.GITHUB_TOKEN;
const [owner,name]=repo.split('/');

function request(path){
  return new Promise((resolve,reject)=>{
    const opts={hostname:'api.github.com',path,headers:{'User-Agent':'yuanli-pmo-sync','Accept':'application/vnd.github+json'}};
    if(token) opts.headers.Authorization=`Bearer ${token}`;
    https.get(opts,res=>{let data='';res.on('data',d=>data+=d);res.on('end',()=>{if(res.statusCode>=300) return reject(new Error(`${res.statusCode} ${data}`));resolve(JSON.parse(data));});}).on('error',reject);
  });
}
function field(body,label){const re=new RegExp(`## ${label}\\n([\\s\\S]*?)(?=\\n## |$)`,'i');const m=(body||'').match(re);return m?m[1].trim():'';}
function score(issue){const v=field(issue.body,'Gap Score');const n=(v.match(/\d+/)||[])[0];return n?Number(n):0;}
function typeOf(issue){
  const t=field(issue.body,'Type');
  const x=(t+' '+issue.title).toLowerCase();
  if(x.includes('c2 brain validation')) return 'brain_validation';
  if(x.includes('deepening task')) return 'deepening_task';
  if(/c3 gap/i.test(t)||/c3 gap/i.test(issue.title)) return 'gap';
  if(/c4 task/i.test(t)||/c4 task/i.test(issue.title)) return 'task';
  if(/evidence review/i.test(t)||/evidence review/i.test(issue.title)) return 'evidence';
  return 'work';
}
function nodeOf(t,issue){
  const body=(issue.body||'')+' '+issue.title;
  if(t==='brain_validation') return 'C2';
  if(t==='deepening_task'){
    const m=body.match(/\b([ABC][1-4])\b/); return m?m[1]:'PMO';
  }
  return t==='gap'?'C3':t==='task'?'C4':t==='evidence'?'C2':'PMO';
}
function domainOf(t){return t==='gap'?'matrix':t==='task'?'delivery':t==='brain_validation'?'brain':t==='deepening_task'?'productization':'data'}
function layerOf(t){return t==='gap'?'design':t==='task'?'execution':t==='brain_validation'?'validation':t==='deepening_task'?'deepening':'validation'}
function healthOf(t,e){return t==='gap'&&e==='weak'?'yellow':'green'}
function priorityOf(t){return t==='brain_validation'?'P0.5':t==='deepening_task'?'P0':t==='gap'?'P0':t==='task'?'P1':'P2'}
function defaultScore(t){return t==='brain_validation'?32:t==='deepening_task'?27:t==='task'?50:t==='evidence'?50:0}
function nextOf(issue,t){
  if(t==='brain_validation') return 'Run Trial 2 and Trial 3, then update validation records and scorecard.';
  if(t==='deepening_task') return 'Create validation assets and run small-scale productization validation.';
  if(t==='gap') return field(issue.body,'Next C4 Task')||'rank and handoff';
  if(t==='task') return field(issue.body,'Objective')||'execute task';
  if(t==='evidence') return 'review evidence';
  return 'review';
}
function evidenceOf(issue,t){const v=field(issue.body,'Evidence Strength').toLowerCase();if(v) return v.split(/\s+/)[0];return t==='gap'?'weak':'medium';}

const trilogyModules=[
  ['原力资产','A1','发现母体','#86','assets/A1-发现母体/',26,'Seed+','P1','worksheet.md + real-learner-cases.md','content'],
  ['原力资产','A2','回到母体','#87','assets/A2-回到母体/',24,'Seed','P1','calibration-examples.md + facilitator-notes.md','content'],
  ['原力资产','A3','获得原力','#88','assets/A3-获得原力/',25,'Seed+','P1','capability-rubric.md + validation-worksheet.md','content'],
  ['原力资产','A4','显化原力','#89','assets/A4-显化原力/',26,'Seed+','P0','validation-records.md + pricing-test.md','content'],
  ['原力创业','B1','原力借势','#90','assets/B1-原力借势/',27,'Seed+','P0','trend-map.md + industry-cases.md','content'],
  ['原力创业','B2','品类独创','#91','assets/B2-品类独创/',27,'Seed+','P0','naming-test.md + user-language.md + validation-records.md','content'],
  ['原力创业','B3','模式升维','#92','assets/B3-模式升维/',27,'Seed+','P0','financial-template.md + delivery-sop.md','content'],
  ['原力创业','B4','壁垒锁定','#93','assets/B4-壁垒锁定/',27,'Seed+','P0','moat-diagnostic.md + metric-template.md','content'],
  ['原力OS','C1','一纸文脉','#94','assets/C1-一纸文脉/',26,'Seed+','P1','prompt-template.md + before-after-ai-output.md','context'],
  ['原力OS','C2','一个大脑','#95','assets/C2-一个大脑/',32,'Validated Strategy+','P0.5','Trial 2 + Trial 3 + real learner/client validation','memory'],
  ['原力OS','C3','一张地图','#96','assets/C3-一张地图/',25,'Seed+','P1','map-template.md + gap-scoring-sheet.md','map'],
  ['原力OS','C4','一条链路','#97','assets/C4-一条链路/',23,'Seed','P0','chain-template.md + operating-examples.md','execution']
].map(([part,node,module,issue,asset_path,maturity,stage,priority,next_deepening,layer])=>({part,node,module,issue,asset_path,status:node==='C2'?'trial 1 passed':'seed complete',maturity,stage,priority,evidence:'medium',next_deepening,layer}));
const contentAssetItems=trilogyModules.map(m=>({issue:m.issue,node:m.node,type:'content_asset',domain:'trilogy',layer:m.layer,status:m.node==='C2'?'trial_1_passed':(m.node==='B2'?'deepening_needed':'completed'),health:'green',priority:m.priority,gap_score:m.maturity,evidence:m.evidence,next:m.next_deepening}));
const p0Deepening=trilogyModules.filter(m=>m.priority==='P0').map(m=>({node:m.node,module:m.module,next:m.next_deepening}));
const p05Deepening=trilogyModules.filter(m=>m.priority==='P0.5').map(m=>({node:m.node,module:m.module,next:m.next_deepening}));

(async()=>{
  const issues=await request(`/repos/${owner}/${name}/issues?state=open&per_page=100`);
  const liveItems=issues.filter(i=>!i.pull_request).map(i=>{
    const t=typeOf(i);const e=evidenceOf(i,t);const s=score(i)||defaultScore(t);
    return {issue:'#'+i.number,node:nodeOf(t,i),type:t,domain:domainOf(t),layer:layerOf(t),status:t==='evidence'?'qa':'ready',health:healthOf(t,e),priority:priorityOf(t),gap_score:s,evidence:e,next:nextOf(i,t)};
  }).filter(x=>['gap','task','evidence','brain_validation','deepening_task'].includes(x.type));
  const items=[...contentAssetItems,...liveItems].sort((a,b)=>b.gap_score-a.gap_score);
  const top=items.find(x=>x.issue==='#129')||items.find(x=>x.issue==='#91')||items.find(x=>x.type==='gap')||items.find(x=>x.node==='C2');
  const nextTask=items.find(x=>x.type==='deepening_task')||items.find(x=>x.type==='task');
  const obj={
    version:'v3.7-validation-task-sync',ui_version:'v2.9-content-assets',data_patch:'validation-task-type-sync',sync:{mode:'github_actions',source:'issues+content_assets+c2_brain+validation_tasks',updated_at:new Date().toISOString()},
    fields:['Canon Node','Work Type','Strategic Layer','Capability Domain','Status','PMO Health','Priority','Gap Score','Evidence Strength','Asset Stage','Maturity Score','Next Deepening'],
    views:[{id:'strategic_cockpit',name:'Strategic Cockpit',layout:'table',purpose:'project health and next strategic decision'},{id:'trilogy_content_assets',name:'Trilogy Content Assets',layout:'table',purpose:'govern the 12 canon content asset packages'},{id:'c2_brain_center',name:'C2 Brain Center',layout:'table',purpose:'track the strategic memory hub and Markdown Brain rollout'},{id:'validation_tasks',name:'Validation Tasks',layout:'table',purpose:'track brain validation and deepening tasks'},{id:'c3_gap_ranking',name:'C3 Gap Ranking',layout:'table',purpose:'rank capability gaps before execution'},{id:'c4_execution_board',name:'C4 Execution Board',layout:'board',purpose:'convert selected gaps into executable work'},{id:'evidence_ledger',name:'Evidence Ledger',layout:'table',purpose:'check whether work is proven'},{id:'evolution_review',name:'Evolution Review',layout:'table',purpose:'verify reusable learning'},{id:'roadmap',name:'Roadmap / Milestone',layout:'roadmap',purpose:'manage release sequence'}],
    metrics:['Trilogy Seed Coverage','Average Asset Maturity','Validation Gap','P0 Deepening Count','P0.5 Brain Count','Open Validation Tasks'],
    metric_values:{trilogy_seed_coverage:{value:100,unit:'%',note:'12/12 canon modules have seed content asset packages'},average_asset_maturity:{value:66,unit:'%',note:'315/480 after C2 Trial 1 validation'},validation_gap:{value:1.08,unit:'/5',note:'C2 moved from 1/5 to 2/5; most modules remain at 1/5'},p0_deepening_count:{value:6,unit:'modules',note:'A4, B1, B2, B3, B4, C4'},p05_brain_count:{value:1,unit:'module',note:'C2 一个大脑'},open_validation_tasks:{value:liveItems.filter(x=>['brain_validation','deepening_task'].includes(x.type)).length,unit:'tasks',note:'open brain validation and deepening tasks'}},
    content_sync:{name:'PMO Validation Task Sync v1',status:'completed',current_state:'PMO recognizes brain_validation and deepening_task types'},
    trilogy_summary:{parts:3,modules:12,seed_packages:12,coverage_pct:100,total_score:315,total_possible:480,average_score:'26.25/40',average_maturity_pct:66,validated_strategy_plus:1,seed_plus:9,seed:2,real_validation_average:'1.08/5'},
    productization_gate:{total_score_min:30,evidence_min:4,validation_min:3,commercialization_min:4},
    trilogy_modules:trilogyModules,p0_deepening:p0Deepening,p05_deepening:p05Deepening,seed_items:items,
    c2_brain_center:[{layer:'Validation',artifact:'assets/C2-一个大脑/validation-records.md',status:'Trial 1 PASS',next:'Trial 2 and Trial 3'},{layer:'Issue',artifact:'#128 C2 Brain Validation',status:'open',next:'complete Trial 2 and Trial 3'},{layer:'Issue',artifact:'#129 B2 Deepening Task',status:'open',next:'create naming-test, user-language, validation-records'}],
    gap_ranking:top?[{rank:1,issue:top.issue,gap:top.next||'validation task',score:top.gap_score,formula:'validation/deepening task priority',selected:true,next_issue:nextTask?nextTask.issue:'B2 Deepening Task'}]:[],
    roadmap_current:['v2.9-content-assets','v3.4-content-asset-sync-v1','v3.6-c2-trial1-validated','v3.7-validation-task-sync']
  };
  fs.writeFileSync('docs/pmo-dashboard-data.js','window.YUANLI_PMO_V22='+JSON.stringify(obj,null,2)+';\n');
  console.log(`PMO dashboard synced: ${items.length} items, validation task types enabled`);
})();
