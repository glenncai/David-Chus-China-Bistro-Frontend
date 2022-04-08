import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage } from '../LandingPage/LandingPage';
import { Catalog } from '../Catalog/Catalog';
import { Cart } from '../Cart/Cart';
import { Signin } from '../Auth/Signin/Signin';
import { Signup } from '../Auth/Signup/Signup';
import { Signout } from '../Auth/Signout/Signout';
import { Profile } from '../Auth/Profile/Profile';
import { Orders } from '../Orders/Orders';
import { OrderDetails } from '../Orders/OrderDetails/OrderDetails';
import { ProtectedRoute } from '../Auth/ProtectedRoute/ProtectedRoute';

export const RoutesPath = () => {
  const deployRoutes = () => (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signout" exact component={Signout} />
        <ProtectedRoute path="/me" exact component={Profile} />
        <ProtectedRoute path="/orders" exact component={Orders} />
        <ProtectedRoute path="/orders/:id" exact component={OrderDetails} />
      </Switch>
    </Router>
  );

  return <>{deployRoutes()}</>;
};
