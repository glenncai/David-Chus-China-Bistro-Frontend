import './Navbar.css';
import {
  faBars,
  faSearch,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../../assets/images/surrounding/restaurant-logo_medium.png';
import Star from '../../../assets/images/surrounding/star-k-logo.png';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { getTotalItemsInCart } from '../../../utils/CartHandler';

export const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  const renderNavbar = () => (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="logo-container">
            <Link className="navbar-brand" to="/">
              <img src={Logo} id="logo" alt="David Chu's China Bistro" />
            </Link>
            <div className="navbar-brand navbar-brand-container">
              <Link to="/">
                <h1>David Chu's China Bistro</h1>
              </Link>
              <p>
                <img src={Star} id="star" alt="Kosher certification" />
                <span>Kosher Certified</span>
              </p>
              <div className="logo-cart-container">
                <Link to="/cart">
                  <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
                  {getTotalItemsInCart() > 0 && (
                    <span>
                      <sup>&nbsp;{getTotalItemsInCart()}</sup>
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
          <button
            className="navbar-toggler toggleBar"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul id="nav-list" className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={
                    window.location.pathname === '/catalog'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                  to="/catalog"
                >
                  Browse
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    window.location.pathname === '/cart'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                  to="/cart"
                >
                  <div className="cartnav-container">
                    Cart&nbsp;
                    <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
                    {getTotalItemsInCart() > 0 && (
                      <span>
                        <sup>&nbsp;{getTotalItemsInCart()}</sup>
                      </span>
                    )}
                  </div>
                </Link>
              </li>
              {!isAuthenticated && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Register
                    </Link>
                  </li>
                </>
              )}
              {isAuthenticated && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/me"
                    id="profileDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.nickname}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="profileDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/me">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/signout">
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
            <form className="d-flex">
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  size={25}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-success input-group-text btn-search"
                    type="submit"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );

  return <>{renderNavbar()}</>;
};
