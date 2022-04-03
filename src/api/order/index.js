import { AxiosInstance } from '../../utils/Axiosinstance';

export const createOrder = async (order_data, token) => {
  console.log(token);
  const headers = { Authorization: `Bearer ${token}` };

  try {
    const response = await AxiosInstance.post(
      '/api/orders',
      { order_data },
      { headers },
    );
    console.log(response.data.redirect);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateOrderStatus = async (checkout_session_id, token) => {
  const headers = { Authorization: `Bearer ${token}` };

  try {
    const response = await AxiosInstance.put(
      `/api/orders/${checkout_session_id}`,
      {},
      { headers },
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
