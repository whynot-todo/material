<template>
    <div>{{name|initalWord|capitalize}}</div>
</template>

<script>
export default {
    data(){
        return {
            name:'shawujing'
        }
    },
    filters:{
        initalWord:function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<style lang='less' scoped>

</style>