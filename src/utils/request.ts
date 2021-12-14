import axios from 'axios';
import { ElMessage } from 'element-plus';

const service = axios.create({
    baseURL: '',
    timeout: 10000,
})

service.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    function (response) {
        const data = response.data;
        return data;
    },
    function (error) {
        return Promise.reject(error);
    }
)

export default service;