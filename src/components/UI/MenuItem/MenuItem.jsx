import './MenuItem.css';
import { API_BASE_URL } from '../../../config/Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export const MenuItem = ({ dish, addToCart }) => {
  const renderMenuItem = () => (
    <div className="menu-item-tile col-md-6">
      <div className="row">
        <div className="col-sm-5">
          <div className="menu-item-photo">
            <div className="menu-item-cart" onClick={() => addToCart(dish)}>
              <span>ADD</span>
              <FontAwesomeIcon icon={faCartPlus} />
            </div>
            <img
              className="img-fluid"
              src={`${API_BASE_URL}/api/dishes/${dish._id}/photo`}
              alt={dish.name}
            />
          </div>
          <div className="menu-item-price">
            <span>${dish.price}</span>
          </div>
        </div>
        <div className="menu-item-description col-sm-7">
          <h3 className="menu-item-title">{dish.name}</h3>
          <p className="menu-item-details">{dish.description}</p>
          <div className="menu-item-hr"></div>
        </div>
      </div>
    </div>
  );

  return <>{renderMenuItem()}</>;
};
