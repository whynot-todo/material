<template>
    <div>
        <h2>插槽的基本用法</h2>
        <my-slots>
            <span>{{myDearName}} ,</span>
            <span>i love you ,</span>
        </my-slots>
        <h2>默认值插槽</h2>
        <default-slot>yes, i love you , too</default-slot>
        <h2>具名插槽</h2>
        <name-slots>
            <template v-slot:header>头部内容，通过 v-slot:header 拉过来的</template>
            <template v-slot:footer>底部内容，通过 v-slot:footer 拉过来的</template>
            <div>主题内容啊，他们不要的都跑我这里来了，我是垃圾桶</div>
        </name-slots>
        <h2>作用域插槽</h2>
        <scope-slot>
            <template v-slot:default="slotProps">
                <div>{{slotProps.msg}}</div>
            </template>
        </scope-slot>
<!--         <single-default v-slot:default="slotProps">{{slotProps.user.name}}</single-default> -->
        <!-- <single-default v-slot="slotProps">{{slotProps.user.age}}</single-default> -->
        <single-default v-slot='{user:name}'>{{name.name}}</single-default>
    </div>
</template>

<script>
import MySlots from "@/components/MySlots";
import DefaultSlot from "@/components/DefaultSlot";
import NameSlots from "@/components/NameSlots";
import ScopeSlot from "@/components/ScopeSlot";
import SingleDefault from "@/components/SingleDefault";
export default {
    data() {
        return {
            myDearName: "yyy"
        };
    },
    components: {
        MySlots,
        DefaultSlot,
        NameSlots,
        ScopeSlot,
        SingleDefault
    }
};
</script>

<style lang='less' scoped>
</style>