import axios from 'axios';


axios.defaults.baseURL = process.env.VUE_APP_API_URL;

// axios请求拦截器
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token');
  if (token) {
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});


// Axios响应拦截器 401 refresh access token
axios.interceptors.response.use(response => response, error => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axios.post('/refresh', {}, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('refresh_token')}`
          }
      }).then(res => {
          if (res.status === 200) {
              localStorage.setItem('access_token', res.data.access_token);
              axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
              return axios(originalRequest);
          }
      });
  }
  return Promise.reject(error);
});