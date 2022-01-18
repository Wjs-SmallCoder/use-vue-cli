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

5. 组件通信
  1. props
    父组件与子组件(非函数)
    子组件与父组件(函数(通过父组件定义函数来让子组件调用))

    只能层层传递，兄弟组件需要借助父组件

  2. 自定义事件通信
    子组件向父组件

    通过在父组件(外层组件)分发自定义事件，实现父组件(外层组件)的内部组件之间能够通信
    （1） 子组件：@ 监听事件 $emit('事件名',data) 分发事件
    （2） 通过ref 和 $on('事件名',回调) $emit('事件名',data) 实现 eg App.vue Header.vue

  3. 全局事件总线
    绑定事件监听和分发事件的组件对象必须是同一个组件对象

    通过Vue 的原型添加一个全局事件总线(global event bus) 其他组件能够通过this.xxx 来使用 eg index.js App.vue item.vue
      // 创建一个全局用于绑定事件监听和分发事件监听的对象 Global Event Bus 全局事件总线(事件总线对象就是一个vm)
      // 将其挂载到Vue 的原型上，所有组件对象都能访问 
      // 所有组件对象的原型对象都是一个vm(组件对象->vm)
      // Vue.prototype.$globalEventBus = new Vue() // this

      this.全局事件总线.$on('name',callback) 监听这个name 并执行回调
      this.全局事件总线.$emit('name',callback || 值)
      this.全局事件总线.$off('name') 解除使劲啊监听

  4. slot 插槽
      通过slot 标签以及name 属性(父组件)
      需要传递的组件添加slot 属性以及父组件对应name 的值(子组件)
    
  5. vuex

6. vue-router
  npm vue-router 
  需要在index.js 使用 import vueRouter from 'vue-router'   Vue.use(vueRouter)

  可以查看vue-router 官网

    router-view 渲染router 页面
    router-link router 链接
    keep-alive 保存组件缓存，切换组件时不被销毁