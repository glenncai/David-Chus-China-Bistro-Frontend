import './Cart.css';
import { useState, useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import { CartItem } from '../UI/CartItem/CartItem';
import { CartSummary } from '../UI/CartSummary/CartSummary';
import { Notification } from '../UI/Notification/Notification';
import {
  getTotalItemsInCart,
  getCartTotalPrice,
  getCart,
  updateDishQuantity,
  removeDishFromCart,
} from '../../utils/CartHandler';

export const Cart = () => {
  const [dishes, setDishes] = useState([]);
  const [show, setShow] = useState(false);
  const [notificationText, setNotificationText] = useState('');

  const init = async () => {
    try {
      const items = await getCart();
      setDishes(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    init();
  }, []);

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
        <div className="row">
          <div className="cart-left col-12 col-md-8">{showCardItem()}</div>
          <div className="cart-right col-12 col-md-4 mt-2 mt-md-0 mb-2 mb-md-0">
            <CartSummary totalPrice={getCartTotalPrice().toFixed(2)} />
          </div>
        </div>
      </main>
    </Layout>
  );

  return <>{renderCart()}</>;
};
