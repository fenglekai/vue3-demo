import axios from 'axios';
import { ElNotification } from 'element-plus'

const service = axios.create({
    baseURL: '',
    timeout: 10000,
})

service.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        ElNotification({
            title: 'Error',
            message: error,
            type: 'error',
          })
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    function (response) {
        const data = response.data;
        return data;
    },
    function (error) {
        ElNotification({
            title: 'Error',
            message: error,
            type: 'error',
          })
        return Promise.reject(error);
    }
)

export default service;