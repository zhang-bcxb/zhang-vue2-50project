<template>
  <div class="main-11">
    <template v-if="!isShow">
      <div id="insert" style="display: flex;">
        <div class="key">请按下你的键盘</div>
      </div>
    </template>
    <template v-else>
      <div class="key">
        <span>{{ keyObj.key }}</span>
        <small>event.key</small>
      </div>
      <div class="key">
        <span>{{ keyObj.keyCode }}</span>
        <small>event.keyCode</small>
      </div>
      <div class="key">
        <span>{{ keyObj.code }}</span>
        <small>event.code</small>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 是否按下键盘
      isShow: false,
      keyObj: {
        key: '',
        keyCode: '',
        code: ''
      }
    }
  },
  methods: {
    keydownHandle(event) {
      this.isShow = true
      this.keyObj = {
        key: event.key,
        keyCode: event.keyCode,
        code: event.code
      }
    }
  },
  created() {
    window.addEventListener('keydown', this.keydownHandle)
  },
  destroyed() {
    window.addEventListener('keydown', this.keydownHandle)
  }
};

</script>

<style lang="less" scoped>
.main-11 {
  height: 100%;
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* 文字水平居中 */
  text-align: center;
}

/* 按键盒子 */
.key {
  position: relative;
  border: 1px solid #999;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  /* 设置元素的布局方式为内联弹性盒子 */
  display: flex;
  /* 设置方向 */
  flex-direction: column;
  /* 水平居中 */
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  margin: 10px;
  min-width: 150px;
  background-color: #3498db;
}

/* 文本提示 */
.key small {
  position: absolute;
  top: -24px;
  left: 0;
  /* 水平居中 */
  text-align: center;
  width: 100%;
  color: #555;
  font-size: 14px;
}

@media (max-width: 768px) {
  .key {
    margin: 10px 0px;
  }
}
</style>
