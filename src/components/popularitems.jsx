import { useState, useEffect } from "react";

function PopularItems() {
  const [selectedItem, setSelectedItem] = useState(null);

  const popularItems = [
    {
      id: 1,
      title: "Cedar Rose Earrings",
      image: "src/assets/cedarRings.jpeg",
      description:
        "Handcrafted from real cedar roses with hypoallergenic hooks.",
      summary: "lorem lorem lorem lorem lorem",
    },
    {
      id: 2,
      title: "Cedar Rose Earrings",
      image: "src/assets/cedarRings.jpeg",
      description: "Elegant and lightweight for all-day wear.",
      summary: "lorem lorem lorem lorem lorem",
    },
    {
      id: 3,
      title: "Cedar Rose Earrings",
      image: "src/assets/cedarRings.jpeg",
      description: "Perfect for gifting or everyday elegance.",
      summary: "lorem lorem lorem lorem lorem",
    },
    {
      id: 4,
      title: "Cedar Rose Earrings",
      image: "src/assets/cedarRings.jpeg",
      description: "Nature-inspired beauty with modern charm.",
      summary: "lorem lorem lorem lorem lorem",
    },
    {
      id: 5,
      title: "Cedar Rose Earrings",
      image: "src/assets/cedarRings.jpeg",
      description: "Sustainably sourced and uniquely crafted.",
      summary: "lorem lorem lorem lorem lorem",
    },
  ];

  const handleClose = () => setSelectedItem(null);

  // Close on Escape key
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
    <>
      <h1 className="most-popular">Most Popular</h1>
      <div className="most-popular-container">
        {popularItems.map((item) => (
          <div
            className="item-card"
            key={item.id}
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.image} alt={item.title} className="item-image" />
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>

      {/* popup */}
      {selectedItem && (
        <div className="popup-overlay" onClick={handleClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={handleClose}>
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
    </>
  );
}

export default PopularItems;
