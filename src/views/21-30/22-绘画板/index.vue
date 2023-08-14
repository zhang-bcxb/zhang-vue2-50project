<template>
  <div class="main-22">
    <!-- 画布 -->
    <canvas id="canvas" ref="myCanvas" width="800" height="600"
            @mousedown="mouseDown" @mousemove="mousemove"></canvas>
    <!-- 工具栏 -->
    <div class="toolbox">
      <!-- 控制画笔的粗细 -->
      <button id="decrease" @click="changeSize('sub')">-</button>
      <span id="size">{{ initData.size }}</span>
      <button id="increase" @click="changeSize('add')">+</button>
      <!-- 控制画笔的颜色 -->
      <input type="color" id="color" @change="changeColor">
      <!-- 清除画布 -->
      <button id="clear" @click="clearCanvas">X</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 画布
      cvs: null,
      // 画笔
      ctx: null,
      // 初始化数据
      initData: {
        // 字体大小
        size: 10,
        // 鼠标是否松开
        isPressed: false,
        // 颜色
        color: 'black',
        // 鼠标位置
        x: 0,
        y: 0,
      }
    }
  },
  mounted() {
    this.cvs = this.$refs.myCanvas
    this.ctx = this.cvs.getContext('2d')
    document.addEventListener('mouseup', this.mouseUp)
  },
  destroyed() {
    document.removeEventListener('mouseup', this.mouseUp)
  },
  methods: {
    // 鼠标按下
    mouseDown(e) {
      this.initData.isPressed = true
      // 获取鼠标的位置
      this.initData.x = e.offsetX
      this.initData.y = e.offsetY
    },
    // 鼠标松开
    mouseUp() {
      this.initData.isPressed = false

      this.initData.x = 0
      this.initData.y = 0
    },
    // 鼠标移动
    mousemove(e) {
      if (this.initData.isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        // 画图
        this.drawCircle(x2, y2)
        this.drawLine(this.initData.x, this.initData.y, x2, y2)
        // 更新鼠标位置
        this.initData.x = x2
        this.initData.y = y2
      }
    },
    // 画线
    drawLine(x1, y1, x2, y2) {
      // 开启一个新的路径
      this.ctx.beginPath()
      // 起始位置
      this.ctx.moveTo(x1, y1)
      // 终点位置
      this.ctx.lineTo(x2, y2)
      // 描边颜色
      this.ctx.strokeStyle = this.initData.color
      // 线的宽度
      this.ctx.lineWidth = this.initData.size * 2
      // 开始绘制
      this.ctx.stroke()
    },
    // 画圆形
    drawCircle(x, y) {
      // 开启一个新的路径
      this.ctx.beginPath()
      // 圆心坐标，半径，起始弧度，终点弧度
      this.ctx.arc(x, y, this.initData.size, 0, Math.PI * 2)
      // 填充样式
      this.ctx.fillStyle = this.initData.color
      // 开始绘制
      this.ctx.fill()
    },
    // add-加，sub-减
    changeSize(type = 'add') {
      let size = this.initData.size
      if (type == 'add') {
        size += 5
        if (size > 50) {
          size = 50
        }
      } else {
        size -= 5
        if (size < 5) {
          size = 5
        }
      }
      this.initData.size = size
    },
    changeColor(e) {
      this.initData.color = e.target.value
    },
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height)
    }
  }
};

</script>

<style lang="less" scoped>
.main-22 {
  height: 100%;
  /* 水平垂直居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

* {
  box-sizing: border-box;
}

/* 画布 */
canvas {
  background-color: white;
  border: 2px solid steelblue;
}

/* 工具栏 */
.toolbox {
  background-color: steelblue;
  border: 1px solid slateblue;
  display: flex;
  width: 804px;
  padding: 1rem;
}

/* 工具栏下面的所有儿子 */
.toolbox > * {
  background-color: #fff;
  border: none;
  /* 行内弹性盒子 */
  display: flex;
  /* 水平垂直居中 */
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  height: 50px;
  width: 50px;
  margin: 0.25rem;
  padding: 0.25rem;
  cursor: pointer;
}

/* 最后一个儿子 */
.toolbox > *:last-child {
  /* 自动占据了剩余的全部宽度 */
  margin-left: auto;
}
</style>
