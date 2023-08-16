<template>
  <div class="main-38">
    <div class="phone">
      <!-- 图片 -->
      <img v-for='(item,index) in imgArr' :key="index"
           :src="item"
           :class="['content',{'show':index==currentIndex}]">

      <!-- 底部导航栏 -->
      <nav>
        <ul>
          <li :class="{'active':index==currentIndex}" @click="navHandle(index)"
              v-for='(item,index) in navArr' :key="index">
            <i :class="item.icon"></i>
            <p>{{ item.text }}</p>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      imgArr: [
        require('./img/1.jpg'),
        require('./img/2.jpg'),
        require('./img/3.jpg'),
        require('./img/4.jpg')
      ],
      navArr: [
        {
          icon: 'fas fa-home',
          text: '首页'
        }, {
          icon: 'fas fa-box',
          text: '工作'
        }, {
          icon: 'fas fa-book-open',
          text: '博客'
        }, {
          icon: 'fas fa-users',
          text: '关于'
        }
      ]
    }
  },
  methods: {
    navHandle(index) {
      this.currentIndex = index
    }
  },
  created() {
    // 修改 body 的溢出隐藏，需要滚动条
    document.body.style.overflow = ''
  }
};

</script>

<style lang="less" scoped>
.main-38 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 手机盒子 */
.phone {
  position: relative;
  overflow: hidden;
  width: 340px;
  height: 600px;
  border: 3px solid #eee;
  border-radius: 15px;

}

/* 图片内容 */
.phone .content {
  opacity: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* 动态计算：减去底部导航栏 */
  height: calc(100% - 60px);
}

/* 显示图片 */
.phone .content.show {
  opacity: 1;
}

/* 底部导航栏 */
nav {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-top: -5px;
  width: 100%;

}

nav ul {
  background-color: #fff;
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: 60px;

}

nav li {
  color: #777;
  cursor: pointer;
  /* 弹性宽度 */
  flex: 1;
  padding: 10px;
  text-align: center;
}

nav ul li p {
  font-size: 12px;
  margin: 2px 0;
}

/* li被触摸 或者 被选中 */
nav ul li:hover,
nav ul li.active {
  color: #8e44ad;
}

</style>
