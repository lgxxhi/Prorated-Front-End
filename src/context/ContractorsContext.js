import React, { useState, createContext } from "react";

export const ContractorsContext = createContext();

export const ContractorsContextProvider = (props) => {
  const [contractors, setContractors] = useState([]);
  const [setselectedContractor, setSetselectedContractor] = useState(null);

  const addContractor = (contractor) => {
    setContractors([...contractors, contractor]);
  };

  return (
    <ContractorsContext.Provider
      value={{
        contractors,
        setContractors,
        addContractor,
        setselectedContractor,
        setselectedContractor,
      }}
    >
      {props.children}
    </ContractorsContext.Provider>
  );
};
