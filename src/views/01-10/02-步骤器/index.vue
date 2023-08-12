<template>
  <div class="main-02">
    <div class="container">
      <!--步骤条盒子-->
      <div class="progress_container">
        <!--蓝色进度条-->
        <div ref="progress" class="progress" id="progress"></div>
        <!--圆形数字步骤盒子-->
        <div v-for='(item,index) in stepList' :key="index"
             :class="['circle', index<=currentActive?'active':'']">
          {{item.value}}
        </div>
      </div>

      <!--按钮，开始禁用上一个按钮-->
      <button @click="prevBtn" class="btn" id="prev" :disabled="isPrev">上一个</button>
      <button @click="nextBtn" class="btn" id="next" :disabled="isNext">下一个</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前激活的盒子索引
      currentActive: 1,
      // 是否禁用下一个按钮
      isNext: false,
      // 是否禁用上一个按钮
      isPrev: false,
      // 数据
      stepList: [
        {value: "活动未开始"},
        {value: "活动已开始"},
        {value: "活动进行中"},
        {value: "活动已结束"}
      ]
    }
  },
  mounted() {
    this.updateStyle()
  },
  methods: {
    prevBtn() {
      this.currentActive--
      // 如果超过，就激活第一个数字
      if (this.currentActive < 0) {
        this.currentActive = 0
      }
      this.updateStyle()
    },
    nextBtn() {
      this.currentActive++
      // 如果超过，就激活最后一个数字
      if (this.currentActive > this.stepList.length - 1) {
        this.currentActive = this.stepList.length - 1
      }
      this.updateStyle()
    },
    updateStyle() {
      // 获取进度条节点
      let progress = this.$refs.progress
      // 设置蓝色进度条
      progress.style.width = (this.currentActive / (this.stepList.length - 1)) * 100 + '%'

      // 是否禁用按钮
      if (this.currentActive === 0) {
        // 当前激活的盒子是第一个，禁用上一个按钮
        this.isPrev = true
      } else if (this.currentActive === this.stepList.length-1) {
        // 当前激活的盒子是最后一个，禁用下一个按钮
        this.isNext = true
      } else {
        // 如果是中间的值，就不禁用
        this.isPrev = false
        this.isNext = false
      }
    }
  }
};

</script>

<style lang="less" scoped>
.main-02 {
  //定义变量
  --line-border-fill: #3498db;
  --line-border-empty: #e0e0e0;
  /*水平垂直居中*/
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

/* 大盒子容器 */
.container {
  /* 行内元素水平居中 */
  text-align: center;
}

/* 进度条盒子 */
.progress_container {
  /*子绝父相*/
  position: relative;
  display: flex;
  /*弹性盒子，子盒子平分宽度*/
  justify-content: space-between;
  margin-bottom: 30px;
  max-width: 100%;
  width: 600px;
}

/*灰色进度线*/
.progress_container::before {
  content: '';
  //垂直鞠总
  background-color: var(--line-border-empty);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 5px;
  width: 100%;
  z-index: -1;
}

/*蓝色进度线*/
.progress {
  background-color: var(--line-border-fill);
  //垂直居中
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 5px;
  /*起始宽度*/
  width: 0%;
  z-index: -1;
}

/*数字盒子*/
.circle {
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  /*水平垂直居中*/
  display: flex;
  justify-content: center;
  align-items: center;
  /*边框线 */
  border: 5px solid var(--line-border-empty);
  transition: all 0.4s ease;
}

/*被激活的样式*/
.circle.active {
  border-color: var(--line-border-fill);
}

/*两个按钮*/
.btn {
  background-color: var(--line-border-fill);
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
}

/*按钮被激活*/
.btn:active {
  transform: scale(0.98);
}

/*按钮禁用的样式*/
.btn:disabled {
  background-color: var(--line-border-empty);
  /*禁止点击的样式*/
  cursor: not-allowed;
}
</style>
