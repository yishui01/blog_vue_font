import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home')
        },
        {
            path: '/rain',
            name: 'rain',
            component: () => import('./components/Rain')
        },
        {
            path: '/art',
            name: 'art',
            component: () => import('./views/Article')
        },
        {
            path: '/video',
            name: 'video',
            component: () => import('./views/Video')
        },
        {
            path: '/link',
            name: 'link',
            component: () => import('./views/Link')
        },
        {
            path: '/message',
            name: 'message',
            component: () => import('./views/Message')
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
