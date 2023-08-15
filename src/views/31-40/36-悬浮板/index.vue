<template>
  <div class="main-36">
    <!-- 大容器 -->
    <div class="container" id="container">
      <div class="square" v-for='(item,index) in squareNum' :key="index"
           @mouseover="setColor" @mouseout="removeColor"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 小盒子的数量【20*25】
      squareNum: 500,
      // 颜色数组
      colorArr: ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
    }
  },
  methods: {
    // 获得随机颜色
    getRandomColor() {
      // 随机颜色
      return this.colorArr[Math.floor(Math.random() * this.colorArr.length)]
    },
    // 设置颜色
    setColor(e) {
      const color = this.getRandomColor()
      e.target.style.background = color
      e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    },
    // 还原颜色
    removeColor(e) {
      e.target.style.background = '#1d1d1d'
      e.target.style.boxShadow = `0 0 2px #000`
    }
  }
};

</script>

<style lang="less" scoped>
.main-36 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.container {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* 支持换行 */
  flex-wrap: wrap;
  max-width: 400px;
}

/* 小盒子 */
.square {
  background-color: #1d1d1d;
  box-shadow: 0 0 2px #000;
  /* 一个盒子占据 20px * 20px */
  height: 16px;
  width: 16px;
  margin: 2px;
  transition: 2s ease;
}

/* 触摸的时候，修改持续时间 */
.square:hover {
  /* 过渡持续时间 */
  transition-duration: 0s;
}
</style>
