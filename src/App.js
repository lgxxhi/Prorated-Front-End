import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/Global.scss";
import Nav from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import ContractorDetails from "./Pages/ContractorDetails";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ContractorDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
