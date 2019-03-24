import * as types from '../mutation-types'

const state = {
	//用户登录状态
	loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
	//用户登录信息
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || false,
  //认证token信息
  tokenInfo: localStorage.getItem('tokenInfo') || null,
  // 用户或游客的user_id
  userId: localStorage.getItem('userId') || 0,
  //用户头像路径
  headerImg: localStorage.getItem('headerImg') || null,
}

const actions = {
	//用户登录
	setUserInfo({ commit }, res) {
        localStorage.setItem('loginStatus', true);
        localStorage.setItem('userInfo', JSON.stringify(res));
        commit(types.SET_USER_INFO, res);
        commit(types.SET_LOGIN_STATUS, true);
        commit(types.SET_USER_ID, res.user_id);
    },

    //设置token
    setTokenInfo({ commit }, res) {
        localStorage.setItem('tokenInfo',res)
        commit(types.SET_TOKEN_INFO, res)
    },

    // 设置userId
    setUserId({ commit },res){
        localStorage.setItem('userId',res)
        commit(types.SET_USER_ID, res)
    },

    //退出登录
    setSignOut({ commit }) {
        localStorage.removeItem('loginStatus')
        localStorage.removeItem('userInfo')
        localStorage.removeItem('tokenInfo')
        localStorage.removeItem('userId')
        localStorage.removeItem('headerImg')
        commit(types.SET_LOGIN_STATUS, false)
        commit(types.SET_USER_INFO, {})
        commit(types.SET_TOKEN_INFO,null)
        commit(types.SET_USER_ID,0)
        commit(types.SET_USER_IMG,null)
    },

    //设置用户头像
    setUserImg({commit}, res){
      localStorage.setItem('headerImg',res)
      commit(types.SET_USER_IMG, res);
    },


}

const getters = {
    loginStatus: state => state.loginStatus,
    userInfo: state => state.userInfo,
    tokenInfo: state => state.tokenInfo,
    userId: state => state.userId,
    headerImg: state => state.headerImg,
}

const mutations = {
	[types.SET_USER_INFO](state,res){
		state.userInfo = res;
	},
	[types.SET_LOGIN_STATUS](state,status){
		state.loginStatus = status;
    },
  [types.SET_TOKEN_INFO](state,res){
		state.tokenInfo = res;
	},
  [types.SET_USER_ID](state,res){
        state.userId = res;
  },
  [types.SET_USER_IMG](state,res){
    state.headerImg = res;
  },
}

export default {
    state,
    actions,
    getters,
    mutations
}
