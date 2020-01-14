import { asyncRouterMap, homeConstantMap, homeSuperMap, constantRouterMap } from '../../router'

/**
 * 遍历当前的权限数组，看传进来的route的tag在permission中有没有权限
 * @param permissionArr
 * @param route
 */
function hasPermission(permissionArr, route) {
  if (route.tag) {
    return permissionArr.some(permission => route.tag === permission)
  } else {
    return false
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param permissionArr //当前登录用户的权限一维数组
 */
function filterAsyncRouter(routes, permissionArr) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route } // 这个应该是复制对象的意思，直接复制会传引用，这样展开复制就是一个新对象
    if (hasPermission(permissionArr, tmp)) {
      // 如果有这个路由的权限，直接把这个节点挂上来就行
      res.push(tmp)
    } else {
      // 没有这个路由的权限，看这个权限有没有children，如果children里面有权限的，那这个父类也要挂上来，因为父类反正是作为嵌套top，没有点击效果，不挂的话子类无法显示
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, permissionArr)
        if (tmp.children && tmp.children.length > 0) {
          res.push(tmp)
        }
      }
    }
  })

  return res
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    homeRouters: []
  },
  mutations: {
    // 设置系统路由
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
      console.log('设置了权限')
    },
    // 设置平台路由
    SET_HOME_ROUTERS: (state, routers) => {
      state.homeRouters = routers
    }
  },
  actions: {
    // 登录成功后跳转到首页-》跳转之前拉取userinfo，然后userinfo传到这里，进行加载路由
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        let homeMap, routesMap
        homeMap = homeConstantMap
        routesMap = filterAsyncRouter(asyncRouterMap, data.user.permission)
        commit('SET_HOME_ROUTERS', homeMap)
        commit('SET_ROUTERS', routesMap)
        resolve()
      })
    }
  }
}

export default permission
