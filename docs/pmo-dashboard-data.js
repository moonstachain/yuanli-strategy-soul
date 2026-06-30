window.YUANLI_PMO_V22={
  version:'v3.3',
  ui_version:'v2.8',
  data_patch:'v2.7.1',
  sync:{mode:'manual_baseline',source:'issue_chains',updated_at:'2026-06-30T04:45:00Z'},
  fields:['Canon Node','Work Type','Strategic Layer','Capability Domain','Status','PMO Health','Priority','Gap Score','Evidence Strength','Agent Level','Approval Gate','Writeback Target','Owner','Review Cadence','Acceptance State','Canonical State'],
  views:[
    {id:'strategic_cockpit',name:'Strategic Cockpit',layout:'table',purpose:'project health and next strategic decision',fields:['Canon Node','PMO Health','Priority','Gap Score','Evidence Strength','Next Action']},
    {id:'c3_gap_ranking',name:'C3 Gap Ranking',layout:'table',purpose:'rank capability gaps before execution',fields:['Capability Domain','Strategic Layer','Gap Score','Evidence Strength','Selected Gap','Next C4 Task']},
    {id:'c4_execution_board',name:'C4 Execution Board',layout:'board',purpose:'convert selected gaps into executable work',columns:['To Do','In Progress','Dry Run','Approval','Done','Backwritten']},
    {id:'evidence_ledger',name:'Evidence Ledger',layout:'table',purpose:'check whether work is proven',fields:['Work Item','Evidence Path','Evidence Strength','Accepted','Missing','Next Reuse']},
    {id:'evolution_review',name:'Evolution Review',layout:'table',purpose:'verify reusable learning',fields:['Evolution Note','What Changed','Next Reuse','Writeback Target','System Improvement','Canonical State']},
    {id:'roadmap',name:'Roadmap / Milestone',layout:'roadmap',purpose:'manage release sequence',milestones:['v2.7.1 Data Sync Patch','v2.8 Interactive Six-view Drilldown','v2.9 GitHub Projects Native Setup','v3.0 PMO Metrics Engine','v3.1 Task Bridge','v3.2 Evidence Acceptance Loop','v3.3 Canonical Learning Gate']}
  ],
  metrics:['Evidence Coverage','Backwrite Rate','Evolution Note Rate','C3 Gap Close Rate','Blocked Age'],
  metric_values:{evidence_coverage:'6 / 12 = 50%',backwrite_rate:'6 / 6 = 100% planned',evolution_note_rate:'6 / 6 = 100% planned',c3_gap_close_rate:'0 / 6 = 0%',blocked_age:'0d current sample'},
  objects:['Portfolio','Project','Work Item','Gap','Task','Evidence','Evolution Note','Asset','Review','Approval Gate','Canonical Learning'],
  automation:['issue changed -> sync dashboard','weekly review -> evolution note','selected gap -> C4 task draft','evidence review -> accepted/missing/rejected','accepted learning -> canonical candidate','human approval -> canonical learning'],
  seed_items:[
    {issue:'#70',node:'C3',type:'gap',domain:'matrix',layer:'design',status:'ready',health:'green',priority:'P0',gap_score:88,evidence:'medium',next:'Patch dashboard data and sync version'},
    {issue:'#71',node:'C4',type:'task',domain:'delivery',layer:'execution',status:'ready',health:'green',priority:'P0',gap_score:88,evidence:'medium',next:'Fix PMO version source'},
    {issue:'#72',node:'C2',type:'evidence',domain:'data',layer:'validation',status:'qa',health:'green',priority:'P1',gap_score:60,evidence:'strong',next:'Review v2.7.1 patch'},
    {issue:'#82',node:'C3',type:'gap',domain:'delivery',layer:'design',status:'ready',health:'green',priority:'P0',gap_score:78,evidence:'medium',next:'Create selected-gap task draft bridge'},
    {issue:'#83',node:'C4',type:'task',domain:'delivery',layer:'execution',status:'ready',health:'green',priority:'P1',gap_score:78,evidence:'medium',next:'Build task bridge'},
    {issue:'#84',node:'C2',type:'evidence',domain:'data',layer:'validation',status:'qa',health:'green',priority:'P2',gap_score:50,evidence:'medium',next:'Review task bridge'},
    {issue:'#73',node:'C3',type:'gap',domain:'matrix',layer:'design',status:'ready',health:'green',priority:'P1',gap_score:76,evidence:'medium',next:'Create interactive six-view drilldown'},
    {issue:'#74',node:'C4',type:'task',domain:'delivery',layer:'execution',status:'ready',health:'green',priority:'P1',gap_score:76,evidence:'medium',next:'Build interactive PMO page'},
    {issue:'#75',node:'C2',type:'evidence',domain:'data',layer:'validation',status:'qa',health:'green',priority:'P2',gap_score:50,evidence:'medium',next:'Review v2.8 drilldown'},
    {issue:'#79',node:'C3',type:'gap',domain:'data',layer:'validation',status:'ready',health:'green',priority:'P1',gap_score:74,evidence:'medium',next:'Create PMO metrics engine'},
    {issue:'#80',node:'C4',type:'task',domain:'data',layer:'execution',status:'ready',health:'green',priority:'P1',gap_score:74,evidence:'medium',next:'Build metrics engine'},
    {issue:'#81',node:'C2',type:'evidence',domain:'data',layer:'validation',status:'qa',health:'green',priority:'P2',gap_score:50,evidence:'medium',next:'Review metrics engine'},
    {issue:'#76',node:'C3',type:'gap',domain:'matrix',layer:'design',status:'ready',health:'green',priority:'P1',gap_score:70,evidence:'medium',next:'Create GitHub Projects native setup'},
    {issue:'#77',node:'C4',type:'task',domain:'delivery',layer:'execution',status:'ready',health:'green',priority:'P1',gap_score:70,evidence:'medium',next:'Write Projects setup'},
    {issue:'#78',node:'C2',type:'evidence',domain:'data',layer:'validation',status:'qa',health:'green',priority:'P2',gap_score:50,evidence:'medium',next:'Review Projects setup'},
    {issue:'#63',node:'C3',type:'gap',domain:'matrix',layer:'design',status:'ready',health:'yellow',priority:'P1',gap_score:72,evidence:'weak',next:'Legacy selected-gap handoff'},
    {issue:'#64',node:'C4',type:'task',domain:'delivery',layer:'execution',status:'ready',health:'green',priority:'P1',gap_score:72,evidence:'medium',next:'Legacy handoff task'},
    {issue:'#65',node:'C2',type:'evidence',domain:'data',layer:'validation',status:'qa',health:'green',priority:'P2',gap_score:50,evidence:'medium',next:'Legacy evidence review'}
  ],
  gap_ranking:[
    {rank:1,issue:'#70',gap:'Align PMO UI and data versions',score:88,formula:'5 x 5 x 4 x 4 x 5 normalized',selected:true,next_issue:'#71'},
    {rank:2,issue:'#82',gap:'Generate C4 task from selected gap',score:78,formula:'5 x 4 x 3 x 4 x 5 normalized',selected:false,next_issue:'#83'},
    {rank:3,issue:'#73',gap:'Make six PMO views interactive',score:76,formula:'4 x 4 x 4 x 4 x 5 normalized',selected:false,next_issue:'#74'},
    {rank:4,issue:'#79',gap:'Calculate PMO metrics',score:74,formula:'4 x 4 x 4 x 5 normalized',selected:false,next_issue:'#80'},
    {rank:5,issue:'#76',gap:'Configure native GitHub Projects fields',score:70,formula:'4 x 3 x 4 x 4 x 5 normalized',selected:false,next_issue:'#77'},
    {rank:6,issue:'#63',gap:'Legacy matrix design gap ranking',score:72,formula:'legacy',selected:false,next_issue:'#64'}
  ],
  roadmap_current:['v2.7.1','v2.8','v2.9','v3.0','v3.1','v3.2','v3.3']
};
