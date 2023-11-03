import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorDetails from "./Pages/ContractorDetails";
import "./Styles/Global.scss";
import Nav from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import LoginSignup from "./Pages/LogInSignup";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ContractorDetails />} />
          <Route path="/login-signup" element={<LoginSignup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
