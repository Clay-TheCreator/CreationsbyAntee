import EventPopup from './eventpopup';
import PopularItems from './popularitems';
import Header from './header';
import Footer from './footer';

function Home() {

    

  return (
    <div className="home-wrapper">
      <EventPopup
        locationName="Canada Place"
        address="999 Canada Pl, Vancouver, BC V6C 3T4"
      />
      <Header />
      <PopularItems category='Cedar Collection' shopCategory="Shop Cedar Collection"/>
      <PopularItems category="Wellness Oils Collection" shopCategory="Wellness Oils Collection"/>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
