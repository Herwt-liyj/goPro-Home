<template>
    <div class="guide_box">
        <!-- <div class="goback_btn" onclick="window.history.go(-1)">返回</div> -->
        <div class="main_add">
        </div>
        <a class="ios_download_btn download_btn" href="itms-services://?action=download-manifest&url=https://m.hoo.com/static/hoo.plist">{{$t('download.hooAppDownload')}}</a>
        <a href="https://m.hoo.com/static/MolyApp.mobileprovision" class="guide">{{$t('download.installDescFile')}}</a>
    </div>
</template>
<script>
export default {
  name: "IosGuide",
  data() {
    return {
      msg: "官方APP下载"
    };
  },
  mounted() {},
  methods: {
      
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  type="text/css" scoped>
 @import  "../assets/css/iosGuide";
</style>


