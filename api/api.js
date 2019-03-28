// 配置API接口地址
var api_root = process.env.API_ROOT;
var safe_phone;
var get_phone;
var count_time;
// 引用axios
var axios = require('axios');
var store = require('storejs');

import CookieOption from '../tool/cookieOption';
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 自定义判断元素类型JS
function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull(o) {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key]
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key])
        }
    }
    return o
}

function apiAxios(method, url, params, success, failure, token) {
    var headerJosn = "";

    if(CookieOption.getCookie('Authorization')) {
        CookieOption.clearCookie('Authorization')
    }

    if (navigator.userAgent.match(/(iPhone|iphone|iPad|ipad|ipod|iPod)/i)) {
        // headerJosn = {
        //     'Authorization': 'Token ' + store("token")
        // }
    } else {
        headerJosn = {
            'Content-Type': 'application/json'
        }
    }
    if (!params) {
        params = {}
    }
    var timestamp = Date.parse(new Date()) / 1000
        //console.log(timestamp);

    // params.qland_token = "eun9m2tUq9t54hcs6VDySEx3g759eb4LTrx1DH20XNW7g9CYwf1w0M31rGkB"


   // params.ts = timestamp
    params = filterNull(params)
    axios({
        timeout: 20000, // 请求超时设置, 20秒
        method: method,
        url: url,
        headers: headerJosn,
        data: method === 'POST' ? params : null,
        params: (method === 'GET' || method === 'DELETE') ? params : null,
        baseURL:api_root,
        withCredentials: false,
        responseType: 'json'
    }).then(function(res) {
        // status等于200，说明接口请求成功
        // console.log(res);
        if (res.status === 200) {
            if (success) {
                success(res.data)
            }
        } else {
            // 接口返回400等
            if (failure) {
                // console.log(res.data);
                failure(res.data)
            } else {
                // console.log('error: ' + JSON.stringify(res.err_msg));
                // alert(res.data.err_msg);
            }
        }
    }).catch(function(err) {
        console.log(err);
        if (err.response.status === 403 || err.response.status === 401) {
            // 接口返回403，说明需要登录
            if (failure) {
                failure(err.response.data)
            } else {
                //console.log('error: ' + JSON.stringify(err.message));
                return false;
            }
        } else {
            if (failure) {
                // console.log(res.data);
                failure(err.response.data)
            } else {
                //console.log('error: ' + JSON.stringify(err.message));
                return false;
            }
        }
    })
}


// 返回在vue模板中的调用接口
export default {
    get: function(url, params, success, failure) {
        return apiAxios('GET', url, params, success, failure)
    },
    post: function(url, params, success, failure) {
        return apiAxios('POST', url, params, success, failure)
    },
    delete: function(url, params, success, failure){
        return apiAxios('DELETE', url, params, success, failure)
    },
    getDay: function(value) {
        if (!isNaN(Number(value))) {
            let date = new Date(value)
            let m = date.getMonth() + 1
            m = m < 10 ? '0' + m : m
            let d = date.getDate()
            d = d < 10 ? '0' + d : d
            return m + '-' + d
        } else {
            return value
        }
    },
}
