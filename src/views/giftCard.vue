<template>
    <div>
        <div class="gift_container" >
            <div class="gift_head box_sh" :style="{backgroundImage:'url('+coverImage+')'}">
                <div class="card_pas">{{$t('gift.cardPassword')}}</div>
                <div class="card_num font_w">{{cardInfoObj.password}}</div>
                <div class="card_flex flex">
                    <div class="card_left">￥<span class="rmb">{{cardInfoObj.rmb ? cardInfoObj.rmb : '--'}}</span >/<span class="card_num2">{{cardInfoObj.card_num ? cardInfoObj.card_num : '--'}}</span>{{$t('gift.sheet')}}</div>
                    <div class="card_right flex">
                        <ul>
                            <li class="card-coin" v-for='item in coinsList' :key="item.index">
                                <img :src="item.coin_icon" alt="">
                            </li>
                        </ul>
                    </div>
                    <p class="image_more" v-if="coinsImgLength > 3">...</p>
                </div>
            </div>
            <div class="box_sh gift_dui border_r2 flex">
                <div class="img_left"><img :src="userInfo.user_face ? userInfo.user_face : '../static_h5/images/headportrait.png'" alt=""></div>
                <div class="img_right">
                    <p class="font_w user_nickname">{{userInfo.nickname}}</p>
                    <p class="user_title">{{title}}</p>
                </div>
            </div>
            <div class="gift_login border_r2 box_sh" v-if="giftCardStatus === 0" >
                        <div style="height: .3rem;"></div>
                        <input type="hidden">
                <div class="phone border_r2">
                    <span class="country">+86</span>
                    <span class="line"></span>
                    <input type="tel" class="input_phone input_shu" :placeholder="$t('placeholder.phone')"  v-model="phone" maxlength="20" >
                </div>
                <div class="code flex">
                    <input type="tel" :placeholder="$t('placeholder.codeMsg')" class="input_code border_r2 input_shu"  @keyup="handleFilterLetters('codeValue')" maxlength="6" v-model="codeValue">
                    <button class="code_try border_r2 get_code" v-if='!timeoutFlag' @click="getPhoneCode">{{$t('common.getCodeMsg')}}</button>
                    <div class="border_r2 code_try" v-else><span id="num">{{timeNumber}}</span>{{$t('common.secondeRepeat')}}</div>
                </div>
                <div v-if='errorMsg' class="error">{{errorMsg}}</div>
                <div class="confirm_btn">
                    <div id="confirm_div" :class="[disabledShow==true?'disabled':'']" @click="confirmGiftCard">{{$t('gift.confirmGet')}}</div>
                </div>
            </div>
            <div class="gift_no gift_wan" v-else-if="giftCardStatus == 1" >{{$t('gift.apologyGiftIsOver')}}</div>
            <div class="gift_no gift_shi" v-else-if="giftCardStatus == 2">{{$t('gift.apologyGiftIsInvalide')}}</div>
            <div style="height:2rem;"></div>
            
        </div>
        <downloadTips></downloadTips>
    </div>
</template>
<script>
import downloadTips from "../components/downloadTips";

const GIFT_CARD_PASS_URL = "/api/giftcard/card_pass/";
const CONFIRM_LOGIN_URL = "/api/user/login/by_phonecode/";
const PHONE_CODE_URL = "/api/user/phonecode/send/";
const PHONE_SEND_TYPE = "login";

export default {
  name: "GiftCard",
  components: {
    downloadTips
  },
  data() {
    return {
      phone: "",
      errorMsg: "",
      timeoutFlag: false,
      timeNumber: 60,
      codeValue: "",
      cardId: "",
      cardInfoObj: "",
      coinsList: [],
      coinsImgLength: "",
      title: "",
      userInfo: "",
      giftCardStatus: "",
      coverImage: "",
      disabledShow: true
    };
  },
  mounted() {
    this.cardId = window.location.search.split("=")[1];
    console.dir(this.$route.query.card_id);
    this.getGiftCardInfo(this.cardId);
  },
  watch: {
    codeValue() {
      if (this.codeValue && this.phone) {
        this.disabledShow = false;
      }else{
        this.disabledShow = true;
      }
    },
    phone() {
      if (this.codeValue && this.phone) {
        this.disabledShow = false;
      }else{
        this.disabledShow = true;
      }
    },
  },
  methods: {
    getGiftCardInfo(cardId) {
      let options = {};
      if (!cardId) {
        return this.$toast("卡密获取异常");
      }
      this.$axios.get(GIFT_CARD_PASS_URL + this.cardId, options, res => {
        if (res.code == 10000) {
          console.dir(res.data);
          let data = res.data;
          let coins = data.coins;
          this.cardInfoObj = data;
          this.coinsImgLength = coins.length;
          this.title = data.title;
          this.userInfo = data.user;
          this.giftCardStatus = data.status;
          this.giftCardPassword = data.password;
          this.coverImage = data.cover_url;

          if (coins instanceof Array && coins.length > 0) {
            coins.forEach((val, index) => {
              if (index == 3) {
                return;
              }
              this.coinsList.push(val);
            });
          }
        } else {
          this.$toast(res.message);
        }
      });
    },

    handleFilterLetters(val) {
      let self = this;
      self[val] = self[val].replace(/[^\d]/g, "");
      if (val == "phone") {
        if (self.phone == null || !/^\d{4,20}$/.test(self.phone)) {
          self.errorMsg = "手机号不合法";
        } else {
          self.errorMsg = "";
        }
      }
    },
    getPhoneCode() {
      let _this = this;
      if (!this.phone) {
        this.errorMsg = "手机号不能为空";
        return;
      }else{
        this.errorMsg = "";
      }
      if (this.phone == null || !/^\d{4,20}$/.test(this.phone)) {
        this.errorMsg = "手机号不合法";
        return;
      }else{
        this.errorMsg = "";
      }

      let options = {
        phone: this.phone,
        code_type: PHONE_SEND_TYPE
      };
      this.$axios.post(PHONE_CODE_URL, options, res => {
        if (res.code == 10000) {
        } else {
          this.errorMsg = res.message;
          return (this.timeoutFlag = false);
        }
      });
      this.timeoutFlag = true;
      let timer = setInterval(() => {
        if (this.timeNumber > 1) {
          this.timeNumber--;
        } else {
          clearInterval(timer);
          timer = null;
          _this.timeoutFlag = false;
        }
      }, 1000);
    },
    //确认领取
    confirmGiftCard() {
      if (this.disabledShow == false) {
        if (!this.codeValue || !this.phone) {
          this.errorMsg = "手机号或验证码不能为空";
          return;
        }
        let options = {
          phonecode: this.codeValue,
          phone: this.phone,
          country_code: this.countryCode || "86",
          giftcard_pass: this.giftCardPassword
        };
        this.$axios.post(CONFIRM_LOGIN_URL, options, res => {
          if (res.code == 10000) {
            let data = res.data;
            let checkResult = data.check_result;
            if (checkResult == "success" || checkResult == "repeat") {
              this.$router.push({
                path: "/gift_result",
                query: {
                  checkResult: checkResult,
                  giftCardPass: this.giftCardPassword
                }
              });
            } else {
              this.$router.go(0);
            }
          } else {
            this.errorMsg = res.message;
          }
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  type="text/css" scoped>
@import "../assets/css/giftCard";
</style>