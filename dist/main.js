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
/*! exports provided: getWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeather\", function() { return getWeather; });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\nfunction getWeather(location, option){\n\tif (option ===1){\n\t\tgetWeatherInFahrenheit(`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('searchBox').value}&APPID=e35c92eefa655c7d2e50f8101fc984ca`);\n\t}\n\telse {\n\t\tgetWeatherInCelcius(`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('searchBox').value}&APPID=e35c92eefa655c7d2e50f8101fc984ca`);\n\t}\n}\n\nasync function getWeatherInCelcius(url)\n{\n    try{\n        const response = await fetch(url, { mode: 'cors'});\n        const result = await response.json();\n\t\t\t\tconst weatherInfo = result.main;\n\t\t\t\tconst temp = weatherInfo.temp - 273.15;\n\t\t\t\tconst tempMin = weatherInfo.temp_min - 273.15;\n\t\t\t\tconst tempMax = weatherInfo.temp_max - 273.15;\n\t\t\t\tconst pressure = weatherInfo.pressure;\n\t\t\t\tconst humidity = weatherInfo.humidity;\n\t\t\t\t_view__WEBPACK_IMPORTED_MODULE_0__[\"displayWeatherInfo\"](temp, tempMin , tempMax, pressure, humidity);\n\t\t\t}\t\n\t\t catch(err) {\n\t\t\talert('city not found'); \n\t\t\t}\n}\t\n\t\tasync function getWeatherInFahrenheit(url) \n    {\n\t\t\t\ttry{\n\t\t\t\t\tconst response = await fetch(url, { mode: 'cors'});\n\t\t\t\t\tconst result = await response.json();\n\t\t\t\t\tconst weatherInfo = result.main;\n\t\t\t\t\tconst temp = (weatherInfo.temp - 273.15) * 9/5 + 32;\n\t\t\t\t\tconst tempMin = (weatherInfo.temp_min - 273.15) * 9/5 + 32 ;\n\t\t\t\t\tconst tempMax = (weatherInfo.temp_max - 273.15) * 9/5 + 32 ;\n\t\t\t\t\tconst pressure = weatherInfo.pressure;\n\t\t\t\t\tconst humidity = weatherInfo.humidity;\n\t\t\t\t\t_view__WEBPACK_IMPORTED_MODULE_0__[\"displayWeatherInfo\"](temp, tempMin , tempMax, pressure, humidity);\n\t\t\t\t}\n\t\t\t catch(err) {\n\t\t\t\t\talert('city not found'); \n    \t}\t\n\t\t}\n\n\tdocument.onload(_view__WEBPACK_IMPORTED_MODULE_0__[\"displaySearchBox\"]());\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: displaySearchBox, displayWeatherInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displaySearchBox\", function() { return displaySearchBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayWeatherInfo\", function() { return displayWeatherInfo; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst getCityName = () => {\n\tconst city = document.getElementById('searchBox').value;\n\tif (document.getElementById('fahrenheitBtn').checked===true){\n\t\tObject(_index__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"])(city,1);\n\t}\n\telse {\n\t\tObject(_index__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"])(city,0);\n\t}\n}\n\nconst displaySearchBox = () => {\n\tconst weatherInfo = document.getElementById('weatherInfo');\n\tconst results = document.createElement('div');\n\tresults.id = 'results';\n\tresults.innerHTML = '';\n\tweatherInfo.innerHTML = `<h1>My weather app</h1>`;\n\tconst searchBox = document.createElement('input');\n\tconst searchBtn = document.createElement('button');\n\tconst radioBtn = document.createElement('div');\n\tconst fahrenheitBtn = document.createElement('input');\n\tconst celciusBtn = document.createElement('input');\n\tradioBtn.id = 'radioBtn';\n\tfahrenheitBtn.setAttribute('type', 'radio');\n\tfahrenheitBtn.id = 'fahrenheitBtn';\n\tcelciusBtn.setAttribute('type', 'radio');\n\tcelciusBtn.id = 'celciusBtn';\n\tfahrenheitBtn.setAttribute('name', 'tempType');\n\tconst F = document.createElement('span');\n\tF.innerHTML = 'F';\n\tconst C = document.createElement('span');\n\tC.innerHTML = 'C';\n\tF.id = 'F';\n\tC.id = 'C';\n\tcelciusBtn.setAttribute('name', 'tempType');\n\tsearchBox.id = 'searchBox'\n\tsearchBtn.id = 'searchBtn'\n\tsearchBox.setAttribute('placeholder', 'city');\n\tsearchBtn.innerHTML = 'check weather';\n\tradioBtn.appendChild(fahrenheitBtn);\n\tradioBtn.appendChild(F);\n\tradioBtn.appendChild(celciusBtn);\n\tradioBtn.appendChild(C);\n\tweatherInfo.appendChild(searchBox);\n\tweatherInfo.appendChild(radioBtn);\n\tweatherInfo.append(searchBtn);\n\tweatherInfo.appendChild(results);\n\tsearchBtn.addEventListener('click', getCityName);\n}\nconst displayWeatherInfo= (temp, tempMin , tempMax, pressure, humidity) => {\n\tconst results = document.getElementById('results');\n\tresults.innerHTML = `<h2>temperature: ${temp.toFixed(2)}</h2>`;\n\tresults.innerHTML += `<h3>min temperature: ${tempMin.toFixed(2)}</h3>`; \n\tresults.innerHTML += `<h3>max temperature: ${tempMax.toFixed(2)}</h3>`; \n\tresults.innerHTML += `<h2>pressure: ${pressure}hPa</h2>`; \n\tresults.innerHTML += `<h2>humidity: ${humidity}%</h2>`; \n\n}\n\n\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });