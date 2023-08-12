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
/* 去除列表的默认样式 */
ul {
  list-style: none;
}
/* 去除链接的默认样式 */
a {
  text-decoration: none;
  color: inherit;
}
/* 获取焦点时，去除轮廓线 */
button:focus,
input:focus {
  outline: none;
}
</style>
