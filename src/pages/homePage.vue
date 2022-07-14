<template>
  <div>

    <div class="head">
      <img src="@/assets/images/title.png" class="full-img title">

      <img src="@/assets/images/products.png" class="full-img">
    </div>

    <content-card>
      <div class="activity-explain">
        {{$words.activityExplain}}
      </div>
      <div style="margin-top: 10px;">
        <button class="button" @click="$router.push({name: 'signup'})">{{$words.signup}}</button>
        <button class="button" @click="modalShow()">{{$words.signup}}</button>
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

    <div style="margin-top:30px;">
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

export default {
  data() {
    return {
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
      appInfo: useAppInfo()
    }
  },
  methods: {
    modalShow() {
      this.appInfo.updateModalStatus()
    }
  },
  components: { contentCard },
}
</script>
<style scoped>
.title {
  margin-top: 10px;
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
  background: rgb(205 44 50 / 70%);
  border-radius: 5px;
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
