<template>
  <div class="main-25">
    <!-- 头部导航栏 -->
    <nav ref="nav" :class="['nav',{'active':isActive}]">
      <div class="container">
        <h1 class="logo"><a href="https://github.com/zhang-bcxb">我的网站</a></h1>
        <ul>
          <li><a href="#" class="current">首页</a></li>
          <li><a href="#">关于</a></li>
          <li><a href="#">服务</a></li>
          <li><a href="#">联系</a></li>
        </ul>
      </div>
    </nav>

    <div class="hero flex-center">
      <div class="container">
        <h1>欢迎来到我的网站</h1>
        <p>我是编程细胞，喜欢参与一些开源项目的讨论。</p>
      </div>
    </div>

    <section class="container content flex-center">
      <h1>这是第二屏</h1>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    fixNav() {
      // 当前页面的垂直滚动位置 大于 导航栏的高度 + 150
      if (window.scrollY > this.$refs.nav.offsetHeight + 150) {
        // 修改样式
        this.isActive = true
      } else {
        // 移除样式
        this.isActive = false
      }
    }
  },
  mounted() {
    // 修改 body 的溢出隐藏，需要滚动条
    document.body.style.overflow = ''
    // 绑定滚动事件
    window.addEventListener('scroll', this.fixNav)
  },
  destroyed() {
    window.removeEventListener('scroll', this.fixNav)
  }
};

</script>

<style lang="less" scoped>
.main-25 {
  height: 100%;
}

.flex-center {
  /* 水平垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 100vw;
  margin: 0 auto;
}

/* 导航栏 */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  z-index: 99;
}

/* 导航栏容器 */
.nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  transition: all 0.3s ease-in-out;
}

.nav ul {
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;

}

.nav a {
  color: #fff;
  text-decoration: none;
  padding: 7px 15px;
  transition: all 0.3s ease-in-out;
}

/* 导航栏滑动一定的距离显示的样式 */
.nav.active {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.nav.active a {
  color: #000;
}

.nav.active .container {
  padding: 10px 0;
}

/* a 标签选中和触摸的样式 */
.nav a.current,
.nav a:hover {
  color: #3498db;
  font-weight: bold;
}

/* 第一屏 */
.hero {
  background-image: url('bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  height: 100vh;
  color: #fff;
  /* 相对定位 */
  position: relative;
  text-align: center;
  z-index: -2;
}

/* 遮罩背景 */
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.hero h1 {
  font-size: 46px;
  margin: -20px 0 20px;
}

.hero p {
  font-size: 20px;
  letter-spacing: 1px;
}

/* 第二屏 */
.content {
  position: relative;
  height: 100vh;
  background-color: pink;
  overflow-x: hidden;
}
</style>
