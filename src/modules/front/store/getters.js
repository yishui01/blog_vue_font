const getters = {
  // 用户模块
  token: state => state.user.token,
  userInfo: state => state.user,
  // app模块
  size: state => state.app.size,
  language: state => state.app.language,
}
export default getters
