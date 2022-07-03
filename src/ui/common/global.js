/**
 * @name: 判断值的区间
 * @msg:
 * @param {number} value 需要判断的值
 * @param {number} min   最小值
 * @param {number} max   最大值
 * @return {*}
 */
export function determineSize(value, min, max) {
    return value > max ? 1 : value < min ? -1 : 0;
}

/**
 * @name: 底部提示
 * @msg:
 * @param {string} message 提示内容
 * @param {string} type   提示类型
 * @return {*}
 */
export function toast(message, type = 'info') {
    const elemToast = document.createElement('div')
    elemToast.textContent = message
    elemToast.className = 'toast'
    if (type === 'info') {
        elemToast.className = 'toast toast--info'
    } else if (type === 'success') {
        elemToast.className = 'toast toast--success'
    } else if (type === 'warning') {
        elemToast.className = 'toast toast--warning'
    } else {
        elemToast.className = 'toast toast--error'
    }
    document.body.appendChild(elemToast);
    const hideToast = () => {
        elemToast.style.opacity = 0
    }
    const removeToast = () => {
        document.body.removeChild(elemToast);
    }
    setTimeout(hideToast, 1000)
    setTimeout(removeToast, 1200)
}