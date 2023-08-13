<template>
  <div class="main-14">
    <!-- 导航菜单盒子，active 表示展开 -->
    <nav :class="{ active: isActive }" id="nav" :style="`--nav-width: ${updateWidth}px`">
      <!-- 导航按钮 -->
      <ul>
        <li v-for='(item,index) in navData' :key="index" :style="`width: ${item.width}px`">
          <a :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
      <!-- 切换按钮 -->
      <button class="icon" id="toggle" @click="isActive=!isActive">
        <div class="line line1"></div>
        <div class="line line2"></div>
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 是否展开
      isActive: true,
      // 宽度计算
      updateWidth: 0,
      // 导航栏数据
      navData: [
        {
          href: 'javascript:;',
          text: 'Home1',
          width: 50
        },
        {
          href: 'javascript:;',
          text: 'Home2',
          width: 50
        },
        {
          href: 'javascript:;',
          text: 'Home3',
          width: 50
        },
        {
          href: 'javascript:;',
          text: 'Home4',
          width: 50
        },
        {
          href: 'javascript:;',
          text: 'Home5',
          width: 50
        },
        {
          href: 'javascript:;',
          text: 'Home6',
          width: 50
        }
      ]
    }
  },
  created() {
    this.updateWidth = this.getNavWidth()
  },
  methods: {
    getNavWidth() {
      let total = 30
      // 动态计算导航栏宽度：【内容（50）+外边距（10*2）】+【图标（30）】
      this.navData.forEach(item => {
        total = total + item.width + 20
      })
      return total
    }
  }
};

</script>

<style lang="less" scoped>
.main-14 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  --nav-width: 420px;
}

nav {
  background-color: #fff;
  padding: 20px;
  /* 没有展开时的宽度 */
  width: 40px;
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: width 0.6s linear;
  /* 隐藏导航条 */
  overflow-x: hidden;
}

/* 展开导航栏 */
nav.active {
  width: var(--nav-width);
}

/* 导航栏盒子 */
nav ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 0;
  transition: width 0.6s linear;
}

nav.active ul {
  width: 100%;
}

/* 没有展开时的导航栏 */
nav ul li {
  transform: rotateY(0deg);
  opacity: 0;
  transition: transform 0.6s linear, opacity 0.6s linear;
  margin: 0 10px;
}

/* 展开时的导航栏 */
nav.active ul li {
  opacity: 1;
  transform: rotateY(360deg);
}

nav ul a {
  position: relative;
  color: #000;
}

/* 切换按钮 */
.icon {
  background-color: #fff;
  border: 0;
  cursor: pointer;
  padding: 0;
  position: relative;
  height: 30px;
  width: 30px;
}

/* 切换按钮的两条线 */
.icon .line {
  background-color: #5290f9;
  height: 2px;
  width: 20px;
  position: absolute;
  top: 10px;
  left: 5px;
  transition: transform 0.6s linear;
}

.icon .line2 {
  top: auto;
  bottom: 10px;
}

/* 展开时的线，显示叉叉 */
nav.active .icon .line1 {
  /* 765 = 360 * 2(转两圈) + 45 */
  transform: rotate(-765deg) translateY(5.5px)
}

nav.active .icon .line2 {
  transform: rotate(765deg) translateY(-5.5px)
}
</style>
