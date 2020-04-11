const getters = {
  // 用户模块
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  // app模块
  size: state => state.app.size,
  language: state => state.app.language,
  theme: state => state.app.theme,
  sidebar: state => state.app.sidebar,
  fullScreen: state => state.app.fullScreen,

  permission_routers: state => state.permission.routers,
}
export default getters
