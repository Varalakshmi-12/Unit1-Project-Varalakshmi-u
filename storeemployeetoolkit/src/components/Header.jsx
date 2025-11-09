import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav-left">
        <NavLink to="/" className="nav-item">Home</NavLink>
      </nav>

      <h1 className="header-title">Welcome to All-in-One Home Goods Store</h1>

      <nav className="nav-right">
        <NavLink to="/about" className="nav-item">About</NavLink>
        <NavLink to="/contact" className="nav-item">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;