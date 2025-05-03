import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
        <div className="logo">
          <img src="src/assets/froglogo2.png" alt="logo" className="logo-icon" />
          Creations by Antee
        </div>
        <div className={`nav-right ${menuOpen ? "open" : ""}`}>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
