import "./Styles/Global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorDetails from "./Components/ContractorDetails/ContractorDetails";
import ContractorListings from "./Components/ContractorListings/ContractorListings";
import contractorData from "./contractorData.json";
import LogInSignup from "./Pages/LogInSignup";
import UserProfile from "./Components/User-profile/UserProfile";
import ManageUserAccount from "./Components/ManageUserAccount/ManageUserAccount";
import Nav from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer";
import { ContractorsContextProvider } from "./context/ContractorsContext";
import Reviews from "./Components/Reviews/Reviews";
import ContractorReviewDetails from "./Components/ContractorReviewDetails/ContractorReviewDetails";
import AddContractorReview from "./Components/AddContractorReview/AddContractorReview";

function App() {
  return (

    <ContractorsContextProvider>
      <div className="App">
        <div className="content-wrap">
          <Router>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:id" element={<ContractorDetails />} />
                     <Route
              path="/user-profile/:id/edit"
              element={<ManageUserAccount />}
            />
                  <Route path="/user-profile/:id" element={<UserProfile />} />
                
                
              <Route path="/login-signup" element={<LogInSignup />} />
              <Route
                path="/listings"
                element={<ContractorListings contractorData={contractorData} />}
              />
              <Route path="/reviews" element={<Reviews />} />
              <Route
                path="/contractors/:id/addReview"
                element={<AddContractorReview />}
              />
              <Route
                path="/contractors/:id/details"
                element={<ContractorReviewDetails />}
              />
            </Routes>
          </Router>
        </div>
        <Footer />

      </div>
    </ContractorsContextProvider>
  );
}

export default App;
