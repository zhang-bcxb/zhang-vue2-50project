<template>
  <div class="main-35">
    <div class="carousel">
      <!-- 图片容器:图片水平排列,移动该盒子就能实现轮播 -->
      <div class="image-container" id="imgs" :style="`transform:translateX(-${currentIndex * 500}px);`">
        <img v-for="(item,index) in imgArr" :key="index"
             :src="item"/>
      </div>

      <!-- 跳转按钮 -->
      <div class="buttons-container">
        <button id="left" class="btn" @click="leftBtn">上一个</button>
        <button id="right" class="btn" @click="rightBtn">下一个</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前选中的图片
      currentIndex: 0,
      // 图片数组
      imgArr: [
        require('./img/1.avif'),
        require('./img/2.avif'),
        require('./img/3.avif'),
        require('./img/4.avif')
      ],
      interval: null
    }
  },
  mounted() {
    this.interval = setInterval(this.run, 2000)
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    // 边界判断
    changeImage() {
      if (this.currentIndex > this.imgArr.length - 1) {
        this.currentIndex = 0
      } else if (this.currentIndex < 0) {
        this.currentIndex = this.imgArr.length - 1
      }
    },
    rightBtn() {
      this.currentIndex++
      this.changeImage()
      this.resetInterval()
    },
    leftBtn() {
      this.currentIndex--
      this.changeImage()
      this.resetInterval()
    },
    // 重置定时器
    resetInterval() {
      clearInterval(this.interval)
      this.interval = setInterval(this.run, 2000)
    },
    // 重复运行
    run() {
      this.currentIndex++
      this.changeImage()
    }
  }
};

</script>

<style lang="less" scoped>
.main-35 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 图片的宽高设置 */
img {
  width: 500px;
  height: 500px;
  object-fit: cover;
}

/* 父盒子容器 */
.carousel {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  height: 530px;
  width: 500px;
  overflow: hidden;
}

/* 图片容器 */
.image-container {
  /* 子盒子水平排列 */
  display: flex;
  transform: translateX(0);
  transition: transform 0.5s ease-in-out;
}

/* 按钮容器 */
.buttons-container {
  display: flex;
  justify-content: space-between;
}

/* 按钮 */
.btn {
  background-color: rebeccapurple;
  color: #fff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  width: 49.5%;
}

.btn:hover {
  opacity: 0.9;
}

.btn:focus {
  outline: none;
}
</style>
