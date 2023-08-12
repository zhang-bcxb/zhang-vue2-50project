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
    // 修改标题
    document.title = 'Vue2 版本的 50 个案例';
  }
}
</script>
<style lang="less">
body {
  background-color: #e2c8db;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
