function $(id) {
    return document.getElementById(id);
}

function test() {
    console.log('hello,world');
}

const judgeDevice = () => {
    const ua = navigator.userAgent;
    console.log(ua);
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

const jdm = {
    test() {
        console.log('111');
        
    },
    getapp(){
        return 'hello';
    }
}