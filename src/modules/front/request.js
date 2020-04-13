import axios from 'axios'
import {delUSERCookie, getCsrfToken} from "../../utils/auth";
import {Message} from "element-ui";
import store from "./store";
import router from "./router";

// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
    timeout: 1000000 // 请求超时时间
})

service.interceptors.request.use(
    config => {
        //token不用带，token存cookie的，header中带个csrf就行了
        // if (store.getters.token) {
        //     config.headers.Authorization = 'Bearer ' + getToken()
        // }
        config.headers["_csrf"] = getCsrfToken()
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        console.log('请求失败')
        const res = error.response
        console.log(res)
        if (res.status === 401) {
            store.commit("SER_USER",null)
            delUSERCookie()
            router.push("/login")
        } else if (res.status === 400) { //表单验证失败
            var times = 5 * 1000
            Message({
                message: res.data.message,
                type: 'error',
                duration: times
            })
        } else if (res.status === 403) {
            Message({
                message: '权限不足',
                type: 'error',
                duration: 5 * 1000
            })
        } else if (res.status === 404) {
            Message({
                message: '未找到数据',
                type: 'error',
                duration: 5 * 1000
            })
        } else if (res.status === 503) {
            Message({
                message: '服务暂时不可用，请稍后再试',
                type: 'error',
                duration: 5 * 1000
            })
        } else {
            Message({
                message: '网络错误，请稍后再试',
                type: 'error',
                duration: 5 * 1000
            })
        }
        return Promise.reject(error)
    }
)


export default service
