<template>
    <div class='gift-result-wrap'>
        <div class="header">
            <div class="success_box" v-if="checkResult == 'success'">
                <span class="success_img" ></span>
                <p class="sueecee_txt">{{$t('gift.getSuccess')}}</p>
            </div>
            <p class="tips" v-if="checkResult == 'repeat'">{{$t('gift.youHadCardNoRepeat')}}</p>
        </div>
        <div class="container" v-if="(checkResult == 'success')">
            <p class="data_txt">{{$t('gift.belowListsHooWallet')}}</p>
            <ul class="data_box">
                <li class="data_box_item" v-for="item in coinsList" :key="item.index">
                    <img class="box_left" :src="item.coin_icon">
                    <div class="box_right">
                        <div>
                            <p class="txt">{{item.coin_name}}</p>
                            <p class="sub_txt">{{item.coin_full_name}}</p>
                        </div>
                        <p class="count">{{item.amount}}{{item.coin_short_name}}</p>
                    </div>
                </li>
            </ul>
            <div style="height:4rem;"></div>
        </div>
        <div class="footer">
            <p class="txt">{{$t('download.nowDownloadAppDetail')}}</p>
              <a class="btn ios_btn" v-if="userAgentFlag == 'iphone'" href="https://itunes.apple.com/hk/app/id1387872759" >{{$t('download.iosInternational')}}</a>
              <a class="btn ios_btn" v-if="userAgentFlag == 'iphone' || userAgentFlag == 'other'" href="/ios_guide/" >{{$t('download.iosNative')}}</a>
              <a class="btn android_btn" v-if="userAgentFlag == 'android' || userAgentFlag == 'other'"  href="https://qland-test.oss-cn-shenzhen.aliyuncs.com/download/hoo.apk" >{{$t('download.hooHome')}}</a>
        </div>
    </div>
</template>
<script>
const GIFT_CARD_PASS_URL = "/api/giftcard/card_pass/";

export default {
  name: "GiftResult",
  data() {
    return {
      checkResult: "",
      giftCardId: "",
      coinsList: [],
      userAgentFlag:'',
    };
  },
  mounted() {
    this.userAgentFlag = window.userAgentGlobal;            //系统判断iphone /android
    this.checkResult = this.$route.query.checkResult;
    this.giftCardId = this.$route.query.giftCardPass;
    if (this.giftCardId) {
      this.getGiftCardInfo(this.giftCardId);
    }
  },
  methods: {
    getGiftCardInfo(cardId) {
      let options = {};
      if (!cardId) {
        return this.$toast(this.$t("gift.cardPasswordError"));
      }
      this.$axios.get(GIFT_CARD_PASS_URL + cardId, options, res => {
        if (res.code == 10000) {
          let data = res.data;
          let coins = data.coins;
          this.coinsList = coins;
        } else {
          this.$toast(res.message);
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  type="text/css" scoped>
@import "../assets/css/giftCard";
.gift-result-wrap {
  font-size: .28rem;
}
</style>