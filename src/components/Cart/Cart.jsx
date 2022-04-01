import './Cart.css';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Layout } from '../Layout/Layout';
import { CartItem } from '../UI/CartItem/CartItem';
import { CartSummary } from '../UI/CartSummary/CartSummary';
import { CheckoutForm } from '../UI/CheckoutForm/CheckoutForm';
import { Notification } from '../UI/Notification/Notification';
import { Spinner } from '../UI/Spinner/Spinner';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
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
import { createOrder } from '../../api/order';

export const Cart = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [dishes, setDishes] = useState([]);
  const [show, setShow] = useState(false);
  const [notificationText, setNotificationText] = useState('');
  const [address, setAddress] = useState({});
  const [loading, setLoading] = useState(false);
  const [checkoutProgress, setCheckoutProgress] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

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
      await updateUserAddress(id, address, token);

      // Empty address in order to fix bug
      setAddress({});

      // Show the lastest address
      isAuthenticated && getAddress();

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

    if (query.get('success') && isAuthenticated) {
      console.log('Enter here!!!');

      // Empty the cart
      emptyCart();

      // Refresh the cart view
      setDishes(getCart());

      // Show message
      setCheckoutProgress('completed');
      setCheckoutSuccess(true);
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
              Your <Link to="/orders/123">order</Link> is placed! You will
              receive a text confirmation soon.
            </span>
          </>
        ) : null}
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
        <div className="shoppingBag">Shopping Bag({getTotalItemsInCart()})</div>
        {showCheckoutSuccessMsg()}
        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            <div className="cart-left col-12 col-md-8 order-md-first order-last">
              {showCardItem()}
            </div>
            {
              getCartTotalPrice() ? (
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
              ) : null
              // <div className="cartempty-container">
              //   <h3>
              //     Empty Cart... <Link to="/catalog">Browse Now!</Link>
              //   </h3>
              // </div>
            }
          </div>
        )}
      </main>
    </Layout>
  );

  return <>{renderCart()}</>;
};
