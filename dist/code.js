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
    'FRAME': "??????",
    'GROUP': "??????",
    'RECTANGLE': "??????",
    'ELLIPSE': "??????",
    'LINE': "??????",
    'POLYGON': "?????????",
    'STAR': "??????",
    'TEXT': "??????",
    'SLICE': "??????",
    'VECTOR': "??????",
    'BOOLEAN_OPERATION': "????????????",
    'COMPONENT': "??????",
    'INSTANCE': "????????????",
    'COMPONENT_SET': "??????"
};
const dash = [2, 2];
const guideLinesGroupName = (name) => `${name}--?????????`;
const guideLineGroupName = (name) => `${name}--?????????`;
const storageKey = 'guideline-save-cards';
let basedColor = "CCCCCC";
let multiFrameUnApplyGroup = {};
function hideFrameGuideLine(node, isHide) {
    node.children && node.children.forEach(child_node => {
        if (child_node.name.endsWith('--?????????')) {
            child_node.visible = !isHide;
        }
        if (child_node.type === 'FRAME') {
            hideFrameGuideLine(child_node, !isHide);
        }
    });
}
function clearCurrentUnApplyGroup() {
    Object.keys(multiFrameUnApplyGroup).forEach(key => {
        Object.keys(multiFrameUnApplyGroup[key]).forEach(child_key => {
            const node = multiFrameUnApplyGroup[key][child_key];
            node === null || node === void 0 ? void 0 : node.remove();
        });
    });
    multiFrameUnApplyGroup = {};
}
function drawLine(node, distance, isRow) {
    const { width, height, rotation } = node;
    const x = node.absoluteTransform[0][2];
    const y = node.absoluteTransform[1][2];
    const lineNode = jsDesign.createLine();
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
    const selections = jsDesign.currentPage.selection;
    selections.forEach(node => {
        if (supportNodes.indexOf(node.type) !== -1) {
            const nodes = createLine(node, saveCard.guideline);
            if (nodes.length === 0) {
                jsDesign.notify('???????????????');
                return;
            }
            let group = jsDesign.group(nodes, node);
            group.name = guideLineGroupName(saveCard.name);
            group.locked = true;
            const children = node.children;
            let lineGroup = children.find(_node => _node.type === 'GROUP' && _node.name === guideLinesGroupName(node.name));
            if (!lineGroup) {
                lineGroup = jsDesign.group([group], node);
                lineGroup.name = guideLinesGroupName(node.name);
                lineGroup.locked = true;
            }
            else {
                lineGroup.appendChild(group);
            }
            multiFrameUnApplyGroup[node.id][saveCard === null || saveCard === void 0 ? void 0 : saveCard.id] = group;
            jsDesign.notify(`??????${saveCard.name}???????????????`);
        }
        else {
            jsDesign.notify(`${typeToName[node.type]}?????? ${node.name} ???????????????`);
        }
    });
}
function createGuideline(saveCard) {
    if (Object.keys(multiFrameUnApplyGroup).length === 0) {
        const selections = jsDesign.currentPage.selection;
        multiFrameUnApplyGroup = (() => {
            let _multi = {};
            selections.forEach(node => {
                _multi[node.id] = {};
            });
            return _multi;
        })();
    }
    Object.keys(multiFrameUnApplyGroup).forEach(key => {
        if (multiFrameUnApplyGroup[key].hasOwnProperty(saveCard.id)) {
            jsDesign.notify("???????????????????????????");
        }
        else {
            multiFrameUnApplyGroup[key][saveCard.id] = { remove: () => { console.log('????????????'); } };
            createGuidelineHandler(saveCard);
        }
    });
}
function deleteGuideline(saveCard) {
    const id = saveCard.id;
    Object.keys(multiFrameUnApplyGroup).forEach(key => {
        if (!multiFrameUnApplyGroup[key].hasOwnProperty(id)) {
            jsDesign.notify("??????????????????");
        }
        else {
            const node = multiFrameUnApplyGroup[key][id];
            node === null || node === void 0 ? void 0 : node.remove();
            delete multiFrameUnApplyGroup[key][id];
            jsDesign.notify(`??????${saveCard.name}???????????????`);
        }
    });
}
jsDesign.showUI(__html__, { width: 260, height: 440, themeColors: true });
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["emit"])('SELECTION_CHANGED', jsDesign.currentPage.selection.length > 0);
jsDesign.on('selectionchange', function () {
    Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["emit"])('SELECTION_CHANGED', jsDesign.currentPage.selection.length > 0);
    Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["emit"])('clear-active');
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])("CHANGE_GUI_SIZE", (guiSize) => {
    jsDesign.ui.resize(guiSize === null || guiSize === void 0 ? void 0 : guiSize.width, guiSize === null || guiSize === void 0 ? void 0 : guiSize.height);
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
    multiFrameUnApplyGroup = {};
    Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["emit"])('clear-active');
    jsDesign.notify("????????????");
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])('update-color', (color) => {
    basedColor = color;
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])('preview-line', (guideline) => {
    let saveCard = {
        id: new Date().getTime().toString(),
        name: '??????',
        icon: '',
        guideline
    };
    createGuideline(saveCard);
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])('hide-preview-line', () => {
    clearCurrentUnApplyGroup();
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])('save-guideline', async (saveCard) => {
    let saveCards = await jsDesign.clientStorage.getAsync(storageKey);
    if (saveCards === undefined) {
        saveCards = [];
    }
    clearCurrentUnApplyGroup();
    jsDesign.clientStorage.setAsync(storageKey, [...saveCards, saveCard])
        .then(() => {
        jsDesign.notify('????????????');
    }).catch(err => {
        jsDesign.notify('????????????');
        console.error(err);
    });
});
Object(_common_events__WEBPACK_IMPORTED_MODULE_0__["on"])('get-storage', () => {
    jsDesign.clientStorage.getAsync(storageKey).then((data) => {
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

// ???????????????RGB
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
        jsDesign.ui.postMessage([name, ...args]);
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
    jsDesign.ui.onmessage = function ([name, ...args]) {
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