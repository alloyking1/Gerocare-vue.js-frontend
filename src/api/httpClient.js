import axios from "axios";

const baseDomain =
  process.env.VUE_APP_BASE_URL || "http://api-dev.gerocare.org";
const baseURL = `${baseDomain}/api/v1`;

const httpsClient = axios.create({
<<<<<<< HEAD
  baseURL,
  timeout: 50000, // indicates, 5000ms ie. 5 second
  headers: {
    "Content-Type": "application/json"
  }
=======
    baseURL: process.env.VUE_APP_MAIN_URL || 'http://api-dev.gerocare.org/api/v1',
    timeout: 50000, // indicates, 5000ms ie. 5 second
    headers: {
        "Content-Type": "application/json",
    },
>>>>>>> fd794ab3bf26b7af8151777ec18d38fe427df5cc
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
