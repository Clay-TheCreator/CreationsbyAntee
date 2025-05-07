import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-card">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">Creations by Antee</h1>
          <h2 className="header-subtitle">Handcrafted Indigenous Items</h2>
          <p className="header-description">
            Welcome-I'm Ali, the soul behind Creations by Antee. I craft with intention, using
            the grounding energy of cedar, the healing power of plant-based oils,and the beauty
            of handmade jewelry. Each item is a labor of love, created to nurture your spirit 
            and connect you to the natural world.
          </p>
          <Link to="/about" className="header-link">Read more about us</Link>
        </div>
        <div className="header-image-wrapper">
          <img
            src="src/assets/grouppicture.jpeg"
            alt="Group"
            className="header-image"
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
