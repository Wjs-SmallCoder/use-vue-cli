<template>
    <div>
        <h2>
            Blog
        </h2>
        <ul>
            <!-- :blog = "blog" 通过prop 传递数据给子组件 -->
            <Blog v-for="blog in BlogsData" :key="blog.id" :blog="blog"/>
        </ul>
    </div>
</template>

<script>
    import Blog from './Blog'

    export default {
        data() {
            return {
                BlogsData: [
                    {
                        id: '1',
                        content: '我是第一个'
                    },{
                        id: '2',
                        content: '我是第二个'
                    }
                ]
            }
        },
        components: {
            Blog: Blog
        }
    }
</script>

<style scoped>

</style>