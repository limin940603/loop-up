import { navItems } from "../data/siteContent";

export function VideoChapterBar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="video-chapter-bar" aria-label="视频式章节导航">
      {navItems.map((item, index) => (
        <button key={item.id} type="button" onClick={() => scrollToSection(item.id)}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          {item.label}
        </button>
      ))}
    </div>
  );
}
