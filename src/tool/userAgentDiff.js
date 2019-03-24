let userAgentFlag = '';
let weixinQQFlag = ''

function userAgentDiff () {
    
    window.onload = function() {
        if (navigator.userAgent.match(/(iPhone|iphone|ipad|ipod|iPad|iPod)/i)) {
            console.dir('IPhone')
            userAgentFlag ='ios';
            // $('.pop_guidesafari').show();
        } else if (navigator.userAgent.match(/(Android|android)/i)) {
            console.dir('android')
            userAgentFlag = 'android';
            // $('.pop_guideandriod').show();
        } else {
            // $(".android_download_btn").show();
            // $(".ios_show").show();
            // $('.pop_guidesafari').show();
            userAgentFlag = 'android';
            console.dir('other')

        }
        //判断是否是微信或者qq浏览器打开的。
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/qq\//i) == "qq/") {
            console.dir('weixin-qqq')
            weixinQQFlag = 'weixinQQ'
        }
        console.dir('utils userAgentDiff Fn')
    }
    return userAgentFlag
}
export default
{
    userAgentDiff,
    userAgentFlag,
    weixinQQFlag
}