import * as types from '../mutation-types'

const state = {
    exchangeSymbol:localStorage.getItem('currencySymbol'),
    preExchangeRate:localStorage.getItem('preExchangeRate'),
    curExchangeRate:localStorage.getItem('curExchangeRate'),
    curCountry:JSON.parse(localStorage.getItem('curCountry'))
}   

const actions = {
    setCurrencySymbol({commit},res) {
        localStorage.setItem('currencySymbol', res);
        commit(types.CURRENCY_SYMBOL,res)
    },
    setPreCurrencyRate({commit},res) {
        localStorage.setItem('preExchangeRate',JSON.stringify(res));
        commit(types.PRE_CURRENCY_RATE,res)
    },
    setCurCurrencyRate({commit},res) {
        localStorage.setItem('curExchangeRate',JSON.stringify(res));
        commit(types.CUR_CURRENCY_RATE,res)
    },
    setCurCountry({commit},res) {
        localStorage.setItem('curCountry',JSON.stringify(res));
        commit(types.CUR_COUNTRY,res)
    }
}

const mutations = {
    [types.CURRENCY_SYMBOL](state,res) {
        state.exchangeSymbol = res;
    },
    [types.PRE_CURRENCY_RATE](state,res) {
        state.preExchangeRate = res
    },
    [types.CUR_CURRENCY_RATE](state,res) {
        state.curExchangeRate = res
    },
    [types.CUR_COUNTRY](state,res) {
        state.curCountry = res
    }
}

const getters = {
    exchangeSymbol: state => state.exchangeSymbol,
    preExchangeRate: state => state.preExchangeRate,
    curExchangeRate: state => state.curExchangeRate,
    curCountry:state => state.curCountry
}

export default {
    state,
    actions,
    mutations,
    getters
}