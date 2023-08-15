<template>
  <div class="main-31">
    <div class="container">
      <h2>随机密码生成器</h2>
      <div class="result-container">
        <!-- 密码显示框 -->
        <span id="result">{{ showPwd }}</span>
        <!-- 复制按钮 -->
        <button class="btn" id="clipboard" @click="copyPwd">
          <i class="fas fa-clipboard"></i>
        </button>
      </div>

      <!-- 设置盒子 -->
      <div class="settings">
        <div class="setting">
          <label>密码长度</label>
          <input type="number" id="length" min="4" max="20" v-model="pwdLength">
        </div>
        <div class="setting" v-for='(item,index) in typesArr' :key="index">
          <label>{{ item.label }}</label>
          <input type="checkbox" :id="item.type" v-model="item.isRun">
        </div>

      </div>
      <!-- 生成密码按钮 -->
      <button class="btn btn-large" @click="generatePassword">随机生成密码</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPwd: '',
      pwdLength: 20,
      typesArr: [
        {
          label: '小写字母',
          type: 'lowercase',
          funName: this.getRandomLower,
          isRun: true
        },
        {
          label: '大写字母',
          type: 'uppercase',
          funName: this.getRandomUpper,
          isRun: false
        },
        {
          label: '数字字符',
          type: 'numbers',
          funName: this.getRandomNumber,
          isRun: true
        },
        {
          label: '特殊符号',
          type: 'symbols',
          funName: this.getRandomSymbol,
          isRun: false
        }
      ]
    }
  },
  methods: {
    // 复制密码
    async copyPwd() {
      navigator.clipboard
          .writeText(this.showPwd)
          .then(() => alert("复制成功！"));
    },
    // 生成密码
    generatePassword() {
      this.showPwd = ''
      // 过滤需要运行的元素
      const runFunArr = this.typesArr.filter(item => item.isRun)

      // 都没选中,就直接返回空字符串
      if (runFunArr.length === 0) return ''

      let generatePassword = ''
      for (let i = 0; i < this.pwdLength; i += runFunArr.length) {
        // 执行方法
        runFunArr.forEach(item => generatePassword += item.funName())
      }

      // 截取固定长度在字符串
      this.showPwd = generatePassword.slice(0, this.pwdLength)
    },
    // 以下为 4 个随机工具函数
    // 随机小写字母
    getRandomLower() {
      // a-z：97-122，A-Z：65-90，0-9：48-57。
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    },
    // 随机大写字母
    getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    },
    // 随机数字
    getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    },
    // 随机特殊字符
    getRandomSymbol() {
      const symbols = '!@#$%^&*(){}[]=<>/,.'
      return symbols[Math.floor(Math.random() * symbols.length)]
    }
  }
};

</script>

<style lang="less" scoped>
.main-31 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
}

* {
  box-sizing: border-box;
}

/* 大盒子 */
.container {
  background-color: #23235b;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
  padding: 20px;
  width: 350px;
  max-width: 100%;
}

/* 标题 */
h2 {
  margin: 10px 0 20px;
  text-align: center;
}

/* 结果框 */
.result-container {
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  /* 水平布局方式,从左到右 */
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 12px 10px;
  height: 50px;
  width: 100%;
}

/* 密码显示框 */
.result-container #result {
  /* 单词在需要时会被强制换行，以便适应容器的宽度 */
  word-wrap: break-word;
  max-width: calc(100% - 40px);
  overflow-y: auto;
  height: 100%;
}

#result::-webkit-scrollbar {
  width: 1rem;
}

/* 复制按钮 */
.result-container .btn {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  font-size: 20px;
}

/* 按钮的公共样式 */
.btn {
  border: none;
  background-color: #3b3b98;
  color: #fff;
  font-size: 16px;
  padding: 8px 12px;
  cursor: pointer;
}

/* 生成密码按钮 */
.btn-large {
  display: block;
  width: 100%;
}

/* 生成条件 */
.setting {
  display: flex;
  /* 两端对齐 */
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}
</style>
