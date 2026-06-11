import { BriefcaseBusiness, Layers3, ScanSearch, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { strengthCards } from "../data/siteContent";
import { SectionHeader } from "./SectionHeader";

const icons = {
  briefcase: BriefcaseBusiness,
  scan: ScanSearch,
  layers: Layers3,
  sparkles: Sparkles
};

export function StrengthsSection() {
  return (
    <section className="content-section section-panel strengths-section" id="strengths">
      <SectionHeader
        eyebrow="CORE STRENGTHS"
        title="老李的优势，是把 AI 放回真实工作里判断"
        body="参考站的能力卡片转成四个可信背书：场景、判断、交付、复利。"
      />
      <div className="strength-grid">
        {strengthCards.map((card, index) => {
          const Icon = icons[card.icon];
          return (
            <motion.article
              className="strength-card"
              key={card.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.68, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
            >
              <div className="strength-card__icon">
                <Icon aria-hidden="true" size={22} />
              </div>
              <span>{card.metric}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
