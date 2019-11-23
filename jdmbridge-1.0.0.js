
// 获取设备信息
const judgeDevice = () => {
    const ua = navigator.userAgent;
    let isAndroid = ua.indexOf('android') > -1;  // android终端
    let isiOS = ua.indexOf('ios') > -1;          // ios终端
    if (isiOS) {
        return 'ios';
    } else if (isAndroid) {
        return 'android';
    } else {
        return 'h5';
    }
};