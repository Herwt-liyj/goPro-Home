<template>
  <div class="info-container">
    <div class="swiper-container">
      <div id="header" class="font_b">{{$t('info.newsHot')}}</div>
      <!-- <mt-swipe :auto="0" :show-indicators="false" class="info_banner" @change="handleChange" id="banner"> -->
      <mt-swipe :auto="0" :show-indicators="true" class="info_banner">
        <mt-swipe-item v-for="item in hotNewsArr" :key="item.index">
          <div class="swiper-slide" @click="toInfoDetail(item)">
            <div class="title-box">
              <p class="info_title font_b">{{item.title}}</p>
              <p class="info_content">{{item.description}}</p>
            </div>
            <div style="width: 6.5rem;height: 3.66rem;margin: 0 auto;text-align: center;line-height: 3.66rem;">
              <img style='max-width: 6.5rem;max-height:3.66rem;' :src="item.thumb ? item.thumb : defaultImage " class="main-img">
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="news_list_t font_b">{{$t('info.reviews')}}</div>
    <ul class="padding_l" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <li class="flex list_li" v-for="oldNews in oldNewsList" :key="oldNews.index" @click="toInfoDetail(oldNews)">
        <div class="flex_l">
          <img class='img-limit' :src="oldNews.thumb ? oldNews.thumb : defaultThumb " alt="">
        </div>
        <div class="flex_r">
          <p class="font_b news_title">{{oldNews.title}}</p>
          <!-- <p class="list_content">{{oldNews.description}} </p> -->
        </div>
      </li>
    </ul>
    <div class='no-data' v-if='oldNewsList.length ==0 && !showLoading'>
      <span>{{$t('common.noData')}}</span>
    </div>
    <p class="loading" :style="{display: showLoading ? 'block' : 'none'}" v-if="totalCount==0">
      {{$t('common.loading')}}
    </p>
  </div>
</template>
<script>
const HOT_NEWS_URL = "/api/cms/news/recommend/ ";
const OLD_NEWS_URL = "/api/cms/news/";
const DEAULT_IMAGE = "../static/images/info.png";
const DEAULT_THUMB_IMAGE = "../static/images/infoThumb.png";

export default {
  name: "Info",
  data() {
    return {
      hotNewsArr: [],
      oldNewsList: [],
      defaultThumb: DEAULT_THUMB_IMAGE,
      defaultImage: DEAULT_IMAGE,
      showLoading: true,
      loading: true,
      page: 1, //初始 page=1,默认 page_size = 10
      pageSize: 20,
      totalCount: "", //总页数
      currentCount: "" //当前页
    };
  },
  computed: {},
  mounted() {
    this.getHotNews();
    this.getOldTimeNews();
  },
  methods: {
    handleChange() {
      
      let banner = document.getElementById('banner');
      let item = banner.getElementsByClassName("mint-swipe-item");
      let prev = banner.getElementsByClassName("prev");
      let length = prev.length;
      for (let i = 0; i <length;i++) {
        prev[i].className = "mint-swipe-item";
      }
      let active = banner.getElementsByClassName("is-active");
      active[0].previousSibling.className = "mint-swipe-item prev";
     
    },
    
    toInfoDetail(oldNews) {
        //外部链接直接跳转返回
        if(oldNews.foreign_url) {
          window.location.href = oldNews.foreign_url;
          return 
        }
        let id = oldNews.id;
          window.location.href = '/info_detail/' + id;
        //ios、Android分享调动
        let this_url = window.location.host + '/info_detail/' + id;//(已变)
        let this_img = oldNews.thumb;
        let this_title = oldNews.title;
        let this_content = oldNews.description;
        if (navigator.userAgent.match(/(iPhone|iphone|ipad|ipod|iPad|iPod)/i)) {
          window.webkit.messageHandlers.JsToNativeMethod.postMessage({"type":"wallet_news",params:{"url": this_url,"img": this_img,"title":this_title, "content":this_content}});
          }
        if (navigator.userAgent.match(/(Android|android)/i)) {
          window.android.go_news(this_url,this_img,this_title,this_content);
        }

    },
    getHotNews() {
      let options = {};
      let _this = this;
      this.$axios.get(HOT_NEWS_URL, options, res => {
        if (res.code == 10000) {
          let data = res.data;
          _this.hotNewsArr = data;
        } else {
          _this.$toast(res.message);
        }
      });
    },
    getOldTimeNews() {
      let _this = this;
      let options = {
        page: _this.page,
        page_size: _this.pageSize
      };
      this.$axios.get(OLD_NEWS_URL, options, res => {
        if (res.code == 10000) {
          let data = res.data;
          let newsList = data.results;
          _this.totalCount = data.count;
          _this.currentCount = data.page_count;
          if (newsList instanceof Array && newsList.length >= 1) {
            newsList.forEach(val => {
              _this.oldNewsList.push(val);
            });
          }

          if (_this.page * _this.pageSize >= _this.totalCount) {
            _this.loading = true;
          } else {
            _this.loading = false;
          }
        } else {
          this.$toast(res.message);
        }
      });
    },
    loadMore() {
      this.page = this.page + 1;
      this.loading = true;
      this.showLoading = true;
      setTimeout(() => {
        this.getOldTimeNews();
        this.showLoading = false;
      }, 2000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style  type="text/css" scoped>
@import "../assets/css/info";
.mint-swipe {
  height: 5rem;
  overflow: visible !important;
  width: 90%;
  margin: 0 auto;
}
.mint-swipe-item {
  height: auto;
}
.img-limit {
    max-width: 1.26rem;
    max-height: 1.26rem;
}

/* .info_banner .mint-swipe-items-wrap div.is-active {
  width: 90%;
  margin-left: 7%;
}
.mint-swipe-item.prev {
  display: block;
  left: 8%;
}
.mint-swipe-item.is-active + div {
  display: block;
  left: 200%;
} */
/* .info_banner .mint-swipe-item.is-active + div {
  width: 90%;
  margin-left: -14%;
}

.info-container {
  text-align: left;
} */
.info-container {
  overflow: hidden;
}
.mint-swipe-items-wrap {
  overflow: visible !important;
}

.loading,
.no-data {
  font-size: 0.2rem;
  text-align: center;
  padding-bottom: 0.3rem;
}
</style>
<style>
.info_banner .mint-swipe-indicators{
  bottom: 0px;
}
</style>