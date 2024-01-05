import React, { createContext, useState, useEffect } from "react";
import { useAuth } from "../Firebase/AuthContext";
import { fetchUserInfo } from "../Api/Api";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser && !userData) {
      try {
        // fetch user info
        fetchUserInfo(authUser.email).then((data) => setUserData(data));
      } catch (error) {
        console.log(error);
      }
    }
  }, [authUser, userData]);

  return (
    <UsersContext.Provider value={{ userData, setUserData }}>
      {children}
    </UsersContext.Provider>
  );
};
