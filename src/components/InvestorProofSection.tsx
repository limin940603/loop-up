import { BarChart3, CheckCircle2, Gauge, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import { investorProof } from "../data/siteContent";

const pillarIcons = [BarChart3, Gauge, Layers3];

export function InvestorProofSection() {
  const [titleLead, titleEmphasis] = investorProof.title.split("长期价值");
  const hasTitleEmphasis = investorProof.title.includes("长期价值");

  return (
    <section className="content-section investor-section section-panel" id="investor">
      <motion.div
        className="investor-stage"
        initial={{ opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.78, ease: "easeOut" }}
      >
        <div className="investor-copy">
          <span className="section-eyebrow">{investorProof.kicker}</span>
          <h2>
            {titleLead}
            <span>{hasTitleEmphasis ? "长期价值" : titleEmphasis}</span>
          </h2>
          <p>{investorProof.body}</p>

          <div className="investor-scorecard" aria-label="AI问老李价值证明指标">
            {investorProof.scorecard.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="investor-visual">
          <div className="investor-visual__bar">
            <span />
            <span />
            <span />
            <strong>INVESTOR PROOF WALL</strong>
          </div>
          <img alt="AI问老李投资人价值证明墙" src={investorProof.visual} />
        </div>

        <div className="investor-pillars">
          {investorProof.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index] ?? CheckCircle2;
            return (
              <motion.article
                className="investor-pillar"
                key={pillar.title}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <div className="investor-pillar__icon">
                  <Icon aria-hidden="true" size={19} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.proof}</p>
                <strong>{pillar.investorRead}</strong>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
