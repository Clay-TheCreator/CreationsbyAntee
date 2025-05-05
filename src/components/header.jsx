function Header() {
  return (
    <div className="header-card">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">Creations by Antee</h1>
          <h2 className="header-subtitle">Handcrafted Indigenous Items</h2>
          <p className="header-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos natus
            sit aliquid delectus pariatur iure deleniti, suscipit accusantium
            labore, nostrum saepe quidem cumque amet quaerat! Quia, voluptates
            iusto?
          </p>
          {/* <Link to="/about" className="header-link">Read more about us</Link> */}
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
