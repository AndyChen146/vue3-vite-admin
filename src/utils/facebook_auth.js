/**
 *   andychen
 */
export function loadFbSdk(appId) {
    return new Promise(resolve => {
        window.fbAsyncInit = function () { // eslint-disable-line func-names
            FB.init({
                appId,
                xfbml: true,
                version: 'v14.0',
                cookie: true
            });
            FB.AppEvents.logPageView();
            resolve('SDK Loaded!');
        };
        (function (d, s, id) { // eslint-disable-line func-names
            const fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            const js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    });
}

export function getFbLoginStatus() {
    return new Promise(resolve => {
        window.FB.getLoginStatus(responseStatus => {
            resolve(responseStatus);
        });
    });
}

export function fbLogin(options) {
    return new Promise(resolve => {
        window.FB.login(response => {
            if (response.authResponse) {
                //console.log(response.authResponse)
                FB.api('/me', function (res) {
                    response.authResponse.nickname = res.name;
                    resolve(response.authResponse)
                });
            }
        }, options);
    });
}
export function fbLogout() {
    return new Promise(resolve => {
        window.FB.logout(response => resolve(response));
    });
}