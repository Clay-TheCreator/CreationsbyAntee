import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./PopularItems.css";
import Popup from './Popup.jsx'

function PopularItems({ category, shopCategory }) {
  const popularItems = [
    {
      id: 1,
      title: "Cedar Rose Earrings",
      image: "src/assets/cedarRings.jpeg",
      description:
        "Handcrafted from real cedar roses with hypoallergenic hooks.",
      summary: "Cedar Jewelry",
    },
    {
      id: 2,
      title: "Cedar Rose Earrings",
      image: "src/assets/cedarRings.jpeg",
      description: "Elegant and lightweight for all-day wear.",
      summary: "Cedar Jewelry",
    },
    {
      id: 3,
      title: "Cedar Rose Earrings",
      image: "src/assets/cedarRings.jpeg",
      description: "Perfect for gifting or everyday elegance.",
      summary: "Cedar Jewelry",
    },
    {
      id: 4,
      title: "Cedar Rose Earrings",
      image: "src/assets/cedarRings.jpeg",
      description: "Nature-inspired beauty with modern charm.",
      summary: "Cedar Jewelry",
    },
    {
      id: 5,
      title: "Cedar Rose Earrings",
      image: "src/assets/cedarRings.jpeg",
      description: "Sustainably sourced and uniquely crafted.",
      summary: "Cedar Jewelry",
    },
    {
      id: 6,
      title: "Cedar Rose ",
      image: "src/assets/cedarRings.jpeg",
      description: "Sustainably sourced and uniquely crafted.",
      summary: "Cedar Jewelry",
    },
    {
      id: 7,
      title: "Cedar Rose ",
      image: "src/assets/cedarRings.jpeg",
      description: "Sustainably sourced and uniquely crafted.",
      summary: "Cedar Jewelry",
    },
    {
      id: 8,
      title: "Cedar Rose ",
      image: "src/assets/cedarRings.jpeg",
      description: "Sustainably sourced and uniquely crafted.",
      summary: "Cedar Jewelry",
    },
    {
      id: 9,
      title: "Cedar Rose ",
      image: "src/assets/cedarRings.jpeg",
      description: "Sustainably sourced and uniquely crafted.",
      summary: "Cedar Jewelry",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const scrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const itemWidth = 250;
  const itemsPerPage = 4.5;
  const totalPages = Math.ceil(popularItems.length / itemsPerPage);

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
        <h1 className="popular-title">{category}</h1>
        <Link to="/shop/cedar" className="shop-link">
          {shopCategory} » 
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
          {popularItems.map((item) => (
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