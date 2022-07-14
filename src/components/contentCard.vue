<template>
  <div class="contentCard">
    <div class="title" v-show="title">{{title}}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  datra () {
    return {
    }
  },
  props: {
    title: {
      required: false,
      type: String,
    }
  }
}
</script>
<style type="scss" scoped>
</style>
