<template>
  <div class="main-01">
    <div class="container">
      <div v-for='(item,index) in dataArr' :key="index"
           @click="currentIndex=index"
           :class="['item', index===currentIndex?'active':'']"
           :style="`background-image: url(${item.bgImg});`">
        <div class="shadow"></div>
        <div class="content">
          <div class="icon">{{item.icon}}</div>
          <div class="text">
            <div class="tit">{{ item.tit }}</div>
            <div class="sub">{{ item.sub }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      dataArr: [
        {
          bgImg: "https://picsum.photos/1920/1080?random=1",
          icon: '1',
          tit: '这是第 1 个标题',
          sub: '这是一段描述'
        },
        {
          bgImg: "https://picsum.photos/1920/1080?random=2",
          icon: '2',
          tit: '这是第 2 个标题',
          sub: '这是一段描述'
        },
        {
          bgImg: "https://picsum.photos/1920/1080?random=3",
          icon: '3',
          tit: '这是第 3 个标题',
          sub: '这是一段描述'
        },
        {
          bgImg: "https://picsum.photos/1920/1080?random=4",
          icon: '4',
          tit: '这是第 4 个标题',
          sub: '这是一段描述'
        },
        {
          bgImg: "https://picsum.photos/1920/1080?random=5",
          icon: '5',
          tit: '这是第 5 个标题',
          sub: '这是一段描述'
        }
      ]
    }
  },
  methods: {},
  created() {
  },
  mounted() {
  }
};

</script>

<style lang="less" scoped>
.main-01 {
  /* 100%窗口高度 */
  height: 100vh;
  /* 弹性布局 水平+垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 径向渐变背景 */
  //background: radial-gradient(circle at top center, #718497, #29323c);
}

.container {
  /* 弹性布局 默认水平排列 */
  display: flex;
  width: 90vw;
  height: 90vh;
  /* 溢出隐藏 */
  overflow: hidden;
}

.item {
  /* 相对定位 */
  position: relative;
  min-width: 90px;
  width: 70px;
  margin: 10px;
  cursor: pointer;
  border-radius: 30px;
  /* 保持原有尺寸比例，裁切长边 */
  background-size: cover;
  /* 定位背景图像为正中间 */
  background-position: center;
  /* 过渡效果：时长 贝塞尔曲线 */
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  overflow: hidden;
}

/* 底部阴影，让文字更加突出 */
.item .shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}

.item .content {
  display: flex;
  position: absolute;
  left: 20px;
  right: 0;
  bottom: 20px;
  height: 50px;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}

.item .content .icon {
  min-width: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}

.item .content .text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  color: #fff;
  width: 100%;
}

.item .content .text div {
  /* 超出显示省略号（需要设置width） */
  width: calc(100% - 70px);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

.item .content .text .tit {
  font-weight: bold;
  font-size: 18px;
}

.item .content .text .sub {
  /* 设置过渡效果延迟时间 */
  transition-delay: 0.1s;
}

/* 选中态样式 */
.item.active {
  flex: 1;
  margin: 0;
  border-radius: 40px;
}

.item.active .shadow {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.35) 65%, transparent);
}

.item.active .content {
  bottom: 20px;
  left: 20px;
}

.item.active .content .icon {
  transform: scale(1.2);
  margin-right: 10px;
}

.item.active .content .text div {
  opacity: 1;
}
</style>
