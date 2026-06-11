import { ArrowUpRight, CheckCircle2, ExternalLink, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { shippedProjects } from "../data/siteContent";
import { SectionHeader } from "./SectionHeader";

export function ShippedWorkSection() {
  const [project] = shippedProjects;

  return (
    <section className="content-section shipped-section section-panel" id="shipped">
      <SectionHeader
        eyebrow={project.kicker}
        title="两周上线，一个品牌方能打开的达人库"
        body="不是概念页，也不是练手 demo。老李把业务需求、页面结构、筛选体验和上线交付串成了一个真实可访问的商业页面。"
      />

      <motion.article
        className="shipped-card"
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.74, ease: "easeOut" }}
      >
        <div className="shipped-card__copy">
          <div className="shipped-card__badge">
            <Rocket aria-hidden="true" size={18} />
            已上线
          </div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>

          <div className="shipped-card__meta">
            <span>{project.role}</span>
            <span>{project.stackNote}</span>
          </div>

          <div className="shipped-metrics" aria-label="STARNET 公开页面指标">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>

          <ul className="shipped-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>
                <CheckCircle2 aria-hidden="true" size={17} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <a className="shipped-link" href={project.url} rel="noreferrer" target="_blank">
            查看线上页面
            <ExternalLink aria-hidden="true" size={17} />
          </a>
        </div>

        <div className="shipped-card__visual">
          <img alt={project.imageAlt} src={project.image} />
          <div className="shipped-card__float">
            <span>Live URL</span>
            <strong>starnettalent.com</strong>
            <ArrowUpRight aria-hidden="true" size={18} />
          </div>
        </div>
      </motion.article>
    </section>
  );
}
