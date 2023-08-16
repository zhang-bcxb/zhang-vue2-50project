<template>
  <div class="main-39">
    <!-- 背景遮罩 -->
    <div class="background" :style="`filter:blur(${blurValue}px)`"></div>
    <!-- 表单盒子 -->
    <div class="bg-white rounded p-10 text-center shadow-md">
      <!-- 功能说明 -->
      <h1 class="text-3xl">图片长度改变背景模糊度改变</h1>
      <p class="text-sm text-gray-700">输入密码观察背景图片模糊度</p>
      <!-- 邮箱 -->
      <div class="my-4 text-left">
        <label for="email" class="text-gray-900">
          Email:
        </label>
        <input type="text" class="border block w-full p-2 mt-2 rounded" id="email" placeholder="输入Email">
      </div>
      <!-- 密码 -->
      <div class="my-4 text-left">
        <label for="password" class="text-gray-900">Password:</label>
        <input type="password" @input="pwdHandle" class="border block w-full p-2 mt-2 rounded" id="password"
               placeholder="输入密码">
      </div>
      <!-- 提交按钮 -->
      <button class="bg-black text-white py-2 mt-4 inline-block w-full rounded">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blurValue: 20
    }
  },
  methods: {
    pwdHandle(e) {
      let length = e.target.value.length
      // 密码长度为10，就会清晰
      this.blurValue = 20 - length * 2
    }
  }
};

</script>

<style lang="less" scoped>
// 引入文件
@import "../../../assets/css/tailwind2.min.css";

.main-39 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 设置背景遮罩 */
.background {
  background: url('bg.jpg') no-repeat center center/cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  /* 高斯模糊效果 */
  filter: blur(20px);
}
</style>
