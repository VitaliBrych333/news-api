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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/components/api.js":
/*!******************************!*\
  !*** ./js/components/api.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst API = exports.API = '14e1a857dcdb4a0ebdaf593042b1ab27';\n\n//# sourceURL=webpack:///./js/components/api.js?");

/***/ }),

/***/ "./js/components/createButtons.js":
/*!****************************************!*\
  !*** ./js/components/createButtons.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.creteButtonSwowLastArticles = creteButtonSwowLastArticles;\nexports.createButtonNext = createButtonNext;\nexports.createButtonPrev = createButtonPrev;\n\nvar _showArticles = __webpack_require__(/*! ./showArticles */ \"./js/components/showArticles.js\");\n\nfunction creteButtonSwowLastArticles() {\n  const newButtonLast = document.createElement('button');\n  newButtonLast.id = 'last';\n  newButtonLast.innerHTML = 'Show 10 last';\n  newButtonLast.addEventListener('click', _showArticles.showLastArticles);\n  document.querySelector('#button').appendChild(newButtonLast);\n}\n\nfunction createButtonNext() {\n  const newButtonNext = document.createElement('button');\n  newButtonNext.id = 'next';\n  newButtonNext.innerHTML = 'Next 10';\n  newButtonNext.addEventListener('click', _showArticles.showNextArticles);\n  document.querySelector('#button').insertBefore(newButtonNext, document.querySelector('#last'));\n}\n\nfunction createButtonPrev() {\n  const prevButtonNext = document.createElement('button');\n  prevButtonNext.id = 'prev';\n  prevButtonNext.innerHTML = 'Previous 10';\n  prevButtonNext.addEventListener('click', _showArticles.showPrevArticles);\n  document.querySelector('#button').insertBefore(prevButtonNext, document.querySelector('#next'));\n}\n\n//# sourceURL=webpack:///./js/components/createButtons.js?");

/***/ }),

/***/ "./js/components/drawArticles.js":
/*!***************************************!*\
  !*** ./js/components/drawArticles.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = drawArticles;\n\nvar _createButtons = __webpack_require__(/*! ./createButtons */ \"./js/components/createButtons.js\");\n\nfunction drawArticles(articles, startNum, endNum) {\n  let length = articles.length;\n\n  if (!document.querySelector('#last')) {\n    (0, _createButtons.creteButtonSwowLastArticles)();\n  }\n\n  if (length > 10 && !document.querySelector('#next') && endNum !== length) {\n    (0, _createButtons.createButtonNext)();\n  }\n\n  document.querySelector('.articles').innerHTML = '';\n  articles.slice(startNum, endNum).forEach(item => {\n    const newDiv = document.createElement('div');\n    newDiv.innerHTML = `<div>\n              <p>Author: ${item.author}</p>\n              <p>Title: ${item.title}</p>\n              <p>Content: ${item.content}</p>\n              <p>Description: ${item.description}</p>\n              <p>Date: ${item.publishedAt.slice(0, 10)} ${item.publishedAt.slice(11, 19)}</p>\n              <p>Source: <a href='${item.url}'> Read more...</a></p>\n              <p>Link on image: <a href='${item.urlToImage}'> please click</a><p>\n            </div>`;\n    document.querySelector('.articles').appendChild(newDiv);\n  });\n}\n\n//# sourceURL=webpack:///./js/components/drawArticles.js?");

/***/ }),

/***/ "./js/components/search.js":
/*!*********************************!*\
  !*** ./js/components/search.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = search;\n\nvar _api = __webpack_require__(/*! ./api */ \"./js/components/api.js\");\n\nasync function search() {\n  document.querySelector('#button').innerHTML = '';\n  const e = document.querySelector('#sources');\n  const valueResource = e.options[e.selectedIndex].value;\n  const date = new Date().getDate();\n  const month = new Date().getMonth();\n  const year = new Date().getFullYear();\n  const currentDate = `${year}-${month}-${date}`;\n  const responseNews = await fetch(`https://newsapi.org/v2/everything?sources=${valueResource}&from=${currentDate}&to=${currentDate}&pageSize=100&sortBy=popularity&apiKey=${_api.API}`);\n  const jsonNews = await responseNews.json();\n  return jsonNews.articles;\n}\n\n//# sourceURL=webpack:///./js/components/search.js?");

/***/ }),

/***/ "./js/components/setSources.js":
/*!*************************************!*\
  !*** ./js/components/setSources.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = setSources;\n\nvar _search = __webpack_require__(/*! ./search */ \"./js/components/search.js\");\n\nvar _search2 = _interopRequireDefault(_search);\n\nvar _drawArticles = __webpack_require__(/*! ./drawArticles */ \"./js/components/drawArticles.js\");\n\nvar _drawArticles2 = _interopRequireDefault(_drawArticles);\n\nvar _showArticles = __webpack_require__(/*! ./showArticles */ \"./js/components/showArticles.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction drawFirstArticles() {\n  (0, _search2.default)().then(res => {\n    (0, _drawArticles2.default)(res, 0, 10);\n    (0, _showArticles.setCurrentData)(res, 0, 10);\n  }, err => {\n    console.log(err);\n  });\n}\n\nfunction setSources(sources) {\n  document.querySelector('#sources').innerHTML = '';\n  sources.forEach(item => {\n    const newOption = document.createElement('option');\n    newOption.innerHTML = `${item.id}`;\n    document.querySelector('#sources').appendChild(newOption);\n  });\n  document.querySelector('#sources').disabled = false;\n  document.querySelector('#search').disabled = false;\n  document.querySelector('#search').addEventListener('click', drawFirstArticles);\n}\n\n//# sourceURL=webpack:///./js/components/setSources.js?");

/***/ }),

/***/ "./js/components/showArticles.js":
/*!***************************************!*\
  !*** ./js/components/showArticles.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setCurrentData = setCurrentData;\nexports.showPrevArticles = showPrevArticles;\nexports.showNextArticles = showNextArticles;\nexports.showLastArticles = showLastArticles;\n\nvar _createButtons = __webpack_require__(/*! ./createButtons */ \"./js/components/createButtons.js\");\n\nvar _drawArticles = __webpack_require__(/*! ./drawArticles */ \"./js/components/drawArticles.js\");\n\nvar _drawArticles2 = _interopRequireDefault(_drawArticles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nlet startNum;\nlet endNum;\nlet articles;\n\nfunction setCurrentData(data, start, end) {\n  startNum = start;\n  endNum = end;\n  articles = data;\n}\n\nfunction showPrevArticles() {\n  if (startNum - 10 <= 0) {\n    startNum = 0;\n    document.querySelector('#prev').remove();\n  } else {\n    startNum -= 10;\n  }\n\n  if (!document.querySelector('#next')) {\n    (0, _createButtons.createButtonNext)();\n  }\n\n  endNum -= 10;\n  (0, _drawArticles2.default)(articles, startNum, endNum);\n}\n\nfunction showNextArticles() {\n  const length = articles.length;\n  startNum += 10;\n\n  if (length > endNum + 10) {\n    endNum += 10;\n  } else {\n    endNum = length;\n    document.querySelector('#next').remove();\n  }\n\n  if (!document.querySelector('#prev')) {\n    (0, _createButtons.createButtonPrev)();\n  }\n\n  (0, _drawArticles2.default)(articles, startNum, endNum);\n}\n\nfunction showLastArticles() {\n  articles = articles.sort((a, b) => {\n    a = new Date(a.publishedAt);\n    b = new Date(b.publishedAt);\n    return a > b ? -1 : a < b ? 1 : 0;\n  });\n  startNum = 0;\n  endNum = 10;\n  (0, _drawArticles2.default)(articles, startNum, endNum);\n  document.querySelector('#button').innerHTML = '';\n}\n\n//# sourceURL=webpack:///./js/components/showArticles.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _api = __webpack_require__(/*! ./components/api */ \"./js/components/api.js\");\n\nvar _setSources = __webpack_require__(/*! ./components/setSources */ \"./js/components/setSources.js\");\n\nvar _setSources2 = _interopRequireDefault(_setSources);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function getSources() {\n  document.querySelector('#search').disabled = true;\n  const language = document.querySelector('input[name=\"language\"]:checked').value;\n  const response = await fetch(`https://newsapi.org/v2/sources?language=${language}&apiKey=${_api.API}`);\n  const myJson = await response.json();\n  const sources = myJson.sources;\n  (0, _setSources2.default)(sources);\n}\n\nwindow.onload = () => {\n  document.querySelectorAll('input[name=\"language\"]').forEach(item => item.addEventListener('click', getSources));\n};\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });