import './RestaurantList.css';
import RestaurantListItem from '../RestaurantListItem/RestaurantListItem';

const RestaurantList = ({ restaurants, isFavorite, toggleFavorite }) => {
  return (
    <div className="restaurant-list-container">
      {restaurants.map((restaurant) => (
        <RestaurantListItem
          key={restaurant.urlFriendlyName}
          restaurant={restaurant}
          className="restaurant-list-item"
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
