<template>
  <transition name="modal-fade">
    <div class="dialog" v-show="show">
      <div class="content">
        <slot></slot>
        <div class="close" v-show="buttonType === 'close'">
            <span @click="closeButtonClick">x</span>
        </div>
        <div class="understood text-center" v-show="buttonType === 'understood'">
            <span class="understoodButton" @click="closeButtonClick">{{$words.understood}}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { useAppInfo } from '@/store/app';
export default {
  data () {
    return {
      appInfo: useAppInfo()
    }
  },
  computed: {
  },
  props: {
    buttonType: {
      required: false,
      type: String,
    },
    show: {
      required: true,
      type: Boolean,
      default: false
    }
  },
  methods:{
    closeButtonClick() {
      this.$emit('closeModal')
    }
  }
}
</script>
<style type="scss" scoped>
.understood {
  font-size: .8rem;
  padding: 10px;
}
.understoodButton{
  color: #545454;
  padding: 5px 15px;
  border-radius: 5px;
  text-align: center;
  background: rgb(183 183 183 / 38%);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog .content {
  width: 90%;
  background: #FFFFFF;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.05);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}
.close {
  padding: 10px;
}
.close span{
  font-family: arial;
  color: #a7a7a7;
  margin: 0 auto;
  font-size: 1rem;
  display:block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  border: none;
  background: rgb(183 183 183 / 38%);
  rotate: -3deg;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

</style>
