import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import NavLink from "./NavLink";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <>
      <header
        className="bg-white border-b shadow-sm sticky top-0 "
        aria-label="Site Header"
      >
        <div className="max-w-7xl leading-[50px] mx-auto px-4 flex justify-between items-center h-[50px] text-sm font-medium">
          <img
            src={logo}
            className="cursor-pointer"
            alt="logo"
            tabIndex="0"
            role="link"
            width="142"
            height="46"
            onClick={() => navigate("/")}
          />
          <nav className="flex gap-20 " aria-label="Main Navigation">
            <ul
              className="list-none flex gap-2 grow-0"
              aria-label="Customer Links"
            >
              <NavLink item="Buy" link="buy" />
              <NavLink item="Sell" link="sell" />
              <NavLink item="Rent" link="rent" />
              <NavLink item="Mortgage" link="mortgage" />
              <NavLink item="Find Realtors" link="agents" />
              <NavLink item="My Home" link="my-home" />
              <NavLink item="News & Insights" link="news" />
            </ul>

            <ul
              className="list-none flex gap-2 manage"
              aria-label="Landlord's Links"
            >
              <NavLink item="Manage Rentals" link="manage" />
              <NavLink item="Advertise" link="advertise" />
            </ul>

            <ul className="list-none flex gap-2 account" aria-label="Account">
              <NavLink item="Log in" link="login" />
              <NavLink item="Sign up" link="signup" />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
