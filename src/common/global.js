import { emit } from "./events";

/**
 * @name: 判断值的区间
 * @msg:
 * @param {number} value 需要判断的值
 * @param {number} min   最小值
 * @param {number} max   最大值
 * @return {number} -1 0 1
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

/**
 * @name: 获取页面高度
 * @return {number}
 */
export function getPageHeight() {
    const node = document.getElementById('main');
    return node ? node.offsetHeight : 0;
}

/**
 * @name: 更新GUI高度 
 * @returns {*}
 */
export function updateGuiSize(guiSize) {
    // 视图更新后再获取高度，否则为0
    setTimeout(() => {
        const height = getPageHeight();
        emit('CHANGE_GUI_SIZE', {
            width: guiSize.width,
            height: height ? height : guiSize.height
        })
    }, 0)
}