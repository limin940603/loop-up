import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronUp } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navItems, type SectionId } from "../data/siteContent";

export function StickyNav() {
  const { scrollYProgress } = useScroll();
  const [activeId, setActiveId] = useState<SectionId>("hero");
  const [isLifted, setIsLifted] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsLifted(latest > 0.08);
  });

  useEffect(() => {
    const updateActiveSection = () => {
      const probeY = window.innerHeight * 0.42;
      const current = navItems.find((item) => {
        const section = document.getElementById(item.id);
        if (!section) {
          return false;
        }
        const rect = section.getBoundingClientRect();
        return rect.top <= probeY && rect.bottom > probeY;
      });

      if (current) {
        setActiveId(current.id);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollToSection = (id: SectionId) => {
    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    const navOffset = window.innerWidth <= 860 ? 86 : 112;
    const targetY = Math.max(0, section.getBoundingClientRect().top + window.scrollY - navOffset);
    const longJump = Math.abs(targetY - window.scrollY) > window.innerHeight * 2.4;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scrollBehavior = longJump || reduceMotion ? "auto" : "smooth";

    window.scrollTo({
      top: targetY,
      behavior: scrollBehavior
    });

    if (longJump) {
      window.setTimeout(() => {
        const latestTargetY = Math.max(0, section.getBoundingClientRect().top + window.scrollY - navOffset);
        window.scrollTo({ top: latestTargetY, behavior: "auto" });
      }, 120);
    }
  };

  return (
    <motion.header
      className={`sticky-nav ${isLifted ? "sticky-nav--lifted" : ""}`}
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <button className="brand-pill" type="button" onClick={() => scrollToSection("hero")}>
        <span className="brand-mark">问</span>
        <span>AI问老李</span>
      </button>
      <nav aria-label="主导航">
        {navItems.map((item) => (
          <button
            className={activeId === item.id ? "nav-link nav-link--active" : "nav-link"}
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <button className="nav-action" type="button" onClick={() => scrollToSection("matrix")}>
        内容矩阵
        <ArrowUpRight aria-hidden="true" size={16} />
      </button>
      <button
        className="scroll-top"
        type="button"
        aria-label="回到顶部"
        onClick={() => scrollToSection("hero")}
      >
        <ChevronUp aria-hidden="true" size={18} />
      </button>
    </motion.header>
  );
}
