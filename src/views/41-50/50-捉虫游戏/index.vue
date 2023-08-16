<template>
  <div class="main-50">
    <!-- 中英文切换按钮 -->
    <div id="tab-container" class="tab-container">
      <div data-value="en" :class="['tab-item',{'active':currentLang=='en'}]"
           @click="langSwitch('en')">英文
      </div>
      <div data-value="zh" :class="['tab-item',{'active':currentLang=='zh'}]"
           @click="langSwitch('zh')">中文
      </div>
    </div>

    <!-- 第一屏-开始页面 -->
    <div :class="['screen',{'up':currentScreen>=1}]">
      <h1 id="text-first">捉虫</h1>
      <button class="btn" id="start-btn" @click="startBtn">开始游戏</button>
    </div>

    <!-- 第二屏-昆虫选择页面 -->
    <div :class="['screen',{'up':currentScreen>=2}]">
      <h1 id="text-second">哪个是你最喜欢的虫子</h1>
      <ul class="insects-list">
        <li v-for='(item,index) in insectImgArr' :key="index">
          <button class="choose-insect-btn" @click="selectInsect(index)">
            <p>{{ item.text }}</p>
            <img :src="item.imgPath" :alt="item.text">
          </button>
        </li>
      </ul>
    </div>

    <!-- 第三屏-游戏界面 -->
    <div class="screen game-container" id="game-container">
      <!-- 统计文本 -->
      <h3 id="time" class="time"><span id="text-time">时间：</span><span>{{ showData.time }}</span></h3>
      <h3 id="score" class="score"><span id="text-score">分数：</span><span>{{ showData.score }}</span></h3>

      <!-- 提示框 -->
      <div id="mask" :class="{'cover':isShowMsg}"></div>
      <h5 id="message" :class="['message',{'visible':isShowMsg}]">
        <p id="text-message">你会不会生气呢?<br/>其实你在玩一个永远都不结束的游戏!!</p>
        <div>
          <button class="btn continue-btn" id="continue" @click="continueGame">继续玩</button>
          <button class="btn restart-btn" id="restart" onclick="location.reload()">重新玩</button>
        </div>
      </h5>

      <!-- 创建昆虫 -->
      <div v-for='(item,index) in insectDivArr' :key="index"
           @click="catchInsect(index,$event)"
           class="insect" :style="`top:${item.top};left:${item.left};`">
        <img :src='item.imgSrc'
             :alt='item.imgAlt'
             :style='`transform: rotate(${item.rotate});`'>
      </div>
    </div>
  </div>
</template>

<script>
import {globalData} from './data.js'

export default {
  data() {
    return {
      // 当前语言
      currentLang: 'zh',
      // 当前屏幕
      currentScreen: 0,
      // 当前选中的昆虫
      currentIndex: 0,
      // 显示的数据
      showData: {
        time: '00:00',
        score: 0
      },
      // 游戏时间
      seconds: 0,
      // 时间定时器
      timer: null,
      // 是否显示消息框
      isShowMsg: false,
      // 昆虫数组
      insectDivArr: [],
      // 昆虫图片资源
      insectImgArr: [
        {
          imgPath: require('./img/苍蝇.png'),
          text: '苍蝇'
        }, {
          imgPath: require('./img/蚊子.png'),
          text: '蚊子'
        }, {
          imgPath: require('./img/蜘蛛.png'),
          text: '蜘蛛'
        }, {
          imgPath: require('./img/蟑螂.png'),
          text: '蟑螂'
        }
      ]
    }
  },
  created() {
    console.log(globalData)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    langSwitch(type = 'zh') {
      this.currentLang = type
      this.initLangText()
    },
    startBtn() {
      this.currentScreen = 1
    },
    selectInsect(index) {
      this.currentIndex = index
      this.currentScreen = 2
      // 创建昆虫
      this.createInset()
      // 开启时间计数器
      this.starGame()
    },
    // 开始游戏
    starGame() {
      this.timer = setInterval(this.increaseTime, 1000)
    },
    // 时间计数器
    increaseTime() {
      //  Math.floor(x) 向下取整  5.9=5 5.2=5
      // 小于等于 x 的最大整数
      let m = Math.floor(this.seconds / 60)

      // % 取余 / 除号
      let s = this.seconds % 60

      // 三元运算符
      m = m < 10 ? `0${m}` : m
      s = s < 10 ? `0${s}` : s
      // console.log(timeEl.childNodes[1])
      this.showData.time = `${m}:${s}`
      this.seconds++
    },
    // 创建昆虫
    createInset() {
      // 获得昆虫的位置
      const {x, y} = this.getRandomLocation()
      this.insectDivArr.push({
        top: y + 'px',
        left: x + 'px',
        imgSrc: this.insectImgArr[this.currentIndex].imgPath,
        imgAlt: this.insectImgArr[this.currentIndex].text,
        rotate: `${Math.random() * 360}deg`
      })
    },
    // 获取随机的昆虫位置
    getRandomLocation() {
      // 获取屏幕的宽高
      const width = window.innerWidth
      const height = window.innerHeight

      // 昆虫显示的区域
      const x = Math.random() * (width - 200) + 100
      const y = Math.random() * (height - 200) + 100
      // console.log(x, y)

      return {x, y}
    },
    // 捕捉昆虫
    catchInsect(index, e) {
      console.log(e.target)
      let currentDiv = null
      if (e.target.nodeName == "IMG") {
        currentDiv = e.target.parentNode
      } else if (e.target.nodeName == "DIV") {
        currentDiv = e.target
      }
      this.addScore()
      currentDiv.classList.add('caught')
      setTimeout(() => {
        currentDiv.remove()
        // this.insectDivArr.splice(index, 1)
      }, 1000)
      this.addInsects()
    },
    // 分数计数器
    addScore() {
      this.showData.score++
      // 达到指定分数，显示游戏提示
      if (this.showData.score == 5) {
        this.isShowMsg = true
        if (this.timer) {
          clearInterval(this.timer)
        }
      }
    },
    // 添加昆虫
    addInsects() {
      setTimeout(this.createInset, 1000)
      setTimeout(this.createInset, 1500)
    },
    // 继续游戏
    continueGame() {
      this.isShowMsg = false
      this.starGame()
    },
    // 初始化语言
    initLangText() {
      const initData = globalData[this.currentLang]
      const needReplaceTexts = [
        {
          node: document.getElementById('text-time'),
          data: initData.countTime,
        },
        {
          node: document.getElementById('text-score'),
          data: initData.score,
        },
        {
          node: document.getElementById('text-message'),
          data: initData.message,
        },
        {
          node: document.getElementById('text-first'),
          data: initData.firstTitle,
        },
        {
          node: document.getElementById('text-second'),
          data: initData.secondTitle,
        },
        {
          node: document.getElementById('start-btn'),
          data: initData.playText,
        },
        {
          node: document.getElementById('continue'),
          data: initData.continueText,
        },
        {
          node: document.getElementById('restart'),
          data: initData.restartPlayText,
        }
      ]
      const tabItems = document.querySelectorAll('.tab-container .tab-item')
      // 按钮中英文切换
      tabItems.forEach((item) => {
        const attr = item.getAttribute('data-value')
        item.textContent = initData[attr]
      })
      // 页面文本中英文切换
      needReplaceTexts.forEach((item) => (item.node.innerText = item.data))
      // 图片标题
      document.querySelectorAll('.insects-list li').forEach((item, index) => {
        // console.log(item.children[0].children[0])
        const content = item.children[0].children[0]
        content.innerText = initData.insectNameList[index]
      })
      // 标题
      document.title = initData.documentTitle
    }
  }
};

</script>

<style lang="less" scoped>
.main-50 {
  height: 100%;
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

h1 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.4;
}

.btn {
  background: linear-gradient(135deg, #dfe0e2 10%, #f6f7f7 90%);
  outline: none;
  border-radius: 8px;
  padding: .8rem 4rem;
  color: #2396ef;
  display: inline-block;
  border: 1px solid transparent;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 18px;
}

.btn:hover {
  opacity: 0.9;
}

.btn:focus {
  outline: 0;
}

/* 页面 */
.screen {
  /* 占满一个屏幕 */
  height: 100vh;
  width: 100vw;
  /* 水平垂直居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: margin 0.5s ease-out;
}

/* 向上滑动 */
.screen.up {
  margin-top: -100vh;
}

/* 昆虫选择列表 */
.insects-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
}

.insects-list li {
  margin: 10px;
}

.choose-insect-btn {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  cursor: pointer;
  width: 150px;
  height: 150px;
}

/* 选择按钮 */
.choose-insect-btn:hover {
  background-color: #fff;
  color: #516dff;
}


.choose-insect-btn:active {
  background-color: rgba(255, 255, 255, 0.7);
}

/* 昆虫图片 */
.choose-insect-btn img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

/* 游戏界面 */
.game-container {
  position: relative;
}

/* 时间与分数 */
.time,
.score {
  position: absolute;
  top: 20px;
}

.time {
  left: 20px;
}

.score {
  right: 20px;
}

/* 消息提示 */
.message {
  transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: linear-gradient(to bottom, rgba(0, 0, 0, .4) 10%, rgba(0, 0, 0, .6) 90%);
  width: 100%;
  max-width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 2rem;
  border-radius: 15px;
  line-height: 2;
  opacity: 0;
  z-index: 100;
  display: none;
  font-size: 20px;
  color: #fff;
}

.cover {
  position: fixed;
  z-index: 99;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.message.visible {
  transform: translate(-50%, -50%);
  opacity: 1;
  display: block;
}

.message div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.message .continue-btn {
  margin: 0.7rem 0;
}

/* 随机的昆虫 */
.insect {
  cursor: pointer;
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  position: absolute;
  /* 按照中心位置进行显示 */
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.3s ease-in-out;
}

.insect img {
  width: 100px;
  height: 100px;
}

.insect.caught {
  transform: translate(-50%, -50%) scale(0);
}

/* 中英文切换按钮 */
.tab-container {
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  z-index: 99;
}

.tab-container .tab-item {
  padding: .6rem 1rem;
  background: linear-gradient(135deg, #f1f1f1 10%, #ffffff 90%);
  color: #2396ef;
  cursor: pointer;
}

.tab-container .tab-item:hover,
.tab-container .tab-item.active {
  background: linear-gradient(135deg, #6a92e9 10%, #2b11c4 90%);
  color: #fff;
}

.tab-container .tab-item:first-of-type {
  border-radius: 4px 0 0 4px;
}

.tab-container .tab-item:last-of-type {
  border-radius: 0 4px 4px 0;
}
</style>
