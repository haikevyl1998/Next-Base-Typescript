import axios from 'axios';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.response.use(
  (response) => response?.data,
  (error) => Promise.reject(error),
);

export default request;
