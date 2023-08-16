<template>
  <div class="main-43">
    <div class="panel-container" id="panel">
      <template v-if="isShowFeel">
        <strong>反馈意见，选择你的心情</strong>
        <!-- active 表示选中状态 -->
        <div class="ratings-container" @click="feelSelect">
          <div :data-index="index" :class="['rating',{'active':index==currentIndex}]"
               v-for='(item,index) in feelData' :key="index">
            <img :src="item.imgUrl" alt="">
            <small>{{ item.text }}</small>
          </div>
        </div>
        <!-- 提交按钮 -->
        <button class="btn" @click="isShowFeel=false">发送心情状态</button>
      </template>
      <template v-else>
        <i class="fas fa-heart"></i>
        <strong>谢谢反馈！</strong>
        <br>
        <strong>你的心情：{{ feelData[currentIndex].text }}</strong>
        <p>我们感谢你的反馈</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feelData: [
        {
          imgUrl: require('./img/悲伤.png'),
          text: '悲伤'
        }, {
          imgUrl: require('./img/一般.png'),
          text: '一般'
        }, {
          imgUrl: require('./img/开心.png'),
          text: '开心'
        }
      ],
      // 当前选中
      currentIndex: 2,
      // 显示心情
      isShowFeel: true
    }
  },
  methods: {
    // 给父盒子绑定事件，click 有冒泡机制，这个用到了事件委托机制
    feelSelect(e) {
      console.log(e.target)
      // console.log(e.target.nodeName)

      if (e.target.nodeName === 'DIV') {
        // console.log(e.target.dataset.index)
        this.currentIndex = e.target.dataset.index
      } else if (e.target.nodeName === 'IMG' || e.target.nodeName === 'SMALL') {
        // console.log(e.target.parentNode.dataset.index)
        this.currentIndex = e.target.parentNode.dataset.index
      }
    }
  }
};

</script>

<style lang="less" scoped>
.main-43 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 问题面板 */
.panel-container {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  font-size: 90%;
  /* 水平垂直居中 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  max-width: 400px;
}

/* 强调标签，文字垂直居中 */
.panel-container strong {
  line-height: 20px;
}

/* 表情大盒子 */
.ratings-container {
  /* 子盒子水平排列 */
  display: flex;
  margin: 20px 0;
}

/* 表情盒子 */
.rating {
  flex: 1;
  cursor: pointer;
  padding: 20px;
  margin: 10px 5px;
}

/* 盒子选中或者盒子被触摸 */
.rating:hover,
.rating.active {
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* 表情提示 */
.rating small {
  color: #555;
  display: inline-block;
  margin: 10px 0 0;
}

.rating:hover small,
.rating.active small {
  color: #111;
}

/* 提交按钮 */
.btn {
  background-color: #302d2b;
  color: #fff;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  padding: 5px;
}

.btn:focus {
  outline: 0;
}

.btn.active {
  transform: scale(0.98);
}

.fa-heart {
  color: red;
  font-size: 30px;
  margin-bottom: 10px;
}
</style>
