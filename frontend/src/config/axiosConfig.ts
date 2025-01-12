import axios from 'axios';
import { BASE_URL } from '../utils/apiConstants';

export const api = axios.create({
  withCredentials: false,
  baseURL: BASE_URL,
});

const errorHandler = (error: any) => {
  const statusCode = error.response?.status;

  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
