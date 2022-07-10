import { ref, reactive } from "vue"
const googleOauth = reactive({
    instance: null,
    isInit: false,
    isAuthorized: false,
})

const libraryState = reactive({
    apiLoaded: false,
    apiLoadIntitited: false,
});

function installClient() {
    const apiUrl = 'https://apis.google.com/js/api.js';
    return new Promise((resolve) => {
        let script = document.createElement('script');
        
        script.src = apiUrl;
        script.onreadystatechange = script.onload = function () {
            if (!script.readyState || /loaded|complete/.test(script.readyState)) {
                setTimeout(function () {
                    resolve()
                }, 500)
            }
        }
        document.getElementsByTagName('head')[0].appendChild(script);
    })
}
function initClient(config) {
    return new Promise((resolve, reject) => {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init(config).then(() => {
                libraryState.apiLoadIntitited = true;
                resolve(window.gapi);
            }).catch((error) => {
                reject(error);
            })
        })
    })
}

export const googleSdkLoaded = (config) => {
    return new Promise((resolve, reject) => {
        if(libraryState.apiLoadIntitited) {
            googleOauth.instance = gapi.auth2.getAuthInstance();
            googleOauth.isInit = true;
            resolve(googleOauth);
        }else {
            installClient().then(() => {
                return initClient(config)
            }).then((gapi) => {
                googleOauth.instance = gapi.auth2.getAuthInstance();
                googleOauth.isInit = true;
                googleOauth.isAuthorized = googleOauth.instance.isSignedIn.get();
                resolve(googleOauth);
            }).catch((error) => {
                reject(error);
            })
        }
    })
    
    
}

export const googleTokenLogin = () => {
    return new Promise((resolve, reject) => {
        if(!googleOauth.instance) {
            reject(false)
            return
        }
        googleOauth.instance.signIn().then(googleUser => {
            resolve(googleUser);
        }).catch(error=> {
            reject(error);
        })

    })
    
}