/* ============================================================
   DUNGEON TEMPLATE – Deals / Partners Section
   Style: Dark cards with neon hover, badge ratings, discount codes
   ============================================================ */

import { Star, ExternalLink, TrendingUp } from "lucide-react";

interface Deal {
  id: number;
  name: string;
  badge: string;
  discount: string;
  code: string;
  rating: number;
  description: string;
  tag: string;
  tagColor: string;
  featured?: boolean;
  category?: string;
  logo?: string;
  url?: string;
}

const deals: Deal[] = [
  {
    id: 1,
    name: "Lucid Trading",
    badge: "#1",
    discount: "30% OFF",
    code: "VAULT",
    rating: 5,
    description: "Industry-leading futures prop firm with fast payouts and trader-friendly rules.",
    tag: "TOP RATED",
    tagColor: "#c8a84b",
    featured: true,
    category: "Prop Firms",
    logo: "/assets/logo-lucid.png",
    url: "https://lucidtrading.com/",
  },
  {
    id: 2,
    name: "Tradeify",
    badge: "#2",
    discount: "40% OFF",
    code: "JUNE",
    rating: 4,
    description: "Flexible funding options, simple rules, and one of the most trader-focused ecosystems.",
    tag: "POPULAR",
    tagColor: "#39ff14",
    category: "Prop Firms",
    logo: "/assets/logo-tradeify.png",
    url: "https://tradeify.co/",
  },
  {
    id: 3,
    name: "AlphaFutures",
    badge: "#3",
    discount: "25% OFF",
    code: "FRED",
    rating: 4,
    description: "Built for serious futures traders with competitive pricing and reliable payouts.",
    tag: "FUTURES",
    tagColor: "#39ff14",
    category: "Prop Firms",
    logo: "/assets/logo-alphafutures.png",
    url: "https://app.alpha-futures.com/signup/Frederik010717/",
  },
  {
    id: 4,
    name: "FundedFuturesFamily",
    badge: "#4",
    discount: "75% OFF",
    code: "FRED",
    rating: 5,
    description: "Community-driven prop firm offering generous discounts and straightforward funding.",
    tag: "BEST DEAL",
    tagColor: "#39ff14",
    category: "Prop Firms",
    logo: "/assets/logo-fffamily.svg",
    url: "https://app.fundedfuturesfamily.com/affiliation/?ref_code=1b172420-82c9-4ab7-a146-e63b7a652709",
  },
  {
    id: 5,
    name: "FundedNext",
    badge: "#5",
    discount: "47% OFF",
    code: "FLEXJU",
    rating: 4,
    description: "Global prop firm with high profit splits and a really strong trader support.",
    tag: "HIGH PAYOUT",
    tagColor: "#c8a84b",
    category: "Prop Firms",
    logo: "/assets/logo-fundednext.png",
    url: "https://fundednext.com/futures",
  },
  {
    id: 6,
    name: "Tradecopia",
    badge: "#1",
    discount: "30% OFF",
    code: "FRED",
    rating: 4,
    description: "Leading futures copy trading platform designed for passive and active traders.",
    tag: "COPY TRADER",
    tagColor: "#888888",
    category: "Copy Trader",
    logo: "/assets/logo-tradecopia.png",
    url: "https://tradecopia.com/",
  },
  {
    id: 7,
    name: "MyFundedFutures",
    badge: "#6",
    discount: "20% OFF",
    code: "RAPID",
    rating: 4,
    description: "Popular futures prop firm known for fast payouts and flexible account options.",
    tag: "PROP FIRM",
    tagColor: "#39ff14",
    category: "Prop Firms",
    logo: "/assets/logo-myfundedfutures.png",
    url: "https://myfundedfutures.com/",
  },
];

const propFirms = deals.filter(d => d.category === "Prop Firms");
const copyTraders = deals.filter(d => d.category === "Copy Trader");

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={12}
          fill={i <= rating ? "#c8a84b" : "transparent"}
          stroke={i <= rating ? "#c8a84b" : "#444"}
        />
      ))}
    </div>
  );
}

function DealCard({ deal }: { deal: Deal }) {
  return (
    <div
      className="dungeon-card rounded-sm relative overflow-hidden"
      style={{
        border: deal.featured
          ? "1px solid rgba(57, 255, 20, 0.4)"
          : "1px solid rgba(57, 255, 20, 0.12)",
        boxShadow: deal.featured
          ? "0 0 24px rgba(57, 255, 20, 0.12)"
          : undefined,
      }}
    >
      {/* Featured glow strip */}
      {deal.featured && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: "linear-gradient(to right, transparent, #39ff14, transparent)" }}
        />
      )}

      <div className="p-3 md:p-5">
        {/* Logo */}
        {deal.logo && (
          <div className="mb-4 flex justify-center">
            <img
              src={deal.logo}
              alt={deal.name}
              className="h-8 object-contain"
              style={{ maxWidth: "100%" }}
            />
          </div>
        )}
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Rank badge */}
            <div
              className="w-10 h-10 rounded-sm flex items-center justify-center font-bold text-sm"
              style={{
                background: "rgba(57, 255, 20, 0.08)",
                border: "1px solid rgba(57, 255, 20, 0.3)",
                color: "#39ff14",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
              }}
            >
              {deal.badge}
            </div>
            <div>
              <h3
                className="font-bold text-base"
                style={{ color: "#f0f0f0", fontFamily: "'DM Sans', sans-serif" }}
              >
                {deal.name}
              </h3>
              <StarRating rating={deal.rating} />
            </div>
          </div>
          {/* Tag */}
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider"
            style={{
              background: `${deal.tagColor}18`,
              color: deal.tagColor,
              border: `1px solid ${deal.tagColor}40`,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
            }}
          >
            {deal.tag}
          </span>
        </div>

        {/* Description */}
        <p
          className="text-sm mb-4 leading-relaxed"
          style={{ color: "#777", fontFamily: "'DM Sans', sans-serif" }}
        >
          {deal.description}
        </p>

        {/* Discount + code */}
        <div
          className="flex items-center justify-between py-3 px-3 rounded-sm mb-4"
          style={{ background: "rgba(57, 255, 20, 0.05)", border: "1px dashed rgba(57, 255, 20, 0.25)" }}
        >
          <div className="flex items-center gap-2">
            <TrendingUp size={14} style={{ color: "#39ff14" }} />
            <span
              className="font-bold text-xl"
              style={{ color: "#39ff14", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              {deal.discount}
            </span>
          </div>
          <div className="text-right">
            <p className="text-xs" style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}>Use code</p>
            <p
              className="font-bold text-sm tracking-widest"
              style={{ color: "#c8a84b", fontFamily: "'DM Sans', sans-serif" }}
            >
              {deal.code}
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href={deal.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-sm text-sm font-semibold uppercase tracking-wider transition-all duration-150"
          style={{
            background: deal.featured ? "#39ff14" : "transparent",
            color: deal.featured ? "#080808" : "#39ff14",
            border: `1px solid ${deal.featured ? "#39ff14" : "rgba(57, 255, 20, 0.4)"}`,
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.08em",
            fontSize: "0.75rem",
            boxShadow: deal.featured ? "0 0 16px rgba(57, 255, 20, 0.3)" : undefined,
          }}
          onMouseEnter={(e) => {
            if (!deal.featured) {
              e.currentTarget.style.background = "rgba(57, 255, 20, 0.08)";
            }
          }}
          onMouseLeave={(e) => {
            if (!deal.featured) {
              e.currentTarget.style.background = "transparent";
            }
          }}
        >
          Get Deal <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}

export default function DealsSection() {
  return (
    <section id="deals" className="py-24" style={{ background: "#080808" }}>
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">— Exclusive Offers</p>
          <h2
            className="display-heading"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#f0f0f0" }}
          >
            TOP RATED{" "}
            <span className="neon-text">PROP FIRMS</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto text-sm"
            style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}
          >
            Trusted prop firms with exclusive discounts. Save up to 75% using code{" "}
            <span style={{ color: "#39ff14", fontWeight: 700 }}>FRED</span>.
          </p>
        </div>

        {/* Prop Firms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {propFirms.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>

        {/* Copy Trader Section */}
        {copyTraders.length > 0 && (
          <>
            <div className="text-center mb-12 mt-20">
              <h3
                className="display-heading"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#f0f0f0" }}
              >
                <span className="neon-text">COPY TRADER</span>
              </h3>
            </div>
            <div className={copyTraders.length === 1 ? "flex justify-center" : ""}>
              <div className={copyTraders.length === 1 ? "w-full max-w-sm" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full"}>
                {copyTraders.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            </div>
          </>
        )}


      </div>
    </section>
  );
}
