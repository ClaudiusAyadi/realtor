import { useLocation, useNavigate } from "react-router-dom";

function NavLink({ item, link }) {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  const isActive = pathMathRoute(`/${link}`);

  function handleKey(e) {
    if (e.key === "Enter") {
      navigate(`/${link}`);
    }
  }

  return (
    <li
      className={`link ${isActive ? "link-hover" : ""}`}
      tabIndex="0"
      role="link"
      onClick={() => navigate(`/${link}`)}
      onKeyDown={handleKey}
    >
      {item}
    </li>
  );
}

export default NavLink;
