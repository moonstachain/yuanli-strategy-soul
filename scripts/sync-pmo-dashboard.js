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
    https.get(opts,res=>{
      let data='';
      res.on('data',d=>data+=d);
      res.on('end',()=>{
        if(res.statusCode>=300) return reject(new Error(`${res.statusCode} ${data}`));
        resolve(JSON.parse(data));
      });
    }).on('error',reject);
  });
}
function field(body,label){
  const re=new RegExp(`## ${label}\\n([\\s\\S]*?)(?=\\n## |$)`,'i');
  const m=(body||'').match(re);
  return m?m[1].trim():'';
}
function score(issue){
  const v=field(issue.body,'Gap Score');
  const n=(v.match(/\d+/)||[])[0];
  return n?Number(n):0;
}
function typeOf(issue){
  const t=field(issue.body,'Type');
  if(/C3 Gap/i.test(t)||/C3 Gap/i.test(issue.title)) return 'gap';
  if(/C4 Task/i.test(t)||/C4 Task/i.test(issue.title)) return 'task';
  if(/Evidence Review/i.test(t)||/Evidence Review/i.test(issue.title)) return 'evidence';
  return 'work';
}
function nodeOf(t){return t==='gap'?'C3':t==='task'?'C4':t==='evidence'?'C2':'PMO'}
function domainOf(t){return t==='gap'?'matrix':t==='task'?'delivery':'data'}
function layerOf(t){return t==='gap'?'design':t==='task'?'execution':'validation'}
function healthOf(t,e){return t==='gap'&&e==='weak'?'yellow':'green'}
function nextOf(issue,t){
  if(t==='gap') return field(issue.body,'Next C4 Task')||'rank and handoff';
  if(t==='task') return field(issue.body,'Objective')||'execute task';
  if(t==='evidence') return 'review evidence';
  return 'review';
}
function evidenceOf(issue,t){
  const v=field(issue.body,'Evidence Strength').toLowerCase();
  if(v) return v.split(/\s+/)[0];
  return t==='gap'?'weak':'medium';
}
const trilogyModules=[
  ['原力资产','A1','发现母体','#86','assets/A1-发现母体/',26,'Seed+','P1','worksheet.md + real-learner-cases.md','content'],
  ['原力资产','A2','回到母体','#87','assets/A2-回到母体/',24,'Seed','P1','calibration-examples.md + facilitator-notes.md','content'],
  ['原力资产','A3','获得原力','#88','assets/A3-获得原力/',25,'Seed+','P1','capability-rubric.md + validation-worksheet.md','content'],
  ['原力资产','A4','显化原力','#89','assets/A4-显化原力/',26,'Seed+','P0','validation-records.md + pricing-test.md','content'],
  ['原力创业','B1','原力借势','#90','assets/B1-原力借势/',27,'Seed+','P0','trend-map.md + industry-cases.md','content'],
  ['原力创业','B2','品类独创','#91','assets/B2-品类独创/',27,'Seed+','P0','naming-test.md + user-language.md','content'],
  ['原力创业','B3','模式升维','#92','assets/B3-模式升维/',27,'Seed+','P0','financial-template.md + delivery-sop.md','content'],
  ['原力创业','B4','壁垒锁定','#93','assets/B4-壁垒锁定/',27,'Seed+','P0','moat-diagnostic.md + metric-template.md','content'],
  ['原力OS','C1','一纸文脉','#94','assets/C1-一纸文脉/',26,'Seed+','P1','prompt-template.md + before-after-ai-output.md','context'],
  ['原力OS','C2','一个大脑','#95','assets/C2-一个大脑/',31,'Strategy+','P0.5','retrieval-test.md + tagging-template.md + writeback-examples.md + validation-records.md','memory'],
  ['原力OS','C3','一张地图','#96','assets/C3-一张地图/',25,'Seed+','P1','map-template.md + gap-scoring-sheet.md','map'],
  ['原力OS','C4','一条链路','#97','assets/C4-一条链路/',23,'Seed','P0','chain-template.md + operating-examples.md','execution']
].map(([part,node,module,issue,asset_path,maturity,stage,priority,next_deepening,layer])=>({part,node,module,issue,asset_path,status:node==='C2'?'strategy package complete':'seed complete',maturity,stage,priority,evidence:'medium',next_deepening,layer}));
const contentAssetItems=trilogyModules.map(m=>({issue:m.issue,node:m.node,type:'content_asset',domain:'trilogy',layer:m.layer,status:m.node==='C2'?'strategy+':'completed',health:'green',priority:m.priority,gap_score:m.maturity,evidence:m.evidence,next:m.next_deepening}));
const p0Deepening=trilogyModules.filter(m=>m.priority==='P0').map(m=>({node:m.node,module:m.module,next:m.next_deepening}));
const p05Deepening=trilogyModules.filter(m=>m.priority==='P0.5').map(m=>({node:m.node,module:m.module,next:m.next_deepening}));

(async()=>{
  const issues=await request(`/repos/${owner}/${name}/issues?state=open&per_page=100`);
  const liveItems=issues.filter(i=>!i.pull_request).map(i=>{
    const t=typeOf(i);
    const e=evidenceOf(i,t);
    const s=score(i)|| (t==='task'?50:t==='evidence'?50:0);
    return {issue:'#'+i.number,node:nodeOf(t),type:t,domain:domainOf(t),layer:layerOf(t),status:t==='evidence'?'qa':'ready',health:healthOf(t,e),priority:t==='gap'?'P0':(t==='task'?'P1':'P2'),gap_score:s,evidence:e,next:nextOf(i,t)};
  }).filter(x=>['gap','task','evidence'].includes(x.type));
  const items=[...contentAssetItems,...liveItems].sort((a,b)=>b.gap_score-a.gap_score);
  const top=items.find(x=>x.type==='gap')||items.find(x=>x.node==='C2');
  const nextTask=items.find(x=>x.type==='task');
  const obj={
    version:'v3.5-c2-brain-phase2',
    ui_version:'v2.9-content-assets',
    data_patch:'c2-p05-brain-sync',
    sync:{mode:'github_actions',source:'issues+content_assets+c2_brain',updated_at:new Date().toISOString()},
    fields:['Canon Node','Work Type','Strategic Layer','Capability Domain','Status','PMO Health','Priority','Gap Score','Evidence Strength','Agent Level','Approval Gate','Writeback Target','Owner','Review Cadence','Acceptance State','Canonical State','Asset Stage','Maturity Score','Next Deepening'],
    views:[
      {id:'strategic_cockpit',name:'Strategic Cockpit',layout:'table',purpose:'project health and next strategic decision',fields:['Canon Node','PMO Health','Priority','Gap Score','Evidence Strength','Next Action']},
      {id:'trilogy_content_assets',name:'Trilogy Content Assets',layout:'table',purpose:'govern the 12 canon content asset packages',fields:['Part','Canon Node','Module','PMO Issue','Status','Maturity Score','Priority','Next Deepening']},
      {id:'c2_brain_center',name:'C2 Brain Center',layout:'table',purpose:'track the strategic memory hub and Markdown Brain rollout',fields:['Brain Layer','Artifact','Status','Next']},
      {id:'c3_gap_ranking',name:'C3 Gap Ranking',layout:'table',purpose:'rank capability gaps before execution',fields:['Capability Domain','Strategic Layer','Gap Score','Evidence Strength','Selected Gap','Next C4 Task']},
      {id:'c4_execution_board',name:'C4 Execution Board',layout:'board',purpose:'convert selected gaps into executable work',columns:['To Do','In Progress','Dry Run','Approval','Done','Backwritten']},
      {id:'evidence_ledger',name:'Evidence Ledger',layout:'table',purpose:'check whether work is proven',fields:['Work Item','Evidence Path','Evidence Strength','Accepted','Missing','Next Reuse']},
      {id:'evolution_review',name:'Evolution Review',layout:'table',purpose:'verify reusable learning',fields:['Evolution Note','What Changed','Next Reuse','Writeback Target','System Improvement','Canonical State']},
      {id:'roadmap',name:'Roadmap / Milestone',layout:'roadmap',purpose:'manage release sequence',milestones:['v2.7.1 Data Sync Patch','v2.8 Interactive Six-view Drilldown','v2.9 Content Asset View','v3.4 Content Asset Sync v1','v3.5 C2 Brain Phase 2']}
    ],
    metrics:['Trilogy Seed Coverage','Average Asset Maturity','Validation Gap','P0 Deepening Count','P0.5 Brain Count','C2 Brain Phase'],
    metric_values:{trilogy_seed_coverage:{value:100,unit:'%',note:'12/12 canon modules have seed content asset packages'},average_asset_maturity:{value:65,unit:'%',note:'314/480 after C2 Strategy+ upgrade'},validation_gap:{value:1,unit:'/5',note:'real validation remains the weakest link'},p0_deepening_count:{value:6,unit:'modules',note:'A4, B1, B2, B3, B4, C4'},p05_brain_count:{value:1,unit:'module',note:'C2 一个大脑'},c2_brain_phase:{value:2,unit:'phase',note:'Markdown Brain rollout'}},
    objects:['Portfolio','Project','Work Item','Gap','Task','Evidence','Evolution Note','Asset','Review','Approval Gate','Canonical Learning','Content Asset','Maturity Scorecard','Deepening Task','Brain Schema','Query Protocol','Writeback Protocol'],
    automation:['issue changed -> sync dashboard','weekly review -> evolution note','selected gap -> C4 task draft','evidence review -> accepted/missing/rejected','accepted learning -> canonical candidate','human approval -> canonical learning','content asset changed -> update PMO content view','maturity scorecard updated -> generate deepening priorities','C2 brain artifact changed -> update C2 Brain Center'],
    content_sync:{name:'PMO Content Asset Sync v1',status:'completed',scope:['12 module registry','12 seed asset packages','content asset index','maturity scorecard','P0/P0.5/P1 deepening priority'],reports:['docs/TRILOGY-CONTENT-ASSET-INDEX-v1.md','docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md','docs/PMO-TRILOGY-CONTENT-SYNC-v1.md'],current_state:'PMO now covers engineering governance, trilogy content asset governance, and C2 brain governance'},
    trilogy_summary:{parts:3,modules:12,seed_packages:12,coverage_pct:100,total_score:314,total_possible:480,average_score:'26.17/40',average_maturity_pct:65,strategy_plus:1,seed_plus:9,seed:2,real_validation_average:'1/5'},
    productization_gate:{total_score_min:30,evidence_min:4,validation_min:3,commercialization_min:4},
    trilogy_modules:trilogyModules,
    p0_deepening:p0Deepening,
    p05_deepening:p05Deepening,
    seed_items:items,
    gap_ranking:top?[{rank:1,issue:top.issue,gap:top.next||'top C3 gap',score:top.gap_score,formula:'maturity score + strategic centrality',selected:true,next_issue:nextTask?nextTask.issue:'C2 Brain Validation'}]:[],
    roadmap_current:['v2.7.1','v2.8','v2.9-content-assets','v3.4-content-asset-sync-v1','v3.5-c2-brain-phase2']
  };
  const js='window.YUANLI_PMO_V22='+JSON.stringify(obj,null,2)+';\n';
  fs.writeFileSync('docs/pmo-dashboard-data.js',js);
  console.log(`PMO dashboard synced: ${items.length} items, ${trilogyModules.length} content assets, C2=P0.5`);
})();
