<template>
    <div>
        <img style='position: fixed;left: 100%;' src="../../static_h5/images/info.png" class="main-img">
        <div class="info_detail">
            <div class="info_detail_t font_b" v-wechat-title="$route.meta.title=infoDetail.title">{{infoDetail.title}}</div>
            <div class="info_detail_c">
                <p class="info_detail_l">
                    <!-- <img :src="defaultHeaderImg" alt="" > -->
                    <span>{{infoDetail.author}}</span>
                    <span class='create-time'>{{infoDetail.create_time}}</span>
                </p>
                <p class="info_detail_r">{{infoDetail.count}}{{$t('info.manyPeople')}}</p>
            </div>
            <div class="info_detail_foot">
                <div style="width: 6.7rem;height: 3.8rem;margin: 0 auto;text-align: center;line-height: 3.8rem;">
                  <!-- infoDetail.content_thumb -->
                  <img :src="infoDetail.content_thumb" alt="" style='max-width: 6.7rem;max-height: 3.8rem;' v-if='infoDetail.content_thumb'>
                </div>
                <div v-html="infoDetail.content"></div>
            </div>
        </div>
        <dowloadTips v-if='downloadTipsShow'></dowloadTips>
    </div>
</template>
<script>
import dowloadTips from "../components/downloadTips";

const INFO_DETAIL_URL = "/api/cms/news/detail/";
const HEADER_IMG = "../../static_h5/images/headportrait.png";

export default {
  name: "InfoDetail",
  components: {
    dowloadTips
  },
  data() {
    return {
      infoDetail: "",
      defaultHeaderImg:HEADER_IMG,
      downloadTipsShow: true,
    };
  },
  created() {
       
  },
  mounted() {
    let currentNewsId = this.$route.params.id;
    let userAgentHooApp = window.userAgentHooApp;

    if (!userAgentHooApp) {
      //不在app里面
      this.downloadTipsShow = true;
    } else {
      this.downloadTipsShow = false;
    }

    if (currentNewsId) {
      this.getInfoDetail(currentNewsId);
    }
  },
  methods: {
    getInfoDetail(infoId) {
      let _this = this;
      let id = infoId;
      this.$axios.get(INFO_DETAIL_URL + id, {}, res => {
        if (res.code == 10000) {
          let data = res.data;
          _this.infoDetail = data;
          _this.iphoneShared(data) //详情ios分享调用
        } else {
          _this.$toast(res.message);
        }
      });
    },
    //ios分享调动
    iphoneShared(infoDetail) {
        let id = this.$route.params.id;
        let this_url = window.location.host + '/info_detail/' + id;;//(已变)
        let this_img = infoDetail.content_thumb;
        let this_title = infoDetail.title;
        let this_content = infoDetail.description;
        if (navigator.userAgent.match(/(iPhone|iphone|ipad|ipod|iPad|iPod)/i)) {
            window.webkit.messageHandlers.JsToNativeMethod.postMessage({"type":"wallet_news",params:{"url": this_url,"img": this_img,"title":this_title, "content":this_content}});
        }
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.info_detail_foot p img {
  width: 100% !important;
}
.info_detail_foot img{
  -webkit-border-radius:.1rem;
  -moz-border-radius:.1rem;
  -ms-border-radius:.1rem;
  -o-border-radius:.1rem;
  border-radius: .1rem;
}
ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>

<style  type="text/css" scoped>
@import "../assets/css/info";
.info_detail_c p {
  display: inline-block;
  flex: none;
}
p.info_detail_r {
  float: right;
}
span.create-time {
    color: #000;
    padding-left: .1rem;
}
</style>


