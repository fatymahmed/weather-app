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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: getWeatherInCelsius */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeatherInCelsius\", function() { return getWeatherInCelsius; });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\nfunction getWeatherInCelsius(location){\n\t// generateNewImg(`https://api.giphy.com/v1/gifs/translate?api_key=Nuuvx3RmevVkmbyHlh7zU7fJqFSTOBCq&s=${document.getElementById('searchBox').value}`);\n\tgenerateNewImg(`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('searchBox').value}&APPID=e35c92eefa655c7d2e50f8101fc984ca`);\n\t// const result = await response.json();\n\t// console.log(result);\n}\n\nasync function generateNewImg(url) \n    {\n        const response = await fetch(url, { mode: 'cors'});\n        const result = await response.json();\n\t\t\t\tconst weatherInfo = result.main;\n\t\t\t\tconsole.log(weatherInfo);\n\t\t\t\tconst temp = weatherInfo.temp - 273.15;\n\t\t\t\tconst tempMin = weatherInfo.temp_min;\n\t\t\t\tconst tempMax = weatherInfo.temp_max;\n\t\t\t\tconst pressure = weatherInfo.pressure;\n\t\t\t\tconst humidity = weatherInfo.humidity;\n\t\t\t\tconsole.log(humidity);\n    }\n\ndocument.onload(_view__WEBPACK_IMPORTED_MODULE_0__[\"displaySearchBox\"]());\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: displaySearchBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displaySearchBox\", function() { return displaySearchBox; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst getCityName = () => {\n\tconst city = document.getElementById('searchBox').value;\n\tObject(_index__WEBPACK_IMPORTED_MODULE_0__[\"getWeatherInCelsius\"])(city);\n}\n\nconst displaySearchBox = () => {\n\tconst weatherInfo = document.getElementById('weatherInfo');\n\tconst searchBox = document.createElement('input');\n\tsearchBox.id = 'searchBox'\n\tsearchBox.setAttribute('placeholder', 'city');\n\tconst searchBtn = document.createElement('button');\n\tsearchBtn.innerHTML = 'check weather';\n\tweatherInfo.appendChild(searchBox);\n\tweatherInfo.append(searchBtn);\n\tsearchBtn.addEventListener('click', getCityName);\n}\n\n\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });