window.YUANLI_PMO_V22={
  version:'v2.3',
  fields:['Canon Node','Work Type','Strategic Layer','Capability Domain','Status','PMO Health','Priority','Gap Score','Evidence Strength','Agent Level','Approval Gate','Writeback Target','Owner','Review Cadence'],
  views:[
    {id:'strategic_cockpit',name:'Strategic Cockpit',layout:'table',purpose:'project health and next strategic decision',fields:['Canon Node','PMO Health','Priority','Gap Score','Evidence Strength','Next Action']},
    {id:'c3_gap_ranking',name:'C3 Gap Ranking',layout:'table',purpose:'rank capability gaps before execution',fields:['Capability Domain','Strategic Layer','Gap Score','Evidence Strength','Selected Gap','Next C4 Task']},
    {id:'c4_execution_board',name:'C4 Execution Board',layout:'board',purpose:'convert selected gaps into executable work',columns:['To Do','In Progress','Dry Run','Approval','Done','Backwritten']},
    {id:'evidence_ledger',name:'Evidence Ledger',layout:'table',purpose:'check whether work is proven',fields:['Work Item','Evidence Path','Evidence Strength','Accepted','Missing','Next Reuse']},
    {id:'evolution_review',name:'Evolution Review',layout:'table',purpose:'verify reusable learning',fields:['Evolution Note','What Changed','Next Reuse','Writeback Target','System Improvement']},
    {id:'roadmap',name:'Roadmap / Milestone',layout:'roadmap',purpose:'manage release sequence',milestones:['v2.2 PMO OS','v2.3 C3 Gap Ranking','v2.4 Selected Gap to C4 Task','v2.5 PMO Dashboard','v3.0 Agent Execution Bridge']}
  ],
  metrics:['Lead Time','Cycle Time','PR Merge Time','Blocked Age','Evidence Coverage','Backwrite Rate','Evolution Note Rate','C3 Gap Close Rate'],
  objects:['Portfolio','Project','Work Item','Gap','Task','Evidence','Evolution Note','Asset','Review'],
  automation:['c3-gap -> ready','c4-task -> todo','pr opened -> in_progress','pr merged -> done','evidence added -> weak+','evolution added -> writeback complete','blocked 7d -> red'],
  seed_items:[
    {issue:'#63',node:'C3',type:'gap',domain:'matrix',layer:'design',status:'ready',health:'yellow',priority:'P0',gap_score:72,evidence:'weak',next:'handoff to #64'},
    {issue:'#64',node:'C4',type:'task',domain:'delivery',layer:'execution',status:'ready',health:'green',priority:'P0',gap_score:72,evidence:'medium',next:'execute selected-gap handoff'},
    {issue:'#65',node:'C2',type:'evidence',domain:'data',layer:'validation',status:'qa',health:'green',priority:'P1',gap_score:50,evidence:'medium',next:'review v2.3 evidence'}
  ],
  gap_ranking:[
    {rank:1,issue:'#63',gap:'matrix design gap ranking',score:72,formula:'5 x 4 x 3 x 3 x 4 normalized',selected:true,next_issue:'#64'}
  ]
};
