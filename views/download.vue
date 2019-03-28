<template>
    <div class="mian_box">
        <div class="download_bg"></div>
        <div class="juxing">
            <div class="logo"></div>
            <div class="download-wrap" v-if="userAgentFlag=='iphone'">
                <a class="ios_download_btn download_btn btn1" href="https://itunes.apple.com/hk/app/id1387872759" >{{$t('download.iosInternational')}}</a>
                <a class="ios_download_btn download_btn btn2" href="/ios_guide" >{{$t('download.iosNative')}}</a>
            </div>
            <div  class="download-wrap" v-else-if="userAgentFlag=='android'">
                <a class="android_download_btn download_btn btn3"  href="https://play.google.com/store/apps/details?id=com.hufu.qianbao" >{{$t('download.appstore')}}</a>
                <a class="android_download_btn download_btn btn4"  href="https://qland-test.oss-cn-shenzhen.aliyuncs.com/download/hoo.apk" >{{$t('download.hooHome')}}</a>
            </div>
            <div class="download-wrap" v-else>
                <a class="ios_download_btn download_btn btn2" href="/ios_guide" >{{$t('download.iosNative')}}</a>
                <a class="android_download_btn download_btn btn3"  href="https://play.google.com/store/apps/details?id=com.hufu.qianbao" >{{$t('download.appstore')}}</a>
            </div>
        </div>
        <div class="pop_container" v-if="userAgentBrowser=='weixinQQ'">
            <div class="pop_guidesafari" v-if="userAgentFlag=='iphone'" ></div>
            <div class="pop_guideandriod" v-else></div>
        </div>
    </div>   
</template>
<script>
export default {
  name: "Download",
  data() {
    return {
      userAgentFlag: "",
      userAgentBrowser:''
    };
  },
  mounted() {
      this.userAgentFlag = window.userAgentGlobal;            //系统判断iphone /android
      this.userAgentBrowser = window.userAgentBrowser;        //微信打开、qq打开
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  type="text/css" scoped>
@import "../assets/css/download";
</style>