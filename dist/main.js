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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* MOBILE MEDIA QUERY  */\r\n\r\n@media (max-width: 768px) {\r\n  body {\r\n    background-color: teal;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .h1 {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    font-family: serif;\r\n    text-align: center;\r\n    color: #fff;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 1rem;\r\n    font-weight: 800;\r\n    font-family: serif;\r\n    text-align: start;\r\n    color: #000;\r\n  }\r\n\r\n  .header {\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .navbar {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    width: 100%;\r\n  }\r\n\r\n  .logo-wrapper {\r\n    background: white;\r\n    text-align: center;\r\n    margin-left: 0.8rem;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    padding: 10px;\r\n    width: 35%;\r\n    height: auto;\r\n  }\r\n\r\n  .logo {\r\n    display: block;\r\n    font-family: \"Poppin\", Arial, Helvetica, sans-serif;\r\n    font-size: 15px;\r\n    color: #000;\r\n    font-weight: 700;\r\n    height: auto;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .update-p {\r\n    color: #fff;\r\n    font-size: 1rem;\r\n    padding: 0.3rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .update-p:hover {\r\n    color: #fff;\r\n    background-color: teal;\r\n    border-radius: 8px;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .movie-update,\r\n  .seasons,\r\n  .episodes,\r\n  .shows {\r\n    text-decoration: none;\r\n    margin-top: 1.5rem;\r\n    color: #fff;\r\n  }\r\n\r\n  .movie-item {\r\n    margin: 30px;\r\n  }\r\n\r\n  img {\r\n    max-width: 200px;\r\n  }\r\n\r\n  .like-button {\r\n    width: auto;\r\n    height: 1.5rem;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .p-heart:hover {\r\n    color: red;\r\n  }\r\n\r\n  .comment-button {\r\n    width: 25%;\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  .main-container,\r\n  .section-wrapper,\r\n  .contents {\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .item-list {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    margin-top: 4rem;\r\n  }\r\n\r\n  .title-like {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  /* Main Section */\r\n  .main {\r\n    padding: 1rem;\r\n  }\r\n\r\n  .main .container {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 1rem;\r\n  }\r\n\r\n  .season-card {\r\n    border: 1px solid #444;\r\n    border-radius: 0.5rem;\r\n    box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.75);\r\n    margin: 2rem 0;\r\n  }\r\n\r\n  .season-card:hover {\r\n    transform: scale(1.1);\r\n    box-shadow: 3px 4px 6px 0 rgba(0, 0, 0, 0.75);\r\n  }\r\n\r\n  .card-image {\r\n    border-top-right-radius: 0.5rem;\r\n    border-top-left-radius: 0.5rem;\r\n    width: 100%;\r\n  }\r\n\r\n  .season-details {\r\n    padding: 0.5rem;\r\n    display: flex;\r\n    height: auto;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .btn-primary {\r\n    display: block;\r\n    margin: 1rem auto;\r\n    text-align: center;\r\n    background-color: #6070ff;\r\n    color: #fff;\r\n    width: fit-content;\r\n    padding: 0.25rem 0.75rem;\r\n    border-radius: 2rem;\r\n    box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.75);\r\n    text-decoration: none;\r\n  }\r\n\r\n  .btn-primary:hover {\r\n    transform: scale(1.04);\r\n    background-color: #e9a47d;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .btn-primary:active {\r\n    transform: translateY(2px);\r\n    background-color: #d97135;\r\n  }\r\n\r\n  .footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 4rem;\r\n    border: 0.3rem solid #000;\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 99.2%;\r\n    background-color: #fff;\r\n  }\r\n\r\n  .p-footer {\r\n    text-align: center;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .p-footer a {\r\n    color: #6070ff;\r\n  }\r\n}\r\n\r\n/* DESTOP MEDIA  */\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    background-color: #f7f7f9;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  .h1 {\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n    font-family: \"Poppin\", sans-serif;\r\n    text-align: center;\r\n    color: #000;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 1.2rem;\r\n    font-weight: 800;\r\n    font-family: serif;\r\n    text-align: start;\r\n    color: #000;\r\n  }\r\n\r\n  .header {\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .navbar {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    width: 99.2%;\r\n    margin-left: 2rem;\r\n  }\r\n\r\n  .logo-wrapper {\r\n    background: white;\r\n    text-align: center;\r\n    margin-left: 5rem;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    padding: 10px;\r\n    width: 25%;\r\n    height: auto;\r\n  }\r\n\r\n  .logo {\r\n    display: block;\r\n    font-family: \"Poppin\", Arial, Helvetica, sans-serif;\r\n    font-size: 16px;\r\n    color: #000;\r\n    font-weight: 700;\r\n    height: auto;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .logo:hover {\r\n    color: red;\r\n    background-color: #000;\r\n    border-radius: 50%;\r\n    padding: 10px;\r\n  }\r\n\r\n  .update-p {\r\n    color: #000;\r\n    font-size: 1.5rem;\r\n    padding: 0.5rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .update-p:hover {\r\n    color: #fff;\r\n    background-color: teal;\r\n    border-radius: 8px;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .movie-update,\r\n  .seasons,\r\n  .episodes,\r\n  .shows {\r\n    text-decoration: none;\r\n    margin-top: 1.5rem;\r\n  }\r\n\r\n  .movie-item {\r\n    margin: 30px;\r\n  }\r\n\r\n  img {\r\n    max-width: 220px;\r\n  }\r\n\r\n  .like-button {\r\n    width: auto;\r\n    height: 2rem;\r\n    margin-top: 1rem;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .p-heart:hover {\r\n    color: red;\r\n  }\r\n\r\n  .like-feedback {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 1rem;\r\n    font-size: 1.3rem;\r\n    color: rgb(6, 117, 6);\r\n    background-color: #fff;\r\n  }\r\n\r\n  .comment-button {\r\n    width: 38%;\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  .main-container,\r\n  .section-wrapper,\r\n  .contents {\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .item-list {\r\n    display: grid;\r\n    grid-template-columns: repeat(5, 1fr);\r\n    margin-top: 4rem;\r\n  }\r\n\r\n  .title-like {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  /* Main Section */\r\n  .main {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .main .container {\r\n    display: grid;\r\n    grid-template-columns: repeat(5, 1fr);\r\n    gap: 1rem;\r\n  }\r\n\r\n  .season-card {\r\n    border: 1px solid #444;\r\n    border-radius: 0.5rem;\r\n    box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.75);\r\n    margin: 2rem 0;\r\n  }\r\n\r\n  .season-card:hover {\r\n    transform: scale(1.1);\r\n    box-shadow: 3px 4px 6px 0 rgba(0, 0, 0, 0.75);\r\n  }\r\n\r\n  .card-image {\r\n    border-top-right-radius: 0.5rem;\r\n    border-top-left-radius: 0.5rem;\r\n    width: 100%;\r\n    padding-left: 0.5rem;\r\n  }\r\n\r\n  .season-details {\r\n    padding: 0.5rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .btn-primary {\r\n    display: block;\r\n    margin: 1rem auto;\r\n    text-align: center;\r\n    background-color: #6070ff;\r\n    color: #fff;\r\n    width: fit-content;\r\n    padding: 0.25rem 0.75rem;\r\n    border-radius: 2rem;\r\n    box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.75);\r\n    text-decoration: none;\r\n  }\r\n\r\n  .btn-primary:hover {\r\n    transform: scale(1.04);\r\n    background-color: #e9a47d;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .btn-primary:active {\r\n    transform: translateY(2px);\r\n    background-color: #d97135;\r\n  }\r\n\r\n  /* Popup */\r\n  .comments {\r\n    display: grid;\r\n  }\r\n\r\n  .comment-popup {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: #2c2c2cd0;\r\n    overflow-y: scroll;\r\n  }\r\n\r\n  .popup-content {\r\n    background-color: white;\r\n    width: 70%;\r\n    margin: 70px auto;\r\n    padding: 5px 10vw 30px;\r\n    box-sizing: border-box;\r\n    border-radius: 16px;\r\n  }\r\n\r\n  .popup-header {\r\n    display: flex;\r\n  }\r\n\r\n  .popup-close {\r\n    float: right;\r\n    font-size: 2rem;\r\n    padding-top: 20px;\r\n    margin-right: -20vw;\r\n  }\r\n\r\n  .popup-title {\r\n    font-size: 2em;\r\n  }\r\n\r\n  .popup-image {\r\n    max-width: 60%;\r\n    width: 60%;\r\n    height: 80vh;\r\n    margin: 20px 10vw;\r\n  }\r\n\r\n  .d-none {\r\n    display: none;\r\n  }\r\n\r\n  .center {\r\n    text-align: center;\r\n  }\r\n\r\n  .synopsis {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .end {\r\n    padding-right: 32px;\r\n  }\r\n\r\n  .comment-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .input-style {\r\n    border-radius: 5px;\r\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);\r\n    background-color: whitesmoke;\r\n    color: rgb(59, 59, 59);\r\n  }\r\n\r\n  .name-input {\r\n    width: 25vw;\r\n    height: 30px;\r\n    margin-bottom: 20px;\r\n    padding-left: 10px;\r\n  }\r\n\r\n  .text-input {\r\n    width: 40vw;\r\n    height: 15vh;\r\n    margin-bottom: 20px;\r\n    padding-left: 10px;\r\n  }\r\n\r\n  .comment-input-btn {\r\n    width: 100px;\r\n    height: 30px;\r\n    margin: 0;\r\n  }\r\n\r\n  ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n\r\n  .footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 4rem;\r\n    border: 0.3rem solid #000;\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 99.2%;\r\n    background-color: #fff;\r\n  }\r\n\r\n  .p-footer {\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .p-footer a {\r\n    color: #6070ff;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_renderTVShowItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderTVShowItems.js */ \"./src/modules/renderTVShowItems.js\");\n/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homepage.js */ \"./src/modules/homepage.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_popupevent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popupevent.js */ \"./src/modules/popupevent.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _modules_pageCounter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/pageCounter.js */ \"./src/modules/pageCounter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst url = 'https://api.tvmaze.com/shows/6/seasons';\r\n\r\nconst show = new _modules_renderTVShowItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](url);\r\nshow.getData(url);\r\n\r\nconst view = new _modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst commentPop = new _modules_popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\n// On Page Load\r\nwindow.onload = () => {\r\n  if (localStorage.getItem('data')) {\r\n    const arr = JSON.parse(localStorage.getItem('data'));\r\n    view.seasonList(arr);\r\n    commentPop.seasonList(arr);\r\n    (0,_modules_popupevent_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_5__.renderLike)();\r\n    (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_5__.likeEvent)();\r\n    (0,_modules_pageCounter_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addComment = (date, name, comm) => `<li>${date} ${name}: ${comm}</li>`;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newComment: () => (/* binding */ newComment),\n/* harmony export */   storedComments: () => (/* binding */ storedComments)\n/* harmony export */ });\n// app_id: ocBz5X2z8Jn2b71IzbDY\r\n\r\nconst storedComments = async (id) => {\r\n  const response = await window.fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ocBz5X2z8Jn2b71IzbDY/comments?item_id=${id}`);\r\n  const data = await response.json();\r\n  return { status: response.status, data };\r\n};\r\n\r\nconst newComment = async ({ id, name, comm }) => {\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ocBz5X2z8Jn2b71IzbDY/comments', {\r\n    method: 'POST',\r\n    mode: 'cors',\r\n    cache: 'no-cache',\r\n    credentials: 'same-origin',\r\n    body: JSON.stringify({ item_id: id, username: name, comment: comm }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n    redirect: 'follow',\r\n    referrerPolicy: 'no-referrer',\r\n  });\r\n  const data = await response.text();\r\n  return { status: response.status, data };\r\n};\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/commentcount.js":
/*!*************************************!*\
  !*** ./src/modules/commentcount.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (arr) => {\r\n  if (!arr || !Array.isArray(arr)) {\r\n    return 0;\r\n  }\r\n  return arr.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/commentcount.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Homepage {\r\n  seasonList = (arr) => {\r\n    const viewBox = document.querySelector('#view-box');\r\n    arr.forEach((element) => {\r\n      const div = document.createElement('div');\r\n      div.innerHTML = `\r\n      <div class=\"season-card\">\r\n      <img src=\"${element.image.medium}\" alt=\"season image\" class=\"card-image\">\r\n      <div class=\"season-details\">\r\n        <h4 class=\"season-title\">Season ${element.number}</h4>\r\n        <p class=\"likes\">\r\n        <span class=\"likes-counter\">0</span> likes <button class=\"like-button\"><i class=\"fa-regular fa-heart\"></i></button>\r\n        </p>\r\n      </div>\r\n      <button type=\"button\" id=\"${element.id}\" class=\"comments btn-primary comment-btn\">Comment</button>\r\n    </div>\r\n    `;\r\n      viewBox.append(div);\r\n    });\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/homepage.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageCount = () => {\n  const seasons = document.querySelector('.seasons-count');\n  const cards = document.querySelectorAll('.season-card').length;\n  seasons.innerHTML = ` Seasons (${cards})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageCount);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/pageCounter.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _commentcount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentcount.js */ \"./src/modules/commentcount.js\");\n\r\n\r\n\r\nclass CommentPopup {\r\n    getComments = async (id) => {\r\n      const { data } = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.storedComments)(id);\r\n\r\n      return Array.isArray(data) ? data : [];\r\n    }\r\n\r\n    seasonList = async (element) => {\r\n      const commentPopup = document.querySelector('.comment-popup');\r\n      const div = document.createElement('div');\r\n      div.classList.add('popup-content');\r\n      const data = await this.getComments(element.id);\r\n      const commentCount = (0,_commentcount_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n      const comments = data.map((item) => `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`).join(' ');\r\n      div.innerHTML = `\r\n            <div class=\"popup-header\">\r\n                <img src=\"${element.image.original}\" alt=\"season ${element.number}\" class=\"popup-image\">\r\n                <div class=\"popup-close\">\r\n                    <i class=\"fa-regular fa-circle-xmark\"></i>\r\n                </div>\r\n            </div>\r\n            <h2 class=\"popup-title center margin-b\">Season ${element.number}</h2>\r\n            <div class=\"synopsis margin-b\">\r\n                <p>Premier Date: ${element.premiereDate}</p>\r\n                <p class=\"second-element end\">End Date: ${element.endDate}</p>\r\n            </div>\r\n            <div class=\"synopsis margin-b\">\r\n                <p>Episodes: ${element.episodeOrder}</p>\r\n                <p class=\"second-element\">Channel Network: ${element.network.name}</p>\r\n            </div>\r\n            <div class=\"comment-items\">\r\n            <h3 id=\"comment-count\" class=\"center comment-count margin-b\">Comments(${commentCount})</h3>\r\n            <ul class=\"comments-list margin-b\">\r\n                ${comments}\r\n            </ul>\r\n\r\n            <h3 class=\"center margin-b\">Add a comment</h3>\r\n            <form class=\"comment-form\">\r\n                <input type=\"hidden\" name=\"id\" id=\"element-id\" value=\"${element.id}\" />\r\n                <input type=\"text\" id=\"name\" name=\"name\" class=\"name-input comment-name input-style\" placeholder=\"Your name\">\r\n                <textarea type=\"text\" id=\"text\" name=\"comm\" class=\"text-input input-style\" placeholder=\"Your comment\"></textarea>\r\n                <button type=\"submit\" id=\"comment-btn\" class=\"comment-input-btn btn-primary\">Comment</button>\r\n            </form>\r\n            </div>\r\n\r\n            `;\r\n      commentPopup.append(div);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentPopup);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/popupevent.js":
/*!***********************************!*\
  !*** ./src/modules/popupevent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _commentcount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentcount.js */ \"./src/modules/commentcount.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n\r\n\r\n\r\n\r\n\r\nconst submitComment = async (e) => {\r\n  e.preventDefault();\r\n  const commList = document.querySelector('.comments-list');\r\n  const name = e.target.name.value;\r\n  const comm = e.target.comm.value;\r\n  const id = e.target.id.value;\r\n\r\n  await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.newComment)({ id, name, comm });\r\n\r\n  const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.storedComments)(id);\r\n  const dataArr = data.data;\r\n  let html = '';\r\n  dataArr.forEach((item) => {\r\n    html += (0,_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item.creation_date, item.username, item.comment);\r\n  });\r\n  commList.innerHTML = html;\r\n  e.target.reset();\r\n  (0,_commentcount_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dataArr);\r\n};\r\n\r\nconst commentEvent = () => {\r\n  const popup = document.querySelector('.comment-popup');\r\n  const commentButtons = document.querySelectorAll('.comment-btn');\r\n\r\n  for (let index = 0; index < commentButtons.length; index += 1) {\r\n    commentButtons[index].addEventListener('click', async () => {\r\n      const data = JSON.parse(localStorage.getItem('data'));\r\n      const btnId = commentButtons[index].id;\r\n      const element = data?.find((item) => Number(item.id) === Number(btnId));\r\n      popup.classList.remove('d-none');\r\n      const popUpContents = new _popup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n      await popUpContents.seasonList(element);\r\n\r\n      const forms = document.querySelector('.comment-form');\r\n\r\n      forms.addEventListener('submit', submitComment);\r\n\r\n      const popupCloseButton = popup.querySelector('.popup-close');\r\n      popupCloseButton.addEventListener('click', () => {\r\n        const popUpContents = document.querySelector('.popup-content');\r\n        popup.classList.add('d-none');\r\n        popUpContents.remove();\r\n      });\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentEvent);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/popupevent.js?");

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