import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const fallbackOrders = [
  {
    id: "ORD-1001",
    symbol: "INFY",
    qty: 10,
    price: 1548.25,
    type: "BUY",
    status: "Executed",
    time: "09:15 AM",
  },
  {
    id: "ORD-1002",
    symbol: "HDFCBANK",
    qty: 5,
    price: 1520.0,
    type: "SELL",
    status: "Pending",
    time: "10:03 AM",
  },
  {
    id: "ORD-1003",
    symbol: "TCS",
    qty: 1,
    price: 3194.8,
    type: "BUY",
    status: "Executed",
    time: "11:20 AM",
  },
];

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setOrders(
            res.data.map((order, index) => ({
              id: order.id || `ORD-${1000 + index}`,
              symbol: order.name || order.symbol || "UNKNOWN",
              qty: order.qty || 0,
              price: order.price || 0,
              type: order.mode || order.type || "BUY",
              status: order.status || "Executed",
              time: order.time || "--:--",
            }))
          );
        } else {
          setOrders(fallbackOrders);
          setUseFallback(true);
        }
      })
      .catch(() => {
        setOrders(fallbackOrders);
        setUseFallback(true);
      });
  }, []);

  return (
    <div className="orders" style={{ padding: "24px" }}>
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ margin: 0 }}>Orders</h1>
        <p style={{ color: "#6b7280", marginTop: "10px", maxWidth: "720px" }}>
          Review your order history and track execution status for your trades.
          This page shows live orders when connected to the backend, or demo orders for your screen recording.
        </p>
      </div>

      {orders.length > 0 ? (
        <div className="orders-table" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "1px solid #e5e7eb" }}>
                <th style={{ padding: "12px 10px" }}>Order ID</th>
                <th style={{ padding: "12px 10px" }}>Symbol</th>
                <th style={{ padding: "12px 10px" }}>Qty.</th>
                <th style={{ padding: "12px 10px" }}>Price</th>
                <th style={{ padding: "12px 10px" }}>Type</th>
                <th style={{ padding: "12px 10px" }}>Status</th>
                <th style={{ padding: "12px 10px" }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "12px 10px" }}>{order.id}</td>
                  <td style={{ padding: "12px 10px" }}>{order.symbol}</td>
                  <td style={{ padding: "12px 10px" }}>{order.qty}</td>
                  <td style={{ padding: "12px 10px" }}>₹{order.price.toFixed(2)}</td>
                  <td style={{ padding: "12px 10px", color: order.type === "SELL" ? "#dc2626" : "#16a34a" }}>
                    {order.type}
                  </td>
                  <td style={{ padding: "12px 10px" }}>{order.status}</td>
                  <td style={{ padding: "12px 10px" }}>{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-orders" style={{ textAlign: "center", padding: "60px 20px" }}>
          <p style={{ color: "#9ca3af", marginBottom: "20px", fontSize: "1.05rem" }}>
            You haven't placed any orders yet.
          </p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      )}

      {useFallback && (
        <div
          style={{
            marginTop: "24px",
            padding: "18px",
            background: "#f8fafc",
            borderRadius: "14px",
            color: "#475569",
          }}
        >
          <strong>Demo mode:</strong> This page is displaying sample orders because live order data is not available from the backend.
        </div>
      )}
    </div>
  );
};

export default Orders;
