import { Navbar } from './Navbar/Navbar';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  const renderLayout = () => (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );

  return <>{renderLayout()}</>;
};
