import { AxiosInstance } from '../../utils/Axiosinstance';

export const createUser = async (user, token) => {
  // JWT includes 'email' and 'sub'
  const { email, sub } = user;

  const headers = { Authorization: `Bearer ${token}` };

  // "sub": "auth0|abcdefg123456" -> we want the right hand side value
  const _id = sub.split('|')[1];

  const payload = { _id, email };

  try {
    const result = await AxiosInstance.post('/api/users', payload, { headers });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserAddress = async (id, token) => {
  const headers = { Authorization: `Bearer ${token}` };

  try {
    const result = await AxiosInstance.get(`/api/users/${id}/address`, {
      headers,
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateUserAddress = async (id, address, token) => {
  const headers = { Authorization: `Bearer ${token}` };

  try {
    const result = await AxiosInstance.put(
      `/api/users/${id}/address`,
      address,
      { headers },
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
