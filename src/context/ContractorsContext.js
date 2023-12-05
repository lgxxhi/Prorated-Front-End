import React, { useState, createContext } from "react";

export const ContractorsContext = createContext();

export const ContractorsContextProvider = (props) => {
  const [contractors, setContractors] = useState([]);
  const [selectedContractor, setSelectedContractor] = useState(null);

  const addContractor = (contractor) => {
    setContractors([...contractors, contractor]);
  };

  return (
    <ContractorsContext.Provider
      value={{
        contractors,
        setContractors,
        addContractor,
        selectedContractor,
        setSelectedContractor,
      }}
    >
      {props.children}
    </ContractorsContext.Provider>
  );
};
