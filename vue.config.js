const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 默认为 ‘/’，打包的时候改成 ‘./’
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './'
})
