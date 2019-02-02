import axios from 'axios';
import router from '../router';

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
    config => {
        const user = JSON.parse(localStorage.getItem('user'));
        user && (config.headers.Authorization = 'Bearer ' + user.api_token);
        return config;
    },
    error => {
        return Promise.error(error);
    });

/**
 * 响应拦截器
 */
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    router.replace({path: '/login'});
                    break;
                default:
                    break;
            }
            return Promise.reject(error);
        }
    }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error)
            })
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error)
            })
    });
}

/**
 * patch方法，对应patch请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function patch(url, params) {
    return new Promise((resolve, reject) => {
        axios.patch(url, params)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error)
            })
    });
}

/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function put(url, params) {
    return new Promise((resolve, reject) => {
        axios.put(url, params)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error)
            })
    });
}
