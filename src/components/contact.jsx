import "./AboutContact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us via the following:</p>
        <ul className="contact-info">
          <li>
            <strong>Email:</strong> <a href="mailto:creationsbyantee@gmail.com">creationsbyantee@gmail.com</a>
          </li>
          <li>
            <strong>Phone:</strong> (123) 456-7890
          </li>
          <li>
            <strong>Instagram: </strong>
            <a
              href="https://www.instagram.com/creationsbyantee?igsh=MTJjcm9kMnF3dHBnZA=="
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" style={{ fontSize: "24px", marginRight: "8px", verticalAlign: "middle" }}></i> 
              instagram.com/creationsbyantee
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;