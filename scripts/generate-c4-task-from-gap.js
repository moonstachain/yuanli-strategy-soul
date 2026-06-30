#!/usr/bin/env node
const fs=require('fs');
const https=require('https');

const repo=process.env.GITHUB_REPOSITORY||'moonstachain/yuanli-strategy-soul';
const token=process.env.GITHUB_TOKEN;
const issueNumber=process.argv[2]||process.env.C3_GAP_ISSUE;
if(!issueNumber){console.error('Usage: node scripts/generate-c4-task-from-gap.js <issue_number>');process.exit(1)}
const [owner,name]=repo.split('/');
function request(path){return new Promise((resolve,reject)=>{const opts={hostname:'api.github.com',path,headers:{'User-Agent':'yuanli-task-bridge','Accept':'application/vnd.github+json'}}; if(token) opts.headers.Authorization=`Bearer ${token}`; https.get(opts,res=>{let data='';res.on('data',d=>data+=d);res.on('end',()=>res.statusCode>=300?reject(new Error(data)):resolve(JSON.parse(data)));}).on('error',reject);});}
function field(body,label){const re=new RegExp(`## ${label}\\n([\\s\\S]*?)(?=\\n## |$)`,'i');const m=(body||'').match(re);return m?m[1].trim():'';}
(async()=>{
 const issue=await request(`/repos/${owner}/${name}/issues/${issueNumber}`);
 const gap=field(issue.body,'Gap')||issue.title;
 const score=field(issue.body,'Gap Score')||'unknown';
 const evidence=field(issue.body,'Evidence Strength')||'unknown';
 const next=field(issue.body,'Next C4 Task')||'Define next C4 task';
 const md=`# C4 Task Draft\n\n## Type\nC4 Task\n\n## Source Gap\n#${issue.number}\n\n## Objective\n${next}\n\n## Context\n${gap}\n\n## Gap Score\n${score}\n\n## Evidence Strength\n${evidence}\n\n## Steps\n1. Confirm source gap and score.\n2. Define expected output.\n3. Execute in a reversible way.\n4. Create Evidence Review.\n5. Write Evidence and Evolution Note.\n\n## Acceptance Criteria\n- Task links to source C3 gap.\n- Evidence Review exists.\n- Writeback target is explicit.\n- Human approval is recorded before project state changes.\n\n## Evidence Required\n- GitHub issue link\n- changed files or output artifact\n- evidence note\n- evolution note\n\n## Human Approval Boundary\nThis script creates a draft only. It must not create or close issues without human approval.\n`;
 fs.mkdirSync('drafts',{recursive:true});
 const out=`drafts/c4-task-from-${issue.number}.md`;
 fs.writeFileSync(out,md);
 console.log(`C4 task draft written to ${out}`);
})();
