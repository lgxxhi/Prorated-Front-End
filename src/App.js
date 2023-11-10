import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorDetails from "./Pages/ContractorDetails";
import ManageUserAccount from "./Pages/ManageUserAccount/ManageUserAccount";
import "./Styles/Global.scss";
import Nav from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ContractorDetails />} />
        <Route path="/edit/:id" element={<ManageUserAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
