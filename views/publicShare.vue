<template>
    <div class="share_container">
        <div class="down_load flex">
            <p><img src="../assets/images/logo2.png" alt=""></p>
            <p><span class="bg"><router-link  style="color:#fff" to="/download">{{$t('download.textDownload')}}</router-link></span></p>
        </div>
        <div class="header">
            <p class="header_item">{{$t('publicShare.yourFriend')}}<span class="font_w">{{friendName}}</span>{{$t('publicShare.nowInviteYouJoin')}}</p>
            <p class="header_item"><span class="font_w">{{teamName}} {{multiwalletRuleTag}}</span>{{$t('publicShare.title')}}</p>
            <p class="tips header_item">-{{$t('publicShare.please')}}<span class="bold_font time_get">{{validTime}}</span>{{$t('publicShare.confirmOrExipirationTime')}} -</p>
            <div class="phone border_r2 flex">
                <p>+86</p>
                <input type="tel" class="input_phone" :placeholder="$t('placeholder.phone')" v-model="phone" maxlength="20" >
            </div>
            <div class="check_code_box flex">
                <input class="check_code border_r2 input_code" type="tel" @keyup="handleFilterLetters('codeValue')" :placeholder="$t('placeholder.codeMsg')" maxlength="6" v-model="codeValue">
                <button class="code_try border_r2 get_code" v-if='!timeoutFlag' @click="getPhoneCode">{{$t('publicShare.getCodeMsg')}}</button>
                <div class="border_r2 code_try"  v-else><span id="num">{{timeNumber}}</span>{{$t('publicShare.secondeRepeat')}}</div>
            </div>
            <div v-if='errorMsg' class="error">{{$t(errorMsg)}}</div>
            <button class="join_btn bg border_r2 confirm_btn" @click="confirmJoin">{{$t('publicShare.confirmJoin')}}</button>
        </div>
        <div class="agreement"><p>{{$t('publicShare.joinIsAgree')}}<router-link to="/protocol">《{{$t('publicShare.hooWalletProtocol')}}》</router-link></p></div>
        <div class="public_member  flex">
            <p>{{$t('publicShare.memberConfirm')}}<span>（{{$t('publicShare.createPulicNeedConfirm')}}）</span></p>
            <p>{{teamUsed}}/{{teamCount}}</p>
        </div>
          
        <div class="public_lists" v-for="item in membersList" :key="item.index">
                <div class="public_list" v-show="item.status == 1">
                    <div class="line flex">
                        <span class="circle_r"></span>
                        <p class="right"></p>
                    </div>
                    <div class="public_li box_sh border_r2" :class="{position_r:item.is_founder == 1}">
                        <p class="faqi position_a" v-if="item.is_founder == 1"></p>
                        <div class="content flex">
                            <p><img :src="item.member_pic ? item.member_pic :'../static/images/defaultImg.png'" alt=""></p>
                            <!-- 已确认加入 -->
                            <div class="content_center">
                                <p>{{item.member_name}}</p>
                                <p v-if="item.member_confirm_at != 0">{{item.member_confirm_at | moment}}</p>
                            </div>
                            <!-- share模式 -->
                            <div class="content_r" v-if='ruleType=="share" && item.status == 1'>
                                <p>{{item.member_share}}%</p>
                                <p>{{$t('publicShare.hadConfirmed')}}</p>
                            </div>
                            <!-- member模式 -->
                            <p class="right" v-if="item.status && ruleType=='member' "><img src="../assets/images/right.png" alt=""></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        <div class="public_lists" v-show="teamUsed != teamCount">
            <div class="public_list">
                <div class="line flex">
                    <span class="circle_k"></span>
                    <p class="right"></p>
                </div>
                <div class="public_li box_sh border_r2">
                    <div class="content flex">
                        <p><img src="../../static/images/defaultImg.png"></p>
                        <div class="content_center">{{$t('publicShare.waitingJoin')}}</div>
                    </div>
                </div>
            </div>
        </div>
        <hooFooter></hooFooter>
    </div>
</template>

<script>
import hooFooter from '../components/hooFooter';

const INVITE_JOIN_URL = "/api/multiwallet/invite_join/"; //提交POST数据
const PHONE_CODE_URL = "/api/user/phonecode/send/";
const FRIEND_INFO_URL = "/api/multiwallet/invite_join/"; //获取GET数据
const PHONE_TYPE = "multiwallet_join";

export default {
  name: "PublicShare",
  components: {
    hooFooter
  },
  data() {
    return {
      friendName: "",
      teamName: "",
      teamCount: "",
      teamUsed: "",
      validTime: "",
      limitTime: "",
      phone: "",
      errorMsg: "",
      timeoutFlag: false,
      timeNumber: 60,
      codeValue: "",
      ruleType: "", // member(成员), share(份额),
      countryCode: "", // 86-中国
      inviteUuid: "",
      multiwalletRuleTag: "",
      membersList: []
    };
  },
  created() {
    //获取 url中 ruleType 、inviteUuid
    let queryArr = window.location.search.substr(1).split("&");
    let _this = this;
    if (queryArr.length > 0) {
      queryArr.forEach(val => {
        if (val.includes("invite_uuid")) {
          let _val = val.split("=");
          _this.inviteUuid = _val[1];
        }
        if (val.includes("rule_type")) {
          let _val = val.split("=");
          _this.ruleType = _val[1];
        }
      });
    }
  },
  mounted() {
    this.getfriendInfo();
  },
  methods: {
    handleFilterLetters(val) {
      let self = this;
      self[val] = self[val].replace(/[^\d]/g, "");
      if (val == "phone") {
        if (self.phone == null || !/^(1[1-9])\d{9}$/.test(self.phone)) {
          self.errorMsg = "errors.phoneError";
        } else {
          self.errorMsg = "";
        }
      }
    },

    getfriendInfo() {
      let _this = this;
      let options = {
        rule_type: this.ruleType,
        invite_uuid: this.inviteUuid
      };
      this.$axios.get(FRIEND_INFO_URL, options, res => {
        if (res.code == 10000) {
          let data = res.data;
          let members = data.members;
          _this.teamName = data.multiwallet_name;
          _this.friendName = data.nick_name;
          _this.teamCount = data.member_count;
          _this.teamUsed = data.member_confirmed;
          _this.limitTime = data.multiwallet_time_left;
          _this.multiwalletRuleTag = data.multiwallet_rule_tag;
          localStorage.setItem("teamName", _this.teamName);

          if (members instanceof Array && members.length > 0) {
            members.forEach(val => {
              _this.membersList.unshift(val);
            });
          }

          //时间倒计时显示
          if (this.limitTime) {
            this.setIntervalFn(this.limitTime);
          } else {
            this.validTime = "00:00:00";
          }
        } else {
          this.$toast(res.message);
        }
      });
    },

    getPhoneCode() {
      let _this = this;
      this.timeNumber = 60;
      if (!this.phone) {
        this.errorMsg = "errors.pleaseInputPhone";
        return;
      }
      if (!/^\d{4,20}$/.test(this.phone)) {
        this.errorMsg = "errors.phoneError";
        return;
      }else{
        this.errorMsg = "";
      }

      let options = {
        phone: this.phone,
        code_type: PHONE_TYPE
      };
      this.$axios.post(PHONE_CODE_URL, options, res => {
        if (res.code == 10000) {
          _this.timeoutFlag = true;
          let timer = setInterval(() => {
            if (_this.timeNumber > 1) {
              _this.timeNumber--;
            } else {
              clearInterval(timer);
              timer = null;
              _this.timeoutFlag = false;
            }
          }, 1000);
        } else {
          _this.errorMsg = res.message;
          return (_this.timeoutFlag = false);
        }
      });
    },
    confirmJoin() {
      const that = this;
      if (!this.phone) {
        this.errorMsg = "errors.pleaseInputPhone";
        return;
      }
      if (!/^\d{4,20}$/.test(this.phone)) {
        this.errorMsg = "errors.phoneError";
        return;
      }
      if (this.codeValue == "") {
        this.errorMsg = "errors.codeMsgNull";
        return;
      }
      if (this.validTime == "00:00:00") {
        this.errorMsg = "errors.invitedNoEffication";
        return;
      }
      let options = {
        code_value: this.codeValue,
        rule_type: this.ruleType,
        country_code: this.countryCode || "86",
        invite_uuid: this.inviteUuid,
        phone: this.phone
      };
      this.$axios.post(
        INVITE_JOIN_URL,
        options,
        res => {
          if (res.code == 10000) {
            that.$router.push({ path: "/success_add" });
          } else {
            that.errorMsg = res.message;
          }
        },
        err => {
          that.$toast(that.$t("networkError"));
        }
      );
    },
    //默认输入秒
    setIntervalFn(time) {
      let _this = this;
      if (typeof time == "string") {
        time = Number(time);
      }
      let secondTime = time * 1; //变为秒
      if (secondTime) {
        setInterval(() => {
          if (secondTime > 0) {
            secondTime--;
            let hour =
              parseInt(secondTime / (60 * 60)) < 10
                ? "0" + parseInt(secondTime / (60 * 60))
                : parseInt(secondTime / (60 * 60));
            let minute =
              parseInt((secondTime - hour * 60 * 60) / 60) < 10
                ? "0" + parseInt((secondTime - hour * 60 * 60) / 60)
                : parseInt((secondTime - hour * 60 * 60) / 60);
            let second =
              parseInt(secondTime % 60) < 10
                ? "0" + parseInt(secondTime % 60)
                : parseInt(secondTime % 60);
            _this.validTime = hour + ":" + minute + ":" + second;
          }
        }, 1000);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  type="text/css" scoped>
@import "../assets/css/publicShare";
</style>
