<template>
    <div>
        <h3>独占默认插槽</h3>
        <slot :user='user'></slot>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user:{name:"sunwukong",age:18}
        }
    }
}
</script>

<style lang='less' scoped>

</style>