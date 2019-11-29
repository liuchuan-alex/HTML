/**
 * iOS端Bridge桥,用于和Android统一调用接口规范;
 * 文档地址V1.0: https://cf.jd.com/pages/viewpage.action?pageId=235965435
 */

function JDMJSBridge() {

    // 去首页
    this.appGoHome = function (params) {
        calliOSFunction("appGoHome", params);
    };
    // 去登录页
    this.appGoLogin = function (params) {
        calliOSFunction("appGoLogin", params);
    };
    // 去购物车页
    this.appGoCart = function (params) {
        calliOSFunction("appGoCart", params);
    };
    // 返回上一页
    this.appGoBack = function (params) {
        calliOSFunction("appGoBack", params);
    };
    // 使用H5导航
    this.appUseH5NavigationBar = function (params) {
        calliOSFunction("appUseH5NavigationBar", params);
    };
    // 使用原生导航
    this.appIUseNativeNavigationBar = function () {
        calliOSFunction("appIUseNativeNavigationBar", params);
    }
    // 在当前页面下配置导航栏样式
    this.appConfigNavigationBar = function (params) {
        calliOSFunction("appConfigNavigationBar", params);
    }
    // 打开新的webview
    this.appOpenURL = function (params) {
        calliOSFunction("appOpenURL", params);
    };
    // 调出原生分享页面
    this.appUseNativeShare = function (params) {
        calliOSFunction("appUseNativeShare", params);
    }
    // 语音识别--开始
    this.appSpeechStart = function (params) {
        calliOSFunction("appSpeechStart", params);
    }
    // 语音识别--停止
    this.appSpeechStop = function (params) {
        calliOSFunction("appSpeechStop", params);
    }
    // 语音识别--取消
    this.appSpeechCancel = function (params) {
        calliOSFunction("appSpeechCancel", params);
    }
    // 返回公共参数的json字符串
    this.getCommonParams = function (params) {
        calliOSFunction("getCommonParams", params);
    }
    // JS调用原生
    function calliOSFunction(namespace, params) {
        try {
            if (!window.webkit.messageHandlers[namespace]) {
                return;
            }
        } catch (error) {
            console.log('非移动端调用环境');
            return;
        }
        window.webkit.messageHandlers[namespace].postMessage(JSON.stringify(params));
    };


    /**
     * 以下为旧版本兼容接口
     */
    // 去首页(兼容旧版本)
    this.AppGoHome = function (params) {
        calliOSFunction("AppGoHome", params);
    };
    // 去登录页(兼容旧版本)
    this.AppGoLogIn = function (params) {
        calliOSFunction("AppGoLogIn", params);
    };
    // 去购物车页(兼容旧版本)
    this.AppGoCart = function (params) {
        calliOSFunction("AppGoCart", params);
    };
    // 使用H5导航(兼容旧版本)
    this.AppUseH5NavigationBar = function (params) {
        calliOSFunction("AppUseH5NavigationBar", params);
    };
    // 返回上一页(兼容旧版本)
    this.AppGoBack = function (params) {
        calliOSFunction("AppGoBack", params);
    };
    // 使用原生导航(兼容旧版本)
    this.AppUseNativeNavigationBar = function (params) {
        calliOSFunction("AppUseNativeNavigationBar", params);
    }
    // 返回公共参数的json字符串
    this.AppGetCommonP = function (params) {
        calliOSFunction("AppGetCommonP", params);
    }
}


var jdm = new JDMJSBridge();

// (兼容旧版本)
var YycAppJs = new JDMJSBridge();
