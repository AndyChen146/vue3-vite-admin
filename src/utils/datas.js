/**
 *  autor: andy
 *  desc: 全局公共调用方法（日期格式化）
 */
 export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
}

export function formatTime(timestamp) {
    var date = new Date(timestamp * 1000)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length)
}

export function str2Date(dataStr, separator) {
    if (!separator) {
        separator = '-'
    }
    let dateArr = dataStr.split(separator)
    let year = parseInt(dateArr[0])
    let month;
    if (dateArr[1].indexOf('0') == 0) {
        month = parseInt(dateArr[1].substring(1))
    } else {
        month = parseInt(dateArr[1])
    }
    let day = parseInt(dateArr[2])
    let dates = new Date(year, month - 1, day)
    return dates

}