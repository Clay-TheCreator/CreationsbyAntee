import "./AboutContact.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-card">
        <div className="about-container">
          <div className="about-image">
            <img
              src="src/assets/anteehat.jpg" // Replace with your image path
              alt="Your Portrait"
              className="about-portrait"
            />
          </div>
          <div className="about-text">
            <h1>About Ali</h1>
            <p>
              Ali Muldoe-Wells is Gitxsan from Wilps Nisto’o of the Frog Clan.
              Her parents are the late Myrtle (Jones) and Simon Muldoe. She is
              married into the Tsimshian Nation and is the proud mother of three
              boys: Jordan, Dennis Scott, and Clay.
            </p>
            <p>
              Ali grew up in the Hazeltons in northern British Columbia and has
              lived throughout the province. Rooted in the teachings of her
              family and community, Ali has been working with cedar bark for
              over 15 years.
            </p>
            <p>
              From harvesting and preparing to weaving, she creates handcrafted
              Indigenous items that honor traditional knowledge and
              craftsmanship. Each rose, piece of jewelry, or woven creation
              reflects cultural pride, patience, and love.
            </p>
          </div>
        </div>
      </div>

      {/* Significance of Cedar Section */}
      <div className="about-card">
        <div className="about-container">
          <div className="about-text full-width">
            <h1>The Significance of Cedar</h1>
            <p>
              Cedar holds deep spiritual and cultural meaning for the First
              Nations people of the Northwest Coast. It is a symbol of strength,
              protection, and healing. In keeping with tradition, Ali gathers
              cedar bark with care and respect—offering a prayer before taking
              only a single strip from each tree. This sustainable method
              protects the tree from harm while honoring its sacred role.
            </p>
            <p>
              Once harvested, the cedar bark goes through a detailed preparation
              process:
            </p>
            <ul>
              <li>The rough outer layer is stripped away.</li>
              <li>The bark is stored and cured for a year.</li>
              <li>
                When ready to use, it is soaked in water and separated into
                thinner layers.
              </li>
              <li>
                The bark is then cut into the required lengths and widths for
                weaving.
              </li>
            </ul>
            <p>
              This traditional process is time-honored and meaningful. It’s not
              just about making something beautiful—it’s about maintaining a
              connection to culture, land, and spirit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
