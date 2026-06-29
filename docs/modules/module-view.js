function nav(current='modules'){
  const active = key => current === key ? ' class="active"' : '';
  return `<header class="topbar">
    <div class="brand"><div class="sigil">模</div><div>原力战略三部曲 · Modules</div></div>
    <nav class="nav">
      <a href="../index.html">Home</a>
      <a href="../trilogy-concept-map.html">Canon Map</a>
      <a${active('modules')} href="index.html">Modules</a>
      <a href="../asset.html">Asset Tool</a>
      <a href="../startup.html">Startup Tool</a>
      <a href="../os.html">OS Tool</a>
      <a class="external" href="https://github.com/moonstachain/yuanli-strategy-soul">GitHub</a>
    </nav>
  </header>`;
}

function list(items){
  return `<div class="list">${items.map(x=>`<div class="item"><b>${x.split('：')[0]}</b><span>${x.includes('：')?x.substring(x.indexOf('：')+1):x}</span></div>`).join('')}</div>`;
}

function section(title,body){
  return `<section class="section panel"><div class="pad"><div class="tag">${title}</div>${body}</div></section>`;
}

function toolHref(tool){
  if(tool === 'Asset Tool') return '../asset.html';
  if(tool === 'Startup Tool') return '../startup.html';
  if(tool === 'OS Tool') return '../os.html';
  return '../trilogy-concept-map.html';
}

function renderIndex(){
  document.title='Modules · 原力战略三部曲十二模块';
  document.body.innerHTML=`<main class="shell">
    ${nav('modules')}
    <section class="hero">
      <div class="hero-card"><div class="pad">
        <div class="eyebrow">L5 · Module Index</div>
        <h1>十二核心模块<br/><span>可执行正典入口</span></h1>
        <p class="lead">这里不是概念目录，而是十二个可执行系统组件。每个模块都带定义、边界、输入、判断标准、输出物、回写位置和下一步。</p>
        <div class="formula">索引判定：先选择所处阶段，再进入模块子页；每个模块必须能生成下一步行动或回写。</div>
      </div></div>
      <aside class="hero-card"><div class="pad metrics">
        <div class="metric"><b>12</b><span>三部各四步，完整覆盖 Asset、Startup、OS。</span></div>
        <div class="metric"><b>L5-L7</b><span>模块页从正典说明进入任务、陷阱和验收。</span></div>
        <div class="metric"><b>writeback</b><span>每个模块都要求写回文脉、大脑、地图、链路或母体。</span></div>
      </div></aside>
    </section>
    <section class="section">
      <div class="section-head"><div><h2>模块索引</h2><p class="sub">点击进入独立子页；模块卡片按所处阶段和工具接口标记。</p></div><span class="state celadon">D8 · compressed</span></div>
      <div class="grid3">${window.YUANLI_MODULES.map(m=>`<a class="module-card" href="${m.slug}">
        <div class="tag">${m.id} · ${m.label}</div>
        <h3>${m.name}</h3>
        <p>${m.subtitle}</p>
        <div class="meta"><span class="state slate">${m.part}</span><span class="state celadon">${m.tool}</span></div>
      </a>`).join('')}</div>
    </section>
    <footer class="footer">Modules · 原力战略三部曲</footer>
  </main>`;
}

function renderModule(m){
  document.title=`${m.id} · ${m.name} · 原力战略三部曲模块子页`;
  document.body.innerHTML=`<main class="shell">
    ${nav('modules')}
    <section class="hero">
      <div class="hero-card"><div class="pad">
        <div class="eyebrow">Module Page · ${m.id} · ${m.label}</div>
        <h1>${m.name}<br/><span>${m.subtitle}</span></h1>
        <p class="lead">${m.definition}</p>
        <div class="formula">所属：${m.part}
工具接口：${m.tool}
第一性问题：${m.question}</div>
        <div class="cta-row"><a class="cta" href="index.html">返回模块索引</a><a class="ghost" href="../trilogy-concept-map.html#${m.id}">返回正典地图</a><a class="ghost" href="${toolHref(m.tool)}">进入工具</a></div>
      </div></div>
      <aside class="hero-card"><div class="pad">
        <div class="tag">First Principle</div>
        <p class="quote">${m.firstPrinciple}</p>
      </div></aside>
    </section>
    <section class="section">
      <div class="grid3">
        <article class="decision-card"><span class="state slate">输入</span><h3>先准备材料</h3><p>${m.inputs[0] || '先补齐本模块输入。'}</p></article>
        <article class="decision-card"><span class="state seal">判断</span><h3>再确认成立标准</h3><p>${m.standards[0] || '需要可验证判断标准。'}</p></article>
        <article class="decision-card"><span class="state celadon">回写</span><h3>最后写回系统</h3><p>${m.writeback.join(' / ')}</p></article>
      </div>
    </section>
    ${section('01 · 定义',`<h2>它是什么</h2><p class="lead">${m.definition}</p>`)}
    ${section('02 · 不是它',`<h2>边界与误区</h2><div class="formula">${m.not}</div>`)}
    ${section('03 · 第一性问题',`<h2>${m.question}</h2><p class="sub">这个问题是本模块不可替代的存在理由。回答不了这个问题，模块就只是概念装饰。</p>`)}
    ${section('04 · 原子模块',`<h2>内部组件</h2>${list(m.atoms)}`)}
    <div class="two-col">${section('05 · 输入材料',`<h2>进入本模块之前必须准备什么</h2>${list(m.inputs)}`)}${section('06 · 判断标准',`<h2>怎么判断它是否成立</h2>${list(m.standards)}`)}</div>
    <div class="two-col">${section('07 · 输出物',`<h2>本模块必须产出什么</h2>${list(m.outputs)}`)}${section('08 · 回写位置',`<h2>输出必须写回哪里</h2>${list(m.writeback)}`)}</div>
    <div class="two-col">${section('09 · 可执行任务',`<h2>L7 · 人机协作任务</h2>${list(m.tasks)}`)}${section('10 · 常见陷阱',`<h2>反模式清单</h2>${list(m.traps)}`)}</div>
    ${section('11 · 下一步接口',`<h2>递进关系</h2><div class="formula">${m.next}</div>`)}
    <section class="section data-pulse"><div class="section-head"><div><h2>最终验收</h2><p class="sub">有输入、有判断、有输出、有回写、有下一步，才算模块成立。</p></div><span class="state celadon">acceptance</span></div><div class="formula">这个模块是否有明确输入？
是否有清晰判断标准？
是否生成了可复用输出？
是否写回到文脉、大脑、地图、链路或母体？
是否让下一次更强？</div></section>
    <footer class="footer">${m.id} · ${m.name} · 原力战略三部曲模块子页</footer>
  </main>`;
}

const id=document.body.dataset.module;
if(id){ renderModule(window.YUANLI_BY_ID[id]); } else { renderIndex(); }
