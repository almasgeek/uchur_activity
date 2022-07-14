import request from '@/utils/request'

export function getUserInfoAPI () {
    return request({
        url: '/user/info/',
        method: 'get'
    })
}