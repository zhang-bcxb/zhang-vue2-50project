<template>
  <div class="main-12">
    <h1>这个问题你看看好不好看？</h1>
    <div class="faq-container">

      <div :class="['faq',index===currentIndex?'active':'']" v-for='(item,index) in questionArr' :key="index">
        <h3 class="faq-title">{{ item.title }}</h3>
        <p class="faq-text">{{ item.text }}</p>

        <!-- 切换按钮 -->
        <button class="faq-toggle" @click="currentIndex=index">
          <!--显示按钮【展开】-->
          <i class="fas fa-chevron-down"></i>
          <!--隐藏按钮【叉叉】-->
          <i class="fas fa-times"></i>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前显示问题的索引
      currentIndex: 0,
      // 问题数据
      questionArr: [
        {
          title: '你吃什么饭？',
          text: '米饭'
        },
        {
          title: '今天天气怎么样？',
          text: '天气晴朗'
        },
        {
          title: '你还在卷嘛？',
          text: '躺平'
        }
      ]
    }
  }
};

</script>

<style lang="less" scoped>
.main-12 {
  height: 100vh;
}

/* 标题 */
h1 {
  margin: 50px 0 30px;
  text-align: center;
}

/* 容器 */
.faq-container {
  max-width: 600px;
  /* 水平居中 */
  margin: 0 auto;
}

/* 问题卡片 */
.faq {
  background-color: transparent;
  border: 1px solid #9fa4a8;
  border-radius: 10px;
  margin: 20px 0;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;
}

/* 问题卡片展开 */
.faq.active {
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}

/* 两个聊天图标 */
.faq.active::before,
.faq.active::after {
  content: '\f075';
  font-family: 'Font Awesome 5 free';
  color: #2ecc71;
  font-size: 7rem;
  position: absolute;
  opacity: 0.2;
  top: 20px;
  left: 20px;
  z-index: 0;
}

.faq.active::before {
  color: #3498db;
  top: -10px;
  left: -30px;
  transform: rotateY(180deg);
}

/* 问题 */
.faq-title {
  margin: 0 35px 0 0;
}

/* 回复 */
.faq-text {
  display: none;
  margin: 30px 0 0;
}

/* 问题展开，显示回复 */
.faq.active .faq-text {
  display: block;
}

/* 切换按钮 */
.faq-toggle {
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  /* 绝对定位 */
  position: absolute;
  top: 30px;
  right: 30px;
  height: 30px;
  width: 30px;
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.faq-toggle:focus {
  outline: none;
}

/* 隐藏按钮 */
.faq-toggle .fa-times {
  display: none;
}

.faq.active .faq-toggle .fa-times {
  color: #fff;
  display: block;
}

/* 展开按钮 */
.faq.active .faq-toggle {
  background-color: #9fa4a8;
}

.faq.active .faq-toggle .fa-chevron-down {
  display: none;
}
</style>
