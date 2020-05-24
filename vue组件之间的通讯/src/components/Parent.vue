<template>
    <div>
        <h1>Parent</h1>
        <div>接收到子组件传来的消息: {{childMsg}}</div>
        <button @click="getMyChildMsgAndMethod">作为父亲，我要主动拿到孩子的信息</button>
        <br>
        <button @click="$childrenMsg">$children得到孩子信息</button>
        <div>这是孩子的信息： {{childMsg}}</div>
        <!--进行方法的传递-->
        <child-one @poster="poster" ref="myChild" @getChildMsg="getChildMsg" :msgToChild="msg" @methodToChild="showMsg"></child-one>
        <!--传递数据-->
        <child-two :common-msg="commonMsg"></child-two>
    </div>
</template>

<script>
import ChildOne from '@/components/ChildOne'
import ChildTwo from "./ChildTwo"
export default {
    data () {
        return {
            msg:'i am you father',
            childMsg:'',
            commonMsg:''
        }
    },
    methods:{
        /*定义拿到数据的方法*/
        poster (commonMsg){
            this.commonMsg = commonMsg
        },
        $childrenMsg (){
            /*this.$children得到是一个数组*/
            const child = this.$children[0]
            this.childMsg = child.msg
            child.methodToParent()
        },
        /*得到子组件的方法和属性*/
        getMyChildMsgAndMethod (){
            this.childMsg = this.$refs.myChild.msg
            this.$refs.myChild.methodToParent()
        },
        /*定义方法*/
        showMsg () {
            alert('i am your father')
        },

        /*1.定义得到子组件数据的方法，触发条件只能在子组件
        * 2.在data中定义一个属性来保存子组件传递过来的数据
        * */
        getChildMsg (childMsg){
            this.childMsg = childMsg
        },
    },
    components:{
        ChildOne,
        ChildTwo
    }
}
</script>

<style lang='less' scoped>

</style>
