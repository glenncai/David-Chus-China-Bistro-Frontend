import './CartSummary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const CartSummary = ({ totalPrice, isAuthenticated }) => {
  const renderCartSummary = () => (
    <div className="cart-summary-container">
      <h3>ORDER SUMMRY</h3>
      <div className="cart-summary-subtotal">
        <span>Subtotal</span>
        <span>${totalPrice}</span>
      </div>
      <div className="cart-summary-shippingFee">
        <span>Estimated Shipping Fee</span>
        <span>$5.90</span>
      </div>
      <div className="cart-summary-shippingDiscount">
        <span>Shipping Dsicount</span>
        <span>$-5.90</span>
      </div>
      <div className="cart-summary-total">
        <span>Total</span>
        <span>${totalPrice}</span>
      </div>
      {!isAuthenticated && (
        <Link
          className="cart-checkout-link"
          to={{ pathname: '/signin', returnTo: '/cart' }}
        >
          <button className="cart-checkout">
            <FontAwesomeIcon icon={faLock} className="cart-checkout-icon" />
            <span>SIGNIN TO CHECKOUT</span>
          </button>
        </Link>
      )}
    </div>
  );

  return <>{renderCartSummary()}</>;
};
