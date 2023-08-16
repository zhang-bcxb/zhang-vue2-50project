<template>
  <div class="main-46">
    <div class="quiz-container" id="quiz">
      <template v-if="isShow">
        <div class="quiz-header">
          <!-- 问题标题 -->
          <h2>{{ questionData[currentIndex].question }}</h2>
          <!--四个答题选项-->
          <ul>
            <li>
              <input type="radio" name="answer" id="a" value="a" v-model="checkVal" class="answer">
              <label for="a">{{ questionData[currentIndex].a }}</label>
            </li>
            <li>
              <input type="radio" name="answer" id="b" value="b" v-model="checkVal" class="answer">
              <label for="b">{{ questionData[currentIndex].b }}</label>
            </li>
            <li>
              <input type="radio" name="answer" id="c" value="c" v-model="checkVal" class="answer">
              <label for="c">{{ questionData[currentIndex].c }}</label>
            </li>
            <li>
              <input type="radio" name="answer" id="d" value="d" v-model="checkVal" class="answer">
              <label for="d">{{ questionData[currentIndex].d }}</label>
            </li>
          </ul>
        </div>
        <!-- 提交按钮 -->
        <button id="submit" @click="submitHandle">提交</button>
      </template>

      <template v-else>
        <h2>你答对了{{ score }}/ {{ questionData.length }}个问题</h2>
        <button onclick="location.reload()">重新加载</button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前回答问题的索引
      currentIndex: 0,
      // 分数
      score: 0,
      // 选中的值
      checkVal: '',
      // 是否显示问题
      isShow: true,
      // 问题数据
      questionData: [
        {
          question: '【1】你喜欢编程细胞吗？',
          a: '特别喜欢',
          b: '超级喜欢',
          c: '当然喜欢',
          d: '以上都是',
          answer: 'a'
        }, {
          question: '【2】你喜欢编程细胞吗？',
          a: '特别喜欢',
          b: '超级喜欢',
          c: '当然喜欢',
          d: '以上都是',
          answer: 'b'
        }, {
          question: '【3】你喜欢编程细胞吗？',
          a: '特别喜欢',
          b: '超级喜欢',
          c: '当然喜欢',
          d: '以上都是',
          answer: 'c'
        }, {
          question: '【4】你喜欢编程细胞吗？',
          a: '特别喜欢',
          b: '超级喜欢',
          c: '当然喜欢',
          d: '以上都是',
          answer: 'd'
        }
      ]
    }
  },
  methods: {
    submitHandle() {
      console.log(this.checkVal)
      let index = this.currentIndex
      if (this.checkVal) {
        // 选对
        if (this.checkVal === this.questionData[index].answer) {
          this.score++
        }
        this.checkVal = ''
        index++
        if (index >= this.questionData.length) {
          console.log('题目答完')
          this.isShow = false
        } else {
          console.log('正在答题')
          this.currentIndex = index
        }
      }
    }
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
