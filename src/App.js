import "./Styles/Global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorDetails from "./Pages/ContractorDetails";
import Nav from "./Components/Navbar";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/profile" element={<ContractorDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
