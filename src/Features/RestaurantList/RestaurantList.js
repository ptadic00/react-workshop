import RestaurantListItem from '../../components/RestaurantListItem';
import './RestaurantList.css';

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list-container">
      {restaurants.map((restaurant) => (
        <RestaurantListItem
          restaurant={restaurant}
          className="restaurant-list-item"
        />
      ))}
    </div>
  );
};
export default RestaurantList;
