<template>
  <div class="menu-main">
    <ul class="menus">
      <li class="li" v-for='(item1,index1) in allData' :key="index1">
        <i class="fa fa-th-large" aria-hidden="true"></i>
        案例 {{ indexArr[index1] }}
        <ul>
          <li v-for='(item2,index2) in item1' :key="index2">
            <router-link :to="item2.projectPath">{{ item2.projectName }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
// 导入数据
import data from '../../assets/data/50.json'

export default {
  name: 'Menu',
  data() {
    return {
      allData: data,
      indexArr: ["01-10", "11-20", "21-30", "31-40", "41-50"]
    }
  }
}
</script>

<style scoped lang="less">
.menu-main {
  /* 固定定位 */
  position: fixed;
  width: 300px;
  height: 100vh;
  background-color: #c584b3;
}

.menus {
  margin: 50px 0 50px -50px;
  color: #fff;
}

.li {
  letter-spacing: 2px;
  font-size: 17px;
  font-weight: 600;
  padding: 16px 0;
  /* 动画过渡 */
  transition: 0.3s;
}

.menus li:hover {
  background-color: #d2a6c6;
}

.li .fa {
  font-size: 20px;
  width: 50px;
  height: 20px;
  text-align: center;
  margin-left: 5px;
}

.li ul {
  // 隐藏
  width: 0;
  height: 100%;
  padding: 50px 0;
  background-color: #a06993;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  transition: 0.3s;
}

.li ul li {
  padding: 16px 24px;
  /* 文字禁止换行 */
  white-space: nowrap;
  transition: 0.3s;
}

// 显示
.li:hover ul {
  width: 250px;
}

.li ul li:hover {
  background-color: #c28fb4;
}
</style>
