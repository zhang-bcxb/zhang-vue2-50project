<template>
  <div class="main-29">
    <!-- 文本提示 -->
    <h3>双击喜欢这个图片 <i class="fas fa-heart"></i> 哈哈</h3>
    <small>你喜欢了<span id="times">{{ timesClicked }}</span>次</small>

    <div class="love-me" @dblclick="createHeart">
      <i :class="['fas',{'fa-heart':isShow}]" :style="`top:${pos.y}px;left:${pos.x}px;`"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 点击次数
      timesClicked: 0,
      // 鼠标的位置
      pos: {
        x: 0,
        y: 0
      },
      // 是否显示红心
      isShow: false
    }
  },
  methods: {
    createHeart(e) {
      console.log("双击")
      ++this.timesClicked

      // 获得鼠标位置
      const x = e.clientX
      const y = e.clientY

      // 获得盒子距离位置
      const letOffset = e.target.offsetLeft
      const topOffset = e.target.offsetTop

      console.log(letOffset,topOffset)

      // 获得鼠标在盒子内部点击的位置
      this.pos.x = x - letOffset
      this.pos.y = y - topOffset

      this.isShow = true

      // 延时器，销毁盒子
      setTimeout(() => {
        this.isShow = false
      }, 600)
    }
  }
};

</script>

<style lang="less" scoped>
.main-29 {
  overflow: hidden;
  text-align: center;
}

/* 标题 */
h3 {
  margin-bottom: 0;
  text-align: center;
}

/* 喜欢次数 */
small {
  display: block;
  margin-bottom: 20px;
  text-align: center;
}

/* 图标颜色 */
.fa-heart {
  color: red;
}

/* 图片盒子 */
.love-me {
  height: 440px;
  width: 300px;
  background: url('car.avif') no-repeat center center/cover;
  margin: auto;
  cursor: pointer;
  max-width: 100%;
  position: relative;
  /* 盒子阴影 */
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}

/* 红心 */
.love-me .fa-heart {
  position: absolute;
  animation: grow 0.6s linear;
  transform: translate(-50%, -50%) scale(0);
}

@keyframes grow {
  to {
    transform: translate(-50%, -50%) scale(10);
    opacity: 0;
  }
}
</style>
