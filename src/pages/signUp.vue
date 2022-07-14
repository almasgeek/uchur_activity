<template>
  <div style="margin-top: 30px;">

    <div class="title" style="font-size: 1rem;margin: 30px 0;" v-show="count">
        <span>{{$words.activityExpiredAt}}</span> <span>{{count}}</span>
    </div>

    <div style="margin-top: 0px">
      <div class="title" style="font-size: 1rem;">{{$words.explainTitle}}</div>
      <content-card style="font-size: .8rem;"> 
        <div>{{$words.explainContentOne}}</div>
        <div style="margin-top: 20px;">{{$words.explainContentTwo}}</div>
        <div style="margin-top: 20px;">{{$words.explainContentThree}}</div>
        <div style="padding: 10px 0px; width: 10%; margin: 0 auto;">
          <hr style="border: 1px dashed #af4035; border-radius: 10px;">
        </div>
      </content-card>
    </div>

    <div style="margin-top: 20px;">
      <div class="title" style="font-size: 1rem;">{{$words.participant}}</div>
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
import contentCard from '../components/contentCard'
import { useUserInfoStore } from '@/store/user'

export default {
  data () {
    return {
      userInfo: useUserInfoStore(),
      participantList: [
        {headimg: 'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCZLsQSJzQPjDkwDP43yCBKswF7HrzJTMqicBiaXeiatD27erUaYiaP4fIr0yqibnnLE5pRvaZa9HaoFtg/132', username: 'Almas', participant_at: '2022-08-12'},
        {headimg: 'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCZLsQSJzQPjDkwDP43yCBKswF7HrzJTMqicBiaXeiatD27erUaYiaP4fIr0yqibnnLE5pRvaZa9HaoFtg/132', username: 'Almas', participant_at: '2022-08-12'},
        {headimg: 'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCZLsQSJzQPjDkwDP43yCBKswF7HrzJTMqicBiaXeiatD27erUaYiaP4fIr0yqibnnLE5pRvaZa9HaoFtg/132', username: 'Almas', participant_at: '2022-08-12'},
        {headimg: 'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCZLsQSJzQPjDkwDP43yCBKswF7HrzJTMqicBiaXeiatD27erUaYiaP4fIr0yqibnnLE5pRvaZa9HaoFtg/132', username: 'Almas', participant_at: '2022-08-12'},
      ],
      count: '',
      seconds: 2 * 24 * 60 * 60
    }
  },
  mounted() {
    this.Time()
  },
  methods: {
    countDown () {
      let d = parseInt(this.seconds / (24 * 60 * 60))
      let h = parseInt(this.seconds / (60 * 60) % 24);
      h = h < 10 ? "0" + h : h
      let m = parseInt(this.seconds / 60 % 60);
      m = m < 10 ? "0" + m : m
      let s = parseInt(this.seconds % 60);
      s = s < 10 ? "0" + s : s
      if (d === 0) {
        this.count = h + this.$words.hours + m + this.$words.minutes + s + this.$words.seconds
      } else {
        this.count = d + this.$words.day + h + this.$words.hours + m + this.$words.minutes + s + this.$words.seconds
      }
    },
    Time() {
      setInterval(() => {
        this.seconds -= 1
        this.countDown()
      }, 1000)
    }
  },
  components: { contentCard },
}
</script>
<style scoped>
.title {
  text-align: center;
  font-size: 2rem;
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
