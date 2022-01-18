import Vue from 'vue'
import App from './App'
import store from './store'

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
    store // 所有组件都能访问store : $store 
    // store 对象
    // 1. state 2. getters 3. dispatch(actionName,data) 调用action 4. commit(mutationName,data) 调用mutation
})