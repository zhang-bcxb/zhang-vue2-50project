<template>
  <div class="main-47">
    <div class="testimonial-container">
      <div class="progress-bar"></div>
      <div class="fas fa-quote-right fa-quote"></div>
      <div class="fas fa-quote-left fa-quote"></div>
      <p class="testimonial">欢迎语</p>
      <div class="user">
        <img class="user-image" src="./logo.jpg" alt="">
        <div class="user-info">
          <h4 class="username">用户名</h4>
          <p class="role">角色</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
};

</script>

<style lang="less" scoped>
.main-47 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
}

/* 大容器 */
.testimonial-container {
  background-color: #476ce4;
  color: #fff;
  border-radius: 15px;
  margin: 20px auto;
  padding: 50px 80px;
  max-width: 768px;
  position: relative;
}

/* 双引号图标 */
.fa-quote {
  color: rgba(255, 255, 255, 0.3);
  font-size: 28px;
  position: absolute;
  top: 70px;
}

.fa-quote-right {
  left: 40px;
}

.fa-quote-left {
  right: 40px;
}

/* 欢迎语 */
.testimonial {
  line-height: 28px;
  text-align: justify
}

/* 用户 */
.user {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 左边-图片 */
.user .user-image {
  border-radius: 50%;
  height: 75px;
  width: 75px;
  object-fit: cover;
  margin-right: 5px;
}

/* 右边-用户信息 */
/* 用户名 */
.user .username {
  margin: 0;

}

/* 角色 */
.user .role {
  font-weight: normal;
  margin: 10px 0;
}

/* 进度条 */
.progress-bar {
  background-color: #fff;
  height: 4px;
  width: 100%;
  /* 动画持续时间需要和定时器时间保持一致 */
  animation: grow 3s linear infinite;
  /* 设置元素的变换原点位置，默认为中心点（可以注释进行观看效果） */
  transform-origin: left;
}

@keyframes grow {
  100% {
    /* 按照指定的比例对元素的宽度进行水平缩放 */
    transform: scaleX(0);
  }
}
</style>
