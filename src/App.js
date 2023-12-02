import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Oder from "./pages/Oder/Oder";
import Cart from "./pages/Cart/Cart";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import NoPage from "./pages/noPage/NoPage";
import MyState from "./context/Data/MyState";
function App() {
  return (
    <div className="App">
      <MyState>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oder" element={<Oder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </MyState>
    </div>
  );
}

export default App;
