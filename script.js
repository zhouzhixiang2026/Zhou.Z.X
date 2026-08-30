const tools = [
  {name:'电商评论洞察工具',desc:'快速识别评论里的真实需求、痛点与高频反馈。',tag:'E-COMMERCE',url:'https://0to8v1q8f-tool01-3pt82jg.maozi.io/'},
  {name:'违禁词清洗工具',desc:'批量检查并清理内容中的敏感与风险词汇。',tag:'CONTENT',url:'https://51qliux1z-tool02-3pt82jg.maozi.io/'},
  {name:'表格数据清洗统计工具',desc:'让杂乱表格快速变得清晰、可读、可统计。',tag:'DATA',url:'https://pdlw3euhl-tool03-3pt82jg.maozi.io/'},
  {name:'批量商品抠图工具',desc:'批量处理商品图，减少重复的图片编辑工作。',tag:'IMAGE',url:'https://h1bk7mfd-tool04-3pt82jg.maozi.io/'},
  {name:'多文档批量合并去重工具',desc:'合并多个文件，自动整理并去掉重复内容。',tag:'FILES',url:'https://8hp3onkqv-tool05-3pt82jg.maozi.io/'},
  {name:'竞品评论拆解卖点提炼工具',desc:'从竞品反馈中提炼卖点，辅助产品与营销决策。',tag:'INSIGHT',url:'https://l3nrrah3u-tool06-3pt82jg.maozi.io/'},
  {name:'短视频爆款文案拆解工具',desc:'拆解高表现内容，找到值得复用的表达结构。',tag:'VIDEO',url:'https://7i6emghtw-tool07-3pt82jg.maozi.io/'},
  {name:'文件批量重命名归档工具',desc:'统一文件命名规则，让资料归档井然有序。',tag:'WORKFLOW',url:'https://4gft1l3tp-tool08-3pt82jg.maozi.io/'},
  {name:'门店短视频引流文案生成工具',desc:'围绕门店场景，快速生成更有转化力的文案。',tag:'LOCAL',url:'https://xjjcvcuzg-tool09-3pt82jg.maozi.io/'},
  {name:'简历 AI 智能优化排版工具',desc:'优化简历表达与版式，让优势被更好地看见。',tag:'CAREER',url:'https://7sfhcshlv-tool10-3pt82jg.maozi.io/'}
];

const grid = document.querySelector('#toolGrid');
grid.innerHTML = tools.map((tool, index) => `
  <article class="tool-card reveal" style="transition-delay:${Math.min(index * 35, 280)}ms">
    <div class="card-top"><span class="card-number">${String(index + 1).padStart(2,'0')}</span><span class="card-tag">${tool.tag}</span></div>
    <div><h3>${tool.name}</h3><p>${tool.desc}</p></div>
    <a class="card-link" href="${tool.url}" target="_blank" rel="noopener noreferrer"><span>立即体验工具</span><span>↗</span></a>
  </article>`).join('');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
