/* ============================================================
   DUNGEON TEMPLATE – Giveaway Section
   Style: Split layout, prize list on left, entry info on right
          Gold/dark dungeon vault atmosphere
   ============================================================ */

import { Trophy, Layers, RefreshCw, Radio, ArrowRight } from "lucide-react";

const GIVEAWAY_BG = "/assets/giveaway-bg.webp";

const prizes = [
  {
    firm: "Apex Funding",
    account: "100K Funded Account",
    count: 10,
    icon: "🏆",
  },
  {
    firm: "Lucid Trading",
    account: "50K Flex Account",
    count: 5,
    icon: "🥈",
  },
  {
    firm: "Tradeify",
    account: "25K Select Account",
    count: 5,
    icon: "🥉",
  },
];

const entryRules = [
  { icon: <Trophy size={16} />, text: "1 eval purchased = 1 entry" },
  { icon: <Layers size={16} />, text: "Stack your entries for better odds" },
  { icon: <RefreshCw size={16} />, text: "New winners drawn every week" },
  { icon: <Radio size={16} />, text: "Drawn live in our Discord server" },
];

export default function GiveawaySection() {
  return (
    <section
      id="giveaway"
      className="relative py-24 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${GIVEAWAY_BG})`,
          opacity: 0.18,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.6) 50%, rgba(8,8,8,0.9) 100%)",
        }}
      />

      <div className="relative z-10 container">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">— Weekly Draws</p>
          <h2
            className="display-heading"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#f0f0f0" }}
          >
            WIN PROP FIRM{" "}
            <span style={{ color: "#c8a84b" }}>ACCOUNTS</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto text-sm"
            style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}
          >
            Every evaluation you buy with code{" "}
            <span style={{ color: "#39ff14", fontWeight: 700 }}>DUNGEON</span>{" "}
            is an automatic entry. New winners drawn live every week.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left: Prizes */}
          <div className="lg:col-span-3">
            <div
              className="rounded-sm overflow-hidden"
              style={{ border: "1px solid rgba(200, 168, 75, 0.2)", background: "#111111" }}
            >
              {/* Header */}
              <div
                className="px-5 py-3 flex items-center gap-2"
                style={{
                  borderBottom: "1px solid rgba(200, 168, 75, 0.15)",
                  background: "rgba(200, 168, 75, 0.06)",
                }}
              >
                <Trophy size={14} style={{ color: "#c8a84b" }} />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#c8a84b", fontFamily: "'DM Sans', sans-serif" }}
                >
                  This Week's Prizes
                </span>
              </div>

              {/* Prize list */}
              <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                {prizes.map((prize, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-5 py-4 transition-colors duration-150"
                    style={{ cursor: "default" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(200, 168, 75, 0.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{prize.icon}</span>
                      <div>
                        <p
                          className="font-semibold text-sm"
                          style={{ color: "#f0f0f0", fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {prize.firm}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {prize.account}
                        </p>
                      </div>
                    </div>
                    <div
                      className="px-3 py-1 rounded-sm text-xs font-bold"
                      style={{
                        background: "rgba(200, 168, 75, 0.1)",
                        border: "1px solid rgba(200, 168, 75, 0.3)",
                        color: "#c8a84b",
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "0.9rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      ×{prize.count}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div
                className="px-5 py-3 text-center"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <p
                  className="text-xs"
                  style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}
                >
                  1 entry per eval purchased with code DUNGEON · Winners drawn live weekly
                </p>
              </div>
            </div>
          </div>

          {/* Right: Entry info */}
          <div className="lg:col-span-2">
            <div
              className="rounded-sm h-full flex flex-col"
              style={{
                border: "1px solid rgba(57, 255, 20, 0.2)",
                background: "#111111",
              }}
            >
              <div className="p-6 flex flex-col gap-5 flex-1">
                <div>
                  <h3
                    className="display-heading text-2xl mb-2"
                    style={{ color: "#f0f0f0" }}
                  >
                    ENTER THE{" "}
                    <span className="neon-text">GIVEAWAY</span>
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Nothing to fill out here. See this week's prizes and exactly how entries work.
                  </p>
                </div>

                {/* Rules */}
                <div className="flex flex-col gap-3">
                  {entryRules.map((rule, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-sm flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(57, 255, 20, 0.08)",
                          border: "1px solid rgba(57, 255, 20, 0.25)",
                          color: "#39ff14",
                        }}
                      >
                        {rule.icon}
                      </div>
                      <span
                        className="text-sm"
                        style={{ color: "#aaa", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {rule.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-4">
                  <a
                    href="#"
                    className="btn-neon-solid rounded-sm w-full flex items-center justify-center gap-2"
                  >
                    Enter the Giveaway <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
