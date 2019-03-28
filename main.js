// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueWechatTitle from 'vue-wechat-title'
import moment from 'moment/moment'
import api_root from './api/api'
import { Swipe, SwipeItem, Toast,Lazyload,InfiniteScroll } from 'mint-ui';
import Store from './store/index'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Toast)

Vue.use(VueWechatTitle)
Vue.component(Swipe.name, Swipe); 
Vue.use(Lazyload);
Vue.use(InfiniteScroll);



Vue.prototype.$axios = api_root;
Vue.config.productionTip = false;
Vue.prototype.$store = Store;
Vue.prototype.$toast = Toast;

const i18n = new VueI18n({
  locale: localStorage.getItem('localeLang')|| 'zh-CN',    // 语言标识
  messages: {
    'zh-CN': require('./lang/zh'),    // 中文语言包
    'en-US': require('./lang/en'),    // 英文语言包
    'k-KOR': require('./lang/kor')    //韩语
  }
})

Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
  // return moment(value).format(formatString); // value可以是普通日期 20170723
  if(typeof(value) =='string' && value !='' &&  value.includes('-')) {
      return value;
  }
  return moment.unix(value).format(formatString); // 这是时间戳转时间
});

Vue.prototype.$vm = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
