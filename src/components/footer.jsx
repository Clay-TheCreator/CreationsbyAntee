import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p className="footer-copyright">
            © 2025 Creations by AnTee. All Rights Reserved.
          </p>
        </div>
        <div className="footer-center">
          <ul className="footer-links">
            <li>
              <Link to="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="social-links">
            <a
              href="https://www.instagram.com/creationsbyantee?igsh=MTJjcm9kMnF3dHBnZA==" 
              className="social-link"
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <i className="fab fa-instagram" style={{ fontSize: "24px" }}></i>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
