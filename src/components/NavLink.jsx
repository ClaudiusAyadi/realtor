import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavLink({ item, link }) {
  const location = useLocation();

  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  const isActive = pathMathRoute(`/${link}`);

  return (
    <li>
      <Link to={`/${link}`} className={`link ${isActive ? "link-hover" : ""}`}>
        {item}
      </Link>
    </li>
  );
}

export default NavLink;
