import './Cart.css';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Layout } from '../Layout/Layout';
import { CartItem } from '../UI/CartItem/CartItem';
import { CartSummary } from '../UI/CartSummary/CartSummary';
import { CheckoutForm } from '../UI/CheckoutForm/CheckoutForm';
import { Notification } from '../UI/Notification/Notification';
import { Spinner } from '../UI/Spinner/Spinner';
import { faCheckCircle, faSadCry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  getTotalItemsInCart,
  getCartTotalPrice,
  getCart,
  updateDishQuantity,
  removeDishFromCart,
  emptyCart,
} from '../../utils/CartHandler';
import { Link } from 'react-router-dom';
import { getUserAddress, updateUserAddress } from '../../api/user';
import { createOrder, updateOrderStatus } from '../../api/order';
import EmptyCartLogo from '../../assets/images/surrounding/empty-cart.png';

export const Cart = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [dishes, setDishes] = useState([]);
  const [show, setShow] = useState(false);
  const [notificationText, setNotificationText] = useState('');
  const [address, setAddress] = useState({});
  const [loading, setLoading] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [checkoutCanceled, setCheckoutCanceled] = useState(false);
  const [paymentSessionId, setPaymentSessionId] = useState('');

  const saveOrder = async () => {
    setLoading(true);
    const order_data = {
      dishes: dishes,
      address: address,
      order_total: await getCartTotalPrice(),
    };
    console.log(order_data);
    const token = await getAccessTokenSilently();

    try {
      const result = await createOrder(order_data, token);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getAddress = async () => {
    const { sub } = user;
    const id = sub.split('|')[1];

    try {
      setLoading(true);
      const token = await getAccessTokenSilently();
      if (token) {
        console.log('Token exists!!!');
      }
      const result = await getUserAddress(id, token);
      setAddress(result.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(error.response.data.error);
      }
    }
  };

  const updateAddress = async (address) => {
    const { sub } = user;
    const id = sub.split('|')[1];

    try {
      setLoading(true);
      const token = await getAccessTokenSilently();
      const result = await updateUserAddress(id, address, token);
      // Update the address form value
      setAddress(result.data);
      setLoading(false);
      setNotificationText('UPDATE_ADDRESS');
      setShow(true);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(error.response.data.error);
      }
    }
  };

  const updateOrderStatusHandler = async (checkout_session_id) => {
    const token = await getAccessTokenSilently();
    try {
      const result = await updateOrderStatus(checkout_session_id, token);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const init = async (query) => {
    // If payment successed
    const shouldInitialize = !query.get('success');
    if (shouldInitialize) {
      try {
        isAuthenticated && getAddress();
        const items = await getCart();
        setDishes(items);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    // Get the URL parameters
    const query = new URLSearchParams(window.location.search);

    init(query);

    // Payment session id exist
    if (query.get('id') && isAuthenticated) {
      setPaymentSessionId(query.get('id'));
    }

    // Payment success
    if (query.get('success') && isAuthenticated) {
      // Empty the cart
      emptyCart();

      // Refresh the cart view
      setDishes(getCart());

      // Show message
      setCheckoutSuccess(true);
    }

    // Payment cancel
    if (query.get('canceled') && isAuthenticated) {
      console.log('Query: ', query.get('id'));
      setCheckoutCanceled(true);

      // Call the api to update order status to abandoned
      const checkout_session_id = query.get('id');
      updateOrderStatusHandler(checkout_session_id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const showCheckoutSuccessMsg = () => {
    return (
      <div className="order-success-container">
        {checkoutSuccess ? (
          <>
            <span className="order-success-icon">
              <FontAwesomeIcon icon={faCheckCircle} />
            </span>
            <span className="order-success-text">
              Your&nbsp;
              <Link to={`/orders/${paymentSessionId}`} className="order-link">
                order
              </Link>
              &nbsp;is placed! You will receive a text confirmation soon
              :&#x00029;
            </span>
          </>
        ) : null}
      </div>
    );
  };

  const showCheckoutCancelMsg = () => {
    return (
      <div className="order-cancel-container mt-3 mb-3">
        <FontAwesomeIcon icon={faSadCry} size={'1x'} className="me-1" />
        <span>
          Order cancelled. Continue to shop around and checkout when ready!
        </span>
      </div>
    );
  };

  const showEmptyCartMsg = () => {
    return (
      <div className="cartempty-container mt-5">
        <img className="img-fluid" src={EmptyCartLogo} alt="Empty Cart" />
      </div>
    );
  };

  const updateCart = async (dish) => {
    await updateDishQuantity(dish, () => {
      // callback function - update cart interface
      setDishes(getCart());
    });
  };

  const removeDish = async (dish, action) => {
    await removeDishFromCart(dish._id, () => {
      // callback function - update cart interface
      setDishes(getCart());
    });

    // Notification
    setNotificationText(action);
    setShow(true);
  };

  const showNotification = () => (
    <>
      {show && (
        <Notification type={notificationText} show={show} setShow={setShow} />
      )}
    </>
  );

  const showCardItem = () => (
    <>
      {dishes.map((dish) => (
        <div key={dish._id}>
          <CartItem
            dish={dish}
            updateCart={updateCart}
            removeDish={removeDish}
          />
        </div>
      ))}
    </>
  );

  const renderCart = () => (
    <Layout title={'My Cart'} background={false}>
      {showNotification()}
      <main className="container cart-container">
        {getTotalItemsInCart() !== 0 && (
          <div className="shoppingBag">
            Shopping Bag({getTotalItemsInCart()})
          </div>
        )}

        {checkoutSuccess && showCheckoutSuccessMsg()}
        {checkoutCanceled && showCheckoutCancelMsg()}
        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            <div className="cart-left col-12 col-md-8 order-md-first order-last">
              {showCardItem()}
            </div>
            {getCartTotalPrice() ? (
              <div className="cart-right col-12 col-md-4 mt-2 mt-md-0 mb-2 mb-md-0 order-md-last order-first">
                <div className="d-flex flex-column">
                  <CartSummary
                    totalPrice={getCartTotalPrice().toFixed(2)}
                    isAuthenticated={isAuthenticated}
                  />
                  {isAuthenticated && (
                    <div className="mt-2 mb-2">
                      <CheckoutForm
                        address={address}
                        addressType={'Shipping Address'}
                        updateAddress={updateAddress}
                        checkout={saveOrder}
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : null}
            {!checkoutSuccess &&
              getTotalItemsInCart() === 0 &&
              showEmptyCartMsg()}
          </div>
        )}
      </main>
    </Layout>
  );

  return <>{renderCart()}</>;
};
