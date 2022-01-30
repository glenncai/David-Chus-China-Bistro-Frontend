import './Navbar.css';
import {
  faBars,
  faSearch,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../../assets/images/surrounding/restaurant-logo_medium.png';
import Star from '../../../assets/images/surrounding/star-k-logo.png';

const Navbar = () => {
  const renderNavbar = () => (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="logo-container">
            <a className="navbar-brand" href="/">
              <img src={Logo} id="logo" alt="David Chu's China Bistro" />
            </a>
            <div className="navbar-brand">
              <a href="/">
                <h1>David Chu's China Bistro</h1>
              </a>
              <p>
                <img src={Star} id="star" alt="Kosher certification" />
                <span>Kosher Certified</span>
              </p>
            </div>
          </div>
          <button
            className="navbar-toggler"
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
                <a className="nav-link active" aria-current="page" href="/">
                  Browse
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Cart
                </a>
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

export default Navbar;
