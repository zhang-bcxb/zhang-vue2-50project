<template>
  <div class="main-43">
    <div class="panel-container" id="panel">
      <strong>反馈意见，选择你的心情</strong>
      <!-- active 表示选中状态 -->
      <div class="ratings-container">
        <div class="rating">
          <img src="img/悲伤.png" alt="">
          <small>悲伤</small>
        </div>
        <div class="rating">
          <img src="img/一般.png" alt="">
          <small>一般</small>
        </div>
        <div class="rating active">
          <img src="img/开心.png" alt="">
          <small>开心</small>
        </div>
      </div>
      <!-- 提交按钮 -->
      <button class="btn" id="send">发送心情状态</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
  }
};

</script>

<style lang="less" scoped>
.main-43 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 问题面板 */
.panel-container {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  font-size: 90%;
  /* 水平垂直居中 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  max-width: 400px;
}

/* 强调标签，文字垂直居中 */
.panel-container strong {
  line-height: 20px;
}

/* 表情大盒子 */
.ratings-container {
  /* 子盒子水平排列 */
  display: flex;
  margin: 20px 0;
}

/* 表情盒子 */
.rating {
  flex: 1;
  cursor: pointer;
  padding: 20px;
  margin: 10px 5px;
}

/* 盒子选中或者盒子被触摸 */
.rating:hover,
.rating.active {
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* 表情提示 */
.rating small {
  color: #555;
  display: inline-block;
  margin: 10px 0 0;
}

.rating:hover small,
.rating.active small {
  color: #111;
}

/* 提交按钮 */
.btn {
  background-color: #302d2b;
  color: #fff;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  padding: 5px;
}

.btn:focus {
  outline: 0;
}

.btn.active {
  transform: scale(0.98);
}

.fa-heart {
  color: red;
  font-size: 30px;
  margin-bottom: 10px;
}
</style>
