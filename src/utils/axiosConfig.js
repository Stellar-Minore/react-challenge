import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.jikan.moe/v3'
});

instance.interceptors.request.use(function (config) {
  return config;
});

export default instance;
