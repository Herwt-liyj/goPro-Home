import * as types from '../mutation-types'

const state = {
	localeLang: localStorage.getItem('localeLang')|| 'zh-CN',
}

const actions = {
	//更换语种
	changeLocaleLang({ commit }, status) {
		localStorage.setItem('localeLang', status)
		commit(types.LOCALE_LANG, status)
	},
}

const getters = {
	localeLang: state => state.localeLang,
}

const mutations = {
	//记录当前语言
	[types.LOCALE_LANG](state, status) {
		state.localeLang = status;
	},
}

export default {
    state,
    actions,
    getters,
    mutations
}