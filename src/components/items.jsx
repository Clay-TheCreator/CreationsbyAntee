import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import './ItemsPage.css';



function Items({ itemsAll }) {

    const { category } = useParams();


        // Filter items based on category param
        const filteredItems = category
        ? itemsAll.filter(item =>
            item.category.toLowerCase() === category.toLowerCase()
          )
        : itemsAll; // Show all items if no category is selected

  return (
    <div className="items-page">
      <aside className="items-sidebar">
        <h2>Categories</h2>
        <ul>
          <li>
            <Link to="/items/cedar">Cedar</Link>
          </li>
          <li>
            <Link to="/items/wellness-oils">Wellness Oils</Link>
          </li>
          <li>
            <Link to="/items/jewelry">Jewelry</Link>
          </li>
        </ul>
      </aside>

      <main className="items-grid-container">
        <h1 style={{ gridColumn: '1 / -1' }}>{category}</h1>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div className="item-card" key={item.id}>
              <img src={item.image} alt={item.title} className="item-image" />
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1' }}>No items found in this category.</p>
        )}
      </main>
    </div>
  );
}

export default Items;
