/**
 * 不为空
 * @param val
 * @returns {boolean}
 */
 export function notEmpty(val) {
    return !this.isEmpty(val);
  }
  
  /**
   * 为空
   * @param val
   * @returns {boolean}
   */
  export function isEmpty(val) {
    if (
      val === null ||
      typeof val === 'undefined' ||
      (typeof val === 'string' && val === '' && val !== 'undefined')
    ) {
      return true;
    }
    return false;
  }
  
  /**
   * 强转int型
   * @param val
   * @param defaultValue
   * @returns {number}
   */
  export function toInt(val, defaultValue) {
    if (this.isEmpty(val)) {
      return defaultValue === undefined ? -1 : defaultValue;
    }
    const num = parseInt(val, 0);
    return Number.isNaN(num) ? (defaultValue === undefined ? -1 : defaultValue) : num;
  }