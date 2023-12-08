import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Router, Routes, json } from "react-router-dom";
import Home from "./pages/Home/Home";
import Oder from "./pages/Oder/Oder";
import Cart from "./pages/Cart/Cart";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import NoPage from "./pages/noPage/NoPage";
import MyState from "./context/Data/MyState";
import SingIn from "./Component/Registration/SingIn";
import Login from "./Component/Registration/Login";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import AddPrduct from "./pages/admin/Page/AddPrduct";
import UpDateProduct from "./pages/admin/Page/UpDateProduct";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <MyState>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/oder"
            element={
              <ProtectedRoutes>
                <Oder />
              </ProtectedRoutes>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutesForAdmin>
                <Dashboard />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/singin" element={<SingIn />} />
          <Route path="/productInfo/:id" element={<ProductInfo />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRoutesForAdmin>
                <AddPrduct />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route
            path="/upDateproduct"
            element={
              <ProtectedRoutesForAdmin>
                <UpDateProduct />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route path="/*" element={<NoPage />} />
          <Route path="order" element={<Oder />} />
        </Routes>
        <ToastContainer />
      </MyState>
    </div>
  );
}

export default App;

// For user

export const ProtectedRoutes = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// for Admin

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "nitiksharma445@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
