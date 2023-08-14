<template>
  <div class="main-30">
    <!-- 文字显示盒子 -->
    <h1 id="text">{{ text }}</h1>

    <!-- 速度盒子 -->
    <div class="speed-box">
      <label for="speed">速度：</label>
      <input type="number" name="speed" id="speed" v-model="speedVal" min="1" max="10" step="1">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 双向绑定输入的数据
      speedVal: 5,
      // 速度
      speed: 1000,
      // 显示的文本
      text: '今天我吃了很多素菜，明天我要吃肉',
      // 截取的长度
      idx: 1,
    }
  },
  mounted() {
    this.showText(this.text)
  },
  methods: {
    // 显示的文本
    showText(str) {
      // 截取的长度
      this.text = str.slice(0, this.idx)
      this.idx++

      // 长度超过，则重新开始
      if (this.idx > str.length) {
        this.idx = 1
      }

      // 延时器
      setTimeout(() => this.showText(str), this.speed / this.speedVal)
    }
  }
};

</script>

<style lang="less" scoped>
.main-30 {
  /* 水平垂直居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 速度盒子 */
.speed-box {
  position: absolute;
  bottom: 20px;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  font-size: 18px;
}

/* 速度输入框 */
input {
  width: 50px;
  padding: 5px;
  font-size: 18px;
  background-color: darksalmon;
  border: none;
  text-align: center;
}
</style>
