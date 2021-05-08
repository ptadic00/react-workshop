import RestaurantSearchPage from './pages/RestaurantSearchPage/RestaurantSearchPage';
import RestaurantsPage from './pages/RestaurantsPage/RestaurantsPage';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <RestaurantSearchPage />
          </Route>
          <Route path="/restaurants">
            <RestaurantsPage />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
