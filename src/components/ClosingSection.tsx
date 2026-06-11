import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function ClosingSection() {
  const scrollToTop = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="closing-section section-panel" id="ending">
      <div className="grid-overlay" />
      <motion.div
        className="closing-content"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="section-eyebrow">ENDING</span>
        <h2>有问必答 · 尽在老李</h2>
        <p>
          这个网站先做成品牌入口：让用户记住老李是谁、解决什么问题，以及为什么值得继续看。
        </p>
        <button className="return-button" type="button" onClick={scrollToTop}>
          回到顶部
          <ArrowUp aria-hidden="true" size={18} />
        </button>
      </motion.div>
    </section>
  );
}
