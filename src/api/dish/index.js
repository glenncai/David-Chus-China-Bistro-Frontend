import { AxiosInstance } from '../../utils/Axiosinstance';

export const fetchDishList = async () => {
  try {
    const dishes = await AxiosInstance.get('/api/dishes');
    return dishes;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchFilteredDishesList = async (categoriesInput = []) => {
  // categoriesInput is the variable name matched the backend one
  const searchFilters = { categoriesInput };
  try {
    const dishes = await AxiosInstance.post(
      '/api/dishes/category/_search',
      searchFilters,
    );
    return dishes;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
