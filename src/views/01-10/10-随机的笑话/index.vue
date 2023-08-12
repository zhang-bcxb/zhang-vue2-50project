<template>
  <div class="main-10">
    <div class="container">
      <!-- 标题 -->
      <h2>别笑挑战</h2>
      <!-- 内容 -->
      <div id="joke" class="joke">{{ joke }}</div>
      <!-- 按钮 -->
      <button id="jokeBtn" class="btn" @click="getData">点我有笑话</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      joke: '笑话真好笑啊'
    }
  },
  methods: {
    async getData() {
      const headerConfig = {
        headers: {
          Accept: 'application/json',
        },
      }
      fetch('https://icanhazdadjoke.com', headerConfig)
          // 将响应数据解析为 JSON
          .then((res) => res.json())
          .then((data) => {
            // 处理解析后的 JSON 数据
            // console.log(data)
            this.joke = data.joke
          })
    }
  },
  created() {
    this.getData()
  }
};

</script>

<style lang="less" scoped>
.main-10 {
  /* 水平垂直居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  padding: 20px;
}

/* 大盒子 */
.container {
  background-color: #fff;
  border-radius: 10px;
  /* 盒子阴影 */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 50px 20px;
  text-align: center;
  max-width: 100%;
  width: 800px;
}

/* 标题 */
h2 {
  margin: 0;
  opacity: 0.5;
  /* 字符间的间距 */
  letter-spacing: 2px;
}

/* 内容 */
.joke {
  font-size: 30px;
  letter-spacing: 1px;
  line-height: 40px;
  margin: 50px auto;
  max-width: 600px;
}

/* 按钮 */
.btn {
  background-color: #9f68e0;
  color: #fff;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 14px 40px;
  font-size: 16px;
  cursor: pointer;
}

/* 触摸按钮时的样式 */
.btn:active {
  transform: scale(0.98);
}
</style>
