import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-link" onClick={handleNavClick}>
            <img
              src="src/assets/froglogo2.png"
              alt="logo"
              className="logo-icon"
            />
          </Link>
        </div>

        <div className={`nav-right ${menuOpen ? "open" : ""}`}>
          <div className="nav-dropdown">
            <div className="nav-link dropdown-toggle">
              <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                Collections
                <i className="fas fa-chevron-down" style={{ fontSize: "0.8rem" }}></i>
              </span>
            </div>
            <div className="dropdown-menu">
              <Link to="/shop/cedar" className="dropdown-item" onClick={handleNavClick}>
                Cedar
              </Link>
              <Link to="/shop/wellness-oils" className="dropdown-item" onClick={handleNavClick}>
                Wellness Oils
              </Link>
              <Link to="/shop/jewelry" className="dropdown-item" onClick={handleNavClick}>
                Jewelry
              </Link>
            </div>
          </div>

          <Link to="/about" className="nav-link" onClick={handleNavClick}>
            About
          </Link>
          <Link to="/contact" className="nav-link" onClick={handleNavClick}>
            Contact
          </Link>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
