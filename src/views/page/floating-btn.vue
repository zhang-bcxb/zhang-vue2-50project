<template>
  <div class="main-btn">
    <!--引导按钮-->
    <button class="floating-btn" @click="()=>{isShow=!isShow}">
      关联按钮
    </button>

    <!-- SOCIAL PANEL HTML -->
    <div :class="['social-panel-container', isShow?'visible':'']">
      <div class="social-panel">
        <p>
          创建人<a target="_blank" href="https://github.com/zhang-bcxb/zhang-vue2-50project">编程细胞</a>
        </p>
        <button class="close-btn" @click="()=>{isShow=false}">X</button>
        <h4>页面关联按钮</h4>
        <ul>
          <li>
            <a href="javascript:;" target="_self" @click="()=>{$emit('switchMenu', isShowMenu=!isShowMenu);}">菜单</a>
          </li>
          <li>
            <a href="#/main" target="_self">首页</a>
          </li>
          <li>
            <a href="javascript:;" @click="contactMe()" target="_self">联系</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 是否显示菜单
      isShowMenu: false,
      // 是否显示提示框
      isShow: false
    }
  },
  // 接收父组件传递给子组件的数据
  props: {},
  methods: {
    contactMe() {
      let qq = [
        {
          upName: '山羊の前端小窝',
          upUrl: 'https://space.bilibili.com/266664645',
          name: '山羊圈交流群',
          number: '347632328',
        },
        {
          upName: 'KSaMar',
          upUrl: 'https://space.bilibili.com/51110915',
          name: 'Web 技术交流群',
          number: '854197159',
        },
        {
          upName: '乔木真言',
          upUrl: 'https://space.bilibili.com/688238053',
          name: '乔木网络交流群',
          number: '828789351',
        },
        {
          upName: '哆啦niko',
          upUrl: 'https://space.bilibili.com/794739',
          name: '哆啦A梦的口袋',
          number: '688781129',
        },
      ]

      let html = '<ul style="width:50%;margin:0 auto;">'
      qq.forEach((item) => {
        html += `<li class='li-qq'>
        <div class='up'><a href="${item.upUrl}" target="_blank" style="color:#fff;">up 主：${item.upName}</a></div>
        <div class='qq'><span>${item.name}：</span><span>${item.number}</span></div>
        </li>`
      })

      html += '</ul>'

      Swal.fire({
        title: '<strong>学习交流群</strong>',
        icon: 'info',
        html: html,
        footer: '<a href="https://space.bilibili.com/337439992" target="_blank">我的B站空间</a>',
        showCloseButton: true,
      })
    }
  },
  created() {
  },
  mounted() {
  }
};

</script>

<style lang="less" scoped>
.main-btn {

}

/* SOCIAL PANEL CSS */
.social-panel-container {
  position: fixed;
  right: 0;
  bottom: 80px;
  transform: translateX(100%);
  transition: transform 0.4s ease-in-out;
}

.social-panel-container.visible {
  transform: translateX(-10px);
}

.social-panel {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 16px 31px -17px rgba(0, 31, 97, 0.6);
  border: 5px solid #001f61;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Muli";
  position: relative;
  height: 169px;
  width: 370px;
  max-width: calc(100% - 10px);
}

.social-panel button.close-btn {
  border: 0;
  color: #97a5ce;
  cursor: pointer;
  font-size: 20px;
  line-height: 0;
  height: auto;
  padding: 0;
  position: absolute;
  top: 12px;
  right: 5px;
}

.social-panel button.close-btn:focus {
  outline: none;
}

.social-panel p {
  background-color: #001f61;
  border-radius: 0 0 10px 10px;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  padding: 2px 17px 6px;
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0;
  transform: translateX(-50%);
  text-align: center;
  width: 235px;
}

.social-panel p i {
  margin: 0 5px;
}

.social-panel p a {
  color: #ff7500;
  text-decoration: none;
}

.social-panel h4 {
  margin: 20px 0;
  color: #97a5ce;
  font-family: "Muli";
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
}

.social-panel ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.social-panel ul li {
  margin: 0 10px;
}

.social-panel ul li a {
  border: 1px solid #dce1f2;
  border-radius: 50%;
  color: #001f61;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  text-decoration: none;
}

.social-panel ul li a:hover {
  border-color: #ff6a00;
  box-shadow: 0 9px 12px -9px #ff6a00;
}

.floating-btn {
  border-radius: 26.5px;
  background-color: #001f61;
  border: 1px solid #001f61;
  box-shadow: 0 16px 22px -17px #03153b;
  color: #fff;
  cursor: pointer;
  font-family: "Muli";
  font-size: 16px;
  line-height: 20px;
  height: auto;
  padding: 12px 20px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  text-transform: none;
}

button.floating-btn:focus {
  color: white;
  outline: none;
}

button.floating-btn:hover {
  background-color: #ffffff;
  color: #001f61;
}

.floating-text {
  background-color: #001f61;
  border-radius: 10px 10px 0 0;
  color: #fff;
  font-family: "Muli";
  padding: 7px 15px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.floating-text a {
  color: #ff7500;
  text-decoration: none;
}

/* 弹出框提示 */
.li-qq {
  position: relative;
  margin-top: 20px;
}

.qq {
  display: flex;
  justify-content: space-between;
}

.up {
  position: absolute;
  z-index: 99;
  top: 0px;
  padding: 12px 24px;
  border-radius: 30px;
  color: #fff;
  background-color: #fd79a8;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  /* 默认隐藏 */
  opacity: 0;
  /* 知识点：贝塞尔曲线，让动画变得顺畅有节奏 */
  transition: 0.5s cubic-bezier(.18, 1.09, .77, 1.33);
  /* 知识点：不响应鼠标事件 */
  /* pointer-events: none; */
  font-size: 14px;
}


/* 制作消息框的下方小三角 */
.up::before {
  content: '';
  /* 神奇的操作 */
  position: absolute;
  width: 15px;
  height: 15px;
  bottom: -7px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  background-color: #fd79a8;
}

.up-show {
  opacity: 1;
  top: -50px;
}

.li-qq:hover .up {
  opacity: 1;
  top: -50px;
}
</style>
