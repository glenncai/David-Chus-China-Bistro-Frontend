import _ from 'lodash';

export const addDishToCart = (dish) => {
  let davidchu_cart = { dishes: [] };

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('davidchu_cart')) {
      davidchu_cart = JSON.parse(localStorage.getItem('davidchu_cart'));
    }

    // Keep the original dishes in cart, and add the new dish and count as one
    davidchu_cart.dishes.push({ ...dish, count: 1 });

    // It is forbidden to add the same dish repeatedly, identified by unique _id
    const uniqueDishes = _.uniqBy(davidchu_cart.dishes, '_id');

    davidchu_cart.dishes = uniqueDishes;
    localStorage.setItem('davidchu_cart', JSON.stringify(davidchu_cart));
  }
};

export const getCart = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('davidchu_cart')) {
      const cart = JSON.parse(localStorage.getItem('davidchu_cart'));
      return cart.dishes;
    }
    return [];
  }
  return [];
};

export const getCartTotalPrice = () => {
  let dishes = [];

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('davidchu_cart')) {
      const cart = JSON.parse(window.localStorage.getItem('davidchu_cart'));
      dishes = cart.dishes;

      let totalPrice = _.sumBy(dishes, (dish) => dish.count * dish.price);

      return totalPrice;
    }
  }
};

export const getTotalItemsInCart = () => {
  let cart = {};

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('davidchu_cart')) {
      cart = JSON.parse(window.localStorage.getItem('davidchu_cart'));
    }

    return cart.dishes ? cart.dishes.length : 0;
  }

  return 0;
};

export const updateDishQuantity = (dish, callback) => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('davidchu_cart')) {
      const cart = JSON.parse(window.localStorage.getItem('davidchu_cart'));
      const updatedDishes = _.map(cart.dishes, (item) => {
        if (item._id === dish._id) {
          item.count = dish.count;
        }
        return item;
      });

      cart.dishes = updatedDishes;
      localStorage.setItem('davidchu_cart', JSON.stringify(cart));

      // Update cart interface
      callback();
    }
  }
};

export const removeDishFromCart = (id, callback) => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('davidchu_cart')) {
      const cart = JSON.parse(window.localStorage.getItem('davidchu_cart'));
      _.remove(cart.dishes, { _id: id });
      localStorage.setItem('davidchu_cart', JSON.stringify(cart));

      // Update cart interface
      callback();
    }
  }
};
