import Cookie from 'js-cookie'
import { defineStore } from "pinia";

export const useUserInfoStore = defineStore('userInfo', {
    state: () => {
        return {
            openid: '123123openid',
            headimgurl: 'headimgurl',
            username: 'Almasgeek',
            subscribe: false
        }

    },
    getters: {

    },
    actions: {
        updateSubscribe(subscribe) {
            this.subscribe = subscribe
            console.log(subscribe)
        },
        setCookieAuthInfo(openid, cityid) {
            Cookie.set('_openid', openid)
            Cookie.set('_cityId', cityid)
        }
    }
})

