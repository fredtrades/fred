/* ============================================================
   DUNGEON TEMPLATE – Navbar Component
   Style: Sticky dark nav, neon green CTA, uppercase labels
   ============================================================ */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "/assets/logo-brand.webp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "PROP FIRMS", href: "#deals" },
    { label: "Risk Calc", href: "#calculator" },
    { label: "Backtesting", href: "#backtesting" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(8, 8, 8, 0.95)"
          : "rgba(8, 8, 8, 0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(57, 255, 20, 0.15)" : "1px solid transparent",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={LOGO_URL}
              alt="Dungeon Logo"
              className="w-9 h-9 object-contain transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]"
            />
            <span
              className="font-bold text-lg tracking-widest uppercase"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                color: "#f0f0f0",
                lineHeight: 1.2,
              }}
            >
              Fred's {" "}
              <span style={{ color: "#39ff14" }}>V-Shape</span>
              <br />
              <span style={{ color: "#39ff14", fontSize: "0.75rem" }}>EXECUTIONS</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest transition-colors duration-150"
                style={{
                  color: "#aaaaaa",
                  letterSpacing: "0.1em",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#39ff14")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#aaaaaa")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://discord.gg/XDXCKTFsgd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-solid text-sm rounded-sm flex items-center gap-2"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.082.114 18.105.133 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Discord
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 transition-colors"
            style={{ color: "#39ff14" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(8, 8, 8, 0.98)",
            borderColor: "rgba(57, 255, 20, 0.15)",
          }}
        >
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest py-2"
                style={{ color: "#aaaaaa", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://discord.gg/XDXCKTFsgd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-solid text-sm rounded-sm text-center mt-2"
              style={{ padding: "0.65rem 1.25rem", fontSize: "0.8rem" }}
              onClick={() => setMobileOpen(false)}
            >
              Join Discord
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
