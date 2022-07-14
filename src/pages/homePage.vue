<template>
  <div>

    <div class="head">
      <img src="@/assets/images/title.png" class="full-img title">

      <img src="@/assets/images/products.png" class="full-img" style="width: 85%;margin: 0 auto;">
    </div>

    <content-card>
      <div class="activity-explain">
        {{$words.activityExplain}}
      </div>
      <div style="margin-top: 10px;" v-show="userInfo.userID">

        <div class="text-center">
          <div style="width: 100px;height: 100px;margin: 0 auto;">
            <img :src="userInfo.headimgurl" style="width: 100px;height: 100px;margin: 0 auto;border-radius: 10px;">
          </div>
          <div style="font-family: auto;font-size: 14px;color: #757575;padding-top: 5px;">{{userInfo.username}}</div>
        </div>
        <div class="form">
          <input v-model="signUp.phone" type="number" pattern="[0-9]*" inputmode="numeric" class="m-t-b-10" :placeholder="$words.cellphonePlaceholder">
        </div>
        <button class="button" @click="signUp()">{{$words.signup}}</button>
        <!-- <button class="button" @click="modalShow()">{{$words.signup}}</button> -->
      </div>
    </content-card>

    <div style="margin-top:20px;">
      <div class="m-t-b-10 title text-center" style="font-size: 1rem;">{{$words.giftTitle}}</div>
      <content-card>
        <div style="width: 100%;display: flex; flex-direction: row; flex-wrap: wrap;row-gap: 10px;">
          <div v-for="(gift, index) in giftList" :key="index" class="gift-flex-item">
            <div class="gift-box">
              <div class="text-center">
                <img src="@/assets/images/gifts/iphone-13.png" class="full-img">
              </div>
            </div>
          </div>
        </div>
      </content-card>
    </div>

    <div style="margin-top: 20px">
      <div class="title" style="font-size: 1rem;text-align: center;">{{$words.explainTitle}}</div>
      <content-card style="font-size: .8rem;"> 
        <div>{{$words.explainContentOne}}</div>
        <div style="margin-top: 20px;">{{$words.explainContentTwo}}</div>
        <div style="margin-top: 20px;">{{$words.explainContentThree}}</div>
        <div style="padding: 10px 0px; width: 10%; margin: 0 auto;">
          <hr style="border: 1px dashed #af4035; border-radius: 10px;">
        </div>
      </content-card>
    </div>

    <div style="margin-top:20px;">
      <div class="title text-center" style="font-size: 1rem;">{{$words.participant}}</div>
      <content-card style="font-size: .8rem;"> 
        <div v-for="(participant, index) in participantList" :key="index" class="text-center flex-container">
          <div style="flex-grow: 3">
            <img src="http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCZLsQSJzQPjDkwDP43yCBKswF7HrzJTMqicBiaXeiatD27erUaYiaP4fIr0yqibnnLE5pRvaZa9HaoFtg/132" style="width: 50px;height: 50px;margin: 0 auto;border-radius: 10px;">
          </div>
          <div style="flex-grow: 3">
            {{participant.username}}
          </div>
          <div style="flex-grow: 3;font-family: 'arial'">
            {{participant.participant_at}}
          </div>
        </div>
      </content-card>
    </div>

  </div>
</template>

<script>
import contentCard from '@/components/contentCard'
import { useAppInfo } from '@/store/app';
import { useUserInfoStore } from '@/store/user'

export default {
  data() {
    return {
      signup: {
        userID: 0,
        phone: null
      },
      participantList: [
        {headimg: 'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCZLsQSJzQPjDkwDP43yCBKswF7HrzJTMqicBiaXeiatD27erUaYiaP4fIr0yqibnnLE5pRvaZa9HaoFtg/132', username: 'Almas', participant_at: '2022-08-12'},
        {headimg: 'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCZLsQSJzQPjDkwDP43yCBKswF7HrzJTMqicBiaXeiatD27erUaYiaP4fIr0yqibnnLE5pRvaZa9HaoFtg/132', username: 'Almas', participant_at: '2022-08-12'},
        {headimg: 'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCZLsQSJzQPjDkwDP43yCBKswF7HrzJTMqicBiaXeiatD27erUaYiaP4fIr0yqibnnLE5pRvaZa9HaoFtg/132', username: 'Almas', participant_at: '2022-08-12'},
        {headimg: 'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCZLsQSJzQPjDkwDP43yCBKswF7HrzJTMqicBiaXeiatD27erUaYiaP4fIr0yqibnnLE5pRvaZa9HaoFtg/132', username: 'Almas', participant_at: '2022-08-12'},
      ],
      giftList: [
        {img: '@/assets/images/gifts/iphone-13.png'},
        {img: '@/assets/images/gifts/iphone-13.png'},
        {img: '@/assets/images/gifts/iphone-13.png'},
        {img: '@/assets/images/gifts/iphone-13.png'},
        {img: '@/assets/images/gifts/iphone-13.png'},
        {img: '@/assets/images/gifts/iphone-13.png'},
      ],
      appInfo: useAppInfo(),
      userInfo: useUserInfoStore(),
    }
  },
  created() {
    this.userInfo.updateUserInfo()
  },
  methods: {
    modalShow() {
      this.appInfo.updateModalStatus()
    },
    signUp() {
      if (!this.userInfo.subscribe) {
        this.appInfo.updateModalStatus()
      } else {
        console.log(this.signUp.phone, 'success signup')
      }
    }
  },
  components: { contentCard },
}
</script>
<style scoped>
.title {
  margin: 10px auto 0 auto;
  width: 95%;

}
.activity-explain {
  text-align: center;
  font-size: .8rem;
}
.gift-flex-item {
  flex-basis: 50%;
  color: #fff;
}
.gift-box {
  width: 95%;
  margin: 0 auto;
  /* background: rgb(205 44 50 / 70%); */
  /* border-radius: 5px; */
}
.flex-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin:5px 0;
  border-bottom: 1px dashed #af4035;
}
.flex-container:last-child{
  border-bottom: none;
  margin: 0;
}
</style>
