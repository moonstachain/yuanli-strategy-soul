function yuanliCurrentNode(){
  const checked = document.querySelector('input[name="node"]:checked');
  if(!checked) return 'unknown';
  return checked.id.replace('n','');
}

function yuanliInfo(node){
  const map = window.YUANLI_MAP_V11 || {};
  return map[node] || {status:'draft',upstream:'',downstream:'',control:'',bottleneck:''};
}

function yuanliWriteOutput(kind){
  const node = yuanliCurrentNode();
  const info = yuanliInfo(node);
  const box = document.getElementById('whiteboard-output');
  if(!box) return;
  const base = 'Node: '+node+'\nStatus: '+info.status+'\nUpstream: '+info.upstream+'\nDownstream: '+info.downstream+'\nControl: '+info.control+'\nBlocker: '+info.bottleneck;
  box.value = kind === 'task' ? base+'\n\nOutput:\nAcceptance:\nWriteback:' : '# '+node+'\n\n'+base+'\nWriteback:';
}

(function(){
  const s=document.createElement('script');
  s.src='whiteboard-map-v1.1.js';
  document.head.appendChild(s);
})();
