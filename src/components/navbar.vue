<template>
    <div class="navbar">
        <span class="icon iconfont" @click="$emit('lefticon')">&#xe600;</span>
        <span>{{title}}</span>
        <span class="icon iconfont">&#xeb33;</span>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "home",
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="less">
.navbar {
  box-sizing: border-box;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 36px;
  background-color: #ccc;
  span {
    font-size: 20px;
    &:nth-child(2) {
      font-weight: 600;
      font-size: 20px;
    }
  }
}
</style>