<template>
    <div id="checkbox-all">
        <input type="checkbox" name="task" v-model="isCheckAll">
        已完成{{completeSize}} / 全部{{task.length}}
        <button v-show="completeSize>0" @click="clearTask">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        props: {
            task: Array,
            clearTask: Function,
            checkAll: Function
        },
        computed: {
            completeSize () {
                // preTotal 当前值
                return this.task.reduce((preTotal,data,index) => preTotal + (data.completed ? 1 : 0),0)
            },
            isCheckAll: {
                // 是否全选
                get() { // get 读取
                    // 上面选择框全选则全选触发
                    return this.task.length === this.completeSize && this.completeSize>0
                },
                // set 点击触发
                set(value) { // value 看作boolean
                    // 点击全选触发
                    this.checkAll(value)
                }
            }
        }
    }
</script>

<style scoped>
    #checkbox-all {
        width: 94%;
        font-size: 16px;
        position: relative;
        left: 50%;
        transform: translateX(-50%)
    }

    button {
        float: right;
        margin-left: 40px;
        background-color: rgb(255, 123, 0);
    }
</style>
