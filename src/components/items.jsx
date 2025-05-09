import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ItemsPage.css";
import Popup from './Popup.jsx';

function Shop({ itemsAll }) {
  const { category } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClose = () => setSelectedItem(null);

  // Filter items based on category param
  const filteredItems = category
    ? itemsAll.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      )
    : itemsAll;

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500); // simulate data loading
    return () => clearTimeout(timeout);
  }, [category]);

  return (
    <div className="items-page">
      <aside className="items-sidebar">
        <h2>Categories</h2>
        <ul>
          <li><Link to="/shop">All Items</Link></li>
          <li><Link to="/shop/cedar">Cedar</Link></li>
          <li><Link to="/shop/wellness-oils">Wellness Oils</Link></li>
          <li><Link to="/shop/jewelry">Jewelry</Link></li>
        </ul>
      </aside>

      <main className="items-grid-container">
        <h1 style={{ gridColumn: "1 / -1" }}>
          {category
            ? category.charAt(0).toUpperCase() + category.slice(1)
            : "All Items"}
        </h1>

        {loading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <div className="item-card skeleton-card" key={i}>
              <div className="image-wrapper skeleton-box"></div>
              <div className="skeleton-text short"></div>
              <div className="skeleton-text"></div>
            </div>
          ))
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              className="item-card"
              key={item.id}
              onClick={() => setSelectedItem(item)}
            >
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

        <Popup item={selectedItem} onClose={handleClose} />
      </main>
    </div>
  );
}

export default Shop;
