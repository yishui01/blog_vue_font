import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import {Button, Select, Row, Col, Tag, Popover, Link, Dialog,Pagination} from 'element-ui';

Vue.use(Button)
Vue.use(Select)
Vue.use(Tag)
Vue.use(Popover)
Vue.use(Link)
Vue.use(Row)
Vue.use(Col)
Vue.use(Dialog)
Vue.use(Pagination)


Vue.config.productionTip = false
Vue.prototype.$owo = require('../../assets/json/owo') //表情映射

Vue.prototype.$to = (path, param) => {
    router.push({path: path, query: param})
}

Vue.prototype.$scrollTo = (element, to, duration)=>{
    if (duration <= 0){
        element.scrollTop = to
        return
    }
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;
    let timer = setInterval(function () {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to){
            clearInterval(timer)
            return
        }
        this.$scrollTo(element, to, duration - 10);
    }, 10);
}


Vue.prototype.$host = 'http://static.golang365.com/'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
