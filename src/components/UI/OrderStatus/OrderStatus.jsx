import './OrderStatus.css';
import dayjs from 'dayjs';

export const OrderStatus = ({
  order,
  isAdmin,
  cancel,
  accept,
  dispatch,
  deliver,
}) => {
  const { status, _id } = order;

  // const [loading, setLoading] = useState(false);

  const cancelOrder = () => {
    console.log('Cancel Order ..');
    cancel(_id);
  };

  const acceptOrder = () => {
    accept(_id);
  };

  const dispatchOrder = () => {
    dispatch();
  };

  const deliveredOrder = () => {
    deliver();
  };

  const renderOrderStatus = () => {
    const lastIndex = status && status.length - 1;
    return (
      <>
        <div className="order-status">
          <div className="d-flex justify-content-between ml-2 ml-xs-0">
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {' '}
              Order Status{' '}
            </span>
            <span
              style={{
                marginRight: '35px',
                textDecoration: 'underline',
                fontSize: '15px',
              }}
            >
              {' '}
              ID: {_id}{' '}
            </span>
          </div>
          <div className="content mt-2 mb-1 text-align-start">
            {status && status[lastIndex].event} on{' '}
            {status &&
              dayjs(status[lastIndex].onDate).format('MMMM DD, YYYY, h:mm A')}
          </div>
          <div className="os-footer mt-2 d-none d-lg-block">
            Charge has been initiated to the original payment method, it will
            reflect in your account within 7 working days.
          </div>
          <div className="d-flex justify-content-evenly mt-2 mr-2">
            {status && status[lastIndex].event === 'Ordered' && (
              <button
                className="btn btn-danger ml-2"
                onClick={() => cancelOrder()}
              >
                CANCEL
              </button>
            )}
            {status && status[lastIndex].event === 'Ordered' && isAdmin && (
              <button
                className="btn btn-success ml-2"
                onClick={() => acceptOrder()}
              >
                ACCEPT
              </button>
            )}
            {status && status[lastIndex].event === 'Processing' && isAdmin && (
              <button
                className="btn btn-success ml-2"
                onClick={() => dispatchOrder()}
              >
                DISPATCH
              </button>
            )}
            {status && status[lastIndex].event === 'Dispatched' && isAdmin && (
              <button
                className="btn btn-success ml-2"
                onClick={() => deliveredOrder()}
              >
                DELIVERED
              </button>
            )}
          </div>
        </div>
      </>
    );
  };

  return <>{renderOrderStatus()}</>;
};
