<template>
  <div class="main-08">
    <div class="container">
      <!--标题-->
      <h1>Please Login</h1>
      <form action="#">
        <!--表单项-->
        <div v-for='(item,index) in formData' :key="index" class="form-control">
          <input :type="item.type" :required="item.required" v-model="item.value">
          <label>
            <span v-for="(letter, idx) in item.label.split('')" :key="idx"
                  :style="`transition-delay:${idx * 50}ms`">{{ letter }}
            </span>
          </label>
        </div>

        <!--登录按钮-->
        <button class="btn">Login</button>
        <!--注册提示-->
        <p class="text">Don't have an account? <a href="#">Register</a></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: [
        {
          type: "text",
          value: "",
          required: true,
          label: "Email"
        },
        {
          type: "password",
          value: "",
          required: true,
          label: "Password"
        }
      ]
    }
  },
  methods: {}
};

</script>

<style lang="less" scoped>
.main-08 {
  color: #fff;
  /* 水平垂直居中 */
  display: flex;
  /* 修改主轴方向 */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 大盒子 */
.container {
  width: auto;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  border-radius: 5px;
}

.container h1 {
  text-align: center;
  margin-bottom: 30px;
}

.container a {
  text-decoration: none;
  color: lightblue;
}

/* 登录按钮 */
.btn {
  cursor: pointer;
  display: inline-block;
  width: 100%;
  background-color: lightblue;
  padding: 15px;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  margin-bottom: 30px;
}

/* 按钮被点击，缩放一下 */
.btn:active {
  transform: scale(0.98);
}

/* 表单项 */
.form-control {
  position: relative;
  margin: 20px 0 40px;
}

/* 输入框 */
.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px #fff solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #fff;
}

/* 表单获取焦点 或者 表单进行验证 */
.form-control input:focus,
.form-control input:valid {
  outline: 0;
  /* 修改底部边框颜色 */
  border-bottom-color: lightblue;
}

/* 表单文字提示 */
.form-control label {
  position: absolute;
  top: 15px;
  left: 0;
  /* 禁用元素的鼠标事件 */
  pointer-events: none;
}

.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  /* 贝塞尔曲线函数，实现文字波浪 */
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 表单获取焦点 或者 表单进行验证 */
.form-control input:focus + label span,
.form-control input:valid + label span {
  color: lightblue;
  /* 向上移动 */
  transform: translateY(-30px);
}
</style>
