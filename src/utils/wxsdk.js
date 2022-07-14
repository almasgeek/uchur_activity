import Cookie from 'js-cookie'
// import weixin from 'weixin-js-sdk'
import { getQueryObject, param, get1stHostName } from '@/utils'
// import wxSDKRequest from '@/utils/wxSDKRequest'
import { useUserInfoStore } from '@/store/user'

export const wxStoreOpenid = (apiUrl) => {
  let openid = Cookie.get('_openid')
  let cityId = +Cookie.get('_cityId')

  if (!openid || !cityId) {
    const query = getQueryObject()

    if (query.openid && query.cityid) {
      openid = query.openid
      cityId = +query.cityid
    } else {
      apiUrl += get1stHostName() + '/'

      const redirectUrl = encodeURIComponent(window.location.href)
      window.location.href = `${apiUrl}?redirect_url=${redirectUrl}`

      throw new Error('no user info')
    }
  }

  if (openid && cityId) {
    // pinia update
    const userInfoStore = useUserInfoStore()
    userInfoStore.setCookieAuthInfo(openid, cityId)

    // 去掉openid等敏感状态
    const query = getQueryObject()
    if (query.openid || query.cityid) {
      delete query.openid
      delete query.cityid

      let params = param(query)
      params = params.length <= 0 ? '' : ('?' + params)

      window.location.href = window.location.origin + window.location.pathname + params
    }
  }
}

// Vue.prototype.$weixin = weixin
// export const wxSdkRegister = (apiUrl, redirectUrl, jsApiList) => {

//   wxSDKRequest({
//     url: apiUrl,
//     method: 'post',
//     data: {
//       url: redirectUrl
//     }
//   }).then(({ data }) => {
//     weixin.config({
//       debug: false,
//       appId: data.appid,
//       timestamp: data.timestamp,
//       nonceStr: data.nonce_str,
//       signature: data.signature,
//       jsApiList: jsApiList,
//       openTagList: ['wx-open-audio']
//     })

//     weixin.ready(() => {
//       weixin.hideMenuItems({
//         menuList: [
//           'menuItem:copyUrl',
//           'menuItem:readMode',
//           'menuItem:openWithQQBrowser',
//           'menuItem:openWithSafari'
//         ]
//       })
//     })

//     weixin.error((errorMsg) => {
//       console.log('weixin jssdk error', errorMsg)
//     })
//   })
// }
