/**
 * js桥
 * version: 1.0.0
 * 提供js与移动端native交互接口,以及编码规范
 * 目前: 客户端是写死的ua  ios是 /yycios   安卓是 yycandroid
 */

class JDMBridge {

    appTest(params) {
        try {
            window.webkit.messageHandlers.appTest.postMessage(params);
        } catch (error) {
            this.errorLog();
        }
    }

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
    goHome() {
        switch (this.deviceType) {
            case 'Android':
                try {
                    YycAppJs.goHome();
                } catch (error) {
                    this.errorLog();
                }
                break;
            case 'iOS':
                try {
                    window.webkit.messageHandlers.goHome.postMessage(null);
                } catch (error) {
                    this.errorLog();
                }
                break;
            default:
                break;
        }
    };

    // 去登录页(传入登录后回跳的url)
    goLogin(url) {
        switch (this.deviceType) {
            case 'Android':
                try {
                    YycAppJs.goLogin(url);
                } catch (error) {
                    this.errorLog();
                }
                break;
            case 'iOS':
                try {
                    window.webkit.messageHandlers.goLogin.postMessage(url);
                } catch (error) {
                    this.errorLog();
                }
                break;
            default:
                break;
        }
    };

    // 去购物车页
    goCart() {
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
    goBack() {
        switch (this.deviceType) {
            case 'Android':
                androids.appGoBack();
                break;
            case 'iOS':
                window.webkit.messageHandlers.appGoBack.postMessage(null);
                break;
            default:
                break;
        }
    };

    // 使用H5导航
    useH5NavigationBar() {
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
    useNativeNavigationBar() {
        switch (this.deviceType) {
            case 'Android':
                androids.appUseNativeNavigationBar();
                break;
            case 'iOS':
                window.webkit.messageHandlers.appUseNativeNavigationBar.postMessage(null);
                break;
            default:
                break;
        }
    }

    // 打开新的webview
    openURL(params) {
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
    useNativeShare(params) {
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
    speechStart(params) {
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
    speechStop() {
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
    speechCancel() {
        switch (this.deviceType) {
            case 'Android':
                androids.appSpeechCancel();
                break;
            case 'iOS':
                window.webkit.messageHandlers.appSpeechCancel.postMessage(null);
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

    // 错误日志
    errorLog() {
        switch (this.deviceType) {
            case 'Android':
                console.log('无Android调用环境');
                break;
            case 'iOS':
                console.log('无iOS调用环境');
                break;
            default:
                break;
        }
    };
  
};

const jdm = new JDMBridge();
