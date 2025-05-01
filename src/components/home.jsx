import EventPopup from './eventpopup';
import PopularItems from './popularitems';
import Header from './header';

function Home() {

    

  return (
    <div className="home-wrapper">
      <EventPopup
        locationName="Canada Place"
        address="999 Canada Pl, Vancouver, BC V6C 3T4"
      />
      <Header />
      <PopularItems />
      
    </div>
  );
}

export default Home;
