function yuanliCurrentNode(){
  const checked=document.querySelector('input[name="node"]:checked');
  if(!checked) return 'unknown';
  return checked.id.replace('n','');
}

function yuanliInfo(node){
  const map=window.YUANLI_MAP_V11||{};
  return map[node]||{status:'draft',upstream:'',downstream:'',control:'',bottleneck:''};
}

function yuanliContract(node){
  const data=window.YUANLI_AGENT_CBM_V12||{};
  const list=data.agent_contracts||[];
  const fallback={id:'default_'+node,node:node,domain:'matrix',layer:'strategy',status:'draft',level:'L1',control:'to_define',blocker:'missing_contract',gates:['status_change'],signals:['missing'],writeback:['whiteboard']};
  return Object.assign({},data.contract_defaults||{},list.find(x=>x.node===node)||fallback);
}

function yuanliJoin(v){ return Array.isArray(v) ? v.join(', ') : (v||''); }

function yuanliBase(node,info){
  const c=yuanliContract(node);
  return 'Node: '+node+'\nStatus: '+info.status+'\nUpstream: '+info.upstream+'\nDownstream: '+info.downstream+'\nControl: '+info.control+'\nBlocker: '+info.bottleneck+'\nDomain: '+c.domain+'\nLayer: '+c.layer+'\nLevel: '+c.level+'\nGates: '+yuanliJoin(c.gates)+'\nSignals: '+yuanliJoin(c.signals)+'\nWriteback: '+yuanliJoin(c.writeback);
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

function yuanliRenderContract(){
  const box=document.getElementById('whiteboard-output');
  if(!box) return;
  const panel=box.closest('section');
  if(!panel) return;
  const h2=panel.querySelector('h2');
  if(h2) h2.textContent='Human-Agent Negotiation Panel · v1.7';
  let card=document.getElementById('agent-contract-card');
  if(!card){
    card=document.createElement('div');
    card.id='agent-contract-card';
    card.className='task';
    panel.insertBefore(card,box);
  }
  const node=yuanliCurrentNode();
  const c=yuanliContract(node);
  card.innerHTML='<b>Agent Contract</b><br>node: '+c.node+' · domain: '+c.domain+' · layer: '+c.layer+' · level: '+c.level+'<br>status: '+c.status+' · control: '+c.control+' · blocker: '+c.blocker+'<br>gates: '+yuanliJoin(c.gates)+'<br>signals: '+yuanliJoin(c.signals)+'<br>writeback: '+yuanliJoin(c.writeback)+'<br>human: '+c.human_role+' · agent: '+c.agent_role+'<br>evidence: '+yuanliJoin(c.evidence_required)+'<br>acceptance: '+yuanliJoin(c.acceptance_criteria);
}

function yuanliEnsureUI(){
  document.title='Yuanli Whiteboard OS v1.7';
  const brand=document.querySelector('.brand div:last-child');
  if(brand) brand.textContent='原力战略白板 OS · v1.7';
  const bar=document.querySelector('.actionbar');
  if(bar) bar.innerHTML='<button onclick="yuanliWriteOutput(\'strategy\')">AI Strategy Draft</button><button onclick="yuanliWriteOutput(\'approval\')">Approval Request</button><button onclick="yuanliWriteOutput(\'task\')">Codex Task</button><button onclick="yuanliWriteOutput(\'dryrun\')">Dry-run Plan</button><button onclick="yuanliWriteOutput(\'feedback\')">Feedback Note</button><button onclick="yuanliWriteOutput(\'evolution\')">Evolution Note</button>';
}

function yuanliPanelV12(){
  yuanliEnsureUI();
  yuanliRenderContract();
  document.querySelectorAll('input[name="node"]').forEach(x=>x.addEventListener('change',yuanliRenderContract));
}

(function(){
  const s=document.createElement('script');
  s.src='whiteboard-map-v1.1.js';
  document.head.appendChild(s);
  const a=document.createElement('script');
  a.src='whiteboard-agent-cbm-v1.2.js';
  document.head.appendChild(a);
  setTimeout(yuanliPanelV12,50);
})();
