<template>
  <div class="main-18" :style="`background-image: url(${imgBoxArr[currentIndex].imgUrl});`">
    <!-- 大盒子 -->
    <div class="slider-container">
      <!-- 五张轮播图 -->
      <div v-for='(item,index) in imgBoxArr' :key="index"
           :class="['slide',index===currentIndex?'active':'']"
           :style="`background-image: url(${item.imgUrl});`">
      </div>

      <!-- 左右按钮 -->
      <button class="arrow left-arrow" @click="leftBtnHandle">
        <i class="fas fa-arrow-left"></i>
      </button>
      <button class="arrow right-arrow" @click="rightBtnHandle">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前显示的图片
      currentIndex: 0,
      // 图片资源
      imgBoxArr: [
        {imgUrl: require('./img/1.jpg')},
        {imgUrl: require('./img/2.jpg')},
        {imgUrl: require('./img/3.jpg')},
        {imgUrl: require('./img/4.jpg')},
        {imgUrl: require('./img/5.jpg')}
      ]
    }
  },
  methods: {
    rightBtnHandle() {
      this.currentIndex++
      // 越界判断
      if (this.currentIndex > this.imgBoxArr.length - 1) {
        this.currentIndex = 0
      }
    },
    leftBtnHandle() {
      this.currentIndex--
      // 越界判断
      if (this.currentIndex < 0) {
        this.currentIndex = this.imgBoxArr.length - 1
      }
    }
  }
};
</script>

<style lang="less" scoped>
.main-18 {
  height: 100%;
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* 背景定位：将背景图片在容器中水平和垂直居中显示 */
  background-position: center center;
  background-size: cover;
  transition: 0.4s;
}

/* 背景遮罩 */
.main-18::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: -1;
}

/* 大盒子 */
.slider-container {
  height: 70vh;
  width: 70vw;
  /* 相对定位 */
  position: relative;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

/* 图片盒子 */
.slide {
  opacity: 0;
  height: 100vh;
  width: 100vw;
  background-position: center center;
  background-size: cover;
  /* 使图片和背景重合，定位图片的显示位置 */
  /* 计算公式：（100vh（总高度）- 70vh（父盒子的高度））/2 */
  position: absolute;
  top: -15vh;
  left: -15vw;
  transition: 0.4s ease;
  z-index: 1;
}

/* 图片选中 */
.slide.active {
  opacity: 1;
}

/* 左右按钮 */
.arrow {
  /* 垂直居中 */
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: #fff;
  font-size: 30px;
  border: 2px solid orange;
  cursor: pointer;
  padding: 20px;
}

.arrow:focus {
  outline: none;
}

/* 左边按钮 */
.left-arrow {
  /* 动态计算 */
  left: calc(15vw - 65px);
}

/* 右边按钮 */
.right-arrow {
  right: calc(15vw - 65px);
}

</style>
