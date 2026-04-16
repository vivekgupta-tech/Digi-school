import { storage } from '../utils/storage';
import { STORAGE_KEYS } from '../config/appConstants';

/**
 * Attaches Authorization header to every outgoing request.
 * Called from apiClient.js — do not use directly.
 */
export const attachRequestInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = storage.get(STORAGE_KEYS.AUTH_TOKEN);
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      // Do NOT set Content-Type here — let axios set it automatically
      // so multipart/form-data boundaries are handled correctly.
      return config;
    },
    (error) => Promise.reject(error)
  );
};