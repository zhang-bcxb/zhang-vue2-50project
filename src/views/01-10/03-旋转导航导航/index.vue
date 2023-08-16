<template>
  <div class="main-03">
    <div :class="['container',isShow?'show-nav':'']">
      <!--菜单显示按钮-->
      <div class="circle-container">
        <div class="circle">
          <button id="close" @click="isShow=false">
            <i class="far fa-window-close"></i>
          </button>
          <button id="open" @click="isShow=true">
            <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
      <!--页面内容-->
      <div class="content">
        <h1>页面内容</h1>
      </div>
    </div>
    <!--左下角菜单-->
    <nav>
      <ul>
        <li><a href="">主页</a></li>
        <li><a href="">关于</a></li>
        <li><a href="">内容</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 是否显示导航栏
      isShow: false
    }
  },
  methods: {}
};

</script>

<style lang="less" scoped>
.main-03 {
  overflow: hidden;
}

/*大盒子*/
.container {

  background-image: url(bg.png);
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  /* 设置旋转的中心点：左上角 */
  transform-origin: top left;
  transition: transform 0.5s linear;
}

/* 显示菜单 */
.container.show-nav {
  /*逆时针旋转20度*/
  transform: rotate(-20deg);
}

/*页面内容*/
.content {
  width: 100vw;
  height: 100%;
  /* 水平垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fafafa;
}

/*菜单显示按钮盒子*/
.circle-container {
  /*固定定位*/
  position: fixed;
  /*隐藏一部分按钮*/
  top: -100px;
  left: -100px;
}

/* 圆形按钮 */
.circle-container .circle {
  background: #ff7979;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;
}

/*显示导航栏时，逆时针旋转 70 度*/
.container.show-nav .circle {
  transform: rotate(-70deg);
}

/*按钮*/
.circle button {
  cursor: pointer;
  position: absolute;
  /*定位按钮*/
  top: 50%;
  left: 50%;
  /*大盒子的一半*/
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 30px;
}

/*开*/
.circle button#open {
  left: 60%;
}

/*关*/
.circle button#close {
  top: 60%;
  /*顺时针90度*/
  transform: rotate(90deg);
  /*旋转中心左上角*/
  transform-origin: top left;
}

/*导航栏*/
nav {
  position: fixed;
  bottom: 40px;
  left: -50px;
  z-index: 100;
  transition: 0.2s;
}

/*导航栏显示，初始化li*/
.container.show-nav + nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}

.container.show-nav + nav {
  transition-delay: 0.3s;
  left: 20px;
}


nav ul li {
  text-transform: uppercase;
  color: #fff;
  margin: 40px 0;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;
}

/*第二个li*/
nav ul li:nth-child(2) {
  margin-left: 15px;
  transform: translateX(-150%);
}

/*第三个li*/
nav ul li:nth-child(3) {
  margin-left: 30px;
  transform: translateX(-200%);
}

/*a标签样式*/
nav a {
  color: #3498db;
  font-size: 25px;
  transition: all 0.5s;
}

nav a:hover {
  color: #ff7979;
  font-weight: bold;
}
</style>
