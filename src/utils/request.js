import axios from 'axios' // 引入axios
import { ElMessage, ElMessageBox } from 'element-plus'
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { useUserStore } from '@/pinia/modules/user'
import router from '@/router/index'
import i18n from "@/lang/index"
const {t} = i18n.global;

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 15000
})
NProgress.configure({
    showSpinner: false
});
// http request 拦截器
service.interceptors.request.use(config => {
    NProgress.start(); 
    const userStore = useUserStore()
    config.headers = {
        'Content-Type': 'application/json',
        'X-Tripbay-app-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MgdG9rZW4iLCJzY29wZSI6ImFwaXMiLCJ1bmlxdWUiOiIxMjMiLCJpc3MiOiJhdXRoMCIsImV4cCI6OTIyMzM3MjAzNjg1NDc3NX0.YpdR1ojERcQ_iDJE574wr1zTNrKgMRFnJLKCinKKycWEfVItkvKJPdDwTSFR8_MKgz9MyFf8yumSWzn2zDHQGDjBL0IiehnjOkeKaHPhRKTWkrkZbHeNwj6D70u2d8JmVfn7znX65P8dMhfi-5rX66si7PoHNYUHqJJImn6DbEY',
        'X-Tripbay-key': userStore.token,
        'Content-Language': userStore.language,
        'osVersion': userStore.osversion,
        'os': 'PC',
        ...config.headers
    }
    return config;
}, error => {
    ElMessage({
        showClose: true,
        message: error,
        type: 'error'
    })
    return error;
}) 

// http response 拦截器
service.interceptors.response.use(res => {
    NProgress.done();
    const code = +res.data.code;
    const message = res.data.message || "未知错误";
    const userStore = useUserStore()
    if(res.config.url.indexOf("/login") != -1) {
        return res;
    }else if(code && code === 104) {  // token失效
        ElMessage({
            message: message,
            type: "error"
        });
        userStore.token = ''
        localStorage.removeItem("token")
        router.push({ name: 'Login', replace: true })
    }else if(code && code !== 1000) {
        ElMessage({
            message: message,
            type: "error"
        });
        return Promise.reject(new Error(message));
    }else {
        return res;
    }

}, error => {
    NProgress.done();
    const status = error.response.status;
    // 单独针对 404  500 503 做处理
    if(status === 404) {
        ElMessageBox.confirm(t('errtip.requestErrText')+` ${error}`, t(`errtip.interfaceErrorText`), {
            dangerouslyUseHTMLString: true,
            distinguishCancelAndClose: true,
            confirmButtonText: t(`errtip.tryAgainLaterText`),
            cancelButtonText: t(`errtip.cancelButtonText`)
        })
    }else if(status === 503 || status === 500) {
        ElMessageBox.confirm(t('errtip.requestErrText')+", "+t('errtip.clearCacheTips'), t(`errtip.interfaceErrorText`), {
            dangerouslyUseHTMLString: true,
            distinguishCancelAndClose: true,
            confirmButtonText: t(`errtip.clearCacheText`),
            cancelButtonText: t(`errtip.cancelButtonText`),
        }).then(()=> {
            const userStore = useUserStore()
            userStore.token = ''
            localStorage.clear()
            router.push({ name: 'Login', replace: true })
        })
    }
    return Promise.reject(new Error(error));
})


export default service