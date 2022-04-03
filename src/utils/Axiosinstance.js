import axios from 'axios';
import { API_BASE_URL, TIMEOUT } from '../config/Config';

// axios global setting
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
});

AxiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    // 'redirect' is the stripe payment url what I set in backend
    if (response.data.redirect) {
      window.location = response.data.redirect;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
