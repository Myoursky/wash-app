// import axios from 'axios';
import qs from 'qs';
import Taro from '@tarojs/taro'

const methods = ['get', 'post', 'put', 'patch', 'delete'];

function formatUrl(path) {
  if (path.indexOf('http') >= 0) return path;
  const adjustedPath = path[0] !== '/' ? `/${path}` : path;
  return adjustedPath;
}

export default class ApiClient {
  constructor() {
    methods.forEach(method =>
      this[method] = (path, { params, data, form } = {}) => new Promise((resolve, reject) => {
        const config = {
          url: formatUrl(path),
          method: method.toUpperCase(),
        };
        if (form) {
          config.data = qs.stringify(form);
        }
        if (data) {
          config.data = data;
        }
        Taro.request(config).then((res) => {
          const body = res.data;
          resolve(body);
        }).catch((err) => {
          if (err) reject(err);
        });
      }));
  }
}
