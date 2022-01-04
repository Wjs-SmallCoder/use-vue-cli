<template>
    <li>
        {{blog.content}}
    </li>
</template>

<script>
    export default {
        // 声明接受标签属性值(组件对象属性)
        // this 指向是组件对象(小的vm)
        props: ['blog'] // 接受属性类型 [] {}
    }
</script>

<style scoped>

</style>