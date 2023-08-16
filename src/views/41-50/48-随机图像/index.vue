<template>
  <div class="main-48">
    <h1>随机图像</h1>
    <div class="container">
      <img :src="item" :alt="`img-${index+1}`" loading="lazy"
           v-for='(item,index) in imgArr' :key="index"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgPath: 'https://source.unsplash.com/random/',
      imgArr: []
    }
  },
  created() {
    this.getImgData()
  },
  methods: {
    // 获得图片数据
    getImgData() {
      // 一行3张图片，有五行
      for (let i = 0; i < 15; i++) {
        this.imgArr.push(`${this.imgPath}${this.getRandomSize()}`)
      }
    },
    // 获得随机的图片尺寸
    getRandomSize() {
      return `${this.getRandomValue()}x${this.getRandomValue()}`
    },
    // 获取单个随机尺寸
    getRandomValue() {
      return Math.floor(Math.random() * 10) + 300
    }
  }
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
