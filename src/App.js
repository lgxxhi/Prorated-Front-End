import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorDetails from "./Pages/ContractorDetails";
import "./Styles/Global.scss";
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
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
