import {getToken, setToken, removeToken} from '@/utils/auth'

import request from '@/utils/request'

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
            state.user = user
        }
    },

    actions: {
        // 登录
        Login({commit}, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                request({
                    url: '/admin/login',
                    method: 'post',
                    data: {
                        name: username,
                        password: userInfo.password
                    }
                }).then(response => {
                    const token = response.data
                    setToken(token)
                    commit('SET_TOKEN', token)
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
                    url: '/admin/info',
                    method: 'get'
                }).then(response => {
                    if (response.code === 0) {
                        commit('SER_USER', response.data)
                    } else {
                        reject('获取用户信息失败!')
                    }
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 前端 登出
        FedLogOut({commit}) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        }
    }
}

export default user
