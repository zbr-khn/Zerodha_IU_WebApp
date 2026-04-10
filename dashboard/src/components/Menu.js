import React, { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleCloseDropdown = () => {
    setIsProfileDropdownOpen(false);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Dashboard logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{user?.initials || "U"}</div>
          <p className="username">{user?.name || "User"}</p>
        </div>
        {isProfileDropdownOpen && (
          <div style={{
            position: "absolute",
            top: "100%",
            right: "0",
            backgroundColor: "#ffffff",
            border: "1px solid #ddd",
            borderRadius: "12px",
            boxShadow: "0 16px 40px rgba(15, 23, 42, 0.12)",
            minWidth: "220px",
            zIndex: 1000,
            marginTop: "12px",
            overflow: "hidden",
          }}>
            <div style={{
              padding: "18px 16px",
              borderBottom: "1px solid #f3f4f6",
              backgroundColor: "#f8fafc",
            }}>
              <p style={{ margin: 0, fontWeight: 700 }}>{user?.name || "User"}</p>
              <p style={{ margin: "6px 0 0", fontSize: "0.9rem", color: "#6b7280" }}>
                {user?.email || "user@example.com"}
              </p>
            </div>
            <button
              onClick={handleCloseDropdown}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "none",
                backgroundColor: "transparent",
                textAlign: "left",
                cursor: "pointer",
                fontSize: "0.95rem",
                color: "#111827",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#f8f9fa"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            >
              View profile
            </button>
            <button
              onClick={handleCloseDropdown}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "none",
                backgroundColor: "transparent",
                textAlign: "left",
                cursor: "pointer",
                fontSize: "0.95rem",
                color: "#111827",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#f8f9fa"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            >
              Settings
            </button>
            <button
              onClick={handleCloseDropdown}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "none",
                backgroundColor: "transparent",
                textAlign: "left",
                cursor: "pointer",
                fontSize: "0.95rem",
                color: "#111827",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#f8f9fa"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            >
              Support
            </button>
            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "none",
                backgroundColor: "transparent",
                textAlign: "left",
                cursor: "pointer",
                fontSize: "0.95rem",
                color: "#e74c3c",
                fontWeight: 600,
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#f8fafa"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
