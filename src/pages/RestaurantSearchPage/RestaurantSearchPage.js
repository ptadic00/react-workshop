import { useState, useEffect } from 'react';
import './RestaurantSearchPage.css';
import Layout from '../../components/Layout/Layout';
import Search from '../../components/Search/Search';
import RestaurantList from '../../features/restaurant/RestaurantList/RestaurantList';
import restaurantApi from '../../api/restaurant';

const RestaurantSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const onSearch = (newSearchTerm) => setSearchTerm(newSearchTerm);

  useEffect(() => {
    if (searchTerm) {
      restaurantApi.searchRestaurants(searchTerm).then(({ data }) => {
        setRestaurants(data);
      });
    } else {
      setRestaurants([]);
    }
  }, [searchTerm]);

  return (
    <Layout>
      <div className="restaurant-search-page-container">
        <Search onChange={onSearch} />
        <RestaurantList restaurants={restaurants} />
      </div>
    </Layout>
  );
};

export default RestaurantSearchPage;
