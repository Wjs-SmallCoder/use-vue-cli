<template>
    <ul id="checkbox-list">
        <Item v-for="(data,index) in task" :key="data.id" :data="data" :index="index" :updateTask="updateTask"/>
    </ul>
</template>

<script>
    import Item from './Item'

    export default {
        props: ['task','updateTask'],
        components: {
            Item
        }
    }
</script>

<style scoped>
    #checkbox-list {
        border: 1px solid #ccc;
        width: 94%;
        position: relative;
        left: 50%;
        padding: 0;
        transform: translateX(-50%);
    }

    li:not(:first-child) {
        border-top: 1px solid #ccc;
    }

</style>
