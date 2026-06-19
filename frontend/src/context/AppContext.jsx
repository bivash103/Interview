import React, { createContext, useState, useContext } from "react";

// Create context
export const AppContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
      
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken); // trigger re-render
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null); // trigger re-render
  };

  const value = {
    token,
    login,
    logout,
    setToken,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};
