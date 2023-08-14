<template>
  <div class="main-21">
    <!-- 存放拖拽的盒子 -->
    <div :class="['empty',indexHovered==index?'hovered':'']"
         @dragover="dragOver"
         @dragenter="dragEnter(index,$event)"
         @dragleave="dragLeave"
         @drop="dragDrop(index)"
         v-for="(item,index) in emptyNum" :key="index">
      <!-- 可以拖拽的盒子 -->
      <div :class="['fill',isHold?'hold':'']"
           v-if="currentIndex==index"
           @dragstart="dragStart"
           @dragend="dragEnd"
           draggable="true"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 存放盒子的样式
      indexHovered: 99,
      // 拖拽盒子的样式
      isHold: false,
      // 空盒子的个数
      emptyNum: 6,
      // 当前移动的盒子
      currentIndex: 0
    }
  },
  methods: {
    // 下面两个方法是：拖拽元素的事件
    // 拖拽开始，增加可拖拽盒子的边框样式
    dragStart() {
      // this.className += ' hold'
      this.isHold = true
    },
    // 拖拽结束，还原样式
    dragEnd() {
      // 在开始的盒子内移动失效，触发该结束函数
      // this.className = 'fill'
      this.isHold = false
    },
    // 下面四个方法是：存放拖拽元素的事件
    // 当一个可拖拽元素被拖进一个可放置元素上时
    dragOver(e) {
      // 阻止默认事件
      e.preventDefault()
    },
    // 拖拽时，触碰到空盒子的样式
    dragEnter(index, e) {
      e.preventDefault()
      // this.className += ' hovered'
      this.indexHovered = index
    },
    // 离开空盒子时，还原样式
    dragLeave() {
      // this.className = 'empty'
      this.indexHovered = 99
    },
    // 释放拖拽的元素
    dragDrop(index) {
      // this.className = 'empty'
      // this.append(fill)
      this.indexHovered = 99
      this.currentIndex = index
      this.isHold = false
    }
  }
};

</script>

<style lang="less" scoped>
.main-21 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

* {
  box-sizing: border-box;
}

/* 存在拖拽的盒子 */
.empty {
  height: 150px;
  width: 150px;
  margin: 10px;
  border: solid 3px black;
  background: white;
}

/* 可拖拽的盒子 */
.fill {
  background-image: url('logo.jpg');
  background-size: cover;
  height: 145px;
  width: 145px;
  cursor: pointer;
}

/* 开始拖拽时，可拖拽的盒子样式*/
.hold {
  border: solid 5px #ccc;
}

/* 拖拽时，触碰到空盒子 */
.hovered {
  background-color: #333;
  border-color: white;
  border-style: dashed;
}

/* 媒体查询 */
@media (max-width: 800px) {
  body {
    flex-direction: column;
  }
}
</style>
