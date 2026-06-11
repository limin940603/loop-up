import { ClosingSection } from "./ClosingSection";
import { HeroSection } from "./HeroSection";
import { InvestorProofSection } from "./InvestorProofSection";
import { PlatformMatrix } from "./PlatformMatrix";
import { ProofCaseSection } from "./ProofCaseSection";
import { ShippedWorkSection } from "./ShippedWorkSection";
import { StickyNav } from "./StickyNav";
import { StrengthsSection } from "./StrengthsSection";
import { VideoChapterBar } from "./VideoChapterBar";
import { WorkflowGrid } from "./WorkflowGrid";

export function AppShell() {
  return (
    <div className="site-shell">
      <StickyNav />
      <VideoChapterBar />
      <main>
        <HeroSection />
        <ProofCaseSection />
        <ShippedWorkSection />
        <InvestorProofSection />
        <WorkflowGrid />
        <StrengthsSection />
        <PlatformMatrix />
        <ClosingSection />
      </main>
    </div>
  );
}
