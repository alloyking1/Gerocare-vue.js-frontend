module.exports = {
  publicPath: "/",
  transpileDependencies: ["vue-echarts", "resize-detector"],
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    }
  },
  
  // devServer:{
  //   // proxy: process.env.VUE_APP_BASE_URL
  //   proxy: 'http://api-dev.gerocare.org'
  // }
};
