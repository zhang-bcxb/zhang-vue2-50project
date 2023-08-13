<template>
  <div class="main">
    <!-- 屏幕 -->
    <div :class="['container',isAnimation?'container-animation':'']"
         :style="`top:${(-currentIndex)*viewHeight}px;`">
      <div class="section" v-for="(item,index) in sectionNum" :key="index"
           :style="`width:${viewWidth}px;height:${viewHeight}px;background-color:${sectionColorArr[index]};`">
        <Card v-show="index==currentIndex" v-for="(cItem,idx) in allData[index]" :key="idx"
              style="margin: 5px 10px;" :card-item="cItem"></Card>
      </div>
    </div>

    <!-- 侧边按钮 -->
    <ul class="controls">
      <li v-for="(item,index) in sectionNum" :key="index"
          @click="changeLi(index)"
          :class="[index==currentIndex?'active':'']"></li>
    </ul>
  </div>
</template>

<script>
// 导入数据
import data from '../../assets/data/50.json'
// 导入组件
import Card from "./card.vue";

export default {
  data() {
    return {
      // 卡片的所有数据
      allData: data,
      // 当前显示的索引
      currentIndex: JSON.parse(window.localStorage.getItem("currentIndex")) || 0,
      // 屏幕数量
      sectionNum: 5,
      // 屏幕颜色数组
      sectionColorArr: ['rebeccapurple', 'skyblue', 'firebrick', 'orange', 'rosybrown'],
      // 可视宽高
      viewWidth: document.body.clientWidth,
      viewHeight: document.body.clientHeight,
      // 检测是否在滚动
      roll: false,
      // 是否添加容器动画
      isAnimation: false
    }
  },
  // 注册组件
  components: {
    Card
  },
  // 监听属性
  watch: {
    // 每次数据更新，都会进行数据持久化
    currentIndex: {
      // 深度监听
      deep: true,
      handler(value) {
        window.localStorage.setItem("currentIndex", JSON.stringify(value))
      }
    }
  },
  methods: {
    // 窗体改动事件
    getWindowInfo() {
      // 获取屏幕宽度
      this.viewWidth = document.body.clientWidth
      // 获取屏幕高度
      this.viewHeight = document.body.clientHeight
    },
    // 滚动视图
    rollScenes() {
      // 滚动屏幕,添加动画
      this.isAnimation = true

      // 更改状态
      setTimeout(() => {
        this.roll = false
        this.isAnimation = false
      }, 500)
    },
    // 点击导航栏
    changeLi(index) {
      this.currentIndex = index
      this.rollScenes()
    },
    // 鼠标滚动事件
    mousewheel(e) {
      // 判断是否在滚动
      if (!this.roll) {
        this.roll = true

        // 判断向上滚动还是向下滚动
        if (e.wheelDelta > 0 && this.currentIndex > 0) {
          // 向上滚动
          this.currentIndex--
        } else if (e.wheelDelta < 0 && this.currentIndex < this.sectionNum - 1) {
          // 向下滚动
          this.currentIndex++
        }
        this.rollScenes()
      }
    }
  },
  created() {
    // 修改 body 的溢出隐藏，不要滚动条
    document.body.style.overflow = 'hidden'
    // 添加窗体改动事件
    window.addEventListener('resize', this.getWindowInfo)
    // 添加鼠标滚动监听
    document.addEventListener('mousewheel', this.mousewheel)
  },
  mounted() {
    this.getWindowInfo(this)
  },
  destroyed() {
    // 卸载组件的时候，移除事件
    window.removeEventListener('resize', this.getWindowInfo)
    document.removeEventListener('mousewheel', this.mousewheel)
  }
};

</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* 屏幕样式 */
.container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
}

/* 屏幕动画 */
.container-animation {
  transition: all 0.5s ease;
}

/* 屏幕 */
.section {
  width: 100%;
  height: auto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

/* 侧边按钮样式 */
.controls {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  list-style: none;
}

.controls li {
  width: 12px;
  height: 12px;
  border: 1px solid white;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.5s;
}

.controls li {
  margin-top: 16px;
}

.controls li.active {
  background-color: #fff;
}
</style>
