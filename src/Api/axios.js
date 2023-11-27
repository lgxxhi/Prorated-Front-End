import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  timeout: 50000,
});

export default AxiosInstance;
