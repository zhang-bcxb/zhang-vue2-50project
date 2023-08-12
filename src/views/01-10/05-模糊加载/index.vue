<template>
  <div class="main-05">
    <!--背景-->
    <section class="bg" :style="`filter:blur(${blur}px);`"></section>
    <!--加载数据-->
    <div class="loading-text" :style="`opacity:${opacity};`">{{ load }}%</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      load: 0,
      timer: null,
      blur: 0,
      opacity: 0
    }
  },
  mounted() {
    // 定时器
    this.timer = setInterval(this.blurring, 30)
  },
  methods: {
    // 数值映射的函数：将一个范围数字映射到另一个数字范围
    scale(num, in_min, in_max, out_min, out_max) {
      return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    },
    // 实现加载效果
    blurring() {
      this.load++
      this.blur = this.scale(this.load, 0, 100, 40, 0)
      this.opacity = this.scale(this.load, 0, 100, 1, 0)
      if (this.load > 99) {
        // 清除定时器
        clearInterval(this.timer)
      }
    }
  }
};

</script>

<style lang="less" scoped>
.main-05 {
  /*水平垂直居中*/
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.bg {
  width: 100%;
  height: 100%;
  /* background: pink; */
  //background-image: url('https://picsum.photos/1920/1080?random=1');
  background-image: url(bg.png);
  background-size: cover;
  /*模糊效果，0表示无模糊效果*/
  filter: blur(0);
  position: absolute;
  z-index: -1;
}

.loading-text {
  font-size: 50px;
  color: rgb(192, 29, 29);
}
</style>
