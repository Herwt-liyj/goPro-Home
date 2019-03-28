<template>
    <div class="share_container">
        <div class="down_load flex">
            <p><img src="../assets/images/logo2.png" alt=""></p>
            <p><span class="bg">{{$t('download.textDownload')}}</span></p>
        </div>
        <div class="down_app box_sh border_r2">
            <p class="join_suc text_a">{{$t('download.youHasJoin')}}<span class="font_w">{{teamName}}</span>{{$t('common.sharedWallet')}}</p>
            <div class="hoo_img"><img src="../assets/images/hoo_logo.png" alt=""></div>
            <p  href="" class="down_now text_a">{{$t('download.nowDownloadHooWalletApp')}}</p>
            <div v-if="userAgentFlag=='iphone'">
              <a href="https://itunes.apple.com/hk/app/id1387872759" class="btn_ios border_r2 ios_1">{{$t('download.iosInternational')}}</a>
              <a href="/ios_guide" class="btn_ios border_r2 ios_2">{{$t('download.iosNative')}}</a>
            </div>
            <div v-else-if="userAgentFlag=='android'">
              <a href="https://fir.im/hooPro" class="btn_ios border_r2 ios_1">{{$t('download.appstore')}}</a>
              <a href="https://qland-test.oss-cn-shenzhen.aliyuncs.com/download/hoo.apk"  class="btn_ios border_r2 ios_1">{{$t('download.hoohome')}}</a>
            </div>
            <div v-else>
              <a href="/ios_guide" class="btn_ios border_r2 ios_2">{{$t('download.iosNative')}}</a>
              <a href="https://fir.im/hooPro" class="btn_ios border_r2 ios_1">{{$t('download.appstore')}}</a>
            </div>
            <div style="height: .6rem;"></div>
        </div>
        <div class="pop_container" v-if="userAgentBrowser=='weixinQQ'">
            <div class="pop_guidesafari" v-if="userAgentFlag=='iphone'" ></div>
            <div class="pop_guideandriod" v-else></div>
        </div>
        <hooFooter></hooFooter>
    </div>
</template>
<script>
import hooFooter from '../components/hooFooter';

export default {
  name: "Download",
  components:{
      hooFooter
  },
  data() {
    return {
      userAgentFlag: "",
      userAgentBrowser:'',
      teamName:''
    };
  },
  mounted() {
      this.userAgentFlag = window.userAgentGlobal;            //系统判断iphone /android
      this.userAgentBrowser = window.userAgentBrowser;        //微信打开、qq打开
      this.teamName = localStorage.getItem('teamName');
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  type="text/css" scoped>
@import "../assets/css/publicShare";
@import "../assets/css/download";
</style>

