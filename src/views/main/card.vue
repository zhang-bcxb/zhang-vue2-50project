<template>
  <div class="main-card">
    <div class="card">
      <img :src="showData.imgSrc"/>
      <div>
        <h2>{{ showData.h2Text }}</h2>
        <h3 style="margin-top: 20px;">{{ showData.h3Text }}</h3>
        <a :href="showData.aHref">查看效果</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showData: {
        imgSrc: require('../../assets/img/01-扩展卡片.png'),
        h2Text: '第 1 个案例',
        h3Text: '密码长度改变图片模糊',
        aHref: '/01'
      }
    }
  },
  // 接收父组件的值
  props: {
    cardItem: {
      // 类型
      type: Object,
      // 默认值
      default: null
    }
  },
  methods: {
    dataHandle(data) {
      this.showData = {
        imgSrc: require('../../assets/img/' + data.projectImg),
        h2Text: `第 ${data.projectPath.slice(1)} 个案例`,
        h3Text: data.projectName,
        aHref: data.projectPath
      }
    }
  },
  created() {
    // console.log(this.cardItem)
    if (this.cardItem) {
      this.dataHandle(this.cardItem)
    }
  }
};

</script>

<style lang="less" scoped>
.main-card {
  width: 330px;
  height: 220px;
}

div.card {
  font-family: 'Raleway', Arial, sans-serif;
  color: #fff;
  position: relative;
  overflow: hidden;
  margin: 10px;
  width: 100%;
  height: 100%;
  background: #000000;
  text-align: center;
  border-radius: 15px;
}

div.card img {
  object-fit: cover;
  opacity: 1;
  width: 100%;
  height: 100%;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}


div.card div {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 3em 3em;
  width: 71%;
  height: 58%;
}

div.card div::before {
  position: absolute;
  top: 30px;
  right: 50%;
  bottom: 30px;
  left: 50%;
  border-left: 1px solid rgba(255, 255, 255, 0.8);
  border-right: 1px solid rgba(255, 255, 255, 0.8);
  content: '';
  opacity: 0;
  background-color: #ffffff;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}

div.card h2,
div.card h3,
div.card a {
  margin: 0 0 5px;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, -webkit-transform 0.35s, -moz-transform 0.35s, -o-transform 0.35s, transform 0.35s;
}

div.card h2 {
  font-size: 25px;
  word-spacing: -0.15em;
  font-weight: 300;
  text-transform: uppercase;
  -webkit-transform: translate3d(0%, 100%, 0);
  transform: translate3d(0%, 100%, 0);
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

div.card h3 {
  font-size: 18px;
  font-weight: 200;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

div.card a {
  left: 0;
  right: 0;
  top: 170px;
  bottom: 0;
  position: absolute;
  color: #ffffff;
  text-decoration: none;
}

div.card:hover img {
  opacity: 0.35;
}

div.card:hover div h2 {
  opacity: 1;
  -webkit-transform: translate3d(0%, 0%, 0);
  transform: translate3d(0%, 0%, 0);
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

div.card:hover div h3 {
  opacity: 0.8;
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}

div.card:hover div a {
  opacity: 1;
  -webkit-transform: translate3d(0%, 0%, 0);
  transform: translate3d(0%, 0%, 0);
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

div.card:hover div::before {
  background: rgba(255, 255, 255, 0);
  left: 30px;
  right: 30px;
  opacity: 1;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
</style>
