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
(async()=>{
  const issues=await request(`/repos/${owner}/${name}/issues?state=open&per_page=100`);
  const items=issues.filter(i=>!i.pull_request).map(i=>{
    const t=typeOf(i);
    const e=evidenceOf(i,t);
    const s=score(i)|| (t==='task'?50:t==='evidence'?50:0);
    return {issue:'#'+i.number,node:nodeOf(t),type:t,domain:domainOf(t),layer:layerOf(t),status:t==='evidence'?'qa':'ready',health:healthOf(t,e),priority:t==='gap'?'P0':(t==='task'?'P1':'P2'),gap_score:s,evidence:e,next:nextOf(i,t)};
  }).filter(x=>['gap','task','evidence'].includes(x.type));
  items.sort((a,b)=>b.gap_score-a.gap_score);
  const top=items.find(x=>x.type==='gap');
  const nextTask=items.find(x=>x.type==='task');
  const obj={
    version:'v3.3',
    ui_version:'v2.8',
    data_patch:'v2.7.1',
    sync:{mode:'github_actions',source:'issues',updated_at:new Date().toISOString()},
    fields:['Canon Node','Work Type','Strategic Layer','Capability Domain','Status','PMO Health','Priority','Gap Score','Evidence Strength','Agent Level','Approval Gate','Writeback Target','Owner','Review Cadence','Acceptance State','Canonical State'],
    views:[
      {id:'strategic_cockpit',name:'Strategic Cockpit',layout:'table',purpose:'project health and next strategic decision',fields:['Canon Node','PMO Health','Priority','Gap Score','Evidence Strength','Next Action']},
      {id:'c3_gap_ranking',name:'C3 Gap Ranking',layout:'table',purpose:'rank capability gaps before execution',fields:['Capability Domain','Strategic Layer','Gap Score','Evidence Strength','Selected Gap','Next C4 Task']},
      {id:'c4_execution_board',name:'C4 Execution Board',layout:'board',purpose:'convert selected gaps into executable work',columns:['To Do','In Progress','Dry Run','Approval','Done','Backwritten']},
      {id:'evidence_ledger',name:'Evidence Ledger',layout:'table',purpose:'check whether work is proven',fields:['Work Item','Evidence Path','Evidence Strength','Accepted','Missing','Next Reuse']},
      {id:'evolution_review',name:'Evolution Review',layout:'table',purpose:'verify reusable learning',fields:['Evolution Note','What Changed','Next Reuse','Writeback Target','System Improvement','Canonical State']},
      {id:'roadmap',name:'Roadmap / Milestone',layout:'roadmap',purpose:'manage release sequence',milestones:['v2.7.1 Data Sync Patch','v2.8 Interactive Six-view Drilldown','v2.9 GitHub Projects Native Setup','v3.0 PMO Metrics Engine','v3.1 Task Bridge','v3.2 Evidence Acceptance Loop','v3.3 Canonical Learning Gate']}
    ],
    metrics:['Evidence Coverage','Backwrite Rate','Evolution Note Rate','C3 Gap Close Rate','Blocked Age'],
    objects:['Portfolio','Project','Work Item','Gap','Task','Evidence','Evolution Note','Asset','Review','Approval Gate','Canonical Learning'],
    automation:['issue changed -> sync dashboard','weekly review -> evolution note','selected gap -> C4 task draft','evidence review -> accepted/missing/rejected','accepted learning -> canonical candidate','human approval -> canonical learning'],
    seed_items:items,
    gap_ranking:top?[{rank:1,issue:top.issue,gap:top.next||'top C3 gap',score:top.gap_score,formula:'parsed from issue body',selected:true,next_issue:nextTask?nextTask.issue:''}]:[],
    roadmap_current:['v2.7.1','v2.8','v2.9','v3.0','v3.1','v3.2','v3.3']
  };
  const js='window.YUANLI_PMO_V22='+JSON.stringify(obj,null,2)+';\n';
  fs.writeFileSync('docs/pmo-dashboard-data.js',js);
  console.log(`PMO dashboard synced: ${items.length} items`);
})();
