import { ArrowRight, BrainCircuit, CheckCircle2, FileText, Images, Mic2 } from "lucide-react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { heroContent } from "../data/siteContent";

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 46 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + index * 0.08,
      duration: 0.75,
      ease: "easeOut"
    }
  })
};

const outputIcons = [FileText, Images, Mic2];

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const heroShift = useTransform(scrollYProgress, [0, 0.28], [0, 130]);
  const haloShift = useTransform(scrollYProgress, [0, 0.28], [0, -80]);
  const { workbench } = heroContent;

  return (
    <section className="hero-section section-panel" id="hero">
      <motion.div
        aria-hidden="true"
        className="hero-backdrop"
        initial={{ scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        style={{ y: haloShift }}
      >
        <img alt="" src={heroContent.cinematicVisual} />
      </motion.div>
      <div className="hero-cinematic-vignette" />
      <motion.div className="hero-halo hero-halo--one" style={{ y: haloShift }} />
      <motion.div className="hero-halo hero-halo--two" style={{ y: heroShift }} />
      <div className="grid-overlay" />
      <div className="hero-content">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.span className="hero-eyebrow" custom={0} variants={titleVariants}>
            {heroContent.eyebrow}
          </motion.span>
          <div className="hero-title-wrap" aria-label={heroContent.brandName}>
            {heroContent.brandName.split("").map((letter, index) => (
              <motion.span
                aria-hidden="true"
                className="hero-title-char"
                custom={index + 1}
                key={`${letter}-${index}`}
                variants={titleVariants}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <motion.p className="hero-statement" custom={8} variants={titleVariants}>
            {heroContent.statement}
          </motion.p>
          <motion.p className="hero-support" custom={9} variants={titleVariants}>
            {heroContent.supportingCopy}
          </motion.p>
          <motion.div className="hero-cue-row" custom={10} variants={titleVariants}>
            {heroContent.sceneCues.map((cue) => (
              <div className="hero-cue" key={cue.label}>
                <span>{cue.label}</span>
                <strong>{cue.value}</strong>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          style={{ y: heroShift }}
        >
          <div aria-hidden="true" className="hero-orbit hero-orbit--one" />
          <div aria-hidden="true" className="hero-orbit hero-orbit--two" />
          <div aria-hidden="true" className="hero-scanline" />
          <div className="hero-feature-frame">
            <div className="hero-feature-frame__bar">
              <span />
              <span />
              <span />
              <strong>AI LAOLI / CINEMATIC WORKBENCH</strong>
            </div>
            <img alt="AI问老李电影感工作台主视觉" src={heroContent.cinematicVisual} />
            <div className="hero-feature-frame__label">
              <span>视频式开场</span>
              <strong>暗场 · 作品墙 · 动态工作台</strong>
            </div>
          </div>

          <div className="visual-card visual-card--workbench hero-workbench-overlay">
            <div className="visual-card__shine" />
            <div className="workbench-header">
              <div className="workbench-avatar">
                <img alt="AI问老李品牌锚点" src={heroContent.primaryVisual} />
              </div>
              <div>
                <span>LIVE WORKFLOW</span>
                <strong>{workbench.headline}</strong>
              </div>
              <div className="workbench-status">
                <span />
                {workbench.statusLabel}
              </div>
            </div>

            <div className="question-panel">
              <span>真实问题</span>
              <p>{workbench.question}</p>
            </div>

            <div className="decision-flow" aria-label="AI问老李工作台流程">
              {workbench.stages.map((stage, index) => (
                <div className="flow-stage" key={stage}>
                  <div className="flow-stage__index">0{index + 1}</div>
                  <strong>{stage}</strong>
                  {index < workbench.stages.length - 1 ? (
                    <ArrowRight aria-hidden="true" className="flow-stage__arrow" size={18} />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="answer-panel">
              <div className="answer-panel__icon">
                <BrainCircuit aria-hidden="true" size={22} />
              </div>
              <div>
                <span>老李判断</span>
                <p>{workbench.answer}</p>
              </div>
            </div>

            <div className="outputs-grid">
              {workbench.outputs.map((output, index) => {
                const Icon = outputIcons[index] ?? CheckCircle2;
                return (
                  <div className="output-chip" key={output}>
                    <Icon aria-hidden="true" size={18} />
                    <span>{output}</span>
                  </div>
                );
              })}
            </div>

            <div className="workbench-metrics">
              {workbench.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="scene-chip scene-chip--left">
            <span>01</span>
            <strong>视频拆解</strong>
          </div>
          <div className="scene-chip scene-chip--right">
            <span>03</span>
            <strong>发布成品</strong>
          </div>
          <div className="floating-note floating-note--top">不是工具展柜，是判断现场</div>
          <div className="floating-note floating-note--bottom">真实任务进来，发布结果出去</div>
        </motion.div>
      </div>

      <motion.div
        className="hero-proof"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.95 }}
      >
        {heroContent.proofPoints.map((point) => (
          <div className="proof-item" key={point.label}>
            <strong>{point.value}</strong>
            <span>{point.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
