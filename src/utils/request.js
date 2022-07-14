import axios from 'axios'
import { useUserInfoStore } from '@/store/user'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})
// request interceptor
service.interceptors.request.use(config => {

    console.log('Loading..')
    const userInfoStore = useUserInfoStore()

    // update headers authorization openid
    if (userInfoStore.openid) {
      config.headers['Authorization'] = userInfoStore.openid // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    }
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
})

service.interceptors.response.use(response => {
    console.log('Loading..')
    return response
}, error => {
    console.log('Loading..')

    console.log(error.response) // for debug

    if (error.response.status === 404) {
        console.log('404')
    }

    // if (error.response.status === 401 && !store.getters.qrcode.show) {
    //     console.log('unAuthorization show qrcode')
    //     // store.commit('SET_QRCODE', {
    //     //     show: true,
    //     //     url: store.getters.city.qrcode
    //     // })
    // }

    return Promise.reject(error)
})

export default service