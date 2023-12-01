import React, { useState, createContext } from "react";

export const ContractorsContext = createContext();

export const ContractorsContextProvider = (props) => {
  const [contractors, setContractors] = useState([]);
  const [selectedContractor, setSelectedContractor] = useState(null);
  const [userData, setUserData] = useState(null);

  const addContractor = (contractor) => {
    setContractors([...contractors, contractor]);
  };

  const setNewUserData = (data) => {
    setUserData(data);
  };

  return (
    <ContractorsContext.Provider
      value={{
        contractors,
        setContractors,
        addContractor,
        selectedContractor,
        setSelectedContractor,
        userData,
        setNewUserData,
      }}
    >
      {props.children}
    </ContractorsContext.Provider>
  );
};
