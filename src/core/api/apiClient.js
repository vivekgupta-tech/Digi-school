import axios from 'axios';
import { BASE_URL, API_TIMEOUT, IS_MOCK_MODE } from '../config/appConstants';
import { attachRequestInterceptor } from './requestInterceptor';
import { attachResponseInterceptor } from './responseInterceptor';

const axiosInstance = axios.create({
  baseURL: IS_MOCK_MODE ? 'http://localhost:3000' : BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Only attach interceptors in real API mode
if (!IS_MOCK_MODE) {
  attachRequestInterceptor(axiosInstance);
  attachResponseInterceptor(axiosInstance);
}

const apiClient = {
  get:    (url, params = {}) => axiosInstance.get(url, { params }),
  post:   (url, data = {})   => axiosInstance.post(url, data),
  put:    (url, data = {})   => axiosInstance.put(url, data),
  patch:  (url, data = {})   => axiosInstance.patch(url, data),
  delete: (url)              => axiosInstance.delete(url),

  uploadImage: (url, file, fieldName = 'file', extraData = {}) => {
    const form = new FormData();
    form.append(fieldName, file);
    Object.entries(extraData).forEach(([k, v]) => form.append(k, v));
    return axiosInstance.post(url, form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  uploadVideo: (url, file, fieldName = 'file', onProgress, extraData = {}) => {
    const form = new FormData();
    form.append(fieldName, file);
    Object.entries(extraData).forEach(([k, v]) => form.append(k, v));
    return axiosInstance.post(url, form, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        if (onProgress && event.total) {
          onProgress(Math.round((event.loaded * 100) / event.total));
        }
      },
    });
  },

  uploadForm: (url, formData) =>
    axiosInstance.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

export default apiClient;