import { Link } from "react-router-dom";
import './style.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-link">Home</Link>
        <div className="logo">Creations by Antee</div>
        <div className="nav-links">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;