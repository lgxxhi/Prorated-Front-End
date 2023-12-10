import React, { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return (
    <UsersContext.Provider value={{ userData, setUserData }}>
      {children}
    </UsersContext.Provider>
  );
};
