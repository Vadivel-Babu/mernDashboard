import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://mern-blog-9kew.onrender.com/api/",
});

export default AxiosInstance;
