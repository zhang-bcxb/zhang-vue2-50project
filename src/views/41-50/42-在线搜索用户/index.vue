<template>
  <div class="main-42">
    <div class="container">

      <!-- 头部搜索框 -->
      <header class="header">
        <h4 class="title">在线搜索用户</h4>
        <small class="subtitle">搜索用户名或者位置信息</small>
        <input type="text" id="filter" placeholder="搜索">
      </header>

      <!-- 用户列表 -->
      <ul id="result" class="user-list">
        <li>
          <h3>加载中...</h3>
        </li>
      </ul>

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
.main-42 {
  /* 水平垂直居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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
