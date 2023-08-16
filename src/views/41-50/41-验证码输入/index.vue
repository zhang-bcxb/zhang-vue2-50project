<template>
  <div class="main-41">
    <div class="container">
      <h2>验证你的账户</h2>
      <p>我们将六位代码发邮件至 xxxx@email.com 输入下面的代码来确认您的电子邮件地址。</p>
      <div class="code-container">
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
      </div>
      <small class="info">
        这只是设计。我们没有给你发邮件，因为我们没有你的邮件
      </small>
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
.main-41 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 大容器 */
.container {
  background-color: #fff;
  border: 3px #000 solid;
  border-radius: 10px;
  padding: 30px;
  max-width: 1000px;
  text-align: center;
}

/* 验证码容器 */
.code-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
}

/* 数字输入盒子 */
.code {
  caret-color: transparent;
  border-radius: 5px;
  font-size: 75px;
  height: 120px;
  width: 100px;
  border: 1px solid #eee;
  margin: 1%;
  text-align: center;
  font-weight: 300;
  -moz-appearance: textfield;
}

/* 隐藏输入框中的数字输入框调整按钮 */
.code::-webkit-outer-spin-button,
.code::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.code:valid {
  border-color: #3498db;
}

/* 底部提示 */
.info {
  background-color: #eaeaea;
  display: inline-block;
  padding: 10px;
  line-height: 20px;
  max-width: 400px;
  color: #777;
  border-radius: 5px;
}

@media (max-width: 600px) {
  .code-container {
    flex-wrap: wrap;
  }

  .code {
    font-size: 60px;
    height: 80px;
    max-width: 70px;
  }
}
</style>
