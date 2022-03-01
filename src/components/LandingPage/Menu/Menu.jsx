import './Menu.css';
import Typed from 'react-typed';
import Jumbotron from '../../../assets/images/surrounding/jumbotron_1200.jpg';
import { Link } from 'react-router-dom';

export const Menu = () => {
  const renderMenu = () => (
    <section className="menu-container">
      <Typed
        className="menu-typed"
        strings={[
          'Everything You Want In Chinese Food.',
          'Time For A Chinese Food.',
          'We Know How To Make Deliciousness Taste Great.',
          'Award-Winning Chinese Food.',
          'More Than Just Delicious.',
          'There’s Nothing Better than Chinese Leftovers.',
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
      <div className="container">
        <div className="jumbotron">
          <img
            src={Jumbotron}
            alt="Restaurant enviroment"
            className="img-fluid"
          />
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <Link to="/catalog">
              <div id="menu-tile">
                <span>menu</span>
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <Link to="/">
              <div id="specials-tile">
                <span>specials</span>
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12">
            <a
              href="https://www.google.com/maps/place/David+Chu's+China+Bistro/@39.3635874,-76.7138622,17z/data=!4m6!1m3!3m2!1s0x89c81a14e7817803:0xab20a0e99daa17ea!2sDavid+Chu's+China+Bistro!3m1!1s0x89c81a14e7817803:0xab20a0e99daa17ea"
              target="_blank"
              rel="noreferrer"
            >
              <div id="map-tile">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.675372390488!2d-76.71386218529199!3d39.3635874269356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81a14e7817803%3A0xab20a0e99daa17ea!2sDavid+Chu's+China+Bistro!5e0!3m2!1sen!2sus!4v1452824864156"
                  width="100%"
                  height="250"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  title="map"
                ></iframe>
                <span>map</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  return <>{renderMenu()}</>;
};
