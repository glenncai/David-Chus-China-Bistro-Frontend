import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from '../LandingPage/LandingPage';

export const RoutesPath = () => {
  const deployRoutes = () => (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );

  return <>{deployRoutes()}</>;
};
