import EventPopup from './eventpopup';

function Home() {
  return (
    <div className="home-wrapper">
      <EventPopup
        locationName="Canada Place"
        address="999 Canada Pl, Vancouver, BC V6C 3T4"
      />
      <h1></h1>
    </div>
  );
}

export default Home;
