<template>
<div>
    <div>
        <div class="container header_container">
        </div>
        <div class="container introduction_container">
            <div class="title wow slideInUp" data-wow-duration="1.5s"><span>{{$t("hooHome.introduction_title")}}</span></div>
            <div class="row introduction_row">
                <div class="col-xs-12 col-lg-4 item wow slideInUp" data-wow-duration="1.5s">
                    <img src="./hoohome/image/mobile/securely_icon.png" alt="">
                    <p class="tips">{{$t("hooHome.m_introduction_tips01")}}</p>
                    <p class="colortips">{{$t("hooHome.m_introduction_colortips01")}}</p>
                </div>
                <div class="col-xs-12 col-lg-4 item wow slideInUp" data-wow-duration="1.5s">
                    <img src="./hoohome/image/mobile/comfortably_icon.png" alt="">
                    <p class="tips">{{$t("hooHome.m_introduction_colortips02")}}</p>
                    <p class="colortips" >{{$t("hooHome.m_introduction_colortips02")}}</p>
                </div>
                <div class="col-xs-12 col-lg-4 item wow slideInUp" data-wow-duration="1.5s">
                    <img src="./hoohome/image/mobile/taransaction_icon.png" alt="">
                    <p class="tips" set-lan="html:m_introduction_tips03">{{$t("hooHome.m_introduction_tips03")}}</p>
                    <p class="colortips">{{$t("hooHome.m_introduction_tips03")}}</p>
                </div>
            </div>
            <div class="item_wrap">
                <div class="item wow slideInUp" data-wow-duration="1.5s">
                    <img src="./hoohome/image/mobile/securely_icon.png" alt="">
                    <p class="tips">{{$t("hooHome.introduction_tips01_up")}}<br>{{$t("hooHome.introduction_tips01_down")}}</p>
                    <div class="line"></div>
                    <p class="colortips">{{$t("hooHome.introduction_colortips01_up")}}<br>{{$t("hooHome.introduction_colortips01_down")}}</p>
                </div>
                <div class="item wow slideInUp" data-wow-duration="1.5s">
                    <img src="./hoohome/image/mobile/comfortably_icon.png" alt="">
                    <p class="tips">{{$t("hooHome.introduction_tips02_up")}}<br>{{$t("hooHome.introduction_tips02_down")}}</p>
                    <div class="line"></div>
                    <p class="colortips">{{$t("hooHome.introduction_colortips02_up")}}<br>{{$t("hooHome.introduction_colortips02_down")}}</p>
                </div>
                <div class="item wow slideInUp" data-wow-duration="1.5s">
                    <img src="./hoohome/image/mobile/taransaction_icon.png" alt="">
                    <p class="tips">{{$t("hooHome.introduction_tips03_up")}}<br>{{$t("hooHome.introduction_tips03_down")}}</p>
                    <div class="line"></div>
                    <p class="colortips">{{$t("hooHome.introduction_colortips03")}}</p>
                </div>
            </div>
        </div>
        <div class="container introduction_container features_container">
            <div class="title wow slideInUp" data-wow-duration="1.5s"><span class="features_span">{{$t("hooHome.features_title")}}</span></div>
            <div class="row features_row">
                <div class="col-xs-12 col-lg-4 item wow slideInUp" data-wow-duration="1s">
                    <div class="sub_title">{{$t("hooHome.features_sub_title01")}}</div>
                    <p class="color_tit">{{$t("hooHome.features_color_tit01")}}</p>
                    <div class="txt_box">
                        <p>
                            <img src="./hoohome/image/mobile/right.png" alt="">
                            <span>{{$t("hooHome.features_span01_up")}}<br>{{$t("hooHome.features_span01_down")}}</span>
                        </p>
                        <p>
                            <img src="./hoohome/image/mobile/right.png" alt="">
                            <span>{{$t("hooHome.features_span02_up")}}<br>{{$t("hooHome.features_span02_down")}}</span>
                        </p>
                        <p>
                            <img src="./hoohome/image/mobile/right.png" alt="">
                            <span>{{$t("hooHome.features_span03")}}</span>
                        </p>
                        <p>
                            <img src="./hoohome/image/mobile/right.png" alt="">
                            <span>{{$t("hooHome.features_span04")}}</span>
                        </p>
                    </div>
                </div>
                <div class="col-xs-12 col-lg-4 item wow slideInUp" data-wow-duration="2s">
                    <div class="sub_title">{{$t("hooHome.features_sub_title02")}}</div>
                    <p class="color_tit" >{{$t("hooHome.features_color_tit02")}}</p>
                    <div class="txt_box">
                        <p>
                            <img src="./hoohome/image/mobile/right.png" alt="">
                            <span>{{$t("hooHome.features_span05")}}</span>
                        </p>
                        <p>
                            <img src="./hoohome/image/mobile/right.png" alt="">
                            <span >{{$t("hooHome.features_span06")}}</span>
                        </p>
                        <p>
                            <img src="./hoohome/image/mobile/right.png" alt="">
                            <span>{{$t("hooHome.features_span07")}}</span>
                        </p>
                        <p>
                            <img src="./hoohome/image/mobile/right.png" alt="">
                            <span>{{$t("hooHome.features_span08")}}</span>
                        </p>
                        <p>
                            <img src="./hoohome/image/mobile/right.png" alt="">
                            <span>{{$t("hooHome.features_span09")}}</span>
                        </p>
                    </div>
                </div>
                <div class="col-xs-12 col-lg-4 item wow slideInUp" data-wow-duration="3s">
                    <div class="sub_title">{{$t("hooHome.features_sub_title03")}}</div>
                    <p class="color_tit">{{$t("hooHome.features_color_tit03")}}</p>
                    <div class="txt_box">
                        <p>
                            <img src="./hoohome/image/mobile/right.png" alt="">
                            <span>{{$t("hooHome.features_span10")}}</span>
                        </p>
                        <p>
                            <img src="./hoohome/image/mobile/right.png" alt="">
                            <span>{{$t("hooHome.features_span11")}}</span>
                        </p>
                        <p>
                            <img src="./hoohome/image/mobile/right.png" alt="">
                            <span>{{$t("hooHome.features_span12")}}</span>
                        </p>
                        <p>
                            <img src="./hoohome/image/mobile/right.png" alt="">
                            <span>{{$t("hooHome.features_span13")}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container introduction_container contact_container">
            <div class="title wow slideInUp" data-wow-duration="1.5s"><span set-lan="html:contact_title">{{$t("hooHome.contact_title")}}</span></div>
            <div class="row">
                <div class="col-xs-12 col-lg-2 item wow slideInUp" data-wow-duration="1.5s">
                    <img src="./hoohome/image/mobile/serviceemail_icon.png" alt="">
                    <p class="tips">{{$t("hooHome.contact_tips01")}}</p>
                    <p class="colortips">{{$t("hooHome.contact_colortips01")}}</p>
                </div>
                <div class="col-xs-12 col-lg-3 item wow slideInUp" data-wow-duration="1.5s">
                    <img src="./hoohome/image/mobile/cooperration_icon.png" alt="">
                    <p class="tips" set-lan="html:contact_tips02">{{$t("hooHome.contact_tips02")}}</p>
                    <p class="colortips" set-lan="html:contact_colortips02">{{$t("hooHome.contact_colortips02")}}</p>
                </div>
                <div class="col-xs-12 col-lg-2 item wow slideInUp" data-wow-duration="1.5s">
                    <div class="smallQRcode">
                        <img src="./hoohome/image/index/QRcode.png" alt="">
                    </div>
                    <img class="Wechat_img" src="./hoohome/image/mobile/wechat_icon.png" alt="">
                    <p class="tips" set-lan="html:contact_tips03">{{$t("hooHome.contact_tips03")}}</p>
                    <p class="colortips" set-lan="html:contact_colortips03">{{$t("hooHome.contact_colortips03")}}</p>
                </div>
            </div>
        </div>
        <div class="container foot_container">
            <div class="foot_wrap wow slideInUp">
                <span>Copyright © 2019 goPro halfwater All rights reserved.</span>
                <span style='display:block; margin-left:15px;'><a href='http://www.miitbeian.gov.cn'>备案号：粤ICP备19033924号</a></span>
            </div>
        </div>
    </div>
</div>

<!-- </html> -->
</template>
<script>
import downloadTips from '../components/downloadTips'
import language from '../components/language'
export default {
    components:{
        downloadTips,
        language
    },
    data() {
        return {
            downShow:false,
            qrCodeShow:false,
        }
    },
    created() {
        this.downloadShow();
    }, 
    methods: {
        downloadShow() {
          let us = navigator.userAgent; //区分h5/ web端
          if (us.match(/(iPhone|iphone|ipad|ipod|iPad|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)){
              this.downShow = true;
          }else{
              this.downShow = false;
          }
        },
        enterFn() {
            this.qrCodeShow = true;
        },
        leaveFn() {
            this.qrCodeShow = false;
        }
    }
}
</script>
<style scoped>
@import  "./hoohome/bootstrap/css/bootstrap.min.css";
@import "./hoohome/css/animate.min.css";
@import "./hoohome/css/select2.min.css";
@import "./hoohome/css/index.min.css";
@import "./hoohome/css/popup.css";

.header_row {
    overflow: unset;
}
.header_row .link_box {
    top: .4rem;
}
</style>

