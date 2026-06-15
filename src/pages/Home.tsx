/* ============================================================
   DUNGEON TEMPLATE – Home Page
   Assembles: Navbar, Hero, Ticker, Deals, Giveaway, Winners, Community, Footer
   ============================================================ */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import DealsSection from "@/components/DealsSection";
import RiskCalculator from "@/components/RiskCalculator";
import BacktestingSection from "@/components/BacktestingSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#080808", fontFamily: "'DM Sans', sans-serif" }}
    >
      <Navbar />
      <HeroSection />
      <DealsSection />
      <RiskCalculator />
      <BacktestingSection />
      <CommunitySection />
      <Footer />

      {/* Back to top */}
      <button
        className="fixed bottom-6 right-6 w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-150 z-40"
        style={{
          background: "rgba(57, 255, 20, 0.1)",
          border: "1px solid rgba(57, 255, 20, 0.3)",
          color: "#39ff14",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(57, 255, 20, 0.2)";
          e.currentTarget.style.boxShadow = "0 0 16px rgba(57, 255, 20, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(57, 255, 20, 0.1)";
          e.currentTarget.style.boxShadow = "none";
        }}
        title="Back to top"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
}
