/* ============================================================
   DUNGEON TEMPLATE – Footer
   Style: Dark 3-column footer, neon logo, social links
   ============================================================ */

import BacktestingFooterSection from "./BacktestingFooterSection";

const LOGO_URL = "/assets/logo-brand.webp";

const footerLinks = {
  Explore: [
    { label: "Prop Firm Deals", href: "#deals" },
    { label: "Risk Calculator", href: "#calculator" },
    { label: "Backtesting", href: "#backtesting" },
  ],
  "Prop Firms": [
    { label: "Lucid Trading", href: "https://lucidtrading.com/" },
    { label: "Tradeify", href: "https://tradeify.co/" },
    { label: "Alpha Futures", href: "https://app.alpha-futures.com/signup/Frederik010717/" },
    { label: "FundedFuturesFamily", href: "https://app.fundedfuturesfamily.com/affiliation/?ref_code=1b172420-82c9-4ab7-a146-e63b7a652709" },
    { label: "FundedNext", href: "https://fundednext.com/futures" },
    { label: "MyFundedFutures", href: "https://myfundedfutures.com/" },
  ],
  Socials: [
    { label: "Discord", href: "https://discord.gg/XDXCKTFsgd" },
    { label: "Instagram", href: "https://www.instagram.com/fj.trades/" },
    { label: "TikTok", href: "https://www.tiktok.com/@fredtrades_" },
    { label: "YouTube", href: "https://www.youtube.com/@fredtrades" },
    { label: "X (Twitter)", href: "https://x.com/fjtrades" },
  ],
};



export default function Footer() {
  return (
    <footer
      className="pt-0 pb-8"
      style={{
        background: "#080808",
      }}
    >


      {/* Footer Links Section */}
      <div
        style={{
          background: "#080808",
          borderTop: "1px solid rgba(57, 255, 20, 0.12)",
        }}
      >
        <div className="container pt-16 pb-8">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand column */}
            <div className="md:col-span-1">
              <a href="#" className="flex items-center gap-3 mb-4">
                <img
                  src={LOGO_URL}
                  alt="Dungeon Logo"
                  className="w-10 h-10 object-contain"
                />
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.1rem",
                    letterSpacing: "0.08em",
                    color: "#f0f0f0",
                  }}
                >
                  FRED'S <span style={{ color: "#39ff14" }}>V-SHAPE</span>
                  <br />
                  <span style={{ color: "#39ff14" }}>EXECUTIONS</span>
                </span>
              </a>
              <p
                className="text-xs leading-relaxed mb-5"
                style={{ color: "#555", fontFamily: "'DM Sans', sans-serif", maxWidth: "200px" }}
              >
                6+ years of backtested V-shape setups. Best prop firm deals and a strong community with traders.
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                {[
                  { label: "Discord", href: "https://discord.gg/XDXCKTFsgd", svg: <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.082.114 18.105.133 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/> },
                  { label: "X", href: "https://x.com/fjtrades", svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/> },
                  { label: "Instagram", href: "https://www.instagram.com/fj.trades", svg: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/> },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href || "#"}
                    target={s.href?.startsWith("http") ? "_blank" : undefined}
                    rel={s.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-8 h-8 rounded-sm flex items-center justify-center transition-all duration-150"
                    style={{
                      background: "rgba(57, 255, 20, 0.06)",
                      border: "1px solid rgba(57, 255, 20, 0.15)",
                      color: "#555",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#39ff14";
                      e.currentTarget.style.borderColor = "rgba(57, 255, 20, 0.4)";
                      e.currentTarget.style.background = "rgba(57, 255, 20, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#555";
                      e.currentTarget.style.borderColor = "rgba(57, 255, 20, 0.15)";
                      e.currentTarget.style.background = "rgba(57, 255, 20, 0.06)";
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      {s.svg}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "#39ff14", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {section}
                </h4>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href?.startsWith("http") ? "_blank" : undefined}
                        rel={link.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm transition-colors duration-150"
                        style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#aaa")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(57, 255, 20, 0.08)", marginBottom: "1.5rem" }} />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p
              className="text-xs"
              style={{ color: "#333", fontFamily: "'DM Sans', sans-serif" }}
            >
              © 2026 Your Dungeon · Futures trading involves substantial risk of loss.
            </p>
            <p
              className="text-xs text-center md:text-right max-w-md"
              style={{ color: "#2a2a2a", fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem" }}
            >
              This site partners with the firms listed and may earn a commission when you sign up using our links or discount code, at no extra cost to you. Not financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
