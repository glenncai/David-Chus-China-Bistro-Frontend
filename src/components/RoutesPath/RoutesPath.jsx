import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from '../LandingPage/LandingPage';
import { Catalog } from '../Catalog/Catalog';
import { Cart } from '../Cart/Cart';

export const RoutesPath = () => {
  const deployRoutes = () => (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );

  return <>{deployRoutes()}</>;
};
