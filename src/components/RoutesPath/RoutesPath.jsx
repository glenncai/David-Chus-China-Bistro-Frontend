import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from '../LandingPage/LandingPage';
import { Catalog } from '../Catalog/Catalog';
import { Cart } from '../Cart/Cart';
import { Signin } from '../Auth/Signin/Signin';
import { Signup } from '../Auth/Signup/Signup';
import { Signout } from '../Auth/Signout/Signout';

export const RoutesPath = () => {
  const deployRoutes = () => (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signout" element={<Signout />} />
      </Routes>
    </Router>
  );

  return <>{deployRoutes()}</>;
};
