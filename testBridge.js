// jsbridge相关

//客户端写死ua  ios是 /yccios   安卓是yccandroid                            这里有问题......获取UA,并判断环境
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

export default bridge;
