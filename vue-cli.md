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

  生产环境和开发环境区分
    生产： npm run build --- webpack 
          1. 内存编译打包，生成文件
          2. 保存本地 (不能直接访问，需要启动服务器)
    开发： npm run dev --- webpack-dev-server
          1. 内存编译打包，生成文件
          2. 启动服务器并打开浏览器 (通过浏览器虚拟路径访问)

3. vue 组件处理
  安装
  npm install -D vue-loader vue-template-compiler

4. 子组件不能直接修改父组件的数据，需要父组件定义的方法通过props 的方法传递，让子组件调用才能执行