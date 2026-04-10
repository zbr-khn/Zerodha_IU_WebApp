import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null; // Return null while redirecting
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
