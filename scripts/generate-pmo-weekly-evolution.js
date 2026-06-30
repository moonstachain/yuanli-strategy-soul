#!/usr/bin/env node
const fs=require('fs');

const now=new Date();
const date=now.toISOString().slice(0,10);
const reviewPath='docs/pmo-weekly-review-latest.md';
const outPath=`brain/evolution-notes/${date}-weekly-pmo-review.md`;
const review=fs.existsSync(reviewPath)?fs.readFileSync(reviewPath,'utf8'):'# PMO Weekly Review\n\nNo review found.';
function section(name){
  const re=new RegExp(`## ${name}\\n([\\s\\S]*?)(?=\\n## |$)`);
  const m=review.match(re);
  return m?m[1].trim():'- None';
}
const md=`# Evolution Note · Weekly PMO Review\n\nDate: ${date}\nSource: ${reviewPath}\nVersion: v2.6\n\n## Input\n\nWeekly PMO Review generated from GitHub Issues.\n\n## Executive Signal\n\n${section('1. Executive Summary')}\n\n## Strategic Learning\n\nThe PMO loop is now producing a reusable weekly management signal. The key learning should be reviewed by a human before being treated as canonical strategy.\n\n## C3 / C4 / Evidence State\n\n### C3 Gap Ranking\n\n${section('4. C3 Gap Ranking')}\n\n### C4 Execution Queue\n\n${section('5. C4 Execution Queue')}\n\n### Evidence Review Queue\n\n${section('6. Evidence Review Queue')}\n\n## Risks\n\n${section('7. Blockers and Risks')}\n\n## Next P0\n\n${section('8. Next Week Only P0')}\n\n## Writeback\n\n- brain/evolution-notes/${date}-weekly-pmo-review.md\n- docs/pmo-weekly-review-latest.md\n- PMO Dashboard\n\n## Next Reuse\n\nUse this weekly evolution note as the input for the next PMO review and for deciding whether the top C3 gap should become a C4 execution task.\n`;
fs.mkdirSync('brain/evolution-notes',{recursive:true});
fs.writeFileSync(outPath,md);
console.log(`PMO weekly evolution note generated: ${outPath}`);
