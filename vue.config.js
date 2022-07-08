const path = require('path')

module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_URL]: {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_URL]: ''
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
