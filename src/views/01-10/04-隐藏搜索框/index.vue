<template>
  <div class="main-04">
    <div :class="['search',isActive?'active':'']">
      <!--文本框-->
      <input ref="searchBox" type="text" class="input" placeholder="Search...">
      <!--搜索按钮-->
      <button class="btn" @click="btnClick">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    btnClick() {
      // 切换类名
      this.isActive = !this.isActive
      // 自动获取焦点
      if (this.isActive) {
        // 自动获取焦点
        this.$refs.searchBox.focus()
      } else {
        // 自动失去焦点
        this.$refs.searchBox.blur()
      }
    }
  }
};

</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}

.main-04 {
  /*渐变背景*/
  //background-image: linear-gradient(90deg, #7d5fff, #7158e2);
  /*水平垂直居中*/
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

/*搜索大盒子*/
.search {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*文本框*/
.search .input {
  background-color: #fff;
  border: 0;
  font-size: 18px;
  width: 0;
  opacity: 0;
  height: 50px;
  border-radius: 10px;
  transition: all 0.8s ease;

}

/* 搜索按钮 */
.btn {
  background-color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 24px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  transition: all 0.8s ease;
}

/* 搜索框被激活时，输入框宽度变大 */
.search.active .input {
  width: 300px;
  opacity: 1;
  padding: 15px;
  border-radius: 10px 0 0 10px;
}

/* 搜索框被激活时，按钮平移 */
.search.active .btn {
  border-radius: 0 10px 10px 0;
}
</style>
