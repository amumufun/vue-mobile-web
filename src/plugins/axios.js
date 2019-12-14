import Vue from 'vue';
import Axios from 'axios';
import { Toast } from 'mint-ui';

// Full config:  https://github.com/axios/axios#request-config
Axios.defaults.baseURL = process.env.baseURL || '';
Axios.defaults.timeout = 5 * 60 * 1000;
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const axios = Axios.create();

axios.interceptors.request.use(
  (config) => {
    // const token = auth.getToken();
    const token = '';
    if (token) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request Error
    Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    const { data } = response;
    // 二进制文件直接返回
    if (response.config.responseType === 'blob') {
      return response;
    }
    if (data.code === 0) {
      return data;
    }
    if (data.code === -1) {
      Toast(data.message || 'unknown Error');
      return Promise.reject(data);
    }
    return data;
  },
  (error) => {
    // 请根据API规范定制
    if (error.response && error.response.data && error.response.data.error) {
      Toast({
        message: error.response.data.error,
        position: 'bottom',
        duration: 3000,
      });
      return Promise.reject(error.response.data.error);
    }
    if (error.response && error.response.status) {
      if (error.response.status === 401) {
        window.location.href = '/login';
      } else if (error.response.status === 403) {
        window.location.href = '/403';
      } else if (error.response.data && error.response.data.msg) {
        Toast({
          message: error.response.data.msg,
          position: 'bottom',
          duration: 3000,
        });
      } else {
        Toast({
          message: error.message,
          position: 'bottom',
          duration: 3000,
        });
      }
    }
    return Promise.reject(error);
  },
);

Plugin.install = (vue) => {
  vue.axios = axios;
  window.axios = axios;
  Object.defineProperties(vue.prototype, {
    axios: {
      get() {
        return axios;
      },
    },
    $axios: {
      get() {
        return axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
