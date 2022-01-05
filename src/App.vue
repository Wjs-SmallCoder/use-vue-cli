<template>
    <div class="app-body">
        <!-- {{title}} -->
        <!-- <Blogs/> -->
        <!-- 通过prop 传递数据 -->
        <Header :addTask="addTask"/>
        <List :task="task" :deleteTask="deleteTask" :updateTask="updateTask"/>
        <Footer :task="task" :clearTask="clearTask" :checkAll="checkAll"/>
    </div>
</template>

<script>
// import Blogs from './components/Blogs'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import {saveTask,readTask} from './utils/storageUtils'

export default {
    // data() {
    //     return {
    //         title: '我是title'
    //     }
    // },
    // components: {
    //     Blogs: Blogs
    // }
    data() {
        return {
            task: [
                {
                    id: '1',
                    name: '1',
                     completed: true
                },{
                    id: '2',
                    name: '2',
                     completed: false
                }
            ]
        }
    },
    mounted() {
        // 模拟延时
        setTimeout(() => {
            // 读取local 数据
            // this.task = JSON.parse(localStorage.getItem('task_id') || '[]')
            saveTask()
        },1000)
    },
    methods: {
        addTask(data) {
            // 添加数据(task 数组 里面是obj)
            this.task.unshift(data)
        },
        deleteTask(index) {
            this.task.splice(index,1)
        },
        clearTask() {
            // filter 返回的数组不是原来的数组 将选中的completed 变为false，然后将本来是false 的变为true 并添加到新的数组去
            this.task = this.task.filter((data,index) => !data.completed)
        },
        checkAll(isCheckAll) {
            // 全选按钮 
            this.task.forEach(task => task.completed = isCheckAll)
        },
        updateTask(task,isCheck) {
            // 修改是否点击
            task.completed = isCheck
        }
    },
    watch: {
        task: {
            deep: true, // 深度监视(本身以及内部以下层级进行监视)
            // handler (value) { // value 是最新的task
            // // 添加到local
            //     localStorage.setItem('task_id',value)
            // saveTask(value)
            // }
            handler: saveTask
        }
    },
    components: {
        Header,
        List,
        Footer
    }
}
</script>

<style scoped>
/* scoped 让css 在当前vue 组件生效 */
    /* h2 {
        font-size: 28px;
        color: yellowgreen;
    } */
    .app-body {
        width: 800px;
        overflow: hidden;
        padding-bottom: 20px;
        margin: 20px auto 0;
        border: 1px solid #ccc;
        border-radius: 8px;
    }
</style>