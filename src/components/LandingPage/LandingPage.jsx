import { Layout } from '../Layout/Layout';
import { Menu } from './Menu/Menu';

export const LandingPage = () => {
  const renderLandingPage = () => (
    <Layout title={'A Bite of China'} background={true}>
      <Menu />
    </Layout>
  );

  return <>{renderLandingPage()}</>;
};
