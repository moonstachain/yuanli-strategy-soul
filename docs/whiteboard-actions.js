function yuanliCurrentNode(){
  const checked=document.querySelector('input[name="node"]:checked');
  if(!checked) return 'unknown';
  return checked.id.replace('n','');
}

function yuanliInfo(node){
  const map=window.YUANLI_MAP_V11||{};
  return map[node]||{status:'draft',upstream:'',downstream:'',control:'',bottleneck:''};
}

function yuanliBase(node,info){
  return 'Node: '+node+'\nStatus: '+info.status+'\nUpstream: '+info.upstream+'\nDownstream: '+info.downstream+'\nControl: '+info.control+'\nBlocker: '+info.bottleneck;
}

function yuanliOutputText(kind,node,info){
  const base=yuanliBase(node,info);
  if(kind==='strategy') return 'AI Strategy Draft\n\n'+base+'\n\nOptions:\nEvidence:\nUncertainty:\nRecommendation:';
  if(kind==='approval') return 'Human Approval Request\n\n'+base+'\n\nDecision needed:\nOptions:\nRisk:\nApproval boundary:';
  if(kind==='dryrun') return 'Dry-run Plan\n\n'+base+'\n\nSteps:\nExpected output:\nRisk check:\nNo external write.';
  if(kind==='feedback') return 'Feedback Note\n\n'+base+'\n\nWhat happened:\nEvidence:\nGap:\nNext:';
  if(kind==='evolution') return 'Evolution Note\n\n'+base+'\n\nInput:\nOutput:\nAcceptance:\nWriteback:\nNext reuse:';
  if(kind==='task') return 'Codex-ready Task\n\n'+base+'\n\nInput:\nOutput:\nAcceptance:\nWriteback:';
  return '# '+node+'\n\n'+base+'\nWriteback:';
}

function yuanliWriteOutput(kind){
  const node=yuanliCurrentNode();
  const info=yuanliInfo(node);
  const box=document.getElementById('whiteboard-output');
  if(!box) return;
  box.value=yuanliOutputText(kind,node,info);
}

function yuanliPanelV12(){
  const box=document.getElementById('whiteboard-output');
  if(!box) return;
  const panel=box.closest('section');
  if(!panel) return;
  const h2=panel.querySelector('h2');
  if(h2) h2.textContent='Human-Agent Negotiation Panel';
}

(function(){
  const s=document.createElement('script');
  s.src='whiteboard-map-v1.1.js';
  document.head.appendChild(s);
  setTimeout(yuanliPanelV12,0);
})();
