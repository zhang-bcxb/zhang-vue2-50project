<template>
  <div class="main-20">
    <button class="ripple" @click="clickHandle(index,$event)"
            v-for="(item,index) in btnNum" :key="index">
      <span>点击我</span>
      <span class="circle" :style="`top:${yInside}px;left:${xInside}px;`"
            v-show="index==currentIndex"></span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 按钮的个数
      btnNum: 3,
      // 当前点击的按钮
      currentIndex: 99,
      // 鼠标的位置
      xInside: 0,
      yInside: 0,
    }
  },
  methods: {
    clickHandle(index, event) {
      this.currentIndex = index
      // 获取鼠标的位置
      const x = event.clientX
      const y = event.clientY

      let btnDom = null
      if (event.target.nodeName === 'SPAN') {
        // 点击的是 span
        btnDom = event.target.parentNode
      } else {
        // 点击的是 button
        btnDom = event.target
      }
      // 按钮在可视区域的位置
      const buttonTop = btnDom.offsetTop
      const buttonLeft = btnDom.offsetLeft

      // 计算鼠标在按钮的点击位置
      this.xInside = x - buttonLeft
      this.yInside = y - buttonTop

      // 延时器
      setTimeout(() => {
        this.currentIndex = 99
      }, 500)
    }
  }
};

</script>

<style lang="less" scoped>
.main-20 {
  /* 水平垂直居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 按钮 */
button {
  position: relative;
  background-color: purple;
  color: #fff;
  border: 1px purple solid;
  font-size: 14px;
  letter-spacing: 2px;
  padding: 20px 30px;
  overflow: hidden;
  margin: 10px 0;
}

/* 按钮里面的 span */
button .circle {
  position: absolute;
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: scale 0.5s ease-out;
}

/* 自定义动画 */
@keyframes scale {
  /* 最终状态 */
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}
</style>
