import "./Styles/Global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorDetails from "./Components/ContractorDetails/ContractorDetails";
import ContractorListings from "./Components/ContractorListings/ContractorListings";
import contractorData from "./contractorData.json";
import LogInSignup from "./Pages/LogInSignup";
import ManageUserAccount from "./Pages/ManageUserAccount/ManageUserAccount";
import Nav from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ContractorDetails />} />
            <Route path="/edit/:id" element={<ManageUserAccount />} />
            <Route path="/login-signup" element={<LogInSignup />} />
            <Route
              path="/listings"
              element={<ContractorListings contractorData={contractorData} />}
            />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
