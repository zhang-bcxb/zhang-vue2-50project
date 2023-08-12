<template>
  <div class="home-main">
    <nav :class="{hide:!isShowMenu}">
      <Menu></Menu>
    </nav>

    <main>
      <router-view></router-view>
    </main>

    <FBtn @switchMenu="(data)=>{isShowMenu = data}"></FBtn>
  </div>
</template>

<script>
// 导入组件
import Menu from './menu.vue'
import FBtn from './floating-btn.vue'

export default {
  name: 'Home',
  data() {
    return {
      isShowMenu: false
    }
  },
  // 注册组件
  components: {
    Menu,
    FBtn
  },
  methods: {}
}
</script>

<style scoped lang="less">
.home-main {
  height: 100vh;

  main {
    width: 100%;
    height: 100%;
  }
  .hide {
    transform: translateX(-100%);
  }
  nav {
    /* 固定定位 */
    position: fixed;
    z-index: 99;
    transition: 0.5s;
  }
}

</style>
