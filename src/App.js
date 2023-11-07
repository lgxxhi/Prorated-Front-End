import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorListings from "./Components/ContractorListings/ContractorListings";
import contractorData from "./contractorData.json";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<ContractorListings contractorData={contractorData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
