import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link className="link navbar-link" to="/discover">
        Discover
      </Link>
      <Link className="link navbar-link" to="/creators">
        Creators
      </Link>
      <Link className="link navbar-link" to="/sell">
        Sell
      </Link>
      <Link className="link navbar-link" to="/stats">
        Stats
      </Link>
    </div>
  );
};

export default NavBar;
