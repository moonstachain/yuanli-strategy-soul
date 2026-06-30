(function(){
  const data = window.YUANLI_WHITEBOARD || {meta:{}, nodes:[]};
  const nodes = data.nodes || [];
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));

  const tree = document.getElementById('tree');
  const detail = document.getElementById('detail');
  const axiom = document.getElementById('axiom');
  const northstar = document.getElementById('northstar');
  const version = document.getElementById('version');

  if (axiom) axiom.textContent = data.meta.axiom || '';
  if (northstar) northstar.textContent = data.meta.northstar || '';
  if (version) version.textContent = data.meta.version || '';

  function esc(value){
    return String(value == null ? '' : value)
      .replaceAll('&','&amp;')
      .replaceAll('<','&lt;')
      .replaceAll('>','&gt;')
      .replaceAll('"','&quot;')
      .replaceAll("'",'&#39;');
  }

  function arr(value){
    if (!value || !value.length) return '<span class="empty">待补齐</span>';
    return '<ul>' + value.map(item => '<li>' + esc(item) + '</li>').join('') + '</ul>';
  }

  function card(title, body){
    const content = Array.isArray(body) ? arr(body) : '<p>' + esc(body || '待补齐') + '</p>';
    return '<article class="cell"><b>' + esc(title) + '</b>' + content + '</article>';
  }

  function nodeMarkdown(n){
    const lines = [];
    lines.push('# ' + n.id + ' · ' + n.name);
    lines.push('');
    lines.push('Part: ' + n.part);
    lines.push('Status: ' + n.status);
    lines.push('');
    lines.push('## Definition');
    lines.push(n.definition || '');
    lines.push('');
    lines.push('## Not');
    lines.push(n.not || '');
    lines.push('');
    lines.push('## First Principle Question');
    lines.push(n.first_principle_question || '');
    ['inputs','standards','outputs','writeback','upstream','downstream','control_points','risks','tasks','evidence'].forEach(key => {
      lines.push('');
      lines.push('## ' + key);
      (n[key] || []).forEach(item => lines.push('- ' + item));
    });
    return lines.join('\n');
  }

  function render(id){
    const n = byId[id] || nodes[0];
    if (!n) return;
    document.querySelectorAll('[data-node]').forEach(btn => btn.classList.toggle('active', btn.dataset.node === n.id));
    detail.innerHTML =
      '<section class="node-hero">' +
        '<div><span class="tag">' + esc(n.part) + ' · ' + esc(n.status) + '</span><h2>' + esc(n.id) + ' · ' + esc(n.name) + '</h2><p>' + esc(n.definition) + '</p></div>' +
        '<div class="question"><b>第一性问题</b><p>' + esc(n.first_principle_question) + '</p></div>' +
      '</section>' +
      '<section class="grid">' +
        card('不是它', n.not) +
        card('输入', n.inputs) +
        card('判断标准', n.standards) +
        card('输出', n.outputs) +
        card('回写', n.writeback) +
        card('上游', n.upstream) +
        card('下游', n.downstream) +
        card('控制点', n.control_points) +
        card('风险', n.risks) +
        card('Evidence', n.evidence) +
      '</section>' +
      '<section class="task"><b>下一步任务</b>' + arr(n.tasks) + '</section>' +
      '<section class="actionbar"><button id="copyNode">复制节点 Markdown</button><button id="copyEvidence">复制 Evidence 骨架</button></section>' +
      '<textarea id="out" placeholder="复制结果显示在这里"></textarea>';

    document.getElementById('copyNode').onclick = function(){ document.getElementById('out').value = nodeMarkdown(n); };
    document.getElementById('copyEvidence').onclick = function(){ document.getElementById('out').value = '# Evidence · ' + n.id + ' ' + n.name + '\n\nStatus: seed\n\n## Source\n\n## Finding\n\n## What changed\n\n## Writeback\n'; };
    history.replaceState(null, '', '#' + n.id);
  }

  function buildTree(){
    if (!tree) return;
    tree.innerHTML = nodes.map(n => '<button data-node="' + esc(n.id) + '"><b>' + esc(n.id) + ' ' + esc(n.name) + '</b><span>' + esc(n.part) + ' · ' + esc(n.status) + '</span></button>').join('');
    tree.querySelectorAll('[data-node]').forEach(btn => btn.onclick = function(){ render(btn.dataset.node); });
  }

  buildTree();
  render((location.hash || '#A1').slice(1));
})();
