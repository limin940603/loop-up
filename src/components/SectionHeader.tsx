import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  body: string;
}

export function SectionHeader({ eyebrow, title, body }: SectionHeaderProps) {
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </motion.div>
  );
}
