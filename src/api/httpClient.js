import axios from "axios";
// import store from '../store/store'

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
  function (error) {
    return Promise.reject(error);
  }
);

// httpsClient.interceptors.response.use((response) => {
//   return response;
// },
// (error) => {
//     if(error.response.status !== 401){
//       return Promise.reject(error);
//     }else {
      
//       const data = {
//         refresh_token: localStorage.getItem("refresh_token"),
//         user_id:store.state.user.user.id
//       }
//       console.log(data)
//       store.dispatch('refreshTokenAction', data)
//     }
// });

export default httpsClient;
