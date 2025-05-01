import EventPopup from './eventpopup';

function Home() {

    const popularItems = [
        { id: 1, title: 'Cedar Rose Earrings', image: 'src/assets/cedarRings.jpeg' },
        { id: 2, title: 'Cedar Rose Earrings', image: 'src/assets/cedarRings.jpeg' },
        { id: 3, title: 'Cedar Rose Earrings', image: 'src/assets/cedarRings.jpeg' },
        { id: 4, title: 'Cedar Rose Earrings', image: 'src/assets/cedarRings.jpeg' },
        { id: 5, title: 'Cedar Rose Earrings', image: 'src/assets/cedarRings.jpeg' },
      ];

  return (
    <div className="home-wrapper">
      <EventPopup
        locationName="Canada Place"
        address="999 Canada Pl, Vancouver, BC V6C 3T4"
      />
      <h1 className='most-popular'>Most Popular</h1>
      <div className="most-popular-container">
        {popularItems.map((item) => (
          <div className="item-card" key={item.id}>
            <img src={item.image} alt={item.title} className="item-image" />
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
