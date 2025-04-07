import axios from "axios";

// Creează o instanță separată de axios
const axiosInstance = axios.create();

// Interceptor de răspuns — prinde erorile și le transformă în "răspuns normal"
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.resolve({ __handled: true, originalError: error });
  }
);

export default axiosInstance;
