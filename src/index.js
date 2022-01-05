import Vue from 'vue'
import App from './App' // 引入组件

// 全局注册
// Vue.component('组件名',{定义}或App(引入的vue 文件))

 // 创建一个全局用于绑定事件监听和分发事件监听的对象 Global Event Bus 全局事件总线(事件总线对象就是一个vm)
 // 将其挂载到Vue 的原型上，所有组件对象都能访问 
 // 所有组件对象的原型对象都是一个vm(组件对象->vm)
 // Vue.prototype.$globalEventBus = new Vue()

new Vue({
    el: '#app',
    // 注册组件(局部)
    beforeCreate() {
        // this -> vm 
        Vue.prototype.$globalEventBus = this
    },
    components: {
        App: App
    },
    template: '<App/>'
})