import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorDetails from "./Components/ContractorDetails/ContractorDetails";
import ContractorListings from "./Pages/ContractorListings/ContractorListings";
import contractorData from "./contractorData.json";
import LogInSignup from "./Pages/LoginSignup/LogInSignup";
import UserProfile from "./Pages/User-profile/UserProfile";
import ManageUserAccount from "./Pages/ManageUserAccount/ManageUserAccount";
import Nav from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { AuthProvider } from "./Firebase/AuthContext";
import Footer from "./Pages/Footer/Footer";
import { ContractorsContextProvider } from "./context/ContractorsContext";
import { UsersProvider } from "./context/UsersContext";
import Reviews from "./Components/Reviews/Reviews";
import ContractorReviewDetails from "./Components/ContractorReviewDetails/ContractorReviewDetails";
import AddContractorReview from "./Components/AddContractorReview/AddContractorReview";
import Chats from "./Pages/Chats/Chats";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <ContractorsContextProvider>
      <AuthProvider>
        <UsersProvider>
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
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Router>
            </div>
            <Footer />
          </div>
        </UsersProvider>
      </AuthProvider>
    </ContractorsContextProvider>
  );
}

export default App;
