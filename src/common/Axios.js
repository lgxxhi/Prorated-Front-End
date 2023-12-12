import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : process.env.REACT_APP_API_KEY,
  timeOut: 5000,
});

export default AxiosInstance;
