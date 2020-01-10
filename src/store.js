import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /***用户模块**/
    user:null,
    /**评论模块**/
    repContent:null, //回复内容
    repIndex:-1, //当前回复索引
    repId:-1, //当前回复的评论ID

  },
  mutations: {
    REPCOM(state,content){
      state.repContent = content
    },
    REPCLICK(state,repId){
      state.repId = repId
    }
  },
  actions: {

  }
})
