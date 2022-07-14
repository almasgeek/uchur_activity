import { defineStore } from "pinia";

export const useAppInfo = defineStore('appInfo', {
    state: () => {
        return {
            modalShow: false,
            cdn: 'https://ws-static-uchur.subat.cn/',
            qrcode: 'hotan_qrcode.jpg',
        }

    },
    getters: {
        qrCode: (state) => {
            return state.cdn + state.qrcode
        },
    },
    actions: {
        updateModalStatus () {
            // this.$state.modalShow = !this.$state.modalShow
            this.modalShow = !this.modalShow
            // console.log(this.modalShow)
        }
    }
})

