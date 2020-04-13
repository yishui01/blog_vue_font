import Cookies from 'js-cookie'

const UserKey = 'user_val'
const TokenKey = 'vue_admin_template_token'
const CSRFKey = '_csrf'

export function getUserCookie() {
  var user= Cookies.get(UserKey)
  console.log("获取到cookie了",user)
  return user
}
export function getCsrfToken() {
  return Cookies.get(CSRFKey)
}

export function getToken() {
  // return Cookies.get(TokenKey)
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  // return Cookies.set(TokenKey, token)
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  // return Cookies.remove(TokenKey)
  return localStorage.removeItem(TokenKey)
}



