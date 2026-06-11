import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { workflowCards } from "../data/siteContent";
import { SectionHeader } from "./SectionHeader";

export function WorkflowGrid() {
  return (
    <section className="content-section section-panel" id="workflows">
      <SectionHeader
        eyebrow="WORKFLOWS"
        title="不是展示工具，是展示问题怎么被解决"
        body="参考视频里的大卡片结构迁移到老李的栏目体系：每张卡都对应一个真实工作入口。"
      />
      <div className="workflow-grid">
        {workflowCards.map((card, index) => (
          <motion.article
            className={`workflow-card workflow-card--${index + 1}`}
            key={card.title}
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, delay: index * 0.08, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <span className="workflow-card__kicker">{card.kicker}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="workflow-card__visual" style={{ "--accent": card.accent } as CSSProperties}>
              <span>{card.visualLabel}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
