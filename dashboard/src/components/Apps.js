import React from "react";
import {
  DashboardOutlined,
  BarChartOutlined,
  NotificationsActive,
  TrendingUp,
} from "@mui/icons-material";

const appCards = [
  {
    title: "Market Scanner",
    description:
      "Scan the market for hot gainers, losers, and unusual volume patterns in one place.",
    icon: <TrendingUp fontSize="large" color="primary" />,
  },
  {
    title: "Trading Signals",
    description:
      "Get buy and sell signals based on momentum, moving averages, and trend filters.",
    icon: <BarChartOutlined fontSize="large" color="primary" />,
  },
  {
    title: "Alerts & News",
    description:
      "Receive timely notifications on price moves, news events, and corporate actions.",
    icon: <NotificationsActive fontSize="large" color="primary" />,
  },
  {
    title: "Portfolio Overview",
    description:
      "Track your positions, performance, and exposure across holdings and sectors.",
    icon: <DashboardOutlined fontSize="large" color="primary" />,
  },
];

const Apps = () => {
  return (
    <div className="apps-page" style={{ padding: "24px" }}>
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ margin: 0, fontSize: "2.5rem" }}>Apps</h1>
        <p style={{ color: "#555", marginTop: "10px", maxWidth: "720px" }}>
          Explore the tools available in the dashboard. Use these apps to analyze stocks, place smarter trades, and monitor market movements in real time.
        </p>
      </div>

      <div
        className="apps-grid"
        style={{
          display: "grid",
          gap: "18px",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        }}
      >
        {appCards.map((app, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "22px",
              background: "#fff",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
              minHeight: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(59, 130, 246, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {app.icon}
              </div>
              <h2 style={{ fontSize: "1.2rem", margin: 0 }}>{app.title}</h2>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.7, marginTop: "18px" }}>
              {app.description}
            </p>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 16px",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#0f172a",
                color: "#fff",
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
              type="button"
            >
              Open app
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "36px",
          padding: "24px",
          borderRadius: "18px",
          background: "#f8fafc",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Tip</h3>
        <p style={{ color: "#475569", lineHeight: 1.75 }}>
          The Apps page is designed to help you access value-added tools quickly. You can enhance it later by adding real integrations, trade signals, charts, or research modules.
        </p>
      </div>
    </div>
  );
};

export default Apps;
