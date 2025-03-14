import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./componants/Navbar/Navbar";
import Wishlist from "./componants/Wishlist/Wishlist";
import Profile from "./componants/Profile/Profile";
import Search from "./componants/Search/Search";
import Notfound from "./componants/Notfound/Notfound";
import Home from "./componants/Home/Home";
import Support from "./componants/Support/Support";   
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Account from "./componants/Profile/Account";
import ChangePassword from "./componants/Profile/ChangePassword";
import { Toaster } from "react-hot-toast";
import Register from "./componants/Register/Register";
import Login from "./componants/Login/Login";
import ProtectedRoute from "./componants/ProtectedRoute/ProtectedRoute";
import AdminRoute from "./componants/AdminRoute/AdminRoute";
import TripDetailsPage from "./componants/SingleTrip/Singletrip";
import DashboardLayout from "./componants/Dashboard/DashboardLayout";
import Trips from "./componants/Dashboard/Trips";
import Category from "./componants/Dashboard/Category";
import Orders from "./componants/Dashboard/Orders";
import Footer from "./componants/Footer/Footer";
import Booking from "./componants/Booking/Booking";
import CancelPayment from "./componants/Cancel/CancelPayment";
import AboutUs from "./componants/About/About";
import ChatIcon from "./componants/Chat/ChatIcon";
import ChatPage from "./componants/Chat/Chat";

function App() {
  const location = window.location;
  const navbar =
    location.pathname == "/login" || location.pathname == "/register" || location.pathname == "/dashboard/trips"|| location.pathname == "/dashboard" || location.pathname =="/Chat"
    || location.pathname == "/dashboard/category" || location.pathname == "/dashboard/orders";
    
  const footer =
    location.pathname == "/login" || location.pathname == "/register" || location.pathname == "/dashboard/trips" || location.pathname == "/dashboard" || location.pathname =="/Chat"
    || location.pathname == "/dashboard/category" || location.pathname == "/dashboard/orders";

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          {!navbar && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/trips/:id" element={<TripDetailsPage />} />
            <Route path="/Chat" element={<ChatPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route
                path="account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route
                path="changePassword"
                element={
                  <ProtectedRoute>
                    <ChangePassword />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="/support" element={<Support />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/cancelPayment" element={<CancelPayment />} />
            <Route path="/search" element={<Search />} />
            <Route path="/register" element={<Register />} />     
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index path="/dashboard" element={<Trips />} />
                <Route path="trips" element={<Trips />} />
                <Route path="category" element={<Category />} />
                <Route path="orders" element={<Orders />} />
            </Route>
            <Route index path="/about" element={<AboutUs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          {!chat && <ChatIcon />}
          {!footer && <Footer />}
        </BrowserRouter>
        <Toaster />
      </Provider>
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Toaster />
    </Provider>
  );
}

export default App;
