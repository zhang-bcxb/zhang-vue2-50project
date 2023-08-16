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
  margin: 0;
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

/* 滚动条 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background-color: rgba(73, 177, 245, 0.2);
}

::-webkit-scrollbar-thumb {
  background-color: #49b1f5;
  background-image: linear-gradient(45deg,
  rgba(255, 255, 255, 0.4) 25%,
  transparent 25%,
  transparent 50%,
  rgba(255, 255, 255, 0.4) 50%,
  rgba(255, 255, 255, 0.4) 75%,
  transparent 75%,
  transparent);
  border-radius: 1em;
}
</style>
