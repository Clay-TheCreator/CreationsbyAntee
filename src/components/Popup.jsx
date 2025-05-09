import "./Popup.css";
import { useEffect } from "react";

function Popup({ item, onClose }) {
  if (!item) return null;

  const handleOverlayClick = () => onClose();
  const handleContentClick = (e) => e.stopPropagation();

  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };
  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, [onClose]);



  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-content" onClick={handleContentClick}>
        <button
          className="popup-close"
          onClick={onClose}
          aria-label="Close popup"
        >
          ✕
        </button>
        <img
          src={item.image}
          alt={item.title}
          className="popup-image"
        />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default Popup;