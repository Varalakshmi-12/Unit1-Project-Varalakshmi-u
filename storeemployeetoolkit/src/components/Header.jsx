import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header >
      <nav >
        <NavLink to="/" >Home</NavLink>
      </nav>

      <h1 >Welcome to All-in-One Home Goods Store</h1>

      <nav >
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/contact" >Contact</NavLink>
      </nav>
    </header>
  );
}

