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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeather\", function() { return getWeather; });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\nconst getWeatherInCelcius = async (url) => {\n  try {\n    const response = await fetch(url, { mode: 'cors' });\n    const result = await response.json();\n    const mainweather = result.weather[0].main;\n    const weatherInfo = result.main;\n    const temp = weatherInfo.temp - 273.15;\n    const tempMin = weatherInfo.temp_min - 273.15;\n    const tempMax = weatherInfo.temp_max - 273.15;\n    const { pressure } = weatherInfo;\n    const { humidity } = weatherInfo;\n    _view__WEBPACK_IMPORTED_MODULE_0__[\"displayWeatherInfo\"](temp, tempMin, tempMax, pressure, humidity, 0, mainweather);\n  } catch (err) {\n    alert('city not found');\n  }\n};\n\nconst getWeatherInFahrenheit = async (url) => {\n  try {\n    const response = await fetch(url, { mode: 'cors' });\n    const result = await response.json();\n    const weatherInfo = result.main;\n    const temp = ((weatherInfo.temp - 273.15) * 9) / 5 + 32;\n    const tempMin = ((weatherInfo.temp_min - 273.15) * 9) / 5 + 32;\n    const tempMax = ((weatherInfo.temp_max - 273.15) * 9) / 5 + 32;\n    const { pressure } = weatherInfo;\n    const { humidity } = weatherInfo;\n    _view__WEBPACK_IMPORTED_MODULE_0__[\"displayWeatherInfo\"](temp, tempMin, tempMax, pressure, humidity, 1);\n  } catch (err) {\n    alert('city not found');\n  }\n};\n\nconst getWeather = (location, option) => {\n  if (option === 1) {\n    getWeatherInFahrenheit(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('searchBox').value}&APPID=e35c92eefa655c7d2e50f8101fc984ca`);\n  } else {\n    getWeatherInCelcius(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('searchBox').value}&APPID=e35c92eefa655c7d2e50f8101fc984ca`);\n  }\n};\ndocument.onload(_view__WEBPACK_IMPORTED_MODULE_0__[\"displaySearchBox\"]());\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: displaySearchBox, displayWeatherInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displaySearchBox\", function() { return displaySearchBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayWeatherInfo\", function() { return displayWeatherInfo; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst getCityName = () => {\n  const city = document.getElementById('searchBox').value;\n  if (document.getElementById('fahrenheitBtn').checked === true) {\n    Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"])(city, 1);\n  } else {\n    Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"])(city, 0);\n  }\n};\n\nconst displaySearchBox = () => {\n  const weatherInfo = document.getElementById('weatherInfo');\n  const results = document.createElement('div');\n  const imageBg = document.getElementById('imageBg');\n  const summary = document.createElement('div');\n  const locationDate = document.createElement('div');\n  locationDate.id = 'locationDate';\n  summary.id = 'summary';\n  summary.innerHTML = '';\n  locationDate.innerHTML = '';\n  imageBg.appendChild(summary);\n  imageBg.appendChild(locationDate);\n  results.id = 'results';\n  results.innerHTML = '';\n  weatherInfo.innerHTML = '<h1>My weather app</h1>';\n  const searchBox = document.createElement('input');\n  const searchBtn = document.createElement('button');\n  const radioBtn = document.createElement('div');\n  const fahrenheitBtn = document.createElement('input');\n  const celciusBtn = document.createElement('input');\n  radioBtn.id = 'radioBtn';\n  fahrenheitBtn.setAttribute('type', 'radio');\n  fahrenheitBtn.id = 'fahrenheitBtn';\n  celciusBtn.setAttribute('type', 'radio');\n  celciusBtn.id = 'celciusBtn';\n  fahrenheitBtn.setAttribute('name', 'tempType');\n  const F = document.createElement('span');\n  F.innerHTML = 'F';\n  const C = document.createElement('span');\n  C.innerHTML = 'C';\n  F.id = 'F';\n  C.id = 'C';\n  celciusBtn.setAttribute('name', 'tempType');\n  searchBox.id = 'searchBox';\n  searchBtn.id = 'searchBtn';\n  searchBox.setAttribute('placeholder', 'city');\n  searchBtn.innerHTML = 'check weather';\n  radioBtn.appendChild(fahrenheitBtn);\n  radioBtn.appendChild(F);\n  radioBtn.appendChild(celciusBtn);\n  radioBtn.appendChild(C);\n  weatherInfo.appendChild(searchBox);\n  weatherInfo.appendChild(radioBtn);\n  weatherInfo.appendChild(searchBtn);\n  weatherInfo.appendChild(results);\n  searchBtn.addEventListener('click', getCityName);\n};\nconst displayWeatherInfo = (temp, tempMin, tempMax, pressure, humidity, option, weather) => {\n  const image = document.getElementById('body');\n  const city = document.getElementById('searchBox').value;\n  const results = document.getElementById('results');\n  const summary = document.getElementById('summary');\n  const locationDate = document.getElementById('locationDate');\n  summary.innerHTML = `<h1> ${temp.toFixed(2)} &deg </h1>`;\n  locationDate.innerHTML = `<h2>${city}</h2>`;\n  const date = new Date();\n  locationDate.innerHTML += `<p>${date.toDateString()}</p>`;\n  let unit = 'fahrenheit';\n  if (option === 0) {\n    unit = 'celcius';\n  }\n  results.innerHTML = `<h2>temperature: ${temp.toFixed(2)} &deg ${unit}</h2>`;\n  results.innerHTML += `<h3>min temperature: ${tempMin.toFixed(2)} &deg ${unit}</h3>`;\n  results.innerHTML += `<h3>max temperature: ${tempMax.toFixed(2)} &deg ${unit}</h3>`;\n  results.innerHTML += `<h2>pressure: ${pressure}hPa</h2>`;\n  results.innerHTML += `<h2>humidity: ${humidity}%</h2>`;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });