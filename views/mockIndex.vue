<template>
<div>
    <div>
        <div class="container header_container">
            <div class="header_row">
                <img class="logo img-responsive center-block" src="./hoohome/image/index/logo.jpg" alt="">
                <div class="link_box">
                    <!-- <a href="https://eos.hoo.com/">{{$t("hooHome.header_link01")}}</a> -->
                    <!-- <a href="https://eos.hoo.com/emergency" >{{$t("hooHome.header_link02")}}</a> -->
                </div>
                <!-- <language style='top: -.3rem;'></language> -->
            </div>
            <!-- <div class="container_tit wow slideInUp" data-wow-duration="1.5s">
                <h1 class="col-xs-12 title">{{$t("hooHome.header_title")}}</h1>
                <h2 class="col-xs-12 sub_title">{{$t("hooHome.header_sub_title")}}</h2>
                <template v-if='downShow'>
                    <div id="download_btn" class="download_btn">
                        <a href='https://m.hoo.com/download' style='color:#fff;'>{{$t("hooHome.header_download_btn")}}</a>
                    </div>
                </template>
                <template v-else>
                    <div id="download_btn" class="download_btn" @mouseenter="enterFn" v-show='!qrCodeShow'>
                        <a href='https://m.hoo.com/download' style='color:#fff;'>{{$t("hooHome.header_download_btn")}}</a>
                    </div>    
                </template>
                <div class="QRcode" v-show='qrCodeShow'  @mouseleave="leaveFn">
                    <img src="./hoohome/image/index/QRcode.png" alt="">
                    <span>{{$t("hooHome.header_span")}}</span>
                </div>
            </div>
            <div class="banner_img visible-lg-block wow slideInUp" data-wow-duration="1.5s">
                <img src="./hoohome/image/index/Mac.png" class="computer_img img-responsive center-block" alt="">
            </div> -->
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
        <div class="container aboutus_container">
            <div class="title wow slideInUp" data-wow-duration="1.5s"><span>{{$t("hooHome.aboutus_title")}}</span></div>
            <!--<img src="./hoohome/image/index/people.png" class="container-fluid aboutus_container_img  img-responsive center-block wow slideInUp" data-wow-duration="1.5s" alt="">-->
            <div class="aboutus_container_img wow slideInUp" data-wow-duration="1.5s"></div>
            <div class="txt_box wow slideInUp" data-wow-duration="1.5s">
                <h2 class="color_tit">{{$t("hooHome.aboutus_color_tit")}}</h2>
                <p>{{$t("hooHome.aboutus_p1")}}</p>
                <p>{{$t("hooHome.aboutus_p2")}}</p>
                <p>{{$t("hooHome.aboutus_p3_up")}}<br>{{$t("hooHome.aboutus_p3_down")}}</p>
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
        <div class="container middle_container">
            <div class="container_tit wow slideInUp" data-wow-duration="1.5s">
                <h1 class="col-xs-12 title">{{$t("hooHome.middle_title")}}</h1>
                <h2 class="col-xs-12 sub_title">{{$t("hooHome.middle_sub_title")}}</h2>
                <!-- <template v-if='downShow'>
                    <div id="download_btn" class="download_btn">
                        <a href='https://m.hoo.com/download' style='color:#fff;'>{{$t("hooHome.header_download_btn")}}</a>
                    </div>
                </template>
                <template v-else>
                    <div id="download_btn" class="download_btn" @mouseenter="enterFn" v-show='!qrCodeShow'>
                        <a href='https://m.hoo.com/download' style='color:#fff;'>{{$t("hooHome.header_download_btn")}}</a>
                    </div>    
                </template> -->
                <div class="QRcode" v-show='qrCodeShow'  @mouseleave="leaveFn">
                    <img src="./hoohome/image/index/QRcode.png" alt="">
                    <span>{{$t("hooHome.header_span")}}</span>
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
                <div class="col-xs-12 col-lg-1 item wow slideInUp" data-wow-duration="1.5s">
                    <img src="./hoohome/image/mobile/twitter_icon.png" alt="">
                    <p class="tips" set-lan="html:contact_tips04">{{$t("hooHome.contact_tips04")}}</p>
                    <p class="colortips"><a href="https://twitter.com/goProWallet" set-lan="html:contact_colortips04">{{$t("hooHome.contact_colortips04")}}</a></p>
                </div>
                <div class="col-xs-12 col-lg-2 item wow slideInUp" data-wow-duration="1.5s">
                    <img src="./hoohome/image/mobile/telegram_icon.png" alt="">
                    <p class="tips" set-lan="html:contact_tips05">{{$t("hooHome.contact_tips05")}}</p>
                    <p class="colortips"><a href="http://t.cn/R1JCcI7" set-lan="html:contact_colortips05">{{$t("hooHome.contact_colortips05")}}</a></p>
                </div>
            </div>
        </div>
        <div class="container cooperation_container">
            <div class="title wow slideInUp" data-wow-duration="1.5s">
                <span set-lan="html:cooperation_title">{{$t("hooHome.cooperation_title")}}</span>
            </div>
            <div class="row">
                <div class="col-xs-12 col-lg-3 item wow slideInUp" data-wow-duration="1.5s">
                    <a class="cooperation01" href="https://bytom.io"></a>
                </div>
                <div class="col-xs-12 col-lg-3 item wow slideInUp" data-wow-duration="1.5s">
                    <a class="cooperation02" href="https://www.slowmist.com"></a>
                </div>
                <div class="col-xs-12 col-lg-3 item wow slideInUp" data-wow-duration="1.5s">
                    <a class="cooperation03" href="https://www.qiedalu.com/"></a>
                </div>
                <div class="col-xs-12 col-lg-3 item wow slideInUp" data-wow-duration="1.5s">
                    <a class="cooperation04" href="https://www.imeos.one/"></a>
                </div>
            </div>
        </div>
        <div class="container friendship_container">
            <div class="title wow slideInUp" data-wow-duration="1.5s">
                <span set-lan="html:friendship_title">{{$t("hooHome.friendship_title")}}</span>
            </div>
            <div class="row">
                <div class="  item wow slideInUp" data-wow-duration="1.5s">
                    <a class="friendship" href="http://www.8btc.com/" >{{$t("hooHome.friendship_txt001")}}</a>
                </div>
                <div class=" item wow slideInUp" data-wow-duration="1.5s">
                    <a class="friendship" href="https://www.feixiaohao.com">{{$t("hooHome.friendship_txt03")}}</a>
                </div>
                <div class="  item wow slideInUp" data-wow-duration="1.5s">
                    <a class="friendship" href="http://www.ttrar.com/" set-lan="html:friendship_txt01">{{$t("hooHome.friendship_txt01")}}</a>
                </div>
                <div class="  item wow slideInUp" data-wow-duration="1.5s">
                    <a class="friendship" href="https://www.520apk.com/" set-lan="html:friendship_txt02">{{$t("hooHome.friendship_txt02")}}</a>
                </div>
                <div class="  item wow slideInUp" data-wow-duration="1.5s">
                    <a class="friendship" href="https://www.62.com/" set-lan="html:friendship_txt04">{{$t("hooHome.friendship_txt04")}}</a>
                </div>
                <div class="  item wow slideInUp" data-wow-duration="1.5s">
                    <a class="friendship" href="http://xiazai.zol.com.cn/" set-lan="html:friendship_txt05">{{$t("hooHome.friendship_txt05")}}</a>
                </div>
                <div class="  item wow slideInUp" data-wow-duration="1.5s">
                    <a class="friendship" href="https://www.hackhome.com/" set-lan="html:friendship_txt06">{{$t("hooHome.friendship_txt06")}}</a>
                </div>
                <div class="  item wow slideInUp" data-wow-duration="1.5s">
                    <a class="friendship" href="http://www.downcc.com/soft/" set-lan="html:friendship_txt07">{{$t("hooHome.friendship_txt07")}}</a>
                </div>
                <div class="  item wow slideInUp" data-wow-duration="1.5s">
                    <a class="friendship" href="http://www.veryhuo.com/" set-lan="html:friendship_txt08">{{$t("hooHome.friendship_txt08")}}</a>
                </div>
                <div class="  item wow slideInUp" data-wow-duration="1.5s">
                    <a class="friendship" href="https://www.yqdown.com/" set-lan="html:friendship_txt09">{{$t("hooHome.friendship_txt09")}}</a>
                </div>
                <div class="  item wow slideInUp" data-wow-duration="1.5s">
                    <a class="friendship" href="http://www.downkr.com/" set-lan="html:friendship_txt10">{{$t("hooHome.friendship_txt10")}}</a>
                </div>
                <div class="  item wow slideInUp" data-wow-duration="1.5s">
                    <a class="friendship" href="http://www.pconline.com.cn">{{$t("hooHome.friendship_txt11")}}</a>
                </div>
            </div>
        </div>
        <div class="container foot_container">
            <div class="foot_wrap wow slideInUp" data-wow-duration="1.5s">
                <img src="./hoohome/image/index/logo.jpg" alt="">
                <span>Copyright © 2019 goPro halfwater All rights reserved.</span>
            </div>
        </div>
    </div>
    <downloadTips v-if='downShow'></downloadTips>
    <!-- eos注册提示弹框 开始  -->
    <!-- <div class='popWrap'>
        <div class="bgBack"></div>
        <div class="pop_modal" id="pop_bg_img">
            <div class="pop_modal_close2" id='popClose'></div>
            <div class="invite_title" >EOS账号快捷注册</div>
            <div class="invite_tips" >支持多种数字货币结算，简单注册,无需四处求人，快速注册你的EOS账户。</div>
            <button class="submit_problem cur_p">
                <a  href="https://eos.hoo.com/">立即注册</a>
            </button>
        </div>
    </div> -->
    <!-- eos注册提示弹框 结束  -->
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

