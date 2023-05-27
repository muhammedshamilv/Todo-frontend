import axios from 'axios';
const url = 'http://localhost:3001/' || process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: url
});

export default axiosInstance;
