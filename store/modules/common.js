import * as types from '../mutation-types'

/*h5通用配置*/
const state = {
	cartNum: 0,  //购物车数量
	sidebarState: false,  //侧导航是否显示
	smallcartState: false,  //小购物车是否显示
	smallCartInfo: Object,
    currentId:'',
    categories: Array
}

const actions = {
	setSideBarState({ commit }, status) {
        commit(types.SIDEBAR_STATE, status)
    },
    setSmallCartState({ commit }, status) {
        commit(types.SMALLCART_STATE, status)
    },
    getSmallCartInfo({commit} ){
    	console.log("small cart");
    },
    changeCartNum({ commit }, status){
    	commit(types.CARTNUM, status)
    }
}

const getters = {
	cartNum: state => state.cartNum,
  	currentId: state => state.currentId,
  	categories: state => state.categories
}

const mutations = {
	// 记录侧导航的显示状态
	[types.SIDEBAR_STATE](state,platform){
		state.sidebarState = platform;
	},
	//记录小购物车的显示状态
	[types.SMALLCART_STATE](state,platform){
		state.smallcartState = platform;
	},
	//记录小购物车的显示状态
	[types.SMALLCART_INFO](state,platform){
		state.smallCartInfo = platform;
	},
	//购物车数量
	[types.CARTNUM](state,platform){
		state.cartNum = platform;
	},
	//记录选中状态
	[types.SET_CURRENT_ID](state,platform){
	    state.currentId = platform;
	},
	// 网站分类
	[types.GET_CATEGORIES](state,platform){
		state.categories = platform;
	}
}

export default {
    state,
    actions,
    getters,
    mutations
}
