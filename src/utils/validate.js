/**
 *  autor: andy
 *  desc: 验证（是否合法url, 是否小写，是否大写，）
 */

import i18n from "@/lang/index"
const {t} = i18n.global;

 export function isvalidUsername(str) {
    const valid_map = ['admin', 'test']
    return valid_map.indexOf(str.trim()) >= 0
}

export function validateURL(textval) {
    const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlregex.test(textval)
}

export function validateLowerCase(str) {
    const reg = /^[a-z]+$/
    return reg.test(str)
}

export function validateUpperCase(str) {
    const reg = /^[A-Z]+$/
    return reg.test(str)
}

export function validatAlphabets(str) {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
}

export const checkUsername = (rule, value, callback) => {
    if (value.length < 5) {
        return callback(new Error(t(`login.usernameError`)))
    } else {
        callback()
    }
}

export const checkPassword = (rule, value, callback) => {
    if (value.length < 6) {
        return callback(new Error(t(`login.passwordError`)))
    } else {
        callback()
    }
}

export const checkNewPassword = (rule, value, callback) => {
    const reg = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{8,30}$/
    if (value.length < 1) {
        return callback(new Error(t(`login.passwordError`)))
    } else if(value.match(reg) == null){
        return callback(new Error(t(`login.resetPassPlaceholder`)))
    }else {
        callback()
    }
}

export const checkCaptcha = (rule, value, callback) => {
    if (value.length < 5) {
        return callback(new Error(t(`login.codeYzmError`)))
    } else {
        callback()
    }
}