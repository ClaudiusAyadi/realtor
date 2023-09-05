import { useNavigate } from "react-router-dom";
import { VscMenu, VscAccount } from "react-icons/vsc";
import logo from "../assets/logo.svg";
import NavLink from "./NavLink";
import Login from "../pages/Login";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const show = () => {
    setShowModal(true);
  };

  const close = () => {
    setShowModal(false);
  };

  return (
    <>
      <header
        className="bg-white border-b shadow-sm sticky top-0 "
        aria-label="Site Header"
      >
        <div className="max-w-7xl w-full leading-[50px] mx-auto px-4 flex gap-6 justify-between items-center h-[50px] text-sm font-medium">
          <span className="tablet:hidden">
            <VscMenu className="min-w-[32px] min-h-[32px] cursor-pointer" />
          </span>
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
          <nav
            className="gap-20 hidden tablet:flex"
            aria-label="Main Navigation "
          >
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
              className="xl:flex list-none hidden gap-2 manage"
              aria-label="Landlord's Links"
            >
              <NavLink item="Manage Rentals" link="manage" />
              <NavLink item="Advertise" link="advertise" />
            </ul>

            <ul className="list-none flex gap-2 account" aria-label="Account">
              <li onClick={show}>Log in</li>
              <li onClick={show}>Sign up</li>
              <Login isVisible={showModal} onClose={close} />
            </ul>
          </nav>
          <nav className="tablet:hidden">
            <VscAccount className="min-w-[32px] min-h-[32px] cursor-pointer" />
          </nav>
        </div>
      </header>
    </>
  );
}
