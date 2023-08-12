<template>
  <div class="main-09">
    <!--按钮盒子-->
    <div id="buttons">
      <button v-for='(item,index) in soundsArr' :key="index" class="btn"
              @click="startPlay(index)">{{ item.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      soundsArr: [
        {
          name: 'applause',
          audio: new Audio(require('./sounds/applause.mp3'))
        },
        {
          name: 'boo',
          audio: new Audio(require('./sounds/boo.mp3'))
        },
        {
          name: 'gasp',
          audio: new Audio(require('./sounds/gasp.mp3'))
        },
        {
          name: 'tada',
          audio: new Audio(require('./sounds/tada.mp3'))
        },
        {
          name: 'victory',
          audio: new Audio(require('./sounds/victory.mp3'))
        },
        {
          name: 'wrong',
          audio: new Audio(require('./sounds/wrong.mp3'))
        }
      ],
      // 记录上一次播放的音乐索引
      tempIndex: 0
    }
  },
  methods: {
    startPlay(index) {
      // console.log(index)
      // 停止播放上一次的音乐
      this.stopPlay()
      // 开始播放本次的音乐
      this.soundsArr[index].audio.play()
      // 记录索引
      this.tempIndex = index
    },
    stopPlay() {
      this.soundsArr[this.tempIndex].audio.pause()
      this.soundsArr[this.tempIndex].audio.currenTime = 0
      // this.soundsArr.forEach(item => {
      //   // 暂停播放
      //   item.audio.pause()
      //   // 修改当前播放的时间
      //   item.audio.currenTime = 0
      // })
    }
  }
};

</script>

<style lang="less" scoped>
.main-09 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
}

/* 按钮盒子 */
.btn {
  background-color: rebeccapurple;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin: 1rem;
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
  cursor: pointer;
}

/* 接触按钮，修改透明度 */
.btn:hover {
  opacity: 0.9;
}
</style>
