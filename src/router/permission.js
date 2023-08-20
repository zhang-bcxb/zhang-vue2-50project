import router from "./index.js"

import NProgress from 'nprogress'

router.beforeEach((to, from, next) => {
  //每次切换页面时，调用进度条
  NProgress.start();

  // 设置页面标题
  let title = (to.meta.title ? to.meta.title : "") + "-Vue2 版本的 50 个案例"
  document.title = title

  // 这个一定要加，没有next()页面不会跳转的
  next();
});
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})
