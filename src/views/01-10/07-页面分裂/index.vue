<template>
  <div class="main-07">
    <div :class="['container',isLeft?'hover-left':'',isRight?'hover-right':'']">
      <!-- 左边的一般 -->
      <div class="split left" @mouseenter="isLeft=true" @mouseleave="isLeft=false">
        <h1>这你不喜欢吗</h1>
        <a href="" class="btn">买它！a</a>
      </div>
      <!-- 右边的一半 -->
      <div class="split right" @mouseenter="isRight=true" @mouseleave="isRight=false">
        <h1>这你更喜欢吧</h1>
        <a href="" class="btn">买它！b</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLeft: false,
      isRight: false
    }
  },
  methods: {}
};

</script>

<style lang="less" scoped>
.main-07 {
  //自定义CSS变量
  --left-bg-color: rgba(87, 84, 236, 0.3);
  --right-bg-color: rgba(43, 43, 43, 0.8);
  --left-btn-hover-color: rgba(87, 84, 236, 1);
  --right-btn-hover-color: rgba(28, 122, 28, 1);
  --hover-width: 70%;
  --other-width: 30%;
  --speed: 1000ms;
  //设置高度，溢出隐藏
  height: 100%;
  overflow: hidden;
}

/* 大盒子 */
.container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #333;
}

/* 一半宽度 */
.split {
  /* 相对定位 */
  position: absolute;
  width: 50%;
  height: 100%;
}

h1 {
  font-size: 4rem;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  /* 文字不换行 */
  white-space: nowrap;
}

/* 按钮 */
.btn {
  position: absolute;
  left: 50%;
  top: 40%;
  /* 水平居中 */
  transform: translateX(-50%);
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* 清除下划线 */
  text-decoration: none;
  color: #fff;
  border: #fff solid 0.2rem;
  font-size: 1rem;
  font-weight: bold;
  width: 15rem;
  padding: 1.5rem;
}

/* 左边 按钮被触摸 */
.split.left .btn:hover {
  background-color: var(--left-btn-hover-color);
  border-color: var(--left-btn-hover-color);
}

/* 右边 按钮被触摸 */
.split.right .btn:hover {
  background-color: var(--right-btn-hover-color);
  border-color: var(--right-btn-hover-color);
}

/* 左边 */
.split.left {
  left: 0;
}

/* 设置背景颜色 */
.split.left::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--left-bg-color);
}

/* 右边 */
.split.right {
  right: 0;
}

/* 设置背景颜色 */
.split.right::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--right-bg-color);
}

.split.left,
.split.right,
.split.left::before,
.split.right::before {
  transition: all var(--speed) ease-in-out;
}

/* 左边 触摸的宽度 */
.hover-left .left {
  width: var(--hover-width);
}

.hover-left .right {
  width: var(--other-width);
}

/* 右边 触摸的宽度 */
.hover-right .left {
  width: var(--other-width);
}

.hover-right .right {
  width: var(--hover-width);
}

/* 媒体查询 */
@media (max-width: 800px) {
  h1 {
    font-size: 2rem;
    top: 30%;
  }

  .btn {
    padding: 1.2rem;
    width: 12rem;
  }
}
</style>
