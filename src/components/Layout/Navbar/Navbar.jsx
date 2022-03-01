import './Navbar.css';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../../assets/images/surrounding/restaurant-logo_medium.png';
import Star from '../../../assets/images/surrounding/star-k-logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const renderNavbar = () => (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="logo-container">
            <Link className="navbar-brand" to="/">
              <img src={Logo} id="logo" alt="David Chu's China Bistro" />
            </Link>
            <div className="navbar-brand">
              <Link to="/">
                <h1>David Chu's China Bistro</h1>
              </Link>
              <p>
                <img src={Star} id="star" alt="Kosher certification" />
                <span>Kosher Certified</span>
              </p>
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
                <Link className="nav-link" to="/">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Register
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
                  Cart
                </Link>
              </li>
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
