import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const api = axios.create({
   baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
   async (config) => {
      const token = 'HERE_GOES_TOKEN';

      if (token) {
         const authConfig = config;
         authConfig.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
   },
   (error) => {
      Promise.reject(error);
   }
);

export default api;
