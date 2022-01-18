<template>
    <div>
        {{$store.state.count}} <br>
        <button @click="add">count + 1</button>
    </div>    
</template>
<script>
    export default {
        // data() {
        //     return {
        //         count: 0
        //     }
        // },
        methods: {
            add() {
                // this.count++
                this.$store.commit('add')
            }
        }
    }
</script>

<style scoped>

</style>