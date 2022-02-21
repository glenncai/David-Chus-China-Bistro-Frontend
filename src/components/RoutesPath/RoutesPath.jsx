import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from '../LandingPage/LandingPage';
import { Catalog } from '../Catalog/Catalog';

export const RoutesPath = () => {
  const deployRoutes = () => (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );

  return <>{deployRoutes()}</>;
};
