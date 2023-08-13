<template>
  <div class="main-15">
    <!-- 卡片盒子 -->
    <div class="counter-container" v-for='(item,index) in counterArr' :key="index">
      <!-- 图标 -->
      <i :class="item.icon"></i>
      <!-- 数字 -->
      <div class="counter" :data-target="item.num"></div>
      <!-- 文本 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counterArr: [
        {
          icon: 'fab fa-twitter fa-3x',
          num: 12000,
          text: 'Twitter Followers',
        },
        {
          icon: 'fab fa-youtube fa-3x',
          num: 5000,
          text: 'YouTube Subscribers',
        },
        {
          icon: 'fab fa-facebook fa-3x',
          num: 7500,
          text: 'Facebook Fans',
        }
      ]
    }
  },
  methods: {
    updateCounter(counter, target, increment) {
      // 获取显示的数字
      const c = +counter.innerText

      if (c < target) {
        // 没到达最终显示的数字
        counter.innerText = `${Math.ceil(c + increment)}`
        // 延迟器（这里有递归的思想，即开了多个延时器）
        setTimeout(() => this.updateCounter(counter, target, increment), 1)
      } else {
        // 到达最终显示的数字
        counter.innerText = target
      }
    }
  },
  mounted() {
    const counters = Array.from(document.querySelectorAll('.counter'))
    // 更新每个计数器中的数字
    counters.forEach((counter) => {
      // 最开始显示数字 0
      counter.innerText = '0'
      // 加号放在前面的作用：将字符串转成数字类型
      // 获取自定义属性，即获得最终显示的数字
      const target = +counter.getAttribute('data-target')
      // 增加的步长
      const increment = target / 200

      // 更新数字
      this.updateCounter(counter, target, increment)
    })
  }
};

</script>

<style lang="less" scoped>
.main-15 {
  color: #000;
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 卡片盒子 */
.counter-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 30px 50px;
}

/* 数字 */
.counter {
  font-size: 60px;
  margin-top: 10px;
}

/* 媒体查询 */
@media (max-width: 580px) {
  body {
    flex-direction: column;
  }
}
</style>
