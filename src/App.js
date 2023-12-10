import "./Styles/Global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorDetails from "./ReactComponents/ContractorDetails/ContractorDetails";
import ContractorListings from "./ReactComponents/ContractorListings/ContractorListings";
import contractorData from "./contractorData.json";
import LogInSignup from "./Pages/LogInSignup";
import UserProfile from "./ReactComponents/User-profile/UserProfile";
import ManageUserAccount from "./ReactComponents/ManageUserAccount/ManageUserAccount";
import Nav from "./ReactComponents/Navbar";
import Home from "./Pages/Home/Home";
import { AuthProvider } from "./ReactComponents/Firebase/AuthContext";
import Footer from "./ReactComponents/Footer";
import { ContractorsContextProvider } from "./context/ContractorsContext";
import { UsersProvider } from "./context/UsersContext";
import Reviews from "./ReactComponents/Reviews/Reviews";
import ContractorReviewDetails from "./ReactComponents/ContractorReviewDetails/ContractorReviewDetails";
import AddContractorReview from "./ReactComponents/AddContractorReview/AddContractorReview";
import Chats from "./ReactComponents/Chats/Chats";
import "./App.css";

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
