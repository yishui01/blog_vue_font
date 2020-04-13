import request from '../../request'
import BACK_PREFIX from "../../../../api/admin/prefix";
import {delUSERCookie,getToken, getUserCookie} from "../../../../utils/auth";

const user = {
    state: {
        token: getToken(),
        user: null
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SER_USER: (state, user) => {
            state.user = JSON.parse(decodeURI(user))
        },
        DEL_USER: (state, user) => {
            state.user = null

        }
    },

    actions: {
        // 登录
        Login({commit}, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                request({
                    url: BACK_PREFIX + '/login',
                    method: 'post',
                    data: {
                        username: username,
                        password: userInfo.password
                    }
                }).then(response => {
                    commit('SER_USER', getUserCookie())
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetInfo({commit}) {
            return new Promise((resolve, reject) => {
                request({
                    url: '/api/user_info',
                    method: 'get'
                }).then(response => {
                    commit('SER_USER', getUserCookie())
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 登出
        FedLogOut({commit}) {
            return new Promise((resolve, reject) => {
                request({
                    url: '/api/logout',
                    method: 'post'
                }).then(response => {
                    delUSERCookie()
                    commit('SER_USER', null)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user
