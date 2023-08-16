<template>
  <div class="main-45">
    <!-- 内容区域 -->
    <button class="nav-btn open-btn" @click="isShow=true">
      <i class="fas fa-bars"></i>
    </button>
    <img src="./logo.jpg" alt="" class="logo">
    <p class="text">编程细胞</p>

    <!-- 导航栏 -->
    <div :class="['nav','nav-black',{'visible':isShow}]">
      <div :class="['nav','nav-red',{'visible':isShow}]">
        <div :class="['nav','nav-white',{'visible':isShow}]">
          <!-- 关闭按钮 -->
          <button class="nav-btn close-btn" @click="isShow=false">
            <i class="fas fa-times"></i>
          </button>
          <!-- 头像 -->
          <img src="./logo.jpg" alt="" class="logo">
          <!-- 导航选项 -->
          <ul class="list">
            <li><a href="#">团队</a></li>
            <li><a href="#">位置</a></li>
            <li><a href="#">生活</a></li>
            <li>
              <ul>
                <li><a href="https://github.com/zhang-bcxb" target="_blank">GitHub</a></li>
                <li><a href="https://space.bilibili.com/337439992" target="_blank">Bilibili</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {}
};

</script>

<style lang="less" scoped>
.main-45 {
  display: flex;
  /* 水平垂直居中 */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 图片 */
.logo {
  width: 150px;
}

/* 按钮 */
.nav-btn {
  border: none;
  border-color: transparent;
  cursor: pointer;
  font-size: 20px;
}

/* 打开按钮 */
.open-btn {
  position: fixed;
  top: 10px;
  left: 10px;
}

/* 左侧导航栏 */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  /* 隐藏导航栏 */
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
}

/* 显示导航栏 */
.nav.visible {
  transform: translateX(0);
}

/* 第一层-黑色 */
.nav-black {
  background-color: rgb(14, 13, 13);
  width: 60%;
  max-width: 480px;
  min-width: 320px;
  /* 隐藏的延迟 */
  transition-delay: 0.4s;
}

.nav-black.nav.visible {
  transition-delay: 0s;
}

/* 第二层-红色 */
.nav-red {
  transition-delay: 0.2s;
  width: 95%;
  background-color: rgb(229, 9, 20);
}

.nav-red.visible {
  transition-delay: 0.2s;
}

/* 第三层-白色 */
.nav-white {
  background: #fff;
  width: 95%;
  padding: 40px;
  position: relative;
  transition-delay: 0s;
}

.nav-white.visible {
  transition-delay: 0.4s;
}

/* 关闭按钮 */
.close-btn {
  opacity: 0.3;
  position: absolute;
  top: 40px;
  right: 30px;
}

/* 导航选项 */
.list {
  list-style-type: none;
  padding: 0;
}

.list li {
  margin: 20px 0;
}

.list li a {
  color: rgb(34, 31, 31);
  font-size: 14px;
  text-decoration: none;
}

.list ul {
  list-style-type: none;
  padding-left: 20px;
}
</style>
