import ContractorDetails from "./Components/ContractorDetails/ContractorDetails";
import "./Styles/Global.scss";
import LogInSignup from "./Pages/LogInSignup";
import Nav from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorListings from "./Components/ContractorListings/ContractorListings";
import contractorData from "./contractorData.json";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ContractorDetails />} />
        <Route path="/login-signup" element={<LogInSignup />} />
        <Route
          path="/listings"
          element={<ContractorListings contractorData={contractorData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
