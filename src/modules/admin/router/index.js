import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }F
 **/
export const constantRouterMap = [
    {path: '/login', component: () => import('../views/login/index'), hidden: true},
    {path: '/404', component: () => import('../views/404'), hidden: true},
    {
        path: '/',
        component: Layout,
        meta: {title: '首页', icon: 'table'},
        redirect: '/dashboard',
        name: 'Dashboard',
        children: [
            {
                path: 'dashboard',
                meta: {title: '首页', icon: 'table'},
                component: () => import('../views/dashboard/index')
            }
        ]
    },
    {
        path: '/user',
        component: Layout,
        meta: {title: '用户管理', icon: 'user'},
        name: 'User',
        children: [
            {
                path: 'user',
                meta: {title: '用户管理', icon: 'user'},
                component: () => import('../views/user/index')
            }
        ]
    },
    {
        path: '/file',
        component: Layout,
        meta: {title: '文件库', icon: 'table'},
        name: 'file',
        children: [
            {
                path: 'file',
                meta: {title: '文件管理', icon: 'table'},
                component: () => import('../views/file/index')
            }
        ]
    },
    {
        path: '/article',
        component: Layout,
        meta: {title: '文章管理', icon: 'table'},
        name: 'article',
        children: [
            {
                path: 'article',
                meta: {title: '文章管理', icon: 'table'},
                component: () => import('../views/article/index')
            }
        ]
    },
    {
        path: '/tag',
        component: Layout,
        meta: {title: '标签管理', icon: 'table'},
        name: 'tag',
        children: [
            {
                path: 'tag',
                meta: {title: '标签管理', icon: 'table'},
                component: () => import('../views/tag/index')
            }
        ]
    },
    {
        path: '/webinfo',
        component: Layout,
        meta: {title: '信息管理', icon: 'table'},
        name: 'webinfo',
        children: [
            {
                path: 'webinfo',
                meta: {title: '信息管理', icon: 'table'},
                component: () => import('../views/webinfo/index')
            }
        ]
    }
]

// 平台首页固定权限
export const homeConstantMap = []

// 需要权限验证路由
export const asyncRouterMap = [
    // 设备模块
    {
        //     path: '/equipment',
        //     component: Layout,
        //     tag: 'equipment.index.top',
        //     meta: {
        //         title: '设备管理',
        //         icon: 'table'
        //     },
        //     children: [
        //         {
        //             path: 'people',
        //             name: 'people',
        //             tag: 'people.index.top',
        //             component: () => import('../views/device/people'),
        //             meta: { title: '设备人员', icon: 'table' },
        //             hidden: true
        //         }
        //     ]
    },

    {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})
