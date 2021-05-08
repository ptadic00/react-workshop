import { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import useFavoriteRestaurants from '../../features/restaurant/hooks/useFavoriteRestaurants';
import RestaurantList from '../../features/restaurant/RestaurantList/RestaurantList';
import restaurantApi from '../../api/restaurant';

const RestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const { isFavorite, toggleFavorite } = useFavoriteRestaurants();

  useEffect(() => {
    restaurantApi.getRestaurants().then(({ data }) => {
      setRestaurants(data);
    });
  }, []);

  return (
    <Layout>
      <div className="restaurant-page-container">
        <RestaurantList
          restaurants={restaurants}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </Layout>
  );
};

export default RestaurantsPage;
