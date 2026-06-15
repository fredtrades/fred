/* ============================================================
   DUNGEON TEMPLATE – Risk Calculator
   Style: Futures trading calculator for MNQ ($2/pt) and NQ ($20/pt)
          Dark cards, neon inputs, live calculations
   ============================================================ */

import { useState, useMemo } from "react";

export default function RiskCalculator() {
  const [riskAmount, setRiskAmount] = useState(1150);
  const [mnqStoploss, setMnqStoploss] = useState<string | number>("");
  const [nqStoploss, setNqStoploss] = useState<string | number>("");

  // MNQ: $2 per point
  // NQ: $20 per point

  const mnqCalc = useMemo(() => {
    const mnqValue = typeof mnqStoploss === "string" ? 0 : mnqStoploss;
    if (mnqValue <= 0) return { risk: 0, contracts: 0, totalRisk: 0, deviation: 0 };
    const riskPerContract = mnqValue * 2; // $2 per point
    const contracts = Math.floor(riskAmount / riskPerContract);
    const actualRisk = contracts * riskPerContract;
    const deviation = riskAmount - actualRisk;
    return { risk: riskPerContract, contracts, totalRisk: actualRisk, deviation };
  }, [riskAmount, mnqStoploss]);

  const nqCalc = useMemo(() => {
    const nqValue = typeof nqStoploss === "string" ? 0 : nqStoploss;
    if (nqValue <= 0) return { risk: 0, contracts: 0, totalRisk: 0, deviation: 0 };
    const riskPerContract = nqValue * 20; // $20 per point
    const contracts = Math.floor(riskAmount / riskPerContract);
    const actualRisk = contracts * riskPerContract;
    const deviation = riskAmount - actualRisk;
    return { risk: riskPerContract, contracts, totalRisk: actualRisk, deviation };
  }, [riskAmount, nqStoploss]);

  return (
    <section
      id="calculator"
      className="py-24"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(57, 255, 20, 0.08)",
      }}
    >
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: "#39ff14", fontFamily: "'DM Sans', sans-serif" }}
          >
            — Futures Trading
          </p>
          <h2
            className="display-heading"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#f0f0f0" }}
          >
            RISK <span className="neon-text">CALCULATOR</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto text-sm"
            style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}
          >
            MNQ & NQ — Stoploss — Contracts
          </p>
        </div>

        {/* Risk Amount Input */}
        <div
          className="mb-10 p-6 rounded-sm"
          style={{
            background: "#111111",
            border: "1px solid rgba(57, 255, 20, 0.2)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <label
                className="text-xs uppercase tracking-widest"
                style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}
              >
                Risk per trade ($)
              </label>
              <p
                className="display-heading text-4xl mt-2"
                style={{ color: "#39ff14", textShadow: "0 0 12px rgba(57, 255, 20, 0.6)" }}
              >
                ${riskAmount.toLocaleString()}
              </p>
            </div>
            <input
              type="range"
              min="10"
              max="5000"
              step="10"
              value={riskAmount}
              onChange={(e) => setRiskAmount(Number(e.target.value))}
              className="w-full sm:w-64 h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: "linear-gradient(to right, #39ff14, #39ff14)",
                WebkitAppearance: "none",
              }}
            />
            <input
              type="number"
              value={riskAmount}
              onChange={(e) => setRiskAmount(Math.max(10, Number(e.target.value)))}
              className="w-24 px-3 py-2 rounded-sm text-right font-bold"
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(57, 255, 20, 0.3)",
                color: "#39ff14",
                fontFamily: "'DM Sans', sans-serif",
              }}
            />
          </div>
          <p
            className="text-xs mt-3"
            style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}
          >
            Adjust your desired risk amount per trade
          </p>
        </div>

        {/* Calculator Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* MNQ Card */}
          <div
            className="rounded-sm p-6"
            style={{
              background: "#111111",
              border: "1px solid rgba(57, 255, 20, 0.2)",
            }}
          >
            <div className="mb-6">
              <h3
                className="display-heading text-3xl"
                style={{ color: "#39ff14", marginBottom: "0.5rem" }}
              >
                $MNQ
              </h3>
              <p
                className="text-xs"
                style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}
              >
                Micro Nasdaq
              </p>
              <p
                className="text-xs mt-1 font-semibold"
                style={{ color: "#39ff14", fontFamily: "'DM Sans', sans-serif" }}
              >
                $2.00 per point
              </p>
            </div>

            {/* Stoploss Input */}
            <div className="mb-6">
              <label
                className="text-xs uppercase tracking-widest"
                style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}
              >
                Stoploss in points
              </label>
              <input
                type="number"
                value={mnqStoploss}
                onChange={(e) => setMnqStoploss(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="Enter stoploss"
                className="w-full mt-2 px-4 py-3 rounded-sm text-2xl font-bold text-center"
                style={{
                  background: "#0a0a0a",
                  border: "2px solid rgba(57, 255, 20, 0.3)",
                  color: "#39ff14",
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.05em",
                }}
              />
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div
                className="p-4 rounded-sm"
                style={{
                  background: "rgba(57, 255, 20, 0.05)",
                  border: "1px solid rgba(57, 255, 20, 0.15)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Risk per contract
                </p>
                <p
                  className="display-heading text-2xl mt-1"
                  style={{ color: "#39ff14" }}
                >
                  ${mnqCalc.risk.toFixed(2)}
                </p>
              </div>

              <div
                className="p-4 rounded-sm"
                style={{
                  background: "rgba(57, 255, 20, 0.05)",
                  border: "1px solid rgba(57, 255, 20, 0.15)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Contracts
                </p>
                <p
                  className="display-heading text-2xl mt-1"
                  style={{ color: "#39ff14" }}
                >
                  {mnqCalc.contracts}
                </p>
              </div>

              <div
                className="p-4 rounded-sm"
                style={{
                  background: "rgba(57, 255, 20, 0.08)",
                  border: "2px solid rgba(57, 255, 20, 0.3)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Total risk
                </p>
                <p
                  className="display-heading text-3xl mt-1"
                  style={{
                    color: "#39ff14",
                    textShadow: "0 0 16px rgba(57, 255, 20, 0.5)",
                  }}
                >
                  ${mnqCalc.totalRisk.toFixed(2)}
                </p>
              </div>

              {mnqCalc.deviation > 0 && (
                <div
                  className="p-3 rounded-sm text-xs"
                  style={{
                    background: "rgba(200, 168, 75, 0.08)",
                    border: "1px solid rgba(200, 168, 75, 0.2)",
                    color: "#c8a84b",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Deviation from target: +${mnqCalc.deviation.toFixed(2)}
                </div>
              )}
            </div>
          </div>

          {/* NQ Card */}
          <div
            className="rounded-sm p-6"
            style={{
              background: "#111111",
              border: "1px solid rgba(200, 168, 75, 0.2)",
            }}
          >
            <div className="mb-6">
              <h3
                className="display-heading text-3xl"
                style={{ color: "#c8a84b", marginBottom: "0.5rem" }}
              >
                $NQ
              </h3>
              <p
                className="text-xs"
                style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}
              >
                E-mini Nasdaq
              </p>
              <p
                className="text-xs mt-1 font-semibold"
                style={{ color: "#c8a84b", fontFamily: "'DM Sans', sans-serif" }}
              >
                $20.00 per point
              </p>
            </div>

            {/* Stoploss Input */}
            <div className="mb-6">
              <label
                className="text-xs uppercase tracking-widest"
                style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}
              >
                Stoploss in points
              </label>
              <input
                type="number"
                value={nqStoploss}
                onChange={(e) => setNqStoploss(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="Enter stoploss"
                className="w-full mt-2 px-4 py-3 rounded-sm text-2xl font-bold text-center"
                style={{
                  background: "#0a0a0a",
                  border: "2px solid rgba(200, 168, 75, 0.3)",
                  color: "#c8a84b",
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.05em",
                }}
              />
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div
                className="p-4 rounded-sm"
                style={{
                  background: "rgba(200, 168, 75, 0.05)",
                  border: "1px solid rgba(200, 168, 75, 0.15)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Risk per contract
                </p>
                <p
                  className="display-heading text-2xl mt-1"
                  style={{ color: "#c8a84b" }}
                >
                  ${nqCalc.risk.toFixed(2)}
                </p>
              </div>

              <div
                className="p-4 rounded-sm"
                style={{
                  background: "rgba(200, 168, 75, 0.05)",
                  border: "1px solid rgba(200, 168, 75, 0.15)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Contracts
                </p>
                <p
                  className="display-heading text-2xl mt-1"
                  style={{ color: "#c8a84b" }}
                >
                  {nqCalc.contracts}
                </p>
              </div>

              <div
                className="p-4 rounded-sm"
                style={{
                  background: "rgba(200, 168, 75, 0.08)",
                  border: "2px solid rgba(200, 168, 75, 0.3)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Total risk
                </p>
                <p
                  className="display-heading text-3xl mt-1"
                  style={{
                    color: "#c8a84b",
                    textShadow: "0 0 16px rgba(200, 168, 75, 0.5)",
                  }}
                >
                  ${nqCalc.totalRisk.toFixed(2)}
                </p>
              </div>

              {nqCalc.deviation > 0 && (
                <div
                  className="p-3 rounded-sm text-xs"
                  style={{
                    background: "rgba(57, 255, 20, 0.08)",
                    border: "1px solid rgba(57, 255, 20, 0.2)",
                    color: "#39ff14",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Deviation from target: +${nqCalc.deviation.toFixed(2)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div
          className="mt-10 p-4 rounded-sm text-center text-xs"
          style={{
            background: "rgba(57, 255, 20, 0.04)",
            border: "1px solid rgba(57, 255, 20, 0.12)",
            color: "#666",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          MNQ = $2/point · NQ = $20/point · Calculate full contracts only · Adjust risk to match your strategy
        </div>
      </div>
    </section>
  );
}
