function EventPopup({ locationName, address }) {
    const mapsQuery = encodeURIComponent(address);
  
    return (
      <div className="event-container">
        <h1>Next Event Pop-up!</h1>
        <span>{locationName}</span><span>, Nov 10-13/25</span>
        <p>
          <a
            href={`https://www.google.com/maps?q=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </a>
        </p>
      </div>
    );
  }
  
  export default EventPopup;