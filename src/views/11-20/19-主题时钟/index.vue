<template>
  <div :class="['main-19',isDark?'dark':'']">
    <!-- 一键换肤按钮 -->
    <button class="toggle" @click="isDark=!isDark">{{ isDark ? '浅色' : '黑色' }}</button>
    <!-- 时钟盒子 -->
    <div class="clock-container">
      <!-- 时钟 -->
      <div class="clock">
        <div class="needle hour" :style="`transform:translate(-50%, -100%) rotate(${timeDeg.hour}deg);`"></div>
        <div class="needle minute" :style="`transform:translate(-50%, -100%) rotate(${timeDeg.minute}deg);`"></div>
        <div class="needle second" :style="`transform:translate(-50%, -100%) rotate(${timeDeg.second}deg);`"></div>
        <div class="center-point"></div>
      </div>
      <!-- 时间 -->
      <div class="time" v-html="timeShow"></div>
      <!-- 日期 -->
      <div class="date" v-html="dateShow"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 指针旋转的角度
      timeDeg: {
        hour: 0,
        minute: 0,
        second: 0
      },
      // 显示的时间和日期
      timeShow: '',
      dateShow: '',
      // 定时器
      timer: null,
      // 默认为浅色
      isDark: false
    }
  },
  created() {
    // 最开始执行一次
    this.setTime()
    // 每一秒执行一次
    this.timer = setInterval(this.setTime, 1000)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    setTime() {
      // 时间处理
      const time = new Date()
      const month = time.getMonth()
      const day = time.getDay()
      const date = time.getDate()
      const hours = time.getHours()
      const hoursForClock = hours >= 13 ? hours % 12 : hours
      const minutes = time.getMinutes()
      const seconds = time.getSeconds()
      const ampm = hours >= 12 ? 'PM' : 'AM'
      const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

      // 指针旋转
      this.timeDeg = {
        hour: this.scale(hoursForClock, 0, 12, 0, 360),
        minute: this.scale(minutes, 0, 60, 0, 360),
        second: this.scale(seconds, 0, 60, 0, 360)
      }

      // 时间和日期的文本显示
      this.timeShow = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
      this.dateShow = `${months[month]}, <span class="circle">${date}</span>, ${days[day]}`
    },
    // 数值映射的函数
    scale(num, in_min, in_max, out_min, out_max) {
      return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }
  }
};

</script>

<style lang="less" scoped>
.main-19 {
  /* 白色背景 */
  --primary-color: #000;
  --secondary-color: #fff;

  transition: all 0.5s ease-in;
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 黑色背景 */
.main-19.dark {
  --primary-color: #fff;
  --secondary-color: #333;

  background-color: #111;
}

/* 切换按钮 */
.toggle {
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  position: absolute;
  top: 100px;
}

.toggle:focus {
  outline: none;
}

/* 内容盒子 */
.clock-container {
  /* 垂直 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

/* 时钟盒子 */
.clock {
  position: relative;
  width: 200px;
  height: 200px;

}

/* 针 */
.needle {
  background-color: var(--primary-color);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3px;
  transform-origin: bottom center;
  transition: all 0.5s ease-in;
}

/* 时针 */
.needle.hour {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 65px;
}

/* 分针 */
.needle.minute {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
}

/* 秒针 */
.needle.second {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
  background-color: #e74c3c;
}

/* 中心点 */
.center-point::after {
  content: '';
  border-color: var(--primary-color);
  width: 5px;
  height: 5px;
  /* 定位水平垂直居中 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;

}

/* 时间 */
.time {
  color: var(--primary-color);
  font-size: 60px;
}

/* 日期 */
.date {
  color: #aaa;
  font-size: 14px;
  /* 字符之间的间隔 */
  letter-spacing: 0.3px;
  /* 文字转大写 */
  text-transform: uppercase;
}

.date .circle {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 50%;
  height: 18px;
  width: 18px;
  /*行内的弹性盒子容器*/
  display: inline-flex;
  /* 水平垂直居中 */
  align-items: center;
  justify-content: center;
  line-height: 18px;
  transition: all 0.5s ease-in;
  font-size: 12px;
}
</style>
