<template>
  <div class="main-42">
    <div class="container">

      <!-- 头部搜索框 -->
      <header class="header">
        <h4 class="title">在线搜索用户</h4>
        <small class="subtitle">搜索用户名或者位置信息</small>
        <input type="text" id="filter" placeholder="搜索"
               @input="searchData" v-model="searchVal" >
      </header>

      <!-- 用户列表 -->
      <ul id="result" class="user-list">
        <template v-if="listData.length<=0">
          <li>
            <h3>加载中...</h3>
          </li>
        </template>
        <template v-if="listData.length>0">
          <li v-show="!item.isHide" v-for='(item,index) in listData' :key="index">
            <img :src="item.picture.large" :alt="item.name.first">
            <div class="user-info">
              <h4>{{ item.name.first + "  " + item.name.last }}</h4>
              <p>{{ item.location.city + ", " + item.location.country }}</p>
            </div>
          </li>
        </template>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 列表数据
      listData: [],
      // 查找的字符串
      searchVal: ''
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // 获取数据
    async getData() {
      // Fetch API 提供了一个 JavaScript 接口，跨网络异步获取资源。
      const res = await fetch('https://randomuser.me/api?results=10')
      const {results} = await res.json()
      this.listData = results
    },
    // 查找数据（过滤数据）
    searchData() {
      this.listData.forEach((item) => {
        let str = item.name.first + item.name.last + item.location.city + item.location.country
        // 将搜索到的进行显示，没搜索到的进行隐藏
        // 将英文都转成小写，然后进行查找（模糊查询）
        if (str.toLowerCase().includes(this.searchVal.toLowerCase())) {
          // item.classList.remove('hide')
          item.isHide = false
        } else {
          // item.classList.add('hide')
          item.isHide = true
        }
      })
    }
  }
};

</script>

<style lang="less" scoped>
.main-42 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

* {
  box-sizing: border-box;
}

/* 大容器 */
.container {
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
}

/* 头部-标题 */
.title {
  margin: 0;
}

/* 子标题 */
.subtitle {
  display: inline-block;
  margin: 5px 0 20px;
  opacity: 0.8;
}

/* 头部 */
.header {
  background-color: #3e57db;
  color: #fff;
  padding: 30px 20px;
}

/* 输入框 */
.header input {
  background-color: rgba(0, 0, 0, 0.3);
  border: 0;
  border-radius: 50px;
  color: #fff;
  font-size: 14px;
  padding: 10px 15px;
  width: 100%;
}

.header input:focus {
  outline: none;
}

/* 用户列表 */
.user-list {
  background: #fff;
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 400px;
  overflow-y: auto;
}

/* 列表项 */
.user-list li {
  /* 子盒子水平排列 */
  display: flex;
  padding: 20px;
}

/* 头像 */
.user-list li img {
  border-radius: 50px;
  object-fit: cover;
  height: 50px;
  width: 50px;
}

/* 用户信息 */
.user-list .user-info {
  margin-left: 10px;
}

/* 用户名称 */
.user-list .user-info h4 {
  margin: 0 0 10px;
}

/* 用户地址 */
.user-list .user-info p {
  font-size: 12px;
}

/* 反选伪类，排除最后一个li */
.user-list li:not(:last-of-type) {
  border-bottom: 1px solid #eee;
}

.user-list li.hide {
  display: none;
}
</style>
