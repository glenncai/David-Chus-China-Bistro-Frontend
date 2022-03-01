import './Catalog.css';
import { useEffect, useState } from 'react';
import { Layout } from '../Layout/Layout';
import { fetchDishList, fetchFilteredDishesList } from '../../api/dish';
import { fetchCategoryList } from '../../api/category';
import { MenuItem } from '../UI/MenuItem/MenuItem';
import { CheckboxGroup } from '../UI/CheckboxGroup/CheckboxGroup';
import { Spinner } from '../UI/Spinner/Spinner';
import { Notification } from '../UI/Notification/Notification';
import { addDishToCart } from '../../utils/CartHandler';

export const Catalog = () => {
  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectCategories, setSelectCategories] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [notificationText, setNotificationText] = useState('');

  const init = async () => {
    try {
      // Loading start
      setLoading(true);

      // Fetch dishes data
      const dishesResult = await fetchDishList();
      setDishes(dishesResult.data);

      // Fetch categories data
      const categoriesResult = await fetchCategoryList();
      setCategories(categoriesResult.data);

      // Loading end
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    init();
  }, []);

  const addToCart = (dish, action) => {
    addDishToCart(dish);
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

  const displayDishes = () => {
    return (
      <div className="row mt-4">
        {dishes.length > 0 &&
          dishes.map((dish) => {
            return (
              <MenuItem dish={dish} addToCart={addToCart} key={dish._id} />
            );
          })}
      </div>
    );
  };

  const displayFilteredDishes = () => {
    return (
      <div className="row mt-4">
        {filteredDishes.length > 0 &&
          filteredDishes.map((filteredDish) => {
            return (
              <MenuItem
                dish={filteredDish}
                addToCart={addToCart}
                key={filteredDish._id}
              />
            );
          })}
      </div>
    );
  };

  const getFilteredDishes = async (categories) => {
    const categoriesLength = categories.length;
    setSelectCategories(categories);

    try {
      setLoading(true);
      const result =
        categoriesLength > 0
          ? await fetchFilteredDishesList(categories)
          : await fetchDishList();

      // If select, clear the normal dishes
      categoriesLength > 0 ? setDishes([]) : setFilteredDishes([]);

      // If select, trigger the displayFilteredDishes function
      categoriesLength > 0
        ? setFilteredDishes(result.data)
        : setDishes(result.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(error.response.data.error);
      }
    }
  };

  const renderCatalog = () => (
    <Layout title={'Choose your cuisine'} background={false}>
      {showNotification()}
      {loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <p className="catalog-subtitle">
            Substituting white rice with brown rice or fried rice after 3:00pm
            will be $1.50 for a pint and $2.50 for a quart.
          </p>
          <div className="catalog-main">
            <div className="catalog-category mt-4">
              <CheckboxGroup
                categories={categories}
                categoriesSelected={selectCategories}
                handleFiltering={getFilteredDishes}
              />
            </div>
            <div className="catalog-cusine">
              {displayDishes()}
              {displayFilteredDishes()}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );

  return <>{renderCatalog()}</>;
};
