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
import { AuthProvider } from "./Components/Firebase/AuthContext";
import Footer from "./Components/Footer";
import { ContractorsContextProvider } from "./context/ContractorsContext";
import { UsersProvider } from "./context/UsersContext";
import Reviews from "./Components/Reviews/Reviews";
import ContractorReviewDetails from "./Components/ContractorReviewDetails/ContractorReviewDetails";
import AddContractorReview from "./Components/AddContractorReview/AddContractorReview";
import Chats from "./Components/Chats/Chats";

function App() {
  return (
    <ContractorsContextProvider>
      <UsersProvider>
        <div className="App">
          <div className="content-wrap">
            <Router>
              <AuthProvider>
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
                    path="/listings/:q"
                    element={
                      <ContractorListings contractorData={contractorData} />
                    }
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
                  <Route path="/chats" element={<Chats />} />
                </Routes>
              </AuthProvider>
            </Router>
          </div>
          <Footer />
        </div>
      </UsersProvider>
    </ContractorsContextProvider>
  );
}

export default App;
