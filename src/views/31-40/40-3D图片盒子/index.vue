<template>
  <div class="main-40">
    <!-- 变换按钮 -->
    <button id="btn" class="magic" @click="isBig=!isBig">皮卡丘 🎩</button>
    <!-- 大盒子 -->
    <div id="boxes" :class="['boxes',{'big':isBig}]">
      <div class="box" v-for='(item,index) in boxArr' :key="index"
           :style="`background-position:${item.x}px ${item.y}px`">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBig: true,
      boxArr: []
    }
  },
  created() {
    this.dataHandle()
  },
  methods: {
    dataHandle() {
      // 行（y轴）
      for (let i = 0; i < 4; i++) {
        // 列（x轴）
        for (let j = 0; j < 4; j++) {
          this.boxArr.push({x: -j * 125, y: -i * 125})
        }
      }
    }
  }
};

</script>

<style lang="less" scoped>
.main-40 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 按钮 */
.magic {
  position: fixed;
  top: 15px;
  //left: 20px;

  background-color: #f9ca24;
  color: #fff;
  border: 0;
  border-radius: 3px;
  font-size: 16px;
  padding: 12px 20px;
  cursor: pointer;
  letter-spacing: 1px;
  box-shadow: 0 3px rgba(249, 202, 36, 0.5);
  z-index: 100;
}

.magic:focus {
  outline: none;
}

/* 按钮被点击时的效果 */
.magic:active {
  box-shadow: none;
  transform: translateY(2px);
}

/* 完整的盒子 */
.boxes {
  display: flex;
  flex-wrap: wrap;
  /* 平分剩余空间 */
  justify-content: space-around;
  height: 500px;
  width: 500px;
  position: relative;
  transition: 0.4s ease;
}

/* 裂开的盒子 */
.boxes.big {
  width: 600px;
  height: 600px;
}

.boxes.big .box {
  transform: rotateZ(360deg);
}

/* 每个小盒子 */
.box {
  background-image: url('pkq.gif');
  background-repeat: no-repeat;
  background-size: 500px 500px;
  position: relative;
  /* 四个盒子就是 500 * 500  */
  height: 125px;
  width: 125px;
  transition: 0.4s ease;
}

/* 右侧边 */
.box::after {
  content: '';
  background-color: #f6e58d;
  position: absolute;
  top: 8px;
  right: -15px;
  height: 100%;
  width: 15px;
  transform: skewY(45deg);
}

/* 下侧边 */
.box::before {
  content: '';
  background-color: #f9ca24;
  position: absolute;
  bottom: -15px;
  left: 8px;
  height: 15px;
  width: 100%;
  transform: skewX(45deg);
}
</style>
