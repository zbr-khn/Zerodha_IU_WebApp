import React from "react";
import { Link } from "react-router-dom";

const fundingOptions = [
  {
    title: "UPI Transfer",
    description: "Instant fund transfer using UPI with zero charges.",
    amount: "₹10,000",
    status: "Available",
  },
  {
    title: "Bank Transfer",
    description: "NEFT / RTGS credited within minutes.",
    amount: "₹25,000",
    status: "Verified",
  },
  {
    title: "Margin Loan",
    description: "Apply for intraday margin financing quickly.",
    amount: "₹50,000",
    status: "Pre-approved",
  },
];

const Funds = () => {
  return (
    <div className="funds-page" style={{ padding: "24px" }}>
      <div
        className="funds-top"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>Funds</h1>
          <p style={{ color: "#6b7280", marginTop: "10px", maxWidth: "680px" }}>
            Manage your trading cash, margin, and transfers in a single place. Use these funding options to add money quickly before placing trades.
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link to="#" className="btn btn-green" style={{ minWidth: "120px" }}>
            Add funds
          </Link>
          <Link to="#" className="btn btn-blue" style={{ minWidth: "120px" }}>
            Withdraw
          </Link>
        </div>
      </div>

      <div
        className="funds-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "18px",
          marginTop: "26px",
        }}
      >
        {fundingOptions.map((option, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "18px",
              padding: "22px",
              minHeight: "170px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 12px 30px rgba(15, 23, 42, 0.04)",
            }}
          >
            <div>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "#6b7280" }}>
                {option.title}
              </p>
              <h2 style={{ marginTop: "12px", marginBottom: "14px", fontSize: "1.35rem" }}>
                {option.amount}
              </h2>
              <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
                {option.description}
              </p>
            </div>
            <span
              style={{
                display: "inline-flex",
                padding: "7px 14px",
                borderRadius: "999px",
                backgroundColor: "#eef2ff",
                color: "#4338ca",
                fontSize: "0.9rem",
                fontWeight: 600,
                alignSelf: "flex-start",
              }}
            >
              {option.status}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "32px", display: "grid", gap: "22px" }}>
        <div
          style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "18px",
            padding: "24px",
            boxShadow: "0 12px 30px rgba(15, 23, 42, 0.04)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Equity Account Summary</h2>
          <div className="row" style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", marginTop: "18px" }}>
            {[
              { label: "Available margin", value: "₹4,043.10" },
              { label: "Used margin", value: "₹3,757.30" },
              { label: "Available cash", value: "₹4,043.10" },
              { label: "Payin credited", value: "₹4,064.00" },
            ].map((item, idx) => (
              <div key={idx} style={{ background: "#f8fafc", borderRadius: "14px", padding: "16px" }}>
                <p style={{ margin: 0, color: "#6b7280", fontSize: "0.95rem" }}>{item.label}</p>
                <p style={{ margin: "10px 0 0", fontSize: "1.1rem", fontWeight: 700 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "24px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div>
            <h2 style={{ margin: 0 }}>Commodity Account</h2>
            <p style={{ marginTop: "10px", color: "#475569" }}>
              You do not have a commodity account yet. Open an account to trade commodity futures and options.
            </p>
          </div>
          <Link to="#" className="btn btn-blue" style={{ minWidth: "150px" }}>
            Open Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Funds;
