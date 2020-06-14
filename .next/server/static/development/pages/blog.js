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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Post/BlogSection.js":
/*!****************************************!*\
  !*** ./components/Post/BlogSection.js ***!
  \****************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ \"./components/Post/Post.js\");\n/* harmony import */ var _BlogSection_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlogSection.module.css */ \"./components/Post/BlogSection.module.css\");\n/* harmony import */ var _BlogSection_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BlogSection_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // import { Link } from 'react-router-dom';\n\n\n\n\n\nclass BlogSection extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      posts: []\n    });\n  }\n\n  componentDidMount() {\n    let blogType = '';\n\n    if (this.props.type === 'studentCorner') {\n      blogType = 'story';\n    } else if (this.props.type === 'currentWorld') {\n      blogType = 'poem';\n    } else {\n      blogType = 'article';\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/blogs/' + blogType).then(res => {\n      console.log(res.data);\n      this.setState({\n        posts: res.data\n      });\n    }).catch(err => {\n      console.error(err);\n    });\n  }\n\n  render() {\n    const posts = this.state.posts.map(post => {\n      // post.date\n      const date = new Date(post.date_uploaded).toDateString();\n      return __jsx(_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        key: post._id,\n        id: post._id,\n        title: post.title,\n        author: post.author,\n        subtitle: post.subtitle,\n        content: post.content,\n        date: date,\n        image: post.location,\n        type: post.type\n      });\n    });\n    return __jsx(\"div\", {\n      className: _BlogSection_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.zigzag\n    }, posts);\n  }\n\n}\n\nasync function getServerSideProps() {\n  // Fetch data from external API\n  const res = await fetch(`https://.../data`);\n  const data = await res.json(); // Pass data to the page via props\n\n  return {\n    props: {\n      data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogSection);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvQmxvZ1NlY3Rpb24uanM/YTFmNCJdLCJuYW1lcyI6WyJCbG9nU2VjdGlvbiIsIkNvbXBvbmVudCIsInBvc3RzIiwiY29tcG9uZW50RGlkTW91bnQiLCJibG9nVHlwZSIsInByb3BzIiwidHlwZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic2V0U3RhdGUiLCJjYXRjaCIsImVyciIsImVycm9yIiwicmVuZGVyIiwic3RhdGUiLCJtYXAiLCJwb3N0IiwiZGF0ZSIsIkRhdGUiLCJkYXRlX3VwbG9hZGVkIiwidG9EYXRlU3RyaW5nIiwiX2lkIiwidGl0bGUiLCJhdXRob3IiLCJzdWJ0aXRsZSIsImNvbnRlbnQiLCJsb2NhdGlvbiIsInN0eWxlcyIsInppZ3phZyIsImdldFNlcnZlclNpZGVQcm9wcyIsImZldGNoIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFOLFNBQTBCQywrQ0FBMUIsQ0FBb0M7QUFBQTtBQUFBOztBQUFBLG1DQUN4QjtBQUNKQyxXQUFLLEVBQUU7QUFESCxLQUR3QjtBQUFBOztBQUtoQ0MsbUJBQWlCLEdBQUc7QUFDaEIsUUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBRUEsUUFBSSxLQUFLQyxLQUFMLENBQVdDLElBQVgsS0FBb0IsZUFBeEIsRUFBeUM7QUFDckNGLGNBQVEsR0FBRyxPQUFYO0FBQ0gsS0FGRCxNQUdLLElBQUksS0FBS0MsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLGNBQXhCLEVBQXdDO0FBQ3pDRixjQUFRLEdBQUcsTUFBWDtBQUNILEtBRkksTUFHQTtBQUNEQSxjQUFRLEdBQUcsU0FBWDtBQUNIOztBQUVERyxnREFBSyxDQUFDQyxHQUFOLENBQVUsZ0JBQWdCSixRQUExQixFQUNLSyxJQURMLENBQ1VDLEdBQUcsSUFBSTtBQUNUQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxJQUFoQjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUNWWixhQUFLLEVBQUVRLEdBQUcsQ0FBQ0c7QUFERCxPQUFkO0FBR0gsS0FOTCxFQU9LRSxLQVBMLENBT1dDLEdBQUcsSUFBSTtBQUNWTCxhQUFPLENBQUNNLEtBQVIsQ0FBY0QsR0FBZDtBQUNILEtBVEw7QUFVSDs7QUFDREUsUUFBTSxHQUFHO0FBQ0wsVUFBTWhCLEtBQUssR0FBRyxLQUFLaUIsS0FBTCxDQUFXakIsS0FBWCxDQUFpQmtCLEdBQWpCLENBQXFCQyxJQUFJLElBQUk7QUFDdkM7QUFDQSxZQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTRixJQUFJLENBQUNHLGFBQWQsRUFBNkJDLFlBQTdCLEVBQWI7QUFDQSxhQUFPLE1BQUMsNkNBQUQ7QUFBTSxXQUFHLEVBQUVKLElBQUksQ0FBQ0ssR0FBaEI7QUFBcUIsVUFBRSxFQUFFTCxJQUFJLENBQUNLLEdBQTlCO0FBQW1DLGFBQUssRUFBRUwsSUFBSSxDQUFDTSxLQUEvQztBQUFzRCxjQUFNLEVBQUVOLElBQUksQ0FBQ08sTUFBbkU7QUFBMkUsZ0JBQVEsRUFBRVAsSUFBSSxDQUFDUSxRQUExRjtBQUFvRyxlQUFPLEVBQUVSLElBQUksQ0FBQ1MsT0FBbEg7QUFBMkgsWUFBSSxFQUFFUixJQUFqSTtBQUF1SSxhQUFLLEVBQUVELElBQUksQ0FBQ1UsUUFBbko7QUFBNkosWUFBSSxFQUFFVixJQUFJLENBQUNmO0FBQXhLLFFBQVA7QUFDSCxLQUphLENBQWQ7QUFLQSxXQUNJO0FBQUssZUFBUyxFQUFFMEIsOERBQU0sQ0FBQ0M7QUFBdkIsT0FDSy9CLEtBREwsQ0FESjtBQUtIOztBQXhDK0I7O0FBMkM3QixlQUFlZ0Msa0JBQWYsR0FBb0M7QUFDekM7QUFDQSxRQUFNeEIsR0FBRyxHQUFHLE1BQU15QixLQUFLLENBQUUsa0JBQUYsQ0FBdkI7QUFDQSxRQUFNdEIsSUFBSSxHQUFHLE1BQU1ILEdBQUcsQ0FBQzBCLElBQUosRUFBbkIsQ0FIeUMsQ0FLekM7O0FBQ0EsU0FBTztBQUFFL0IsU0FBSyxFQUFFO0FBQUVRO0FBQUY7QUFBVCxHQUFQO0FBQ0Q7QUFFY2IsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QvQmxvZ1NlY3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBQb3N0IGZyb20gJy4vUG9zdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmxvZ1NlY3Rpb24ubW9kdWxlLmNzcydcblxuY2xhc3MgQmxvZ1NlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBwb3N0czogW11cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IGJsb2dUeXBlID0gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3N0dWRlbnRDb3JuZXInKSB7XG4gICAgICAgICAgICBibG9nVHlwZSA9ICdzdG9yeSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnY3VycmVudFdvcmxkJykge1xuICAgICAgICAgICAgYmxvZ1R5cGUgPSAncG9lbSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBibG9nVHlwZSA9ICdhcnRpY2xlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9ibG9ncy8nICsgYmxvZ1R5cGUpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdHM6IHJlcy5kYXRhXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBvc3RzID0gdGhpcy5zdGF0ZS5wb3N0cy5tYXAocG9zdCA9PiB7XG4gICAgICAgICAgICAvLyBwb3N0LmRhdGVcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwb3N0LmRhdGVfdXBsb2FkZWQpLnRvRGF0ZVN0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIDxQb3N0IGtleT17cG9zdC5faWR9IGlkPXtwb3N0Ll9pZH0gdGl0bGU9e3Bvc3QudGl0bGV9IGF1dGhvcj17cG9zdC5hdXRob3J9IHN1YnRpdGxlPXtwb3N0LnN1YnRpdGxlfSBjb250ZW50PXtwb3N0LmNvbnRlbnR9IGRhdGU9e2RhdGV9IGltYWdlPXtwb3N0LmxvY2F0aW9ufSB0eXBlPXtwb3N0LnR5cGV9IC8+O1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy56aWd6YWd9PlxuICAgICAgICAgICAgICAgIHtwb3N0c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovLy4uLi9kYXRhYClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXG4gIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dTZWN0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Post/BlogSection.js\n");

/***/ }),

/***/ "./components/Post/BlogSection.module.css":
/*!************************************************!*\
  !*** ./components/Post/BlogSection.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdC9CbG9nU2VjdGlvbi5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Post/BlogSection.module.css\n");

/***/ }),

/***/ "./components/Post/Blogcard.module.css":
/*!*********************************************!*\
  !*** ./components/Post/Blogcard.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdC9CbG9nY2FyZC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Post/Blogcard.module.css\n");

/***/ }),

/***/ "./components/Post/Post.js":
/*!*********************************!*\
  !*** ./components/Post/Post.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Blogcard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blogcard.module.css */ \"./components/Post/Blogcard.module.css\");\n/* harmony import */ var _Blogcard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Blogcard_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import { Card } from 'react-bootstrap';\n// import styles from './Post.module.css';\n\n\n\n\nconst Post = props => {\n  return __jsx(\"div\", {\n    className: \"blog-card \"\n  }, __jsx(\"div\", {\n    className: \"meta\"\n  }, __jsx(\"div\", {\n    className: \"photo\",\n    style: {\n      backgroundImage: `url(${props.image})`\n    }\n  }), __jsx(\"ul\", {\n    className: \"details\"\n  }, __jsx(\"li\", {\n    className: \"author\"\n  }, __jsx(\"a\", {\n    href: \"/\"\n  }, props.author)), __jsx(\"li\", {\n    className: \"date\"\n  }, props.date))), __jsx(\"div\", {\n    className: \"description\"\n  }, __jsx(\"h1\", null, props.title), __jsx(\"p\", null, props.subtitle), __jsx(\"p\", {\n    className: \"read-more\"\n  }, __jsx(\"a\", {\n    href: \"/\" + props.type + \"/\" + props.id\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], null, \"Read More\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvUG9zdC5qcz82YzBlIl0sIm5hbWVzIjpbIlBvc3QiLCJwcm9wcyIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwiYXV0aG9yIiwiZGF0ZSIsInRpdGxlIiwic3VidGl0bGUiLCJ0eXBlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0NBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBLE1BQU1BLElBQUksR0FBSUMsS0FBRCxJQUFXO0FBQ3BCLFNBQ0k7QUFBSyxhQUFTLEVBQUU7QUFBaEIsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUF1QixTQUFLLEVBQUU7QUFBRUMscUJBQWUsRUFBRyxPQUFNRCxLQUFLLENBQUNFLEtBQU07QUFBdEM7QUFBOUIsSUFESixFQUVJO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FDSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQXVCO0FBQUcsUUFBSSxFQUFDO0FBQVIsS0FBYUYsS0FBSyxDQUFDRyxNQUFuQixDQUF2QixDQURKLEVBRUk7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUFzQkgsS0FBSyxDQUFDSSxJQUE1QixDQUZKLENBRkosQ0FESixFQVFJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSSxrQkFBS0osS0FBSyxDQUFDSyxLQUFYLENBREosRUFFSSxpQkFBSUwsS0FBSyxDQUFDTSxRQUFWLENBRkosRUFHSTtBQUFHLGFBQVMsRUFBQztBQUFiLEtBQ0k7QUFBRyxRQUFJLEVBQUUsTUFBTU4sS0FBSyxDQUFDTyxJQUFaLEdBQW1CLEdBQW5CLEdBQXlCUCxLQUFLLENBQUNRO0FBQXhDLEtBQTZDLE1BQUMsc0RBQUQsb0JBQTdDLENBREosQ0FISixDQVJKLENBREo7QUFrQkgsQ0FuQkQ7O0FBcUJlVCxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdC9Qb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Bvc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgJy4vQmxvZ2NhcmQubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImJsb2ctY2FyZCBcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3RvXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cHJvcHMuaW1hZ2V9KWAgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImF1dGhvclwiPjxhIGhyZWY9XCIvXCI+e3Byb3BzLmF1dGhvcn08L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRhdGVcIj57cHJvcHMuZGF0ZX08L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+e3Byb3BzLnN1YnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWFkLW1vcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIvXCIgKyBwcm9wcy50eXBlICsgXCIvXCIgKyBwcm9wcy5pZH0gPjxCdXR0b24+UmVhZCBNb3JlPC9CdXR0b24+PC9hPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2RpdiA+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Post/Post.js\n");

/***/ }),

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

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_utilities_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/utilities/Navbar/Navbar */ \"./components/utilities/Navbar/Navbar.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Post_BlogSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Post/BlogSection */ \"./components/Post/BlogSection.js\");\n/* harmony import */ var _components_utilities_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/utilities/Footer/Footer */ \"./components/utilities/Footer/Footer.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import styles from './Blog.module.css';\n\n\n\n\n\n\nconst Blog = () => {\n  const stylesTab = {\n    margin: '0',\n    padding: '10px'\n  };\n  const blockdiv = {\n    display: 'flex',\n    flexDirection: 'row'\n  };\n  return __jsx(\"div\", null, __jsx(_components_utilities_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Tabs\"], {\n    defaultActiveKey: \"studentCorner\",\n    id: \"uncontrolled-tab-example\"\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Tab\"], {\n    eventKey: \"studentCorner\",\n    title: \"Student Corner\",\n    style: stylesTab\n  }, __jsx(\"div\", {\n    style: blockdiv\n  }, __jsx(_components_Post_BlogSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    type: \"studentCorner\"\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Tab\"], {\n    eventKey: \"articles\",\n    title: \"Articles\",\n    style: stylesTab\n  }, __jsx(\"div\", {\n    style: blockdiv\n  }, __jsx(_components_Post_BlogSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    type: \"article\"\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Tab\"], {\n    eventKey: \"currentWorld\",\n    title: \"Current World\",\n    style: stylesTab\n  }, __jsx(\"div\", {\n    style: blockdiv\n  }, __jsx(_components_Post_BlogSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    type: \"currentWorld\"\n  })))), __jsx(_components_utilities_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzPzYxYjgiXSwibmFtZXMiOlsiQmxvZyIsInN0eWxlc1RhYiIsIm1hcmdpbiIsInBhZGRpbmciLCJibG9ja2RpdiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUVmLFFBQU1DLFNBQVMsR0FBRztBQUNkQyxVQUFNLEVBQUUsR0FETTtBQUVkQyxXQUFPLEVBQUU7QUFGSyxHQUFsQjtBQUtBLFFBQU1DLFFBQVEsR0FBRztBQUNiQyxXQUFPLEVBQUUsTUFESTtBQUViQyxpQkFBYSxFQUFFO0FBRkYsR0FBakI7QUFLQSxTQUNJLG1CQUNJLE1BQUMsMkVBQUQsT0FESixFQUVJLE1BQUMsb0RBQUQ7QUFBTSxvQkFBZ0IsRUFBQyxlQUF2QjtBQUF1QyxNQUFFLEVBQUM7QUFBMUMsS0FDSSxNQUFDLG1EQUFEO0FBQUssWUFBUSxFQUFDLGVBQWQ7QUFBOEIsU0FBSyxFQUFDLGdCQUFwQztBQUFxRCxTQUFLLEVBQUVMO0FBQTVELEtBSUk7QUFBSyxTQUFLLEVBQUVHO0FBQVosS0FDSSxNQUFDLG9FQUFEO0FBQWEsUUFBSSxFQUFDO0FBQWxCLElBREosQ0FKSixDQURKLEVBU0ksTUFBQyxtREFBRDtBQUFLLFlBQVEsRUFBQyxVQUFkO0FBQXlCLFNBQUssRUFBQyxVQUEvQjtBQUEwQyxTQUFLLEVBQUVIO0FBQWpELEtBSUk7QUFBSyxTQUFLLEVBQUVHO0FBQVosS0FDSSxNQUFDLG9FQUFEO0FBQWEsUUFBSSxFQUFDO0FBQWxCLElBREosQ0FKSixDQVRKLEVBaUJJLE1BQUMsbURBQUQ7QUFBSyxZQUFRLEVBQUMsY0FBZDtBQUE2QixTQUFLLEVBQUMsZUFBbkM7QUFBbUQsU0FBSyxFQUFFSDtBQUExRCxLQUlJO0FBQUssU0FBSyxFQUFFRztBQUFaLEtBQ0ksTUFBQyxvRUFBRDtBQUFhLFFBQUksRUFBQztBQUFsQixJQURKLENBSkosQ0FqQkosQ0FGSixFQTRCSSxNQUFDLDJFQUFELE9BNUJKLENBREo7QUFnQ0gsQ0E1Q0Q7O0FBK0NlSixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Jsb2cubW9kdWxlLmNzcyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbGl0aWVzL05hdmJhci9OYXZiYXInO1xuaW1wb3J0IHsgVGFicywgVGFiIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBCbG9nU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3QvQmxvZ1NlY3Rpb24nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxpdGllcy9Gb290ZXIvRm9vdGVyJztcblxuY29uc3QgQmxvZyA9ICgpID0+IHtcblxuICAgIGNvbnN0IHN0eWxlc1RhYiA9IHtcbiAgICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4J1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrZGl2ID0ge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCJzdHVkZW50Q29ybmVyXCIgaWQ9XCJ1bmNvbnRyb2xsZWQtdGFiLWV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgICA8VGFiIGV2ZW50S2V5PVwic3R1ZGVudENvcm5lclwiIHRpdGxlPVwiU3R1ZGVudCBDb3JuZXJcIiBzdHlsZT17c3R5bGVzVGFifT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5UaGlzIGlzIG5pY2U8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Jsb2NrZGl2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9nU2VjdGlvbiB0eXBlPVwic3R1ZGVudENvcm5lclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgIDxUYWIgZXZlbnRLZXk9XCJhcnRpY2xlc1wiIHRpdGxlPVwiQXJ0aWNsZXNcIiBzdHlsZT17c3R5bGVzVGFifT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5UaGlzIGlzIG5vdCBuaWNlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtibG9ja2Rpdn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxvZ1NlY3Rpb24gdHlwZT1cImFydGljbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICA8VGFiIGV2ZW50S2V5PVwiY3VycmVudFdvcmxkXCIgdGl0bGU9XCJDdXJyZW50IFdvcmxkXCIgc3R5bGU9e3N0eWxlc1RhYn0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+VGhpcyBpcyB2ZXJ5IG5pY2U8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Jsb2NrZGl2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9nU2VjdGlvbiB0eXBlPVwiY3VycmVudFdvcmxkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBCbG9nOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ }),

/***/ "./public/images/thenaalogo.png":
/*!**************************************!*\
  !*** ./public/images/thenaalogo.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/thenaalogo-7fbc7a35592a86751dfbe73de8e52361.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL3RoZW5hYWxvZ28ucG5nP2YxOTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9wdWJsaWMvaW1hZ2VzL3RoZW5hYWxvZ28ucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3RoZW5hYWxvZ28tN2ZiYzdhMzU1OTJhODY3NTFkZmJlNzNkZThlNTIzNjEucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/images/thenaalogo.png\n");

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/blog.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sauravskv/Desktop/TheNAA-Blog/pages/blog.js */"./pages/blog.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

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