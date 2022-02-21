import { AxiosInstance } from '../../utils/Axiosinstance';

export const fetchCategoryList = async () => {
  try {
    const categories = await AxiosInstance.get('/api/categories');
    return categories;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
