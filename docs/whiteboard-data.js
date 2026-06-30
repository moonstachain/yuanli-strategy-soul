const YUANLI_NODE_DEFAULTS = {
  type: 'Canon Node',
  status: 'seed',
  inputs: [],
  standards: [],
  outputs: [],
  writeback: [],
  upstream: [],
  downstream: [],
  control_points: [],
  risks: [],
  tasks: [],
  evidence: []
};

function ynode(node){ return Object.assign({}, YUANLI_NODE_DEFAULTS, node); }

window.YUANLI_WHITEBOARD = {
  meta: {
    version: 'v1.0-data-structure',
    title: '原力战略白板 OS',
    axiom: 'ʸx：做会自我繁殖的事，不做一次性的事。',
    northstar: '把创始人的不可复制性，变成可复利、可传承、可系统化的事业生命体。'
  },
  nodes: [
    ynode({id:'A1', part:'原力资产', name:'发现母体', status:'sample', definition:'识别持续生成差异的底层生命结构。', not:'不是兴趣、标签、职业优势或人设包装。', first_principle_question:'我身上还剩什么会持续生成差异？', inputs:['高能事件','长期被问的问题','代表性作品'], standards:['解释过去选择','持续生成差异'], outputs:['母体候选清单','母题清单'], writeback:['一纸文脉','原力母体总卡'], upstream:['个人经历'], downstream:['A2','C1'], control_points:['母体候选质量'], risks:['把技能误判为母体'], tasks:['完成 3 个母体候选'], evidence:['PMO #86']}),
    ynode({id:'A2', part:'原力资产', name:'回到母体', definition:'以母体为中心重组注意力、品味、能力、经验和承诺。', not:'不是退回舒适区。', first_principle_question:'哪些事要保留，哪些事要停止？', inputs:['母体候选','机会清单'], standards:['识别偏离信号'], outputs:['五部件卡组','不再做清单'], writeback:['文脉边界'], upstream:['A1'], downstream:['A3'], control_points:['注意力配置'], risks:['被短期机会牵引'], tasks:['更新注意力雷达卡'], evidence:['PMO #87']}),
    ynode({id:'A3', part:'原力资产', name:'获得原力', definition:'把母体训练成可调用能力。', not:'不是突然开悟。', first_principle_question:'母体如何变成可调用能力？', inputs:['五部件卡组','反馈记录'], standards:['可在任务中调用'], outputs:['原力能力包','方法论模型'], writeback:['一个大脑','样例库'], upstream:['A2'], downstream:['A4'], control_points:['判断外化'], risks:['只产出内容'], tasks:['外化一个判断模型'], evidence:['PMO #88']}),
    ynode({id:'A4', part:'原力资产', name:'显化原力', definition:'把原力放进真实世界验证。', not:'不是完整商业化。', first_principle_question:'这个原力是否被世界需要？', inputs:['能力包','作品样本'], standards:['有人靠近','有人行动'], outputs:['天选用户线索','创业输入包'], writeback:['机会库'], upstream:['A3'], downstream:['B1'], control_points:['行动验证'], risks:['把点赞误判为需求'], tasks:['设计最小显化动作'], evidence:['PMO #89']}),
    ynode({id:'B1', part:'原力创业', name:'原力借势', status:'sample', definition:'判断时代为什么现在需要我的原力。', not:'不是追热点。', first_principle_question:'这个时代为什么现在需要我？', inputs:['创业输入包','结构变化'], standards:['判断窗口','找到入口'], outputs:['势能地图','机会假设'], writeback:['机会地图'], upstream:['A4'], downstream:['B2'], control_points:['周期势','入口势'], risks:['把热点当结构'], tasks:['完成势能扫描'], evidence:['PMO #90']}),
    ynode({id:'B2', part:'原力创业', name:'品类独创', definition:'让市场认得并记住我的新入口。', not:'不是包装卖点。', first_principle_question:'市场如何认得我？', inputs:['势能地图','甜用户'], standards:['用户能复述'], outputs:['新品类定义','价值主张'], writeback:['文脉词典'], upstream:['B1'], downstream:['B3'], control_points:['命名','入脑表达'], risks:['只换名字'], tasks:['测试 3 个命名'], evidence:['PMO #91']}),
    ynode({id:'B3', part:'原力创业', name:'模式升维', definition:'把价值承诺装进可复制利润容器。', not:'不是卖更多时间。', first_principle_question:'如何持续赚钱、可复制？', inputs:['新品类定义','交付经验'], standards:['可复制','可沉淀'], outputs:['利润容器','三链路画布'], writeback:['交付 SOP'], upstream:['B2'], downstream:['B4'], control_points:['前链路','后链路','财链路'], risks:['只追流量'], tasks:['画三链路'], evidence:['PMO #92']}),
    ynode({id:'B4', part:'原力创业', name:'壁垒锁定', definition:'把利润容器沉淀为多层壁垒。', not:'不是口号式护城河。', first_principle_question:'如何守住、不被拿走？', inputs:['利润容器','控制点'], standards:['有迁移成本','有飞轮'], outputs:['财富飞轮','壁垒地图'], writeback:['壁垒库'], upstream:['B3'], downstream:['C1'], control_points:['虚壁垒','实壁垒'], risks:['把品牌口号当壁垒'], tasks:['识别关键控制点'], evidence:['PMO #93']}),
    ynode({id:'C1', part:'原力OS', name:'一纸文脉', definition:'把判断边界写成最小正典文件。', not:'不是个人简介。', first_principle_question:'系统如何懂我并保持边界？', inputs:['母体卡','风格样本'], standards:['可读','可更新'], outputs:['一纸文脉','风格词典'], writeback:['文脉层'], upstream:['B4'], downstream:['C2'], control_points:['边界','禁止事项'], risks:['写成品牌简介'], tasks:['生成 CONTEXT 草案'], evidence:['PMO #94']}),
    ynode({id:'C2', part:'原力OS', name:'一个大脑', definition:'把知识、案例、术语和任务结果变成记忆系统。', not:'不是资料收藏。', first_principle_question:'系统应记住什么？', inputs:['文脉','源头材料'], standards:['可检索','可回写'], outputs:['知识索引','案例索引'], writeback:['brain','source'], upstream:['C1'], downstream:['C3'], control_points:['索引层','版本层'], risks:['不可调用'], tasks:['建立索引'], evidence:['PMO #95']}),
    ynode({id:'C3', part:'原力OS', name:'一张地图', status:'sample', definition:'把方向、取舍、优先级和能力缺口组织成战略地图。', not:'不是思维导图。', first_principle_question:'什么更重要，先做什么？', inputs:['文脉','大脑索引','能力组件'], standards:['识别控制点','指出瓶颈'], outputs:['战略地图','行动阈值'], writeback:['whiteboard-data','project'], upstream:['C2'], downstream:['C4'], control_points:['目标地图','能力地图'], risks:['做成目录'], tasks:['生成 C3 gap'], evidence:['PMO #96']}),
    ynode({id:'C4', part:'原力OS', name:'一条链路', definition:'把战略判断转成可执行、可验收、可回写流程。', not:'不是待办事项。', first_principle_question:'如何把判断变成行动？', inputs:['战略地图','任务目标'], standards:['可执行','可验收'], outputs:['SOP','任务草案','Evolution Note'], writeback:['codex','project'], upstream:['C3'], downstream:['Evidence'], control_points:['任务链','回写链'], risks:['没有验收'], tasks:['生成任务草案'], evidence:['PMO #97']})
  ]
};
