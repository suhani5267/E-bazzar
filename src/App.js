import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
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
function App() {
  return (
    <div className="App">
      <MyState>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oder" element={<Oder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singin" element={<SingIn />} />
          <Route path="/productInfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={<AddPrduct />} />
          <Route path="/upDateproduct" element={<UpDateProduct />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </MyState>
    </div>
  );
}

export default App;
