import { Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <ul className="navigation-list">
        <li className="navigation-list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation-list-item">
          <Link to="/restaurants">Restaurants</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
