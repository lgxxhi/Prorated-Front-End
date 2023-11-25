import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorDetails from "./Pages/ContractorDetails";
import ManageUserAccount from "./Pages/ManageUserAccount/ManageUserAccount";
import LogInSignup from "./Pages/LogInSignup";
import Nav from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import { AuthProvider } from "./Components/Firebase/AuthContext";
import "./Styles/Global.scss";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ContractorDetails />} />
          <Route path="/edit/:id" element={<ManageUserAccount />} />
          <Route path="/login-signup" element={<LogInSignup />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
