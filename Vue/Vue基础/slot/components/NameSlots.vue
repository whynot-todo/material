<template>
    <div>
        <h3>我是头部，我下面的内容是通过具名插槽传递过来的</h3>
        <header>
            <slot name="header"></slot>
        </header>
        <h3>我是内容，我故意没有name属性</h3>
        <main>
            <slot></slot>
        </main>
        <h3>我是底部，我下面的内容是通过具名插槽传递过来的</h3>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
</style>