export type SectionId =
  | "hero"
  | "cases"
  | "shipped"
  | "investor"
  | "workflows"
  | "strengths"
  | "matrix"
  | "ending";

export interface HeroContent {
  brandName: string;
  eyebrow: string;
  statement: string;
  supportingCopy: string;
  primaryVisual: string;
  cinematicVisual: string;
  sceneCues: Array<{
    label: string;
    value: string;
  }>;
  workbench: {
    headline: string;
    statusLabel: string;
    question: string;
    answer: string;
    stages: string[];
    outputs: string[];
    metrics: Array<{
      value: string;
      label: string;
    }>;
  };
  proofPoints: Array<{
    value: string;
    label: string;
  }>;
}

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface WorkflowCard {
  title: string;
  kicker: string;
  description: string;
  visualLabel: string;
  accent: string;
}

export interface ProofCase {
  title: string;
  kicker: string;
  summary: string;
  showreelVisual: string;
  showreelMetrics: Array<{
    value: string;
    label: string;
  }>;
  teardown: Array<{
    label: string;
    body: string;
  }>;
  problem: string;
  judgment: string;
  steps: string[];
  artifacts: Array<{
    platform: "公众号" | "小红书" | "抖音";
    title: string;
    format: string;
    image: string;
    imageAlt: string;
  }>;
}

export interface ShippedProject {
  title: string;
  kicker: string;
  url: string;
  role: string;
  stackNote: string;
  summary: string;
  image: string;
  imageAlt: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;
  highlights: string[];
}

export interface InvestorProof {
  kicker: string;
  title: string;
  body: string;
  visual: string;
  pillars: Array<{
    title: string;
    proof: string;
    investorRead: string;
  }>;
  scorecard: Array<{
    label: string;
    value: string;
  }>;
}

export interface StrengthCard {
  title: string;
  body: string;
  metric: string;
  icon: "briefcase" | "scan" | "layers" | "sparkles";
}

export interface PlatformCard {
  title: string;
  role: string;
  cadence: string;
  body: string;
}

export const heroContent: HeroContent = {
  brandName: "AI问老李",
  eyebrow: "把 AI 用进真实工作",
  statement: "帮普通人少走 AI 弯路，讲工具，也讲结果。",
  supportingCopy:
    "不做空泛工具搬运。老李用产品、项目、测试和内容生产里的真实任务，拆出普通人能照着走的 AI 工作流。",
  primaryVisual: "/brand/ai-wen-laoli-bear.png",
  cinematicVisual: "/visuals/ai-laoli-cinematic-workbench.png",
  sceneCues: [
    { label: "参考视频拆解", value: "逐帧提炼" },
    { label: "真实项目输入", value: "AI + 产品 + 内容" },
    { label: "输出结果", value: "能发布 / 能复盘 / 能复用" }
  ],
  workbench: {
    headline: "老李的 AI 工作台",
    statusLabel: "案例复盘",
    question: "这个 AI 工具到底值不值得用？别看发布会，先看它能不能进入你的真实任务。",
    answer: "先拆场景，再选工具，最后把结果做成能发布、能复盘、能复用的内容资产。",
    stages: ["真实任务", "AI 判断", "可发布结果"],
    outputs: ["公众号长文", "小红书卡片", "抖音口播"],
    metrics: [
      { value: "01", label: "场景先行" },
      { value: "02", label: "流程可控" },
      { value: "03", label: "结果复用" }
    ]
  },
  proofPoints: [
    { value: "12", label: "镜头拆解案例" },
    { value: "3", label: "平台成品" },
    { value: "1", label: "真实工作底层" }
  ]
};

export const navItems: NavItem[] = [
  { id: "hero", label: "首页" },
  { id: "cases", label: "案例" },
  { id: "shipped", label: "上线" },
  { id: "investor", label: "价值" },
  { id: "workflows", label: "工作流" },
  { id: "strengths", label: "优势" },
  { id: "matrix", label: "矩阵" },
  { id: "ending", label: "收尾" }
];

export const investorProof: InvestorProof = {
  kicker: "PROOF WALL / 价值证明",
  title: "真实交付，才有长期价值",
  body:
    "这个站点把三个可验证能力摆出来：真实商业页面交付、AI 工作流拆解、内容矩阵复利。",
  visual: "/visuals/ai-laoli-investor-proof-wall.png",
  pillars: [
    {
      title: "商业交付",
      proof: "STARNET Influencer Hub 已上线，展示从需求、筛选体验到公开页面的闭环。",
      investorRead: "不是只会讲 AI，而是能把 AI 协作落到业务资产。"
    },
    {
      title: "流程资产",
      proof: "12 镜头案例把创意拆成角色、分镜、生成、检查、发布和复盘。",
      investorRead: "方法可以复制，内容生产不是一次性灵感。"
    },
    {
      title: "内容复利",
      proof: "同一选题可拆成公众号、小红书、抖音三类发布资产。",
      investorRead: "一个真实任务能变成多平台增长素材。"
    }
  ],
  scorecard: [
    { label: "上线项目", value: "1" },
    { label: "案例成品", value: "3" },
    { label: "流程节点", value: "7" },
    { label: "镜头拆解", value: "12" }
  ]
};

export const proofCases: ProofCase[] = [
  {
    title: "不会拍视频？我用 AI 把一个故事拆成了 12 个镜头",
    kicker: "REAL CASE / 三平台内容包",
    summary:
      "从一个“晚宴风波角色反转”的创意出发，老李把它拆成角色设定、分镜、单镜头图、单镜头视频、剪辑和发布素材，不再赌一次生成能不能撞大运。",
    showreelVisual: "/visuals/ai-laoli-storyboard-showreel.png",
    showreelMetrics: [
      { value: "12", label: "镜头拆解" },
      { value: "3", label: "平台成品" },
      { value: "7", label: "流程节点" }
    ],
    teardown: [
      {
        label: "先拆镜头",
        body: "把一个故事拆成可检查的镜头，而不是把希望全压给一次生成。"
      },
      {
        label: "再控一致",
        body: "角色、场景、动作分开校验，哪里坏了就返工哪里。"
      },
      {
        label: "最后分发",
        body: "同一个案例同时变成长文、图文卡片和口播素材。"
      }
    ],
    problem:
      "直接让 AI 一键生成视频，很容易出现人物不一致、动作穿模、镜头接不上。普通人真正需要的是可控流程，而不是玄学出片。",
    judgment:
      "AI 内容的价值不是一键生成，而是把一个想法拆成可以检查、可以返工、可以分发的工作流。",
    steps: ["创意", "角色设定", "分镜", "单镜头图", "单镜头视频", "剪辑", "发布", "复盘"],
    artifacts: [
      {
        platform: "公众号",
        title: "长文排版稿",
        format: "富文本复制页 + DOCX 兜底",
        image: "/cases/storyboard-role-reversal/wechat-preview.png",
        imageAlt: "AI问老李公众号富文本排版预览"
      },
      {
        platform: "小红书",
        title: "图文卡片",
        format: "8 页有序图文卡片",
        image: "/cases/storyboard-role-reversal/xiaohongshu-01.png",
        imageAlt: "AI问老李小红书图文卡片预览"
      },
      {
        platform: "抖音",
        title: "口播封面",
        format: "真人口播稿 + 竖版封面",
        image: "/cases/storyboard-role-reversal/douyin-cover.png",
        imageAlt: "AI问老李抖音竖版封面预览"
      }
    ]
  }
];

export const shippedProjects: ShippedProject[] = [
  {
    title: "STARNET Influencer Hub",
    kicker: "SHIPPED WORK / 已上线项目",
    url: "https://starnettalent.com/influencer-hub/",
    role: "主导搭建",
    stackNote: "Claude 辅助实现",
    summary:
      "两周内把海外达人库做成可访问的线上页面：从公开达人数据、平台筛选、行业分类、粉丝量过滤，到收藏和联系路径，形成品牌方可以直接浏览的 Influencer Hub。",
    image: "/cases/starnet-influencer-hub/influencer-hub-live.png",
    imageAlt: "STARNET Influencer Hub 线上页面截图",
    metrics: [
      { value: "23.4K+", label: "Vetted talents" },
      { value: "22.9K", label: "Real avatars" },
      { value: "2.1K", label: "Mega influencers" },
      { value: "5.9K", label: "Contactable" }
    ],
    highlights: [
      "YouTube / TikTok / Instagram 多平台筛选",
      "行业、地区、粉丝量与排序条件整合",
      "收藏、联系、品牌方浏览路径上线",
      "从业务需求到公开页面交付闭环"
    ]
  }
];

export const workflowCards: WorkflowCard[] = [
  {
    title: "AI 工具实测",
    kicker: "Tool judgment",
    description: "从真实任务出发，判断一个 AI 工具到底能不能解决问题，而不是只看功能演示。",
    visualLabel: "工具能否进入流程",
    accent: "#F26A2F"
  },
  {
    title: "AI 工作流拆解",
    kicker: "Workflow map",
    description: "把一个任务拆成输入、判断、生成、检查和复用，让 AI 不再是一句玄学提示词。",
    visualLabel: "任务拆解到可执行",
    accent: "#F2B84B"
  },
  {
    title: "个人知识库",
    kicker: "Knowledge loop",
    description: "把笔记、项目、内容和复盘连起来，让一次工作变成下一次内容和判断资产。",
    visualLabel: "长期记忆与复利",
    accent: "#7FD1B9"
  },
  {
    title: "真实项目复盘",
    kicker: "Project review",
    description: "从产品、项目、测试和硬件风险里讲 AI 的边界，保留真实问题和取舍。",
    visualLabel: "项目经验变方法",
    accent: "#E9536B"
  },
  {
    title: "AI 内容生产链路",
    kicker: "Content system",
    description: "把一个选题拆成公众号长文、小红书卡片和抖音口播，先给价值，再做分发。",
    visualLabel: "一题三拆",
    accent: "#9C7CFF"
  }
];

export const strengthCards: StrengthCard[] = [
  {
    title: "真实工作视角",
    body: "不是从工具清单开始，而是从普通人手里真正要完成的任务开始。",
    metric: "场景优先",
    icon: "briefcase"
  },
  {
    title: "产品判断",
    body: "先判断值不值得做，再选择工具和流程，避免被新功能牵着跑。",
    metric: "少走弯路",
    icon: "scan"
  },
  {
    title: "项目与测试底层",
    body: "关注可交付、可验证、可复盘，知道哪里容易翻车。",
    metric: "结果导向",
    icon: "layers"
  },
  {
    title: "内容复利",
    body: "把一次实战沉淀成文章、卡片、视频和长期知识资产。",
    metric: "持续输出",
    icon: "sparkles"
  }
];

export const platformCards: PlatformCard[] = [
  {
    title: "公众号",
    role: "方法层",
    cadence: "每周 1 篇",
    body: "完整解释流程、案例、边界和可复制模板，沉淀长期信任。"
  },
  {
    title: "小红书",
    role: "发现层",
    cadence: "每周 3 条",
    body: "用图文卡片交付清单、步骤和真实场景，让用户一眼知道能不能用。"
  },
  {
    title: "抖音",
    role: "注意力层",
    cadence: "每周 2 条",
    body: "一个问题、一个反差、一个结论，用真人口播建立老李的人设。"
  }
];
