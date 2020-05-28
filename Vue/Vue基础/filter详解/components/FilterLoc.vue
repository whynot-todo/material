<template>
    <div>{{name | capitalize}}</div>
</template>

<script>
export default {
    data(){
        return {
            name:'sunwukong'
        }
    },
    filters:{
        //当value改变的时候，他会执行这个函数
        capitalize:function (value) {
            //一定要返回一个值才能在组件中正常显示
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<style lang='less' scoped>

</style>