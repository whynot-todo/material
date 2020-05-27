<template>
    <div>
        <!-- ta叫做插槽prop -->
        <slot v-bind:msg="msg"></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg:'我与<slot>标签在一个组件中，经过我允许(在slot上绑定数据)，你才能看到我',
        }
    },
}
</script>

<style lang='less' scoped>

</style>