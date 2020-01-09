import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import {Button, Select, Row, Col, Tag, Popover, Link, Dialog} from 'element-ui';

Vue.use(Button)
Vue.use(Select)
Vue.use(Tag)
Vue.use(Popover)
Vue.use(Link)
Vue.use(Row)
Vue.use(Col)
Vue.use(Dialog)

Vue.config.productionTip = false
Vue.prototype.$owo = require('./assets/json/owo') //表情映射

Vue.prototype.$to = (path, param) => {
    router.push({path: path, query: param})
}
Vue.prototype.$host = 'http://static.golang365.com/'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
