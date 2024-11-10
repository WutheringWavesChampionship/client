import axios from 'axios';

export const TOKEN_LOCAL_STORAGE_KEY = 'user_token';

export const axiosApi = axios.create({
  baseURL: __API__,
});
axiosApi.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);
  if (config.headers) {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }
  return config;
});
