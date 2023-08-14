<template>
  <div class="main-24">
    <!-- 卡片盒子 -->
    <div class="card">
      <!-- 卡片头部 -->
      <div :class="['card-header', {'animated-bg': isShowLoading}]" id="card-header">
        <img v-show="!isShowLoading" alt="图片加载中" :src="cardObject.cardHeader"/>
      </div>
      <!-- 卡片内容 -->
      <div class="card-content">
        <!-- 卡片标题 -->
        <h3 :class="['card-title', {'animated-bg': isShowLoading}, {'animated-bg-text': isShowLoading}]">
          <template v-if="!isShowLoading">
            {{ cardObject.cardTitle }}
          </template>
        </h3>
        <!-- 卡片信息 -->
        <p class="card-message">
          <template v-if="isShowLoading">
            <span :class="[{'animated-bg': isShowLoading}, {'animated-bg-text': isShowLoading}]"></span>
            <span :class="[{'animated-bg': isShowLoading}, {'animated-bg-text': isShowLoading}]"></span>
            <span :class="[{'animated-bg': isShowLoading}, {'animated-bg-text': isShowLoading}]"></span>
          </template>
          <span v-else v-html="cardObject.cardMessage"></span>
        </p>

        <!-- 卡片作者 -->
        <div class="card-author">
          <!-- 头像 -->
          <div :class="['card-author-avatar', {'animated-bg': isShowLoading}]">
            <img v-show="!isShowLoading" alt="图片加载中" :src="cardObject.cardAuthorAvatar"/>
          </div>
          <!-- 信息 -->
          <div class="card-author-info">
            <strong :class="['card-author-name', {'animated-bg': isShowLoading}, {'animated-bg-text': isShowLoading}]">
              <template v-if="!isShowLoading">
                {{ cardObject.cardAuthorName }}
              </template>
            </strong>
            <small :class="['card-author-date', {'animated-bg': isShowLoading}, {'animated-bg-text': isShowLoading}]">
              <template v-if="!isShowLoading">
                {{ cardObject.cardAuthorDate }}
              </template>
            </small>
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
      cardObject: {
        cardHeader: require('./header.png'),
        cardTitle: '草帽小子',
        cardAuthorAvatar: require('./avatar.png'),
        cardAuthorName: '蒙奇·D·路飞',
        cardAuthorDate: '2023-08-10',
        cardMessage: '外号“草帽”路飞，是草帽一伙、草帽大船团船长，极恶的世代之一。' +
            '橡胶果实能力者，悬赏金 <span class="mask">15</span> 亿贝里。' +
            '梦想是找到传说中的 <span class="mask">One Piece</span>，成为海贼王。'
      },
      isShowLoading: true
    }
  },
  mounted() {
    // 延时器
    setTimeout(this.initCardHTML, 2000)
  },
  methods: {
    initCardHTML() {
      this.isShowLoading = false
    }
  }
};

</script>

<style lang="less" scoped>
.main-24 {
  height: 100%;
  /* 水平垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

img {
  max-width: 100%;
}

/* 特殊标签的样式[穿透 scoped 样式] */
/deep/ .mask {
  color: #cf2626;
  padding: 2px 5px;
  background-color: transparent;
}

/* 卡片盒子 */
.card {
  width: 350px;
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
}

/* 卡片头部 */
.card > .card-header {
  height: 180px;
}

/* 图片 */
.card > .card-header > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* 卡片内容 */
.card > .card-content {
  padding: 25px;
  background-color: #ffffff;
}

/* 卡片标题 */
.card > .card-content > .card-title {
  height: 35px;
  color: #3e3e3f;
}

/* 卡片信息 */
.card > .card-content > .card-message {
  color: #464646;
  margin: 10px 0 20px;
  line-height: 1.5;
}

/* 卡片作者 */
.card > .card-content > .card-author {
  display: flex;
  align-items: center;
}

/* 卡片作者-头像 */
.card > .card-content > .card-author > .card-author-avatar {
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
}

/* 卡片作者-触摸头像 */
.card > .card-content > .card-author > .card-author-avatar:hover {
  /* 666turn 表示旋转角度为 666 倍的完整圆（即 666 圈） */
  transform: rotate(666turn);
  /* 延迟时间 */
  transition-delay: 0.5s;
  transition-property: all;
  transition-duration: 59s;
  /* 速度曲线 */
  transition-timing-function: cubic-bezier(.34, 0, .84, 1);
}

/* 卡片作者-信息 */
.card > .card-content > .card-author > .card-author-info {
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-left: 15px;
  flex-direction: column;
}

/* 卡片作者-信息-作者名称 */
.card > .card-content > .card-author > .card-author-info > .card-author-name {
  color: #696969;
}

/* 卡片作者-信息-日期 */
.card > .card-content > .card-author > .card-author-info > .card-author-date {
  color: #a5a4a4;
  margin-top: 5px;
}

/* 背景加载动画 */
.animated-bg {
  background-image: linear-gradient(to right, #edeeee, #c2c5c2, #aaa9aa, #7d7d7e);
  background-size: 200% 100%;
  animation: bgPos 1.5s linear infinite;
}

/* 文本加载动画 */
.animated-bg-text {
  border-radius: 50px;
  display: inline-block;
  width: 100%;
  height: 10px;
}

@keyframes bgPos {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}
</style>
