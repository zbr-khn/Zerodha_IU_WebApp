import React, { useState, useCallback } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  user: null,
  signup: (userData) => {},
  login: (email, password) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignup = useCallback((userData) => {
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: userData.name,
      email: userData.email,
      initials: userData.name
        .split(" ")
        .map((n) => n.charAt(0))
        .join("")
        .toUpperCase(),
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    setIsLoggedIn(true);

    return newUser;
  }, []);

  const handleLogin = useCallback((email, password) => {
    // For demo purposes, just verify email is not empty
    if (email && password) {
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        email: email,
        initials: email.charAt(0).toUpperCase(),
      };
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setIsLoggedIn(true);
      return user;
    }
    return null;
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        signup: handleSignup,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
