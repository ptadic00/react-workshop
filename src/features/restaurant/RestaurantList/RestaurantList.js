import './RestaurantList.css';
import RestaurantListItem from '../RestaurantListItem/RestaurantListItem';

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list-container">
      {restaurants.map((restaurant) => (
        <RestaurantListItem
          key={restaurant.urlFriendlyName}
          restaurant={restaurant}
          className="restaurant-list-item"
        />
      ))}
    </div>
  );
};

export default RestaurantList;
