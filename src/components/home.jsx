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
      <PopularItems category="Wellness-Oils" collection='Wellness Oils Collection' shopCollection="Shop Wellness Oils Collection"/>
      <PopularItems category="jewelry" collection='Jewelry Collection' shopCollection="Shop Jewelry Collection"/>
      <PopularItems category='Cedar' collection='Cedar Collection' shopCollection="Shop Cedar Collection"/>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
