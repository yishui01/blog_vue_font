import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import i18n from '../../lang' // Internationalization
import '@/icons' // icon
import './permission' // permission control


import request from './request'

// import jquery from 'jquery'
// window.jquery = window.$ = jquery
/**
 * This project originally used easy-mock to simulate data,
 * but its official service is very unstable,
 * and you can build your own service if you need it.
 * So here I use Mock.js for local emulation,
 * it will intercept your request, so you won't see the request in the network.
 * If you remove `../mock` it will automatically request easy-mock data.
 */
/*
import '../mock' // simulation data
* */
import prototype from '@/common/js/prototype' // 挂载在原型上的方法
import vueWaves from '@/directive/waves/index'// 水波纹指令
import vueFocus from '@/directive/focus/index'// 聚焦指令
import vueImgAlart from '@/directive/imgAlart/index'// 图片弹窗指令
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
Vue.use(vueWaves)
Vue.use(vueFocus)
Vue.use(vueImgAlart)
Vue.use(prototype)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$request = request
Vue.prototype.$owo = require('../../assets/json/owo') //表情映射
Vue.prototype.$to = (path, param) => {
    router.push({path: path, query: param})
}
Vue.prototype.$host = 'http://static.golang365.com/'
Vue.prototype.BASE_API = process.env.VUE_APP_BASE_API
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
