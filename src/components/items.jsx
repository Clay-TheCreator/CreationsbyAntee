import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ItemsPage.css";
import { useState, useEffect } from "react";

function Shop({ itemsAll }) {
  const { category } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClose = () => setSelectedItem(null);

  // Filter items based on category param
  const filteredItems = category
    ? itemsAll.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      )
    : itemsAll;

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
    <div className="items-page">
      <aside className="items-sidebar">
        <h2>Categories</h2>
        <ul>
          <li>
            <Link to="/shop">All Items</Link>
          </li>
          <li>
            <Link to="/shop/cedar">Cedar</Link>
          </li>
          <li>
            <Link to="/shop/wellness-oils">Wellness Oils</Link>
          </li>
          <li>
            <Link to="/shop/jewelry">Jewelry</Link>
          </li>
        </ul>
      </aside>

      <main className="items-grid-container">
        <h1 style={{ gridColumn: "1 / -1" }}>
          {category
            ? category.charAt(0).toUpperCase() + category.slice(1)
            : "All Items"}
        </h1>

        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div className="item-card" key={item.id}>
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} className="item-image" />
              </div>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1" }}>
            No items found in this category.
          </p>
        )}
      </main>

    </div>
  );
}

export default Shop;
