/* ============================================================
   DUNGEON TEMPLATE – Winners / Testimonials Section
   Style: Dark cards with payout certificates, green trading charts bg
   ============================================================ */

import { ArrowRight, DollarSign } from "lucide-react";

const WINNERS_BG = "/assets/winners-bg.webp";

const winners = [
  {
    name: "Alex M.",
    handle: "@alexm_trades",
    amount: "$5,678",
    firm: "Apex Funding",
    account: "100K Account",
    date: "Jun 2026",
    avatar: "A",
    color: "#39ff14",
  },
  {
    name: "Sarah K.",
    handle: "@sarahktrades",
    amount: "$4,105",
    firm: "Lucid Trading",
    account: "50K Account",
    date: "Jun 2026",
    avatar: "S",
    color: "#c8a84b",
  },
  {
    name: "Marcus T.",
    handle: "@marcust_fx",
    amount: "$13,446",
    firm: "Tradeify",
    account: "Lifetime Payouts",
    date: "May 2026",
    avatar: "M",
    color: "#39ff14",
  },
  {
    name: "Jordan R.",
    handle: "@jordanr_pro",
    amount: "$7,045",
    firm: "FundedNext",
    account: "50K Account",
    date: "May 2026",
    avatar: "J",
    color: "#c8a84b",
  },
  {
    name: "Tyler B.",
    handle: "@tylerb_futures",
    amount: "$1,353",
    firm: "Tradeify",
    account: "25K Account",
    date: "Apr 2026",
    avatar: "T",
    color: "#39ff14",
  },
  {
    name: "Casey L.",
    handle: "@caseyl_trader",
    amount: "$1,352",
    firm: "Tradeify",
    account: "25K Account",
    date: "Apr 2026",
    avatar: "C",
    color: "#c8a84b",
  },
];

export default function WinnersSection() {
  return (
    <section
      id="winners"
      className="relative py-24 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${WINNERS_BG})`,
          opacity: 0.08,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(8,8,8,1) 0%, rgba(8,8,8,0.7) 30%, rgba(8,8,8,0.7) 70%, rgba(8,8,8,1) 100%)",
        }}
      />

      <div className="relative z-10 container">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">— Proof of Wins</p>
          <h2
            className="display-heading"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#f0f0f0" }}
          >
            REAL TRADERS,{" "}
            <span className="neon-text">REAL PRIZES</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto text-sm"
            style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}
          >
            Weekly winners drawn live in our Discord. You could be next.
          </p>
        </div>

        {/* Winners grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {winners.map((w, i) => (
            <div
              key={i}
              className="dungeon-card rounded-sm p-5"
            >
              {/* Certificate header */}
              <div
                className="text-center py-2 mb-4 rounded-sm"
                style={{
                  background: "rgba(57, 255, 20, 0.04)",
                  border: "1px solid rgba(57, 255, 20, 0.12)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#555", fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem" }}
                >
                  Payout Certificate
                </p>
                <p
                  className="font-bold text-xs mt-0.5 uppercase tracking-wider"
                  style={{ color: "#888", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem" }}
                >
                  Proudly Awarded To
                </p>
              </div>

              {/* Winner info */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{
                    background: `${w.color}18`,
                    border: `1px solid ${w.color}40`,
                    color: w.color,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {w.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#f0f0f0", fontFamily: "'DM Sans', sans-serif" }}>
                    {w.name}
                  </p>
                  <p className="text-xs" style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}>
                    {w.handle}
                  </p>
                </div>
              </div>

              {/* Amount */}
              <div className="text-center py-3 mb-3 rounded-sm" style={{ background: "rgba(0,0,0,0.3)" }}>
                <div className="flex items-center justify-center gap-1">
                  <DollarSign size={14} style={{ color: w.color }} />
                  <span
                    className="display-heading"
                    style={{
                      fontSize: "2rem",
                      color: w.color,
                      textShadow: `0 0 12px ${w.color}60`,
                    }}
                  >
                    {w.amount}
                  </span>
                </div>
                <p className="text-xs mt-1" style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}>
                  {w.account}
                </p>
              </div>

              {/* Firm + date */}
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-semibold"
                  style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {w.firm}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "#444", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {w.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#giveaway"
            className="btn-neon-solid rounded-sm inline-flex items-center gap-2"
          >
            Enter the Giveaways <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
