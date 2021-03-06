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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/button.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/button.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/* ???????????? */\n.js-design-button {\n  width: 100%;\n  border-radius: 6px;\n  height: 32px;\n}\n\n.js-design-master-button {\n  font-weight: 400;\n}\n\n.js-design-second-button {\n  font-weight: 300;\n}\n\n/* ??????????????? */\n/* ????????? */\n.figma-dark .js-design-master-button {\n  background-color: rgb(69, 150, 255);\n  color: rgb(255, 255, 255);\n  border: none;\n}\n\n.figma-dark .js-design-master-button:hover {\n  background: rgb(70, 139, 242);\n}\n\n.figma-dark .js-design-master-button[disabled] {\n  background: rgba(255, 255, 255, 0.3);\n}\n\n/* ????????? */\n.figma-dark .js-design-second-button {\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  color: rgba(255, 255, 255, 0.8);\n  background: none;\n}\n\n.figma-dark .js-design-second-button:hover {\n  border: 1px solid rgb(255, 255, 255);\n  color: rgb(255, 255, 255);\n}\n\n.figma-dark .js-design-second-button[disabled] {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.3);\n}\n\n/* ???????????? */\n/* ????????? */\n.js-design-master-button {\n  background-color: rgb(69, 150, 255);\n  color: rgb(255, 255, 255);\n  border: none;\n}\n\n.js-design-master-button:hover {\n  background-color: rgb(70, 139, 242);\n}\n\n.js-design-master-button[disabled] {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.js-design-second-button {\n  border: 1px solid rgba(32, 32, 32, 0.2);\n  color: rgb(32, 32, 32);\n  background: none;\n}\n\n.js-design-second-button:hover {\n  border: 1px solid rgba(32, 32, 32, 0.4);\n}\n\n.js-design-second-button[disabled] {\n  border: 1px solid rgba(32, 32, 32, 0.1);\n  color: rgba(32, 32, 32, 0.3);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: urlAlphabet, random, customRandom, customAlphabet, nanoid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRandom", function() { return customRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__["urlAlphabet"]; });


let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return urlAlphabet; });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../css-loader/dist/cjs.js!../sass-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/svelte/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/svelte/index.mjs ***!
  \***************************************/
/*! exports provided: SvelteComponent, SvelteComponentTyped, afterUpdate, beforeUpdate, createEventDispatcher, getAllContexts, getContext, hasContext, onDestroy, onMount, setContext, tick */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/index.mjs */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvelteComponent", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvelteComponentTyped", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentTyped"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["afterUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["beforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["createEventDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllContexts", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["getAllContexts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasContext", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["hasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["onDestroy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["onMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["tick"]; });




/***/ }),

/***/ "./node_modules/svelte/internal/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/svelte/internal/index.mjs ***!
  \************************************************/
/*! exports provided: HtmlTag, HtmlTagHydration, SvelteComponent, SvelteComponentDev, SvelteComponentTyped, SvelteElement, action_destroyer, add_attribute, add_classes, add_flush_callback, add_location, add_render_callback, add_resize_listener, add_styles, add_transform, afterUpdate, append, append_dev, append_empty_stylesheet, append_hydration, append_hydration_dev, append_styles, assign, attr, attr_dev, attribute_to_object, beforeUpdate, bind, binding_callbacks, blank_object, bubble, check_outros, children, claim_component, claim_element, claim_html_tag, claim_space, claim_svg_element, claim_text, clear_loops, component_subscribe, compute_rest_props, compute_slots, createEventDispatcher, create_animation, create_bidirectional_transition, create_component, create_in_transition, create_out_transition, create_slot, create_ssr_component, current_component, custom_event, dataset_dev, debug, destroy_block, destroy_component, destroy_each, detach, detach_after_dev, detach_before_dev, detach_between_dev, detach_dev, dirty_components, dispatch_dev, each, element, element_is, empty, end_hydrating, escape, escape_attribute_value, escape_object, escaped, exclude_internal_props, fix_and_destroy_block, fix_and_outro_and_destroy_block, fix_position, flush, getAllContexts, getContext, get_all_dirty_from_scope, get_binding_group_value, get_current_component, get_custom_elements_slots, get_root_for_style, get_slot_changes, get_spread_object, get_spread_update, get_store_value, globals, group_outros, handle_promise, hasContext, has_prop, identity, init, insert, insert_dev, insert_hydration, insert_hydration_dev, intros, invalid_attribute_name_character, is_client, is_crossorigin, is_empty, is_function, is_promise, is_void, listen, listen_dev, loop, loop_guard, merge_ssr_styles, missing_component, mount_component, noop, not_equal, now, null_to_empty, object_without_properties, onDestroy, onMount, once, outro_and_destroy_block, prevent_default, prop_dev, query_selector_all, raf, run, run_all, safe_not_equal, schedule_update, select_multiple_value, select_option, select_options, select_value, self, setContext, set_attributes, set_current_component, set_custom_element_data, set_data, set_data_dev, set_input_type, set_input_value, set_now, set_raf, set_store_value, set_style, set_svg_attributes, space, spread, src_url_equal, start_hydrating, stop_propagation, subscribe, svg_element, text, tick, time_ranges_to_array, to_number, toggle_class, transition_in, transition_out, trusted, update_await_block_branch, update_keyed_each, update_slot, update_slot_base, validate_component, validate_dynamic_element, validate_each_argument, validate_each_keys, validate_slots, validate_store, validate_void_dynamic_element, xlink_attr */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlTag", function() { return HtmlTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlTagHydration", function() { return HtmlTagHydration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponent", function() { return SvelteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponentDev", function() { return SvelteComponentDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponentTyped", function() { return SvelteComponentTyped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteElement", function() { return SvelteElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action_destroyer", function() { return action_destroyer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_attribute", function() { return add_attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_classes", function() { return add_classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_flush_callback", function() { return add_flush_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_location", function() { return add_location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_render_callback", function() { return add_render_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_resize_listener", function() { return add_resize_listener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_styles", function() { return add_styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_transform", function() { return add_transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return afterUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_dev", function() { return append_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_empty_stylesheet", function() { return append_empty_stylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_hydration", function() { return append_hydration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_hydration_dev", function() { return append_hydration_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_styles", function() { return append_styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr_dev", function() { return attr_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attribute_to_object", function() { return attribute_to_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return beforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binding_callbacks", function() { return binding_callbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blank_object", function() { return blank_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check_outros", function() { return check_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_component", function() { return claim_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_element", function() { return claim_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_html_tag", function() { return claim_html_tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_space", function() { return claim_space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_svg_element", function() { return claim_svg_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_text", function() { return claim_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear_loops", function() { return clear_loops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component_subscribe", function() { return component_subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute_rest_props", function() { return compute_rest_props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute_slots", function() { return compute_slots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return createEventDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_animation", function() { return create_animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_bidirectional_transition", function() { return create_bidirectional_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_component", function() { return create_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_in_transition", function() { return create_in_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_out_transition", function() { return create_out_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_slot", function() { return create_slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_ssr_component", function() { return create_ssr_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current_component", function() { return current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom_event", function() { return custom_event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset_dev", function() { return dataset_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_block", function() { return destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_component", function() { return destroy_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_each", function() { return destroy_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_after_dev", function() { return detach_after_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_before_dev", function() { return detach_before_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_between_dev", function() { return detach_between_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_dev", function() { return detach_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirty_components", function() { return dirty_components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch_dev", function() { return dispatch_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element", function() { return element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element_is", function() { return element_is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end_hydrating", function() { return end_hydrating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape_attribute_value", function() { return escape_attribute_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape_object", function() { return escape_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaped", function() { return escaped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude_internal_props", function() { return exclude_internal_props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_destroy_block", function() { return fix_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_outro_and_destroy_block", function() { return fix_and_outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_position", function() { return fix_position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllContexts", function() { return getAllContexts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_all_dirty_from_scope", function() { return get_all_dirty_from_scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_binding_group_value", function() { return get_binding_group_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_current_component", function() { return get_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_custom_elements_slots", function() { return get_custom_elements_slots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_root_for_style", function() { return get_root_for_style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_changes", function() { return get_slot_changes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_object", function() { return get_spread_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_update", function() { return get_spread_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_store_value", function() { return get_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_outros", function() { return group_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle_promise", function() { return handle_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasContext", function() { return hasContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has_prop", function() { return has_prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert_dev", function() { return insert_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert_hydration", function() { return insert_hydration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert_hydration_dev", function() { return insert_hydration_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intros", function() { return intros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalid_attribute_name_character", function() { return invalid_attribute_name_character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_client", function() { return is_client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_crossorigin", function() { return is_crossorigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_empty", function() { return is_empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_function", function() { return is_function; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_promise", function() { return is_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_void", function() { return is_void; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen_dev", function() { return listen_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop_guard", function() { return loop_guard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge_ssr_styles", function() { return merge_ssr_styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missing_component", function() { return missing_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount_component", function() { return mount_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not_equal", function() { return not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "null_to_empty", function() { return null_to_empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object_without_properties", function() { return object_without_properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return onDestroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return onMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outro_and_destroy_block", function() { return outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevent_default", function() { return prevent_default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop_dev", function() { return prop_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query_selector_all", function() { return query_selector_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run_all", function() { return run_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safe_not_equal", function() { return safe_not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule_update", function() { return schedule_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_multiple_value", function() { return select_multiple_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_option", function() { return select_option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_options", function() { return select_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_value", function() { return select_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_attributes", function() { return set_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_current_component", function() { return set_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_custom_element_data", function() { return set_custom_element_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data", function() { return set_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data_dev", function() { return set_data_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_type", function() { return set_input_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_value", function() { return set_input_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_now", function() { return set_now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_raf", function() { return set_raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_store_value", function() { return set_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_style", function() { return set_style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_svg_attributes", function() { return set_svg_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "src_url_equal", function() { return src_url_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start_hydrating", function() { return start_hydrating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop_propagation", function() { return stop_propagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg_element", function() { return svg_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return tick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time_ranges_to_array", function() { return time_ranges_to_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_number", function() { return to_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle_class", function() { return toggle_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_in", function() { return transition_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_out", function() { return transition_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trusted", function() { return trusted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_await_block_branch", function() { return update_await_block_branch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_keyed_each", function() { return update_keyed_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_slot", function() { return update_slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_slot_base", function() { return update_slot_base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_component", function() { return validate_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_dynamic_element", function() { return validate_dynamic_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_each_argument", function() { return validate_each_argument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_each_keys", function() { return validate_each_keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_slots", function() { return validate_slots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_store", function() { return validate_store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_void_dynamic_element", function() { return validate_void_dynamic_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xlink_attr", function() { return xlink_attr; });
function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) {
        src_url_equal_anchor = document.createElement('a');
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
}
function not_equal(a, b) {
    return a != a ? b == b : a !== b;
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
    const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
    update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
}
function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;
        for (let i = 0; i < length; i++) {
            dirty[i] = -1;
        }
        return dirty;
    }
    return -1;
}
function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function compute_rest_props(props, keys) {
    const rest = {};
    keys = new Set(keys);
    for (const k in props)
        if (!keys.has(k) && k[0] !== '$')
            rest[k] = props[k];
    return rest;
}
function compute_slots(slots) {
    const result = {};
    for (const key in slots) {
        result[key] = true;
    }
    return result;
}
function once(fn) {
    let ran = false;
    return function (...args) {
        if (ran)
            return;
        ran = true;
        fn.call(this, ...args);
    };
}
function null_to_empty(value) {
    return value == null ? '' : value;
}
function set_store_value(store, ret, value) {
    store.set(value);
    return ret;
}
const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;
// used internally for testing
function set_now(fn) {
    now = fn;
}
function set_raf(fn) {
    raf = fn;
}

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * For testing purposes only!
 */
function clear_loops() {
    tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}

// Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
// at the end of hydration without touching the remaining nodes.
let is_hydrating = false;
function start_hydrating() {
    is_hydrating = true;
}
function end_hydrating() {
    is_hydrating = false;
}
function upper_bound(low, high, key, value) {
    // Return first index of value larger than input value in the range [low, high)
    while (low < high) {
        const mid = low + ((high - low) >> 1);
        if (key(mid) <= value) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    return low;
}
function init_hydrate(target) {
    if (target.hydrate_init)
        return;
    target.hydrate_init = true;
    // We know that all children have claim_order values since the unclaimed have been detached if target is not <head>
    let children = target.childNodes;
    // If target is <head>, there may be children without claim_order
    if (target.nodeName === 'HEAD') {
        const myChildren = [];
        for (let i = 0; i < children.length; i++) {
            const node = children[i];
            if (node.claim_order !== undefined) {
                myChildren.push(node);
            }
        }
        children = myChildren;
    }
    /*
    * Reorder claimed children optimally.
    * We can reorder claimed children optimally by finding the longest subsequence of
    * nodes that are already claimed in order and only moving the rest. The longest
    * subsequence subsequence of nodes that are claimed in order can be found by
    * computing the longest increasing subsequence of .claim_order values.
    *
    * This algorithm is optimal in generating the least amount of reorder operations
    * possible.
    *
    * Proof:
    * We know that, given a set of reordering operations, the nodes that do not move
    * always form an increasing subsequence, since they do not move among each other
    * meaning that they must be already ordered among each other. Thus, the maximal
    * set of nodes that do not move form a longest increasing subsequence.
    */
    // Compute longest increasing subsequence
    // m: subsequence length j => index k of smallest value that ends an increasing subsequence of length j
    const m = new Int32Array(children.length + 1);
    // Predecessor indices + 1
    const p = new Int32Array(children.length);
    m[0] = -1;
    let longest = 0;
    for (let i = 0; i < children.length; i++) {
        const current = children[i].claim_order;
        // Find the largest subsequence length such that it ends in a value less than our current value
        // upper_bound returns first greater value, so we subtract one
        // with fast path for when we are on the current longest subsequence
        const seqLen = ((longest > 0 && children[m[longest]].claim_order <= current) ? longest + 1 : upper_bound(1, longest, idx => children[m[idx]].claim_order, current)) - 1;
        p[i] = m[seqLen] + 1;
        const newLen = seqLen + 1;
        // We can guarantee that current is the smallest value. Otherwise, we would have generated a longer sequence.
        m[newLen] = i;
        longest = Math.max(newLen, longest);
    }
    // The longest increasing subsequence of nodes (initially reversed)
    const lis = [];
    // The rest of the nodes, nodes that will be moved
    const toMove = [];
    let last = children.length - 1;
    for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
        lis.push(children[cur - 1]);
        for (; last >= cur; last--) {
            toMove.push(children[last]);
        }
        last--;
    }
    for (; last >= 0; last--) {
        toMove.push(children[last]);
    }
    lis.reverse();
    // We sort the nodes being moved to guarantee that their insertion order matches the claim order
    toMove.sort((a, b) => a.claim_order - b.claim_order);
    // Finally, we move the nodes
    for (let i = 0, j = 0; i < toMove.length; i++) {
        while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order) {
            j++;
        }
        const anchor = j < lis.length ? lis[j] : null;
        target.insertBefore(toMove[i], anchor);
    }
}
function append(target, node) {
    target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
    const append_styles_to = get_root_for_style(target);
    if (!append_styles_to.getElementById(style_sheet_id)) {
        const style = element('style');
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
    }
}
function get_root_for_style(node) {
    if (!node)
        return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) {
        return root;
    }
    return node.ownerDocument;
}
function append_empty_stylesheet(node) {
    const style_element = element('style');
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
}
function append_stylesheet(node, style) {
    append(node.head || node, style);
}
function append_hydration(target, node) {
    if (is_hydrating) {
        init_hydrate(target);
        if ((target.actual_end_child === undefined) || ((target.actual_end_child !== null) && (target.actual_end_child.parentElement !== target))) {
            target.actual_end_child = target.firstChild;
        }
        // Skip nodes of undefined ordering
        while ((target.actual_end_child !== null) && (target.actual_end_child.claim_order === undefined)) {
            target.actual_end_child = target.actual_end_child.nextSibling;
        }
        if (node !== target.actual_end_child) {
            // We only insert if the ordering of this node should be modified or the parent node is not target
            if (node.claim_order !== undefined || node.parentNode !== target) {
                target.insertBefore(node, target.actual_end_child);
            }
        }
        else {
            target.actual_end_child = node.nextSibling;
        }
    }
    else if (node.parentNode !== target || node.nextSibling !== null) {
        target.appendChild(node);
    }
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function insert_hydration(target, node, anchor) {
    if (is_hydrating && !anchor) {
        append_hydration(target, node);
    }
    else if (node.parentNode !== target || node.nextSibling != anchor) {
        target.insertBefore(node, anchor || null);
    }
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function element_is(name, is) {
    return document.createElement(name, { is });
}
function object_without_properties(obj, exclude) {
    const target = {};
    for (const k in obj) {
        if (has_prop(obj, k)
            // @ts-ignore
            && exclude.indexOf(k) === -1) {
            // @ts-ignore
            target[k] = obj[k];
        }
    }
    return target;
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function stop_propagation(fn) {
    return function (event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function self(fn) {
    return function (event) {
        // @ts-ignore
        if (event.target === this)
            fn.call(this, event);
    };
}
function trusted(fn) {
    return function (event) {
        // @ts-ignore
        if (event.isTrusted)
            fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    // @ts-ignore
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for (const key in attributes) {
        if (attributes[key] == null) {
            node.removeAttribute(key);
        }
        else if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key === '__value') {
            node.value = node[key] = attributes[key];
        }
        else if (descriptors[key] && descriptors[key].set) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function set_svg_attributes(node, attributes) {
    for (const key in attributes) {
        attr(node, key, attributes[key]);
    }
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) {
        node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
    }
    else {
        attr(node, prop, value);
    }
}
function xlink_attr(node, attribute, value) {
    node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function get_binding_group_value(group, __value, checked) {
    const value = new Set();
    for (let i = 0; i < group.length; i += 1) {
        if (group[i].checked)
            value.add(group[i].__value);
    }
    if (!checked) {
        value.delete(__value);
    }
    return Array.from(value);
}
function to_number(value) {
    return value === '' ? null : +value;
}
function time_ranges_to_array(ranges) {
    const array = [];
    for (let i = 0; i < ranges.length; i += 1) {
        array.push({ start: ranges.start(i), end: ranges.end(i) });
    }
    return array;
}
function children(element) {
    return Array.from(element.childNodes);
}
function init_claim_info(nodes) {
    if (nodes.claim_info === undefined) {
        nodes.claim_info = { last_index: 0, total_claimed: 0 };
    }
}
function claim_node(nodes, predicate, processNode, createNode, dontUpdateLastIndex = false) {
    // Try to find nodes in an order such that we lengthen the longest increasing subsequence
    init_claim_info(nodes);
    const resultNode = (() => {
        // We first try to find an element after the previous one
        for (let i = nodes.claim_info.last_index; i < nodes.length; i++) {
            const node = nodes[i];
            if (predicate(node)) {
                const replacement = processNode(node);
                if (replacement === undefined) {
                    nodes.splice(i, 1);
                }
                else {
                    nodes[i] = replacement;
                }
                if (!dontUpdateLastIndex) {
                    nodes.claim_info.last_index = i;
                }
                return node;
            }
        }
        // Otherwise, we try to find one before
        // We iterate in reverse so that we don't go too far back
        for (let i = nodes.claim_info.last_index - 1; i >= 0; i--) {
            const node = nodes[i];
            if (predicate(node)) {
                const replacement = processNode(node);
                if (replacement === undefined) {
                    nodes.splice(i, 1);
                }
                else {
                    nodes[i] = replacement;
                }
                if (!dontUpdateLastIndex) {
                    nodes.claim_info.last_index = i;
                }
                else if (replacement === undefined) {
                    // Since we spliced before the last_index, we decrease it
                    nodes.claim_info.last_index--;
                }
                return node;
            }
        }
        // If we can't find any matching node, we create a new one
        return createNode();
    })();
    resultNode.claim_order = nodes.claim_info.total_claimed;
    nodes.claim_info.total_claimed += 1;
    return resultNode;
}
function claim_element_base(nodes, name, attributes, create_element) {
    return claim_node(nodes, (node) => node.nodeName === name, (node) => {
        const remove = [];
        for (let j = 0; j < node.attributes.length; j++) {
            const attribute = node.attributes[j];
            if (!attributes[attribute.name]) {
                remove.push(attribute.name);
            }
        }
        remove.forEach(v => node.removeAttribute(v));
        return undefined;
    }, () => create_element(name));
}
function claim_element(nodes, name, attributes) {
    return claim_element_base(nodes, name, attributes, element);
}
function claim_svg_element(nodes, name, attributes) {
    return claim_element_base(nodes, name, attributes, svg_element);
}
function claim_text(nodes, data) {
    return claim_node(nodes, (node) => node.nodeType === 3, (node) => {
        const dataStr = '' + data;
        if (node.data.startsWith(dataStr)) {
            if (node.data.length !== dataStr.length) {
                return node.splitText(dataStr.length);
            }
        }
        else {
            node.data = dataStr;
        }
    }, () => text(data), true // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
    );
}
function claim_space(nodes) {
    return claim_text(nodes, ' ');
}
function find_comment(nodes, text, start) {
    for (let i = start; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 8 /* comment node */ && node.textContent.trim() === text) {
            return i;
        }
    }
    return nodes.length;
}
function claim_html_tag(nodes, is_svg) {
    // find html opening tag
    const start_index = find_comment(nodes, 'HTML_TAG_START', 0);
    const end_index = find_comment(nodes, 'HTML_TAG_END', start_index);
    if (start_index === end_index) {
        return new HtmlTagHydration(undefined, is_svg);
    }
    init_claim_info(nodes);
    const html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
    detach(html_tag_nodes[0]);
    detach(html_tag_nodes[html_tag_nodes.length - 1]);
    const claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);
    for (const n of claimed_nodes) {
        n.claim_order = nodes.claim_info.total_claimed;
        nodes.claim_info.total_claimed += 1;
    }
    return new HtmlTagHydration(claimed_nodes, is_svg);
}
function set_data(text, data) {
    data = '' + data;
    if (text.wholeText !== data)
        text.data = data;
}
function set_input_value(input, value) {
    input.value = value == null ? '' : value;
}
function set_input_type(input, type) {
    try {
        input.type = type;
    }
    catch (e) {
        // do nothing
    }
}
function set_style(node, key, value, important) {
    if (value === null) {
        node.style.removeProperty(key);
    }
    else {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
}
function select_option(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
    select.selectedIndex = -1; // no option should be selected
}
function select_options(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
    }
}
function select_value(select) {
    const selected_option = select.querySelector(':checked') || select.options[0];
    return selected_option && selected_option.__value;
}
function select_multiple_value(select) {
    return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}
// unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead
let crossorigin;
function is_crossorigin() {
    if (crossorigin === undefined) {
        crossorigin = false;
        try {
            if (typeof window !== 'undefined' && window.parent) {
                void window.parent.document;
            }
        }
        catch (error) {
            crossorigin = true;
        }
    }
    return crossorigin;
}
function add_resize_listener(node, fn) {
    const computed_style = getComputedStyle(node);
    if (computed_style.position === 'static') {
        node.style.position = 'relative';
    }
    const iframe = element('iframe');
    iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' +
        'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.tabIndex = -1;
    const crossorigin = is_crossorigin();
    let unsubscribe;
    if (crossorigin) {
        iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
        unsubscribe = listen(window, 'message', (event) => {
            if (event.source === iframe.contentWindow)
                fn();
        });
    }
    else {
        iframe.src = 'about:blank';
        iframe.onload = () => {
            unsubscribe = listen(iframe.contentWindow, 'resize', fn);
        };
    }
    append(node, iframe);
    return () => {
        if (crossorigin) {
            unsubscribe();
        }
        else if (unsubscribe && iframe.contentWindow) {
            unsubscribe();
        }
        detach(iframe);
    };
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
}
function query_selector_all(selector, parent = document.body) {
    return Array.from(parent.querySelectorAll(selector));
}
class HtmlTag {
    constructor(is_svg = false) {
        this.is_svg = false;
        this.is_svg = is_svg;
        this.e = this.n = null;
    }
    c(html) {
        this.h(html);
    }
    m(html, target, anchor = null) {
        if (!this.e) {
            if (this.is_svg)
                this.e = svg_element(target.nodeName);
            else
                this.e = element(target.nodeName);
            this.t = target;
            this.c(html);
        }
        this.i(anchor);
    }
    h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    }
    i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert(this.t, this.n[i], anchor);
        }
    }
    p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}
class HtmlTagHydration extends HtmlTag {
    constructor(claimed_nodes, is_svg = false) {
        super(is_svg);
        this.e = this.n = null;
        this.l = claimed_nodes;
    }
    c(html) {
        if (this.l) {
            this.n = this.l;
        }
        else {
            super.c(html);
        }
    }
    i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert_hydration(this.t, this.n[i], anchor);
        }
    }
}
function attribute_to_object(attributes) {
    const result = {};
    for (const attribute of attributes) {
        result[attribute.name] = attribute.value;
    }
    return result;
}
function get_custom_elements_slots(element) {
    const result = {};
    element.childNodes.forEach((node) => {
        result[node.slot || 'default'] = true;
    });
    return result;
}

// we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624
const managed_styles = new Map();
let active = 0;
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_style_information(doc, node) {
    const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
    managed_styles.set(doc, info);
    return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = get_root_for_style(node);
    const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    const previous = (node.style.animation || '').split(', ');
    const next = previous.filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
        node.style.animation = next.join(', ');
        active -= deleted;
        if (!active)
            clear_rules();
    }
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        managed_styles.forEach(info => {
            const { stylesheet } = info;
            let i = stylesheet.cssRules.length;
            while (i--)
                stylesheet.deleteRule(i);
            info.rules = {};
        });
        managed_styles.clear();
    });
}

function create_animation(node, from, fn, params) {
    if (!from)
        return noop;
    const to = node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
        return noop;
    const { delay = 0, duration = 300, easing = identity, 
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay, 
    // @ts-ignore todo:
    end = start_time + duration, tick = noop, css } = fn(node, { from, to }, params);
    let running = true;
    let started = false;
    let name;
    function start() {
        if (css) {
            name = create_rule(node, 0, 1, duration, delay, easing, css);
        }
        if (!delay) {
            started = true;
        }
    }
    function stop() {
        if (css)
            delete_rule(node, name);
        running = false;
    }
    loop(now => {
        if (!started && now >= start_time) {
            started = true;
        }
        if (started && now >= end) {
            tick(1, 0);
            stop();
        }
        if (!running) {
            return false;
        }
        if (started) {
            const p = now - start_time;
            const t = 0 + 1 * easing(p / duration);
            tick(t, 1 - t);
        }
        return true;
    });
    start();
    tick(0, 1);
    return stop;
}
function fix_position(node) {
    const style = getComputedStyle(node);
    if (style.position !== 'absolute' && style.position !== 'fixed') {
        const { width, height } = style;
        const a = node.getBoundingClientRect();
        node.style.position = 'absolute';
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
    }
}
function add_transform(node, a) {
    const b = node.getBoundingClientRect();
    if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable = false } = {}) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail, { cancelable });
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
            return !event.defaultPrevented;
        }
        return true;
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
    return context;
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}
function getAllContexts() {
    return get_current_component().$$.context;
}
function hasContext(key) {
    return get_current_component().$$.context.has(key);
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
        // @ts-ignore
        callbacks.slice().forEach(fn => fn.call(this, event));
    }
}

const dirty_components = [];
const intros = { enabled: false };
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    const saved_component = current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        while (flushidx < dirty_components.length) {
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
const null_transition = { duration: 0 };
function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick(0, 1);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        if (task)
            task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, 'start'));
        task = loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(1, 0);
                    dispatch(node, true, 'end');
                    cleanup();
                    return running = false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(t, 1 - t);
                }
            }
            return running;
        });
    }
    let started = false;
    return {
        start() {
            if (started)
                return;
            started = true;
            delete_rule(node);
            if (is_function(config)) {
                config = config();
                wait().then(go);
            }
            else {
                go();
            }
        },
        invalidate() {
            started = false;
        },
        end() {
            if (running) {
                cleanup();
                running = false;
            }
        }
    };
}
function create_out_transition(node, fn, params) {
    let config = fn(node, params);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        add_render_callback(() => dispatch(node, false, 'start'));
        loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(0, 1);
                    dispatch(node, false, 'end');
                    if (!--group.r) {
                        // this will result in `end()` being called,
                        // so we don't need to clean up here
                        run_all(group.c);
                    }
                    return false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(1 - t, t);
                }
            }
            return running;
        });
    }
    if (is_function(config)) {
        wait().then(() => {
            // @ts-ignore
            config = config();
            go();
        });
    }
    else {
        go();
    }
    return {
        end(reset) {
            if (reset && config.tick) {
                config.tick(1, 0);
            }
            if (running) {
                if (animation_name)
                    delete_rule(node, animation_name);
                running = false;
            }
        }
    };
}
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = (program.b - t);
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program || pending_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(() => dispatch(node, b, 'start'));
            loop(now => {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro ??? we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro ??? needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run(b) {
            if (is_function(config)) {
                wait().then(() => {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}

function handle_promise(promise, info) {
    const token = info.token = {};
    function update(type, index, key, value) {
        if (info.token !== token)
            return;
        info.resolved = value;
        let child_ctx = info.ctx;
        if (key !== undefined) {
            child_ctx = child_ctx.slice();
            child_ctx[key] = value;
        }
        const block = type && (info.current = type)(child_ctx);
        let needs_flush = false;
        if (info.block) {
            if (info.blocks) {
                info.blocks.forEach((block, i) => {
                    if (i !== index && block) {
                        group_outros();
                        transition_out(block, 1, 1, () => {
                            if (info.blocks[i] === block) {
                                info.blocks[i] = null;
                            }
                        });
                        check_outros();
                    }
                });
            }
            else {
                info.block.d(1);
            }
            block.c();
            transition_in(block, 1);
            block.m(info.mount(), info.anchor);
            needs_flush = true;
        }
        info.block = block;
        if (info.blocks)
            info.blocks[index] = block;
        if (needs_flush) {
            flush();
        }
    }
    if (is_promise(promise)) {
        const current_component = get_current_component();
        promise.then(value => {
            set_current_component(current_component);
            update(info.then, 1, info.value, value);
            set_current_component(null);
        }, error => {
            set_current_component(current_component);
            update(info.catch, 2, info.error, error);
            set_current_component(null);
            if (!info.hasCatch) {
                throw error;
            }
        });
        // if we previously had a then/catch block, destroy it
        if (info.current !== info.pending) {
            update(info.pending, 0);
            return true;
        }
    }
    else {
        if (info.current !== info.then) {
            update(info.then, 1, info.value, promise);
            return true;
        }
        info.resolved = promise;
    }
}
function update_await_block_branch(info, ctx, dirty) {
    const child_ctx = ctx.slice();
    const { resolved } = info;
    if (info.current === info.then) {
        child_ctx[info.value] = resolved;
    }
    if (info.current === info.catch) {
        child_ctx[info.error] = resolved;
    }
    info.block.p(child_ctx, dirty);
}

const globals = (typeof window !== 'undefined'
    ? window
    : typeof globalThis !== 'undefined'
        ? globalThis
        : global);

function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
    });
}
function fix_and_destroy_block(block, lookup) {
    block.f();
    destroy_block(block, lookup);
}
function fix_and_outro_and_destroy_block(block, lookup) {
    block.f();
    outro_and_destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(child_ctx, dirty);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}
function validate_each_keys(ctx, list, get_context, get_key) {
    const keys = new Set();
    for (let i = 0; i < list.length; i++) {
        const key = get_key(get_context(ctx, list, i));
        if (keys.has(key)) {
            throw new Error('Cannot have duplicate keys in a keyed each');
        }
        keys.add(key);
    }
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}
function get_spread_object(spread_props) {
    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}

// source: https://html.spec.whatwg.org/multipage/indices.html
const boolean_attributes = new Set([
    'allowfullscreen',
    'allowpaymentrequest',
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'controls',
    'default',
    'defer',
    'disabled',
    'formnovalidate',
    'hidden',
    'ismap',
    'loop',
    'multiple',
    'muted',
    'nomodule',
    'novalidate',
    'open',
    'playsinline',
    'readonly',
    'required',
    'reversed',
    'selected'
]);

const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
    return void_element_names.test(name) || name.toLowerCase() === '!doctype';
}

const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
function spread(args, attrs_to_add) {
    const attributes = Object.assign({}, ...args);
    if (attrs_to_add) {
        const classes_to_add = attrs_to_add.classes;
        const styles_to_add = attrs_to_add.styles;
        if (classes_to_add) {
            if (attributes.class == null) {
                attributes.class = classes_to_add;
            }
            else {
                attributes.class += ' ' + classes_to_add;
            }
        }
        if (styles_to_add) {
            if (attributes.style == null) {
                attributes.style = style_object_to_string(styles_to_add);
            }
            else {
                attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
            }
        }
    }
    let str = '';
    Object.keys(attributes).forEach(name => {
        if (invalid_attribute_name_character.test(name))
            return;
        const value = attributes[name];
        if (value === true)
            str += ' ' + name;
        else if (boolean_attributes.has(name.toLowerCase())) {
            if (value)
                str += ' ' + name;
        }
        else if (value != null) {
            str += ` ${name}="${value}"`;
        }
    });
    return str;
}
function merge_ssr_styles(style_attribute, style_directive) {
    const style_object = {};
    for (const individual_style of style_attribute.split(';')) {
        const colon_index = individual_style.indexOf(':');
        const name = individual_style.slice(0, colon_index).trim();
        const value = individual_style.slice(colon_index + 1).trim();
        if (!name)
            continue;
        style_object[name] = value;
    }
    for (const name in style_directive) {
        const value = style_directive[name];
        if (value) {
            style_object[name] = value;
        }
        else {
            delete style_object[name];
        }
    }
    return style_object;
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function escape_attribute_value(value) {
    return typeof value === 'string' ? escape(value) : value;
}
function escape_object(obj) {
    const result = {};
    for (const key in obj) {
        result[key] = escape_attribute_value(obj[key]);
    }
    return result;
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
function debug(file, line, column, values) {
    console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
    console.log(values); // eslint-disable-line no-console
    return '';
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(context || (parent_component ? parent_component.$$.context : [])),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    const assignment = (boolean && value === true) ? '' : `="${escape_attribute_value(value.toString())}"`;
    return ` ${name}${assignment}`;
}
function add_classes(classes) {
    return classes ? ` class="${classes}"` : '';
}
function style_object_to_string(style_object) {
    return Object.keys(style_object)
        .filter(key => style_object[key])
        .map(key => `${key}: ${style_object[key]};`)
        .join(' ');
}
function add_styles(style_object) {
    const styles = style_object_to_string(style_object);
    return styles ? ` style="${styles}"` : '';
}

function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== undefined) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
    }
}
function create_component(block) {
    block && block.c();
}
function claim_component(block, parent_nodes) {
    block && block.l(parent_nodes);
}
function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            start_hydrating();
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        end_hydrating();
        flush();
    }
    set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement === 'function') {
    SvelteElement = class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            const { on_mount } = this.$$;
            this.$$.on_disconnect = on_mount.map(run).filter(is_function);
            // @ts-ignore todo: improve typings
            for (const key in this.$$.slotted) {
                // @ts-ignore todo: improve typings
                this.appendChild(this.$$.slotted[key]);
            }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
            this[attr] = newValue;
        }
        disconnectedCallback() {
            run_all(this.$$.on_disconnect);
        }
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            // TODO should this delegate to addEventListener?
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    };
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.48.0' }, detail), { bubbles: true }));
}
function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', { target, node });
    append(target, node);
}
function append_hydration_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', { target, node });
    append_hydration(target, node);
}
function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
    insert(target, node, anchor);
}
function insert_hydration_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
    insert_hydration(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', { node });
    detach(node);
}
function detach_between_dev(before, after) {
    while (before.nextSibling && before.nextSibling !== after) {
        detach_dev(before.nextSibling);
    }
}
function detach_before_dev(after) {
    while (after.previousSibling) {
        detach_dev(after.previousSibling);
    }
}
function detach_after_dev(before) {
    while (before.nextSibling) {
        detach_dev(before.nextSibling);
    }
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default)
        modifiers.push('preventDefault');
    if (has_stop_propagation)
        modifiers.push('stopPropagation');
    dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
    const dispose = listen(node, event, handler, options);
    return () => {
        dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
        dispose();
    };
}
function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null)
        dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
    else
        dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
}
function prop_dev(node, property, value) {
    node[property] = value;
    dispatch_dev('SvelteDOMSetProperty', { node, property, value });
}
function dataset_dev(node, property, value) {
    node.dataset[property] = value;
    dispatch_dev('SvelteDOMSetDataset', { node, property, value });
}
function set_data_dev(text, data) {
    data = '' + data;
    if (text.wholeText === data)
        return;
    dispatch_dev('SvelteDOMSetData', { node: text, data });
    text.data = data;
}
function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
        let msg = '{#each} only iterates over array-like objects.';
        if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
            msg += ' You can use a spread to convert this iterable into an array.';
        }
        throw new Error(msg);
    }
}
function validate_slots(name, slot, keys) {
    for (const slot_key of Object.keys(slot)) {
        if (!~keys.indexOf(slot_key)) {
            console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
        }
    }
}
function validate_dynamic_element(tag) {
    const is_string = typeof tag === 'string';
    if (tag && !is_string) {
        throw new Error('<svelte:element> expects "this" attribute to be a string.');
    }
}
function validate_void_dynamic_element(tag) {
    if (tag && is_void(tag)) {
        throw new Error(`<svelte:element this="${tag}"> is self-closing and cannot have content.`);
    }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error("'target' is a required option");
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn('Component was already destroyed'); // eslint-disable-line no-console
        };
    }
    $capture_state() { }
    $inject_state() { }
}
/**
 * Base class to create strongly typed Svelte components.
 * This only exists for typing purposes and should be used in `.d.ts` files.
 *
 * ### Example:
 *
 * You have component library on npm called `component-library`, from which
 * you export a component called `MyComponent`. For Svelte+TypeScript users,
 * you want to provide typings. Therefore you create a `index.d.ts`:
 * ```ts
 * import { SvelteComponentTyped } from "svelte";
 * export class MyComponent extends SvelteComponentTyped<{foo: string}> {}
 * ```
 * Typing this makes it possible for IDEs like VS Code with the Svelte extension
 * to provide intellisense and to use the component like this in a Svelte file
 * with TypeScript:
 * ```svelte
 * <script lang="ts">
 * 	import { MyComponent } from "component-library";
 * </script>
 * <MyComponent foo={'bar'} />
 * ```
 *
 * #### Why not make this part of `SvelteComponent(Dev)`?
 * Because
 * ```ts
 * class ASubclassOfSvelteComponent extends SvelteComponent<{foo: string}> {}
 * const component: typeof SvelteComponent = ASubclassOfSvelteComponent;
 * ```
 * will throw a type error, so we need to separate the more strictly typed class.
 */
class SvelteComponentTyped extends SvelteComponentDev {
    constructor(options) {
        super(options);
    }
}
function loop_guard(timeout) {
    const start = Date.now();
    return () => {
        if (Date.now() - start > timeout) {
            throw new Error('Infinite loop detected');
        }
    };
}




/***/ }),

/***/ "./src/App.svelte":
/*!************************!*\
  !*** ./src/App.svelte ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _components_Color_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Color.svelte */ "./src/components/Color.svelte");
/* harmony import */ var _components_Tags_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Tags.svelte */ "./src/components/Tags.svelte");
/* harmony import */ var _components_Card_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Card.svelte */ "./src/components/Card.svelte");
/* harmony import */ var _components_CheckBox_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CheckBox.svelte */ "./src/components/CheckBox.svelte");
/* harmony import */ var _components_Input_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Input.svelte */ "./src/components/Input.svelte");
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/variables */ "./src/common/variables.js");
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_variables__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Button_svelte__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Button.svelte */ "./src/components/Button.svelte");
/* harmony import */ var _components_Empty_svelte__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Empty.svelte */ "./src/components/Empty.svelte");
/* harmony import */ var _common_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/events */ "./src/common/events.js");
/* harmony import */ var _common_global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/global */ "./src/common/global.js");
/* harmony import */ var _components_SaveCard_svelte__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/SaveCard.svelte */ "./src/components/SaveCard.svelte");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* src/App.svelte generated by Svelte v3.48.0 */


















function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-1qi4n8e", ".save-name-container.svelte-1qi4n8e{justify-content:start !important}.color-select.svelte-1qi4n8e{width:131px}.save-name-container.svelte-1qi4n8e,.color-select-container.svelte-1qi4n8e,.preview-container.svelte-1qi4n8e{display:flex;justify-content:right;padding:0 12px;margin-top:12px}.preview.svelte-1qi4n8e{width:48px}.toast{position:absolute;bottom:16px;left:16px;right:16px;padding:8px 16px;border:1px solid #909399;border-radius:4px;background-color:#909399;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);color:#ffffff;transition:all 0.5s ease-in-out;text-align:center;font-size:12px}.toast--error{border:1px solid #f56c6c;background-color:#f56c6c}.toast--warning{border:1px solid #e6a23c;background-color:#e6a23c}.toast--success{border:1px solid #67c23a;background-color:#67c23a}footer.svelte-1qi4n8e{width:100%;height:64px;margin-top:16px;background-color:rgba(0, 0, 0, 0.03)}.manage-btn.svelte-1qi4n8e{display:flex;justify-content:space-between;padding:16px}.manage-btn.svelte-1qi4n8e .clear-btn{width:58px;height:32px}.manage-btn.svelte-1qi4n8e .show-btn{flex:1;margin-left:12px}");
}

// (254:0) {:else}
function create_else_block_3(ctx) {
	let main;
	let empty_1;
	let current;

	empty_1 = new _components_Empty_svelte__WEBPACK_IMPORTED_MODULE_9__["default"]({
			props: {
				text: "????????????????????????",
				themes: /*themes*/ ctx[8]
			}
		});

	return {
		c() {
			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("main");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(empty_1.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(main, "id", "main");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, main, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(empty_1, main, null);
			current = true;
		},
		p(ctx, dirty) {
			const empty_1_changes = {};
			if (dirty & /*themes*/ 256) empty_1_changes.themes = /*themes*/ ctx[8];
			empty_1.$set(empty_1_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(empty_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(empty_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(main);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(empty_1);
		}
	};
}

// (160:0) {#if hasSelected}
function create_if_block(ctx) {
	let main;
	let header;
	let tags_1;
	let t0;
	let div0;
	let current_block_type_index;
	let if_block0;
	let t1;
	let footer;
	let div3;
	let div1;
	let current_block_type_index_1;
	let if_block1;
	let t2;
	let div2;
	let current_block_type_index_2;
	let if_block2;
	let current;

	tags_1 = new _components_Tags_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: { tags: _common_variables__WEBPACK_IMPORTED_MODULE_7__["tags"], active: /*active*/ ctx[0] }
		});

	tags_1.$on("activeChange", /*handleActiveChange*/ ctx[9]);
	const if_block_creators = [create_if_block_3, create_if_block_4, create_else_block_2];
	const if_blocks = [];

	function select_block_type_1(ctx, dirty) {
		if (/*active*/ ctx[0] === 2) return 0;
		if (/*_saveCardList*/ ctx[5].length) return 1;
		return 2;
	}

	current_block_type_index = select_block_type_1(ctx, -1);
	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	const if_block_creators_1 = [create_if_block_2, create_else_block_1];
	const if_blocks_1 = [];

	function select_block_type_2(ctx, dirty) {
		if (/*active*/ ctx[0] === 0 || /*active*/ ctx[0] === 1) return 0;
		return 1;
	}

	current_block_type_index_1 = select_block_type_2(ctx, -1);
	if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
	const if_block_creators_2 = [create_if_block_1, create_else_block];
	const if_blocks_2 = [];

	function select_block_type_3(ctx, dirty) {
		if (/*active*/ ctx[0] === 0 || /*active*/ ctx[0] === 1) return 0;
		return 1;
	}

	current_block_type_index_2 = select_block_type_3(ctx, -1);
	if_block2 = if_blocks_2[current_block_type_index_2] = if_block_creators_2[current_block_type_index_2](ctx);

	return {
		c() {
			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("main");
			header = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("header");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(tags_1.$$.fragment);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if_block0.c();
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			footer = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("footer");
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if_block1.c();
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if_block2.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "content");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "clear-btn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "show-btn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "manage-btn svelte-1qi4n8e");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(footer, "class", "svelte-1qi4n8e");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(main, "id", "main");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, main, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, header);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(tags_1, header, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, div0);
			if_blocks[current_block_type_index].m(div0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, footer);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div1);
			if_blocks_1[current_block_type_index_1].m(div1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div2);
			if_blocks_2[current_block_type_index_2].m(div2, null);
			current = true;
		},
		p(ctx, dirty) {
			const tags_1_changes = {};
			if (dirty & /*active*/ 1) tags_1_changes.active = /*active*/ ctx[0];
			tags_1.$set(tags_1_changes);
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_1(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				if_block0 = if_blocks[current_block_type_index];

				if (!if_block0) {
					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block0.c();
				} else {
					if_block0.p(ctx, dirty);
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block0, 1);
				if_block0.m(div0, null);
			}

			let previous_block_index_1 = current_block_type_index_1;
			current_block_type_index_1 = select_block_type_2(ctx, dirty);

			if (current_block_type_index_1 === previous_block_index_1) {
				if_blocks_1[current_block_type_index_1].p(ctx, dirty);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks_1[previous_block_index_1], 1, 1, () => {
					if_blocks_1[previous_block_index_1] = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				if_block1 = if_blocks_1[current_block_type_index_1];

				if (!if_block1) {
					if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
					if_block1.c();
				} else {
					if_block1.p(ctx, dirty);
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1, 1);
				if_block1.m(div1, null);
			}

			let previous_block_index_2 = current_block_type_index_2;
			current_block_type_index_2 = select_block_type_3(ctx, dirty);

			if (current_block_type_index_2 === previous_block_index_2) {
				if_blocks_2[current_block_type_index_2].p(ctx, dirty);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks_2[previous_block_index_2], 1, 1, () => {
					if_blocks_2[previous_block_index_2] = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				if_block2 = if_blocks_2[current_block_type_index_2];

				if (!if_block2) {
					if_block2 = if_blocks_2[current_block_type_index_2] = if_block_creators_2[current_block_type_index_2](ctx);
					if_block2.c();
				} else {
					if_block2.p(ctx, dirty);
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block2, 1);
				if_block2.m(div2, null);
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(tags_1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block2);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(tags_1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block2);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(main);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(tags_1);
			if_blocks[current_block_type_index].d();
			if_blocks_1[current_block_type_index_1].d();
			if_blocks_2[current_block_type_index_2].d();
		}
	};
}

// (204:6) {:else}
function create_else_block_2(ctx) {
	let empty_1;
	let current;

	empty_1 = new _components_Empty_svelte__WEBPACK_IMPORTED_MODULE_9__["default"]({
			props: {
				text: `${/*active*/ ctx[0] === 1 ? "?????????" : "??????"}????????????`
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(empty_1.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(empty_1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const empty_1_changes = {};
			if (dirty & /*active*/ 1) empty_1_changes.text = `${/*active*/ ctx[0] === 1 ? "?????????" : "??????"}????????????`;
			empty_1.$set(empty_1_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(empty_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(empty_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(empty_1, detaching);
		}
	};
}

// (191:37) 
function create_if_block_4(ctx) {
	let savecard;
	let updating_saveCardList;
	let updating_selected;
	let t;
	let div1;
	let div0;
	let color;
	let updating_basedColor;
	let current;

	function savecard_saveCardList_binding(value) {
		/*savecard_saveCardList_binding*/ ctx[21](value);
	}

	function savecard_selected_binding(value) {
		/*savecard_selected_binding*/ ctx[22](value);
	}

	let savecard_props = { themes: /*themes*/ ctx[8] };

	if (/*_saveCardList*/ ctx[5] !== void 0) {
		savecard_props.saveCardList = /*_saveCardList*/ ctx[5];
	}

	if (/*lineSelected*/ ctx[1] !== void 0) {
		savecard_props.selected = /*lineSelected*/ ctx[1];
	}

	savecard = new _components_SaveCard_svelte__WEBPACK_IMPORTED_MODULE_12__["default"]({ props: savecard_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(() => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(savecard, 'saveCardList', savecard_saveCardList_binding));
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(() => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(savecard, 'selected', savecard_selected_binding));
	savecard.$on("activeChange", /*lineActiveChange*/ ctx[10]);

	function color_basedColor_binding(value) {
		/*color_basedColor_binding*/ ctx[23](value);
	}

	let color_props = {};

	if (/*basedColor*/ ctx[3] !== void 0) {
		color_props.basedColor = /*basedColor*/ ctx[3];
	}

	color = new _components_Color_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({ props: color_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(() => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(color, 'basedColor', color_basedColor_binding));
	color.$on("colorChange", /*colorChange*/ ctx[13]);

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(savecard.$$.fragment);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(color.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "color-select svelte-1qi4n8e");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "color-select-container svelte-1qi4n8e");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(savecard, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(color, div0, null);
			current = true;
		},
		p(ctx, dirty) {
			const savecard_changes = {};
			if (dirty & /*themes*/ 256) savecard_changes.themes = /*themes*/ ctx[8];

			if (!updating_saveCardList && dirty & /*_saveCardList*/ 32) {
				updating_saveCardList = true;
				savecard_changes.saveCardList = /*_saveCardList*/ ctx[5];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(() => updating_saveCardList = false);
			}

			if (!updating_selected && dirty & /*lineSelected*/ 2) {
				updating_selected = true;
				savecard_changes.selected = /*lineSelected*/ ctx[1];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(() => updating_selected = false);
			}

			savecard.$set(savecard_changes);
			const color_changes = {};

			if (!updating_basedColor && dirty & /*basedColor*/ 8) {
				updating_basedColor = true;
				color_changes.basedColor = /*basedColor*/ ctx[3];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(() => updating_basedColor = false);
			}

			color.$set(color_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(savecard.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(color.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(savecard.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(color.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(savecard, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(color);
		}
	};
}

// (168:6) {#if active === 2}
function create_if_block_3(ctx) {
	let div0;
	let card;
	let updating_guideline;
	let t0;
	let div2;
	let div1;
	let checkbox;
	let updating_guideline_1;
	let updating_checked;
	let t1;
	let div4;
	let div3;
	let input;
	let updating_value;
	let current;

	function card_guideline_binding(value) {
		/*card_guideline_binding*/ ctx[17](value);
	}

	let card_props = {};

	if (/*_guideline*/ ctx[4] !== void 0) {
		card_props.guideline = /*_guideline*/ ctx[4];
	}

	card = new _components_Card_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({ props: card_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(() => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(card, 'guideline', card_guideline_binding));
	card.$on("inputChange", /*cardInputChangeHandler*/ ctx[12]);

	function checkbox_guideline_binding(value) {
		/*checkbox_guideline_binding*/ ctx[18](value);
	}

	function checkbox_checked_binding(value) {
		/*checkbox_checked_binding*/ ctx[19](value);
	}

	let checkbox_props = { label: "??????" };

	if (/*_guideline*/ ctx[4] !== void 0) {
		checkbox_props.guideline = /*_guideline*/ ctx[4];
	}

	if (/*isPreview*/ ctx[6] !== void 0) {
		checkbox_props.checked = /*isPreview*/ ctx[6];
	}

	checkbox = new _components_CheckBox_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({ props: checkbox_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(() => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(checkbox, 'guideline', checkbox_guideline_binding));
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(() => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(checkbox, 'checked', checkbox_checked_binding));
	checkbox.$on("checkboxChange", /*previewChangeHandler*/ ctx[11]);

	function input_value_binding(value) {
		/*input_value_binding*/ ctx[20](value);
	}

	let input_props = { label: "???????????????" };

	if (/*_guidelineName*/ ctx[7] !== void 0) {
		input_props.value = /*_guidelineName*/ ctx[7];
	}

	input = new _components_Input_svelte__WEBPACK_IMPORTED_MODULE_6__["default"]({ props: input_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(() => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(input, 'value', input_value_binding));

	return {
		c() {
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(card.$$.fragment);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(checkbox.$$.fragment);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(input.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "guide-lines");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "preview svelte-1qi4n8e");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "preview-container svelte-1qi4n8e");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "save-name");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div4, "class", "save-name-container svelte-1qi4n8e");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(card, div0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(checkbox, div1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(input, div3, null);
			current = true;
		},
		p(ctx, dirty) {
			const card_changes = {};

			if (!updating_guideline && dirty & /*_guideline*/ 16) {
				updating_guideline = true;
				card_changes.guideline = /*_guideline*/ ctx[4];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(() => updating_guideline = false);
			}

			card.$set(card_changes);
			const checkbox_changes = {};

			if (!updating_guideline_1 && dirty & /*_guideline*/ 16) {
				updating_guideline_1 = true;
				checkbox_changes.guideline = /*_guideline*/ ctx[4];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(() => updating_guideline_1 = false);
			}

			if (!updating_checked && dirty & /*isPreview*/ 64) {
				updating_checked = true;
				checkbox_changes.checked = /*isPreview*/ ctx[6];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);
			const input_changes = {};

			if (!updating_value && dirty & /*_guidelineName*/ 128) {
				updating_value = true;
				input_changes.value = /*_guidelineName*/ ctx[7];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(card.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(checkbox.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(input.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(card.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(checkbox.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(input.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(card);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(checkbox);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(input);
		}
	};
}

// (217:10) {:else}
function create_else_block_1(ctx) {
	let button;
	let current;

	button = new _components_Button_svelte__WEBPACK_IMPORTED_MODULE_8__["default"]({
			props: {
				disabled: /*lineSelected*/ ctx[1].length === 0,
				text: "??????"
			}
		});

	button.$on("click", clearHandler);

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(button.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(button, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const button_changes = {};
			if (dirty & /*lineSelected*/ 2) button_changes.disabled = /*lineSelected*/ ctx[1].length === 0;
			button.$set(button_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(button.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(button.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(button, detaching);
		}
	};
}

// (211:10) {#if active === 0 || active === 1}
function create_if_block_2(ctx) {
	let button;
	let current;

	button = new _components_Button_svelte__WEBPACK_IMPORTED_MODULE_8__["default"]({
			props: {
				disabled: /*lineSelected*/ ctx[1].length === 0,
				text: "??????"
			}
		});

	button.$on("click", /*resetHandler*/ ctx[14]);

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(button.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(button, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const button_changes = {};
			if (dirty & /*lineSelected*/ 2) button_changes.disabled = /*lineSelected*/ ctx[1].length === 0;
			button.$set(button_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(button.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(button.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(button, detaching);
		}
	};
}

// (234:10) {:else}
function create_else_block(ctx) {
	let button;
	let current;

	button = new _components_Button_svelte__WEBPACK_IMPORTED_MODULE_8__["default"]({
			props: {
				disabled: !(/*_guideline*/ ctx[4].row.scales.length > 1 && /*_guideline*/ ctx[4].column.scales.length > 0 && /*_guidelineName*/ ctx[7] !== "" || /*_guideline*/ ctx[4].column.scales.length > 1 && /*_guideline*/ ctx[4].row.scales.length > 0 && /*_guidelineName*/ ctx[7] !== ""),
				class: "show-btn",
				text: `???????????????`,
				hasMasters: true
			}
		});

	button.$on("click", /*saveHandler*/ ctx[15]);

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(button.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(button, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const button_changes = {};
			if (dirty & /*_guideline, _guidelineName*/ 144) button_changes.disabled = !(/*_guideline*/ ctx[4].row.scales.length > 1 && /*_guideline*/ ctx[4].column.scales.length > 0 && /*_guidelineName*/ ctx[7] !== "" || /*_guideline*/ ctx[4].column.scales.length > 1 && /*_guideline*/ ctx[4].row.scales.length > 0 && /*_guidelineName*/ ctx[7] !== "");
			button.$set(button_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(button.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(button.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(button, detaching);
		}
	};
}

// (226:10) {#if active === 0 || active === 1}
function create_if_block_1(ctx) {
	let button;
	let current;

	button = new _components_Button_svelte__WEBPACK_IMPORTED_MODULE_8__["default"]({
			props: {
				disabled: /*lineSelected*/ ctx[1].length === 0,
				class: "show-btn",
				text: "??????",
				hasMasters: true
			}
		});

	button.$on("click", /*applyHandler*/ ctx[16]);

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(button.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(button, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const button_changes = {};
			if (dirty & /*lineSelected*/ 2) button_changes.disabled = /*lineSelected*/ ctx[1].length === 0;
			button.$set(button_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(button.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(button.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(button, detaching);
		}
	};
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block_3];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*hasSelected*/ ctx[2]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
		}
	};
}

let storageActive = 1;
let defaultActive = 0;

// ????????????
function clearHandler(event) {
	
}

function instance($$self, $$props, $$invalidate) {
	let active = 0;
	let lineSelected = [];
	let hasSelected = false;
	let basedColor = "CCCCCC";
	let _guideline = JSON.parse(JSON.stringify(_common_variables__WEBPACK_IMPORTED_MODULE_7__["guideline"]));
	let _saveCardList = JSON.parse(JSON.stringify(_common_variables__WEBPACK_IMPORTED_MODULE_7__["saveCardList"]));
	let isPreview = false;
	let _guidelineName = "";
	let themes = "light";

	// ????????????
	function resetSelection() {
		$$invalidate(1, lineSelected = []);
		Object(_common_events__WEBPACK_IMPORTED_MODULE_10__["emit"])("clear-line");
	}

	// ???????????????
	function handleActiveChange(event) {
		$$invalidate(0, active = event.detail.active);
		$$invalidate(6, isPreview = false);
		$$invalidate(4, _guideline = JSON.parse(JSON.stringify(_common_variables__WEBPACK_IMPORTED_MODULE_7__["guideline"])));

		if (active === storageActive) {
			Object(_common_events__WEBPACK_IMPORTED_MODULE_10__["emit"])("get-storage");
		} else if (active === defaultActive) {
			$$invalidate(5, _saveCardList = JSON.parse(JSON.stringify(_common_variables__WEBPACK_IMPORTED_MODULE_7__["saveCardList"])));
		}

		resetSelection();
		Object(_common_global__WEBPACK_IMPORTED_MODULE_11__["updateGuiSize"])(_common_variables__WEBPACK_IMPORTED_MODULE_7__["guiSize"]);
	}

	// ??????????????????????????????????????????
	function lineActiveChange(event) {
		const index = event.detail.index;
		const lineIndex = lineSelected.indexOf(index);

		// ????????????????????????
		if (lineIndex === -1) {
			Object(_common_events__WEBPACK_IMPORTED_MODULE_10__["emit"])("add-line", _saveCardList[index]);
			$$invalidate(1, lineSelected = [...lineSelected, index]);
		} else {
			Object(_common_events__WEBPACK_IMPORTED_MODULE_10__["emit"])("delete-line", _saveCardList[index]);
			lineSelected.splice(lineIndex, 1);
			$$invalidate(1, lineSelected);
		}
	}

	// ????????????
	function previewChangeHandler(event) {
		if (isPreview) {
			Object(_common_events__WEBPACK_IMPORTED_MODULE_10__["emit"])('preview-line', _guideline);
		} else {
			Object(_common_events__WEBPACK_IMPORTED_MODULE_10__["emit"])('hide-preview-line');
		}
	}

	// ???????????????????????????
	function cardInputChangeHandler(event) {
		$$invalidate(6, isPreview = false);
		resetSelection();
	}

	// ????????????
	function colorChange() {
		Object(_common_events__WEBPACK_IMPORTED_MODULE_10__["emit"])("update-color", basedColor);
	}

	// ??????
	function resetHandler(event) {
		resetSelection();
	}

	// ??????
	function saveHandler(event) {
		if (_guidelineName !== "") {
			Object(_common_events__WEBPACK_IMPORTED_MODULE_10__["emit"])("save-guideline", {
				id: Object(nanoid__WEBPACK_IMPORTED_MODULE_1__["nanoid"])(),
				name: _guidelineName,
				icon: "",
				guideline: _guideline
			});

			resetCustomCard();
			Object(_common_global__WEBPACK_IMPORTED_MODULE_11__["updateGuiSize"])(_common_variables__WEBPACK_IMPORTED_MODULE_7__["guiSize"]);
		} else {
			Object(_common_global__WEBPACK_IMPORTED_MODULE_11__["toast"])("???????????????????????????");
		}
	}

	// ?????????????????????
	function resetCustomCard() {
		$$invalidate(4, _guideline = JSON.parse(JSON.stringify(_common_variables__WEBPACK_IMPORTED_MODULE_7__["guideline"])));
		$$invalidate(7, _guidelineName = "");
		$$invalidate(6, isPreview = false);
	}

	// ??????
	function applyHandler(event) {
		Object(_common_events__WEBPACK_IMPORTED_MODULE_10__["emit"])("apply-line");
	}

	// ????????????????????????
	Object(_common_events__WEBPACK_IMPORTED_MODULE_10__["on"])("SELECTION_CHANGED", hasSelection => {
		$$invalidate(2, hasSelected = hasSelection);
		$$invalidate(6, isPreview = false);

		if (!hasSelected) {
			Object(_common_events__WEBPACK_IMPORTED_MODULE_10__["emit"])("CHANGE_GUI_SIZE", _common_variables__WEBPACK_IMPORTED_MODULE_7__["guiSizeEmpty"]);
		} else {
			Object(_common_global__WEBPACK_IMPORTED_MODULE_11__["updateGuiSize"])(_common_variables__WEBPACK_IMPORTED_MODULE_7__["guiSize"]);
		}
	});

	// ??????????????????
	Object(_common_events__WEBPACK_IMPORTED_MODULE_10__["on"])("clear-active", () => {
		resetSelection();
	});

	Object(_common_events__WEBPACK_IMPORTED_MODULE_10__["on"])("STORAGE", saveCards => {
		if (active === storageActive) {
			$$invalidate(5, _saveCardList = saveCards);
			Object(_common_global__WEBPACK_IMPORTED_MODULE_11__["updateGuiSize"])(_common_variables__WEBPACK_IMPORTED_MODULE_7__["guiSize"]);
		}
	});

	Object(svelte__WEBPACK_IMPORTED_MODULE_13__["onMount"])(() => {
		let node_dark = document.getElementsByClassName('jsdesign-dark');

		if (node_dark.length !== 0) {
			$$invalidate(8, themes = 'dark');
		}
	});

	// ??????????????????[??????]
	window.addEventListener("message", e => {
		if (e.source === window.parent.parent) {
			if (e.data && e.data.themes) {
				const classesToRemove = [];

				// ??????????????????class
				document.documentElement.classList.forEach(value => {
					if (value.startsWith("jsdesign-")) {
						classesToRemove.push(value);
					}
				});

				for (const className of classesToRemove) {
					document.documentElement.classList.remove(className);
				}

				$$invalidate(8, themes = e.data.themes);

				// ?????????class
				document.documentElement.classList.add("jsdesign-" + e.data.themes);
			}
		}
	});

	function card_guideline_binding(value) {
		_guideline = value;
		$$invalidate(4, _guideline);
	}

	function checkbox_guideline_binding(value) {
		_guideline = value;
		$$invalidate(4, _guideline);
	}

	function checkbox_checked_binding(value) {
		isPreview = value;
		$$invalidate(6, isPreview);
	}

	function input_value_binding(value) {
		_guidelineName = value;
		$$invalidate(7, _guidelineName);
	}

	function savecard_saveCardList_binding(value) {
		_saveCardList = value;
		$$invalidate(5, _saveCardList);
	}

	function savecard_selected_binding(value) {
		lineSelected = value;
		$$invalidate(1, lineSelected);
	}

	function color_basedColor_binding(value) {
		basedColor = value;
		$$invalidate(3, basedColor);
	}

	return [
		active,
		lineSelected,
		hasSelected,
		basedColor,
		_guideline,
		_saveCardList,
		isPreview,
		_guidelineName,
		themes,
		handleActiveChange,
		lineActiveChange,
		previewChangeHandler,
		cardInputChangeHandler,
		colorChange,
		resetHandler,
		saveHandler,
		applyHandler,
		card_guideline_binding,
		checkbox_guideline_binding,
		checkbox_checked_binding,
		input_value_binding,
		savecard_saveCardList_binding,
		savecard_selected_binding,
		color_basedColor_binding
	];
}

class App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {}, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/check_mask.svg":
/*!***********************************!*\
  !*** ./src/assets/check_mask.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 8 6.025763364549533\" fill=\"none\"><path id=\"????????????\" fill-rule=\"evenodd\" style=\"fill:#FFFFFF\" transform=\"translate(0 0) rotate(0 4 3.0128816822747693)\" opacity=\"1\" d=\"M2.87,4.34C2.81,4.4 2.72,4.4 2.66,4.34L1.19,2.87C0.97,2.65 0.62,2.65 0.4,2.87L0.4,2.87C0.18,3.09 0.18,3.44 0.4,3.66L2.24,5.5C2.53,5.79 3,5.79 3.29,5.5L7.6,1.19C7.82,0.97 7.82,0.62 7.6,0.4L7.6,0.4C7.38,0.18 7.03,0.18 6.81,0.4Z \"></path></svg>"

/***/ }),

/***/ "./src/assets/empty.svg":
/*!******************************!*\
  !*** ./src/assets/empty.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 120 90\" fill=\"none\"><defs><rect id=\"path_0\" x=\"0\" y=\"0\" width=\"120\" height=\"90\"></rect></defs><g opacity=\"1\" transform=\"translate(0 0) rotate(0 60 45)\"><mask id=\"bg-mask-0\" fill=\"white\"><use xlink:href=\"#path_0\"></use></mask><g mask=\"url(#bg-mask-0)\"><g opacity=\"1\" transform=\"translate(23.99999999999997 9) rotate(0 36 36)\"><path id=\"?????? 4\" fill-rule=\"evenodd\" style=\"fill:#E6E6E6\" transform=\"translate(0 0) rotate(0 36 36)\" opacity=\"1\" d=\"M36,0C16.12,0 0,16.12 0,36C0,55.88 16.12,72 36,72C55.88,72 72,55.88 72,36C72,16.12 55.88,0 36,0Z \"></path><g opacity=\"1\" transform=\"translate(10.07584797761287 11.578848137279909) rotate(0 25.924152022387283 25.924152022387265)\"><g opacity=\"1\" transform=\"translate(5.339996916963002 2.5193742868698874) rotate(0 20.584155105424337 22.70266528491097)\"><path id=\"?????? 2\" fill-rule=\"evenodd\" style=\"fill:#FBFCFC\" transform=\"translate(0 20.164258732718736) rotate(0 20.584155105424337 7.723236956669541)\" opacity=\"0.6\" d=\"M0,2.48C0,2.86 0.2,3.22 0.53,3.41L19.04,14.52C19.99,15.09 21.18,15.09 22.13,14.52L40.64,3.41C40.97,3.22 41.17,2.86 41.17,2.48C41.17,2.1 40.97,1.75 40.64,1.56L38.05,0L22.13,9.55C21.18,10.12 19.99,10.12 19.04,9.55L3.12,0L0.53,1.56C0.2,1.75 0,2.1 0,2.48Z \"></path><path id=\"?????? 3\" fill-rule=\"evenodd\" style=\"fill:#FBFCFC\" transform=\"translate(0 30.317884941487137) rotate(0 20.584155105424337 7.5437228141674035)\" opacity=\"0.6\" d=\"M40.64,3.41C40.97,3.22 41.17,2.86 41.17,2.48C41.17,2.1 40.97,1.75 40.64,1.56L38.05,0L22.13,9.55C21.18,10.12 19.99,10.12 19.04,9.55L3.12,0L0.53,1.56C0.2,1.75 0,2.1 0,2.48C0,2.86 0.2,3.22 0.53,3.41L19.47,14.78C20.16,15.19 21.01,15.19 21.7,14.78L40.64,3.41Z \"></path><path id=\"?????? 4\" fill-rule=\"evenodd\" style=\"fill:#FDFDFD\" transform=\"translate(0 0) rotate(0 20.584155105424337 12.782561868691495)\" opacity=\"1\" d=\"M40.64,13.53C40.97,13.33 41.17,12.98 41.17,12.6C41.17,12.22 40.97,11.87 40.64,11.68L21.69,0.31L21.7,0.31C21.01,-0.1 20.16,-0.1 19.47,0.31L0.53,11.68C0.2,11.87 0,12.22 0,12.6C0,12.98 0.2,13.33 0.53,13.53L19.04,24.64C19.99,25.21 21.18,25.21 22.13,24.64L40.64,13.53Z \"></path></g></g></g><g opacity=\"1\" transform=\"translate(85.5 7.5) rotate(0 12 9)\"><path id=\"?????? 2\" fill-rule=\"evenodd\" style=\"fill:#E6E6E6\" transform=\"translate(0 0) rotate(0 5.25 5.25)\" opacity=\"1\" d=\"M5.25,0C2.35,0 0,2.35 0,5.25C0,8.15 2.35,10.5 5.25,10.5C8.15,10.5 10.5,8.15 10.5,5.25C10.5,2.35 8.15,0 5.25,0Z \"></path><path id=\"?????? 2\" fill-rule=\"evenodd\" style=\"fill:#E6E6E6\" transform=\"translate(18.75 12.75) rotate(0 2.625 2.625)\" opacity=\"1\" d=\"M2.63,0C1.18,0 0,1.18 0,2.63C0,4.07 1.18,5.25 2.63,5.25C4.07,5.25 5.25,4.07 5.25,2.63C5.25,1.18 4.07,0 2.63,0Z \"></path></g><path id=\"?????? 2\" fill-rule=\"evenodd\" style=\"fill:#E6E6E6\" transform=\"translate(17.25 63) rotate(0 3.75 3.75)\" opacity=\"1\" d=\"M3.75,0C1.68,0 0,1.68 0,3.75C0,5.82 1.68,7.5 3.75,7.5C5.82,7.5 7.5,5.82 7.5,3.75C7.5,1.68 5.82,0 3.75,0Z \"></path></g></g></svg>"

/***/ }),

/***/ "./src/assets/empty_dark.svg":
/*!***********************************!*\
  !*** ./src/assets/empty_dark.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 120 90\" fill=\"none\"><defs><rect id=\"path_0\" x=\"0\" y=\"0\" width=\"120\" height=\"90\"></rect></defs><g opacity=\"1\" transform=\"translate(0 0) rotate(0 60 45)\"><mask id=\"bg-mask-0\" fill=\"white\"><use xlink:href=\"#path_0\"></use></mask><g mask=\"url(#bg-mask-0)\"><g opacity=\"1\" transform=\"translate(23.99999999999997 9) rotate(0 36 36)\"><path id=\"?????? 4\" fill-rule=\"evenodd\" style=\"fill:#3F4043\" transform=\"translate(0 0) rotate(0 36 36)\" opacity=\"1\" d=\"M36,0C16.12,0 0,16.12 0,36C0,55.88 16.12,72 36,72C55.88,72 72,55.88 72,36C72,16.12 55.88,0 36,0Z \"></path><g opacity=\"1\" transform=\"translate(10.07584797761287 11.578848137279909) rotate(0 25.924152022387283 25.924152022387265)\"><g opacity=\"1\" transform=\"translate(5.339996916963002 2.5193742868698874) rotate(0 20.584155105424337 22.70266528491097)\"><path id=\"?????? 2\" fill-rule=\"evenodd\" style=\"fill:#8C8C8E\" transform=\"translate(0 20.164258732718736) rotate(0 20.584155105424337 7.723236956669541)\" opacity=\"0.6\" d=\"M38.05,0L22.13,9.55C21.18,10.12 19.99,10.12 19.04,9.55L3.12,0L0.53,1.56C0.2,1.75 0,2.1 0,2.48C0,2.86 0.2,3.22 0.53,3.41L19.04,14.52C19.99,15.09 21.18,15.09 22.13,14.52L40.64,3.41C40.97,3.22 41.17,2.86 41.17,2.48C41.17,2.1 40.97,1.75 40.64,1.56L38.05,0Z \"></path><path id=\"?????? 3\" fill-rule=\"evenodd\" style=\"fill:#8C8C8E\" transform=\"translate(0 30.317884941487137) rotate(0 20.584155105424337 7.5437228141674035)\" opacity=\"0.6\" d=\"M0.53,3.41L19.47,14.78C20.16,15.19 21.01,15.19 21.7,14.78L40.64,3.41C40.97,3.22 41.17,2.86 41.17,2.48C41.17,2.1 40.97,1.75 40.64,1.56L38.05,0L22.13,9.55C21.18,10.12 19.99,10.12 19.04,9.55L3.12,0L0.53,1.56C0.2,1.75 0,2.1 0,2.48C0,2.86 0.2,3.22 0.53,3.41Z \"></path><path id=\"?????? 4\" fill-rule=\"evenodd\" style=\"fill:#A6A7A9\" transform=\"translate(0 0) rotate(0 20.584155105424337 12.782561868691495)\" opacity=\"1\" d=\"M22.13,24.64L40.64,13.53C40.97,13.33 41.17,12.98 41.17,12.6C41.17,12.22 40.97,11.87 40.64,11.68L21.69,0.31L21.7,0.31C21.01,-0.1 20.16,-0.1 19.47,0.31L0.53,11.68C0.2,11.87 0,12.22 0,12.6C0,12.98 0.2,13.33 0.53,13.53L19.04,24.64C19.99,25.21 21.18,25.21 22.13,24.64Z \"></path></g></g></g><g opacity=\"1\" transform=\"translate(85.5 7.5) rotate(0 12 9)\"><path id=\"?????? 2\" fill-rule=\"evenodd\" style=\"fill:#3F4043\" transform=\"translate(0 0) rotate(0 5.25 5.25)\" opacity=\"1\" d=\"M5.25,0C2.35,0 0,2.35 0,5.25C0,8.15 2.35,10.5 5.25,10.5C8.15,10.5 10.5,8.15 10.5,5.25C10.5,2.35 8.15,0 5.25,0Z \"></path><path id=\"?????? 2\" fill-rule=\"evenodd\" style=\"fill:#3F4043\" transform=\"translate(18.75 12.75) rotate(0 2.625 2.625)\" opacity=\"1\" d=\"M2.63,0C1.18,0 0,1.18 0,2.63C0,4.07 1.18,5.25 2.63,5.25C4.07,5.25 5.25,4.07 5.25,2.63C5.25,1.18 4.07,0 2.63,0Z \"></path></g><path id=\"?????? 2\" fill-rule=\"evenodd\" style=\"fill:#3F4043\" transform=\"translate(17.25 63) rotate(0 3.75 3.75)\" opacity=\"1\" d=\"M3.75,0C1.68,0 0,1.68 0,3.75C0,5.82 1.68,7.5 3.75,7.5C5.82,7.5 7.5,5.82 7.5,3.75C7.5,1.68 5.82,0 3.75,0Z \"></path></g></g></svg>"

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

/***/ }),

/***/ "./src/common/global.js":
/*!******************************!*\
  !*** ./src/common/global.js ***!
  \******************************/
/*! exports provided: determineSize, toast, getPageHeight, updateGuiSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineSize", function() { return determineSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageHeight", function() { return getPageHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGuiSize", function() { return updateGuiSize; });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/common/events.js");


/**
 * @name: ??????????????????
 * @msg:
 * @param {number} value ??????????????????
 * @param {number} min   ?????????
 * @param {number} max   ?????????
 * @return {number} -1 0 1
 */
function determineSize(value, min, max) {
    return value > max ? 1 : value < min ? -1 : 0;
}

/**
 * @name: ????????????
 * @msg:
 * @param {string} message ????????????
 * @param {string} type   ????????????
 * @return {*}
 */
function toast(message, type = 'info') {
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
 * @name: ??????????????????
 * @return {number}
 */
function getPageHeight() {
    const node = document.getElementById('main');
    return node ? node.offsetHeight : 0;
}

/**
 * @name: ??????GUI?????? 
 * @returns {*}
 */
function updateGuiSize(guiSize) {
    // ??????????????????????????????????????????0
    setTimeout(() => {
        const height = getPageHeight();
        Object(_events__WEBPACK_IMPORTED_MODULE_0__["emit"])('CHANGE_GUI_SIZE', {
            width: guiSize.width,
            height: height ? height : guiSize.height
        })
    }, 0)
}

/***/ }),

/***/ "./src/common/variables.js":
/*!*********************************!*\
  !*** ./src/common/variables.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const variables = {
    MIN_VALUE: 0,
    MAX_VALUE: 24,
    tags: ['??????', '??????', '?????????'],
    guideline: {
        row: {
            count: 1,
            scales: [1]
        },
        column: {
            count: 1,
            scales: [1]
        },
    },
    guiSizeEmpty: {
        width: 260,
        height: 161
    },
    guiSize: {
        width: 260,
        height: 440
    },
    baseIcon: `<svg t="1656914567415" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3248" width="16" height="16"><path d="M895.026777 552.790744H142.513719a37.710281 37.710281 0 0 1-37.574876-37.574876 37.710281 37.710281 0 0 1 37.574876-37.574876h752.513058a37.710281 37.710281 0 0 1 37.574876 37.574876 37.710281 37.710281 0 0 1-37.574876 37.574876zM895.026777 221.387107h-112.724628A37.710281 37.710281 0 0 1 744.727273 183.812231a37.710281 37.710281 0 0 1 37.574876-37.574876h112.724628a37.710281 37.710281 0 0 1 37.574876 37.574876 37.710281 37.710281 0 0 1-37.574876 37.574876z m-319.894215 0h-112.724628a37.710281 37.710281 0 0 1-37.574876-37.574876 37.710281 37.710281 0 0 1 37.574876-37.574876h112.724628a37.710281 37.710281 0 0 1 37.574876 37.574876 37.710281 37.710281 0 0 1-37.574876 37.574876z m-319.894215 0H142.513719A37.710281 37.710281 0 0 1 104.938843 183.812231a37.710281 37.710281 0 0 1 37.574876-37.574876h112.724628a37.710281 37.710281 0 0 1 37.574876 37.574876 37.473322 37.473322 0 0 1-37.574876 37.574876zM887.579504 884.19438h-37.574876A37.710281 37.710281 0 0 1 812.429752 846.619504a37.710281 37.710281 0 0 1 37.574876-37.574876h37.574876a37.710281 37.710281 0 0 1 37.574876 37.574876 37.710281 37.710281 0 0 1-37.574876 37.574876z m-177.041983 0h-37.574876a37.710281 37.710281 0 0 1-37.574876-37.574876 37.710281 37.710281 0 0 1 37.574876-37.574876h37.574876a37.710281 37.710281 0 0 1 37.574876 37.574876 37.473322 37.473322 0 0 1-37.574876 37.574876z m-176.703471 0h-37.574876a37.710281 37.710281 0 0 1-37.574876-37.574876 37.710281 37.710281 0 0 1 37.574876-37.574876h37.574876a37.710281 37.710281 0 0 1 37.574876 37.574876 37.710281 37.710281 0 0 1-37.574876 37.574876z m-177.041984 0H319.21719a37.710281 37.710281 0 0 1-37.574876-37.574876 37.710281 37.710281 0 0 1 37.574876-37.574876h37.574876a37.710281 37.710281 0 0 1 37.574876 37.574876 37.236364 37.236364 0 0 1-37.574876 37.574876z m-176.703471 0H142.513719a37.710281 37.710281 0 0 1-37.574876-37.574876 37.710281 37.710281 0 0 1 37.574876-37.574876h37.574876a37.710281 37.710281 0 0 1 37.574876 37.574876 37.710281 37.710281 0 0 1-37.574876 37.574876z" p-id="3249" fill="#515151"></path></svg>`,
    baseDarkIcon: `<svg t="1656914567415" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3248" width="16" height="16"><path d="M895.026777 552.790744H142.513719a37.710281 37.710281 0 0 1-37.574876-37.574876 37.710281 37.710281 0 0 1 37.574876-37.574876h752.513058a37.710281 37.710281 0 0 1 37.574876 37.574876 37.710281 37.710281 0 0 1-37.574876 37.574876zM895.026777 221.387107h-112.724628A37.710281 37.710281 0 0 1 744.727273 183.812231a37.710281 37.710281 0 0 1 37.574876-37.574876h112.724628a37.710281 37.710281 0 0 1 37.574876 37.574876 37.710281 37.710281 0 0 1-37.574876 37.574876z m-319.894215 0h-112.724628a37.710281 37.710281 0 0 1-37.574876-37.574876 37.710281 37.710281 0 0 1 37.574876-37.574876h112.724628a37.710281 37.710281 0 0 1 37.574876 37.574876 37.710281 37.710281 0 0 1-37.574876 37.574876z m-319.894215 0H142.513719A37.710281 37.710281 0 0 1 104.938843 183.812231a37.710281 37.710281 0 0 1 37.574876-37.574876h112.724628a37.710281 37.710281 0 0 1 37.574876 37.574876 37.473322 37.473322 0 0 1-37.574876 37.574876zM887.579504 884.19438h-37.574876A37.710281 37.710281 0 0 1 812.429752 846.619504a37.710281 37.710281 0 0 1 37.574876-37.574876h37.574876a37.710281 37.710281 0 0 1 37.574876 37.574876 37.710281 37.710281 0 0 1-37.574876 37.574876z m-177.041983 0h-37.574876a37.710281 37.710281 0 0 1-37.574876-37.574876 37.710281 37.710281 0 0 1 37.574876-37.574876h37.574876a37.710281 37.710281 0 0 1 37.574876 37.574876 37.473322 37.473322 0 0 1-37.574876 37.574876z m-176.703471 0h-37.574876a37.710281 37.710281 0 0 1-37.574876-37.574876 37.710281 37.710281 0 0 1 37.574876-37.574876h37.574876a37.710281 37.710281 0 0 1 37.574876 37.574876 37.710281 37.710281 0 0 1-37.574876 37.574876z m-177.041984 0H319.21719a37.710281 37.710281 0 0 1-37.574876-37.574876 37.710281 37.710281 0 0 1 37.574876-37.574876h37.574876a37.710281 37.710281 0 0 1 37.574876 37.574876 37.236364 37.236364 0 0 1-37.574876 37.574876z m-176.703471 0H142.513719a37.710281 37.710281 0 0 1-37.574876-37.574876 37.710281 37.710281 0 0 1 37.574876-37.574876h37.574876a37.710281 37.710281 0 0 1 37.574876 37.574876 37.710281 37.710281 0 0 1-37.574876 37.574876z" p-id="3249" fill="rgba(255, 255, 255, 0.8)"></path></svg>`,
    saveCardList: [
        {
            id: '1',
            name: '???????????????',
            icon: '',
            guideline: {
                row: {
                    count: 2,
                    scales: [1, 1.618]
                },
                column: {
                    count: 1,
                    scales: [1]
                }
            }
        },
        {
            id: '2',
            name: '???????????????',
            icon: '',
            guideline: {
                row: {
                    count: 1,
                    scales: [1]
                },
                column: {
                    count: 2,
                    scales: [1, 1.618]
                }
            }
        },
        {
            id: '3',
            name: '???????????????',
            icon: '',
            guideline: {
                row: {
                    count: 2,
                    scales: [1, 1.414]
                },
                column: {
                    count: 1,
                    scales: [1]
                }
            }
        },
        {
            id: '4',
            name: '???????????????',
            icon: '',
            guideline: {
                row: {
                    count: 1,
                    scales: [1]
                },
                column: {
                    count: 2,
                    scales: [1, 1.414]
                }
            }
        },
        {
            id: '5',
            name: '????????????',
            icon: '',
            guideline: {
                row: {
                    count: 5,
                    scales: [1, 1, 1, 1, 1]
                },
                column: {
                    count: 1,
                    scales: [1]
                }
            }
        },
        {
            id: '6',
            name: '????????????',
            icon: '',
            guideline: {
                row: {
                    count: 1,
                    scales: [1]
                },
                column: {
                    count: 5,
                    scales: [1, 1, 1, 1, 1]
                }
            }
        },
        {
            id: '7',
            name: '????????????',
            icon: '',
            guideline: {
                row: {
                    count: 3,
                    scales: [1, 2, 1]
                },
                column: {
                    count: 1,
                    scales: [1]
                }
            }
        },
        {
            id: '8',
            name: '????????????',
            icon: '',
            guideline: {
                row: {
                    count: 1,
                    scales: [1]
                },
                column: {
                    count: 3,
                    scales: [1, 2, 1]
                }
            }
        },
        {
            id: '9',
            name: '????????????',
            icon: '',
            guideline: {
                row: {
                    count: 3,
                    scales: [1, 3, 2]
                },
                column: {
                    count: 1,
                    scales: [1]
                }
            }
        },
        {
            id: '10',
            name: '????????????',
            icon: '',
            guideline: {
                row: {
                    count: 1,
                    scales: [1]
                },
                column: {
                    count: 3,
                    scales: [1, 3, 2]
                }
            }
        }
    ]
}

module.exports = variables;

/***/ }),

/***/ "./src/components/Button.svelte":
/*!**************************************!*\
  !*** ./src/components/Button.svelte ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _style_button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/button.css */ "./src/style/button.css");
/* harmony import */ var _style_button_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_button_css__WEBPACK_IMPORTED_MODULE_2__);
/* src/components/Button.svelte generated by Svelte v3.48.0 */





function create_fragment(ctx) {
	let button;
	let t;
	let button_class_value;
	let mounted;
	let dispose;

	return {
		c() {
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*text*/ ctx[2]);
			button.disabled = /*disabled*/ ctx[1];

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "class", button_class_value = "js-design-button " + (/*hasMasters*/ ctx[0]
			? 'js-design-master-button'
			: 'js-design-second-button'));
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, button, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button, t);

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button, "click", /*click_handler*/ ctx[4]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*text*/ 4) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, /*text*/ ctx[2]);

			if (dirty & /*disabled*/ 2) {
				button.disabled = /*disabled*/ ctx[1];
			}

			if (dirty & /*hasMasters*/ 1 && button_class_value !== (button_class_value = "js-design-button " + (/*hasMasters*/ ctx[0]
			? 'js-design-master-button'
			: 'js-design-second-button'))) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "class", button_class_value);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(button);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();
	let { hasMasters = false } = $$props;
	let { disabled = false } = $$props;
	let { text = "??????" } = $$props;

	const click_handler = () => {
		dispatch("click");
	};

	$$self.$$set = $$props => {
		if ('hasMasters' in $$props) $$invalidate(0, hasMasters = $$props.hasMasters);
		if ('disabled' in $$props) $$invalidate(1, disabled = $$props.disabled);
		if ('text' in $$props) $$invalidate(2, text = $$props.text);
	};

	return [hasMasters, disabled, text, dispatch, click_handler];
}

class Button extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { hasMasters: 0, disabled: 1, text: 2 });
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/Card.svelte":
/*!************************************!*\
  !*** ./src/components/Card.svelte ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _NumberField_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NumberField.svelte */ "./src/components/NumberField.svelte");
/* harmony import */ var _common_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/global */ "./src/common/global.js");
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/variables */ "./src/common/variables.js");
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_variables__WEBPACK_IMPORTED_MODULE_4__);
/* src/components/Card.svelte generated by Svelte v3.48.0 */








function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-15pvapa", ".card.svelte-15pvapa>[class^=\"card\"].svelte-15pvapa.svelte-15pvapa{border:1px solid rgba(32, 32, 32, 0.2);border-radius:8px;margin:0 12px;position:relative;padding:16px}.jsdesign-dark .card.svelte-15pvapa>[class^=\"card\"].svelte-15pvapa.svelte-15pvapa{border:1px solid rgba(255, 255, 255, 0.8)}.card.svelte-15pvapa>[class^=\"card\"].svelte-15pvapa>.header-text.svelte-15pvapa{position:absolute;top:-20px;left:16px;font-weight:400;color:rgba(32, 32, 32, 1);font-size:12px;display:block;background-color:rgba(255, 255, 255, 1);padding:4px}.jsdesign-dark .card.svelte-15pvapa>[class^=\"card\"].svelte-15pvapa>.header-text.svelte-15pvapa{border-radius:4px}.card-column.svelte-15pvapa.svelte-15pvapa.svelte-15pvapa{margin-top:20px !important}span.svelte-15pvapa>.measure.svelte-15pvapa.svelte-15pvapa{text-decoration:underline rgba(32, 32, 32, 0.8)}");
}

// (64:6) 
function create_textfield_label_slot_3(ctx) {
	let span1;

	return {
		c() {
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span1.innerHTML = `??????(<span class="measure svelte-15pvapa">N</span>)`;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "class", "label svelte-15pvapa");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "slot", "textfield-label");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span1, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span1);
		}
	};
}

// (67:6) 
function create_unit_measure_slot_1(ctx) {
	let span;

	return {
		c() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span.textContent = "???";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "slot", "unit-measure");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
		}
	};
}

// (75:6) 
function create_textfield_label_slot_2(ctx) {
	let span1;

	return {
		c() {
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span1.innerHTML = `??????(<span class="measure svelte-15pvapa">G</span>)`;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "class", "label svelte-15pvapa");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "slot", "textfield-label");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span1, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span1);
		}
	};
}

// (88:6) 
function create_textfield_label_slot_1(ctx) {
	let span1;

	return {
		c() {
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span1.innerHTML = `??????(<span class="measure svelte-15pvapa">N</span>)`;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "class", "label svelte-15pvapa");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "slot", "textfield-label");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span1, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span1);
		}
	};
}

// (91:6) 
function create_unit_measure_slot(ctx) {
	let span;

	return {
		c() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span.textContent = "???";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "slot", "unit-measure");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
		}
	};
}

// (99:6) 
function create_textfield_label_slot(ctx) {
	let span1;

	return {
		c() {
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span1.innerHTML = `??????(<span class="measure svelte-15pvapa">G</span>)`;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "class", "label svelte-15pvapa");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "slot", "textfield-label");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span1, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span1);
		}
	};
}

function create_fragment(ctx) {
	let div2;
	let div0;
	let h10;
	let t1;
	let numberfield0;
	let updating_value;
	let t2;
	let numberfield1;
	let updating_value_1;
	let t3;
	let div1;
	let h11;
	let t5;
	let numberfield2;
	let updating_value_2;
	let t6;
	let numberfield3;
	let updating_value_3;
	let current;

	function numberfield0_value_binding(value) {
		/*numberfield0_value_binding*/ ctx[4](value);
	}

	let numberfield0_props = {
		min: _common_variables__WEBPACK_IMPORTED_MODULE_4__["MIN_VALUE"],
		max: _common_variables__WEBPACK_IMPORTED_MODULE_4__["MAX_VALUE"],
		$$slots: {
			"unit-measure": [create_unit_measure_slot_1],
			"textfield-label": [create_textfield_label_slot_3]
		},
		$$scope: { ctx }
	};

	if (/*guideline*/ ctx[0].row.count !== void 0) {
		numberfield0_props.value = /*guideline*/ ctx[0].row.count;
	}

	numberfield0 = new _NumberField_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({ props: numberfield0_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(() => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(numberfield0, 'value', numberfield0_value_binding));
	numberfield0.$on("inputChange", /*inputChange_handler*/ ctx[5]);

	function numberfield1_value_binding(value) {
		/*numberfield1_value_binding*/ ctx[6](value);
	}

	let numberfield1_props = {
		base: false,
		$$slots: {
			"textfield-label": [create_textfield_label_slot_2]
		},
		$$scope: { ctx }
	};

	if (/*guideline*/ ctx[0].row.scales !== void 0) {
		numberfield1_props.value = /*guideline*/ ctx[0].row.scales;
	}

	numberfield1 = new _NumberField_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({ props: numberfield1_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(() => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(numberfield1, 'value', numberfield1_value_binding));
	numberfield1.$on("inputChange", /*inputChange_handler_1*/ ctx[7]);

	function numberfield2_value_binding(value) {
		/*numberfield2_value_binding*/ ctx[8](value);
	}

	let numberfield2_props = {
		min: _common_variables__WEBPACK_IMPORTED_MODULE_4__["MIN_VALUE"],
		max: _common_variables__WEBPACK_IMPORTED_MODULE_4__["MAX_VALUE"],
		$$slots: {
			"unit-measure": [create_unit_measure_slot],
			"textfield-label": [create_textfield_label_slot_1]
		},
		$$scope: { ctx }
	};

	if (/*guideline*/ ctx[0].column.count !== void 0) {
		numberfield2_props.value = /*guideline*/ ctx[0].column.count;
	}

	numberfield2 = new _NumberField_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({ props: numberfield2_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(() => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(numberfield2, 'value', numberfield2_value_binding));
	numberfield2.$on("inputChange", /*inputChange_handler_2*/ ctx[9]);

	function numberfield3_value_binding(value) {
		/*numberfield3_value_binding*/ ctx[10](value);
	}

	let numberfield3_props = {
		base: false,
		$$slots: {
			"textfield-label": [create_textfield_label_slot]
		},
		$$scope: { ctx }
	};

	if (/*guideline*/ ctx[0].column.scales !== void 0) {
		numberfield3_props.value = /*guideline*/ ctx[0].column.scales;
	}

	numberfield3 = new _NumberField_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({ props: numberfield3_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(() => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(numberfield3, 'value', numberfield3_value_binding));
	numberfield3.$on("inputChange", /*inputChange_handler_3*/ ctx[11]);

	return {
		c() {
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			h10.textContent = "???";
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(numberfield0.$$.fragment);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(numberfield1.$$.fragment);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			h11.textContent = "???";
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(numberfield2.$$.fragment);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(numberfield3.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(h10, "class", "header-text svelte-15pvapa");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "card-row svelte-15pvapa");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(h11, "class", "header-text svelte-15pvapa");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "card-column svelte-15pvapa");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "card svelte-15pvapa");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, h10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(numberfield0, div0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(numberfield1, div0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, h11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(numberfield2, div1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(numberfield3, div1, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const numberfield0_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				numberfield0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*guideline*/ 1) {
				updating_value = true;
				numberfield0_changes.value = /*guideline*/ ctx[0].row.count;
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(() => updating_value = false);
			}

			numberfield0.$set(numberfield0_changes);
			const numberfield1_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				numberfield1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*guideline*/ 1) {
				updating_value_1 = true;
				numberfield1_changes.value = /*guideline*/ ctx[0].row.scales;
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(() => updating_value_1 = false);
			}

			numberfield1.$set(numberfield1_changes);
			const numberfield2_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				numberfield2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*guideline*/ 1) {
				updating_value_2 = true;
				numberfield2_changes.value = /*guideline*/ ctx[0].column.count;
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(() => updating_value_2 = false);
			}

			numberfield2.$set(numberfield2_changes);
			const numberfield3_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				numberfield3_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_3 && dirty & /*guideline*/ 1) {
				updating_value_3 = true;
				numberfield3_changes.value = /*guideline*/ ctx[0].column.scales;
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(() => updating_value_3 = false);
			}

			numberfield3.$set(numberfield3_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(numberfield0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(numberfield1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(numberfield2.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(numberfield3.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(numberfield0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(numberfield1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(numberfield2.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(numberfield3.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(numberfield0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(numberfield1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(numberfield2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(numberfield3);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();
	let { guideline = {} } = $$props;

	// ?????????????????????????????????????????????
	const inputChange = (event, handler, isUpdate = true) => {
		dispatch('inputChange'); // ????????????????????????input??????????????????[????????????????????????????????????]
		if (!isUpdate) return;
		let { value } = event.detail;
		let deter = Object(_common_global__WEBPACK_IMPORTED_MODULE_3__["determineSize"])(value, _common_variables__WEBPACK_IMPORTED_MODULE_4__["MIN_VALUE"], _common_variables__WEBPACK_IMPORTED_MODULE_4__["MAX_VALUE"]);

		if (deter === -1) {
			Object(_common_global__WEBPACK_IMPORTED_MODULE_3__["toast"])(`??????????????????${_common_variables__WEBPACK_IMPORTED_MODULE_4__["MIN_VALUE"]}`, 'warning');
			handler(_common_variables__WEBPACK_IMPORTED_MODULE_4__["MIN_VALUE"]);
		} else if (deter === 1) {
			Object(_common_global__WEBPACK_IMPORTED_MODULE_3__["toast"])(`??????????????????${_common_variables__WEBPACK_IMPORTED_MODULE_4__["MAX_VALUE"]}`, 'warning');
			handler(_common_variables__WEBPACK_IMPORTED_MODULE_4__["MAX_VALUE"]);
		} else {
			handler(value);
		}

		Object(_common_global__WEBPACK_IMPORTED_MODULE_3__["updateGuiSize"])(_common_variables__WEBPACK_IMPORTED_MODULE_4__["guiSize"]);
	};

	// ???????????????
	const rowHandler = value => {
		$$invalidate(0, guideline.row.count = value, guideline);
		let _scales = guideline.row.scales;
		const len = _scales.length;

		if (len > value) {
			$$invalidate(0, guideline.row.scales = _scales.splice(0, value), guideline);
		} else if (len < value) {
			$$invalidate(0, guideline.row.scales = _scales.concat(Array(value - len).fill(1)), guideline);
		}
	};

	// ???????????????
	const columnHandler = value => {
		$$invalidate(0, guideline.column.count = value, guideline);
		let _scales = guideline.column.scales;
		const len = _scales.length;

		if (len > value) {
			$$invalidate(0, guideline.column.scales = _scales.splice(0, value), guideline);
		} else if (len < value) {
			$$invalidate(0, guideline.column.scales = _scales.concat(Array(value - len).fill(1)), guideline);
		}
	};

	function numberfield0_value_binding(value) {
		if ($$self.$$.not_equal(guideline.row.count, value)) {
			guideline.row.count = value;
			$$invalidate(0, guideline);
		}
	}

	const inputChange_handler = event => inputChange(event, rowHandler);

	function numberfield1_value_binding(value) {
		if ($$self.$$.not_equal(guideline.row.scales, value)) {
			guideline.row.scales = value;
			$$invalidate(0, guideline);
		}
	}

	const inputChange_handler_1 = event => inputChange(event, {}, false);

	function numberfield2_value_binding(value) {
		if ($$self.$$.not_equal(guideline.column.count, value)) {
			guideline.column.count = value;
			$$invalidate(0, guideline);
		}
	}

	const inputChange_handler_2 = event => inputChange(event, columnHandler);

	function numberfield3_value_binding(value) {
		if ($$self.$$.not_equal(guideline.column.scales, value)) {
			guideline.column.scales = value;
			$$invalidate(0, guideline);
		}
	}

	const inputChange_handler_3 = event => inputChange(event, {}, false);

	$$self.$$set = $$props => {
		if ('guideline' in $$props) $$invalidate(0, guideline = $$props.guideline);
	};

	return [
		guideline,
		inputChange,
		rowHandler,
		columnHandler,
		numberfield0_value_binding,
		inputChange_handler,
		numberfield1_value_binding,
		inputChange_handler_1,
		numberfield2_value_binding,
		inputChange_handler_2,
		numberfield3_value_binding,
		inputChange_handler_3
	];
}

class Card extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { guideline: 0 }, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/CheckBox.svelte":
/*!****************************************!*\
  !*** ./src/components/CheckBox.svelte ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _assets_check_mask_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/check_mask.svg */ "./src/assets/check_mask.svg");
/* harmony import */ var _assets_check_mask_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_check_mask_svg__WEBPACK_IMPORTED_MODULE_2__);
/* src/components/CheckBox.svelte generated by Svelte v3.48.0 */





function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-pci8xh", ".checkbox-label.svelte-pci8xh.svelte-pci8xh.svelte-pci8xh{display:flex;height:20px;line-height:12px;align-items:center}.checkbox-label.svelte-pci8xh label.svelte-pci8xh.svelte-pci8xh{position:relative;display:flex}input.svelte-pci8xh.svelte-pci8xh.svelte-pci8xh{position:absolute;width:12px;height:12px;z-index:-1;opacity:0}input.svelte-pci8xh.svelte-pci8xh.svelte-pci8xh:focus{outline:0}.checkbox-toggle.svelte-pci8xh.svelte-pci8xh.svelte-pci8xh{position:relative;height:12px;width:12px;display:flex;align-items:center}.checkbox-toggle.svelte-pci8xh.svelte-pci8xh.svelte-pci8xh:before,.checkbox-toggle.svelte-pci8xh.svelte-pci8xh.svelte-pci8xh:after{background:rgba(255, 255, 255, 1);display:inline-block;position:absolute;content:\"\";opacity:1;border-radius:2px;filter:brightness(100%);height:12px;width:12px;transform-origin:center center}.checkbox-toggle.svelte-pci8xh.svelte-pci8xh.svelte-pci8xh:before{z-index:-2}.checkbox-toggle.svelte-pci8xh.svelte-pci8xh.svelte-pci8xh:after{z-index:-1;border:1px solid rgba(32, 32, 32, 1)}label.svelte-pci8xh:hover .checkbox-toggle.svelte-pci8xh.svelte-pci8xh:after{border:1px solid rgba(69, 150, 255, 1)}label.svelte-pci8xh:hover input.svelte-pci8xh:checked~.checkbox-toggle.svelte-pci8xh:after,label.svelte-pci8xh:hover input.svelte-pci8xh:checked~.checkbox-toggle.svelte-pci8xh:before{filter:brightness(90%)}input.svelte-pci8xh:checked~.checkbox-toggle.svelte-pci8xh.svelte-pci8xh:after,input.svelte-pci8xh:checked~.checkbox-toggle.svelte-pci8xh.svelte-pci8xh:before{background:rgba(69, 150, 255, 1);border:1px solid rgba(69, 150, 255, 1)}input.svelte-pci8xh:checked~.checkbox-toggle.svelte-pci8xh.svelte-pci8xh:before{opacity:0}.checkbox-icon.svelte-pci8xh.svelte-pci8xh.svelte-pci8xh{display:inline-block;transform:scale(0);width:10px;height:10px;margin:auto;padding-left:2px;padding-top:1px}input:checked~.checkbox-toggle.svelte-pci8xh .checkbox-icon.svelte-pci8xh.svelte-pci8xh{transform:scale(1);opacity:1}input[disabled].svelte-pci8xh~.checkbox-toggle.svelte-pci8xh.svelte-pci8xh:after,input[disabled].svelte-pci8xh~.checkbox-toggle.svelte-pci8xh.svelte-pci8xh:before{background:rgba(0, 0, 0, 0.2);border:1px solid rgba(0, 0, 0, 0.2)}.label.svelte-pci8xh.svelte-pci8xh.svelte-pci8xh{display:flex;justify-content:space-between;font-size:12px;color:rgba(32, 32, 32, 1);margin-left:6px}.jsdesign-dark .label.svelte-pci8xh.svelte-pci8xh.svelte-pci8xh{color:rgba(255, 255, 255, 0.8)}.jsdesign-dark input[disabled]~.checkbox-toggle.svelte-pci8xh.svelte-pci8xh.svelte-pci8xh:after,.jsdesign-dark input[disabled]~.checkbox-toggle.svelte-pci8xh.svelte-pci8xh.svelte-pci8xh:before{background:rgba(255, 255, 255, 0.1);border:1px solid rgba(255, 255, 255, 0.1)}");
}

function create_fragment(ctx) {
	let div3;
	let label_1;
	let input;
	let input_disabled_value;
	let t0;
	let div1;
	let div0;
	let t1;
	let div2;
	let span;
	let t2;
	let mounted;
	let dispose;

	return {
		c() {
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			label_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			input = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*label*/ ctx[1]);
			input.disabled = input_disabled_value = !(/*guideline*/ ctx[2].row.scales.length > 1 && /*guideline*/ ctx[2].column.scales.length > 0 || /*guideline*/ ctx[2].column.scales.length > 1 && /*guideline*/ ctx[2].row.scales.length > 0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "type", "checkbox");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "class", "svelte-pci8xh");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "checkbox-icon svelte-pci8xh");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "checkbox-toggle svelte-pci8xh");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "label svelte-pci8xh");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label_1, "class", "svelte-pci8xh");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "checkbox-label svelte-pci8xh");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, label_1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label_1, input);
			input.checked = /*checked*/ ctx[0];
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label_1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label_1, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			div0.innerHTML = _assets_check_mask_svg__WEBPACK_IMPORTED_MODULE_2___default.a;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label_1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label_1, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, span);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, t2);

			if (!mounted) {
				dispose = [
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "change", /*change_handler*/ ctx[4]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "change", /*input_change_handler*/ ctx[5])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*guideline*/ 4 && input_disabled_value !== (input_disabled_value = !(/*guideline*/ ctx[2].row.scales.length > 1 && /*guideline*/ ctx[2].column.scales.length > 0 || /*guideline*/ ctx[2].column.scales.length > 1 && /*guideline*/ ctx[2].row.scales.length > 0))) {
				input.disabled = input_disabled_value;
			}

			if (dirty & /*checked*/ 1) {
				input.checked = /*checked*/ ctx[0];
			}

			if (dirty & /*label*/ 2) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t2, /*label*/ ctx[1]);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div3);
			mounted = false;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();
	let { checked = false } = $$props;
	let { label = '' } = $$props;
	let { guideline = {} } = $$props;

	const change_handler = () => {
		setTimeout(
			() => {
				dispatch("checkboxChange", checked);
			},
			0
		);
	};

	function input_change_handler() {
		checked = this.checked;
		$$invalidate(0, checked);
	}

	$$self.$$set = $$props => {
		if ('checked' in $$props) $$invalidate(0, checked = $$props.checked);
		if ('label' in $$props) $$invalidate(1, label = $$props.label);
		if ('guideline' in $$props) $$invalidate(2, guideline = $$props.guideline);
	};

	return [checked, label, guideline, dispatch, change_handler, input_change_handler];
}

class CheckBox extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { checked: 0, label: 1, guideline: 2 }, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (CheckBox);

/***/ }),

/***/ "./src/components/Color.svelte":
/*!*************************************!*\
  !*** ./src/components/Color.svelte ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* src/components/Color.svelte generated by Svelte v3.48.0 */





function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-1lkh6b6", ".color-select.svelte-1lkh6b6.svelte-1lkh6b6{display:flex;width:131px;height:28px;font-size:12px;color:rgba(32, 32, 32, 0.6)}.color-select.svelte-1lkh6b6 label.svelte-1lkh6b6{padding:4px 0;line-height:20px}.jsdesign-dark .color-select.svelte-1lkh6b6 label.svelte-1lkh6b6{color:rgba(255, 255, 255, 0.8)}.color-select.svelte-1lkh6b6 .panel.svelte-1lkh6b6{display:flex;background-color:rgba(0, 0, 0, 0.03);margin-left:8px;width:99px;align-items:center;border-radius:4px}.jsdesign-dark .color-select.svelte-1lkh6b6 .panel.svelte-1lkh6b6{background-color:rgba(0, 0, 0, 0.1)}.color-select.svelte-1lkh6b6 .panel .color.svelte-1lkh6b6{padding:6px 4px;width:16px;height:16px}.color-select.svelte-1lkh6b6 .panel .panel .based-color.svelte-1lkh6b6{border-radius:2px}.panel.svelte-1lkh6b6 span.svelte-1lkh6b6{color:rgba(32, 32, 32, 1);font-size:12px}.jsdesign-dark .panel.svelte-1lkh6b6 span.svelte-1lkh6b6{color:rgba(255, 255, 255, 1)}.panel.svelte-1lkh6b6 .color-input.svelte-1lkh6b6{flex:1;background-color:transparent;border:transparent;width:43px;height:20px;padding-right:4px;margin:0 4px;font-size:12px;line-height:28px}.jsdesign-dark .panel.svelte-1lkh6b6 .color-input.svelte-1lkh6b6{color:rgba(255, 255, 255, 1)}.panel.svelte-1lkh6b6 .color-input.svelte-1lkh6b6:focus,.panel.svelte-1lkh6b6 .color-input.svelte-1lkh6b6:active{border:none !important}");
}

function create_fragment(ctx) {
	let div3;
	let label;
	let t1;
	let div2;
	let div1;
	let div0;
	let t2;
	let input0;
	let t3;
	let span;
	let t5;
	let input1;
	let mounted;
	let dispose;

	return {
		c() {
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			label = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			label.textContent = "??????";
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span.textContent = "#";
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label, "for", "color-input");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label, "class", "svelte-1lkh6b6");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "id", "colors");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "based-color svelte-1lkh6b6");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div0, "background-color", "#" + /*basedColor*/ ctx[0]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div0, "width", /*width*/ ctx[1] + "px");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div0, "height", /*height*/ ctx[2] + "px");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input0, "type", "color");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input0, "id", "select-color-input");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(input0, "visibility", "hidden");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(input0, "width", "0");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(input0, "height", "0");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "color svelte-1lkh6b6");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "svelte-1lkh6b6");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input1, "name", "color-input");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input1, "class", "color-input svelte-1lkh6b6");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input1, "id", "color-input");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input1, "type", "text");
			input1.disabled = true;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "panel svelte-1lkh6b6");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "color-select svelte-1lkh6b6");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, label);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, input0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, span);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, input1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input1, /*basedColor*/ ctx[0]);

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input1, "input", /*input1_input_handler*/ ctx[3]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*basedColor*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div0, "background-color", "#" + /*basedColor*/ ctx[0]);
			}

			if (dirty & /*width*/ 2) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div0, "width", /*width*/ ctx[1] + "px");
			}

			if (dirty & /*height*/ 4) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div0, "height", /*height*/ ctx[2] + "px");
			}

			if (dirty & /*basedColor*/ 1 && input1.value !== /*basedColor*/ ctx[0]) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input1, /*basedColor*/ ctx[0]);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div3);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();
	let { basedColor = "CCCCCC" } = $$props;
	let { width = 16 } = $$props;
	let { height = 16 } = $$props;

	// ?????????????????????
	function showColorPalate() {
		let selectColorInput = document.getElementById("select-color-input");
		selectColorInput && selectColorInput.click();

		selectColorInput && selectColorInput.addEventListener("input", event => {
			$$invalidate(0, basedColor = event.target.value.replace("#", ""));
			dispatch("colorChange", { basedColor });
		});
	}

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
		// ??????????????????
		let selectNode = document.getElementById("colors");

		selectNode && selectNode.addEventListener("click", showColorPalate);
	});

	function input1_input_handler() {
		basedColor = this.value;
		$$invalidate(0, basedColor);
	}

	$$self.$$set = $$props => {
		if ('basedColor' in $$props) $$invalidate(0, basedColor = $$props.basedColor);
		if ('width' in $$props) $$invalidate(1, width = $$props.width);
		if ('height' in $$props) $$invalidate(2, height = $$props.height);
	};

	return [basedColor, width, height, input1_input_handler];
}

class Color extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { basedColor: 0, width: 1, height: 2 }, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Color);

/***/ }),

/***/ "./src/components/Empty.svelte":
/*!*************************************!*\
  !*** ./src/components/Empty.svelte ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _assets_empty_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/empty.svg */ "./src/assets/empty.svg");
/* harmony import */ var _assets_empty_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_empty_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_empty_dark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/empty_dark.svg */ "./src/assets/empty_dark.svg");
/* harmony import */ var _assets_empty_dark_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_empty_dark_svg__WEBPACK_IMPORTED_MODULE_2__);
/* src/components/Empty.svelte generated by Svelte v3.48.0 */





function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-1glv5b8", ".empty.svelte-1glv5b8{text-align:center}.empty-svg.svelte-1glv5b8{width:120px;height:90px;margin:16px auto}.empty-text.svelte-1glv5b8{width:100%;color:rgba(32, 32, 32, 0.6);font-size:12px;margin-bottom:16px}.jsdesign-dark .empty-text.svelte-1glv5b8{color:rgba(255, 255, 255, 0.8)}");
}

function create_fragment(ctx) {
	let div1;
	let div0;
	let raw_value = (/*themes*/ ctx[1] === "light" ? _assets_empty_svg__WEBPACK_IMPORTED_MODULE_1___default.a : _assets_empty_dark_svg__WEBPACK_IMPORTED_MODULE_2___default.a) + "";
	let t0;
	let span;
	let t1;

	return {
		c() {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*text*/ ctx[0]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "empty-svg svelte-1glv5b8");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "empty-text svelte-1glv5b8");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "empty svelte-1glv5b8");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			div0.innerHTML = raw_value;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, span);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, t1);
		},
		p(ctx, [dirty]) {
			if (dirty & /*themes*/ 2 && raw_value !== (raw_value = (/*themes*/ ctx[1] === "light" ? _assets_empty_svg__WEBPACK_IMPORTED_MODULE_1___default.a : _assets_empty_dark_svg__WEBPACK_IMPORTED_MODULE_2___default.a) + "")) div0.innerHTML = raw_value;;
			if (dirty & /*text*/ 1) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t1, /*text*/ ctx[0]);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div1);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { text = "" } = $$props;
	let { themes = 'light' } = $$props;

	$$self.$$set = $$props => {
		if ('text' in $$props) $$invalidate(0, text = $$props.text);
		if ('themes' in $$props) $$invalidate(1, themes = $$props.themes);
	};

	return [text, themes];
}

class Empty extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { text: 0, themes: 1 }, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Empty);

/***/ }),

/***/ "./src/components/Input.svelte":
/*!*************************************!*\
  !*** ./src/components/Input.svelte ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/components/Input.svelte generated by Svelte v3.48.0 */


function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-9ifquf", ".input-container.svelte-9ifquf.svelte-9ifquf{width:100%;display:flex;height:28px;font-size:12px;color:rgba(32, 32, 32, 0.6)}.jsdesign-dark .input-container.svelte-9ifquf.svelte-9ifquf{color:rgba(255, 255, 255, 0.5)}.input-container.svelte-9ifquf label.svelte-9ifquf{padding:4px 0;line-height:20px}.input-container.svelte-9ifquf .panel.svelte-9ifquf{display:flex;background-color:rgba(0, 0, 0, 0.03);margin-left:8px;width:99px;align-items:center;border-radius:4px}.jsdesign-dark .input-container.svelte-9ifquf .panel.svelte-9ifquf{background-color:rgba(0, 0, 0, 0.1)}.jsdesign-dark .input-container.svelte-9ifquf .panel.svelte-9ifquf:hover{background-color:rgba(0, 0, 0, 0.15)}.jsdesign-dark .panel.svelte-9ifquf .text-input.svelte-9ifquf{color:rgba(255, 255, 255, 0.8)}.jsdesign-dark .panel.svelte-9ifquf .text-input.svelte-9ifquf:focus{color:rgba(255, 255, 255, 1)}.panel.svelte-9ifquf .text-input.svelte-9ifquf{flex:1;background-color:transparent;border:transparent;width:43px;height:20px;padding-right:4px;margin:0 4px;font-size:12px;line-height:28px}.panel.svelte-9ifquf .text-input.svelte-9ifquf,.panel.svelte-9ifquf .text-input.svelte-9ifquf:focus,.panel.svelte-9ifquf .text-input.svelte-9ifquf:active{border:none !important;outline:none}");
}

function create_fragment(ctx) {
	let div1;
	let label_1;
	let t0;
	let t1;
	let div0;
	let input;
	let mounted;
	let dispose;

	return {
		c() {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			label_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*label*/ ctx[1]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			input = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label_1, "for", "text-input");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label_1, "class", "svelte-9ifquf");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "name", "text-input");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "class", "text-input svelte-9ifquf");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "id", "text-input");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "type", "text");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "panel svelte-9ifquf");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "input-container svelte-9ifquf");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, label_1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label_1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, input);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input, /*value*/ ctx[0]);

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "input", /*input_input_handler*/ ctx[2]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*label*/ 2) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, /*label*/ ctx[1]);

			if (dirty & /*value*/ 1 && input.value !== /*value*/ ctx[0]) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input, /*value*/ ctx[0]);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div1);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { label = "" } = $$props;
	let { value = "" } = $$props;

	function input_input_handler() {
		value = this.value;
		$$invalidate(0, value);
	}

	$$self.$$set = $$props => {
		if ('label' in $$props) $$invalidate(1, label = $$props.label);
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
	};

	return [value, label, input_input_handler];
}

class Input extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { label: 1, value: 0 }, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/components/NumberField.svelte":
/*!*******************************************!*\
  !*** ./src/components/NumberField.svelte ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* src/components/NumberField.svelte generated by Svelte v3.48.0 */




function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-4jrsg", "label.svelte-4jrsg.svelte-4jrsg{display:flex;margin:8px 0;line-height:26px}.label.svelte-4jrsg.svelte-4jrsg{font-size:12px;color:rgba(32, 32, 32, 0.8)}.jsdesign-dark .label.svelte-4jrsg.svelte-4jrsg{color:rgba(255, 255, 255, 0.8)}.left-side.svelte-4jrsg.svelte-4jrsg{width:auto;white-space:nowrap;margin-right:8px}.right-side.svelte-4jrsg.svelte-4jrsg{display:inline-flex;border-radius:4px;height:26px;justify-content:space-between;flex:1;background-color:rgba(0, 0, 0, 0.02)}.jsdesign-dark .right-side[input].svelte-4jrsg.svelte-4jrsg{background-color:rgba(0, 0, 0, 0.1)}.jsdesign-dark .right-side[input].svelte-4jrsg.svelte-4jrsg:hover{background-color:rgba(0, 0, 0, 0.15)}.right-disabled.svelte-4jrsg.svelte-4jrsg{background-color:rgba(0, 0, 0, 0.05)}.right-side.svelte-4jrsg input.svelte-4jrsg{background:transparent;border:transparent;font-weight:400;padding:3px 8px;font-size:12px;width:100%;border-radius:4px;color:rgba(32, 32, 32, 1)}.jsdesign-dark .right-side.svelte-4jrsg input.svelte-4jrsg{color:rgba(255, 255, 255, 0.8)}.jsdesign-dark .right-side[scale].svelte-4jrsg input.svelte-4jrsg{background-color:rgba(0, 0, 0, 0.1)}.right-side.svelte-4jrsg input.svelte-4jrsg::-webkit-inner-spin-button,.right-side.svelte-4jrsg input.svelte-4jrsg::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.right-side.svelte-4jrsg input.svelte-4jrsg:focus{outline:transparent}.right-side.svelte-4jrsg .unit-measure.svelte-4jrsg{padding:3px 6px;line-height:20px;color:rgba(32, 32, 32, 0.4);font-size:12px;white-space:nowrap}.jsdesign-dark .right-side.svelte-4jrsg .unit-measure.svelte-4jrsg{color:rgba(255, 255, 255, 0.3)}.right-scale.svelte-4jrsg.svelte-4jrsg{display:flex;flex-wrap:wrap;height:auto;background:none;justify-content:start;align-items:center}.right-scale.svelte-4jrsg input.svelte-4jrsg{width:30px;background-color:rgba(0, 0, 0, 0.02);padding:3px 4px}.right-scale.svelte-4jrsg span.svelte-4jrsg{margin:0 2px;color:rgba(32, 32, 32, 0.3)}");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[14] = list[i];
	child_ctx[15] = list;
	child_ctx[16] = i;
	return child_ctx;
}

const get_textfield_label_slot_changes_1 = dirty => ({});
const get_textfield_label_slot_context_1 = ctx => ({});
const get_unit_measure_slot_changes = dirty => ({});
const get_unit_measure_slot_context = ctx => ({});
const get_textfield_label_slot_changes = dirty => ({});
const get_textfield_label_slot_context = ctx => ({});

// (39:0) {:else}
function create_else_block(ctx) {
	let label;
	let div1;
	let div0;
	let t;
	let div2;
	let current;
	const textfield_label_slot_template = /*#slots*/ ctx[9]["textfield-label"];
	const textfield_label_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(textfield_label_slot_template, ctx, /*$$scope*/ ctx[8], get_textfield_label_slot_context_1);
	let each_value = /*value*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			label = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (textfield_label_slot) textfield_label_slot.c();
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "label svelte-4jrsg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "left-side svelte-4jrsg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "right-side right-scale svelte-4jrsg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "scale", "");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label, "for", "input-label");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label, "class", "svelte-4jrsg");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, label, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);

			if (textfield_label_slot) {
				textfield_label_slot.m(div0, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label, t);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label, div2);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div2, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (textfield_label_slot) {
				if (textfield_label_slot.p && (!current || dirty & /*$$scope*/ 256)) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_slot_base"])(
						textfield_label_slot,
						textfield_label_slot_template,
						ctx,
						/*$$scope*/ ctx[8],
						!current
						? Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_all_dirty_from_scope"])(/*$$scope*/ ctx[8])
						: Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(textfield_label_slot_template, /*$$scope*/ ctx[8], dirty, get_textfield_label_slot_changes_1),
						get_textfield_label_slot_context_1
					);
				}
			}

			if (dirty & /*value, disabled, dispatch*/ 145) {
				each_value = /*value*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div2, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(textfield_label_slot, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(textfield_label_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(label);
			if (textfield_label_slot) textfield_label_slot.d(detaching);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
		}
	};
}

// (13:0) {#if base}
function create_if_block(ctx) {
	let label;
	let div1;
	let div0;
	let t0;
	let div3;
	let input;
	let t1;
	let div2;
	let div3_class_value;
	let current;
	let mounted;
	let dispose;
	const textfield_label_slot_template = /*#slots*/ ctx[9]["textfield-label"];
	const textfield_label_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(textfield_label_slot_template, ctx, /*$$scope*/ ctx[8], get_textfield_label_slot_context);
	const unit_measure_slot_template = /*#slots*/ ctx[9]["unit-measure"];
	const unit_measure_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(unit_measure_slot_template, ctx, /*$$scope*/ ctx[8], get_unit_measure_slot_context);

	return {
		c() {
			label = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (textfield_label_slot) textfield_label_slot.c();
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			input = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (unit_measure_slot) unit_measure_slot.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "label svelte-4jrsg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "left-side svelte-4jrsg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "type", "number");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "placeholder", /*placeholder*/ ctx[2]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "step", /*step*/ ctx[3]);
			input.disabled = /*disabled*/ ctx[4];
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "min", /*min*/ ctx[5]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "max", /*max*/ ctx[6]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "class", "svelte-4jrsg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "unit-measure svelte-4jrsg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", div3_class_value = "right-side " + (/*disabled*/ ctx[4] ? 'right-disabled' : '') + " svelte-4jrsg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "input", "");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label, "for", "input-label");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label, "class", "svelte-4jrsg");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, label, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);

			if (textfield_label_slot) {
				textfield_label_slot.m(div0, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, input);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input, /*value*/ ctx[0]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div2);

			if (unit_measure_slot) {
				unit_measure_slot.m(div2, null);
			}

			current = true;

			if (!mounted) {
				dispose = [
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "input", /*input_input_handler*/ ctx[10]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "change", /*change_handler*/ ctx[11]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "click", click_handler)
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (textfield_label_slot) {
				if (textfield_label_slot.p && (!current || dirty & /*$$scope*/ 256)) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_slot_base"])(
						textfield_label_slot,
						textfield_label_slot_template,
						ctx,
						/*$$scope*/ ctx[8],
						!current
						? Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_all_dirty_from_scope"])(/*$$scope*/ ctx[8])
						: Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(textfield_label_slot_template, /*$$scope*/ ctx[8], dirty, get_textfield_label_slot_changes),
						get_textfield_label_slot_context
					);
				}
			}

			if (!current || dirty & /*placeholder*/ 4) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "placeholder", /*placeholder*/ ctx[2]);
			}

			if (!current || dirty & /*step*/ 8) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "step", /*step*/ ctx[3]);
			}

			if (!current || dirty & /*disabled*/ 16) {
				input.disabled = /*disabled*/ ctx[4];
			}

			if (!current || dirty & /*min*/ 32) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "min", /*min*/ ctx[5]);
			}

			if (!current || dirty & /*max*/ 64) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "max", /*max*/ ctx[6]);
			}

			if (dirty & /*value*/ 1 && Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["to_number"])(input.value) !== /*value*/ ctx[0]) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input, /*value*/ ctx[0]);
			}

			if (unit_measure_slot) {
				if (unit_measure_slot.p && (!current || dirty & /*$$scope*/ 256)) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_slot_base"])(
						unit_measure_slot,
						unit_measure_slot_template,
						ctx,
						/*$$scope*/ ctx[8],
						!current
						? Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_all_dirty_from_scope"])(/*$$scope*/ ctx[8])
						: Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(unit_measure_slot_template, /*$$scope*/ ctx[8], dirty, get_unit_measure_slot_changes),
						get_unit_measure_slot_context
					);
				}
			}

			if (!current || dirty & /*disabled*/ 16 && div3_class_value !== (div3_class_value = "right-side " + (/*disabled*/ ctx[4] ? 'right-disabled' : '') + " svelte-4jrsg")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", div3_class_value);
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(textfield_label_slot, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(unit_measure_slot, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(textfield_label_slot, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(unit_measure_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(label);
			if (textfield_label_slot) textfield_label_slot.d(detaching);
			if (unit_measure_slot) unit_measure_slot.d(detaching);
			mounted = false;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

// (57:8) {#if value.length !== index + 1}
function create_if_block_1(ctx) {
	let span;

	return {
		c() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span.textContent = ":";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "svelte-4jrsg");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
		}
	};
}

// (47:6) {#each value as item, index}
function create_each_block(ctx) {
	let input;
	let t;
	let if_block_anchor;
	let mounted;
	let dispose;

	function input_input_handler_1() {
		/*input_input_handler_1*/ ctx[12].call(input, /*each_value*/ ctx[15], /*index*/ ctx[16]);
	}

	let if_block = /*value*/ ctx[0].length !== /*index*/ ctx[16] + 1 && create_if_block_1(ctx);

	return {
		c() {
			input = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "type", "number");
			input.disabled = /*disabled*/ ctx[4];
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "class", "svelte-4jrsg");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, input, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input, /*item*/ ctx[14]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);

			if (!mounted) {
				dispose = [
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "input", input_input_handler_1),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "click", click_handler_1),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "change", /*change_handler_1*/ ctx[13])
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*disabled*/ 16) {
				input.disabled = /*disabled*/ ctx[4];
			}

			if (dirty & /*value*/ 1 && Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["to_number"])(input.value) !== /*item*/ ctx[14]) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input, /*item*/ ctx[14]);
			}

			if (/*value*/ ctx[0].length !== /*index*/ ctx[16] + 1) {
				if (if_block) {
					
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(input);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t);
			if (if_block) if_block.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
			mounted = false;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*base*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
		}
	};
}

const click_handler = event => event.currentTarget.select();
const click_handler_1 = event => event.currentTarget.select();

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();
	let { base = true } = $$props;
	let { value = 1 } = $$props;
	let { placeholder = '' } = $$props;
	let { step = 1 } = $$props;
	let { disabled = false } = $$props;
	let { min = 0 } = $$props;
	let { max = Math.max } = $$props;

	function input_input_handler() {
		value = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["to_number"])(this.value);
		$$invalidate(0, value);
	}

	const change_handler = () => {
		dispatch("inputChange", { value });
	};

	function input_input_handler_1(each_value, index) {
		each_value[index] = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["to_number"])(this.value);
		$$invalidate(0, value);
	}

	const change_handler_1 = () => {
		dispatch("inputChange");
	};

	$$self.$$set = $$props => {
		if ('base' in $$props) $$invalidate(1, base = $$props.base);
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('placeholder' in $$props) $$invalidate(2, placeholder = $$props.placeholder);
		if ('step' in $$props) $$invalidate(3, step = $$props.step);
		if ('disabled' in $$props) $$invalidate(4, disabled = $$props.disabled);
		if ('min' in $$props) $$invalidate(5, min = $$props.min);
		if ('max' in $$props) $$invalidate(6, max = $$props.max);
		if ('$$scope' in $$props) $$invalidate(8, $$scope = $$props.$$scope);
	};

	return [
		value,
		base,
		placeholder,
		step,
		disabled,
		min,
		max,
		dispatch,
		$$scope,
		slots,
		input_input_handler,
		change_handler,
		input_input_handler_1,
		change_handler_1
	];
}

class NumberField extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"],
			{
				base: 1,
				value: 0,
				placeholder: 2,
				step: 3,
				disabled: 4,
				min: 5,
				max: 6
			},
			add_css
		);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (NumberField);

/***/ }),

/***/ "./src/components/SaveCard.svelte":
/*!****************************************!*\
  !*** ./src/components/SaveCard.svelte ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/variables */ "./src/common/variables.js");
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_variables__WEBPACK_IMPORTED_MODULE_2__);
/* src/components/SaveCard.svelte generated by Svelte v3.48.0 */





function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-1lwb7i9", ".save-card.svelte-1lwb7i9.svelte-1lwb7i9{display:flex;justify-content:flex-start;flex-wrap:wrap}.save-card.svelte-1lwb7i9 .card.svelte-1lwb7i9{display:flex;flex-direction:column;align-items:center;cursor:pointer;width:50px;padding:5px 0;box-sizing:border-box;border:1px solid rgba(0, 0, 0, 0)}.save-card.svelte-1lwb7i9 .active-card.svelte-1lwb7i9,.save-card.svelte-1lwb7i9 .card.svelte-1lwb7i9:hover{border:1px solid rgba(69, 150, 255, 1);background-color:rgba(0, 0, 0, 0.04);border-radius:4px}.save-card.svelte-1lwb7i9 .card.svelte-1lwb7i9:nth-child(3n + 1){margin-left:18px}.save-card.svelte-1lwb7i9 .card.svelte-1lwb7i9:nth-child(3n + 2){margin-left:36px}.save-card.svelte-1lwb7i9 .card.svelte-1lwb7i9:nth-child(3n + 3){margin-left:38px}.save-card.svelte-1lwb7i9 .card.svelte-1lwb7i9:nth-child(n + 4){margin-top:16px}.save-card.svelte-1lwb7i9 .card span.svelte-1lwb7i9{font-size:8px;margin-top:8px;color:rgba(32, 32, 32, 0.8)}.jsdesign-dark .save-card.svelte-1lwb7i9 .card span.svelte-1lwb7i9{color:rgba(255, 255, 255, 0.8)}");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	child_ctx[7] = i;
	return child_ctx;
}

// (11:2) {#each saveCardList as item, index}
function create_each_block(ctx) {
	let div;
	let html_tag;

	let raw_value = (/*item*/ ctx[5].icon
	? /*item*/ ctx[5].icon
	: /*themes*/ ctx[2] === "dark" ? _common_variables__WEBPACK_IMPORTED_MODULE_2__["baseDarkIcon"] : _common_variables__WEBPACK_IMPORTED_MODULE_2__["baseIcon"]) + "";

	let t0;
	let span;
	let t1_value = /*item*/ ctx[5].name + "";
	let t1;
	let t2;
	let div_class_value;
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[4](/*index*/ ctx[7]);
	}

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			html_tag = new svelte_internal__WEBPACK_IMPORTED_MODULE_0__["HtmlTag"](false);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t1_value);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			html_tag.a = t0;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "svelte-1lwb7i9");

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", div_class_value = "card " + (/*selected*/ ctx[1].indexOf(/*index*/ ctx[7]) !== -1
			? 'active-card'
			: '') + " svelte-1lwb7i9");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			html_tag.m(raw_value, div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, span);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t2);

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*saveCardList, themes*/ 5 && raw_value !== (raw_value = (/*item*/ ctx[5].icon
			? /*item*/ ctx[5].icon
			: /*themes*/ ctx[2] === "dark" ? _common_variables__WEBPACK_IMPORTED_MODULE_2__["baseDarkIcon"] : _common_variables__WEBPACK_IMPORTED_MODULE_2__["baseIcon"]) + "")) html_tag.p(raw_value);

			if (dirty & /*saveCardList*/ 1 && t1_value !== (t1_value = /*item*/ ctx[5].name + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t1, t1_value);

			if (dirty & /*selected*/ 2 && div_class_value !== (div_class_value = "card " + (/*selected*/ ctx[1].indexOf(/*index*/ ctx[7]) !== -1
			? 'active-card'
			: '') + " svelte-1lwb7i9")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", div_class_value);
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let div;
	let each_value = /*saveCardList*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "save-card svelte-1lwb7i9");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*selected, dispatch, saveCardList, themes, baseDarkIcon, baseIcon*/ 15) {
				each_value = /*saveCardList*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();
	let { saveCardList = [] } = $$props;
	let { selected = [] } = $$props;
	let { themes = "light" } = $$props;

	const click_handler = index => {
		dispatch("activeChange", { index });
	};

	$$self.$$set = $$props => {
		if ('saveCardList' in $$props) $$invalidate(0, saveCardList = $$props.saveCardList);
		if ('selected' in $$props) $$invalidate(1, selected = $$props.selected);
		if ('themes' in $$props) $$invalidate(2, themes = $$props.themes);
	};

	return [saveCardList, selected, themes, dispatch, click_handler];
}

class SaveCard extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { saveCardList: 0, selected: 1, themes: 2 }, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (SaveCard);

/***/ }),

/***/ "./src/components/Tags.svelte":
/*!************************************!*\
  !*** ./src/components/Tags.svelte ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* src/components/Tags.svelte generated by Svelte v3.48.0 */




function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-1avo0kp", ".tags.svelte-1avo0kp.svelte-1avo0kp{display:flex;justify-content:space-between;list-style:none;padding:0;height:36px}.tags.svelte-1avo0kp>li.svelte-1avo0kp{flex:1;text-align:center;line-height:36px;color:rgba(32, 32, 32, 1);font-size:12px;border-bottom:1px solid rgba(218, 218, 220, 0.6)}.jsdesign-dark .tags.svelte-1avo0kp>li.svelte-1avo0kp{color:rgba(255, 255, 255, 0.8);border-bottom:rgba(23, 25, 31, 0.6)}.jsdesign-dark .tags.svelte-1avo0kp>li.active.svelte-1avo0kp{color:rgba(69, 150, 255, 1)}.tags.svelte-1avo0kp>li.active.svelte-1avo0kp{border-bottom:2px solid rgba(69, 150, 255, 1)}");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	child_ctx[7] = i;
	return child_ctx;
}

// (14:2) {#each tags as item, index}
function create_each_block(ctx) {
	let li;
	let t0_value = /*item*/ ctx[5] + "";
	let t0;
	let t1;
	let li_class_value;
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[3](/*index*/ ctx[7]);
	}

	return {
		c() {
			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(li, "class", li_class_value = "item " + (/*active*/ ctx[1] == /*index*/ ctx[7] ? 'active' : '') + " svelte-1avo0kp");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, li, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li, t1);

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(li, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*tags*/ 1 && t0_value !== (t0_value = /*item*/ ctx[5] + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);

			if (dirty & /*active*/ 2 && li_class_value !== (li_class_value = "item " + (/*active*/ ctx[1] == /*index*/ ctx[7] ? 'active' : '') + " svelte-1avo0kp")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(li, "class", li_class_value);
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(li);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let ul;
	let each_value = /*tags*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(ul, "class", "tags svelte-1avo0kp");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*active, activeChange, tags*/ 7) {
				each_value = /*tags*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(ul);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();
	let { tags = [] } = $$props;
	let { active = -1 } = $$props;

	function activeChange(active) {
		dispatch('activeChange', { active });
	}

	const click_handler = index => {
		activeChange(index);
	};

	$$self.$$set = $$props => {
		if ('tags' in $$props) $$invalidate(0, tags = $$props.tags);
		if ('active' in $$props) $$invalidate(1, active = $$props.active);
	};

	return [tags, active, activeChange, click_handler];
}

class Tags extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { tags: 0, active: 1 }, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Tags);

/***/ }),

/***/ "./src/style/button.css":
/*!******************************!*\
  !*** ./src/style/button.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./button.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/button.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.svelte */ "./src/App.svelte");




const app = new _App_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
  target: document.body,
});

/* harmony default export */ __webpack_exports__["default"] = (app);


/***/ })

/******/ });
//# sourceMappingURL=ui.js.map