import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogInSignup from "./Pages/LogInSignup";
import Nav from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import UserProfile from "./Components/User-profile/UserProfile";
import ManageUserAccount from "./Pages/ManageUserAccount/ManageUserAccount";
import ContractorDetails from "./components/ContractorDetails/ContractorDetails";
import ContractorListings from "./components/ContractorListings/ContractorListings";
import "./Styles/Global.scss";
import "./App.css";



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ContractorDetails />} />
        <Route path="user-profile/:id" element={<UserProfile />} />
        <Route path="user-profile/:id/edit" element={<ManageUserAccount />} />
        <Route path="/login-signup" element={<LogInSignup />} />
        <Route path="/listings" element={<ContractorListings/>} />
      </Routes>
    </Router>
  );
}

export default App;
