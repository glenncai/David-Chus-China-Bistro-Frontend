import _ from 'lodash';

export const addDishToCart = (dish) => {
  let davidchuschinabistro_cart = { dishes: [] };

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('davidchuschinabistro_cart')) {
      davidchuschinabistro_cart = JSON.parse(
        localStorage.getItem('davidchuschinabistro_cart'),
      );
    }

    // Keep the original dishes in cart, and add the new dish and count as one
    davidchuschinabistro_cart.dishes.push({ ...dish, count: 1 });

    // It is forbidden to add the same dish repeatedly, identified by unique _id
    const uniqueDishes = _.uniqBy(davidchuschinabistro_cart.dishes, '_id');

    davidchuschinabistro_cart.dishes = uniqueDishes;
    localStorage.setItem(
      'davidchuschinabistro_cart',
      JSON.stringify(davidchuschinabistro_cart),
    );
  }
};

export const checkAddedDish = (dish) => {
  let davidchuschinabistro_cart = { dishes: [] };

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('davidchuschinabistro_cart')) {
      davidchuschinabistro_cart = JSON.parse(
        localStorage.getItem('davidchuschinabistro_cart'),
      );
    }
  }
};
