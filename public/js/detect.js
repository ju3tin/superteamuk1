
function detectDeviceAndBrowser() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the device is mobile
    const isMobile = /android|avantgo|blackberry|bada\/|bb10|meego|ipad|iphone|ipod|opera mini|palm( os)?|phone|symbian|webos|windows( ce| phone)|xda|xiino/i.test(userAgent);

    let deviceType = 'Desktop';
    let browser = 'Unknown';

    if (isMobile) {
        deviceType = 'Mobile';

        // Check for specific mobile browsers
        if (/chrome|crios|crmo/i.test(userAgent)) {
            browser = 'Chrome';
        } else if (/safari/i.test(userAgent) && !/chrome|crios|crmo/i.test(userAgent)) {
            browser = 'Safari';
        } else if (/firefox|fxios/i.test(userAgent)) {
            browser = 'Firefox';
        } else if (/opera|opr|opios/i.test(userAgent)) {
            browser = 'Opera';
        } else if (/edg|edgios|edga/i.test(userAgent)) {
            browser = 'Edge';
        } else if (/ucbrowser/i.test(userAgent)) {
            browser = 'UC Browser';
        } else if (/samsungbrowser/i.test(userAgent)) {
            browser = 'Samsung Internet';
        } else if (/qqbrowser/i.test(userAgent)) {
            browser = 'QQ Browser';
        } else if (/baidubrowser/i.test(userAgent)) {
            browser = 'Baidu Browser';
        } else if (/yabrowser/i.test(userAgent)) {
            browser = 'Yandex Browser';
        }
    }

    return { deviceType, browser };
}

const result = detectDeviceAndBrowser();
const videoElement = document.getElementById('background-video');

if (result.deviceType === 'Mobile' && result.browser === 'Safari') {
    // Set background image if the device is mobile and the browser is Safari
    document.body.style.backgroundImage = "url('/img/123a.png')";
    videoElement.style.display = 'none';
} else {
    // Otherwise, display the video
    document.body.style.backgroundImage = 'none';
    videoElement.style.display = 'block';
}
