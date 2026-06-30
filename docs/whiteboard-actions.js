function yuanliCurrentNode(){
  const checked = document.querySelector('input[name="node"]:checked');
  if(!checked) return 'unknown';
  return checked.id.replace('n','');
}

function yuanliInfo(node){
  const map = window.YUANLI_MAP_V11 || {};
  return map[node] || {};
}

function yuanliWriteOutput(kind){
  const node = yuanliCurrentNode();
  const info = yuanliInfo(node);
  const box = document.getElementById('whiteboard-output');
  if(!box) return;
  if(kind === 'task'){
    box.value = 'Task: '+node+'\n\nStatus: '+(info.status||'')+'\nControl: '+(info.control||'')+'\nBlocker: '+(info.bottleneck||'')+'\n\nOutput:\n\nAcceptance:\n\nWriteback:';
  } else {
    box.value = '# '+node+'\n\nStatus: '+(info.status||'')+'\nUpstream: '+(info.upstream||'')+'\nDownstream: '+(info.downstream||'')+'\nControl: '+(info.control||'')+'\nBlocker: '+(info.bottleneck||'')+'\nWriteback:';
  }
}
