    (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth
                if (!clientWidth) return
                if (clientWidth >= 750) {
                    docEl.style.fontSize = '100px'
                } else {
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
                }
            }
        if (!doc.addEventListener) return
        win.addEventListener(resizeEvt, recalc, false)
        doc.addEventListener('DOMContentLoaded', recalc, false)

        //根据平台选择下载。
        userAgentGlobal = ''; userAgentBrowser=''; userAgentHooApp ='';

        if (navigator.userAgent.match(/(hufuapp)/i)) {
            userAgentHooApp = 'hufuapp'; //hufuApp 、如无为空
        }

        if (navigator.userAgent.match(/(iPhone|iphone|ipad|ipod|iPad|iPod)/i)) {
            userAgentGlobal = 'iphone';
        } else if (navigator.userAgent.match(/(Android|android)/i)) {
            userAgentGlobal = 'android';
        } else {
            userAgentGlobal = 'other';
        }
        
        //判断是否是微信或者qq浏览器打开的。
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/qq\//i) == "qq/") {
            console.dir('weixin-qqq')
            userAgentBrowser='weixinQQ'
        }

    })(document, window)
