import './Orders.css';
import { Layout } from '../Layout/Layout';
import { useAuth0 } from '@auth0/auth0-react';
import { getMyOrders } from '../../api/order';
import { useEffect, useState } from 'react';
import { Accordion } from '../UI/Accordion/Accordion';

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const getOrders = async () => {
    try {
      const token = await getAccessTokenSilently();
      const result = await getMyOrders(token);
      setOrders(result.data.orders);
      console.log(result.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  const init = () => {
    getOrders();
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const displayOrders = () => <Accordion orders={orders} />;

  const renderOrders = () => (
    <Layout title={'My Orders'} background={true}>
      <div className="row justify-content-center">
        <div className="orders-container col-12 col-md-6">
          {displayOrders()}
        </div>
      </div>
    </Layout>
  );

  return <>{renderOrders()}</>;
};
