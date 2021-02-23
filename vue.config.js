// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: { javascriptEnabled: true }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://vueshop.glbuys.com',
        changeOrigin: true
      }
    }
  }
}
