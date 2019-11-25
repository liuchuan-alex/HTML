/**
 * js桥
 * version: 1.0.0
 * 提供js与移动端native交互接口,以及编码规范
 * 目前: 客户端写死ua  ios是 /yccios   安卓是 yccandroid
 */

class JDMBridge {

    // 当前设备类型
    get deviceType() {
        const userAgent = navigator.userAgent;
        let isAndroid = userAgent.indexOf('android') > -1 || userAgent.indexOf('Android') > -1;
        let isiOS = userAgent.indexOf('ios') > -1 || userAgent.indexOf('iOS') > -1 || userAgent.indexOf('iPhone') > -1;
        if (isiOS) {
            return 'iOS';
        } else if (isAndroid) {
            return 'Android';
        } else {
            return 'H5';
        }
    };

    // 去首页
    appGoHome() {
        switch (this.deviceType) {
            case 'Android':
                androids.appGoHome();
                break;
            case 'iOS':
                window.webkit.messageHandlers.appGoHome.postMessage();
                break;
            default:
                break;
        }
    };

    // 去登录页(传入登录后回跳的url)
    appGoLogin(url) {
        switch (this.deviceType) {
            case 'Android':
                androids.appGoHome(url);
                break;
            case 'iOS':
                window.webkit.messageHandlers.appGoLogin.postMessage(url);
                break;
            default:
                break;
        }
    };

    // 去购物车页
    appGoCart() {
        switch (this.deviceType) {
            case 'Android':
                androids.appGoCart();
                break;
            case 'iOS':
                window.webkit.messageHandlers.appGoCart.postMessage();
                break;
            default:
                break;
        }
    };

    // 返回上一页
    appGoBack() {
        switch (this.deviceType) {
            case 'Android':
                androids.appGoBack();
                break;
            case 'iOS':
                window.webkit.messageHandlers.appGoBack.postMessage();
                break;
            default:
                break;
        }
    };

    // 使用H5导航
    appUseH5NavigationBar() {
        switch (this.deviceType) {
            case 'Android':
                androids.appUseH5NavigationBar();
                break;
            case 'iOS':
                window.webkit.messageHandlers.appUseH5NavigationBar.postMessage();
                break;
            default:
                break;
        }
    };

    // 使用原生导航
    appUseNativeNavigationBar() {
        switch (this.deviceType) {
            case 'Android':
                androids.appUseNativeNavigationBar();
                break;
            case 'iOS':
                window.webkit.messageHandlers.appUseNativeNavigationBar.postMessage();
                break;
            default:
                break;
        }
    }

    // 打开新的webview
    appOpenURL(params) {
        switch (this.deviceType) {
            case 'Android':
                androids.appUseNativeNavigationBar();
                break;
            case 'iOS':
                window.webkit.messageHandlers.appOpenURL.postMessage(params);
                break;
            default:
                window.location.href = url;
                break;
        }
    };

    // 在当前页面下配置导航栏样式
    appConfigNavigationBar(params) {
        switch (this.deviceType) {
            case 'Android':
                androids.appConfigNavigationBar(params);
                break;
            case 'iOS':
                window.webkit.messageHandlers.appConfigNavigationBar.postMessage(params);
                break;
            default:
                break;
        }
    }

    // 在当前页面下配置导航栏样式
    appOpenURL(params) {
        switch (this.deviceType) {
            case 'Android':
                androids.appOpenURL(params);
                break;
            case 'iOS':
                window.webkit.messageHandlers.appOpenURL.postMessage(params);
                break;
            default:
                break;
        }
    }

    // 调出原生分享页面
    appUseNativeShare(params) {
        switch (this.deviceType) {
            case 'Android':
                androids.appUseNativeShare(params);
                break;
            case 'iOS':
                window.webkit.messageHandlers.appUseNativeShare.postMessage(params);
                break;
            default:
                break;
        }
    }

    // 语音识别--开始
    appSpeechStart(params) {
        switch (this.deviceType) {
            case 'Android':
                androids.appSpeechStart(params);
                break;
            case 'iOS':
                window.webkit.messageHandlers.appSpeechStart.postMessage(params);
                break;
            default:
                break;
        }
    }

    // 语音识别--停止
    appSpeechStop() {
        switch (this.deviceType) {
            case 'Android':
                androids.appSpeechStop();
                break;
            case 'iOS':
                window.webkit.messageHandlers.appSpeechStop.postMessage();
                break;
            default:
                break;
        }
    }

    // 语音识别--取消
    appSpeechCancel() {
        switch (this.deviceType) {
            case 'Android':
                androids.appSpeechCancel();
                break;
            case 'iOS':
                window.webkit.messageHandlers.appSpeechCancel.postMessage();
                break;
            default:
                break;
        }
    }

    // 获取公共参数
    getCommonParams() {
        switch (this.deviceType) {
            case 'Android':
                if (typeof (YycAppJs) !== 'undefined') {
                    return JSON.parse(YycAppJs.AppGetCommonP() || '{}');
                }
                break;
            case 'iOS':
                // window.webkit.messageHandlers.AppGetCommonP.postMessage(null);
                // }else{
                iosCommonParams = {
                    'osVersion': '11.3.1',
                    'lon': '116.562301',
                    'clientType': 'ios',
                    'lat': '39.787270',
                    'uuid': 'd1ad1d4d94ae42c0bab54c0bd4813676',
                    'clientVersion': '2.5.5',
                    'brand': 'iPhone',
                    'model': 'iPhone10,3',
                    'networkType': 'wifi'
                }
                // }
                // setTimeout(function(){
                //     window.webkit.messageHandlers.AppGetCommonP.postMessage(null);
                // },2000);
                return iosCommonParams;
                // window.webkit.messageHandlers.AppGetCommonP.postMessage(null);
                // return iosCommonParams;
                break;
            default:
                break;
        }
        return {};
    };

    // 跳转拍照
    getImgPath() {
        switch (this.deviceType) {
            case 'android':
                if (typeof (YycAppJs) !== 'undefined') {
                    YycAppJs.UseAndroidPhoto();
                }
                break;
            case 'ios':
                location.href = "openapp.jdmedicine://yiyaoapp.jd.com/choosefile(1)";
                break;
            default:
                break;
        }
    };
};

const jdm = new JDMBridge();


















getAppInfo(a) {
    window.webkit.messageHandlers.getAppInfo.postMessage(a);
}

oc_test(a) {
    console.log(a);
    window.webkit.messageHandlers.getAppInfo.postMessage(a);
    return 'js_return';
}










// jsbridge相关 旧版本支持
//客户端写死ua  ios是 /yccios   安卓是yccandroid

const judgeDevice = () => {
    const ua = navigator.userAgent;
    let isAndroid = ua.indexOf('android') > -1; // android终端
    let isiOS = ua.indexOf('ios') > -1; // ios终端
    if (isiOS) {
        return 'ios';
    } else if (isAndroid) {
        return 'android';
    } else {
        return 'h5';
    }
};


let iosCommonParams = {}; // IOS公共参数

const AppGetCommonP = function (data) {
    iosCommonParams = JSON.parse(data || {});
};
window.AppGetCommonP = AppGetCommonP;

const bridge = {
    addBodyClass() {
        document.querySelector('html').classList.add(`body-${judgeDevice()}`)
    },
    goLogin(url) { // 去登录并传入登录后回跳的url
        switch (judgeDevice()) {
            case 'android':
                if (typeof (YycAppJs) !== 'undefined') {
                    YycAppJs.AppGoLogIn(url);
                }
                break;
            case 'ios':
                window.webkit.messageHandlers.AppGoLogIn.postMessage(url);
                break;
            default:
                break;
        }
    },
    goCart() { // 去购物车
        switch (judgeDevice()) {
            case 'android':
                if (typeof (YycAppJs) !== 'undefined') {
                    YycAppJs.AppGoCart();
                }
                break;
            case 'ios':
                window.webkit.messageHandlers.AppGoCart.postMessage(null);
                break;
            default:
                break;
        }
    },
    goHome() { // 去首页
        switch (judgeDevice()) {
            case 'android':
                if (typeof (YycAppJs) !== 'undefined') {
                    YycAppJs.AppGoHome();
                }
                break;
            case 'ios':
                window.webkit.messageHandlers.AppGoHome.postMessage(null);
                break;
            default:
                break;
        }
    },
    openUrl(url) { // 打开新的webview
        switch (judgeDevice()) {
            case 'android':
                if (typeof (YycAppJs) !== 'undefined') {
                    YycAppJs.gotoNativeWebview(url);
                }
                break;
            case 'ios':
                window.webkit.messageHandlers.gotoNativeWebview.postMessage(url);
                break;
            default:
                window.location.href = url;
                break;
        }
    },
    getCommonParams() { // 获取公共参数
        if (process.env.NODE_ENV === 'development') {
            return {
                osVersion: '7.1.2',
                lon: '121.36041',
                clientType: 'android',
                lat: '31.220839',
                uuid: '867451022057407',
                clientVersion: '1.1.0',
                brand: '-1',
                model: '-1',
                networkType: '-1'
            };
            // return {
            //     client:"t",
            //     me: "测试jijinye",
            //     lon: "116.56231",
            //     clientType: "android",
            //     uuid: "354834060215104",
            //     clientVersion: "2.2.0",
            //     osVersion: "5.0.1",
            //     lat: "39.787132",
            //     brand: "1",
            //     model: "1",
            //     networkType: "1",
            // }
        }
        switch (judgeDevice()) {
            case 'android':
                if (typeof (YycAppJs) !== 'undefined') {
                    return JSON.parse(YycAppJs.AppGetCommonP() || '{}');
                }
                break;
            case 'ios':
                // if(window.webkit.messageHandlers.AppGetCommonP){
                //     window.webkit.messageHandlers.AppGetCommonP.postMessage(null);
                // }else{
                iosCommonParams = {
                    'osVersion': '11.3.1',
                    'lon': '116.562301',
                    'clientType': 'ios',
                    'lat': '39.787270',
                    'uuid': 'd1ad1d4d94ae42c0bab54c0bd4813676',
                    'clientVersion': '2.5.5',
                    'brand': 'iPhone',
                    'model': 'iPhone10,3',
                    'networkType': 'wifi'
                }
                // }
                // setTimeout(function(){
                //     window.webkit.messageHandlers.AppGetCommonP.postMessage(null);
                // },2000);
                return iosCommonParams;
                // window.webkit.messageHandlers.AppGetCommonP.postMessage(null);
                // return iosCommonParams;
                break;
            default:
                break;
        }
        return {};
    },
    goBack() { // 返回上一页
        switch (judgeDevice()) {
            case 'android':
                if (typeof (YycAppJs) !== 'undefined') {
                    YycAppJs.AppGoBack();
                }
                break;
            case 'ios':
                window.webkit.messageHandlers.AppGoBack.postMessage(null);
                break;
            default:
                break;
        }
    },
    getImgPath() { // 跳转拍照
        switch (judgeDevice()) {
            case 'android':
                if (typeof (YycAppJs) !== 'undefined') {
                    YycAppJs.UseAndroidPhoto();
                }
                break;
            case 'ios':
                location.href = "openapp.jdmedicine://yiyaoapp.jd.com/choosefile(1)";
                break;
            default:
                break;
        }
    },
    useH5NavigationBar() { // 使用h5导航
        switch (judgeDevice()) {
            case 'android':
                if (typeof (YycAppJs) !== 'undefined') {
                    YycAppJs.AppUseH5NavigationBar();
                }
                break;
            case 'ios':
                window.webkit.messageHandlers.AppUseH5NavigationBar.postMessage(null);
                break;
            default:
                break;
        }
    },
    useNativeNavigationBar() { // 使用原生导航
        switch (judgeDevice()) {
            case 'android':
                if (typeof (YycAppJs) !== 'undefined') {
                    YycAppJs.AppUseNativeNavigationBar();
                }
                break;
            case 'ios':
                window.webkit.messageHandlers.AppUseNativeNavigationBar.postMessage(null);
                break;
            default:
                break;
        }
    }
};

// 如果是ios先调用一遍公共参数jsbridge
if (judgeDevice() === 'ios') {
    try {
        /* eslint-disable no-undef */

        window.webkit.messageHandlers.AppGetCommonP.postMessage(null);
    } catch (error) {
        console.log(error);
        // alert(error, error.message);
    }
}

// export pbridge;
