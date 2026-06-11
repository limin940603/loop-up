import { describe, expect, it } from "vitest";
import {
  heroContent,
  investorProof,
  navItems,
  platformCards,
  proofCases,
  shippedProjects,
  strengthCards,
  workflowCards
} from "./siteContent";

describe("site content", () => {
  it("anchors the first screen on the AI问老李 brand", () => {
    expect(heroContent.brandName).toBe("AI问老李");
    expect(heroContent.statement).toContain("帮普通人少走 AI 弯路");
    expect(heroContent.primaryVisual).toBe("/brand/ai-wen-laoli-bear.png");
    expect(heroContent.cinematicVisual).toBe("/visuals/ai-laoli-cinematic-workbench.png");
    expect(heroContent.sceneCues.map((cue) => cue.label)).toEqual([
      "参考视频拆解",
      "真实项目输入",
      "输出结果"
    ]);
  });

  it("turns the first-screen visual into an AI workbench story, not a static brand board", () => {
    expect(heroContent.workbench.headline).toBe("老李的 AI 工作台");
    expect(heroContent.workbench.statusLabel).toBe("案例复盘");
    expect(heroContent.workbench.question).toContain("这个 AI 工具到底值不值得用");
    expect(heroContent.workbench.stages).toEqual(["真实任务", "AI 判断", "可发布结果"]);
    expect(heroContent.workbench.outputs).toEqual(["公众号长文", "小红书卡片", "抖音口播"]);
  });

  it("keeps the site focused on the planned sections without a contact module", () => {
    expect(navItems.map((item) => item.id)).toEqual([
      "hero",
      "cases",
      "shipped",
      "investor",
      "workflows",
      "strengths",
      "matrix",
      "ending"
    ]);
    expect(navItems.some((item) => /联系|合作|contact/i.test(item.label))).toBe(false);
  });

  it("contains the required workflow, strength, and platform cards", () => {
    expect(workflowCards).toHaveLength(5);
    expect(strengthCards).toHaveLength(4);
    expect(platformCards.map((card) => card.title)).toEqual(["公众号", "小红书", "抖音"]);
  });

  it("shows real proof from a finished three-platform content package", () => {
    expect(proofCases).toHaveLength(1);
    expect(proofCases[0].title).toContain("12 个镜头");
    expect(proofCases[0].showreelVisual).toBe("/visuals/ai-laoli-storyboard-showreel.png");
    expect(proofCases[0].showreelMetrics.map((metric) => metric.label)).toEqual([
      "镜头拆解",
      "平台成品",
      "流程节点"
    ]);
    expect(proofCases[0].teardown.map((item) => item.label)).toEqual([
      "先拆镜头",
      "再控一致",
      "最后分发"
    ]);
    expect(proofCases[0].artifacts.map((artifact) => artifact.platform)).toEqual([
      "公众号",
      "小红书",
      "抖音"
    ]);
    expect(proofCases[0].steps).toContain("分镜");
  });

  it("shows the shipped STARNET Influencer Hub as a led project", () => {
    expect(shippedProjects).toHaveLength(1);
    expect(shippedProjects[0].title).toBe("STARNET Influencer Hub");
    expect(shippedProjects[0].url).toBe("https://starnettalent.com/influencer-hub/");
    expect(shippedProjects[0].role).toContain("主导搭建");
    expect(shippedProjects[0].stackNote).toContain("Claude");
    expect(shippedProjects[0].metrics.map((metric) => metric.label)).toContain("Vetted talents");
  });

  it("adds an investor-readable proof layer with a visible generated asset", () => {
    expect(investorProof.visual).toBe("/visuals/ai-laoli-investor-proof-wall.png");
    expect(investorProof.title).toBe("真实交付，才有长期价值");
    expect(investorProof.kicker).toBe("PROOF WALL / 价值证明");
    expect(investorProof.pillars.map((pillar) => pillar.title)).toEqual([
      "商业交付",
      "流程资产",
      "内容复利"
    ]);
    expect(investorProof.scorecard.map((item) => item.label)).toEqual([
      "上线项目",
      "案例成品",
      "流程节点",
      "镜头拆解"
    ]);
  });
});
