(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lazy-load"] = factory();
	else
		root["lazy-load"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lazy-load.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lazy-load.js":
/*!**************************!*\
  !*** ./src/lazy-load.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { isElementInView } = __webpack_require__(/*! ./util */ \"./src/util.js\");\r\n\r\nclass LazyLaod {\r\n  /**\r\n   * 图片懒加载\r\n   *\r\n   * @param {HTMLImageElement} ele\r\n   * @param {string} imgUrl\r\n   */\r\n  lazyLoad (ele, imgUrl) {\r\n    const me = this;\r\n    window.addEventListener('load', function () {\r\n      if (me._shouldLoadImage(ele)) {\r\n        ele.src = imgUrl;\r\n      }\r\n    });\r\n    window.addEventListener('scroll', function () {\r\n      if (me._shouldLoadImage(ele)) {\r\n        ele.src = imgUrl;\r\n      }\r\n    });\r\n  }\r\n  /**\r\n   * 判断是否需要加载图片\r\n   *\r\n   * @param  {HTMLImageElement} ele\r\n   * @returns {boolean}\r\n   */\r\n  _shouldLoadImage (ele) {\r\n    return isElementInView(ele) && !ele.src;\r\n  }\r\n}\r\n\r\nfunction createLazyLoadInstance () {\r\n  return new LazyLaod();\r\n}\r\n\r\nmodule.exports = createLazyLoadInstance;\r\n\n\n//# sourceURL=webpack://lazy-load/./src/lazy-load.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 判断元素是否在 view 中\r\n *\r\n * @param  {Element} ele\r\n * @return {boolean}\r\n */\r\nfunction isElementInView (ele) {\r\n  const scroll = window.scrollY || window.pageYOffset; // 当前页面往下滚动了多少 px\r\n  /**\r\n   * https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect\r\n   * ele.getBoundingClientRect().top 表示元素顶部相对于当前视口的高度差\r\n   * 加上 scroll 就是指元素顶部离页面顶部的高度差\r\n   */\r\n  const boundsTop = ele.getBoundingClientRect().top + scroll;\r\n  const viewport = {\r\n    top: scroll,\r\n    bottom: scroll + window.innerHeight,\r\n  };\r\n  const bounds = {\r\n    top: boundsTop, // 元素顶部离页面顶部的高度差\r\n    buttom: boundsTop + ele.clientHeight, // 元素底部离页面顶部的高度差\r\n  };\r\n  return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) || // 元素下半部在 viewport 中\r\n    (bounds.top <= viewport.bottom && bounds.top >= viewport.top); // 元素上半部在 viewport 中\r\n}\r\n\r\nmodule.exports = {\r\n  isElementInView,\r\n};\r\n\n\n//# sourceURL=webpack://lazy-load/./src/util.js?");

/***/ })

/******/ });
});