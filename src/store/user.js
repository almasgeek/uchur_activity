import Cookie from 'js-cookie'
import { defineStore } from "pinia";
import { getUserInfoAPI } from '@/api/index';

export const useUserInfoStore = defineStore('userInfo', {
    state: () => {
        return {
            userID: 0,
            openid: '',
            headimgurl: '',
            username: '',
            subscribe: false
        }

    },
    getters: {

    },
    actions: {
        updateUserInfo() {
            if (!this.userID) {
                getUserInfoAPI().then(({ data }) => {
                    this.userID = data.id
                    this.username = data.username
                    this.headimgurl = data.headimgurl
                    this.subscribe = data.subscribe
                })
            }
        },
        setCookieAuthInfo(openid, cityid) {
            this.$state.openid = openid
            Cookie.set('_openid', openid)
            Cookie.set('_cityId', cityid)
        }
    }
})
