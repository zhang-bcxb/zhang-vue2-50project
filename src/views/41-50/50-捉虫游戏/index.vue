<template>
  <div class="main-50">
    <!-- 中英文切换按钮 -->
    <div id="tab-container" class="tab-container">
      <div class="tab-item" data-value="en">英文</div>
      <div class="tab-item active" data-value="zh">中文</div>
    </div>

    <!-- 第一屏-开始页面 -->
    <div class="screen">
      <h1 id="text-first">捉虫</h1>
      <button class="btn" id="start-btn">开始游戏</button>
    </div>

    <!-- 第二屏-昆虫选择页面 -->
    <div class="screen">
      <h1 id="text-second">哪个是你最喜欢的虫子</h1>
      <ul class="insects-list">
        <li>
          <button class="choose-insect-btn">
            <p>苍蝇</p>
            <img src="img/苍蝇.png" alt="cy">
          </button>
        </li>
        <li>
          <button class="choose-insect-btn">
            <p>蚊子</p>
            <img src="img/蚊子.png" alt="wz">
          </button>
        </li>
        <li>
          <button class="choose-insect-btn">
            <p>蜘蛛</p>
            <img src="img/蜘蛛.png" alt="zz">
          </button>
        </li>
        <li>
          <button class="choose-insect-btn">
            <p>蟑螂</p>
            <img src="img/蟑螂.png" alt="zl">
          </button>
        </li>
      </ul>
    </div>

    <!-- 第三屏-游戏界面 -->
    <div class="screen game-container" id="game-container">
      <div id="mask"></div>
      <h3 id="time" class="time"><span id="text-time">时间：</span><span>00:00</span></h3>
      <h3 id="score" class="score"><span id="text-score">分数：</span><span>0</span></h3>
      <h5 id="message" class="message">
        <p id="text-message">你会不会生气呢?<br/>其实你在玩一个永远都不结束的游戏!!</p>
        <div>
          <button class="btn continue-btn" id="continue">继续玩</button>
          <button class="btn restart-btn" id="restart">重新玩</button>
        </div>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
  }
};

</script>

<style lang="less" scoped>
.main-50 {
  height: 100%;
  overflow: hidden;
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
  /* transform: rotate(90deg); */
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
