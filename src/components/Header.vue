<template>
    <div id="search-input">
        <input type="text" placeholder="请输入您的任务名称，按回车键添加" @keyup.enter="add" v-model="name">
    </div>
</template>

<script>
    export default {
        // 通过自定义事件绑定 不需要通过props 传递以及获取
        // props: {
        //     addTask: {
        //         type: Function,
        //         required: true
        //     }
        // },
        data() {
            return {
                name: ''
            }
        },
        methods: {
            add() {
                const name = this.name.trim()
                if (!name) return alert('任务名不能为空')
                const dataObj = {
                    id: Date.now(),
                    name: name,
                    completed: false
                }

                // this.addTask(dataObj)
                // 分发自定义事件 $emit
                this.$emit('addTask',dataObj)

                this.name = ''
            }
        }
    }
</script>

<style scoped>
    #search-input {
        width: 100%;
        position: relative;
        height: 30px;
        top: 4px;
    }

    #search-input input {
        width: 94%;
        height: 100%;
        font-size: 16px;
        padding: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        border: 1px solid skyblue;
        color: rgba(0,0,0,.7)
    }
</style>
