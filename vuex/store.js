import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// state 保存数据
const state = {
    count: 0
}

// mutations 保存直接修改state 数据的方法
// 不能保存有逻辑(判断等)和异步
const mutations = {
    add (state) {
        state.count++
    }
}

// actions 保存间接修改state 数据的方法
// 能保存逻辑(判断等)和异步
const actions = {
    // 这里的方法可以执行mutations 的方法达到修改state 数据
}

// getters 保存state 数据的getter 方法(计算属性computed)
const getters = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})