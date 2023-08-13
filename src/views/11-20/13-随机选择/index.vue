<template>
  <div class="main-13">
    <div class="container">
      <!-- 提示文本 -->
      <h3>输入你需要随机的名字<br/>用【逗号】进行分割每一项 输入完毕后按回车</h3>
      <!-- 文本域 -->
      <textarea ref="myInput" placeholder="输入完按回车" id="textarea" @keyup="createTags"></textarea>
      <!-- 分割字符串需要插入的盒子 -->
      <div id="tags">
        <span v-for='(item,index) in tagsArr' :key="index"
              :class="['tag',tagIndex==index?'highlight':'']">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 高亮的标签索引
      tagIndex: 0,
      // 标签数组
      tagsArr: []
    }
  },
  mounted() {
    // 自动获取焦点
    this.$refs.myInput.focus()
  },
  methods: {
    // 开始创建标签
    createTags(e) {
      // 创建标签
      this.tagsArr = e.target.value
          .replace(/，/g, ',') // 将中文逗号替换成英文逗号
          .split(',') // 按照英文逗号进行分割
          .filter((tag) => tag.trim() !== '') // 过滤空字符串
          .map((tag) => tag.trim()) // 返回去除空白字符的字符串
      // 回车开始选择
      if (e.key === 'Enter') {
        this.startSelect(e)
      }
    },
    // 按下回车开始选择
    startSelect(e) {
      // 清除数据
      setTimeout(() => {
        e.target.value = ''
      }, 10)
      // 随机选中
      this.randomSelect()
    },
    // 随机选择
    randomSelect() {
      // 定时器
      const interval = setInterval(() => {
        // 得到随机的标签
        this.tagIndex = this.pickRandomTag()
      }, 100)

      // 延时器，得到最后选中的结果
      setTimeout(() => {
        // 清除定时器
        clearInterval(interval)
        // 延时器，高亮选中的结果
        setTimeout(() => {
          this.tagIndex = this.pickRandomTag()
        }, 100)
      }, 3000)
    },
    // 随机标签
    pickRandomTag() {
      return Math.floor(Math.random() * this.tagsArr.length)
    }
  }
};

</script>

<style lang="less" scoped>
.main-13 {
  height: 100%;
  /* 水平垂直居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* 提示文本 */
h3 {
  color: #fff;
  margin: 10px 0 20px;
  text-align: center;
  line-height: 25px;
}

/* 大盒子 */
.container {
  width: 500px;
}

/* 文本域 */
textarea {
  border: 0;
  display: block;
  width: 100%;
  height: 100px;
  padding: 10px;
  margin: 0 0 20px;
  font-size: 16px;
}

/* 文本域获得焦点,去除轮廓线 */
textarea:focus {
  outline: none;
}

/* 分割后的小盒子 */
.tag {
  background-color: #f0932b;
  color: #fff;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 0 5px 10px 0;
  font-size: 14px;
  /* 设置成行内块盒子 */
  display: inline-block;
}

/* 被随机选中的小盒子 */
.tag.highlight {
  background-color: #273c75;
}
</style>
