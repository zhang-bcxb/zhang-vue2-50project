<template>
  <div class="main-49">
    <!-- 标题 -->
    <h1>Todo List</h1>
    <form id="form">
      <!-- 自动完成允许浏览器预测对字段的输入。
        当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。
         autocomplete="off" 用于禁用浏览器自动完成功能
      -->
      <input type="text" class="input" id="input" placeholder="输入完成后回车" autocomplete="off">
      <!-- todo 项 -->
      <ul class="todos" id="todos"></ul>
    </form>
    <small>点击鼠标左键完成<br>点击鼠标右键删除</small>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  // 计算属性
  computed: {},
  // 监听属性
  watch: {},
  methods: {}
};

</script>

<style lang="less" scoped>

.main-49 {
  /* 水平垂直居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
}

/* 标题 */
h1 {
  color: rgb(179, 131, 226);
  font-size: 10rem;
  /* 文本居中 */
  text-align: center;
  opacity: 0.4;
}

/* 表单 */
form {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  width: 400px;
}

.input {
  border: none;
  color: #444;
  font-size: 2rem;
  padding: 1rem 2rem;
  display: block;
  width: 100%;
}

.input::placeholder {
  color: #d5d5d5;
}

.input:focus {
  outline-color: rgb(179, 131, 226);
}

/* 列表 */
.todos {
  background-color: #fff;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

/* 列表项 */
.todos li {
  border-top: 1px solid #e5e5e5;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem 2rem;
}

/* 完成样式 */
.todos li.completed {
  color: #b6b6b6;
  text-decoration: line-through;
}

small {
  color: rgb(179, 131, 226);
  font-size: 14px;
  font-weight: 400;
  margin-top: 3rem;
  text-align: center;
}
</style>
