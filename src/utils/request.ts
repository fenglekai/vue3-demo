<<<<<<< HEAD
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

=======
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

>>>>>>> 747ff841d65d59df20aea5de9992fcb1ae3305f8
export default service;