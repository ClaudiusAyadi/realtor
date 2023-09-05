import { Routes, Route } from "react-router-dom";
import Account from "../pages/Account";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Offers from "../pages/Offers";
import Signup from "../pages/Signup";

function Main() {
  return (
    <main aria-label="Content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </main>
  );
}

export default Main;
