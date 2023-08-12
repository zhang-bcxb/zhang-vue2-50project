import data from '../assets/data/50.json'

// 固定不变的路由数组
export const initRouter = [
  // {
  //   path: '/',
  //   redirect: '/login', // 访问根路径的时候重定向到 login
  // }
]

// 处理项目路由
export const proRouterHandle = () => {
  /*{
  // path 不能包含中文
  path: '/01',
  // 懒加载组件
  component: () => import('../views/01-10/01-扩展卡片/index.vue')
}*/
  let proRouter = []
  let indexArr = ["01-10", "11-20", "21-30", "31-40", "41-50"]
  data.forEach((item1, index) => {
    item1.forEach((item2) => {
      proRouter.push({
        path: item2.projectPath,
        component: () => import(`../views/${indexArr[index]}/${item2.projectName}/index.vue`)
      })
    })
  })

  return proRouter
}


