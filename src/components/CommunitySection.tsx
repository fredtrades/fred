/* ============================================================
   DUNGEON TEMPLATE – Community / Stats Section
   Style: Dark section with neon stats, Discord CTA
   ============================================================ */

import { Users, DollarSign, Trophy, Zap } from "lucide-react";
import DiscordPreview from "./DiscordPreview";

const stats = [
  { icon: <Users size={22} />, value: "550+", label: "Discord Members" },
  { icon: <DollarSign size={22} />, value: "$2.4M+", label: "Total Payouts Won" },
  { icon: <Trophy size={22} />, value: "850+", label: "Giveaway Winners" },
  { icon: <Zap size={22} />, value: "6", label: "Partner Firms" },
];

const discordChannels = [
  { icon: "📢", name: "announcements" },
  { icon: "📜", name: "rules" },
  { icon: "🎁", name: "join-giveaways" },
  { icon: "🏆", name: "giveaway-winners" },
  { icon: "📊", name: "daily-pnl" },
  { icon: "💬", name: "general" },
  { icon: "🚀", name: "mentorship" },
  { icon: "🔗", name: "links" },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="py-24"
      style={{ background: "#0d0d0d", borderTop: "1px solid rgba(57, 255, 20, 0.08)" }}
    >
      <div className="container">
        {/* Discord preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pb-0 md:pb-10">
          {/* Left: text */}
          <div>
            <p className="section-label mb-3">— Join Free</p>
            <h2
              className="display-heading mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#f0f0f0" }}
            >
              JOIN{" "}
              <span className="neon-text">FRED'S</span>
              <br />
              DISCORD
            </h2>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#666", fontFamily: "'DM Sans', sans-serif", maxWidth: "420px" }}
            >
              Join 550+ futures traders and learn the V-Shape model through 6+ years of backtesting, daily market analysis, and real trade examples.
            </p>
            <ul className="flex flex-col gap-2 mb-8">
              {[
                "6+ years of backtested V-shape setups",
                "Master the V-shape model",
                "Daily setups, recaps & market discussions",
                "Learn to identify high-probability trades",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "#aaa", fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span style={{ color: "#39ff14", fontSize: "0.6rem" }}>▶</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://discord.gg/XDXCKTFsgd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-solid rounded-sm inline-flex items-center gap-2"
              style={{ color: "white" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.082.114 18.105.133 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Join Free Discord
            </a>
          </div>

          {/* Right: Discord Preview Upload */}
          <div className="hidden md:block mb-0 md:mb-0 w-full lg:w-auto">
            <DiscordPreview />
          </div>
        </div>


      </div>
    </section>
  );
}
