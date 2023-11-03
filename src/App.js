import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorDetails from "./Pages/ContractorDetails";
import "./Styles/Global.scss";
import LogInSignup from "./Pages/LogInSignup";
import Nav from "./Components/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ContractorDetails />} />
        <Route path="/login-signup" element={<LogInSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
