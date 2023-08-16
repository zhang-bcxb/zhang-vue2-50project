<template>
  <div class="main-06">
    <h1>Scroll to see the animation</h1>
    <div v-for="(item,index) in boxNum" :key="index" class="box">
      <h2>Content {{ item }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 生成的盒子数量
      boxNum: 20
    }
  },
  mounted() {
    // 修改 body 的溢出隐藏，需要滚动条
    document.body.style.overflow = ''
    // 第一次启动，也运行一次
    this.checkBoxes()
    // 注册滚动事件
    window.addEventListener('scroll', this.debounce(this.checkBoxes))
  },
  destroyed() {
    window.removeEventListener('scroll', this.debounce(this.checkBoxes))
  },
  methods: {
    // 防抖函数
    debounce(fn, time = 100) {
      let timer = null
      return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(fn, time)
      }
    },
    // 选择盒子
    checkBoxes() {
      const boxes = Array.from(document.querySelectorAll('.box'))
      // 计算窗口高度的五分之四
      const triggerBottom = (window.innerHeight / 5) * 4
      boxes.forEach((box) => {
        // 获取元素 box 相对于视口顶部的距离
        const boxTop = box.getBoundingClientRect().top
        // console.log(boxTop)
        // 在指定高度内的盒子进行显示
        if (boxTop < triggerBottom) {
          box.classList.add('show')
        } else {
          box.classList.remove('show')
        }
      })
    }
  }
};

</script>

<style lang="less" scoped>
.main-06 {
  display: flex;
  /*设置主轴方向为y轴*/
  flex-direction: column;
  /*水平垂直居中*/
  align-items: center;
  justify-content: center;
  /* 隐藏水平滑动条 */
  overflow-x: hidden;
}

/* 标题 */
h1 {
  margin: 10px;
}

/* 内容盒子 */
.box {
  background-color: steelblue;
  color: #fff;
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
  /* 所有盒子都平移（从左侧进入） */
  transform: translateX(400%);
  transition: transform 0.4s ease;
}

/* 偶数位置的元素（从右侧进入） */
.box:nth-of-type(even) {
  transform: translateX(-400%);
}

/* 盒子显示，不移动 */
.box.show {
  transform: translateX(0);
}

/* 盒子内的文字 */
.box h2 {
  font-size: 45px;
}
</style>
