<template>
  <div class="main-48">
    <h1>随机图像</h1>
    <div class="container">

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
.main-48 {
  display: flex;
  /* 水平垂直居中 */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

h1 {
  font-weight: bold;
  font-size: 25px;
}

.title {
  /* 上 左右 下 */
  margin: 10px 0 0;
}

/* 大盒子 */
.container {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* 支持换行 */
  flex-wrap: wrap;
  max-width: 1000px;
}

/* 图片 */
.container img {
  object-fit: cover;
  margin: 10px;
  height: 300px;
  width: 300px;
  max-width: 100%;
}
</style>
