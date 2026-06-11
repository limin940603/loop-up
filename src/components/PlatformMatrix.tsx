import { motion } from "framer-motion";
import { platformCards } from "../data/siteContent";
import { SectionHeader } from "./SectionHeader";

export function PlatformMatrix() {
  return (
    <section className="content-section section-panel matrix-section" id="matrix">
      <SectionHeader
        eyebrow="CONTENT MATRIX"
        title="同一个判断，拆成三种平台表达"
        body="官网第一版只展示方向，不放私域联系方式，也不做强转化。"
      />
      <div className="platform-track" aria-label="AI问老李三平台内容矩阵">
        {platformCards.map((card, index) => (
          <motion.article
            className="platform-card"
            key={card.title}
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
            whileHover={{ y: -8, rotateX: 2 }}
          >
            <div className="platform-card__index">0{index + 1}</div>
            <h3>{card.title}</h3>
            <div className="platform-card__meta">
              <span>{card.role}</span>
              <span>{card.cadence}</span>
            </div>
            <p>{card.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
