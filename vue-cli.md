1. 初始化
  npm init 或 yarn init

  创建入口文件(index.js)

  创建页面(index.html)

2. webpack
  项目构建依赖webpack
  npm i webpack webpack-cli -D (webpack 将文件编译打包到内存，将打包文件放入本地(本地手动刷新))
  npm i html-webpack-plugin -D
  npm i webpack-dev-server -D (能够实时更新页面)(webpack-dev-server 将文件编译打包到内存，将打包文件放到内存(自动刷新))
  npm install -D babel-loader @babel/core @babel/preset-env 解析es6 语法
  npm install -D style-loader css-loader 解析css 并添加到html

  webpack5
  {
    // file-loader 和url-loader 替换成模块asset/resource asset/inline(资源变为base64)
    // asset (resource 和inline 通过设置文件大小来判断是哪种来选择)
    // (处理样式的图片链接)
    test: /\.(png|jpg|gif)$/,
    type: 'asset',
    parser: {
      dataUrlCondition: { // asset 的转化条件 小于为inline
        maxSize: 8 * 1024 // 8kb
      }
    },
    generator: {
      filename: 'images/[hash:5][ext][query]'
    }
  } 

  ES6 export default / import
  CommonJS module.exports / exports / require 