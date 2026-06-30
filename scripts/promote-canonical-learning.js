#!/usr/bin/env node
const fs=require('fs');
const source=process.argv[2];
const decision=process.argv[3];
if(!source||!decision){console.error('Usage: node scripts/promote-canonical-learning.js <evolution_note> <approve|reject|candidate>');process.exit(1)}
if(!['approve','reject','candidate'].includes(decision)){console.error('decision must be approve, reject, or candidate');process.exit(1)}
const text=fs.readFileSync(source,'utf8');
const date=new Date().toISOString().slice(0,10);
fs.mkdirSync('brain/canonical-learning',{recursive:true});
const state=decision==='approve'?'approved':decision==='reject'?'rejected':'candidate';
const out=`brain/canonical-learning/${date}-${source.replace(/[^a-zA-Z0-9]/g,'_')}.md`;
const md=`# Canonical Learning Gate\n\nDate: ${date}\nSource: ${source}\nState: ${state}\n\n## Decision\n\n${decision}\n\n## Human Approval Required\n\nOnly approved items may be treated as canonical learning. Candidate items may inform future reviews but must not overwrite the Canon.\n\n## Source Note\n\n${text}\n`;
fs.writeFileSync(out,md);
console.log(`Canonical learning record written to ${out}`);
