<template>
  <div class="main-32">
    <!-- 问题标题 -->
    <h2>你觉得你做的项目怎么样？</h2>

    <!-- 三个单选按钮 -->
    <div class="toggle-container" v-for='(item,index) in inputData' :key="index">
      <input type="checkbox" :id="item.label" class="toggle"
             v-model="item.check" @change="changeCheck(index)">
      <label :for="item.label" class="label">
        <div class="ball"></div>
      </label>
      <span>{{ item.text }}</span>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      inputData: [
        {
          label: 'good',
          text: '非常好',
          check: false
        },
        {
          label: 'cheap',
          text: '极好',
          check: false
        },
        {
          label: 'fast',
          text: '特别好',
          check: false
        }
      ]
    }
  },
  methods: {
    changeCheck(index) {
      // 三个开关都选中
      if (this.inputData.every((v) => v.check)) {
        if (index === 0) {
          this.inputData[2].check = false
        } else if (index === 1) {
          this.inputData[0].check = false
        } else {
          this.inputData[1].check = false
        }
      }
    }
  }
};

</script>

<style lang="less" scoped>
.main-32 {
  /* 水平垂直居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 单选大盒子 */
.toggle-container {
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 200px;
}

/* 隐藏多选框（占位置） */
.toggle {
  visibility: hidden;
}

/* 控制多选框 */
.label {
  position: relative;
  background-color: #d0d0d0;
  /* 圆角：高度的一半 */
  border-radius: 20px;
  cursor: pointer;
  display: inline-block;
  margin: 0 15px 0;
  width: 80px;
  height: 40px;
}

/* 选中的时候，背景颜色 */
.toggle:checked + .label {
  background-color: #8e44ad;
}

/* 盒子里面的小球 */
.ball {
  background-color: #fff;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  align-items: center;
  justify-content: center;
  /* 关闭的动画 */
  animation: slideOff 0.3s linear forwards;
}

/* 选中的时候，小球的动画 */
.toggle:checked + .label .ball {
  animation: slideOn 0.3s linear forwards;
}

@keyframes slideOn {
  0% {
    transform: translateX(0) scale(1);
  }

  50% {
    transform: translateX(20px) scale(1.2);
  }

  100% {
    transform: translateX(40px) scale(1);
  }

}

@keyframes slideOff {
  0% {
    transform: translateX(40px) scale(1);
  }

  50% {
    transform: translateX(20px) scale(1.2);
  }

  100% {
    transform: translateX(0) scale(1);
  }
}
</style>
