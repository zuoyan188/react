var path = require('path');

module.exports = {
  entry: "./app/main.js",//已多次提及的唯一入口文件
  
  output: {
    path: path.resolve(__dirname, 'build'),//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },

    module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015','react']
          }
        }]
    },

  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
}