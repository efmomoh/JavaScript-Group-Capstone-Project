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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* MOBILE MEDIA QUERY  */\n\n@media (max-width: 768px) {\n  body {\n    background-color: teal;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: auto;\n  }\n\n  .h1 {\n    font-size: 2.5rem;\n    font-weight: 700;\n    font-family: serif;\n    text-align: center;\n    color: #fff;\n  }\n}\n\n/* DESTOP MEDIA  */\n\n@media (min-width: 768px) {\n  body {\n    background-color: #f7f7f9;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: auto;\n    box-sizing: border-box;\n  }\n\n  .h1 {\n    font-size: 1.2rem;\n    font-weight: 800;\n    font-family: serif;\n    text-align: start;\n    color: #000;\n  }\n\n  h2 {\n    font-size: 1.2rem;\n    font-weight: 800;\n    font-family: serif;\n    text-align: start;\n    color: #000;\n  }\n\n  .header {\n    width: 100%;\n    height: auto;\n  }\n\n  .navbar {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    width: 99.2%;\n    margin-left: 2rem;\n  }\n\n  .logo-wrapper {\n    background: white;\n    text-align: center;\n    margin-left: 5rem;\n    border-radius: 50%;\n    display: inline-block;\n    padding: 10px;\n    width: 25%;\n    height: auto;\n  }\n\n  .logo {\n    display: block;\n    font-family: \"Poppin\", Arial, Helvetica, sans-serif;\n    font-size: 16px;\n    color: #000;\n    font-weight: 700;\n    height: auto;\n    text-decoration: none;\n  }\n\n  .logo:hover {\n    color: red;\n    background-color: #000;\n    border-radius: 50%;\n    padding: 10px;\n  }\n\n  .update-p {\n    color: #000;\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    text-align: center;\n  }\n\n  .update-p:hover {\n    color: #fff;\n    background-color: teal;\n    border-radius: 8px;\n    text-decoration: underline;\n  }\n\n  .movie-update,\n  .seasons,\n  .episodes,\n  .shows {\n    text-decoration: none;\n    margin-top: 1.5rem;\n  }\n\n  .movie-item {\n    margin: 30px;\n  }\n\n  img {\n    max-width: 220px;\n  }\n\n  .like-button {\n    width: auto;\n    height: 2rem;\n    margin-top: 1rem;\n    font-size: 1.5rem;\n  }\n\n  .p-heart:hover {\n    color: red;\n  }\n\n  .like-feedback {\n    display: flex;\n    flex-direction: column;\n    margin-top: 1rem;\n    font-size: 1.3rem;\n    color: rgb(6, 117, 6);\n    background-color: #fff;\n  }\n\n  .comment-button {\n    width: 38%;\n    margin-top: 1rem;\n  }\n\n  .main-container,\n  .section-wrapper,\n  .contents {\n    width: 100%;\n    height: auto;\n  }\n\n  .item-list {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    margin-top: 4rem;\n  }\n\n  .title-like {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  /* Main Section */\n  .main {\n    padding: 2rem;\n  }\n\n  .main .container {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    gap: 1rem;\n  }\n\n  .season-card {\n    border: 1px solid #444;\n    border-radius: 0.5rem;\n    box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.75);\n    margin: 2rem 0;\n  }\n\n  .season-card:hover {\n    transform: scale(1.1);\n    box-shadow: 3px 4px 6px 0 rgba(0, 0, 0, 0.75);\n  }\n\n  .card-image {\n    border-top-right-radius: 0.5rem;\n    border-top-left-radius: 0.5rem;\n    width: 100%;\n    padding-left: 0.5rem;\n  }\n\n  .season-details {\n    padding: 0.5rem;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .btn-primary {\n    display: block;\n    margin: 1rem auto;\n    text-align: center;\n    background-color: #6070ff;\n    color: #fff;\n    width: fit-content;\n    padding: 0.25rem 0.75rem;\n    border-radius: 2rem;\n    box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.75);\n    text-decoration: none;\n  }\n\n  .btn-primary:hover {\n    transform: scale(1.04);\n    background-color: #e9a47d;\n    text-decoration: underline;\n  }\n\n  .btn-primary:active {\n    transform: translateY(2px);\n    background-color: #d97135;\n  }\n\n  /* Popup */\n  .comments {\n    display: grid;\n  }\n\n  .comment-popup {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: #2c2c2cd0;\n    overflow-y: scroll;\n  }\n\n  .popup-content {\n    background-color: white;\n    width: 70%;\n    margin: 70px auto;\n    padding: 5px 10vw 30px;\n    box-sizing: border-box;\n    border-radius: 16px;\n  }\n\n  .popup-header {\n    display: flex;\n  }\n\n  .popup-close {\n    float: right;\n    font-size: 2rem;\n    padding-top: 20px;\n    margin-right: -20vw;\n  }\n\n  .popup-title {\n    font-size: 2em;\n  }\n\n  .popup-image {\n    max-width: 60%;\n    width: 60%;\n    height: 80vh;\n    margin: 20px 10vw;\n  }\n\n  .d-none {\n    display: none;\n  }\n\n  .center {\n    text-align: center;\n  }\n\n  .synopsis {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .end {\n    padding-right: 32px;\n  }\n\n  .comment-form {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .input-style {\n    border-radius: 5px;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);\n    background-color: whitesmoke;\n    color: rgb(59, 59, 59);\n  }\n  \n  .name-input {\n    width: 25vw;\n    height: 30px;\n    margin-bottom: 20px;\n    padding-left: 10px;\n  }\n  \n  .text-input {\n    width: 40vw;\n    height: 15vh;\n    margin-bottom: 20px;\n    padding-left: 10px;\n  }\n  \n  .comment-input-btn {\n    width: 100px;\n    height: 30px;\n    margin: 0;\n  }\n\n  ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .footer {\n    display: flex;\n    flex-direction: column;\n    height: 4rem;\n    border: 0.3rem solid #000;\n    position: fixed;\n    bottom: 0;\n    width: 99.2%;\n  }\n\n  .p-footer {\n    text-align: center;\n    font-size: 1.5rem;\n  }\n\n  .p-footer a {\n    color: #6070ff;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_renderTVShowItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderTVShowItems.js */ \"./src/modules/renderTVShowItems.js\");\n/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homepage.js */ \"./src/modules/homepage.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_popupevent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popupevent.js */ \"./src/modules/popupevent.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _modules_pageCounter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/pageCounter.js */ \"./src/modules/pageCounter.js\");\n\n\n\n\n\n\n\n\nconst url = 'https://api.tvmaze.com/shows/6/seasons';\n\nconst show = new _modules_renderTVShowItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](url);\nshow.getData(url);\n\nconst view = new _modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst commentPop = new _modules_popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n// On Page Load\nwindow.onload = () => {\n  if (localStorage.getItem('data')) {\n    const arr = JSON.parse(localStorage.getItem('data'));\n    view.seasonList(arr);\n    commentPop.seasonList(arr);\n    (0,_modules_popupevent_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_5__.renderLike)();\n    (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_5__.likeEvent)();\n    (0,_modules_pageCounter_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  }\n};\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addComment = (date, name, comm) => `<li>${date} ${name}: ${comm}</li>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newComment: () => (/* binding */ newComment),\n/* harmony export */   storedComments: () => (/* binding */ storedComments)\n/* harmony export */ });\n// app_id: ocBz5X2z8Jn2b71IzbDY\n\nconst storedComments = async (id) => {\n  const response = await window.fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ocBz5X2z8Jn2b71IzbDY/comments?item_id=${id}`);\n  const data = await response.json();\n  return { status: response.status, data };\n};\n\nconst newComment = async ({ id, name, comm }) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ocBz5X2z8Jn2b71IzbDY/comments', {\n    method: 'POST',\n    mode: 'cors',\n    cache: 'no-cache',\n    credentials: 'same-origin',\n    body: JSON.stringify({ item_id: id, username: name, comment: comm }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n    redirect: 'follow',\n    referrerPolicy: 'no-referrer',\n  });\n  const data = await response.text();\n  return { status: response.status, data };\n};\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Homepage {\n  seasonList = (arr) => {\n    const viewBox = document.querySelector('#view-box');\n    arr.forEach((element) => {\n      const div = document.createElement('div');\n      div.innerHTML = `\n      <div class=\"season-card\">\n      <img src=\"${element.image.medium}\" alt=\"season image\" class=\"card-image\">\n      <div class=\"season-details\">\n        <h4 class=\"season-title\">Season ${element.number}</h4>\n        <p class=\"likes\">\n        <span class=\"likes-counter\">0</span> likes <button class=\"like-button\"><i class=\"fa-regular fa-heart\"></i></button>\n        </p>\n      </div>\n      <button type=\"button\" id=\"${element.id}\" class=\"comments btn-primary comment-btn\">Comment</button>\n    </div>\n    `;\n      viewBox.append(div);\n    });\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLikes: () => (/* binding */ getLikes),\n/* harmony export */   likeEvent: () => (/* binding */ likeEvent),\n/* harmony export */   postLike: () => (/* binding */ postLike),\n/* harmony export */   renderLike: () => (/* binding */ renderLike)\n/* harmony export */ });\nconst getLikes = async () => {\n  try {\n    const response = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ocBz5X2z8Jn2b71IzbDY/likes',\n    );\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    return [];\n  }\n};\n\nconst postLike = async (itemID) => {\n  const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ocBz5X2z8Jn2b71IzbDY/likes',\n    {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ item_id: itemID }),\n    },\n  );\n  const data = await response.text();\n  return data;\n};\n\nconst renderLike = async () => {\n  const likeCounters = document.querySelectorAll('.likes-counter');\n  for (let index = 0; index < likeCounters.length; index += 1) {\n    const ind = Number([index]);\n    // eslint-disable-next-line no-await-in-loop\n    const render = await getLikes();\n    const filterRender = render.filter((like) => like.item_id === ind);\n    const numberLikes = filterRender[0].likes;\n    likeCounters[index].innerHTML = `${numberLikes}`;\n  }\n};\n\nconst likeEvent = () => {\n  const likeButtons = document.querySelectorAll('.like-button');\n  const likeCounters = document.querySelectorAll('.likes-counter');\n  for (let index = 0; index < likeButtons.length; index += 1) {\n    likeButtons[index].addEventListener('click', async () => {\n      const ind = Number([index]);\n      await postLike(ind);\n      const likesArr = await getLikes();\n      const filterLikes = likesArr.filter((like) => like.item_id === ind);\n      const numberLikes = filterLikes[0].likes;\n      likeCounters[index].innerHTML = `${numberLikes}`;\n    });\n  }\n};\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/pageCounter.js":
/*!************************************!*\
  !*** ./src/modules/pageCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageCount = () => {\n  const seasons = document.querySelector('.seasons-count');\n  const cards = document.querySelectorAll('.season-card').length;\n  seasons.innerHTML = ` Seasons ${cards}`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageCount);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/pageCounter.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\nclass CommentPopup {\n    getComments = async (id) => {\n      const { data } = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.storedComments)(id);\n\n      return Array.isArray(data) ? data : [];\n    }\n\n    seasonList = async (element) => {\n      const commentPopup = document.querySelector('.comment-popup');\n      const div = document.createElement('div');\n      div.classList.add('popup-content');\n      const data = await this.getComments(element.id);\n      const comments = data.map((item) => `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`).join(' ');\n      div.innerHTML = `\n            <div class=\"popup-header\">\n                <img src=\"${element.image.original}\" alt=\"season ${element.number}\" class=\"popup-image\">\n                <div class=\"popup-close\">\n                    <i class=\"fa-regular fa-circle-xmark\"></i>\n                </div>\n            </div>\n            <h2 class=\"popup-title center margin-b\">Season ${element.number}</h2>\n            <div class=\"synopsis margin-b\">\n                <p>Premier Date: ${element.premiereDate}</p>\n                <p class=\"second-element end\">End Date: ${element.endDate}</p>\n            </div>\n            <div class=\"synopsis margin-b\">\n                <p>Episodes: ${element.episodeOrder}</p>\n                <p class=\"second-element\">Channel Network: ${element.network.name}</p>\n            </div>\n            <div class=\"comment-items\">\n            <h3 id=\"comment-count\" class=\"center comment-count margin-b\">Comments(3)</h3>\n            <ul class=\"comments-list margin-b\">\n                ${comments}\n            </ul>\n\n            <h3 class=\"center margin-b\">Add a comment</h3>\n            <form class=\"comment-form\">\n                <input type=\"hidden\" name=\"id\" id=\"element-id\" value=\"${element.id}\" />\n                <input type=\"text\" id=\"name\" name=\"name\" class=\"name-input comment-name input-style\" placeholder=\"Your name\">\n                <textarea type=\"text\" id=\"text\" name=\"comm\" class=\"text-input input-style\" placeholder=\"Your comment\"></textarea>\n                <button type=\"submit\" id=\"comment-btn\" class=\"comment-input-btn btn-primary\">Comment</button>\n            </form>\n            </div>\n\n            `;\n      commentPopup.append(div);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentPopup);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/popupevent.js":
/*!***********************************!*\
  !*** ./src/modules/popupevent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n\n\n\n\nconst submitComment = async (e) => {\n  e.preventDefault();\n  const commList = document.querySelector('.comments-list');\n  const name = e.target.name.value;\n  const comm = e.target.comm.value;\n  const id = e.target.id.value;\n\n  await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.newComment)({ id, name, comm });\n\n  const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.storedComments)(id);\n  const dataArr = data.data;\n  let html = '';\n  dataArr.forEach((item) => {\n    html += (0,_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item.creation_date, item.username, item.comment);\n  });\n  commList.innerHTML = html;\n  e.target.reset();\n};\n\nconst commentEvent = () => {\n  const popup = document.querySelector('.comment-popup');\n  const commentButtons = document.querySelectorAll('.comment-btn');\n\n  for (let index = 0; index < commentButtons.length; index += 1) {\n    commentButtons[index].addEventListener('click', async () => {\n      const data = JSON.parse(localStorage.getItem('data'));\n      const btnId = commentButtons[index].id;\n      const element = data?.find((item) => Number(item.id) === Number(btnId));\n      popup.classList.remove('d-none');\n      const popUpContents = new _popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n      await popUpContents.seasonList(element);\n\n      const forms = document.querySelector('.comment-form');\n\n      forms.addEventListener('submit', submitComment);\n\n      const popupCloseButton = popup.querySelector('.popup-close');\n      popupCloseButton.addEventListener('click', () => {\n        const popUpContents = document.querySelector('.popup-content');\n        popup.classList.add('d-none');\n        popUpContents.remove();\n      });\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentEvent);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/popupevent.js?");

/***/ }),

/***/ "./src/modules/renderTVShowItems.js":
/*!******************************************!*\
  !*** ./src/modules/renderTVShowItems.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass RenderTVShowsItems {\n  constructor(url) {\n    this.url = url;\n  }\n\n  static createAppID = async (url) => {\n    await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    })\n      .then((response) => response.json())\n      .then((data) => {\n        localStorage.setItem('appID', JSON.stringify(data));\n      });\n  };\n\n  // Method to fetch content of the homepage\n  getData = async (url) => {\n    await fetch(url, {\n      method: 'GET',\n    })\n      .then((response) => response.json())\n      .then((data) => {\n        localStorage.setItem('data', JSON.stringify(data));\n      });\n  };\n\n  // Methos to fetch likes\n  getLikes = async (url) => {\n    await fetch(url, {\n      method: 'GET',\n    })\n      .then((response) => response.json())\n      .then((data) => {\n        localStorage.setItem('likes', JSON.stringify(data));\n      });\n  };\n\n  // Method to add/update likes\n  addScore = async (url, id, likes) => {\n    await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json; charset=UTF-8',\n      },\n      body: JSON.stringify({ id, likes }),\n    }).then((response) => response.json());\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderTVShowsItems);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/renderTVShowItems.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;