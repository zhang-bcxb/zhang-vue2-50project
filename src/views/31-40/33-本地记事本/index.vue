<template>
  <div class="main-33">
    <!-- 记事本面板（需要动态创建） -->
    <div class="note" v-for="(item,index) in notes" :key="index">
      <div class="tools">
        <button class="edit" @click="editNote(index)"><i class="fas fa-edit"></i></button>
        <button class="delete" @click="deleteNote(index)"><i class="fas fa-trash-alt"></i></button>
      </div>
      <!-- 有文本就进行显示文本域 -->
      <div :class="['main',{'hidden':item.isShowText}]" v-html="mdToHtml(item.text)"></div>
      <textarea :class="{'hidden':!item.isShowText}" v-model="item.text"></textarea>
    </div>

    <!-- 添加记事本面板按钮 -->
    <button class="add" id="add" @click="addNewNote">
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 是否显示文本域
      // isShowText: true,
      // 笔记本数组
      notes: JSON.parse(window.localStorage.getItem("notes") || "[]")
    }
  },
  // 监听属性
  watch: {
    // 每次数据更新，都会进行数据持久化
    notes: {
      // 深度监听
      deep: true,
      handler(value) {
        // console.log(value)
        window.localStorage.setItem("notes", JSON.stringify(value))
      }
    }
  },
  methods: {
    addNewNote() {
      // 添加记事本
      this.notes.push({text: '', isShowText: true})
    },
    deleteNote(index) {
      // 删除点击的记事本
      this.notes.splice(index, 1)
    },
    editNote(index) {
      // 切换文本域
      this.notes[index].isShowText = !this.notes[index].isShowText
    },
    // 将 MD 转 HTML
    mdToHtml(text) {
      // 返回 html 字符串
      return marked(text)
    }
  }
};

</script>

<style lang="less" scoped>
.main-33 {
  /* 水平排列 & 支持换行 */
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding-top: 3rem;
}

* {
  box-sizing: border-box;
  outline: none;
}

/* 添加记事本按钮 */
.add {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: #9ec862;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

/* 触摸做的效果 */
.add:active {
  transform: scale(1.2);
}

/* 记事本 */
.note {
  background-color: #fff;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
  margin: 30px 20px;
  height: 400px;
  width: 400px;
  overflow-x: hidden;
  overflow-y: auto;
}

/* 工具栏 */
.note .tools {
  background-color: #9ec862;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
}

.note .tools button {
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 0.5rem;
}

/* 文本域 */
.note textarea {
  outline: none;
  font-size: 1.2rem;
  border: none;
  height: 400px;
  width: 100%;
  padding: 20px;
}

/* 内容区域 */
.main {
  padding: 20px;
  color: #9ec862;
}

.main p {
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}

/* 隐藏 */
.hidden {
  display: none;
}
</style>
