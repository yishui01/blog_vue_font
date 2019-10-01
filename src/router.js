import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/art',
            name: 'art',
            component: () => import('./views/Article.vue')
        },
        {
            path: '/video',
            name: 'video',
            component: () => import('./views/Video.vue')
        },
        {
            path: '/load',
            name: 'load',
            component: () => import('./components/ClimLoading')
        },
        {
            path: '/load2',
            name: 'load2',
            component: () => import('./components/RotateLoading')
        },
    ]
})
