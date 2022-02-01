import { Navbar } from './Navbar/Navbar';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

export const Layout = (props) => {
  const renderLayout = () => (
    <div>
      <Navbar />
      <Main title={props.title} background={props.background}>
        {props.children}
      </Main>
      <Footer />
    </div>
  );

  return <>{renderLayout()}</>;
};
