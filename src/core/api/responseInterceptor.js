import { storage } from '../utils/storage';
import { STORAGE_KEYS, ENDPOINTS } from '../config/appConstants';
import { handleApiError } from '../utils/errorHandler';

/**
 * Handles all responses globally:
 *  - 401 → try silent token refresh → retry original request
 *  - All other errors → normalize via errorHandler
 */
export const attachResponseInterceptor = (axiosInstance) => {
  let isRefreshing = false;
  let refreshQueue = []; // pending requests while refreshing

  const processQueue = (error, token = null) => {
    refreshQueue.forEach(({ resolve, reject }) =>
      error ? reject(error) : resolve(token)
    );
    refreshQueue = [];
  };

  axiosInstance.interceptors.response.use(
    // ── Success ──────────────────────────────────────────────
    (response) => response,

    // ── Error ────────────────────────────────────────────────
    async (error) => {
      const originalRequest = error.config;

      // 401 → silent refresh
      if (
        error.response?.status === 401 &&
        !originalRequest._retry &&
        !originalRequest.url.includes('/auth/refresh')
      ) {
        if (isRefreshing) {
          // Queue requests while refresh is in progress
          return new Promise((resolve, reject) => {
            refreshQueue.push({ resolve, reject });
          }).then((token) => {
            originalRequest.headers['Authorization'] = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const refreshToken = storage.get(STORAGE_KEYS.REFRESH_TOKEN);
          const { data } = await axiosInstance.post(ENDPOINTS.AUTH.REFRESH_TOKEN, {
            refreshToken,
          });
          const newToken = data?.data?.accessToken;
          storage.set(STORAGE_KEYS.AUTH_TOKEN, newToken);
          axiosInstance.defaults.headers['Authorization'] = `Bearer ${newToken}`;
          processQueue(null, newToken);
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          // Refresh failed → force logout
          storage.clearAll();
          window.location.href = '/login';
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      // All other errors → normalize
      return Promise.reject(handleApiError(error));
    }
  );
};