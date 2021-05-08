import { useState, useEffect } from 'react';
import * as storage from '../../../services/storage';

const FAVORITE_RESTAURANTS_KEY = 'dobartek:favorite:restaurants';

const getFavorite = () => {
  const restaurants = storage.get(FAVORITE_RESTAURANTS_KEY);
  if (!restaurants) {
    return [];
  }
  return restaurants;
};

const saveFavorite = (restaurants) => {
  storage.save(FAVORITE_RESTAURANTS_KEY, restaurants);
};

const useFavoriteRestaurants = () => {
  const [favoriteRestaurants, setFavoriteRestaurants] = useState(getFavorite());

  useEffect(() => {
    if (favoriteRestaurants) {
      saveFavorite(favoriteRestaurants);
    }
  }, [favoriteRestaurants]);

  const toggleFavorite = (restaurant) => {
    const favoriteRestaurant = favoriteRestaurants.find(
      (r) => r.urlFriendlyName === restaurant.urlFriendlyName
    );

    if (favoriteRestaurant) {
      const newRestaurants = favoriteRestaurants.filter(
        (r) => r.urlFriendlyName !== favoriteRestaurant.urlFriendlyName
      );
      setFavoriteRestaurants(newRestaurants);
    } else {
      const newRestaurants = [...favoriteRestaurants, restaurant];
      setFavoriteRestaurants(newRestaurants);
    }
  };

  const isFavorite = (restaurant) => {
    const favoriteRestaurant = favoriteRestaurants.find(
      (r) => r.urlFriendlyName === restaurant.urlFriendlyName
    );
    return !!favoriteRestaurant;
  };

  return {
    favoriteRestaurants,
    isFavorite,
    toggleFavorite,
  };
};

export default useFavoriteRestaurants;
