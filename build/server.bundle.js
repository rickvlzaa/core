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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/client/components/Navbar/styles.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/client/components/Navbar/styles.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \".styles__component___35nsx {\\n  width: 100%; }\\n  .styles__component___35nsx span {\\n    font-size: 23px;\\n    font-weight: 600; }\\n\", \"\", {\"version\":3,\"sources\":[\"/Users/ricardoveloz/Desktop/code/development/git/core/src/client/components/Navbar/styles.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,YAAY,EAAE;EACd;IACE,gBAAgB;IAChB,iBAAiB,EAAE\",\"file\":\"styles.scss\",\"sourcesContent\":[\".component {\\n  width: 100%; }\\n  .component span {\\n    font-size: 23px;\\n    font-weight: 600; }\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\nexports.locals = {\n\t\"component\": \"styles__component___35nsx\"\n};\n\n//# sourceURL=webpack:///./src/client/components/Navbar/styles.scss?./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/client/components/Sidebar/styles.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/client/components/Sidebar/styles.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \".styles__component___1eB24 {\\n  font-size: 23px;\\n  padding-top: 35px; }\\n  .styles__component___1eB24 li {\\n    padding-top: 8px; }\\n    .styles__component___1eB24 li a {\\n      text-decoration: none; }\\n\", \"\", {\"version\":3,\"sources\":[\"/Users/ricardoveloz/Desktop/code/development/git/core/src/client/components/Sidebar/styles.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,gBAAgB;EAChB,kBAAkB,EAAE;EACpB;IACE,iBAAiB,EAAE;IACnB;MACE,sBAAsB,EAAE\",\"file\":\"styles.scss\",\"sourcesContent\":[\".component {\\n  font-size: 23px;\\n  padding-top: 35px; }\\n  .component li {\\n    padding-top: 8px; }\\n    .component li a {\\n      text-decoration: none; }\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\nexports.locals = {\n\t\"component\": \"styles__component___1eB24\"\n};\n\n//# sourceURL=webpack:///./src/client/components/Sidebar/styles.scss?./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/client/scenes/Home/styles.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/client/scenes/Home/styles.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \".styles__component___wn9fG article:first-child p {\\n  font-size: 23px;\\n  padding: 25px;\\n  background: #e4f3ff;\\n  margin-top: 30px; }\\n\\n.styles__component___wn9fG article:first-child .styles__intro___3BenS header h1 {\\n  font-size: 40px; }\\n\\n.styles__component___wn9fG article:first-child .styles__contact___yf06o {\\n  width: 100%; }\\n  .styles__component___wn9fG article:first-child .styles__contact___yf06o p .styles__media___2WnI5 {\\n    font-weight: 600; }\\n  .styles__component___wn9fG article:first-child .styles__contact___yf06o p .styles__slinks___3Zpdb {\\n    font-size: 20px; }\\n\", \"\", {\"version\":3,\"sources\":[\"/Users/ricardoveloz/Desktop/code/development/git/core/src/client/scenes/Home/styles.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,gBAAgB;EAChB,cAAc;EACd,oBAAoB;EACpB,iBAAiB,EAAE;;AAErB;EACE,gBAAgB,EAAE;;AAEpB;EACE,YAAY,EAAE;EACd;IACE,iBAAiB,EAAE;EACrB;IACE,gBAAgB,EAAE\",\"file\":\"styles.scss\",\"sourcesContent\":[\".component article:first-child p {\\n  font-size: 23px;\\n  padding: 25px;\\n  background: #e4f3ff;\\n  margin-top: 30px; }\\n\\n.component article:first-child .intro header h1 {\\n  font-size: 40px; }\\n\\n.component article:first-child .contact {\\n  width: 100%; }\\n  .component article:first-child .contact p .media {\\n    font-weight: 600; }\\n  .component article:first-child .contact p .slinks {\\n    font-size: 20px; }\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\nexports.locals = {\n\t\"component\": \"styles__component___wn9fG\",\n\t\"intro\": \"styles__intro___3BenS\",\n\t\"contact\": \"styles__contact___yf06o\",\n\t\"media\": \"styles__media___2WnI5\",\n\t\"slinks\": \"styles__slinks___3Zpdb\"\n};\n\n//# sourceURL=webpack:///./src/client/scenes/Home/styles.scss?./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/client/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/client/styles.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  box-sizing: border-box;\\n  color: #3e3968;\\n  font-family: 'Karla', sans-serif; }\\n\\nul {\\n  list-style: none; }\\n\\narticle, header, section, footer, aside, main, nav {\\n  display: block; }\\n\\n.styles__site___2oekB {\\n  height: 100vh;\\n  display: flex;\\n  justify-content: space-around; }\\n  .styles__site___2oekB .styles__navigate___1ciem {\\n    background: #ecf1ff;\\n    flex: 1;\\n    padding-left: 65px;\\n    padding-top: 20px; }\\n  .styles__site___2oekB .styles__content___MOkRb {\\n    background: #f7fdff;\\n    flex: 3;\\n    padding: 20px; }\\n\\n@font-face {\\n  font-family: 'Karla';\\n  src: url(\" + escape(__webpack_require__(/*! ../fonts/Karla/Karla-Regular.ttf */ \"./src/fonts/Karla/Karla-Regular.ttf\")) + \") format(\\\"ttf\\\");\\n  font-style: normal; }\\n\", \"\", {\"version\":3,\"sources\":[\"/Users/ricardoveloz/Desktop/code/development/git/core/src/client/styles.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,UAAU;EACV,WAAW;EACX,UAAU;EACV,uBAAuB;EACvB,eAAe;EACf,iCAAiC,EAAE;;AAErC;EACE,iBAAiB,EAAE;;AAErB;EACE,eAAe,EAAE;;AAEnB;EACE,cAAc;EACd,cAAc;EACd,8BAA8B,EAAE;EAChC;IACE,oBAAoB;IACpB,QAAQ;IACR,mBAAmB;IACnB,kBAAkB,EAAE;EACtB;IACE,oBAAoB;IACpB,QAAQ;IACR,cAAc,EAAE;;AAEpB;EACE,qBAAqB;EACrB,iDAA2D;EAC3D,mBAAmB,EAAE\",\"file\":\"styles.scss\",\"sourcesContent\":[\"* {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  box-sizing: border-box;\\n  color: #3e3968;\\n  font-family: 'Karla', sans-serif; }\\n\\nul {\\n  list-style: none; }\\n\\narticle, header, section, footer, aside, main, nav {\\n  display: block; }\\n\\n.site {\\n  height: 100vh;\\n  display: flex;\\n  justify-content: space-around; }\\n  .site .navigate {\\n    background: #ecf1ff;\\n    flex: 1;\\n    padding-left: 65px;\\n    padding-top: 20px; }\\n  .site .content {\\n    background: #f7fdff;\\n    flex: 3;\\n    padding: 20px; }\\n\\n@font-face {\\n  font-family: 'Karla';\\n  src: url(\\\"../fonts/Karla/Karla-Regular.ttf\\\") format(\\\"ttf\\\");\\n  font-style: normal; }\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\nexports.locals = {\n\t\"site\": \"styles__site___2oekB\",\n\t\"navigate\": \"styles__navigate___1ciem\",\n\t\"content\": \"styles__content___MOkRb\"\n};\n\n//# sourceURL=webpack:///./src/client/styles.scss?./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/insertCss.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/lib/insertCss.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"babel-runtime/helpers/slicedToArray\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Isomorphic CSS style loader for Webpack\n *\n * Copyright © 2015-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nvar prefix = 's';\nvar inserted = {};\n\n// Base64 encoding and decoding - The \"Unicode Problem\"\n// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode('0x' + p1);\n  }));\n}\n\n/**\n * Remove style/link elements for specified node IDs\n * if they are no longer referenced by UI components.\n */\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(prefix + id);\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\n/**\n * Example:\n *   // Insert CSS styles object generated by `css-loader` into DOM\n *   var removeCss = insertCss([[1, 'body { color: red; }']]);\n *\n *   // Remove it from the DOM\n *   removeCss();\n */\nfunction insertCss(styles) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === undefined ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === undefined ? false : _ref$prepend;\n\n  var ids = [];\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n\n    var id = moduleId + '-' + i;\n\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n\n    var elem = document.getElementById(prefix + id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = prefix + id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n    if (sourceMap && typeof btoa === 'function') {\n      // skip IE9 and below, see http://caniuse.com/atob-btoa\n      cssText += '\\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';\n      cssText += '\\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/lib/insertCss.js?");

/***/ }),

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"babel-runtime/helpers/possibleConstructorReturn\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"babel-runtime/helpers/inherits\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactHelmet2 = _interopRequireDefault(_reactHelmet);\n\nvar _Home = __webpack_require__(/*! ./scenes/Home */ \"./src/client/scenes/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _About = __webpack_require__(/*! ./scenes/About */ \"./src/client/scenes/About/index.js\");\n\nvar _About2 = _interopRequireDefault(_About);\n\nvar _Navbar = __webpack_require__(/*! ./components/Navbar */ \"./src/client/components/Navbar/index.js\");\n\nvar _Navbar2 = _interopRequireDefault(_Navbar);\n\nvar _Content = __webpack_require__(/*! ./components/Content */ \"./src/client/components/Content/index.js\");\n\nvar _Content2 = _interopRequireDefault(_Content);\n\nvar _Sidebar = __webpack_require__(/*! ./components/Sidebar */ \"./src/client/components/Sidebar/index.js\");\n\nvar _Sidebar2 = _interopRequireDefault(_Sidebar);\n\nvar _Foot = __webpack_require__(/*! ./components/Foot */ \"./src/client/components/Foot/index.js\");\n\nvar _Foot2 = _interopRequireDefault(_Foot);\n\nvar _styles = __webpack_require__(/*! ./styles.scss */ \"./src/client/styles.scss\");\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _class = function (_React$Component) {\n    (0, _inherits3.default)(_class, _React$Component);\n\n    function _class() {\n        (0, _classCallCheck3.default)(this, _class);\n        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n    }\n\n    (0, _createClass3.default)(_class, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: _styles2.default.site },\n                _react2.default.createElement(_reactHelmet2.default, {\n                    htmlAttributes: { lang: \"en\", amp: undefined } // amp takes no value\n                    , titleTemplate: '%s | Rick Veloz',\n                    titleAttributes: { itemprop: \"name\", lang: \"en\" },\n                    meta: [{ name: \"description\", content: \"Server side rendering example\" }, { name: \"viewport\", content: \"width=device-width, initial-scale=1\" }]\n                }),\n                _react2.default.createElement(\n                    'div',\n                    { className: _styles2.default.navigate },\n                    _react2.default.createElement(\n                        'div',\n                        { className: _styles2.default.subnav },\n                        _react2.default.createElement(_Navbar2.default, null),\n                        _react2.default.createElement(_Sidebar2.default, null)\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: _styles2.default.content },\n                    _react2.default.createElement(\n                        _Content2.default,\n                        null,\n                        _react2.default.createElement(\n                            _reactRouterDom.Switch,\n                            null,\n                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render(props) {\n                                    return _react2.default.createElement(_Home2.default, props);\n                                } }),\n                            _react2.default.createElement(_reactRouterDom.Route, { path: '/about', render: function render(props) {\n                                    return _react2.default.createElement(_About2.default, props);\n                                } })\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n    return _class;\n}(_react2.default.Component);\n\nexports.default = _class;\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/components/Content/index.js":
/*!************************************************!*\
  !*** ./src/client/components/Content/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (props) {\n    var children = props.children;\n\n    return _react2.default.createElement(\n        'main',\n        null,\n        children\n    );\n};\n\n//# sourceURL=webpack:///./src/client/components/Content/index.js?");

/***/ }),

/***/ "./src/client/components/Foot/index.js":
/*!*********************************************!*\
  !*** ./src/client/components/Foot/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"babel-runtime/helpers/possibleConstructorReturn\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"babel-runtime/helpers/inherits\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _class = function (_React$Component) {\n    (0, _inherits3.default)(_class, _React$Component);\n\n    function _class() {\n        (0, _classCallCheck3.default)(this, _class);\n        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n    }\n\n    (0, _createClass3.default)(_class, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'footer',\n                null,\n                _react2.default.createElement(\n                    'span',\n                    null,\n                    'Rick Veloz Web Development'\n                )\n            );\n        }\n    }]);\n    return _class;\n}(_react2.default.Component);\n\nexports.default = _class;\n\n//# sourceURL=webpack:///./src/client/components/Foot/index.js?");

/***/ }),

/***/ "./src/client/components/Navbar/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/Navbar/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"babel-runtime/helpers/possibleConstructorReturn\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"babel-runtime/helpers/inherits\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styles = __webpack_require__(/*! ./styles.scss */ \"./src/client/components/Navbar/styles.scss\");\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _class = function (_React$Component) {\n    (0, _inherits3.default)(_class, _React$Component);\n\n    function _class() {\n        (0, _classCallCheck3.default)(this, _class);\n        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n    }\n\n    (0, _createClass3.default)(_class, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'header',\n                { className: _styles2.default.component },\n                _react2.default.createElement(\n                    'span',\n                    null,\n                    'Rick Veloz'\n                ),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement(\n                    'span',\n                    null,\n                    'Web Development'\n                )\n            );\n        }\n    }]);\n    return _class;\n}(_react2.default.Component);\n\nexports.default = _class;\n\n//# sourceURL=webpack:///./src/client/components/Navbar/index.js?");

/***/ }),

/***/ "./src/client/components/Navbar/styles.scss":
/*!**************************************************!*\
  !*** ./src/client/components/Navbar/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"./node_modules/css-loader/index.js??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/client/components/Navbar/styles.scss\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/client/components/Navbar/styles.scss?");

/***/ }),

/***/ "./src/client/components/Sidebar/index.js":
/*!************************************************!*\
  !*** ./src/client/components/Sidebar/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"babel-runtime/helpers/possibleConstructorReturn\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"babel-runtime/helpers/inherits\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _styles = __webpack_require__(/*! ./styles.scss */ \"./src/client/components/Sidebar/styles.scss\");\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _class = function (_React$Component) {\n    (0, _inherits3.default)(_class, _React$Component);\n\n    function _class() {\n        (0, _classCallCheck3.default)(this, _class);\n        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n    }\n\n    (0, _createClass3.default)(_class, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'aside',\n                { className: _styles2.default.component },\n                _react2.default.createElement(\n                    'nav',\n                    null,\n                    _react2.default.createElement(\n                        'ul',\n                        null,\n                        _react2.default.createElement(\n                            'li',\n                            null,\n                            _react2.default.createElement(\n                                _reactRouterDom.Link,\n                                { to: '/' },\n                                'Home'\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'li',\n                            null,\n                            _react2.default.createElement(\n                                _reactRouterDom.Link,\n                                { to: '/about' },\n                                'About'\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n    return _class;\n}(_react2.default.Component);\n\nexports.default = _class;\n\n//# sourceURL=webpack:///./src/client/components/Sidebar/index.js?");

/***/ }),

/***/ "./src/client/components/Sidebar/styles.scss":
/*!***************************************************!*\
  !*** ./src/client/components/Sidebar/styles.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"./node_modules/css-loader/index.js??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/client/components/Sidebar/styles.scss\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/client/components/Sidebar/styles.scss?");

/***/ }),

/***/ "./src/client/scenes/About/index.js":
/*!******************************************!*\
  !*** ./src/client/scenes/About/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"babel-runtime/helpers/possibleConstructorReturn\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"babel-runtime/helpers/inherits\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactHelmet2 = _interopRequireDefault(_reactHelmet);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _class = function (_React$Component) {\n    (0, _inherits3.default)(_class, _React$Component);\n\n    function _class() {\n        (0, _classCallCheck3.default)(this, _class);\n        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n    }\n\n    (0, _createClass3.default)(_class, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_reactHelmet2.default, {\n                    title: 'About'\n                }),\n                'Coming Soon'\n            );\n        }\n    }]);\n    return _class;\n}(_react2.default.Component);\n\nexports.default = _class;\n\n//# sourceURL=webpack:///./src/client/scenes/About/index.js?");

/***/ }),

/***/ "./src/client/scenes/Home/index.js":
/*!*****************************************!*\
  !*** ./src/client/scenes/Home/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"babel-runtime/helpers/possibleConstructorReturn\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"babel-runtime/helpers/inherits\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactHelmet2 = _interopRequireDefault(_reactHelmet);\n\nvar _styles = __webpack_require__(/*! ./styles.scss */ \"./src/client/scenes/Home/styles.scss\");\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _class = function (_React$Component) {\n    (0, _inherits3.default)(_class, _React$Component);\n\n    function _class() {\n        (0, _classCallCheck3.default)(this, _class);\n        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n    }\n\n    (0, _createClass3.default)(_class, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: _styles2.default.component },\n                _react2.default.createElement(_reactHelmet2.default, {\n                    title: 'Web Development'\n                }),\n                _react2.default.createElement(\n                    'section',\n                    null,\n                    _react2.default.createElement(\n                        'article',\n                        null,\n                        _react2.default.createElement(\n                            'div',\n                            { className: _styles2.default.intro },\n                            _react2.default.createElement(\n                                'header',\n                                null,\n                                _react2.default.createElement(\n                                    'h1',\n                                    null,\n                                    'Web Development'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                'p',\n                                null,\n                                'Hello, my name\\'s Rick. I\\'m a web developer from Chicago. I design, build, and operate web applications.'\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'div',\n                            { className: _styles2.default.contact },\n                            _react2.default.createElement(\n                                'p',\n                                null,\n                                _react2.default.createElement(\n                                    'span',\n                                    { className: _styles2.default.media },\n                                    'email '\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    { className: _styles2.default.slinks },\n                                    'rickvelozaa@gmail.com'\n                                ),\n                                _react2.default.createElement('br', null),\n                                _react2.default.createElement(\n                                    'span',\n                                    { className: _styles2.default.media },\n                                    'social media  '\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    { className: _styles2.default.slinks },\n                                    _react2.default.createElement(\n                                        'a',\n                                        { href: 'https://twitter.com/rickvlzaa' },\n                                        'twitter'\n                                    )\n                                ),\n                                _react2.default.createElement('br', null),\n                                _react2.default.createElement(\n                                    'span',\n                                    { className: _styles2.default.media },\n                                    'git '\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    { className: _styles2.default.slinks },\n                                    _react2.default.createElement(\n                                        'a',\n                                        { href: '' },\n                                        'github'\n                                    ),\n                                    ' ',\n                                    _react2.default.createElement(\n                                        'a',\n                                        { href: '' },\n                                        'gitlab'\n                                    )\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n    return _class;\n}(_react2.default.Component);\n\nexports.default = _class;\n\n//# sourceURL=webpack:///./src/client/scenes/Home/index.js?");

/***/ }),

/***/ "./src/client/scenes/Home/styles.scss":
/*!********************************************!*\
  !*** ./src/client/scenes/Home/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"./node_modules/css-loader/index.js??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/client/scenes/Home/styles.scss\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/client/scenes/Home/styles.scss?");

/***/ }),

/***/ "./src/client/styles.scss":
/*!********************************!*\
  !*** ./src/client/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"./node_modules/css-loader/index.js??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/client/styles.scss\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/client/styles.scss?");

/***/ }),

/***/ "./src/fonts/Karla/Karla-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/Karla/Karla-Regular.ttf ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fd3f938a23d57da8894c8aa0e85adf3f.ttf\";\n\n//# sourceURL=webpack:///./src/fonts/Karla/Karla-Regular.ttf?");

/***/ }),

/***/ "./src/server/controllers/index.js":
/*!*****************************************!*\
  !*** ./src/server/controllers/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"babel-runtime/helpers/asyncToGenerator\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nexports.sendAppPage = sendAppPage;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _standard = __webpack_require__(/*! ../views/standard */ \"./src/server/views/standard/index.js\");\n\nvar _standard2 = _interopRequireDefault(_standard);\n\nvar _loadJsonFile = __webpack_require__(/*! load-json-file */ \"load-json-file\");\n\nvar _loadJsonFile2 = _interopRequireDefault(_loadJsonFile);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction sendAppPage(Component) {\n    var _this = this;\n\n    return function () {\n        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {\n            var context, location, markup, helmet, manifest;\n            return _regenerator2.default.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            context = {};\n                            location = req.url;\n                            markup = (0, _server.renderToString)(_react2.default.createElement(\n                                _reactRouterDom.StaticRouter,\n                                { context: context, location: location },\n                                _react2.default.createElement(Component, null)\n                            ));\n                            helmet = _reactHelmet.Helmet.renderStatic();\n                            _context.next = 6;\n                            return (0, _loadJsonFile2.default)(_path2.default.resolve(__dirname, '../../../build', 'manifest.json'));\n\n                        case 6:\n                            manifest = _context.sent;\n\n\n                            res.status(200).send((0, _standard2.default)(markup, helmet, manifest));\n\n                        case 8:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, _this);\n        }));\n\n        return function (_x, _x2) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n}\n/* WEBPACK VAR INJECTION */}.call(this, \"src/server/controllers\"))\n\n//# sourceURL=webpack:///./src/server/controllers/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\nif (true) {\n    app.use(_express2.default.static(_path2.default.resolve(__dirname, '../../build', 'public')));\n    app.use((0, _morgan2.default)('dev'));\n}\n\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: false }));\napp.use((0, _cookieParser2.default)());\n\napp.use(\"*\", _routes2.default);\n\napp.listen(5000);\n/* WEBPACK VAR INJECTION */}.call(this, \"src/server\"))\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _controllers = __webpack_require__(/*! ../controllers */ \"./src/server/controllers/index.js\");\n\nvar _utils = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n\nvar _App = __webpack_require__(/*! ../../client/App */ \"./src/client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = (0, _express.Router)();\n\nrouter.use((0, _utils.asyncMiddleware)((0, _controllers.sendAppPage)(_App2.default)));\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/views/standard/index.js":
/*!********************************************!*\
  !*** ./src/server/views/standard/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction manifestToScripts(manifest) {\n    var scripts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['/vendors.js', '/app.js'];\n    var links = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['/app.css'];\n\n    return {\n        scripts: scripts.map(function (script) {\n            return '<script src=\"' + manifest[script] + '\" type=\"text/javascript\"></script>';\n        }).join('\\n'),\n        links: links.map(function (link) {\n            return '<link href=\"' + manifest[link] + '\" rel=\"stylesheet\"/>';\n        }).join('\\n')\n    };\n}\n\nexports.default = function (html, helmet, manifest) {\n    var _manifestToScripts = manifestToScripts(manifest),\n        scripts = _manifestToScripts.scripts,\n        links = _manifestToScripts.links;\n\n    return '\\n    <!DOCTYPE html>\\n    <html ' + helmet.htmlAttributes.toString() + '>\\n        <head>\\n            ' + helmet.base.toString() + '\\n            ' + helmet.title.toString() + '\\n            ' + helmet.meta.toString() + '\\n            ' + helmet.link.toString() + '\\n            ' + links + '\\n        </head>\\n        <body ' + helmet.bodyAttributes.toString() + '>\\n            <div id=\"react-root\">' + html + '</div>\\n            ' + scripts + '\\n        </body>\\n    </html>\\n    ';\n};\n\n//# sourceURL=webpack:///./src/server/views/standard/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar asyncMiddleware = exports.asyncMiddleware = function asyncMiddleware(fn) {\n    return function (req, res, next) {\n        fn(req, res, next).catch(next);\n    };\n};\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/createClass%22?");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/inherits%22?");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/regenerator%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "load-json-file":
/*!*********************************!*\
  !*** external "load-json-file" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"load-json-file\");\n\n//# sourceURL=webpack:///external_%22load-json-file%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });