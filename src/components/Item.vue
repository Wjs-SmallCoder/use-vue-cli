<template>
    <li :style="{background: bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
        <input type="checkbox" name="task" v-model="isComplete">
        {{data.name}}
        <button v-show="isShow" @click="deleteItem">删除</button>
    </li>
</template>

<script>
    export default {
        props: {
            data: Object,
            index: Number,
            updateTask: Function
        },
        data() {
            return {
                bgColor: 'white',
                isShow: false
            }
        },
        computed: {
            isComplete: {
                get() {
                    // 读取当前的completed
                    return this.data.completed
                },
                set(value) {
                    // value true false
                    // 点击触发
                    this.updateTask(this.data,value)
                }
            }
        },
        methods: {
            handleEnter(isEnter) {
                if (isEnter) {
                    this.bgColor = '#ccc';
                    this.isShow = true;
                } else {
                    this.bgColor = '#fff';
                    this.isShow = false;
                }
            },
            deleteItem (index) {
                if (window.confirm('确定要删除吗')) {
                    // this.deleteTask(this.index)
                    this.$globalEventBus.$emit('deleteTask',this.index)
                }
            }
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
        height: 30px;
        font-size: 16px;
        line-height: 30px;
        padding: 2px;
    }

    li:not(:first-child) {
        border-top: 1px solid #ccc;
    }

    button {
        background-color: rgb(255, 123, 0);
        border-radius: 4px;
        float: right;
        margin-right: 40px;
        line-height: 24px;
    }

</style>
