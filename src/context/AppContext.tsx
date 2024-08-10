"use client";
import Cookies from "js-cookie";
import { createContext, useContext, useState } from "react";

const AppContext = createContext(null); // Create a context

const AppContextLoader = ({ children }) => {
  const getUserData = Cookies.get("user");
  // const jsonData = JSON.parse(getUserData);
  const jsonData = getUserData ? JSON.parse(getUserData) : null;
  const [user, setUser] = useState<any | undefined | null>(jsonData); // Initialize user state

  const value = {
    user,
    setUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
// @ts-ignore
const useAppContext = () => useContext(AppContext); // Create a hook to consume the context

export default AppContextLoader;
export { useAppContext };
