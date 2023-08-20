import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
// 引入路由导航守卫
import "./router/permission.js"

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
