import { useState, useEffect } from 'react';
import './RestaurantSearchPage.css';
import Layout from '../../components/Layout/Layout';
import Search from '../../components/Search/Search';
import useFavoriteRestaurants from '../../features/restaurant/hooks/useFavoriteRestaurants';
import RestaurantList from '../../features/restaurant/RestaurantList/RestaurantList';
import restaurantApi from '../../api/restaurant';

const RestaurantSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const {
    favoriteRestaurants,
    isFavorite,
    toggleFavorite,
  } = useFavoriteRestaurants();

  const onSearch = (newSearchTerm) => setSearchTerm(newSearchTerm);

  useEffect(() => {
    if (searchTerm) {
      restaurantApi.searchRestaurants(searchTerm).then(({ data }) => {
        setRestaurants(data);
      });
    }
  }, [searchTerm]);

  useEffect(() => {
    if (!searchTerm) {
      setRestaurants(favoriteRestaurants);
    }
  }, [favoriteRestaurants, searchTerm]);

  return (
    <Layout>
      <div className="restaurant-search-page-container">
        <Search onChange={onSearch} />
        <RestaurantList
          restaurants={restaurants}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </Layout>
  );
};

export default RestaurantSearchPage;
