import axios from 'axios';

const http = axios.create({
  baseURL: `api/`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

http.interceptors.request.use(
  (config) => {
    //Add token in header here
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      console.log(response.data);
    }
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default http;
