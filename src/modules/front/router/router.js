import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            component: () => import('../views/Layout'),
            name: "layout",
            children: [
                {
                    path: '/',
                    name: 'home',
                    meta:{
                        keepAlive:true,
                    },
                    component: () => import('../views/Home')
                },
                {
                    path: '/art',
                    name: 'art',
                    component: () => import('../views/Article')
                },
                {
                    path: '/video',
                    name: 'video',
                    component: () => import('../views/Video')
                },
                {
                    path: '/link',
                    name: 'link',
                    component: () => import('../views/Link')
                },
                {
                    path: '/message',
                    name: 'message',
                    component: () => import('../views/Message')
                },
                {
                    path: '/load2',
                    name: 'load2',
                    component: () => import('../../../components/RotateLoading')
                },
                {
                    path: '/reply',
                    name: 'reply',
                    component: () => import('../../../components/Reply')
                },
                // {
                //     path: "/setting",
                //     component: Setting,
                //     name: "基础设置",
                //     meta: {
                //         requireAuth: true
                //     }
                // },
            ]
        },
    ]
})
