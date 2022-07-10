/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/events */ "./src/common/events.js");
/* harmony import */ var _common_convertColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/convertColor */ "./src/common/convertColor.js");


const supportNodes = ['FRAME'];
const typeToName = {
    'FRAME': "画板",
    'GROUP': "分组",
    'RECTANGLE': "矩形",
    'ELLIPSE': "椭圆",
    'LINE': "线段",
    'POLYGON': "多边形",
    'STAR': "星形",
    'TEXT': "文本",
    'SLICE': "切片",
    'VECTOR': "矢量",
    'BOOLEAN_OPERATION': "布尔运算",
    'COMPONENT': "引用",
    'INSTANCE': "实例组件",
    'COMPONENT_SET': "变体"
};
const dash = [2, 2];
const guideLinesGroupName = (name) => `${name}--分割线`;
const guideLineGroupName = (name) => `${name}--分割线`;
const storageKey = 'guideline-save-cards';
let basedColor = "CCCCCC";
let unApplyGroup = {};
function hideFrameGuideLine(node, isHide) {
    node.children && node.children.forEach(child_node => {
        if (child_node.name.endsWith('--分割线')) {
            child_node.visible = !isHide;
        }
        if (child_node.type === 'FRAME') {
            hideFrameGuideLine(child_node, !isHide);
        }
    });
}
function clearCurrentUnApplyGroup() {
    Object.keys(unApplyGroup).forEach(key => {
        const node = unApplyGroup[key];
        node === null || node === void 0 ? void 0 : node.remove();
    });
    unApplyGroup = {};
}
function drawLine(node, distance, isRow) {
    const { width, height, rotation } = node;
    const x = node.absoluteTransform[0][2];
    const y = node.absoluteTransform[1][2];
    const lineNode = figma.createLine();
    const rgbColor = Object(_common_convertColor__WEBPACK_IMPORTED_MODULE_1__["hexToJsDesignRGB"])(basedColor);
    lineNode.x = isRow ? x : x + distance;
    lineNode.y = isRow ? y + distance : y;
    lineNode.resize(isRow ? width : height, 0);
    lineNode.rotation = isRow ? 0 : -90;
    lineNode.dashPattern = dash;
    lineNode.strokes = [{ type: 'SOLID', color: rgbColor }];
    lineNode.constraints = {
        horizontal: "SCALE",
        vertical: "SCALE"
    };
    lineNode.strokeWeight = 1;
    return lineNode;
}
function createLine(node, guideline) {
    let { width, height } = node;
    let rows = guideline.row.scales;
    let columns = guideline.column.scales;
    let rowsLen = rows.length;
    let columnsLen = columns.length;
    let rowsPreSum = (() => {
        let total = 0;
        let sum = rows.map((row) => {
            total += row;
            return total;
        });
        return sum;
    })();
    let columnsPreSum = (() => {
        let total = 0;
        let sum = columns.map((column) => {
            total += column;
            return total;
        });
        return sum;
    })();
    let nodes = [];
    rows.length > 1 && rows.forEach((_, index) => {
        if (index === rows.length - 1) {
            return;
        }
        let lineNode = drawLine(node, height * rowsPreSum[index] / rowsPreSum[rowsLen - 1], true);
        nodes.push(lineNode);
    });
    columns.length > 1 && columns.forEach((_, index) => {
        if (index === columns.length - 1) {
            return;
        }
        let lineNode = drawLine(node, width * columnsPreSum[index] / columnsPreSum[columnsLen - 1], false);
        nodes.push(lineNode);
    });
    return nodes;
}
function createGuidelineHandler(saveCard) {
    const selections = figma.currentPage.selection;
    if (selections.length > 1) {
        figma.notify('只能选择一个画板');
        return;
    }
    selections.forEach(node => {
        if (supportNodes.indexOf(node.type) !== -1) {
            const nodes = createLine(node, saveCard.guideline);
            if (nodes.length === 0) {
                figma.notify('无效辅助线');
                return;
            }
            let group = figma.group(nodes, node);
            group.name = guideLineGroupName(saveCard.name);
            group.locked = true;
            const children = node.children;
            let lineGroup = children.find(_node => _node.type === 'GROUP' && _node.name === guideLinesGroupName(node.name));
            if (!lineGroup) {
                lineGroup = figma.group([group], node);
                lineGroup.name = guideLinesGroupName(node.name);
                lineGroup.locked = true;
            }
            else {
                lineGroup.appendChild(group);
            }
            unApplyGroup[saveCard === null || saveCard === void 0 ? void 0 : saveCard.id] = group;
            figma.notify(`创建${saveCard.name}分割线成功`);
        }
        else {
            figma.notify(`${typeToName[node.type]}节点 ${node.name} 暂时支持`);
        }
    });
}
function createGuideline(saveCard) {
    if (unApplyGroup.hasOwnProperty(saveCard.id)) {
        figma.notify("请勿重复添加分割线");
    }
    else {
        unApplyGroup[saveCard.id] = { remove: () => { console.log('删除成功'); } };
        createGuidelineHandler(saveCard);
    }
}
function deleteGuideline(saveCard) {
    const id = saveCard.id;
    if (!unApplyGroup.hasOwnProperty(id)) {
        figma.notify("分割线不存在");
    }
    else {
        const node = unApplyGroup[id];
        node === null || node === void 0 ? void 0 : node.remove();
        delete unApplyGroup[id];
        figma.notify(`取消${saveCard.name}分割线成功`);
    }
}
figma.showUI(__html__, { width: 260, height: 440 });
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["emit"])('SELECTION_CHANGED', figma.currentPage.selection.length > 0);
figma.on('selectionchange', function () {
    Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["emit"])('SELECTION_CHANGED', figma.currentPage.selection.length > 0);
    Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["emit"])('clear-active');
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])("CHANGE_GUI_SIZE", (guiSize) => {
    figma.ui.resize(guiSize === null || guiSize === void 0 ? void 0 : guiSize.width, guiSize === null || guiSize === void 0 ? void 0 : guiSize.height);
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])('clear-line', () => {
    clearCurrentUnApplyGroup();
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])('add-line', (saveCard) => {
    createGuideline(saveCard);
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])('delete-line', (saveCard) => {
    deleteGuideline(saveCard);
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])('apply-line', () => {
    unApplyGroup = {};
    Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["emit"])('clear-active');
    figma.notify("成功应用");
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])('update-color', (color) => {
    basedColor = color;
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])('preview-line', (guideline) => {
    let saveCard = {
        id: new Date().getTime().toString(),
        name: '临时',
        icon: '',
        guideline
    };
    createGuideline(saveCard);
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])('hide-preview-line', () => {
    clearCurrentUnApplyGroup();
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])('save-guideline', async (saveCard) => {
    let saveCards = await figma.clientStorage.getAsync(storageKey);
    if (saveCards === undefined) {
        saveCards = [];
    }
    clearCurrentUnApplyGroup();
    figma.clientStorage.setAsync(storageKey, [...saveCards, saveCard])
        .then(() => {
        figma.notify('保存成功');
    }).catch(err => {
        figma.notify('保存失败');
        console.error(err);
    });
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])('get-storage', () => {
    figma.clientStorage.getAsync(storageKey).then((data) => {
        Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["emit"])('STORAGE', data === undefined ? [] : data);
    });
});


/***/ }),

/***/ "./src/common/convertColor.js":
/*!************************************!*\
  !*** ./src/common/convertColor.js ***!
  \************************************/
/*! exports provided: webRGBToJsDesignRGB, hexToJsDesignRGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webRGBToJsDesignRGB", function() { return webRGBToJsDesignRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToJsDesignRGB", function() { return hexToJsDesignRGB; });
const namesRGB = ['r', 'g', 'b'];

const webRGBToJsDesignRGB = (color) => {
    const rgb = {};
    namesRGB.forEach((e, i) => {
        rgb[e] = color[i] / 255;
    });
    if (color[3] !== undefined) rgb['a'] = color[3];
    return rgb;
}

// 十六进制转RGB
const hexToJsDesignRGB = (color) => {
    let opacity = '';
    color = color.toLowerCase();
    if (color[0] === '#') color = color.slice(1);

    if (color.length === 3) {
        color = color.replace(/(.)(.)(.)?/g, '$1$1$2$2$3$3');
    } else if (color.length === 8) {
        const arr = color.match(/(.{6})(.{2})/);
        color = arr[1];
        opacity = arr[2];
    }
    const num = parseInt(color, 16);
    const rgb = [num >> 16, num >> 8 & 255, num & 255];

    if (opacity) {
        rgb.push(parseInt(opacity, 16) / 255);
        return webRGBToJsDesignRGB(rgb);
    } else {
        return webRGBToJsDesignRGB(rgb);
    }
}

/***/ }),

/***/ "./src/common/events.js":
/*!******************************!*\
  !*** ./src/common/events.js ***!
  \******************************/
/*! exports provided: on, once, emit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emit", function() { return emit; });
const eventHandlers = {};
let currentId = 0;
function on(name, handler) {
    const id = `${currentId}`;
    currentId += 1;
    eventHandlers[id] = { handler, name };
    return function () {
        delete eventHandlers[id];
    };
}
function once(name, handler) {
    let done = false;
    return on(name, function (...args) {
        if (done === true) {
            return;
        }
        done = true;
        handler(...args);
    });
}
const emit = typeof window === 'undefined'
    ? function (name, ...args) {
        figma.ui.postMessage([name, ...args]);
    }
    : function (name, ...args) {
        window.parent.postMessage({
            pluginMessage: [name, ...args]
        }, '*');
    };
function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
        if (eventHandlers[id].name === name) {
            eventHandlers[id].handler.apply(null, args);
        }
    }
}
if (typeof window === 'undefined') {
    figma.ui.onmessage = function ([name, ...args]) {
        invokeEventHandler(name, args);
    };
}
else {
    window.onmessage = function (event) {
        const [name, ...args] = event.data.pluginMessage;
        invokeEventHandler(name, args);
    };
}

/***/ })

/******/ });
//# sourceMappingURL=code.js.map