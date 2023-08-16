<template>
  <div class="main-46">
    <div class="quiz-container" id="quiz">
      <div class="quiz-header">
        <!-- 问题标题 -->
        <h2 id="question">你喜欢编程细胞吗？</h2>
        <!--四个答题选项-->
        <ul>
          <li>
            <input type="radio" name="answer" id="a" class="answer">
            <label for="a" id="a_text">特别喜欢</label>
          </li>
          <li>
            <input type="radio" name="answer" id="b" class="answer">
            <label for="b" id="b_text">超级喜欢</label>
          </li>
          <li>
            <input type="radio" name="answer" id="c" class="answer">
            <label for="c" id="c_text">当然喜欢</label>
          </li>
          <li>
            <input type="radio" name="answer" id="d" class="answer">
            <label for="d" id="d_text">以上都是</label>
          </li>
        </ul>
      </div>
      <!-- 提交按钮 -->
      <button id="submit">提交</button>
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
.main-46 {
  height: 100%;
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 大盒子 */
.quiz-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
  width: 600px;
  overflow: hidden;
}

/* 内容盒子 */
.quiz-header {
  padding: 1rem;
}

/* 文本标题 */
h2 {
  padding: 1rem;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin: 0;
}

/* 问题选项 */
ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  font-size: 1.2rem;
  margin: 1rem 0;
}

ul li label {
  margin-left: 10px;
  cursor: pointer;
}

/* 提交按钮 */
button {
  background-color: #8e44ad;
  color: #fff;
  border: none;
  display: block;
  width: 100%;
  font-size: 1.1rem;
  padding: 1.3rem;

}

button:hover {
  background-color: #5e3370;
}

button:focus {
  outline: none;
  background-color: #5e3370;
}
</style>
