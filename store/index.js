//引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({//全局变量定义
    state: {
        c_city:'北京',
    },
    mutations: {
        editChooseCity(state,value){
			state.c_city = value;
		}
    },
	actions:{
		
	}
})
export default store