import axios from 'axios';

const httpsClient = axios.create({
    baseUrl: 'http://api-dev.gerocare.org/api/v1',
    // baseUrl: process.VUE_APP_MAIN_URL,
    timeout: 50000, // indicates, 5000ms ie. 5 second
    headers: {
        "Content-Type": "application/json",
    }
});

// Adding token to request using interceptors
httpsClient.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('key');
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default httpsClient;