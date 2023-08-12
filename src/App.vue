<template>
  <div id="app">
    <Home></Home>
  </div>
</template>
<script>
// 导入组件
import Home from './views/page/home.vue'

export default {
  name: 'App',
  // 注册组件
  components: {
    Home
  },
  mounted() {
    document.title = 'Vue2 版本的 50 个案例';
  }
}
</script>
<style lang="less">
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
