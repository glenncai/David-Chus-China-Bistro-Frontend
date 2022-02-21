import './Reset.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RoutesPath } from './components/RoutesPath/RoutesPath';

export const App = () => {
  const renderApp = () => <RoutesPath />;
  return <div className="App">{renderApp()}</div>;
};
