import axios from "axios";

//TODO: Restore original file (base url)
const AxiosInstance = axios.create({
  baseURL: 3001,
  timeout: 50000,
});

export default AxiosInstance;
