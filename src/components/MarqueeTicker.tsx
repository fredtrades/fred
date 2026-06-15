/* ============================================================
   DUNGEON TEMPLATE – Marquee Ticker
   Style: Scrolling social proof / partner logos strip
   ============================================================ */

const items = [
  "🏆 Alex M. won $5,678",
  "⚡ 4,600+ Discord Members",
  "🎁 Weekly Giveaways",
  "💰 Sarah K. won $4,105",
  "✅ Best Prop Firm Deals",
  "🔥 Marcus T. won $13,446",
  "🚀 Apex Funding — 80% OFF",
  "💎 Lucid Trading — 65% OFF",
  "🎯 Tradeify — 70% OFF",
  "🏆 Jordan R. won $7,045",
  "⚡ FundedNext — 55% OFF",
  "🎁 New Winners Every Week",
];

export default function MarqueeTicker() {
  return (
    <div
      className="overflow-hidden py-3"
      style={{
        background: "rgba(57, 255, 20, 0.05)",
        borderTop: "1px solid rgba(57, 255, 20, 0.15)",
        borderBottom: "1px solid rgba(57, 255, 20, 0.15)",
      }}
    >
      <div className="flex marquee-track whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 mx-8 text-xs font-medium uppercase tracking-wider flex-shrink-0"
            style={{ color: "#39ff14", fontFamily: "'DM Sans', sans-serif" }}
          >
            {item}
            <span style={{ color: "rgba(57, 255, 20, 0.3)", marginLeft: "0.5rem" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
