import {
  ArrowRight,
  CheckCircle2,
  Clapperboard,
  FileText,
  Film,
  Images,
  Mic2,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { proofCases } from "../data/siteContent";

const platformIcons = {
  公众号: FileText,
  小红书: Images,
  抖音: Mic2
};

export function ProofCaseSection() {
  const [caseStudy] = proofCases;

  return (
    <section className="content-section case-section section-panel" id="cases">
      <motion.div
        className="case-showreel"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <img alt="" className="case-showreel__bg" src={caseStudy.showreelVisual} />
        <div className="case-showreel__shade" />
        <div className="case-showreel__copy">
          <div className="case-story__badge">
            <Clapperboard aria-hidden="true" size={18} />
            {caseStudy.kicker}
          </div>
          <h2>案例要像作品一样亮出来</h2>
          <p>{caseStudy.summary}</p>

          <div className="case-showreel__metrics" aria-label="案例成果指标">
            {caseStudy.showreelMetrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="case-showreel__right">
          <div className="case-showreel-screen">
            <div className="case-showreel-screen__bar">
              <span />
              <span />
              <span />
              <strong>STORYBOARD SHOWREEL</strong>
            </div>
            <img alt="AI问老李分镜生产现场主视觉" src={caseStudy.showreelVisual} />
          </div>

          <div className="case-teardown-panel">
            <span className="case-panel-kicker">
              <Sparkles aria-hidden="true" size={16} />
              老李拆法
            </span>
            {caseStudy.teardown.map((item, index) => (
              <div className="case-teardown-step" key={item.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="case-layout case-layout--evidence">
        <motion.article
          className="case-story"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.68, ease: "easeOut" }}
        >
          <div className="case-story__badge">
            <Film aria-hidden="true" size={18} />
            真实案例
          </div>
          <h3>{caseStudy.title}</h3>

          <div className="case-judgment">
            <div>
              <span>痛点</span>
              <p>{caseStudy.problem}</p>
            </div>
            <div>
              <span>判断</span>
              <p>{caseStudy.judgment}</p>
            </div>
          </div>

          <div className="case-flow" aria-label="案例工作流步骤">
            {caseStudy.steps.map((step, index) => (
              <div className="case-flow__item" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < caseStudy.steps.length - 1 ? (
                  <ArrowRight aria-hidden="true" className="case-flow__arrow" size={16} />
                ) : null}
              </div>
            ))}
          </div>
        </motion.article>

        <div className="case-artifacts" aria-label="三平台发布成品">
          {caseStudy.artifacts.map((artifact, index) => {
            const Icon = platformIcons[artifact.platform];

            return (
              <motion.article
                className={`artifact-card artifact-card--${index + 1}`}
                key={artifact.platform}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.68, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.015 }}
              >
                <div className="artifact-card__media">
                  <img alt={artifact.imageAlt} src={artifact.image} />
                </div>
                <div className="artifact-card__body">
                  <span>
                    <Icon aria-hidden="true" size={17} />
                    {artifact.platform}
                  </span>
                  <h4>{artifact.title}</h4>
                  <p>{artifact.format}</p>
                  <div>
                    <CheckCircle2 aria-hidden="true" size={16} />
                    已生成发布资产
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
