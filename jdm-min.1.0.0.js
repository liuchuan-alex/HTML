/**
 * js桥
 * version: 1.0.0
 * 提供js与移动端native交互接口,以及编码规范
 * 目前: 客户端是写死的ua  ios是 /yycios   安卓是 yccandroid
 */

function JDMBridge() {

    // 测试
    this.appTest = function (params) {
        YycAppJs.appTest(params);
    }

    // 去首页
    this.goHome = function (params) {
        YycAppJs.goHome(params);
    }

    // 去登录页(传入登录后回跳的url)
    this.goLogin = function (url) {
        YycAppJs.goLogin(url);
    };

    // 去购物车页
    this.goCart = function () {
        YycAppJs.appGoCart();
    };

    // 返回上一页
    this.goBack = function () {
        YycAppJs.appGoBack();
    };

    // 使用H5导航
    this.useH5NavigationBar = function () {
        YycAppJs.appUseH5NavigationBar();
    };

    // 使用原生导航
    this.useNativeNavigationBar = function () {
        YycAppJs.appUseNativeNavigationBar();
    }

    // 打开新的webview
    this.openURL = function (params) {
        YycAppJs.appUseNativeNavigationBar(params);
    };

    // 在当前页面下配置导航栏样式
    this.appConfigNavigationBar = function (params) {
        YycAppJs.appConfigNavigationBar(params);
    }

    // 在当前页面下配置导航栏样式
    this.appOpenURL = function (params) {
        YycAppJs.appOpenURL(params);
    }

    // 调出原生分享页面
    this.useNativeShare = function (params) {
        YycAppJs.appUseNativeShare(params);
    }

    // 语音识别--开始
    this.speechStart = function (params) {
        YycAppJs.appSpeechStart(params);
    }

    // 语音识别--停止
    this.speechStop = function () {
        YycAppJs.appSpeechStop();
    }

    // 语音识别--取消
    this.speechCancel = function () {
        YycAppJs.appSpeechCancel();
    }

    // 当前设备类型
    this.deviceType = function deviceType() {

        var userAgent = navigator.userAgent;
        var isAndroid = userAgent.indexOf('android') > -1 || userAgent.indexOf('Android') > -1;
        var isiOS = userAgent.indexOf('ios') > -1 || userAgent.indexOf('iOS') > -1 || userAgent.indexOf('iPhone') > -1;
        if (isiOS) {
            return 'iOS';
        } else if (isAndroid) {
            return 'Android';
        } else {
            return 'H5';
        }
    };





    // // 获取公共参数
    // getCommonParams() {
    //     switch (this.deviceType) {
    //         case 'Android':
    //             if (typeof (YycAppJs) !== 'undefined') {
    //                 return JSON.parse(YycAppJs.AppGetCommonP() || '{}');
    //             }
    //             break;
    //         case 'iOS':
    //             // window.webkit.messageHandlers.AppGetCommonP.postMessage(null);
    //             // }else{
    //             iosCommonParams = {
    //                 'osVersion': '11.3.1',
    //                 'lon': '116.562301',
    //                 'clientType': 'ios',
    //                 'lat': '39.787270',
    //                 'uuid': 'd1ad1d4d94ae42c0bab54c0bd4813676',
    //                 'clientVersion': '2.5.5',
    //                 'brand': 'iPhone',
    //                 'model': 'iPhone10,3',
    //                 'networkType': 'wifi'
    //             }
    //             // }
    //             // setTimeout(function(){
    //             //     window.webkit.messageHandlers.AppGetCommonP.postMessage(null);
    //             // },2000);
    //             return iosCommonParams;
    //             // window.webkit.messageHandlers.AppGetCommonP.postMessage(null);
    //             // return iosCommonParams;
    //             break;
    //         default:
    //             break;
    //     }
    //     return {};
    // };

    // // 跳转拍照
    // getImgPath() {
    //     switch (this.deviceType) {
    //         case 'android':
    //             if (typeof (YycAppJs) !== 'undefined') {
    //                 YycAppJs.UseAndroidPhoto();
    //             }
    //             break;
    //         case 'ios':
    //             location.href = "openapp.jdmedicine://yiyaoapp.jd.com/choosefile(1)";
    //             break;
    //         default:
    //             break;
    //     }
    // };
};


var jdm = new JDMBridge();


