import './CartItem.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { API_IMG_URL } from '../../../config/Config';

export const CartItem = ({ dish, updateCart, removeDish }) => {
  const [count, setCount] = useState(dish.count);

  const handleCartOperation = (action) => {
    let newDish, newCount;

    switch (action) {
      case 'INCREASE_DISH_QUANTITY':
        newDish = { ...dish };
        newCount = count + 1;
        newDish.count = newCount;
        setCount(newCount);
        updateCart(newDish);
        break;
      case 'DECREASE_DISH_QUANTITY':
        newDish = { ...dish };
        newCount = count - 1;
        if (newCount === 0) {
          return;
        }
        newDish.count = newCount;
        setCount(newCount);
        updateCart(newDish);
        break;
      case 'REMOVE_DISH':
        removeDish(dish, 'REMOVE_DISH');
        break;
      default:
        break;
    }
  };

  const renderCartItem = () => (
    <>
      <div className="cart-dish-container flex-column flex-md-row d-md-flex align-items-center">
        <FontAwesomeIcon
          icon={faXmarkCircle}
          className="cart-dish-delete col-12 col-md-1"
          title="Remove Dish"
          onClick={() => handleCartOperation('REMOVE_DISH')}
        />
        <img
          src={`${API_IMG_URL}/api/dishes/${dish._id}/photo`}
          alt={dish.name}
          className="cart-img col-12 col-md-3"
        />
        <div className="cart-dish-text col-12 col-md-5">
          <span className="align-self-md-start align-self-center">
            {dish.name}
          </span>
        </div>
        <div className="cart-dish-quantity col-12 col-md-2">
          <FontAwesomeIcon
            icon={faPlus}
            className="cart-quantity-icon"
            title="Increase Quantity"
            onClick={() => handleCartOperation('INCREASE_DISH_QUANTITY')}
          />
          <span>{dish.count}</span>
          <FontAwesomeIcon
            icon={faMinus}
            className="cart-quantity-icon"
            title="Decrease Quantity"
            onClick={() => handleCartOperation('DECREASE_DISH_QUANTITY')}
          />
        </div>
        <div className="cart-dish-totalPrice col-12 col-md-1">
          <span>${dish.price.toFixed(2)}</span>
        </div>
      </div>
    </>
  );

  return <>{renderCartItem()}</>;
};
