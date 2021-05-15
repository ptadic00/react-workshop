import './RestaurantSearchPage.css';
import Layout from '../../components/Layout';
import Search from '../../components/Search';
import { useState, useEffect } from 'react';
import RestaurantList from '../../Features/RestaurantList';
import restaurantApi from '../../api/restaurant';

const RestaurantSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      restaurantApi.searchRestaurants(searchTerm).then(({ data }) => {
        setRestaurants(data);
      });
    }
  }, [searchTerm]);
  return (
    <Layout>
      <Search onChange={setSearchTerm} />
      <RestaurantList restaurants={restaurants} />
    </Layout>
  );
};

export default RestaurantSearchPage;
