import Vue from 'vue'
import App from './App' // 引入组件

// 全局注册
// Vue.component('组件名',{定义}或App(引入的vue 文件))

new Vue({
    el: '#app',
    // 注册组件(局部)
    components: {
        App: App
    },
    template: '<App/>'
})