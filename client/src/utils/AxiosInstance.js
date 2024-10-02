import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://merndashboard-4m1o.onrender.com/api/",
});

export default AxiosInstance;
