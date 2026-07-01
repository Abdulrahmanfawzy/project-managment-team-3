// services/api.ts
import axios from "axios";
import TokenService from "./tokenServices";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = TokenService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      TokenService.deleteToken();
      window.location.href = "/signin";
    }

    return Promise.reject(error);
  }
);
