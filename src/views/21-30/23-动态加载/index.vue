<template>
  <div class="main-23">
    <!-- 加载的盒子 -->
    <div class="kinetic"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {
  },
  mounted() {
  }
};

</script>

<style lang="less" scoped>
.main-23 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 加载的盒子 */
.kinetic {
  position: relative;
  height: 80px;
  width: 80px;
}

/* 两个三角形 */
.kinetic::after,
.kinetic::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-bottom-color: #3498db;
  animation: rotateA 2s linear infinite 0.5s;

}

.kinetic::before {
  /* 旋转 90 度 */
  transform: rotate(90deg);
  animation: rotateB 2s linear infinite;
}

@keyframes rotateA {

  0%,
  25% {
    transform: rotate(0deg);
  }

  50%,
  75% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotateB {
  0%,
  25% {
    transform: rotate(90deg);
  }

  50%,
  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(450deg);
  }
}
</style>
