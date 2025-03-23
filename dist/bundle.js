/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/explode1.png */ \"./src/assets/explode1.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --cell-size: 40px;\r\n  --border-color: rgba(0, 0, 0, 0.116);\r\n  --text-color-grey: rgba(0, 0, 0, 0.267);\r\n  --text-size-smallest: 10px;\r\n  --cell-hover-color: #219ebc;\r\n  --color-red: #d00000;\r\n  --color-red-light: #ec8385;\r\n  --color-blue-darker: #00a8e8;\r\n  --color-blue-darker-faded: #94e1ffbd;\r\n  --color-beige: #ffb703;\r\n  --color-beige-faded:rgba(255, 213, 108, 0.658);\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.alert {\r\n  padding: 13px 20px 5px 20px;\r\n  max-width: 500px;\r\n  height: 35px;\r\n  border: 1px solid rgba(169, 169, 169, 0.288);\r\n  font-size: small;\r\n  align-self: flex-start;\r\n  border-radius: 0.5em;\r\n  background-color: rgba(247, 247, 247, 0.537);\r\n  color: rgba(0, 0, 0, 0.548);\r\n  position: relative;\r\n}\r\n\r\n.alert.green::after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  border-radius: 5px;\r\n  border: 2px solid #00c9a7;\r\n  box-shadow: 0px 0px 3px #00c9a7;\r\n  z-index: -1;\r\n  background-color: #00c9a762;\r\n}\r\n\r\n.alert.red::after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  border-radius: 5px;\r\n  border: 2px solid #c90000;\r\n  box-shadow: 0px 0px 3px #c90000;\r\n  z-index: -1;\r\n  background-color: #c9000067;\r\n}\r\n\r\n.gameContainer {\r\ndisplay: flex;\r\nflex-direction: column;\r\nalign-items: center;\r\ngap: 1em;\r\n}\r\n\r\n.gameBoards {\r\n  display: flex;\r\n  gap: 1em;\r\n}\r\n\r\n\r\n.header {\r\n  margin-top: 0;\r\n  margin-bottom: -10px\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .gameBoards {\r\n    flex-direction: column;\r\n  }\r\n\r\n  :root {\r\n    --cell-size: 25px;\r\n  }\r\n\r\n  .header {\r\n    margin-top: 0;\r\n    margin-bottom: -10px\r\n  }\r\n}\r\n\r\n.gameBoard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n}\r\n\r\n.row > div{\r\n  width: var(--cell-size);\r\n  height: var(--cell-size);\r\n  border-radius: 5px;\r\n}\r\n\r\n.row > .header-row {\r\n  font-size: var(--text-size-smallest);\r\n  display: flex;\r\n  align-items: end;\r\n  justify-content: center;\r\n  color: var(--text-color-grey);\r\n  border-right: none;\r\n  border-bottom: none;\r\n  box-sizing: border-box;\r\n  padding-bottom: 2px;\r\n}\r\n\r\n.row > .header-column {\r\n  font-size: var(--text-size-smallest);\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--text-color-grey);\r\n  justify-content: right;\r\n  border-bottom: none;\r\n  border-right: none;\r\n  box-sizing: border-box;\r\n  padding-right: 3px;\r\n}\r\n.row div {\r\n  border-bottom: 1px solid var(--border-color);\r\n  border-right: 1px solid var(--border-color);\r\n  box-sizing: border-box;\r\n}\r\n\r\n.row > div:not(.header-column):not(.header-row):nth-of-type(2) {\r\n  border-left: 1px solid var(--border-color);\r\n}\r\n\r\n.row:nth-of-type(2) > div:not(.header-column) {\r\n  border-top: 1px solid var(--border-color);\r\n}\r\n\r\n\r\n.gameBoard.active:not(.player) > .grid > .row > div:not(.hit):not(.header-row):not(.header-column):hover {\r\n  /* background-color: var(--color-red);\r\n  background-clip: content-box;\r\n  padding: 12px; */\r\n  \r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-repeat: no-repeat;\r\n  background-size: 20px;\r\n  background-position: calc((var(--cell-size) - 20px) / 2);\r\n  background-color: rgba(255, 255, 255, 0.700);\r\n  background-blend-mode: overlay;\r\n  \r\n}\r\n\r\n.drag-hover {\r\n  background-color: #00a8e8;\r\n}\r\n\r\n.gameBoard > .grid > .row > .ship {\r\n  background-color: var(--color-blue-darker);\r\n  border-color: white;\r\n}\r\n\r\n.gameBoard.pc > .grid > .row > .ship {\r\n  background-color: var(--color-beige);\r\n}\r\n\r\n.gameBoard.pc > .grid > .row > .ship.hit {\r\n  background-color: var(--color-beige-faded);\r\n}\r\n\r\n.gameBoard.player > .grid > .row > .ship.hit {\r\n  background-color: var(--color-blue-darker-faded);\r\n}\r\n\r\n.hit.ship {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-repeat: no-repeat;\r\n  background-size: 20px;\r\n  background-position: calc((var(--cell-size) - 20px) / 2);\r\n}\r\n\r\n.hit:not(.ship) {\r\n  background-color: rgba(0, 0, 0, 0.055);\r\n}\r\n\r\n.ships-container {\r\n  align-self: flex-start;\r\n  padding-top: 1em;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n}\r\n\r\n.ships {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.ships > .ship {\r\n  display: flex;\r\n  gap: 1px;\r\n  align-self: flex-start;\r\n}\r\n\r\n.ships.v {\r\n  flex-direction: row;\r\n}\r\n\r\n.ships.v > .ship {\r\n  flex-direction: column;\r\n}\r\n\r\n.ships.h {\r\n  flex-direction: column;\r\n}\r\n\r\n.ships.h > .ship {\r\n  flex-direction: row;\r\n}\r\n\r\n.ships > .ship > div {\r\n  width: calc(var(--cell-size));\r\n  height: calc(var(--cell-size));\r\n  background-color: var(--color-blue-darker);\r\n  border-radius: 5px;\r\n}\r\n\r\n.ship,\r\n.ship * {\r\n    opacity: 1 !important;\r\n    filter: none !important;\r\n}\r\n\r\n.ships > .ship.placed > div {\r\n  background-color: var(--color-blue-darker-faded);\r\n}\r\n\r\n.ship.selected {\r\n  outline: 2px solid var(--color-red);\r\n  box-sizing: content-box;\r\n  outline-offset: 3px;\r\n}\r\n\r\nbutton {\r\n  width: fit-content;\r\n  border: none;\r\n  padding: 10px 15px 10px 15px;\r\n  border-radius: 5px;\r\n}\r\n\r\nbutton[disabled] {\r\n  opacity: 0.2;\r\n}\r\n\r\nbutton:not([disabled]):hover {\r\n  /* background-color: var(--color-beige); */\r\n  background-color: #bbbbbb;\r\n  color: white;\r\n}\r\n\r\n.game-settings {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.flex-left {\r\n  align-self: flex-start;\r\n  padding-top: 15px;\r\n}\r\n\r\n.gameBoard.active > .grid {\r\n  position: relative;\r\n}\r\n\r\n.gameBoard.active > .grid:after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin-left: var(--cell-size);\r\n  margin-top: var(--cell-size);\r\n  border-radius: 5px;\r\n  border: 2px solid #00c9a7;\r\n  box-shadow: 0px 0px 3px #00c9a7;\r\n  z-index: -1;\r\n  opacity: 0.7;\r\n  animation: 800ms ease-in-out;\r\n  \r\n}\r\n\r\n.gameBoard.active > div:first-of-type {\r\n  color: #00c9a7;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-battleship/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/explode1.png":
/*!*********************************!*\
  !*** ./src/assets/explode1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a7353b4f6273fe8d24ad.png\";\n\n//# sourceURL=webpack://project-battleship/./src/assets/explode1.png?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-battleship/./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playerPc: () => (/* binding */ playerPc),\n/* harmony export */   playerUser: () => (/* binding */ playerUser)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/dom */ \"./src/js/dom.js\");\n/* harmony import */ var _js_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Player */ \"./src/js/Player.js\");\n\n\n\n\n//Gameplay\n//Create new player (PC and Player)\nvar playerUser = new _js_Player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('user');\nvar playerPc = new _js_Player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('pc');\n\n//Initialize player and pc grid and ship selector\n_js_dom__WEBPACK_IMPORTED_MODULE_1__.initializeGrid(playerUser.gameBoard.board, 'player');\n_js_dom__WEBPACK_IMPORTED_MODULE_1__.initializeGrid(playerPc.gameBoard.board, 'pc');\nplayerPc.gameBoard.automaticShipPlacement();\n_js_dom__WEBPACK_IMPORTED_MODULE_1__.initializeShipSelector(playerUser.gameBoard.ships);\n\n//# sourceURL=webpack://project-battleship/./src/index.js?");

/***/ }),

/***/ "./src/js/GameBoard.js":
/*!*****************************!*\
  !*** ./src/js/GameBoard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ \"./src/js/Ship.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Gameboard = /*#__PURE__*/function () {\n  function Gameboard() {\n    _classCallCheck(this, Gameboard);\n    this.board = new Array(10).fill(null).map(function () {\n      return new Array(10).fill(1);\n    }); //1 = free, 0 = missed shot\n    this.ships = {\n      C: new _Ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, \"C\"),\n      //C = Placed ship, C0 = Hit ship\n      B: new _Ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, \"B\"),\n      D: new _Ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, \"D\"),\n      S: new _Ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, \"S\"),\n      P: new _Ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, \"P\")\n    };\n    this.hits = 0;\n  }\n\n  /** @param {Ship} ship*/\n  return _createClass(Gameboard, [{\n    key: \"placeShip\",\n    value: function placeShip(ship, coordinates) {\n      var orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"h\";\n      //h = horizontal, v = vertical\n      //For given coordinate and ship length check:\n      if (orientation === \"h\" && ship.length + coordinates[1] <= 10) {\n        // 1. Horizontal - If length + x is bigger than 10 [y, x] x (horiz) coordinates then return false\n        if (this.checkFreeSpaces(coordinates, ship.length, orientation)) {\n          for (var i = coordinates[1]; i < ship.length + coordinates[1]; i++) {\n            this.board[coordinates[0]][i] = ship.boardCode;\n          }\n          ship.placedOnBoard = true;\n          return true;\n        } else {\n          return false;\n        }\n      } else if (ship !== undefined && orientation === \"v\" && ship.length + coordinates[0] <= 10) {\n        // 3. Vertical - If length + y is bigger than 10 [y, x] y (vertical) coordinates then return false\n        if (this.checkFreeSpaces(coordinates, ship.length, orientation)) {\n          for (var _i = coordinates[0]; _i < ship.length + coordinates[0]; _i++) {\n            this.board[_i][coordinates[1]] = ship.boardCode;\n          }\n          ship.placedOnBoard = true;\n          return true;\n        } else {\n          return false;\n        }\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"checkFreeSpaces\",\n    value: function checkFreeSpaces(coords, length, orientation) {\n      if (orientation === \"h\") {\n        // 2. Horizontal - If any cell is not 1 then return false (ship l = 2, coords= [2,1]) check for [2,1], [2,2]\n        for (var i = coords[1]; i < coords[1] + length; i++) {\n          if (this.board[coords[0]][i] !== 1) {\n            return false;\n          }\n        }\n        return true;\n      } else if (orientation === \"v\") {\n        // 4. Vertical - If any cell is not 1 then return false (ship l = 2, coords= [2,1]) check for [2,1], [3,1]\n        for (var _i2 = coords[0]; _i2 < coords[0] + length; _i2++) {\n          if (this.board[_i2][coords[1]] !== 1) {\n            return false;\n          }\n        }\n        return true;\n      }\n    }\n  }, {\n    key: \"receiveAttack\",\n    value: function receiveAttack(coordinates) {\n      var _this = this;\n      //All board codes for ships\n      var shipBoardCodes = Object.entries(this.ships).reduce(function (prev, current, index, array) {\n        return prev + current[1].boardCode;\n      }, \"\");\n      // if its 1 then change it to 0\n      if (this.board[coordinates[0]][coordinates[1]] === 1) {\n        this.board[coordinates[0]][coordinates[1]] = 0;\n        this.hits = this.hits + 1;\n        return true;\n      } else if (shipBoardCodes.includes(this.board[coordinates[0]][coordinates[1]])) {\n        // If it is ship board code\n        var ship = Object.values(this.ships).find(function (ship) {\n          return ship.boardCode === _this.board[coordinates[0]][coordinates[1]];\n        });\n        // - Increment ship hit count\n        ship.hit();\n        // - Exchange to ship boardcode + 0\n        this.board[coordinates[0]][coordinates[1]] = ship.boardCode + \"0\";\n        this.hits = this.hits + 1;\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"checkIfAllShipsSunk\",\n    value: function checkIfAllShipsSunk() {\n      //Reduces an object array in a way that if only one isSunk() is false, function returns false\n      return Object.entries(this.ships).reduce(function (prev, current, index, array) {\n        return prev === false ? false : current[1].isSunk();\n      }, true);\n    }\n  }, {\n    key: \"checkIfAllShipsPlaced\",\n    value: function checkIfAllShipsPlaced() {\n      return Object.values(this.ships).reduce(function (prev, current, index, array) {\n        return prev === false ? false : current.placedOnBoard;\n      }, true);\n    }\n  }, {\n    key: \"automaticShipPlacement\",\n    value: function automaticShipPlacement() {\n      var _this2 = this;\n      Object.values(this.ships).forEach(function (ship) {\n        while (ship.placedOnBoard === false) {\n          var coord1 = Math.floor(Math.random() * 10);\n          var coord2 = Math.floor(Math.random() * 10);\n          var orientationArray = [\"h\", \"v\"];\n          var randomOrientationIndex = Math.floor(Math.random() * orientationArray.length);\n          var orientation = orientationArray[randomOrientationIndex];\n          _this2.placeShip(ship, [coord1, coord2], orientation);\n        }\n      });\n    }\n  }, {\n    key: \"printBoard\",\n    value: function printBoard() {\n      var x = \"\";\n      for (var i = 0; i < 10; i++) {\n        for (var j = 0; j < 10; j++) {\n          x = x + this.board[i][j] + \"  \";\n        }\n        x = x + \"\\n\";\n      }\n      console.log(x);\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://project-battleship/./src/js/GameBoard.js?");

/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ \"./src/js/GameBoard.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Player = /*#__PURE__*/function () {\n  function Player(type) {\n    _classCallCheck(this, Player);\n    this.type = type;\n    this.gameBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n  return _createClass(Player, [{\n    key: \"restart\",\n    value: function restart() {\n      this.gameBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://project-battleship/./src/js/Player.js?");

/***/ }),

/***/ "./src/js/Ship.js":
/*!************************!*\
  !*** ./src/js/Ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Ship = /*#__PURE__*/function () {\n  function Ship(length, boardCode) {\n    _classCallCheck(this, Ship);\n    this.length = length;\n    this.hits = 0;\n    this.boardCode = boardCode ? boardCode : undefined;\n    this.placedOnBoard = false;\n  }\n  return _createClass(Ship, [{\n    key: \"hit\",\n    value: function hit() {\n      this.hits = !this.isSunk() ? ++this.hits : this.hits;\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      return this.hits === this.length ? true : false;\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://project-battleship/./src/js/Ship.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allGridRows: () => (/* binding */ allGridRows),\n/* harmony export */   buttonAutoPlace: () => (/* binding */ buttonAutoPlace),\n/* harmony export */   buttonRestart: () => (/* binding */ buttonRestart),\n/* harmony export */   buttonRotate: () => (/* binding */ buttonRotate),\n/* harmony export */   buttonStart: () => (/* binding */ buttonStart),\n/* harmony export */   changeInfoMessage: () => (/* binding */ changeInfoMessage),\n/* harmony export */   computerGrid: () => (/* binding */ computerGrid),\n/* harmony export */   dragleaveHandler: () => (/* binding */ dragleaveHandler),\n/* harmony export */   dragoverHandler: () => (/* binding */ dragoverHandler),\n/* harmony export */   dragstartHandler: () => (/* binding */ dragstartHandler),\n/* harmony export */   dropHandler: () => (/* binding */ dropHandler),\n/* harmony export */   gameBoardPc: () => (/* binding */ gameBoardPc),\n/* harmony export */   gameBoardPlayer: () => (/* binding */ gameBoardPlayer),\n/* harmony export */   gameSettings: () => (/* binding */ gameSettings),\n/* harmony export */   headerShips: () => (/* binding */ headerShips),\n/* harmony export */   initializeGrid: () => (/* binding */ initializeGrid),\n/* harmony export */   initializeShipSelector: () => (/* binding */ initializeShipSelector),\n/* harmony export */   placeShipOnBoard: () => (/* binding */ placeShipOnBoard),\n/* harmony export */   playerGrid: () => (/* binding */ playerGrid),\n/* harmony export */   rowHeaderPc: () => (/* binding */ rowHeaderPc),\n/* harmony export */   rowHeaderPlayer: () => (/* binding */ rowHeaderPlayer),\n/* harmony export */   shipsSelector: () => (/* binding */ shipsSelector),\n/* harmony export */   shipsShip: () => (/* binding */ shipsShip)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\nvar buttonRotate = document.querySelector(\"#rotate\");\nvar buttonRestart = document.querySelector(\"#restart\");\nvar buttonStart = document.querySelector(\"#start\");\nvar buttonAutoPlace = document.querySelector(\"#autoplace\");\nvar gameSettings = document.querySelector(\".game-settings\");\nvar shipsSelector = document.querySelector(\".ships\");\nvar shipsShip = document.querySelectorAll(\".ships > .ship\");\nvar gameBoardPlayer = document.querySelector(\".gameBoard.player\");\nvar rowHeaderPlayer = document.querySelector(\".gameBoard.player > .grid > .row.row-header\");\nvar gameBoardPc = document.querySelector(\".gameBoard.pc\");\nvar rowHeaderPc = document.querySelector(\".gameBoard.pc > .grid > .row.row-header\");\nvar headerShips = document.querySelector(\".heading\");\nvar allGridRows = document.querySelectorAll(\".row:not(.row-header)\");\nvar computerGrid = document.querySelectorAll(\".gameBoard.player > .grid > .row > div:not(.hit):not(.header-row):not(.header-column, .ship)\");\nvar playerGrid = document.querySelectorAll(\".gameBoard.pc > .grid > .row > div:not(.hit):not(.header-row):not(.header-column, .ship)\");\n\n//EventListeners\nbuttonRotate.addEventListener(\"click\", function () {\n  shipsSelector.classList.value = shipsSelector.classList.contains(\"v\") ? \"ships h\" : \"ships v\";\n});\nbuttonRestart.addEventListener(\"click\", function () {\n  _index__WEBPACK_IMPORTED_MODULE_0__.playerPc.restart();\n  _index__WEBPACK_IMPORTED_MODULE_0__.playerUser.restart();\n  initializeGrid(_index__WEBPACK_IMPORTED_MODULE_0__.playerPc.gameBoard.board, \"pc\");\n  initializeGrid(_index__WEBPACK_IMPORTED_MODULE_0__.playerUser.gameBoard.board, \"player\");\n  initializeShipSelector(_index__WEBPACK_IMPORTED_MODULE_0__.playerUser.gameBoard.ships);\n  buttonRotate.removeAttribute(\"disabled\");\n  buttonAutoPlace.removeAttribute(\"disabled\");\n  buttonStart.setAttribute(\"disabled\", \"true\");\n  gameBoardPlayer.classList.add(\"active\");\n  gameBoardPc.classList.remove(\"active\");\n  _index__WEBPACK_IMPORTED_MODULE_0__.playerPc.gameBoard.automaticShipPlacement();\n  document.querySelector(\".alert-info\").classList.remove(\"green\");\n  document.querySelector(\".alert-info\").classList.remove(\"red\");\n  changeInfoMessage(\"It's your time to place ships on your board. Use drag and drop.\");\n});\nbuttonAutoPlace.addEventListener(\"click\", function () {\n  _index__WEBPACK_IMPORTED_MODULE_0__.playerUser.gameBoard.automaticShipPlacement();\n  initializeGrid(_index__WEBPACK_IMPORTED_MODULE_0__.playerUser.gameBoard.board, \"player\");\n  initializeShipSelector(_index__WEBPACK_IMPORTED_MODULE_0__.playerUser.gameBoard.ships);\n  buttonRotate.setAttribute(\"disabled\", \"true\");\n  buttonAutoPlace.setAttribute(\"disabled\", \"true\");\n  buttonStart.removeAttribute(\"disabled\");\n  changeInfoMessage(\"Time to start the game by pressing Start game button down there.\");\n});\nbuttonStart.addEventListener(\"click\", function () {\n  gameStart();\n});\nfunction clickComputerGrid(element) {\n  var isActive = document.querySelector(\".gameBoard.pc.active\");\n  var coord1 = element.target.getAttribute(\"coord1\");\n  var coord2 = element.target.getAttribute(\"coord2\");\n  if (isActive !== null) {\n    var condition = _index__WEBPACK_IMPORTED_MODULE_0__.playerPc.gameBoard.receiveAttack([coord1, coord2]);\n    if (condition) {\n      initializeGrid(_index__WEBPACK_IMPORTED_MODULE_0__.playerPc.gameBoard.board, \"pc\");\n      gameBoardPc.classList.remove(\"active\");\n      gameBoardPlayer.classList.add(\"active\");\n      if (_index__WEBPACK_IMPORTED_MODULE_0__.playerPc.gameBoard.checkIfAllShipsSunk()) {\n        endGame(\"You won!\");\n        document.querySelector(\".alert-info\").classList.add(\"green\");\n        gameBoardPlayer.classList.remove(\"active\");\n        return true;\n      }\n    }\n    gameBoardPc.classList.remove(\"active\");\n    gameBoardPlayer.classList.add(\"active\");\n    setTimeout(function () {\n      while (attackUserAuto() === false) {}\n      initializeGrid(_index__WEBPACK_IMPORTED_MODULE_0__.playerUser.gameBoard.board, \"player\");\n      gameBoardPc.classList.add('active');\n      gameBoardPlayer.classList.remove('active');\n      if (_index__WEBPACK_IMPORTED_MODULE_0__.playerUser.gameBoard.checkIfAllShipsSunk()) {\n        endGame(\"Computer has won :(\");\n        document.querySelector(\".alert-info\").classList.add(\"red\");\n        gameBoardPc.classList.remove(\"active\");\n        return true;\n      }\n    }, 1000);\n  }\n}\n\n//eventHandlers\nvar draggedElement = null;\nfunction dragstartHandler(ev) {\n  draggedElement = ev.target;\n}\nfunction dragoverHandler(ev) {\n  ev.preventDefault();\n}\nfunction dragleaveHandler(ev) {}\nfunction dropHandler(ev) {\n  placeShipOnBoard(draggedElement, _index__WEBPACK_IMPORTED_MODULE_0__.playerUser.gameBoard.ships[draggedElement.getAttribute(\"boardcode\")], ev.target, document.querySelector(\".ships\").classList[1]);\n}\n\n//Functions\nfunction initializeGrid(gridArray, player) {\n  if (!gridArray || !player) return;\n  var HTMLBoard = \"\";\n  gridArray.map(function (value1, index1) {\n    HTMLBoard += \"<div class=\\\"row\\\">\";\n    HTMLBoard += \"<div class=\\\"header-column\\\">\".concat(index1 + 1, \"</div>\");\n    value1.map(function (value2, index2) {\n      var classes = value2 !== 1 ? value2 !== 0 ? typeof value2 === \"string\" ? player === \"player\" ? value2.endsWith(\"0\") ? \"ship hit\" : \"ship\" : value2.endsWith(\"0\") ? \"ship hit\" : \"\" : \"\" : \"hit\" : \"\";\n      HTMLBoard += \"<div \".concat(classes ? \"class=\\\"\" + classes + \"\\\"\" : \"\", \" coord1=\\\"\").concat(index1, \"\\\" coord2=\\\"\").concat(index2, \"\\\"></div>\");\n    });\n    HTMLBoard += \"</div>\";\n  });\n  if (player === \"player\") {\n    document.querySelectorAll(\".gameBoard.player > .grid > .row:not(.row-header)\").forEach(function (e) {\n      return e.remove();\n    });\n    rowHeaderPlayer.insertAdjacentHTML(\"afterEnd\", HTMLBoard);\n    var gridCells = document.querySelectorAll(\".gameBoard.player > .grid > .row > div[coord1]\");\n    gridCells.forEach(function (element) {\n      element.addEventListener(\"dragover\", dragoverHandler);\n      element.addEventListener(\"dragleave\", dragleaveHandler);\n      element.addEventListener(\"drop\", dropHandler);\n    });\n  } else if (player === \"pc\") {\n    document.querySelectorAll(\".gameBoard.pc > .grid > .row:not(.row-header)\").forEach(function (e) {\n      return e.remove();\n    });\n    rowHeaderPc.insertAdjacentHTML(\"afterEnd\", HTMLBoard);\n    var _gridCells = document.querySelectorAll(\".gameBoard.pc > .grid > .row > div[coord1]:not([class])\");\n    _gridCells.forEach(function (gridCell) {\n      gridCell.addEventListener(\"click\", clickComputerGrid);\n    });\n  }\n}\nfunction initializeShipSelector(ships) {\n  document.querySelectorAll(\".ships > .ship\").forEach(function (e) {\n    return e.remove();\n  });\n  var HTMLShipsSelector = \"\";\n  Object.entries(ships).map(function (ship, index) {\n    HTMLShipsSelector += \"<div draggable=\\\"\".concat(ship[1].placedOnBoard === true ? \"false\" : \"true\", \"\\\" class=\\\"ship\").concat(ship[1].placedOnBoard === true ? \" placed\" : \"\", \"\\\" boardCode=\\\"\").concat(ship[1].boardCode, \"\\\">\");\n    for (var i = 0; i < ship[1].length; i++) {\n      HTMLShipsSelector += \"<div></div>\";\n    }\n    HTMLShipsSelector += \"</div>\";\n  });\n  shipsSelector.insertAdjacentHTML(\"afterbegin\", HTMLShipsSelector);\n  var shipsElement = document.querySelectorAll(\".ships > .ship\");\n  shipsElement.forEach(function (e1) {\n    if (ships[e1.getAttribute(\"boardcode\")].placedOnBoard !== true) {\n      e1.addEventListener(\"dragstart\", dragstartHandler);\n    }\n  });\n}\nfunction placeShipOnBoard(shipElement, shipObject, targetElement, orientation) {\n  var coord1 = parseInt(targetElement.getAttribute(\"coord1\"));\n  var coord2 = parseInt(targetElement.getAttribute(\"coord2\"));\n  _index__WEBPACK_IMPORTED_MODULE_0__.playerUser.gameBoard.placeShip(shipObject, [coord1, coord2], orientation);\n  initializeShipSelector(_index__WEBPACK_IMPORTED_MODULE_0__.playerUser.gameBoard.ships);\n  initializeGrid(_index__WEBPACK_IMPORTED_MODULE_0__.playerUser.gameBoard.board, \"player\");\n  if (_index__WEBPACK_IMPORTED_MODULE_0__.playerUser.gameBoard.checkIfAllShipsPlaced()) {\n    buttonRotate.setAttribute(\"disabled\", \"true\");\n    buttonAutoPlace.setAttribute(\"disabled\", \"true\");\n    buttonStart.removeAttribute(\"disabled\");\n    changeInfoMessage(\"Time to start the game by pressing Start game button down there.\");\n  }\n}\nfunction changeInfoMessage(message) {\n  document.querySelector(\".alert-info\").innerHTML = message;\n}\nfunction gameStart() {\n  buttonAutoPlace.setAttribute(\"disabled\", \"true\");\n  buttonRotate.setAttribute(\"disabled\", \"true\");\n  buttonStart.setAttribute(\"disabled\", \"true\");\n  changeInfoMessage(\"Game has started. Try to hit ship on Computer board when it's your turn\");\n  gameBoardPlayer.classList.remove(\"active\");\n  gameBoardPc.classList.add(\"active\");\n}\nfunction attackUserAuto() {\n  var coord1 = Math.floor(Math.random() * 10);\n  var coord2 = Math.floor(Math.random() * 10);\n  return _index__WEBPACK_IMPORTED_MODULE_0__.playerUser.gameBoard.receiveAttack([coord1, coord2]);\n}\nfunction endGame(message) {\n  changeInfoMessage(message);\n}\n\n//# sourceURL=webpack://project-battleship/./src/js/dom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;