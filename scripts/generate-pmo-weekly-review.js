#!/usr/bin/env node
const fs=require('fs');
const https=require('https');

const repo=process.env.GITHUB_REPOSITORY||'moonstachain/yuanli-strategy-soul';
const token=process.env.GITHUB_TOKEN;
const [owner,name]=repo.split('/');
const now=new Date();
const weekAgo=new Date(now.getTime()-7*24*60*60*1000);

function request(path){
  return new Promise((resolve,reject)=>{
    const opts={hostname:'api.github.com',path,headers:{'User-Agent':'yuanli-pmo-weekly','Accept':'application/vnd.github+json'}};
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
function typeOf(issue){
  const t=field(issue.body,'Type');
  if(/C3 Gap/i.test(t)||/C3 Gap/i.test(issue.title)) return 'C3 Gap';
  if(/C4 Task/i.test(t)||/C4 Task/i.test(issue.title)) return 'C4 Task';
  if(/Evidence Review/i.test(t)||/Evidence Review/i.test(issue.title)) return 'Evidence Review';
  return 'Other';
}
function score(issue){
  const v=field(issue.body,'Gap Score');
  const n=(v.match(/\d+/)||[])[0];
  return n?Number(n):0;
}
function link(issue){return `[#${issue.number}](${issue.html_url}) ${issue.title}`}
function rows(items){return items.length?items.map(i=>`- ${link(i)} · ${typeOf(i)} · score ${score(i)||'-'} · state ${i.state}`).join('\n'):'- None';}
function pct(a,b){return b?Math.round((a/b)*100)+'%':'0%'}

(async()=>{
  const all=await request(`/repos/${owner}/${name}/issues?state=all&per_page=100`);
  const issues=all.filter(i=>!i.pull_request);
  const relevant=issues.filter(i=>['C3 Gap','C4 Task','Evidence Review'].includes(typeOf(i)));
  const openedThisWeek=relevant.filter(i=>new Date(i.created_at)>=weekAgo);
  const closedThisWeek=relevant.filter(i=>i.closed_at&&new Date(i.closed_at)>=weekAgo);
  const open=relevant.filter(i=>i.state==='open');
  const gaps=open.filter(i=>typeOf(i)==='C3 Gap').sort((a,b)=>score(b)-score(a));
  const tasks=open.filter(i=>typeOf(i)==='C4 Task');
  const evidence=open.filter(i=>typeOf(i)==='Evidence Review');
  const evidenceCoverage=pct(evidence.length,Math.max(1,tasks.length+gaps.length));
  const topP0=gaps[0]||tasks[0]||evidence[0];
  const md=`# PMO Weekly Review\n\nGenerated: ${now.toISOString()}\nVersion: v2.5\nRepository: ${repo}\n\n## 1. Executive Summary\n\n- Open PMO items: ${open.length}\n- New this week: ${openedThisWeek.length}\n- Closed this week: ${closedThisWeek.length}\n- Open C3 gaps: ${gaps.length}\n- Open C4 tasks: ${tasks.length}\n- Open evidence reviews: ${evidence.length}\n- Evidence coverage signal: ${evidenceCoverage}\n\n## 2. This Week New Items\n\n${rows(openedThisWeek)}\n\n## 3. This Week Closed Items\n\n${rows(closedThisWeek)}\n\n## 4. C3 Gap Ranking\n\n${rows(gaps)}\n\n## 5. C4 Execution Queue\n\n${rows(tasks)}\n\n## 6. Evidence Review Queue\n\n${rows(evidence)}\n\n## 7. Blockers and Risks\n\n- Items without strong evidence should remain yellow until Evidence Review is accepted.\n- GitHub Projects custom fields still need UI or GraphQL configuration.\n- Weekly review is generated from issues, not yet from full Project fields.\n\n## 8. Next Week Only P0\n\n${topP0?`- ${link(topP0)}`:'- Define next C3 P0 gap'}\n\n## 9. Writeback\n\n- docs/pmo-weekly-review-latest.md\n- PMO Dashboard\n- brain/evolution-notes when a weekly strategic learning is accepted\n`;
  fs.writeFileSync('docs/pmo-weekly-review-latest.md',md);
  console.log('PMO weekly review generated');
})();
