import axios from 'axios';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 
  timeout: 5000, 
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error); 
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 200) {
      console.log(res.message); 
      return Promise.reject('error');
    } else {
      return response.data;
    }
  },
  error => {
    console.log('err' + error); 
    return Promise.reject(error);
  }
);

export default service;