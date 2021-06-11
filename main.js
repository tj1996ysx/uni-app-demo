import Vue from 'vue'
import App from './App'
import store from  './store/index.js' //导入vuex

Vue.config.productionTip = false
Vue.prototype.$store = store;//挂载到Vue实例上
App.mpType = 'app'

const app = new Vue({
	store, //使用store对象
    ...App
})
app.$mount()
