import Vue from 'vue'
import Router from 'vue-router'

import mockIndex from '../views/mockIndex'
import questionDetail from '../views/question/questionDetail.vue'

Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  routes: [{
      path: '/',
      name: '首页',
      component: mockIndex
    },
    {
      path: '/public_share',
      name: '加入虎符钱包',
      component(resolve) {
        require.ensure(['../views/publicShare.vue'], () => {
          resolve(require('../views/publicShare.vue'))
        })
      },
      meta: {
        title: '加入虎符钱包'
      }
    },
    {
      path: '/success_add',
      name: '成功加入虎符钱包',
      component(resolve) {
        require.ensure(['../views/successToAdd.vue'], () => {
          resolve(require('../views/successToAdd.vue'))
        })
      },
      meta: {
        title: '加入虎符共管钱包'
      }
    },
    {
      path: '/ios_guide',
      name: 'ios虎符钱包下载引导',
      component(resolve) {
        require.ensure(['../views/iosGuide.vue'], () => {
          resolve(require('../views/iosGuide.vue'))
        })
      },
      meta: {
        title: 'ios虎符钱包下载引导',
        requireAuth: true
      }
    },
    {
      path: '/info',
      name: '热点',
      component(resolve) {
        require.ensure(['../views/info.vue'], () => {
          resolve(require('../views/info.vue'))
        })
      },
      meta: {
        title: '热点',
        requireAuth: true
      },
      hidden: true,
    },
    {
      path: '/info_detail/:id',
      name: '资讯详情',
      component(resolve) {
        require.ensure(['../views/infoDetail.vue'], () => {
          resolve(require('../views/infoDetail.vue'))
        })
      },
      meta: {
        title: '资讯详情',
        description:'资讯详情资讯详情资讯详情资讯详情'
      }
    },
    {
      path: '/gift_result',
      name: '领取Hoo礼品卡',
      component(resolve) {
        require.ensure(['../views/giftResult.vue'], () => {
          resolve(require('../views/giftResult.vue'))
        })
      },
      meta: {
        title: '领取Hoo礼品卡'
      }
    },
    {
      path: '/gift_card',
      name: '礼品卡',
      component(resolve) {
        require.ensure(['../views/giftCard.vue'], () => {
          resolve(require('../views/giftCard.vue'))
        })
      },
      meta: {
        title: '礼品卡'
      }
    },
    {
      path: '/download',
      name: 'download',
      component(resolve) {
        require.ensure(['../views/download.vue'], () => {
          resolve(require('../views/download.vue'))
        })
      },
      meta: {
        title: '虎符钱包下载'
      },
      hidden: true,
    },
    {
      path: '/protocol',
      name: 'protocol',
      component(resolve) {
        require.ensure(['../views/protocol.vue'], () => {
          resolve(require('../views/protocol.vue'))
        })
      },
      meta: {
        title: '用户服务协议'
      }
    },
    {
      path: '/question',
      name: 'question',
      component(resolve) {
        require.ensure(['../views/question/questionList.vue'], () => {
          resolve(require('../views/question/questionList.vue'))
        })
      },
      meta: {
        title: '常见问题'
      }
    },
    {
      path: '/question_detail/:id',
      name: 'question_detail',
      component(resolve) {
        require.ensure(['../views/question/questionDetail.vue'], () => {
          resolve(require('../views/question/questionDetail.vue'))
        })
      },
      meta: {
        title: '常见问题'
      }
    },
  ]
})

export default router
