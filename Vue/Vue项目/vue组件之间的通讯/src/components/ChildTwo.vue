<template>
    <div>
        <h1>ChildTwo</h1>
        <div>{{commonMsg}}</div>
        <div>EventBus传来的消息：{{busMsg}}</div>
        <div>PubSub传来的消息：{{pubsubMsg}}</div>
    </div>
</template>

<script>
    import {EventBus} from '../utils/event-bus.js'
    import PubSub from 'pubsub-js'
    export default {
        data(){
            return {
                busMsg:'',
                pubsubMsg:''
            }
        },
        props:['common-msg'],
        name: "ChildTwo",
        /*在生命周期函数中绑定事件*/
        mounted() {
            /*msg:第一个参数，必须传*/
            PubSub.subscribe('pubsubMsg',(msg,data) => {
                this.pubsubMsg = data
            } )
            /*使用EventBus绑定事件*/
            EventBus.$on('busSendMsg',(busMsg) => {
                this.busMsg = busMsg
            })
        }
    }
</script>

<style lang="less" scoped>

</style>
