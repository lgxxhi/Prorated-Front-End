import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorDetails from "./components/ContractorDetails/ContractorDetails";
import ContractorListings from "./components/ContractorListings/ContractorListings";
import ManageUserAccount from "./Pages/ManageUserAccount/ManageUserAccount";
import LogInSignup from "./Pages/LogInSignup";
import Nav from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import "./Styles/Global.scss";
import "./App.css";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ContractorDetails />} />
        <Route path="/edit/:id" element={<ManageUserAccount />} />
        <Route path="/login-signup" element={<LogInSignup />} />
        <Route path="/listings" element={<ContractorListings/>} />
      </Routes>
    </Router>
  );
}

export default App;
