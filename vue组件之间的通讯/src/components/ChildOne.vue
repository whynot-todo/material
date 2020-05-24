<template>
    <div>
        <h1>ChildOne</h1>
        <div>接收到父亲传来的消息:{{msgToChild}}</div>
        <!--定义一个按钮用来触发方法-->
        <button @click="needFatherMethod">place click me</button>
        <br>
        <!--新建一个按钮来触发方法-->
        <button @click="$parentMethod">place $parent</button>
        <br>
        <!--定义向父组件信息的触发的条件-->
        <button @click="setParentMsg">place send parent msg</button>
        <br>
        <!--向兄弟组件传递数据-->
        <button @click="setBrotherMsg">place send brother msg</button>
        <br>
        <button @click="busBrotherMsg">send brother msg by bus</button>
        <br>
        <button @click="pubsubBrotherMsg">send brother msg by pubsub</button>
    </div>
</template>

<script>
    import {EventBus} from '../utils/event-bus.js'
    import PubSub from 'pubsub-js'
    export default {
        data() {
            return {
                /*子组件数据*/
                msg: 'i am your child',
                /*定义数据*/
                commonMsg: 'i love you ,my brother'
            }
        },
        props: {
            poster: {
                type: Function
            },
            /*接收方法*/
            msgToChild: {
                type: String
            },
            methodToChild: {
                type: Function
            },
            getChildMsg: {
                type: Function
            }
        },
        methods: {
            pubsubBrotherMsg (){
                PubSub.publish('pubsubMsg',this.commonMsg)
            },
            /*使用EventBus出发事件*/
            busBrotherMsg (){
                EventBus.$emit('busSendMsg',this.commonMsg)
            },
            /*调用方法传递数据*/
            setBrotherMsg() {
                this.$emit('poster', this.commonMsg)
            },
            /*父亲调用的方法*/
            methodToParent() {
                alert('i am you child')
            },
            showChildMsg() {
                alert('i am you child')
            },
            /*触发方法*/
            needFatherMethod() {
                this.$emit('methodToChild')
            },
            /*定义后去父组件实例的方法*/
            $parentMethod() {
                console.log(this.$parent._data.msg)//i am you father
                console.log(this.$parent.msg)//i am you father
                this.$parent.showMsg()//调用方法
            },
            /*触发父组件的方法，并传递参数*/
            setParentMsg() {
                this.$emit('getChildMsg', this.msg)
            },
        }
    };
</script>

<style lang='less' scoped>
</style>
