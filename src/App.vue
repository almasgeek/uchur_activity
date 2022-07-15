<template>
  <div id="app">
    <router-view />
    <global-dialog :show="appInfo.modalShow" @closeModal="closeModal()">
      <div style="padding: 10px;">
        <img :src="appInfo.qrCode" class="full-img">
        <div class="text-center">{{$words.subscribeRequired}}</div>
      </div>
    </global-dialog>
  </div>
</template>

<script>
import globalDialog from '@/components/globalDialog';
import { useAppInfo } from '@/store/app';

export default {
  data () {
    return {
      subscribeIsCheking: false,
      appInfo: useAppInfo(),
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
  methods: {
    closeModal() {
      this.appInfo.updateModalStatus()
    }
  },
  watch: {
    '$route': {
      handler (route) {
        console.log('router',route)
        // if (!this.subscribeIsCheking) {
        // }
      }
    }
  },
  components: {
    globalDialog
  }
}
</script>
