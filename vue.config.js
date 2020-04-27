module.exports = {
  publicPath: '/',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },

  // devServer: {
  //   // proxy: 'http://127.0.0.1:8000/api/v1/',
  //   proxy:{'**': process.env.VUE_APP_BASE_URL}
  //   // proxy: process.env.VUE_APP_BASE_URL,
  // }
  
}

