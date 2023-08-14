<template>
  <div class="main-27">
    <!-- 消息盒子 -->
    <div id="toasts">
      <div :class="['toast',item.type]" v-for='(item,index) in msgArr' :key="index">
        {{ item.text }}
      </div>
    </div>

    <!-- 提示按钮 -->
    <button class="btn" id="button" @click="createNotification">点我看提示</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgArr: [],
      msgType: ['info', 'success', 'error'],
      num: 0
    }
  },
  methods: {
    createNotification() {
      this.num++
      let msgObj = {
        text: '消息提示-' + this.num,
        type: this.msgType[Math.floor(Math.random() * this.msgType.length)]
      }
      // 往数组中添加元素
      this.msgArr.push(msgObj)

      // 延时器，销毁盒子
      setTimeout(() => {
        // 删除数组最前面的元素
        this.msgArr.shift()
      }, 3000)
    }
  }
};

</script>

<style lang="less" scoped>
.main-27 {
  height: 100%;
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 按钮 */
.btn {
  background-color: #ffffff;
  color: rebeccapurple;
  font-weight: bold;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

/* 按钮被触摸的样式 */
.btn:active {
  transform: scale(0.98);
}

/* 大消息盒子 */
#toasts {
  position: fixed;
  bottom: 10px;
  left: 10px;
  display: flex;
  /* 设置方向 */
  flex-direction: column;
}

/* 消息盒子 */
.toast {
  background-color: #fff;
  border-radius: 5px;
  //撑大盒子
  padding: 1rem 2rem;
  //盒子间距
  margin: 0.5rem;
}

/* 信息类的消息 */
.toast.info {
  color: rebeccapurple;
}

/* 成功的消息 */
.toast.success {
  color: green;
}

/* 错误的消息 */
.toast.error {
  color: red;
}
</style>
