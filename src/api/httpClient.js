import axios from "axios";

const baseDomain = process.env.VUE_APP_BASE_URL || "http://api-dev.gerocare.org";
const baseURL = `${baseDomain}/api/v1`;

const httpsClient = axios.create({
  baseURL,
  timeout: 50000, // indicates, 5000ms ie. 5 second
  headers: {
    "Content-Type": "application/json"
  }
});

// Adding token to request using interceptors
httpsClient.interceptors.request.use(
  config => {
    let token = localStorage.getItem("key");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default httpsClient;
