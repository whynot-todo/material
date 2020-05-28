<template>
    <div>{{name|paramsFil('白骨精','白龙马')}}</div>
</template>

<script>
export default {
    data(){
        return {
            name:'师徒四人'
        }
    },
    filters:{
        paramsFil:function (value,arg1,arg2) {
            console.log(value,arg1,arg2)
            return value + arg1 + arg2
        }
    }
}
</script>

<style lang='less' scoped>

</style>