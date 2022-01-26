import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const Layout = () => {
  const renderLayout = () => (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );

  return <>{renderLayout()}</>;
};

export default Layout;
