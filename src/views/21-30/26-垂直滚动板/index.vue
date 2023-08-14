<template>
  <div class="main-26">
    <!-- 左侧与右侧反向对应 左侧第一个盒子与右侧最后一个盒子对应 -->
    <div class="slider-container" ref="mainDom">
      <!-- 左侧盒子 -->
      <div class="left-slide"
           :style="`top:-${(imgArr.length - 1) * 100}vh;transform:translateY(${activeSliderIndex * slideHeight}px);`">
        <div style="background-color: #fd3555;">
          <h1>自然花</h1>
          <p>全部是粉红色的</p>
        </div>
        <div style="background-color: #2A86BA">
          <h1>蓝天</h1>
          <p>和它的山</p>
        </div>
        <div style="background-color: #252E33">
          <h1>孤独的城堡</h1>
          <p>在荒野中</p>
        </div>
        <div style="background-color: #FFB866">
          <h1>飞鹰</h1>
          <p>在夕阳下</p>
        </div>
      </div>
      <!-- 右侧盒子 -->
      <div class="right-slide"
           :style="`transform:translateY(-${activeSliderIndex * slideHeight}px);`">
        <div v-for='(item,index) in imgArr' :key="index"
             :style="`background-image: url('${item}')`"></div>
      </div>

      <!-- 上下滑动按钮 -->
      <div class="action-buttons">
        <button class="down-button" @click="changeSlide('down')">
          <i class="fas fa-arrow-down"></i>
        </button>
        <button class="up-button" @click="changeSlide('up')">
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 容器高度
      slideHeight: 0,
      // 图片数组
      imgArr: [
        require('./img/1.avif'),
        require('./img/2.avif'),
        require('./img/3.avif'),
        require('./img/4.avif'),
      ],
      // 当前显示的盒子
      activeSliderIndex: 0
    }
  },
  methods: {
    // 箭头的方向与右侧的图片是对应的
    // 改变滑动的盒子,参数是滑动方向
    changeSlide(direction) {

      if (direction === 'up') {
        // 点击向上按钮(右侧按钮)
        this.activeSliderIndex++
        // 边界处理
        if (this.activeSliderIndex > this.imgArr.length - 1) {
          this.activeSliderIndex = 0
        }
      } else if (direction === 'down') {
        // 点击向下按钮(左侧按钮)
        this.activeSliderIndex--
        // 边界处理
        if (this.activeSliderIndex < 0) {
          this.activeSliderIndex = this.imgArr.length - 1
        }
      }
    }
  },
  mounted() {
    this.slideHeight = this.$refs.mainDom.clientHeight
  }
};

</script>

<style lang="less" scoped>
.main-26 {
  height: 100%;
}

/* 内容大盒子 */
.slider-container {
  /* 相对定位 */
  position: relative;
  width: 100vw;
  height: 100%;
  overflow: hidden;
}

/* 左边盒子 */
.left-slide {
  height: 100%;
  width: 35%;
  /* 绝对定位 */
  position: absolute;
  top: 0;
  /* js 到时候会向上滑动 3个盒子的距离 */
  left: 0;
  transition: transform 0.5s ease-in-out;
}

/* 设置左侧文字(盒子都是向下排列,不是压住的) */
.left-slide > div {
  height: 100%;
  width: 100%;
  /* 水平垂直居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff
}

.left-slide h1 {
  font-size: 40px;
  margin-bottom: 10px;
  margin-top: -30px;
}

/* 右边盒子 */
.right-slide {
  height: 100%;
  /* 绝对定位 */
  position: absolute;
  top: 0;
  left: 35%;
  width: 65%;
  transition: transform 0.5s ease-in-out;
}

/* 设置背景图片(图片都是向下排列,不是压住的) */
.right-slide > div {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
}

/* 滑动按钮 */
button {
  background-color: #fff;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 16px;
  padding: 15px;
  /* 定位 */
  position: absolute;
  /* 整个右边宽度 */
  left: 35%;
  /* 50vh */
  top: 50%;
  z-index: 100;
}

/* 被触摸时的字体颜色 */
button:hover {
  color: #222;
}

button:focus {
  outline: none;
}

/* 下按钮 */
button.down-button {
  /* 向左平移自身宽度 */
  transform: translateX(-100%);
  /* 左边设置圆角 */
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

/* 上按钮 */
button.up-button {
  /* 向上平移自身高度 */
  transform: translateY(-100%);
  /* 右边设置圆角 */
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
