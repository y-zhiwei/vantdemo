
 module.exports = {
    // 配置要使用的 PostCSS 插件
    plugins: {
      'postcss-pxtorem': {
        rootValue ({ file }) {
          return file.indexOf('vant') !== -1 ? 37.5 : 37.5
        },
        propList: ['*']
      }
    }
}