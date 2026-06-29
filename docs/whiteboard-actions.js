function yuanliCurrentNode(){
  const checked = document.querySelector('input[name="node"]:checked');
  if(!checked) return 'unknown';
  return checked.id.replace('n','');
}

function yuanliWriteOutput(kind){
  const node = yuanliCurrentNode();
  const box = document.getElementById('whiteboard-output');
  if(!box) return;
  if(kind === 'task'){
    box.value = 'Task for '+node+'\n\nInput:\n\nOutput:\n\nAcceptance:\n\nWriteback:';
  } else {
    box.value = '# '+node+'\n\nQuestion:\n\nOutput:\n\nWriteback:';
  }
}
