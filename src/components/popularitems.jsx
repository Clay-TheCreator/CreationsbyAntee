import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./PopularItems.css";
import Popup from './Popup.jsx'
import itemsAll from "./itemsData.js";

function PopularItems({ category, shopCollection, collection }) {
  // Filter the items based on the provided category
  const filteredItems = itemsAll.filter(item => 
    category === "All Items" || item.category.toLowerCase() === category.toLowerCase()
  );

  // Limit the number of items to show (e.g., first 8 items)
  const limitedItems = filteredItems.slice(0, 8);

  const [selectedItem, setSelectedItem] = useState(null);
  const scrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const itemWidth = 250;
  const itemsPerPage = 4.5;
  const totalPages = Math.ceil(limitedItems.length / itemsPerPage);

  const handleClose = () => setSelectedItem(null);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = itemWidth * itemsPerPage;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    }
  };

  const handleDotClick = (index) => {
    scrollRef.current.scrollTo({
      left: itemWidth * itemsPerPage * index,
      behavior: "smooth",
    });
    setCurrentPage(index);
  };

  return (
    <section className="popular-section">
      <div className="popular-header">
        <h1 className="popular-title">{collection}</h1>
        <Link to={`/collections/${category.toLowerCase()}`} className="shop-link">
          {shopCollection} » 
        </Link>
      </div>

      <div className="carousel-wrapper">
        <button
          className="scroll-btn left"
          onClick={() => handleScroll("left")}
        >
          ‹
        </button>

        <div className="popular-scroll-container" ref={scrollRef}>
          {limitedItems.map((item) => (
            <div
              key={item.id}
              className="popular-card"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="popular-image"
              />
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>

        <button
          className="scroll-btn right"
          onClick={() => handleScroll("right")}
        >
          ›
        </button>
      </div>

      {totalPages > 0 && (
        <div className="scroll-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentPage ? "active" : ""}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      )}

      <Popup item={selectedItem} onClose={handleClose} />
    </section>
  );
}

export default PopularItems;