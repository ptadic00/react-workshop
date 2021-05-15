import './RestaurantListItem.css';

const RestaurantListItem = ({ restaurant, className }) => {
  const coverImageStyle = {
    background: `url(${restaurant.headerSquarePicture.url3x})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <div
      className={`restaurant-list-item-container ${className}`}
      style={coverImageStyle}>
      <div className="restaurant-list-item-info">
        <h3 className="restaurant-list-item-title">
          {restaurant.title}, {restaurant.cityName}
        </h3>
        <div className="restaurant-list-item-rating">
          {restaurant.rating} / 5
        </div>
      </div>
    </div>
  );
};

export default RestaurantListItem;
