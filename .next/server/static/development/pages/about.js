module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/utilities/Footer/Footer.js":
/*!***********************************************!*\
  !*** ./components/utilities/Footer/Footer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.css */ \"./components/utilities/Footer/Footer.module.css\");\n/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Footer = () => {\n  return __jsx(\"footer\", {\n    className: \"site-footer\"\n  }, __jsx(\"div\", {\n    className: \"container\"\n  }, __jsx(\"div\", {\n    className: \"row\"\n  }, __jsx(\"div\", {\n    className: \"col-sm-12 col-md-6\"\n  }, __jsx(\"h6\", null, \"About\"), __jsx(\"p\", {\n    className: \"text-justify\"\n  }, \"\\u09A8 - \\u09A8\\u09A4\\u09C1\\u09A8 \\u099A\\u09BF\\u09A8\\u09CD\\u09A4\\u09BE\\u09F0 \\u0996\\u09CB\\u09F0\\u09BE\\u0995 \\u09A6\\u09BF\\u09DF\\u09BE\\u09F0 \\u098F\\u0995 \\u09AA\\u09CD\\u09F0\\u09AF\\u09BC\\u09BE\\u09B8 | \\u09B2\\u0995\\u09CD\\u09B7\\u09C0\\u09AE\\u09AA\\u09C1\\u09F0 \\u099C\\u09BF\\u09B2\\u09BE\\u09F0 \\u099B\\u09BE\\u09A4\\u09CD\\u09F0 \\u099B\\u09BE\\u09A4\\u09CD\\u09F0\\u09C0 \\u09B8\\u0995\\u09B2\\u09F0 \\u09AE\\u09BE\\u099C\\u09A4 \\u0996\\u09C1\\u09AC\\u09C7\\u0987 \\u099C\\u09A8\\u09AA\\u09CD\\u09F0\\u09BF\\u09AF\\u09BC \\u09AE\\u09BE\\u09B9\\u09C7\\u0995\\u09C0\\u09DF\\u09BE \\u0986\\u09B2\\u09CB\\u099A\\u09A8\\u09C0 '\\u09A8' \\u098F\\u09A4\\u09BF\\u09DF\\u09BE \\u09A8\\u09A4\\u09C1\\u09A8 \\u09F0\\u09C2\\u09AA\\u09A4 | \\u0998\\u09F0\\u09A4\\u09C7 \\u09AC\\u09B9\\u09BF \\u0989\\u09AA\\u09AD\\u09CB\\u0997 \\u0995\\u09F0\\u09BF\\u09AC \\u09AA\\u09F0\\u09BE\\u0995\\u09C8 \\u098F\\u09A4\\u09BF\\u09DF\\u09BE \\u0985\\u09A8\\u09B2\\u09BE\\u0987\\u09A8 \\u0989\\u09AA\\u09B2\\u09AC\\u09CD\\u09A7 \\u0986\\u09AA\\u09CB\\u09A8\\u09BE\\u09F0 \\u09AA\\u09CD\\u09F0\\u09BF\\u09AF\\u09BC \\u0986\\u09B2\\u09CB\\u099A\\u09A8\\u09C0 '\\u09A8' | \")), __jsx(\"div\", {\n    className: \"col-xs-6 col-md-3\"\n  }, __jsx(\"h6\", null, \"Quick Links\"), __jsx(\"ul\", {\n    className: \"footer-links\"\n  }, __jsx(\"li\", null, __jsx(\"a\", {\n    href: \"/\"\n  }, \"Home\")), __jsx(\"li\", null, __jsx(\"a\", {\n    href: \"/about\"\n  }, \"Our team\")), __jsx(\"li\", null, __jsx(\"a\", {\n    href: \"/blog\"\n  }, \"Blog\")))), __jsx(\"div\", {\n    className: \"col-xs-6 col-md-3\"\n  }, __jsx(\"h6\", null, \"Contact Us\"), __jsx(\"ul\", {\n    className: \"footer-links\"\n  }, __jsx(\"li\", null, \"Mail us at \", __jsx(\"a\", {\n    href: \"mailto:thenaanlp@gmail.com\"\n  }, \"THE NAA\"))))), __jsx(\"hr\", null)), __jsx(\"div\", {\n    className: \"container\"\n  }, __jsx(\"div\", {\n    className: \"row\"\n  }, __jsx(\"div\", {\n    className: \"col-md-8 col-sm-6 col-xs-12\"\n  }, __jsx(\"p\", {\n    className: \"copyright-text\"\n  }, \"Copyright \\xA9 2020 All Rights Reserved by\", __jsx(\"a\", {\n    href: \"/\"\n  }, \" The NAA\"), \".\")), __jsx(\"div\", {\n    className: \"col-md-4 col-sm-6 col-xs-12\"\n  }, __jsx(\"ul\", {\n    className: \"social-icons\"\n  }, __jsx(\"li\", null, __jsx(\"a\", {\n    className: \"facebook\",\n    href: \"/\"\n  }, __jsx(\"i\", {\n    className: \"fa fa-facebook\"\n  }))), __jsx(\"li\", null, __jsx(\"a\", {\n    className: \"twitter\",\n    href: \"/\"\n  }, __jsx(\"i\", {\n    className: \"fa fa-twitter\"\n  }))), __jsx(\"li\", null, __jsx(\"a\", {\n    className: \"dribbble\",\n    href: \"/\"\n  }, __jsx(\"i\", {\n    className: \"fa fa-dribbble\"\n  }))), __jsx(\"li\", null, __jsx(\"a\", {\n    className: \"linkedin\",\n    href: \"/\"\n  }, __jsx(\"i\", {\n    className: \"fa fa-linkedin\"\n  }))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3V0aWxpdGllcy9Gb290ZXIvRm9vdGVyLmpzPzdhNDgiXSwibmFtZXMiOlsiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFNBQ0k7QUFBUSxhQUFTLEVBQUM7QUFBbEIsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSSwwQkFESixFQUVJO0FBQUcsYUFBUyxFQUFDO0FBQWIsaWdDQUZKLENBREosRUFNSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0ksZ0NBREosRUFFSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0ksa0JBQUk7QUFBRyxRQUFJLEVBQUM7QUFBUixZQUFKLENBREosRUFFSSxrQkFBSTtBQUFHLFFBQUksRUFBQztBQUFSLGdCQUFKLENBRkosRUFHSSxrQkFBSTtBQUFHLFFBQUksRUFBQztBQUFSLFlBQUosQ0FISixDQUZKLENBTkosRUFjSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0ksK0JBREosRUFFSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0ksaUNBQWU7QUFBRyxRQUFJLEVBQUM7QUFBUixlQUFmLENBREosQ0FGSixDQWRKLENBREosRUFzQkksaUJBdEJKLENBREosRUF5Qkk7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBRyxhQUFTLEVBQUM7QUFBYixtREFDWDtBQUFHLFFBQUksRUFBQztBQUFSLGdCQURXLE1BREosQ0FESixFQU9JO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0ksa0JBQUk7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUF3QixRQUFJLEVBQUM7QUFBN0IsS0FBaUM7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUFqQyxDQUFKLENBREosRUFFSSxrQkFBSTtBQUFHLGFBQVMsRUFBQyxTQUFiO0FBQXVCLFFBQUksRUFBQztBQUE1QixLQUFnQztBQUFHLGFBQVMsRUFBQztBQUFiLElBQWhDLENBQUosQ0FGSixFQUdJLGtCQUFJO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBd0IsUUFBSSxFQUFDO0FBQTdCLEtBQWlDO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFBakMsQ0FBSixDQUhKLEVBSUksa0JBQUk7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUF3QixRQUFJLEVBQUM7QUFBN0IsS0FBaUM7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUFqQyxDQUFKLENBSkosQ0FESixDQVBKLENBREosQ0F6QkosQ0FESjtBQThDSCxDQS9DRDs7QUFpRGVBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91dGlsaXRpZXMvRm9vdGVyL0Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vRm9vdGVyLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJzaXRlLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkFib3V0PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiPuCmqCAtIOCmqOCmpOCngeCmqCDgpprgpr/gpqjgp43gpqTgpr7gp7Ag4KaW4KeL4Kew4Ka+4KaVIOCmpuCmv+Cnn+CmvuCnsCDgpo/gppUg4Kaq4KeN4Kew4Kav4Ka84Ka+4Ka4IHwg4Kay4KaV4KeN4Ka34KeA4Kau4Kaq4KeB4KewIOCmnOCmv+CmsuCmvuCnsCDgppvgpr7gpqTgp43gp7Ag4Kab4Ka+4Kak4KeN4Kew4KeAIOCmuOCmleCmsuCnsCDgpq7gpr7gppzgpqQg4KaW4KeB4Kas4KeH4KaHIOCmnOCmqOCmquCnjeCnsOCmv+Cmr+CmvCDgpq7gpr7gprngp4fgppXgp4Dgp5/gpr4g4KaG4Kay4KeL4Kaa4Kao4KeAICfgpqgnIOCmj+CmpOCmv+Cnn+CmviDgpqjgpqTgp4Hgpqgg4Kew4KeC4Kaq4KakIHwg4KaY4Kew4Kak4KeHIOCmrOCmueCmvyDgpongpqrgpq3gp4vgppcg4KaV4Kew4Ka/4KasIOCmquCnsOCmvuCmleCniCDgpo/gpqTgpr/gp5/gpr4g4KaF4Kao4Kay4Ka+4KaH4KaoIOCmieCmquCmsuCmrOCnjeCmpyDgpobgpqrgp4vgpqjgpr7gp7Ag4Kaq4KeN4Kew4Ka/4Kav4Ka8IOCmhuCmsuCni+CmmuCmqOCngCAn4KaoJyB8IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlF1aWNrIExpbmtzPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvYWJvdXRcIj5PdXIgdGVhbTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2Jsb2dcIj5CbG9nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkNvbnRhY3QgVXM8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlci1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NYWlsIHVzIGF0IDxhIGhyZWY9XCJtYWlsdG86dGhlbmFhbmxwQGdtYWlsLmNvbVwiPlRIRSBOQUE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggY29sLXNtLTYgY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3B5cmlnaHQtdGV4dFwiPkNvcHlyaWdodCAmY29weTsgMjAyMCBBbGwgUmlnaHRzIFJlc2VydmVkIGJ5XG4gICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj4gVGhlIE5BQTwvYT4uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1zbS02IGNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJmYWNlYm9va1wiIGhyZWY9XCIvXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmFjZWJvb2tcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cInR3aXR0ZXJcIiBocmVmPVwiL1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyaWJiYmxlXCIgaHJlZj1cIi9cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1kcmliYmJsZVwiPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibGlua2VkaW5cIiBocmVmPVwiL1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/utilities/Footer/Footer.js\n");

/***/ }),

/***/ "./components/utilities/Footer/Footer.module.css":
/*!*******************************************************!*\
  !*** ./components/utilities/Footer/Footer.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdXRpbGl0aWVzL0Zvb3Rlci9Gb290ZXIubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/utilities/Footer/Footer.module.css\n");

/***/ }),

/***/ "./components/utilities/Navbar/Navbar.js":
/*!***********************************************!*\
  !*** ./components/utilities/Navbar/Navbar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst myNavbar = props => {\n  const {\n    location\n  } = props;\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"], {\n    bg: \"light\",\n    variant: \"light\",\n    expand: \"lg\"\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Brand, {\n    href: \"/\"\n  }, __jsx(\"img\", {\n    src: `${__webpack_require__(/*! ../../../public/images/thenaalogo.png */ \"./public/images/thenaalogo.png\")}`,\n    height: \"40\",\n    width: \"70\"\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Toggle, {\n    \"aria-controls\": \"basic-navbar-nav\"\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Collapse, {\n    id: \"basic-navbar-nav\"\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"], {\n    className: \"ml-auto\",\n    activeKey: router.pathname\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n    href: \"/\"\n  }, \"Home\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n    href: \"/about\"\n  }, \"About\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n    href: \"/blog\"\n  }, \"Blog\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (myNavbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3V0aWxpdGllcy9OYXZiYXIvTmF2YmFyLmpzP2IxNTMiXSwibmFtZXMiOlsibXlOYXZiYXIiLCJwcm9wcyIsImxvY2F0aW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwicmVxdWlyZSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUlDLEtBQUQsSUFBVztBQUN4QixRQUFNO0FBQUVDO0FBQUYsTUFBZUQsS0FBckI7QUFDQSxRQUFNRSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsU0FDSSxNQUFDLHNEQUFEO0FBQVEsTUFBRSxFQUFDLE9BQVg7QUFBbUIsV0FBTyxFQUFDLE9BQTNCO0FBQW1DLFVBQU0sRUFBQztBQUExQyxLQUNJLE1BQUMsc0RBQUQsQ0FBUSxLQUFSO0FBQWMsUUFBSSxFQUFDO0FBQW5CLEtBQXVCO0FBQUssT0FBRyxFQUFHLEdBQUVDLG1CQUFPLENBQUMsNkVBQUQsQ0FBMEMsRUFBOUQ7QUFBaUUsVUFBTSxFQUFDLElBQXhFO0FBQTZFLFNBQUssRUFBQztBQUFuRixJQUF2QixDQURKLEVBRUksTUFBQyxzREFBRCxDQUFRLE1BQVI7QUFBZSxxQkFBYztBQUE3QixJQUZKLEVBR0ksTUFBQyxzREFBRCxDQUFRLFFBQVI7QUFBaUIsTUFBRSxFQUFDO0FBQXBCLEtBQ0ksTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQXlCLGFBQVMsRUFBRUYsTUFBTSxDQUFDRztBQUEzQyxLQUNJLE1BQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsUUFBSSxFQUFDO0FBQWYsWUFESixFQUVJLE1BQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsUUFBSSxFQUFDO0FBQWYsYUFGSixFQUdJLE1BQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsUUFBSSxFQUFDO0FBQWYsWUFISixDQURKLENBSEosQ0FESjtBQWFILENBaEJEOztBQWtCZU4sdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3V0aWxpdGllcy9OYXZiYXIvTmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdiwgTmF2YmFyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBteU5hdmJhciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgbG9jYXRpb24gfSA9IHByb3BzO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5hdmJhciBiZz1cImxpZ2h0XCIgdmFyaWFudD1cImxpZ2h0XCIgZXhwYW5kPVwibGdcIj5cbiAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj48aW1nIHNyYz17YCR7cmVxdWlyZShcIi4uLy4uLy4uL3B1YmxpYy9pbWFnZXMvdGhlbmFhbG9nby5wbmdcIil9YH0gaGVpZ2h0PSc0MCcgd2lkdGg9JzcwJyAvPjwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIiBhY3RpdmVLZXk9e3JvdXRlci5wYXRobmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL1wiPkhvbWU8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvYmxvZ1wiPkJsb2c8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgIDwvTmF2YmFyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG15TmF2YmFyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/utilities/Navbar/Navbar.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_styles_About_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/About.module.css */ \"./public/styles/About.module.css\");\n/* harmony import */ var _public_styles_About_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_About_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_utilities_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utilities/Footer/Footer */ \"./components/utilities/Footer/Footer.js\");\n/* harmony import */ var _components_utilities_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/utilities/Navbar/Navbar */ \"./components/utilities/Navbar/Navbar.js\");\n/* harmony import */ var _public_styles_Editor_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/styles/Editor.css */ \"./public/styles/Editor.css\");\n/* harmony import */ var _public_styles_Editor_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_styles_Editor_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst Editor = props => {\n  return __jsx(\"figure\", {\n    className: \"snip1515\"\n  }, __jsx(\"div\", {\n    className: \"profile-image\"\n  }, __jsx(\"img\", {\n    src: props.image,\n    alt: \"editor\",\n    className: \"teamimg\"\n  })), __jsx(\"figcaption\", null, __jsx(\"h3\", null, props.name), __jsx(\"h4\", null, props.role)));\n};\n\nconst About = () => {\n  return __jsx(\"section\", {\n    className: _public_styles_About_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.texture\n  }, __jsx(_components_utilities_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    fluid: true,\n    className: _public_styles_About_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bgabout\n  }), __jsx(\"h3\", {\n    className: \"text-center thedteam my-5\"\n  }, __jsx(\"hr\", {\n    className: \"dos\"\n  }), \"Message From the Editor-In-Chief\", __jsx(\"hr\", {\n    className: \"dos\"\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    className: _public_styles_About_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.editorcont\n  }, __jsx(\"div\", {\n    className: _public_styles_About_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.editorialImage\n  }), __jsx(\"div\", {\n    className: _public_styles_About_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.desc\n  }, __jsx(\"h4\", null, \"\\u099C\\u09BF\\u09A4\\u09C1\\u09AE\\u09A3\\u09BF \\u09A8\\u09C7\\u0993\\u0997\"), __jsx(\"h6\", null, \"\\u09AE\\u09C1\\u0996\\u09CD\\u09AF \\u09B8\\u09AE\\u09CD\\u09AA\\u09BE\\u09A6\\u0995\"), __jsx(\"blockquote\", null, __jsx(\"i\", null, \"\\u0995\\u09F0\\u2019\\u09A8\\u09BE \\u09AE\\u09B9\\u09BE\\u09AE\\u09BE\\u09F0\\u09C0\\u09DF\\u09C7 \\u09AA\\u09C3\\u09A5\\u09BF\\u09F1\\u09C0\\u09B2\\u09C8 \\u09A4\\u09BE\\u09CE\\u0995\\u09CD\\u09B7\\u09A3\\u09BF\\u0995 \\u09AA\\u09F0\\u09BF\\u09AC\\u09F0\\u09CD\\u09A4\\u09A8 \\u0986\\u09A8\\u09BF\\u09B2\\u09C7 \\u09F7 \\u09B8\\u09B2\\u09A8\\u09BF \\u0995\\u09F0\\u09BF \\u09A6\\u09BF\\u09B2\\u09C7 \\u09AE\\u09BE\\u09A8\\u09C1\\u09B9\\u09F0 \\u099C\\u09C0\\u09F1\\u09A8 \\u09A7\\u09BE\\u09F0\\u09BE \\u09F7 \\u098F\\u0987 \\u09B8\\u09AE\\u09DF \\u09AA\\u09CD\\u09F0\\u09A4\\u09CD\\u09AF\\u09BE\\u09B9\\u09CD\\u09AC\\u09BE\\u09A8\\u09C7\\u09F0\\u09C7 \\u09AD\\u09F0\\u09BE \\u09F7\\u098F\\u0987 \\u09B8\\u09AE\\u09DF\\u09F0 \\u0993\\u09AA\\u09F0\\u09A4 \\u09B2\\u09BE\\u09B9\\u09C7 \\u0997\\u099C\\u09BF \\u0989\\u09A0\\u09BE \\u09AE\\u09BE\\u09A8\\u09C1\\u09B9\\u09F0 \\u09AC\\u09F0\\u09CD\\u09A4\\u09AE\\u09BE\\u09A8 \\u0986\\u09F0\\u09C1 \\u09AD\\u09AC\\u09BF\\u09B7\\u09CD\\u09AF\\u09AC\\u09CB\\u09F0\\u0995\\u09CB \\u09B2\\u09C8 \\u09B8\\u09CD\\u09AA\\u09B7\\u09CD\\u099F \\u09F0\\u09C7\\u0996\\u09BE \\u0985\\u0982\\u0995\\u09A8 \\u0995\\u09F0\\u09BE \\u0985\\u09B8\\u09AE\\u09CD\\u09AD\\u09F1 \\u09AA\\u09CD\\u09F0\\u09BE\\u09DF \\u09F7 \\u09B8\\u09CC \\u09B8\\u09BF\\u09A6\\u09A8\\u09BE \\u09B2\\u09C8\\u0995\\u09C7 \\u09AC\\u09BE\\u09A4\\u09F0\\u09BF \\u0995\\u09BE\\u0995\\u09A4 ,\\u0986\\u09B2\\u09CB\\u099A\\u09A8\\u09C0\\u09F0 \\u0985\\u09F1\\u09BF\\u09B9\\u09A8\\u09C7 \\u099C\\u09C0\\u09DF\\u09BE\\u0987 \\u09A5\\u09BE\\u0995\\u09BF\\u09AC \\u09A8\\u09CB\\u09F1\\u09F0\\u09BE \\u09AA\\u09BE\\u09A0\\u0995 \\u09B8\\u09AE\\u09BE\\u099C\\u09F0 \\u099C\\u09CD\\u099E\\u09BE\\u09A8 \\u0986\\u09F0\\u09C1 \\u09A4\\u09A5\\u09CD\\u09AF \\u0985\\u09B9\\u09F0\\u09A3\\u09F0 \\u0989\\u09CE\\u09B8 \\u09B9\\u09C8 \\u09AA\\u09F0\\u09BF\\u09B2 \\u09A1\\u09BF\\u099C\\u09BF\\u099F\\u09C7\\u09B2 \\u09AE\\u09BE\\u09A7\\u09CD\\u09AF\\u09AE \\u09F7 \\u0985\\u09B8\\u09AE\\u09F0 \\u0995\\u09C7\\u0987\\u09AC\\u09BE\\u0996\\u09A8\\u09CB \\u09AA\\u09CD\\u09F0\\u09A4\\u09BF\\u09B7\\u09CD\\u09A0\\u09BF\\u09A4 \\u0986\\u09B2\\u09CB\\u099A\\u09A8\\u09C0\\u09DF\\u09C7 \\u099B\\u09AA\\u09BE \\u0986\\u0996\\u09F0\\u09F0 \\u09AE\\u09C1\\u09A6\\u09CD\\u09F0\\u09A3 \\u09AC\\u09A8\\u09CD\\u09A7 \\u0995\\u09F0\\u09BF \\u09F0\\u09BE\\u0996\\u09BF\\u09AC \\u09B2\\u0997\\u09BE \\u09B9\\u09C8\\u099B\\u09C7 \\u09F7 \\u09AA\\u09CD\\u09F0\\u09BF\\u09A8\\u09CD\\u099F\\u0982 \\u09AA\\u09CD\\u09F0\\u09C7\\u099B\\u09AC\\u09CB\\u09F0\\u09F0 \\u0985\\u09F1\\u09B8\\u09CD\\u09B9\\u09BE \\u09A4\\u09A5\\u09C8\\u09AC\\u099A \\u09B9\\u09C8 \\u09AA\\u09F0\\u09BF\\u099B\\u09C7 \\u09F7 \\u0995\\u09F0\\u2019\\u09A8\\u09BE\\u0987 \\u099B\\u09AA\\u09BE \\u0986\\u09B2\\u09CB\\u099A\\u09A8\\u09C0\\u09F0 \\u09AF\\u09BE\\u09A4\\u09CD\\u09F0\\u09BE\\u0995 \\u09AF\\u09C7\\u09A8 \\u09B8\\u09CD\\u09B9\\u09AC\\u09BF\\u09F0 \\u0995\\u09F0\\u09BF \\u09AA\\u09C7\\u09B2\\u09BE\\u09B2\\u09C7 \\u09F7 \\u099B\\u09BE\\u09A4\\u09CD\\u09F0\\u099B\\u09BE\\u09A4\\u09CD\\u09F0\\u09C0 -\\u09B6\\u09BF\\u0995\\u09CD\\u09B7\\u0995- \\u09B6\\u09BF\\u0995\\u09CD\\u09B7\\u09DF\\u09BF\\u09A4\\u09CD\\u09F0\\u09C0 \\u0986\\u09F0\\u09C1 \\u0985\\u09AD\\u09BF\\u09AD\\u09BE\\u09F1\\u0995\\u09BE \\u09AA\\u09CD\\u09F0\\u09BF\\u09DF \\u0986\\u09B2\\u09CB\\u099A\\u09A8\\u09C0 \\\" \\u09A8 \\\" \\u09F0 \\u09AA\\u09CD\\u09F0\\u09BF\\u09A8\\u09CD\\u099F\\u09BF\\u0982 \\u09AC\\u09A8\\u09CD\\u09A7 \\u09B9\\u09C8 \\u09AA\\u09F0\\u09BF\\u099B\\u09C7 \\u09F7 \\u098F\\u09A8\\u09C7 \\u09B8\\u09AE\\u09DF\\u09A4 \\u09AA\\u09BE\\u09A0\\u0995\\u09B8\\u0995\\u09B2\\u09F0 \\u0995\\u09BE\\u09B7\\u09B2\\u09C8 \\u09AF\\u09CB\\u09F1\\u09BE\\u09F0 \\u098F\\u0995\\u09AE\\u09BE\\u09A4\\u09CD\\u09F0 \\u09AE\\u09BE\\u09A7\\u09CD\\u09AF\\u09AE \\u09B9\\u09C8 \\u09AA\\u09F0\\u09BF\\u099B\\u09C7 \\u09A1\\u09BF\\u099C\\u09BF\\u099F\\u09C7\\u09B2 \\u09AA\\u09CD\\u09F0\\u0995\\u09BE\\u09B6 \\u09F7 \\u09B8\\u09C7\\u09DF\\u09C7 \\\"\\u09A8\\\" \\u0986\\u09B2\\u09CB\\u099A\\u09A8\\u09C0 \\u09AA\\u09CD\\u09F0\\u09A4\\u09BF\\u099C\\u09A8 \\u09AA\\u09BE\\u09A0\\u0995\\u09F0 \\u09AE\\u2019\\u09AC\\u09BE\\u0987\\u09B2 \\u09AC\\u09BE \\u0995\\u09AE\\u09CD\\u09AA\\u09BF\\u0989\\u099F\\u09BE\\u09F0 \\u09B8\\u09CD\\u0995\\u09CD\\u09F0\\u09C0\\u09A8\\u09A4 \\u09B8\\u09C1\\u09B2\\u09AD \\u0995\\u09F0\\u09BF \\u09A4\\u09C1\\u09B2\\u09BF\\u09AC\\u09B2\\u09C8 thenaa.in \\u09F1\\u09C7\\u09AC\\u099A\\u09BE\\u0987\\u099F \\u0986\\u09F0\\u09AE\\u09CD\\u09AD \\u0995\\u09F0\\u09BF\\u099B\\u09CB \\u09F7 \\u0986\\u0997\\u09A4\\u09C7 \\u0986\\u09AE\\u09BF \\u09AE\\u09BE\\u09B9\\u09A4 \\u098F\\u09AC\\u09BE\\u09F0 \\u09AA\\u09BE\\u09A0\\u0995 \\u09F0\\u09BE\\u0987\\u099C\\u09F0 \\u0995\\u09BE\\u09B7\\u09B2\\u09C8 \\u0997\\u09C8\\u099B\\u09BF\\u09B2\\u09CB \\u09F7 \\u098F\\u09A4\\u09BF\\u09DF\\u09BE\\u09F0 \\u09AA\\u09F0\\u09BE \\u09AA\\u09CD\\u09F0\\u09A4\\u09BF\\u0995\\u09CD\\u09B7\\u09A3\\u09A4 \\u0986\\u09AE\\u09BF \\u0986\\u09AA\\u09CB\\u09A8\\u09BE\\u09B2\\u09CB\\u0995\\u09F0 \\u0995\\u09BE\\u09B7\\u09A4 \\u09A5\\u09BE\\u0995\\u09BF\\u09AE \\u09F7\\u099B\\u09BE\\u09A4\\u09CD\\u09F0\\u09C0\\u099B\\u09BE\\u09A4\\u09CD\\u09F0\\u09C0\\u09B8\\u0995\\u09B2 \\u0986\\u0997\\u09C1\\u09F1\\u09BE\\u0987 \\u09A8\\u09BF\\u09AC \\u09AA\\u09F0\\u09BE\\u0995\\u09C8 \\u09A6\\u09C8\\u09A8\\u09BF\\u0995 \\u09A4\\u09A5\\u09CD\\u09AF \\u09B8\\u09AE\\u09CD\\u09AD\\u09BE\\u09F0 \\u09AF\\u09CB\\u0997\\u09BE\\u09A8 \\u09A7\\u09F0\\u09BF\\u09AE \\u09F7 \\u09B8\\u09BE\\u09A7\\u09BE\\u09F0\\u09A3 \\u099C\\u09CD\\u099E\\u09BE\\u09A8\\u09F0 \\u09AA\\u09F0\\u09BE \\u09AA\\u09BE\\u09A0\\u09AD\\u09BF\\u09A4\\u09CD\\u09A4\\u09BF\\u0995 \\u099C\\u09CD\\u099E\\u09BE\\u09A8 , \\u0995\\u09C7\\u09F0\\u09BF\\u09DF\\u09BE\\u09F0 \\u0986\\u09A6\\u09BF \\u09B8\\u0995\\u09B2\\u09CB \\u09AC\\u09BF\\u09B7\\u09DF \\u0986\\u09AA\\u09CB\\u09A8\\u09BE\\u09B2\\u0995\\u09CB\\u09F0 \\u0995\\u09BE\\u09B7\\u09B2\\u09C8 \\u09A8\\u09BF\\u09DF\\u09BE\\u09F0 \\u099A\\u09C7\\u09B7\\u09CD\\u099F\\u09BE \\u0995\\u09F0\\u09BF\\u09AE \\u09F7 \\\"\\u09A8\\\"\\u09F0 \\u098F\\u0987 \\u09A1\\u09BF\\u099C\\u09BF\\u099F\\u09C7\\u09B2 \\u09AF\\u09BE\\u09A4\\u09CD\\u09F0\\u09BE\\u09A4 \\u0986\\u09AA\\u09CB\\u09A8\\u09BE\\u09B2\\u09CB\\u0995\\u09F0 \\u0985\\u0995\\u09C1\\u09A3\\u09CD\\u09A0 \\u09B8\\u09B9\\u09AF\\u09CB\\u0997\\u09BF\\u09A4\\u09BE \\u0995\\u09BE\\u09AE\\u09A8\\u09BE \\u0995\\u09F0\\u09BF\\u09B2\\u09CB \\u09F7\")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    className: \"my-5\"\n  }, __jsx(\"h3\", {\n    className: \"text-center thedteam\"\n  }, __jsx(\"hr\", {\n    className: \"dos\"\n  }), \"\\u09B8\\u09AE\\u09CD\\u09AA\\u09BE\\u09A6\\u09A8\\u09BE \\u0995\\u0995\\u09CD\\u09B7\", __jsx(\"hr\", {\n    className: \"dos\"\n  })), __jsx(\"div\", {\n    className: \"d-flex mx-auto flex-wrap mt-3 justify-content-center\"\n  }, __jsx(Editor, {\n    name: \"\\u099C\\u0997\\u09A4 \\u0997\\u0997\\u09C8\",\n    role: \"\\u09B8\\u09AE\\u09CD\\u09AA\\u09BE\\u09A6\\u0995\",\n    image: __webpack_require__(/*! ../public/images/jagat.jpeg */ \"./public/images/jagat.jpeg\")\n  }), __jsx(Editor, {\n    name: \"\\u09A6\\u09BF\\u09AC\\u09CD\\u09AF\\u09F0\\u099E\\u09CD\\u099C\\u09A3 \\u09AC\\u09F0\\u09BE\",\n    role: \"\\u09B8\\u09B9\\u09AF\\u09CB\\u0997\\u09C0 \\u09B8\\u09AE\\u09CD\\u09AA\\u09BE\\u09A6\\u0995\",\n    image: __webpack_require__(/*! ../public/images/dibya.jpeg */ \"./public/images/dibya.jpeg\")\n  }), __jsx(Editor, {\n    name: \"\\u09B9\\u09F0\\u09BF\\u09AA\\u09CD\\u09F0\\u09B8\\u09A8\\u09CD\\u09A8 \\u09B6\\u0987\\u0995\\u09C0\\u09DF\\u09BE\",\n    role: \"\\u0995\\u09CD\\u09F0\\u09C0\\u09DC\\u09BE \\u09B8\\u09AE\\u09CD\\u09AA\\u09BE\\u09A6\\u0995\",\n    image: __webpack_require__(/*! ../public/images/hari.jpeg */ \"./public/images/hari.jpeg\")\n  }), __jsx(Editor, {\n    name: \"\\u09AE\\u09C3\\u09A6\\u09C1\\u09B2 \\u09AB\\u09C1\\u0995\\u09A8\",\n    role: \"\\u09B8\\u09B9\\u09AF\\u09CB\\u0997\\u09C0 \\u09B8\\u09AE\\u09CD\\u09AA\\u09BE\\u09A6\\u0995\",\n    image: __webpack_require__(/*! ../public/images/mridul.jpeg */ \"./public/images/mridul.jpeg\")\n  }), __jsx(Editor, {\n    name: \"\\u09B8\\u09AE\\u09C0\\u09A8 \\u0995\\u09C1\\u09AE\\u09BE\\u09F0 \\u09B6\\u0987\\u0995\\u09C0\\u09DF\\u09BE\",\n    role: \"\\u09B8\\u09B9\\u09AF\\u09CB\\u0997\\u09C0 \\u09B8\\u09AE\\u09CD\\u09AA\\u09BE\\u09A6\\u0995\",\n    image: __webpack_require__(/*! ../public/images/xamin.jpeg */ \"./public/images/xamin.jpeg\")\n  }))), __jsx(\"div\", {\n    className: _public_styles_About_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.git\n  }, __jsx(\"h3\", {\n    className: \"text-center thedteam\"\n  }, __jsx(\"hr\", {\n    className: \"dos\"\n  }), \"Get in touch\", __jsx(\"hr\", {\n    className: \"dos\"\n  })), __jsx(\"div\", null, __jsx(\"p\", null, \"Drop an email at \", __jsx(\"a\", {\n    href: \"mailto:thenaanlp@gmail.com\"\n  }, \"THE NAA\")), __jsx(\"p\", null, \"Submit articles at \", __jsx(\"a\", {\n    href: \"mailto:thenaanlp@gmail.com\"\n  }, \"THE NAA\")))), __jsx(_components_utilities_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkVkaXRvciIsInByb3BzIiwiaW1hZ2UiLCJuYW1lIiwicm9sZSIsIkFib3V0Iiwic3R5bGVzIiwidGV4dHVyZSIsImJnYWJvdXQiLCJlZGl0b3Jjb250IiwiZWRpdG9yaWFsSW1hZ2UiLCJkZXNjIiwicmVxdWlyZSIsImdpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0FBQ3RCLFNBQ0k7QUFBUSxhQUFTLEVBQUM7QUFBbEIsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQStCO0FBQUssT0FBRyxFQUFFQSxLQUFLLENBQUNDLEtBQWhCO0FBQXVCLE9BQUcsRUFBQyxRQUEzQjtBQUFvQyxhQUFTLEVBQUM7QUFBOUMsSUFBL0IsQ0FESixFQUVJLDBCQUNJLGtCQUFLRCxLQUFLLENBQUNFLElBQVgsQ0FESixFQUVJLGtCQUFLRixLQUFLLENBQUNHLElBQVgsQ0FGSixDQUZKLENBREo7QUFTSCxDQVZEOztBQVlBLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2hCLFNBQ0k7QUFBUyxhQUFTLEVBQUVDLHNFQUFNLENBQUNDO0FBQTNCLEtBQ0ksTUFBQywyRUFBRCxPQURKLEVBRUksTUFBQyx5REFBRDtBQUFXLFNBQUssTUFBaEI7QUFBaUIsYUFBUyxFQUFFRCxzRUFBTSxDQUFDRTtBQUFuQyxJQUZKLEVBS0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsSUFESixzQ0FHUTtBQUFJLGFBQVMsRUFBQztBQUFkLElBSFIsQ0FMSixFQVVJLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUVGLHNFQUFNLENBQUNHO0FBQTdCLEtBQ0k7QUFBSyxhQUFTLEVBQUVILHNFQUFNLENBQUNJO0FBQXZCLElBREosRUFFSTtBQUFLLGFBQVMsRUFBRUosc0VBQU0sQ0FBQ0s7QUFBdkIsS0FDSSx3RkFESixFQUVJLDhGQUZKLEVBR0ksMEJBQVksNDVLQUFaLENBSEosQ0FGSixDQVZKLEVBbUJJLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUM7QUFBckIsS0FDSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxJQURKLCtFQUdJO0FBQUksYUFBUyxFQUFDO0FBQWQsSUFISixDQURKLEVBTUk7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJLE1BQUMsTUFBRDtBQUFRLFFBQUksRUFBQyx1Q0FBYjtBQUF1QixRQUFJLEVBQUMsNENBQTVCO0FBQXNDLFNBQUssRUFBRUMsbUJBQU8sQ0FBQywrREFBRDtBQUFwRCxJQURKLEVBRUksTUFBQyxNQUFEO0FBQVEsUUFBSSxFQUFDLGlGQUFiO0FBQThCLFFBQUksRUFBQyxpRkFBbkM7QUFBb0QsU0FBSyxFQUFFQSxtQkFBTyxDQUFDLCtEQUFEO0FBQWxFLElBRkosRUFHSSxNQUFDLE1BQUQ7QUFBUSxRQUFJLEVBQUMsbUdBQWI7QUFBaUMsUUFBSSxFQUFDLGlGQUF0QztBQUF1RCxTQUFLLEVBQUVBLG1CQUFPLENBQUMsNkRBQUQ7QUFBckUsSUFISixFQUlJLE1BQUMsTUFBRDtBQUFRLFFBQUksRUFBQyx5REFBYjtBQUEwQixRQUFJLEVBQUMsaUZBQS9CO0FBQWdELFNBQUssRUFBRUEsbUJBQU8sQ0FBQyxpRUFBRDtBQUE5RCxJQUpKLEVBS0ksTUFBQyxNQUFEO0FBQVEsUUFBSSxFQUFDLDhGQUFiO0FBQWlDLFFBQUksRUFBQyxpRkFBdEM7QUFBdUQsU0FBSyxFQUFFQSxtQkFBTyxDQUFDLCtEQUFEO0FBQXJFLElBTEosQ0FOSixDQW5CSixFQWlDSTtBQUFLLGFBQVMsRUFBRU4sc0VBQU0sQ0FBQ087QUFBdkIsS0FDSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxJQURKLGtCQUdJO0FBQUksYUFBUyxFQUFDO0FBQWQsSUFISixDQURKLEVBTUksbUJBQ0ksc0NBQW9CO0FBQUcsUUFBSSxFQUFDO0FBQVIsZUFBcEIsQ0FESixFQUVJLHdDQUFzQjtBQUFHLFFBQUksRUFBQztBQUFSLGVBQXRCLENBRkosQ0FOSixDQWpDSixFQTRDSSxNQUFDLDJFQUFELE9BNUNKLENBREo7QUFnREgsQ0FqREQ7O0FBbURlUixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcHVibGljL3N0eWxlcy9BYm91dC5tb2R1bGUuY3NzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbGl0aWVzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxpdGllcy9OYXZiYXIvTmF2YmFyJztcbmltcG9ydCAnLi4vcHVibGljL3N0eWxlcy9FZGl0b3IuY3NzJztcblxuY29uc3QgRWRpdG9yID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJzbmlwMTUxNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWltYWdlXCI+PGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9XCJlZGl0b3JcIiBjbGFzc05hbWU9XCJ0ZWFtaW1nXCIgLz48L2Rpdj5cbiAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgIDxoMz57cHJvcHMubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgIDxoND57cHJvcHMucm9sZX08L2g0PlxuICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICApO1xufVxuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0dXJlfT5cbiAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPXtzdHlsZXMuYmdhYm91dH0+XG4gICAgICAgICAgICAgICAgey8qIDxoMj5BYm91dCBOQUE8L2gyPiAqL31cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRoZWR0ZWFtIG15LTVcIj5cbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZG9zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgTWVzc2FnZSBGcm9tIHRoZSBFZGl0b3ItSW4tQ2hpZWZcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRvc1wiIC8+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5lZGl0b3Jjb250fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRvcmlhbEltYWdlfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2N9PlxuICAgICAgICAgICAgICAgICAgICA8aDQ+4Kac4Ka/4Kak4KeB4Kau4Kaj4Ka/IOCmqOCnh+Cmk+CmlzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxoNj7gpq7gp4Hgppbgp43gpq8g4Ka44Kau4KeN4Kaq4Ka+4Kam4KaVPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGJsb2NrcXVvdGU+PGk+4KaV4Kew4oCZ4Kao4Ka+IOCmruCmueCmvuCmruCmvuCnsOCngOCnn+CnhyDgpqrgp4PgpqXgpr/gp7Hgp4DgprLgp4gg4Kak4Ka+4KeO4KaV4KeN4Ka34Kaj4Ka/4KaVIOCmquCnsOCmv+CmrOCnsOCnjeCmpOCmqCDgpobgpqjgpr/gprLgp4cg4Ke3IOCmuOCmsuCmqOCmvyDgppXgp7Dgpr8g4Kam4Ka/4Kay4KeHIOCmruCmvuCmqOCngeCmueCnsCDgppzgp4Dgp7Hgpqgg4Kan4Ka+4Kew4Ka+IOCntyDgpo/gpocg4Ka44Kau4KefIOCmquCnjeCnsOCmpOCnjeCmr+CmvuCmueCnjeCmrOCmvuCmqOCnh+CnsOCnhyDgpq3gp7Dgpr4g4Ke34KaP4KaHIOCmuOCmruCnn+CnsCDgppPgpqrgp7DgpqQg4Kay4Ka+4Ka54KeHIOCml+CmnOCmvyDgpongpqDgpr4g4Kau4Ka+4Kao4KeB4Ka54KewIOCmrOCnsOCnjeCmpOCmruCmvuCmqCDgpobgp7Dgp4Eg4Kat4Kas4Ka/4Ka34KeN4Kav4Kas4KeL4Kew4KaV4KeLIOCmsuCniCDgprjgp43gpqrgprfgp43gpp8g4Kew4KeH4KaW4Ka+IOCmheCmguCmleCmqCDgppXgp7Dgpr4g4KaF4Ka44Kau4KeN4Kat4KexIOCmquCnjeCnsOCmvuCnnyDgp7cg4Ka44KeMIOCmuOCmv+CmpuCmqOCmviDgprLgp4jgppXgp4cg4Kas4Ka+4Kak4Kew4Ka/IOCmleCmvuCmleCmpCAs4KaG4Kay4KeL4Kaa4Kao4KeA4KewIOCmheCnseCmv+CmueCmqOCnhyDgppzgp4Dgp5/gpr7gpocg4Kal4Ka+4KaV4Ka/4KasIOCmqOCni+CnseCnsOCmviDgpqrgpr7gpqDgppUg4Ka44Kau4Ka+4Kac4KewIOCmnOCnjeCmnuCmvuCmqCDgpobgp7Dgp4Eg4Kak4Kal4KeN4KavIOCmheCmueCnsOCmo+CnsCDgpongp47gprgg4Ka54KeIIOCmquCnsOCmv+CmsiDgpqHgpr/gppzgpr/gpp/gp4fgprIg4Kau4Ka+4Kan4KeN4Kav4KauIOCntyDgpoXgprjgpq7gp7Ag4KaV4KeH4KaH4Kas4Ka+4KaW4Kao4KeLIOCmquCnjeCnsOCmpOCmv+Cmt+CnjeCmoOCmv+CmpCDgpobgprLgp4vgpprgpqjgp4Dgp5/gp4cg4Kab4Kaq4Ka+IOCmhuCmluCnsOCnsCDgpq7gp4Hgpqbgp43gp7DgpqMg4Kas4Kao4KeN4KanIOCmleCnsOCmvyDgp7Dgpr7gppbgpr/gpqwg4Kay4KaX4Ka+IOCmueCniOCmm+CnhyDgp7cg4Kaq4KeN4Kew4Ka/4Kao4KeN4Kaf4KaCIOCmquCnjeCnsOCnh+Cmm+CmrOCni+CnsOCnsCDgpoXgp7Hgprjgp43gprngpr4g4Kak4Kal4KeI4Kas4KaaIOCmueCniCDgpqrgp7Dgpr/gppvgp4cg4Ke3IOCmleCnsOKAmeCmqOCmvuCmhyDgppvgpqrgpr4g4KaG4Kay4KeL4Kaa4Kao4KeA4KewIOCmr+CmvuCmpOCnjeCnsOCmvuCmlSDgpq/gp4fgpqgg4Ka44KeN4Ka54Kas4Ka/4KewIOCmleCnsOCmvyDgpqrgp4fgprLgpr7gprLgp4cg4Ke3IOCmm+CmvuCmpOCnjeCnsOCmm+CmvuCmpOCnjeCnsOCngCAt4Ka24Ka/4KaV4KeN4Ka34KaVLSDgprbgpr/gppXgp43gprfgp5/gpr/gpqTgp43gp7Dgp4Ag4KaG4Kew4KeBIOCmheCmreCmv+CmreCmvuCnseCmleCmviDgpqrgp43gp7Dgpr/gp58g4KaG4Kay4KeL4Kaa4Kao4KeAIFwiIOCmqCBcIiDgp7Ag4Kaq4KeN4Kew4Ka/4Kao4KeN4Kaf4Ka/4KaCIOCmrOCmqOCnjeCmpyDgprngp4gg4Kaq4Kew4Ka/4Kab4KeHIOCntyDgpo/gpqjgp4cg4Ka44Kau4Kef4KakIOCmquCmvuCmoOCmleCmuOCmleCmsuCnsCDgppXgpr7gprfgprLgp4gg4Kav4KeL4Kex4Ka+4KewIOCmj+CmleCmruCmvuCmpOCnjeCnsCDgpq7gpr7gpqfgp43gpq/gpq4g4Ka54KeIIOCmquCnsOCmv+Cmm+CnhyDgpqHgpr/gppzgpr/gpp/gp4fgprIg4Kaq4KeN4Kew4KaV4Ka+4Ka2IOCntyDgprjgp4fgp5/gp4cgXCLgpqhcIiDgpobgprLgp4vgpprgpqjgp4Ag4Kaq4KeN4Kew4Kak4Ka/4Kac4KaoIOCmquCmvuCmoOCmleCnsCDgpq7igJngpqzgpr7gpofgprIg4Kas4Ka+IOCmleCmruCnjeCmquCmv+CmieCmn+CmvuCnsCDgprjgp43gppXgp43gp7Dgp4DgpqjgpqQg4Ka44KeB4Kay4KatIOCmleCnsOCmvyDgpqTgp4HgprLgpr/gpqzgprLgp4ggdGhlbmFhLmluIOCnseCnh+CmrOCmmuCmvuCmh+CmnyDgpobgp7Dgpq7gp43gpq0g4KaV4Kew4Ka/4Kab4KeLIOCntyDgpobgppfgpqTgp4cg4KaG4Kau4Ka/IOCmruCmvuCmueCmpCDgpo/gpqzgpr7gp7Ag4Kaq4Ka+4Kag4KaVIOCnsOCmvuCmh+CmnOCnsCDgppXgpr7gprfgprLgp4gg4KaX4KeI4Kab4Ka/4Kay4KeLIOCntyDgpo/gpqTgpr/gp5/gpr7gp7Ag4Kaq4Kew4Ka+IOCmquCnjeCnsOCmpOCmv+CmleCnjeCmt+Cmo+CmpCDgpobgpq7gpr8g4KaG4Kaq4KeL4Kao4Ka+4Kay4KeL4KaV4KewIOCmleCmvuCmt+CmpCDgpqXgpr7gppXgpr/gpq4g4Ke34Kab4Ka+4Kak4KeN4Kew4KeA4Kab4Ka+4Kak4KeN4Kew4KeA4Ka44KaV4KayIOCmhuCml+CngeCnseCmvuCmhyDgpqjgpr/gpqwg4Kaq4Kew4Ka+4KaV4KeIIOCmpuCniOCmqOCmv+CmlSDgpqTgpqXgp43gpq8g4Ka44Kau4KeN4Kat4Ka+4KewIOCmr+Cni+Cml+CmvuCmqCDgpqfgp7Dgpr/gpq4g4Ke3IOCmuOCmvuCmp+CmvuCnsOCmoyDgppzgp43gpp7gpr7gpqjgp7Ag4Kaq4Kew4Ka+IOCmquCmvuCmoOCmreCmv+CmpOCnjeCmpOCmv+CmlSDgppzgp43gpp7gpr7gpqggLCDgppXgp4fgp7Dgpr/gp5/gpr7gp7Ag4KaG4Kam4Ka/IOCmuOCmleCmsuCniyDgpqzgpr/gprfgp58g4KaG4Kaq4KeL4Kao4Ka+4Kay4KaV4KeL4KewIOCmleCmvuCmt+CmsuCniCDgpqjgpr/gp5/gpr7gp7Ag4Kaa4KeH4Ka34KeN4Kaf4Ka+IOCmleCnsOCmv+CmriDgp7cgXCLgpqhcIuCnsCDgpo/gpocg4Kah4Ka/4Kac4Ka/4Kaf4KeH4KayIOCmr+CmvuCmpOCnjeCnsOCmvuCmpCDgpobgpqrgp4vgpqjgpr7gprLgp4vgppXgp7Ag4KaF4KaV4KeB4Kaj4KeN4KagIOCmuOCmueCmr+Cni+Cml+Cmv+CmpOCmviDgppXgpr7gpq7gpqjgpr4g4KaV4Kew4Ka/4Kay4KeLIOCnt1xuPC9pPjwvYmxvY2txdW90ZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJteS01XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRoZWR0ZWFtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkb3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICDgprjgpq7gp43gpqrgpr7gpqbgpqjgpr4g4KaV4KaV4KeN4Ka3XG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkb3NcIiAvPlxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbXgtYXV0byBmbGV4LXdyYXAgbXQtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxFZGl0b3IgbmFtZT1cIuCmnOCml+CmpCDgppfgppfgp4hcIiByb2xlPVwi4Ka44Kau4KeN4Kaq4Ka+4Kam4KaVXCIgaW1hZ2U9e3JlcXVpcmUoJy4uL3B1YmxpYy9pbWFnZXMvamFnYXQuanBlZycpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RWRpdG9yIG5hbWU9XCLgpqbgpr/gpqzgp43gpq/gp7Dgpp7gp43gppzgpqMg4Kas4Kew4Ka+XCIgcm9sZT1cIuCmuOCmueCmr+Cni+Cml+CngCDgprjgpq7gp43gpqrgpr7gpqbgppVcIiBpbWFnZT17cmVxdWlyZSgnLi4vcHVibGljL2ltYWdlcy9kaWJ5YS5qcGVnJyl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxFZGl0b3IgbmFtZT1cIuCmueCnsOCmv+CmquCnjeCnsOCmuOCmqOCnjeCmqCDgprbgpofgppXgp4Dgp5/gpr5cIiByb2xlPVwi4KaV4KeN4Kew4KeA4Kec4Ka+IOCmuOCmruCnjeCmquCmvuCmpuCmlVwiIGltYWdlPXtyZXF1aXJlKCcuLi9wdWJsaWMvaW1hZ2VzL2hhcmkuanBlZycpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RWRpdG9yIG5hbWU9XCLgpq7gp4Pgpqbgp4HgprIg4Kar4KeB4KaV4KaoXCIgcm9sZT1cIuCmuOCmueCmr+Cni+Cml+CngCDgprjgpq7gp43gpqrgpr7gpqbgppVcIiBpbWFnZT17cmVxdWlyZSgnLi4vcHVibGljL2ltYWdlcy9tcmlkdWwuanBlZycpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RWRpdG9yIG5hbWU9XCLgprjgpq7gp4Dgpqgg4KaV4KeB4Kau4Ka+4KewIOCmtuCmh+CmleCngOCnn+CmvlwiIHJvbGU9XCLgprjgprngpq/gp4vgppfgp4Ag4Ka44Kau4KeN4Kaq4Ka+4Kam4KaVXCIgaW1hZ2U9e3JlcXVpcmUoJy4uL3B1YmxpYy9pbWFnZXMveGFtaW4uanBlZycpfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdpdH0+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRoZWR0ZWFtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkb3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICBHZXQgaW4gdG91Y2hcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRvc1wiIC8+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5Ecm9wIGFuIGVtYWlsIGF0IDxhIGhyZWY9XCJtYWlsdG86dGhlbmFhbmxwQGdtYWlsLmNvbVwiPlRIRSBOQUE8L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5TdWJtaXQgYXJ0aWNsZXMgYXQgPGEgaHJlZj1cIm1haWx0bzp0aGVuYWFubHBAZ21haWwuY29tXCI+VEhFIE5BQTwvYT48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9zZWN0aW9uID5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "./public/images/dibya.jpeg":
/*!**********************************!*\
  !*** ./public/images/dibya.jpeg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/dibya-524d9fe3fb1c26d0ff6cd2177ddf8fd7.jpeg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2RpYnlhLmpwZWc/NTA3OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3B1YmxpYy9pbWFnZXMvZGlieWEuanBlZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9kaWJ5YS01MjRkOWZlM2ZiMWMyNmQwZmY2Y2QyMTc3ZGRmOGZkNy5qcGVnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/images/dibya.jpeg\n");

/***/ }),

/***/ "./public/images/hari.jpeg":
/*!*********************************!*\
  !*** ./public/images/hari.jpeg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/hari-f7a9922fa813e45b60319ba69368b330.jpeg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2hhcmkuanBlZz8xYTFkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcHVibGljL2ltYWdlcy9oYXJpLmpwZWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaGFyaS1mN2E5OTIyZmE4MTNlNDViNjAzMTliYTY5MzY4YjMzMC5qcGVnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/images/hari.jpeg\n");

/***/ }),

/***/ "./public/images/jagat.jpeg":
/*!**********************************!*\
  !*** ./public/images/jagat.jpeg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/jagat-51bb799285bf0655911f9bcb7115a271.jpeg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2phZ2F0LmpwZWc/N2FhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3B1YmxpYy9pbWFnZXMvamFnYXQuanBlZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9qYWdhdC01MWJiNzk5Mjg1YmYwNjU1OTExZjliY2I3MTE1YTI3MS5qcGVnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/images/jagat.jpeg\n");

/***/ }),

/***/ "./public/images/mridul.jpeg":
/*!***********************************!*\
  !*** ./public/images/mridul.jpeg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/mridul-e8eaf975d80e8e53acf027bac459f483.jpeg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL21yaWR1bC5qcGVnPzZhYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9wdWJsaWMvaW1hZ2VzL21yaWR1bC5qcGVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21yaWR1bC1lOGVhZjk3NWQ4MGU4ZTUzYWNmMDI3YmFjNDU5ZjQ4My5qcGVnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/images/mridul.jpeg\n");

/***/ }),

/***/ "./public/images/thenaalogo.png":
/*!**************************************!*\
  !*** ./public/images/thenaalogo.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/thenaalogo-7fbc7a35592a86751dfbe73de8e52361.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL3RoZW5hYWxvZ28ucG5nP2YxOTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9wdWJsaWMvaW1hZ2VzL3RoZW5hYWxvZ28ucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3RoZW5hYWxvZ28tN2ZiYzdhMzU1OTJhODY3NTFkZmJlNzNkZThlNTIzNjEucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/images/thenaalogo.png\n");

/***/ }),

/***/ "./public/images/xamin.jpeg":
/*!**********************************!*\
  !*** ./public/images/xamin.jpeg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/xamin-42cd18c893b164b924a35399c877686c.jpeg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL3hhbWluLmpwZWc/NDA2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3B1YmxpYy9pbWFnZXMveGFtaW4uanBlZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy94YW1pbi00MmNkMThjODkzYjE2NGI5MjRhMzUzOTljODc3Njg2Yy5qcGVnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/images/xamin.jpeg\n");

/***/ }),

/***/ "./public/styles/About.module.css":
/*!****************************************!*\
  !*** ./public/styles/About.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3B1YmxpYy9zdHlsZXMvQWJvdXQubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/styles/About.module.css\n");

/***/ }),

/***/ "./public/styles/Editor.css":
/*!**********************************!*\
  !*** ./public/styles/Editor.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3B1YmxpYy9zdHlsZXMvRWRpdG9yLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/styles/Editor.css\n");

/***/ }),

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sauravskv/Desktop/TheNAA-Blog/pages/about.js */"./pages/about.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ })

/******/ });