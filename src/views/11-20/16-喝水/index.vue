<template>
  <div class="main-16">
    <h1>喝水</h1>
    <h3>目标：2L</h3>
    <!-- 空杯子 -->
    <div class="cup">
      <!-- 还剩进度提示 -->
      <div ref="remained" class="remained" id="remained">
        <span id="liters">{{ liters }}</span>
        <small>剩余</small>
      </div>
      <!-- 进度条 -->
      <div ref="percentage" class="percentage" id="percentage"></div>
    </div>

    <p class="text"> 选择你喝了多少水</p>

    <!-- 倒水杯子 -->
    <div class="cups">
      <div v-for="(item,index) in cupNum" :key="index"
           @click="highlightCups(item)"
           :class="['cup','cup-small',fullNum>=item?'full':'']">250ml
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 小杯子的数量
      cupNum: 8,
      // 已经倒满的杯子
      fullNum: 0,
      // 当前倒满的杯子
      currentCup: 0,
      // 大杯子的提示
      liters: ''
    }
  },
  methods: {
    // 小杯子高亮
    highlightCups(num) {
      // 杯子高亮
      this.fullNum = num
      // 当前倒满的杯子，再次被点击
      if (this.currentCup === num) {
        this.fullNum--
      }
      // 更新当前倒满杯子
      this.currentCup = this.fullNum
      // 更新大杯子
      this.updateBigCup()
    },
    // 更新大杯子
    updateBigCup() {
      let percentage = this.$refs.percentage
      let remained = this.$refs.remained

      if (this.currentCup === 0) {
        // 还没有开始倒水,隐藏进度条
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
      } else {
        // 开始倒水,显示进度条
        percentage.style.visibility = 'visible'
        // 比例计算:大杯子的总高度(330px)*比例
        percentage.style.height = `${(this.currentCup / this.cupNum) * 330}px`
        percentage.innerText = `${(this.currentCup / this.cupNum) * 100}%`
      }

      if (this.currentCup === this.cupNum) {
        // 大杯子被倒满,隐藏剩余提示
        remained.style.visibility = 'hidden'
        remained.style.height = 0
      } else {
        // 大杯子没有倒满,显示剩余提示
        remained.style.visibility = 'visible'
        // 显示还剩多少水能装满
        this.liters = `${2 - (250 * this.currentCup) / 1000}L`
      }
    }
  }
};

</script>

<style lang="less" scoped>
.main-16 {
  --border-color: #144fc6;
  --fill-color: #6ab3f8;

  color: #000;
  /* 水平居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 目标 */
h1 {
  margin: 10px 0 0;
}

h3 {
  font-weight: 400;
  margin: 10px 0;
}

/* 杯子（大杯子） */
.cup {
  height: 330px;
  width: 150px;
  margin: 30px 0;
  background-color: #fff;
  border: 4px solid var(--border-color);
  color: var(--border-color);
  border-radius: 0 0 40px 40px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 倒水杯子（小杯子） */
.cup.cup-small {
  height: 95px;
  width: 50px;
  /* 还没有倒水的杯子 */
  border-radius: 0 0 15px 15px;
  background-color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  font-size: 14px;
  /* 水平垂直居中 */
  align-items: center;
  justify-content: center;
  /* 文本水平居中 */
  text-align: center;
  margin: 5px;
  transition: 0.3s ease;
}

/* 已经倒水的杯子 */
.cup.cup-small.full {
  background-color: var(--fill-color);
  color: #fff;
}

/* 小杯子盒子 */
.cups {
  width: 280px;
  display: flex;
  /* 换行 */
  flex-wrap: wrap;
  /* 水平垂直居中 */
  align-items: center;
  justify-content: center;
}

/* 还剩的提示 */
.remained {
  /* 水平垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 占满一个盒子 */
  flex: 1;
  flex-direction: column;
  /* 文本居中 */
  text-align: center;
  transition: 0.3s ease;
}

.remained span {
  font-size: 20px;
  font-weight: bold;
}

.remained small {
  font-size: 12px;
}

/* 进度条 */
.percentage {
  background-color: var(--fill-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
  height: 0;
  transition: 0.3s ease;
}

/* 选择喝水提示 */
.text {
  text-align: center;
  margin: 0 0 5px;
}
</style>
