import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorListings from "./Components/ContractorListings/ContractorListings";
import contractorData from "./contractorData.json";

function App() {
  return (
    <div className="App">
      <ContractorListings contractorData={contractorData} />
    </div>
  );
}

export default App;
