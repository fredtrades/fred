/* ============================================================
   DUNGEON TEMPLATE – Backtesting Footer Section
   Style: Editable backtesting results with delete functionality
   ============================================================ */

import { useState } from "react";
import { X } from "lucide-react";

interface BacktestYear {
  year: string;
  image: string;
}

const initialBacktestingYears: BacktestYear[] = [
  { year: "2025", image: "/manus-storage/pasted_file_8r8hND_image_9a132d69.png" },
  { year: "2024", image: "/manus-storage/pasted_file_Cfm4vx_image_6958310f.png" },
  { year: "2023", image: "/manus-storage/pasted_file_ZIcogK_image_830dcab0.png" },
  { year: "2022", image: "/manus-storage/pasted_file_Umwm3T_image_ada4da92.png" },
  { year: "2021", image: "/manus-storage/pasted_file_Ksym91_image_70c7fb22.png" },
  { year: "2020", image: "/manus-storage/pasted_file_HaSHAs_image_f6757edd.png" },
];

export default function BacktestingFooterSection() {
  const [backtestingYears, setBacktestingYears] = useState<BacktestYear[]>(initialBacktestingYears);

  const handleDeleteYear = (yearToDelete: string) => {
    setBacktestingYears((prev) => prev.filter((item) => item.year !== yearToDelete));
  };

  return (
    <div
      className="py-20"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(57, 255, 20, 0.08)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: "#39ff14", fontFamily: "'DM Sans', sans-serif" }}
          >
            — Proven Track Record
          </p>
          <h2
            className="display-heading"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#f0f0f0",
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            6+ YEARS OF <span style={{ color: "#39ff14" }}>BACKTESTING</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto text-sm"
            style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}
          >
            Comprehensive historical data and performance analysis across multiple market cycles.
          </p>
        </div>

        {/* Backtesting Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {backtestingYears.map((item) => (
            <div
              key={item.year}
              className="rounded-sm overflow-hidden group relative"
              style={{
                background: "#111111",
                border: "1px solid rgba(57, 255, 20, 0.15)",
              }}
            >
              {/* Image area */}
              <div
                className="relative w-full h-40 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Delete button - appears on hover */}
                <button
                  onClick={() => handleDeleteYear(item.year)}
                  className="absolute top-2 right-2 w-7 h-7 rounded-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  style={{
                    background: "rgba(0, 0, 0, 0.8)",
                    color: "#39ff14",
                    border: "1px solid rgba(57, 255, 20, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0, 0, 0, 0.95)";
                    e.currentTarget.style.borderColor = "rgba(57, 255, 20, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0, 0, 0, 0.8)";
                    e.currentTarget.style.borderColor = "rgba(57, 255, 20, 0.3)";
                  }}
                  title="Delete this year"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3
                  className="display-heading text-2xl mb-1"
                  style={{
                    color: "#39ff14",
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: "0.08em",
                  }}
                >
                  {item.year}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {backtestingYears.length === 0 && (
          <div
            className="text-center py-12"
            style={{
              border: "1px dashed rgba(57, 255, 20, 0.2)",
              borderRadius: "4px",
              background: "rgba(57, 255, 20, 0.02)",
            }}
          >
            <p
              className="text-sm"
              style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}
            >
              Alle backtesting år er blevet slettet. Genindlæs siden for at gendanne dem.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
