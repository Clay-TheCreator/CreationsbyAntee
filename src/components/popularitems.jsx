import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./PopularItems.css";

function PopularItems() {
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (selectedItem) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <section className="popular-section">
      <h1 className="popular-title">Most Popular</h1>

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

      {selectedItem && (
        <div className="popup-overlay" onClick={handleClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="popup-close"
              onClick={handleClose}
              aria-label="Close popup"
            >
              ✕
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="popup-image"
            />
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default PopularItems;
