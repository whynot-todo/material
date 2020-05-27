import Vue from 'vue'
/*EventBus就是一个vue的实例，我们可以通过他来调用Vue的实例方法*/
export const EventBus = new Vue()
/*当然，你也可以将它在入口文件上加入到原形中
* Vue.prototype.$EventBus = new Vue()
* 使用的时候直接就可以 this.$EventBus
* */
