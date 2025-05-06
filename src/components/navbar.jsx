import { Link } from "react-router-dom";
import "./style.css";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const navbarRef = useRef(null); 

  // Close hamburger menu if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="nav-container">
        <div className="nav-left">
          <Link
            to="/"
            className="nav-link"
          >
            <img
              src="src/assets/froglogo2.png"
              alt="logo"
              className="logo-icon"
            />
          </Link>
        </div>
        <div className={`nav-right ${menuOpen ? "open" : ""}`}>
          <div className="nav-dropdown" ref={dropdownRef}>
            <button
              className="nav-link dropdown-toggle"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              ☰Shop
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/shop/cedar" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                  Cedar
                </Link>
                <Link to="/shop/wellness-oils" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                  Wellness Oils
                </Link>
                <Link to="/shop/jewelry" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                  Jewelry
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => {
              setDropdownOpen(false);
              setMenuOpen(false);
            }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => {
              setDropdownOpen(false);
              setMenuOpen(false);
            }}
          >
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
