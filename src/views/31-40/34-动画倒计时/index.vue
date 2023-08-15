<template>
  <div class="main-34">
    <!-- 计时器 -->
    <div :class="['counter',{'hide':isShow}]">
      <!-- 倒计时 -->
      <div class="nums">
        <span v-for="(item,index) in nums" :key="index"
              @animationend="runAnimation(index,$event)"
              :class="[{'in':index==currentIndexIn},{'out':index==currentIndexOut}]">{{ nums - item }}</span>
      </div>
      <!-- 提示文本 -->
      <h4> 开始中...</h4>
    </div>

    <div :class="['final',{'show':isShow}]">
      <h1>开始</h1>
      <button id="replay" @click="resetRun">
        <span>点击开始</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 数字盒子
      nums: 4,
      // 进入动画
      currentIndexIn: 0,
      // 退出动画
      currentIndexOut: 99,
      // 是否显示按钮
      isShow: false
    }
  },
  methods: {
    // 动画结束时执行
    runAnimation(index, e) {
      console.log('动画结束时执行', e.animationName)

      if (e.animationName.includes('goIn') && index !== this.nums - 1) {
        // 进入动画 并且 不是最后一个数字
        this.currentIndexIn = 99
        this.currentIndexOut = index
      } else if (e.animationName.includes('goOut')) {
        // 退出动画
        this.currentIndexIn = index + 1
        this.currentIndexOut = 99
      } else {
        // 隐藏计数器,显示按钮
        this.isShow = true
      }
    },
    // 重新执行
    resetRun() {
      this.currentIndexIn = 0
      this.currentIndexOut = 99
      // 隐藏按钮，显示计数器
      this.isShow = false
    }
  }
};

</script>

<style lang="less" scoped>
.main-34 {
  height: 100%;
}

h4 {
  font-size: 20px;
  margin: 5px;
}

/* 计时器 */
.counter {
  position: fixed;
  /* 水平垂直居中 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

/* 隐藏计数器 */
.counter.hide {
  transform: translate(-50%, -50%) scale(0);
  animation: hide 0.2s ease-out;
}

@keyframes hide {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }

  100% {
    transform: translate(-50%, -50%) scale(0);
  }
}

/* 按钮 */
.final {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  text-align: center;
}

/* 按钮显示动画 */
.final.show {
  transform: translate(-50%, -50%) scale(1);
  animation: show 0.2s ease-out;
}

@keyframes show {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }

  30% {
    transform: translate(-50%, -50%) scale(1.4);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

/* 数字大盒子 */
.nums {
  color: #3498db;
  font-size: 50px;
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 50px;
}

/* 盒子内的数字 */
.nums span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0) rotate(120deg);
  transform-origin: bottom center;
}

/* 进入 */
.nums span.in {
  transform: translate(-50%, -50%) rotate(0deg);
  animation: goIn 0.5s ease-in-out;
}

/* 退出 */
.nums span.out {
  animation: goOut 0.5s ease-in-out;
}

@keyframes goIn {
  0% {
    transform: translate(-50%, -50%) rotate(120deg);
  }

  30% {
    transform: translate(-50%, -50%) rotate(-20deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(10deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}

@keyframes goOut {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(20deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
}

/* 按钮 */
#replay {
  background-color: #3498db;
  border-radius: 3px;
  border: none;
  color: aliceblue;
  padding: 5px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s;
}

/* 按钮文字 */
#replay span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.3s;
}

/* 按钮图标 */
#replay span:after {
  content: '\00bb';
  position: absolute;
  //隐藏
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

/* 按钮被触摸的效果 */
#replay:hover span {
  padding-right: 25px;
}

#replay:hover span:after {
  //显示
  opacity: 1;
  right: 0;
}
</style>
