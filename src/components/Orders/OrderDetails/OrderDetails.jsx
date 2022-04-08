import './OrderDetails.css';
import { Layout } from '../../Layout/Layout';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import { OrderStatus } from '../../UI/OrderStatus/OrderStatus';

export const OrderDetails = (props) => {
  const { order } = props.location.orderProps;
  console.log(order);

  const renderOrderDetails = () => (
    <Layout title={'Order Details'} background={false}>
      <section>
        <div className="row justify-content-center">
          <div className="col-12">
            <Link to="/orders">
              <button className="btn back-btn">
                <FontAwesomeIcon icon={faBackward} />
                <span>Back to My Orders</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <h1>Comming soon...</h1>
          {/* <div className="col-8 col-md-6">
            <OrderStatus order={order} />
          </div> */}
        </div>
      </section>
    </Layout>
  );

  return <>{renderOrderDetails()}</>;
};
