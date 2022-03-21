/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: pageFont;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n  margin: 0;\n  height: 100vh;\n  display: grid;\n  background-color: #262626;\n  grid-template-rows: 50px 1fr;\n  font-family: pageFont;\n}\n\nheader {\n  background-color: #171717;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.search-bar-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.search-location {\n  border: 1px solid white;\n  border-right: none;\n  padding: 5px;\n  height: 24px;\n  border-radius: 5px 0 0 5px;\n  outline: none;\n  background-color: #171717;\n  color: white;\n}\n\n.search-button {\n  width: 40px;\n  height: 36px;\n  border: 1px solid white;\n  border-radius: 0 5px 5px 0;\n  background: #171717;\n  text-align: center;\n  color: white;\n  cursor: pointer;\n  font-size: 1.5em;\n}\n\n.temperature-metric {\n  width: 80px;\n  height: 34px;\n  border: 1px solid white;\n  background: #171717;\n  color: white;\n  cursor: pointer;\n  font-size: 1.5em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#content {\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  color: white;\n}\n\n.current-weather-container {\n  border: 1px solid white;\n  border-radius: 20px;\n  padding: 20px;\n  height: 200px;\n  width: fit-content;\n  display: grid;\n  grid-template-rows: fit-content;\n}\n\n.current-location {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3em;\n  font-weight: bold;\n}\n\n.current-temperature {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 4em;\n  font-weight: bold;\n}\n\n.current-weather-info {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n}\n\n.high-low {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.5em;\n}\n\n.hourly-weather-container {\n  border: 1px solid white;\n  border-radius: 20px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  width: 500px;\n  overflow: scroll;\n  overflow-y: hidden;\n}\n\n.hourly-weather {\n  border: 1px solid white;\n  text-align: center;\n  padding: 10px 0 10px 0;\n  font-weight: bold;\n}\n\n.weekly-weather-container {\n  border: 1px solid white;\n  border-radius: 20px;\n  padding: 20px;\n  font-weight: bold;\n  width: 500px;\n}\n\n.weekly-weather {\n  border: 1px solid white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px 0 10px;\n}\n\n.day-week-temperature {\n  display: flex;\n  gap: 10px;\n}\n\n.day-high-temperature {\n  color: #fbbf24;\n}\n\n.day-low-temperature {\n  color: #22d3ee;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAoC;AACtC;;AAEA;EACE,SAAS;EACT,aAAa;EACb,aAAa;EACb,yBAAyB;EACzB,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,0BAA0B;EAC1B,aAAa;EACb,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,0BAA0B;EAC1B,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB","sourcesContent":["@font-face {\n  font-family: pageFont;\n  src: url('fonts/Roboto-Regular.ttf');\n}\n\nbody {\n  margin: 0;\n  height: 100vh;\n  display: grid;\n  background-color: #262626;\n  grid-template-rows: 50px 1fr;\n  font-family: pageFont;\n}\n\nheader {\n  background-color: #171717;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.search-bar-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.search-location {\n  border: 1px solid white;\n  border-right: none;\n  padding: 5px;\n  height: 24px;\n  border-radius: 5px 0 0 5px;\n  outline: none;\n  background-color: #171717;\n  color: white;\n}\n\n.search-button {\n  width: 40px;\n  height: 36px;\n  border: 1px solid white;\n  border-radius: 0 5px 5px 0;\n  background: #171717;\n  text-align: center;\n  color: white;\n  cursor: pointer;\n  font-size: 1.5em;\n}\n\n.temperature-metric {\n  width: 80px;\n  height: 34px;\n  border: 1px solid white;\n  background: #171717;\n  color: white;\n  cursor: pointer;\n  font-size: 1.5em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#content {\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  color: white;\n}\n\n.current-weather-container {\n  border: 1px solid white;\n  border-radius: 20px;\n  padding: 20px;\n  height: 200px;\n  width: fit-content;\n  display: grid;\n  grid-template-rows: fit-content;\n}\n\n.current-location {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3em;\n  font-weight: bold;\n}\n\n.current-temperature {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 4em;\n  font-weight: bold;\n}\n\n.current-weather-info {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n}\n\n.high-low {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.5em;\n}\n\n.hourly-weather-container {\n  border: 1px solid white;\n  border-radius: 20px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  width: 500px;\n  overflow: scroll;\n  overflow-y: hidden;\n}\n\n.hourly-weather {\n  border: 1px solid white;\n  text-align: center;\n  padding: 10px 0 10px 0;\n  font-weight: bold;\n}\n\n.weekly-weather-container {\n  border: 1px solid white;\n  border-radius: 20px;\n  padding: 20px;\n  font-weight: bold;\n  width: 500px;\n}\n\n.weekly-weather {\n  border: 1px solid white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px 0 10px;\n}\n\n.day-week-temperature {\n  display: flex;\n  gap: 10px;\n}\n\n.day-high-temperature {\n  color: #fbbf24;\n}\n\n.day-low-temperature {\n  color: #22d3ee;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WeatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherAPI */ "./src/modules/WeatherAPI.js");


class DOM {

  static weatherInfo;
  static currentMetric = 'f';

  static searchWeather() {
    const searchResult = document.querySelector('.search-location');
    const searchBtn = document.querySelector('.search-button');
    searchResult.addEventListener('keyup', (e) => this.keyPress(e, searchResult.value));
    searchBtn.addEventListener('click', () => this.changeWeather(searchResult.value));
  }

  static keyPress(e, placeName) {
    if(e.keyCode === 13 && placeName !== '') {
      this.changeWeather(placeName);
    }
  }

  static clickTemperatureMetric() {
    const temperatureMetric = document.querySelector('.temperature-metric');
    temperatureMetric.addEventListener('click', () => this.changeTemperatureMetric());
  }
  
  // Change the metrics based on the current selected metric.
  static changeTemperatureMetric() {
    if(this.currentMetric === 'f') {
      document.querySelector('.current-temperature').textContent = `${this.weatherInfo.celcius}°C`;
      document.querySelector('.current-high').textContent = `H: ${this.weatherInfo.celciusHigh}°C`;
      document.querySelector('.current-low').textContent = `L: ${this.weatherInfo.celciusLow}°C`;
  
      let counter = 0;
      document.querySelectorAll('.hourly-weather').forEach(element => {
        element.childNodes[2].textContent = `${Math.round(this.weatherInfo.hourlyData[counter].temp - 273.15)}°C`;
        counter++;
      });
  
      counter = 0;
      document.querySelectorAll('.weekly-weather').forEach(element => {
        element.childNodes[2].childNodes[0].textContent = `${Math.round(this.weatherInfo.weeklyData[counter].temp.min - 273.15)}°C`;
        element.childNodes[2].childNodes[1].textContent = `${Math.round(this.weatherInfo.weeklyData[counter].temp.day - 273.15)}°C`;
        element.childNodes[2].childNodes[2].textContent = `${Math.round(this.weatherInfo.weeklyData[counter].temp.max - 273.15)}°C`;
        counter++;
      });

      this.currentMetric = 'c';
    }
    else if(this.currentMetric === 'c') {
      document.querySelector('.current-temperature').textContent = `${this.weatherInfo.fahrenheit}°F`;
      document.querySelector('.current-high').textContent = `H: ${this.weatherInfo.fahrenheitHigh}°F`;
      document.querySelector('.current-low').textContent = `L: ${this.weatherInfo.fahrenheitLow}°F`;
  
      let counter = 0;
      document.querySelectorAll('.hourly-weather').forEach(element => {
        element.childNodes[2].textContent = `${Math.round(1.8 * (this.weatherInfo.hourlyData[counter].temp - 273.15) + 32)}°F`;
        counter++;
      });
  
      counter = 0;
      document.querySelectorAll('.weekly-weather').forEach(element => {
        element.childNodes[2].childNodes[0].textContent = `${Math.round(1.8 * (this.weatherInfo.weeklyData[counter].temp.min - 273.15) + 32)}°F`;
        element.childNodes[2].childNodes[1].textContent = `${Math.round(1.8 * (this.weatherInfo.weeklyData[counter].temp.day - 273.15) + 32)}°F`;
        element.childNodes[2].childNodes[2].textContent = `${Math.round(1.8 * (this.weatherInfo.weeklyData[counter].temp.max - 273.15) + 32)}°F`;
        counter++;
      });

      this.currentMetric = 'f';
    }
  }

  // Change weather according to the current metric.
  static async changeWeather(placeName) {
    this.weatherInfo = await _WeatherAPI__WEBPACK_IMPORTED_MODULE_0__["default"].getAllWeather(placeName);
    console.log(this.weatherInfo);

    if(this.currentMetric === 'f') {
      document.querySelector('.current-location').textContent = `${this.weatherInfo.locationName}`;
      document.querySelector('.current-temperature').textContent = `${this.weatherInfo.fahrenheit}°F`;
      document.querySelector('.current-weather-info').textContent = `${this.weatherInfo.weatherMain}`;
      document.querySelector('.current-high').textContent = `H: ${this.weatherInfo.fahrenheitHigh}°F`;
      document.querySelector('.current-low').textContent = `L: ${this.weatherInfo.fahrenheitLow}°F`;

      let counter = 0;
      document.querySelectorAll('.hourly-weather').forEach(element => {
        element.childNodes[0].textContent = (new Date(this.weatherInfo.hourlyData[counter].dt * 1000)).toLocaleTimeString();
        element.childNodes[1].src = `http://openweathermap.org/img/wn/${this.weatherInfo.hourlyData[counter].weather[0].icon}@2x.png`;
        element.childNodes[2].textContent = `${Math.round(1.8 * (this.weatherInfo.hourlyData[counter].temp - 273.15) + 32)}°F`;
        counter++;
      });

      counter = 0;
      document.querySelectorAll('.weekly-weather').forEach(element => {
        element.childNodes[0].textContent = (new Date(this.weatherInfo.weeklyData[counter].dt * 1000)).toLocaleDateString('en-US',{weekday: 'long'});
        element.childNodes[1].src =  `http://openweathermap.org/img/wn/${this.weatherInfo.weeklyData[counter].weather[0].icon}@2x.png`;
        element.childNodes[2].childNodes[0].textContent = `${Math.round(1.8 * (this.weatherInfo.weeklyData[counter].temp.min - 273.15) + 32)}°F`;
        element.childNodes[2].childNodes[1].textContent = `${Math.round(1.8 * (this.weatherInfo.weeklyData[counter].temp.day - 273.15) + 32)}°F`;
        element.childNodes[2].childNodes[2].textContent = `${Math.round(1.8 * (this.weatherInfo.weeklyData[counter].temp.max - 273.15) + 32)}°F`;
        counter++;
      });      
    }
    else if(this.currentMetric === 'c') {
      document.querySelector('.current-location').textContent = `${this.weatherInfo.locationName}`;
      document.querySelector('.current-temperature').textContent = `${this.weatherInfo.celcius}°C`;
      document.querySelector('.current-weather-info').textContent = `${this.weatherInfo.weatherMain}`;
      document.querySelector('.current-high').textContent = `H: ${this.weatherInfo.celciusHigh}°C`;
      document.querySelector('.current-low').textContent = `L: ${this.weatherInfo.celciusLow}°C`;
  
      let counter = 0;
      document.querySelectorAll('.hourly-weather').forEach(element => {
        element.childNodes[0].textContent = (new Date(this.weatherInfo.hourlyData[counter].dt * 1000)).toLocaleTimeString();
        element.childNodes[1].src = `http://openweathermap.org/img/wn/${this.weatherInfo.hourlyData[counter].weather[0].icon}@2x.png`;
        element.childNodes[2].textContent = `${Math.round(this.weatherInfo.hourlyData[counter].temp - 273.15)}°C`;
        counter++;
      });
  
      counter = 0;
      document.querySelectorAll('.weekly-weather').forEach(element => {
        element.childNodes[0].textContent = (new Date(this.weatherInfo.weeklyData[counter].dt * 1000)).toLocaleDateString('en-US',{weekday: 'long'});
        element.childNodes[1].src =  `http://openweathermap.org/img/wn/${this.weatherInfo.weeklyData[counter].weather[0].icon}@2x.png`;
        element.childNodes[2].childNodes[0].textContent = `${Math.round(this.weatherInfo.weeklyData[counter].temp.min - 273.15)}°C`;
        element.childNodes[2].childNodes[1].textContent = `${Math.round(this.weatherInfo.weeklyData[counter].temp.day - 273.15)}°C`;
        element.childNodes[2].childNodes[2].textContent = `${Math.round(this.weatherInfo.weeklyData[counter].temp.max - 273.15)}°C`;
        counter++;
      });
    }

  }


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class UI {

  static createE(element, className, text) {
    const e = document.createElement(`${element}`);
    e.classList.add(`${className}`);
    e.textContent = `${text}`;

    return e;
  }

  static header() {
    const header = document.createElement('header');
    header.textContent = 'Weather App';

    return header;
  }

  static searchBar() {
    const searchBarContainer = this.createE('div', 'search-bar-container', '');
    const searchInput = this.createE('input', 'search-location', '');
    searchInput.type = 'text';
    searchInput.placeholder = 'Location Name';
    searchBarContainer.appendChild(searchInput);
    const searchBtn = this.createE('button', 'search-button', '');
    const searchImg = this.createE('i', 'fa', '');
    searchImg.classList.add('fa-search');
    searchImg.ariaHidden = 'true';
    searchBtn.appendChild(searchImg);
    searchBarContainer.appendChild(searchBtn);

    return searchBarContainer;
  }

  static temperatureMetric() {
    const temperatureMetric = this.createE('div', 'temperature-metric', '');
    temperatureMetric.textContent = '°F / °C';

    return temperatureMetric;
  }

  static content() {
    const content = document.createElement('div');
    content.id = 'content';

    return content;
  }

  static currentWeather() {
    const currentWeatherContainer = this.createE('div', 'current-weather-container', '');

    const currentLocation = this.createE('div', 'current-location', '');
    currentWeatherContainer.appendChild(currentLocation);
    const currentTemperature = this.createE('div', 'current-temperature', '');
    currentWeatherContainer.appendChild(currentTemperature);
    const currentWeatherInfo = this.createE('div', 'current-weather-info', '');
    currentWeatherContainer.appendChild(currentWeatherInfo);
    const highLowTemperature = this.createE('div', 'high-low', '');
    const currentHighTemperature = this.createE('div', 'current-high', '');
    const currentLowTemperature = this.createE('div', 'current-low', '');
    highLowTemperature.appendChild(currentHighTemperature);
    highLowTemperature.appendChild(currentLowTemperature);
    currentWeatherContainer.appendChild(highLowTemperature);

    return currentWeatherContainer;
  }

  static hourlyWeather() {
    const hourlyWeatherContainer = this.createE('div', 'hourly-weather-container', '');

    for(let i = 0; i < 25; i++) {
      const hourlyWeather = this.createE('div', 'hourly-weather', '');
      const timeHour = this.createE('div', 'time-hour', '');
      hourlyWeather.appendChild(timeHour);
      const weatherIcon = this.createE('img', 'weather-icon', '');
      hourlyWeather.appendChild(weatherIcon);
      const hourlyTemperature = this.createE('div', 'hourly-temperature', '');
      hourlyWeather.appendChild(hourlyTemperature);
      hourlyWeatherContainer.appendChild(hourlyWeather);
    }

    return hourlyWeatherContainer;
  }

  static weeklyWeather() {
    const weeklyWeatherContainer = this.createE('div', 'weekly-weather-container', '');

    for(let i = 0; i < 8; i++) {
      const weeklyWeather = this.createE('div', 'weekly-weather', '');
      const dayWeek = this.createE('div', 'day-week', '');
      weeklyWeather.appendChild(dayWeek);
      const weatherIcon = this.createE('img', 'weather-icon', '');
      weeklyWeather.appendChild(weatherIcon);
      const dayWeekTemperature = this.createE('div', 'day-week-temperature', '');
      const dayLowTemperature = this.createE('div', 'day-low-temperature', '');
      const dayTemperature = this.createE('div', 'day-temperature', '');
      const dayHighTemperature = this.createE('div', 'day-high-temperature', '');
      dayWeekTemperature.appendChild(dayLowTemperature);
      dayWeekTemperature.appendChild(dayTemperature);
      dayWeekTemperature.appendChild(dayHighTemperature);
      weeklyWeather.appendChild(dayWeekTemperature);
      weeklyWeatherContainer.appendChild(weeklyWeather);
    }

    return weeklyWeatherContainer;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./src/modules/WeatherAPI.js":
/*!***********************************!*\
  !*** ./src/modules/WeatherAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class WeatherAPI {
  static key = '5f070dc6134892e08bafa2d8888b94ef';

  static async getLocationData(placeName) {
    const location = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${placeName}&limit=5&appid=${this.key}`, {mode: 'cors'});
    const locationData = await location.json();
    const lat = locationData[0].lat;
    const lon = locationData[0].lon;

    return {lat, lon};
  }

  static async getAllWeather(placeName) {
    const {lat, lon} = await this.getLocationData(placeName);

    const currentWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.key}`, {mode: 'cors'});
    const weatherData = await currentWeather.json();

    // Name
    const locationName = weatherData.name;

    // Fahrenheit, F = 1.8 * (K - 273.15) + 32
    const fahrenheit = Math.round(1.8 * (weatherData.main.temp - 273.15) + 32);

    // Celcius,    C = K - 273.15
    const celcius = Math.round(weatherData.main.temp - 273.15);

    // Weather
    const weatherMain = weatherData.weather[0].main;
    const weatherDescription = weatherData.weather[0].description;

    // High and Low
    const fahrenheitHigh = Math.round(1.8 * (weatherData.main.temp_max - 273.15) + 32);
    const fahrenheitLow = Math.round(1.8 * (weatherData.main.temp_min - 273.15) + 32);
    const celciusHigh = Math.round(weatherData.main.temp_max - 273.15);
    const celciusLow = Math.round(weatherData.main.temp_min - 273.15);
  
    console.log({locationName, fahrenheit, celcius, weatherMain, weatherDescription, fahrenheitHigh, fahrenheitLow, celciusHigh, celciusLow})

    const allWeather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${this.key}`, {mode: 'cors'});
    const allWeatherData = await allWeather.json();
    console.log(allWeatherData);

    const hourlyData = allWeatherData.hourly.slice(0, 25);
    const weeklyData = allWeatherData.daily;

    return {locationName, fahrenheit, celcius, weatherMain, weatherDescription, fahrenheitHigh, fahrenheitLow, celciusHigh, celciusLow, hourlyData, weeklyData};
  }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherAPI);

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8d6ac03c7b96b7acb62.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.js");





document.body.append(_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].header());
document.body.append(_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].content());
document.getElementById('content').appendChild(_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].searchBar());
document.getElementById('content').appendChild(_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].temperatureMetric());
document.getElementById('content').appendChild(_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].currentWeather());
document.getElementById('content').appendChild(_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].hourlyWeather());
document.getElementById('content').appendChild(_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].weeklyWeather());
_modules_DOM__WEBPACK_IMPORTED_MODULE_2__["default"].searchWeather();
_modules_DOM__WEBPACK_IMPORTED_MODULE_2__["default"].clickTemperatureMetric();
_modules_DOM__WEBPACK_IMPORTED_MODULE_2__["default"].changeWeather('New York');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZO0FBQzNELCtDQUErQyxxRUFBb0I7QUFDbkUsK0NBQStDLGtFQUFpQjtBQUNoRSwrQ0FBK0MsaUVBQWdCO0FBQy9ELCtDQUErQyxpRUFBZ0I7QUFDL0Qsa0VBQWlCO0FBQ2pCLDJFQUEwQjtBQUMxQixrRUFBaUIsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvV2VhdGhlckFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHBhZ2VGb250O1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxuICBmb250LWZhbWlseTogcGFnZUZvbnQ7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWFyY2gtYmFyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1sb2NhdGlvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXG4gIGJhY2tncm91bmQ6ICMxNzE3MTc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtbWV0cmljIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiAjMTcxNzE3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmN1cnJlbnQtbG9jYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jdXJyZW50LXRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDRlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5oaWdoLWxvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmhvdXJseS13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTAwcHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uaG91cmx5LXdlYXRoZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi53ZWVrbHktd2VhdGhlci1jb250YWluZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4ud2Vla2x5LXdlYXRoZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxufVxcblxcbi5kYXktd2Vlay10ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZGF5LWhpZ2gtdGVtcGVyYXR1cmUge1xcbiAgY29sb3I6ICNmYmJmMjQ7XFxufVxcblxcbi5kYXktbG93LXRlbXBlcmF0dXJlIHtcXG4gIGNvbG9yOiAjMjJkM2VlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogcGFnZUZvbnQ7XFxuICBzcmM6IHVybCgnZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcXG4gIGZvbnQtZmFtaWx5OiBwYWdlRm9udDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNlYXJjaC1iYXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoLWxvY2F0aW9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xcbiAgYmFja2dyb3VuZDogIzE3MTcxNztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZS1tZXRyaWMge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6ICMxNzE3MTc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uY3VycmVudC1sb2NhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmhpZ2gtbG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4uaG91cmx5LXdlYXRoZXItY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5ob3VybHktd2VhdGhlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLndlZWtseS13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi53ZWVrbHktd2VhdGhlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG59XFxuXFxuLmRheS13ZWVrLXRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5kYXktaGlnaC10ZW1wZXJhdHVyZSB7XFxuICBjb2xvcjogI2ZiYmYyNDtcXG59XFxuXFxuLmRheS1sb3ctdGVtcGVyYXR1cmUge1xcbiAgY29sb3I6ICMyMmQzZWU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgV2VhdGhlckFQSSBmcm9tIFwiLi9XZWF0aGVyQVBJXCI7XG5cbmNsYXNzIERPTSB7XG5cbiAgc3RhdGljIHdlYXRoZXJJbmZvO1xuICBzdGF0aWMgY3VycmVudE1ldHJpYyA9ICdmJztcblxuICBzdGF0aWMgc2VhcmNoV2VhdGhlcigpIHtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWxvY2F0aW9uJyk7XG4gICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idXR0b24nKTtcbiAgICBzZWFyY2hSZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4gdGhpcy5rZXlQcmVzcyhlLCBzZWFyY2hSZXN1bHQudmFsdWUpKTtcbiAgICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNoYW5nZVdlYXRoZXIoc2VhcmNoUmVzdWx0LnZhbHVlKSk7XG4gIH1cblxuICBzdGF0aWMga2V5UHJlc3MoZSwgcGxhY2VOYW1lKSB7XG4gICAgaWYoZS5rZXlDb2RlID09PSAxMyAmJiBwbGFjZU5hbWUgIT09ICcnKSB7XG4gICAgICB0aGlzLmNoYW5nZVdlYXRoZXIocGxhY2VOYW1lKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xpY2tUZW1wZXJhdHVyZU1ldHJpYygpIHtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZU1ldHJpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS1tZXRyaWMnKTtcbiAgICB0ZW1wZXJhdHVyZU1ldHJpYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2hhbmdlVGVtcGVyYXR1cmVNZXRyaWMoKSk7XG4gIH1cbiAgXG4gIC8vIENoYW5nZSB0aGUgbWV0cmljcyBiYXNlZCBvbiB0aGUgY3VycmVudCBzZWxlY3RlZCBtZXRyaWMuXG4gIHN0YXRpYyBjaGFuZ2VUZW1wZXJhdHVyZU1ldHJpYygpIHtcbiAgICBpZih0aGlzLmN1cnJlbnRNZXRyaWMgPT09ICdmJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGVtcGVyYXR1cmUnKS50ZXh0Q29udGVudCA9IGAke3RoaXMud2VhdGhlckluZm8uY2VsY2l1c33CsENgO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtaGlnaCcpLnRleHRDb250ZW50ID0gYEg6ICR7dGhpcy53ZWF0aGVySW5mby5jZWxjaXVzSGlnaH3CsENgO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtbG93JykudGV4dENvbnRlbnQgPSBgTDogJHt0aGlzLndlYXRoZXJJbmZvLmNlbGNpdXNMb3d9wrBDYDtcbiAgXG4gICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cmx5LXdlYXRoZXInKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHRoaXMud2VhdGhlckluZm8uaG91cmx5RGF0YVtjb3VudGVyXS50ZW1wIC0gMjczLjE1KX3CsENgO1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9KTtcbiAgXG4gICAgICBjb3VudGVyID0gMDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWVrbHktd2VhdGhlcicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh0aGlzLndlYXRoZXJJbmZvLndlZWtseURhdGFbY291bnRlcl0udGVtcC5taW4gLSAyNzMuMTUpfcKwQ2A7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh0aGlzLndlYXRoZXJJbmZvLndlZWtseURhdGFbY291bnRlcl0udGVtcC5kYXkgLSAyNzMuMTUpfcKwQ2A7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh0aGlzLndlYXRoZXJJbmZvLndlZWtseURhdGFbY291bnRlcl0udGVtcC5tYXggLSAyNzMuMTUpfcKwQ2A7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmN1cnJlbnRNZXRyaWMgPSAnYyc7XG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy5jdXJyZW50TWV0cmljID09PSAnYycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRlbXBlcmF0dXJlJykudGV4dENvbnRlbnQgPSBgJHt0aGlzLndlYXRoZXJJbmZvLmZhaHJlbmhlaXR9wrBGYDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWhpZ2gnKS50ZXh0Q29udGVudCA9IGBIOiAke3RoaXMud2VhdGhlckluZm8uZmFocmVuaGVpdEhpZ2h9wrBGYDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWxvdycpLnRleHRDb250ZW50ID0gYEw6ICR7dGhpcy53ZWF0aGVySW5mby5mYWhyZW5oZWl0TG93fcKwRmA7XG4gIFxuICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJseS13ZWF0aGVyJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgxLjggKiAodGhpcy53ZWF0aGVySW5mby5ob3VybHlEYXRhW2NvdW50ZXJdLnRlbXAgLSAyNzMuMTUpICsgMzIpfcKwRmA7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgIH0pO1xuICBcbiAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlZWtseS13ZWF0aGVyJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKDEuOCAqICh0aGlzLndlYXRoZXJJbmZvLndlZWtseURhdGFbY291bnRlcl0udGVtcC5taW4gLSAyNzMuMTUpICsgMzIpfcKwRmA7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgxLjggKiAodGhpcy53ZWF0aGVySW5mby53ZWVrbHlEYXRhW2NvdW50ZXJdLnRlbXAuZGF5IC0gMjczLjE1KSArIDMyKX3CsEZgO1xuICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoMS44ICogKHRoaXMud2VhdGhlckluZm8ud2Vla2x5RGF0YVtjb3VudGVyXS50ZW1wLm1heCAtIDI3My4xNSkgKyAzMil9wrBGYDtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY3VycmVudE1ldHJpYyA9ICdmJztcbiAgICB9XG4gIH1cblxuICAvLyBDaGFuZ2Ugd2VhdGhlciBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgbWV0cmljLlxuICBzdGF0aWMgYXN5bmMgY2hhbmdlV2VhdGhlcihwbGFjZU5hbWUpIHtcbiAgICB0aGlzLndlYXRoZXJJbmZvID0gYXdhaXQgV2VhdGhlckFQSS5nZXRBbGxXZWF0aGVyKHBsYWNlTmFtZSk7XG4gICAgY29uc29sZS5sb2codGhpcy53ZWF0aGVySW5mbyk7XG5cbiAgICBpZih0aGlzLmN1cnJlbnRNZXRyaWMgPT09ICdmJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtbG9jYXRpb24nKS50ZXh0Q29udGVudCA9IGAke3RoaXMud2VhdGhlckluZm8ubG9jYXRpb25OYW1lfWA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10ZW1wZXJhdHVyZScpLnRleHRDb250ZW50ID0gYCR7dGhpcy53ZWF0aGVySW5mby5mYWhyZW5oZWl0fcKwRmA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC13ZWF0aGVyLWluZm8nKS50ZXh0Q29udGVudCA9IGAke3RoaXMud2VhdGhlckluZm8ud2VhdGhlck1haW59YDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWhpZ2gnKS50ZXh0Q29udGVudCA9IGBIOiAke3RoaXMud2VhdGhlckluZm8uZmFocmVuaGVpdEhpZ2h9wrBGYDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWxvdycpLnRleHRDb250ZW50ID0gYEw6ICR7dGhpcy53ZWF0aGVySW5mby5mYWhyZW5oZWl0TG93fcKwRmA7XG5cbiAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VybHktd2VhdGhlcicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IChuZXcgRGF0ZSh0aGlzLndlYXRoZXJJbmZvLmhvdXJseURhdGFbY291bnRlcl0uZHQgKiAxMDAwKSkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1sxXS5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt0aGlzLndlYXRoZXJJbmZvLmhvdXJseURhdGFbY291bnRlcl0ud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKDEuOCAqICh0aGlzLndlYXRoZXJJbmZvLmhvdXJseURhdGFbY291bnRlcl0udGVtcCAtIDI3My4xNSkgKyAzMil9wrBGYDtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgfSk7XG5cbiAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlZWtseS13ZWF0aGVyJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gKG5ldyBEYXRlKHRoaXMud2VhdGhlckluZm8ud2Vla2x5RGF0YVtjb3VudGVyXS5kdCAqIDEwMDApKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJyx7d2Vla2RheTogJ2xvbmcnfSk7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1sxXS5zcmMgPSAgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7dGhpcy53ZWF0aGVySW5mby53ZWVrbHlEYXRhW2NvdW50ZXJdLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKDEuOCAqICh0aGlzLndlYXRoZXJJbmZvLndlZWtseURhdGFbY291bnRlcl0udGVtcC5taW4gLSAyNzMuMTUpICsgMzIpfcKwRmA7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgxLjggKiAodGhpcy53ZWF0aGVySW5mby53ZWVrbHlEYXRhW2NvdW50ZXJdLnRlbXAuZGF5IC0gMjczLjE1KSArIDMyKX3CsEZgO1xuICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoMS44ICogKHRoaXMud2VhdGhlckluZm8ud2Vla2x5RGF0YVtjb3VudGVyXS50ZW1wLm1heCAtIDI3My4xNSkgKyAzMil9wrBGYDtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgfSk7ICAgICAgXG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy5jdXJyZW50TWV0cmljID09PSAnYycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWxvY2F0aW9uJykudGV4dENvbnRlbnQgPSBgJHt0aGlzLndlYXRoZXJJbmZvLmxvY2F0aW9uTmFtZX1gO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGVtcGVyYXR1cmUnKS50ZXh0Q29udGVudCA9IGAke3RoaXMud2VhdGhlckluZm8uY2VsY2l1c33CsENgO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtd2VhdGhlci1pbmZvJykudGV4dENvbnRlbnQgPSBgJHt0aGlzLndlYXRoZXJJbmZvLndlYXRoZXJNYWlufWA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1oaWdoJykudGV4dENvbnRlbnQgPSBgSDogJHt0aGlzLndlYXRoZXJJbmZvLmNlbGNpdXNIaWdofcKwQ2A7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1sb3cnKS50ZXh0Q29udGVudCA9IGBMOiAke3RoaXMud2VhdGhlckluZm8uY2VsY2l1c0xvd33CsENgO1xuICBcbiAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VybHktd2VhdGhlcicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IChuZXcgRGF0ZSh0aGlzLndlYXRoZXJJbmZvLmhvdXJseURhdGFbY291bnRlcl0uZHQgKiAxMDAwKSkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1sxXS5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt0aGlzLndlYXRoZXJJbmZvLmhvdXJseURhdGFbY291bnRlcl0ud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHRoaXMud2VhdGhlckluZm8uaG91cmx5RGF0YVtjb3VudGVyXS50ZW1wIC0gMjczLjE1KX3CsENgO1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9KTtcbiAgXG4gICAgICBjb3VudGVyID0gMDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWVrbHktd2VhdGhlcicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IChuZXcgRGF0ZSh0aGlzLndlYXRoZXJJbmZvLndlZWtseURhdGFbY291bnRlcl0uZHQgKiAxMDAwKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycse3dlZWtkYXk6ICdsb25nJ30pO1xuICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMV0uc3JjID0gIGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3RoaXMud2VhdGhlckluZm8ud2Vla2x5RGF0YVtjb3VudGVyXS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh0aGlzLndlYXRoZXJJbmZvLndlZWtseURhdGFbY291bnRlcl0udGVtcC5taW4gLSAyNzMuMTUpfcKwQ2A7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh0aGlzLndlYXRoZXJJbmZvLndlZWtseURhdGFbY291bnRlcl0udGVtcC5kYXkgLSAyNzMuMTUpfcKwQ2A7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh0aGlzLndlYXRoZXJJbmZvLndlZWtseURhdGFbY291bnRlcl0udGVtcC5tYXggLSAyNzMuMTUpfcKwQ2A7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBET007IiwiY2xhc3MgVUkge1xuXG4gIHN0YXRpYyBjcmVhdGVFKGVsZW1lbnQsIGNsYXNzTmFtZSwgdGV4dCkge1xuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsZW1lbnR9YCk7XG4gICAgZS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKTtcbiAgICBlLnRleHRDb250ZW50ID0gYCR7dGV4dH1gO1xuXG4gICAgcmV0dXJuIGU7XG4gIH1cblxuICBzdGF0aWMgaGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdXZWF0aGVyIEFwcCc7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xuICB9XG5cbiAgc3RhdGljIHNlYXJjaEJhcigpIHtcbiAgICBjb25zdCBzZWFyY2hCYXJDb250YWluZXIgPSB0aGlzLmNyZWF0ZUUoJ2RpdicsICdzZWFyY2gtYmFyLWNvbnRhaW5lcicsICcnKTtcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IHRoaXMuY3JlYXRlRSgnaW5wdXQnLCAnc2VhcmNoLWxvY2F0aW9uJywgJycpO1xuICAgIHNlYXJjaElucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSAnTG9jYXRpb24gTmFtZSc7XG4gICAgc2VhcmNoQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbiAgICBjb25zdCBzZWFyY2hCdG4gPSB0aGlzLmNyZWF0ZUUoJ2J1dHRvbicsICdzZWFyY2gtYnV0dG9uJywgJycpO1xuICAgIGNvbnN0IHNlYXJjaEltZyA9IHRoaXMuY3JlYXRlRSgnaScsICdmYScsICcnKTtcbiAgICBzZWFyY2hJbWcuY2xhc3NMaXN0LmFkZCgnZmEtc2VhcmNoJyk7XG4gICAgc2VhcmNoSW1nLmFyaWFIaWRkZW4gPSAndHJ1ZSc7XG4gICAgc2VhcmNoQnRuLmFwcGVuZENoaWxkKHNlYXJjaEltZyk7XG4gICAgc2VhcmNoQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJ0bik7XG5cbiAgICByZXR1cm4gc2VhcmNoQmFyQ29udGFpbmVyO1xuICB9XG5cbiAgc3RhdGljIHRlbXBlcmF0dXJlTWV0cmljKCkge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlTWV0cmljID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAndGVtcGVyYXR1cmUtbWV0cmljJywgJycpO1xuICAgIHRlbXBlcmF0dXJlTWV0cmljLnRleHRDb250ZW50ID0gJ8KwRiAvIMKwQyc7XG5cbiAgICByZXR1cm4gdGVtcGVyYXR1cmVNZXRyaWM7XG4gIH1cblxuICBzdGF0aWMgY29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5pZCA9ICdjb250ZW50JztcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGN1cnJlbnRXZWF0aGVyKCkge1xuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAnY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lcicsICcnKTtcblxuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IHRoaXMuY3JlYXRlRSgnZGl2JywgJ2N1cnJlbnQtbG9jYXRpb24nLCAnJyk7XG4gICAgY3VycmVudFdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudExvY2F0aW9uKTtcbiAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmUgPSB0aGlzLmNyZWF0ZUUoJ2RpdicsICdjdXJyZW50LXRlbXBlcmF0dXJlJywgJycpO1xuICAgIGN1cnJlbnRXZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wZXJhdHVyZSk7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJJbmZvID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAnY3VycmVudC13ZWF0aGVyLWluZm8nLCAnJyk7XG4gICAgY3VycmVudFdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJJbmZvKTtcbiAgICBjb25zdCBoaWdoTG93VGVtcGVyYXR1cmUgPSB0aGlzLmNyZWF0ZUUoJ2RpdicsICdoaWdoLWxvdycsICcnKTtcbiAgICBjb25zdCBjdXJyZW50SGlnaFRlbXBlcmF0dXJlID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAnY3VycmVudC1oaWdoJywgJycpO1xuICAgIGNvbnN0IGN1cnJlbnRMb3dUZW1wZXJhdHVyZSA9IHRoaXMuY3JlYXRlRSgnZGl2JywgJ2N1cnJlbnQtbG93JywgJycpO1xuICAgIGhpZ2hMb3dUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZChjdXJyZW50SGlnaFRlbXBlcmF0dXJlKTtcbiAgICBoaWdoTG93VGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQoY3VycmVudExvd1RlbXBlcmF0dXJlKTtcbiAgICBjdXJyZW50V2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdoTG93VGVtcGVyYXR1cmUpO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyQ29udGFpbmVyO1xuICB9XG5cbiAgc3RhdGljIGhvdXJseVdlYXRoZXIoKSB7XG4gICAgY29uc3QgaG91cmx5V2VhdGhlckNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRSgnZGl2JywgJ2hvdXJseS13ZWF0aGVyLWNvbnRhaW5lcicsICcnKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XG4gICAgICBjb25zdCBob3VybHlXZWF0aGVyID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAnaG91cmx5LXdlYXRoZXInLCAnJyk7XG4gICAgICBjb25zdCB0aW1lSG91ciA9IHRoaXMuY3JlYXRlRSgnZGl2JywgJ3RpbWUtaG91cicsICcnKTtcbiAgICAgIGhvdXJseVdlYXRoZXIuYXBwZW5kQ2hpbGQodGltZUhvdXIpO1xuICAgICAgY29uc3Qgd2VhdGhlckljb24gPSB0aGlzLmNyZWF0ZUUoJ2ltZycsICd3ZWF0aGVyLWljb24nLCAnJyk7XG4gICAgICBob3VybHlXZWF0aGVyLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcbiAgICAgIGNvbnN0IGhvdXJseVRlbXBlcmF0dXJlID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAnaG91cmx5LXRlbXBlcmF0dXJlJywgJycpO1xuICAgICAgaG91cmx5V2VhdGhlci5hcHBlbmRDaGlsZChob3VybHlUZW1wZXJhdHVyZSk7XG4gICAgICBob3VybHlXZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseVdlYXRoZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBob3VybHlXZWF0aGVyQ29udGFpbmVyO1xuICB9XG5cbiAgc3RhdGljIHdlZWtseVdlYXRoZXIoKSB7XG4gICAgY29uc3Qgd2Vla2x5V2VhdGhlckNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRSgnZGl2JywgJ3dlZWtseS13ZWF0aGVyLWNvbnRhaW5lcicsICcnKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgIGNvbnN0IHdlZWtseVdlYXRoZXIgPSB0aGlzLmNyZWF0ZUUoJ2RpdicsICd3ZWVrbHktd2VhdGhlcicsICcnKTtcbiAgICAgIGNvbnN0IGRheVdlZWsgPSB0aGlzLmNyZWF0ZUUoJ2RpdicsICdkYXktd2VlaycsICcnKTtcbiAgICAgIHdlZWtseVdlYXRoZXIuYXBwZW5kQ2hpbGQoZGF5V2Vlayk7XG4gICAgICBjb25zdCB3ZWF0aGVySWNvbiA9IHRoaXMuY3JlYXRlRSgnaW1nJywgJ3dlYXRoZXItaWNvbicsICcnKTtcbiAgICAgIHdlZWtseVdlYXRoZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xuICAgICAgY29uc3QgZGF5V2Vla1RlbXBlcmF0dXJlID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAnZGF5LXdlZWstdGVtcGVyYXR1cmUnLCAnJyk7XG4gICAgICBjb25zdCBkYXlMb3dUZW1wZXJhdHVyZSA9IHRoaXMuY3JlYXRlRSgnZGl2JywgJ2RheS1sb3ctdGVtcGVyYXR1cmUnLCAnJyk7XG4gICAgICBjb25zdCBkYXlUZW1wZXJhdHVyZSA9IHRoaXMuY3JlYXRlRSgnZGl2JywgJ2RheS10ZW1wZXJhdHVyZScsICcnKTtcbiAgICAgIGNvbnN0IGRheUhpZ2hUZW1wZXJhdHVyZSA9IHRoaXMuY3JlYXRlRSgnZGl2JywgJ2RheS1oaWdoLXRlbXBlcmF0dXJlJywgJycpO1xuICAgICAgZGF5V2Vla1RlbXBlcmF0dXJlLmFwcGVuZENoaWxkKGRheUxvd1RlbXBlcmF0dXJlKTtcbiAgICAgIGRheVdlZWtUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZChkYXlUZW1wZXJhdHVyZSk7XG4gICAgICBkYXlXZWVrVGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQoZGF5SGlnaFRlbXBlcmF0dXJlKTtcbiAgICAgIHdlZWtseVdlYXRoZXIuYXBwZW5kQ2hpbGQoZGF5V2Vla1RlbXBlcmF0dXJlKTtcbiAgICAgIHdlZWtseVdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2Vla2x5V2VhdGhlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdlZWtseVdlYXRoZXJDb250YWluZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUk7IiwiY2xhc3MgV2VhdGhlckFQSSB7XG4gIHN0YXRpYyBrZXkgPSAnNWYwNzBkYzYxMzQ4OTJlMDhiYWZhMmQ4ODg4Yjk0ZWYnO1xuXG4gIHN0YXRpYyBhc3luYyBnZXRMb2NhdGlvbkRhdGEocGxhY2VOYW1lKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3BsYWNlTmFtZX0mbGltaXQ9NSZhcHBpZD0ke3RoaXMua2V5fWAsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBsb2NhdGlvbi5qc29uKCk7XG4gICAgY29uc3QgbGF0ID0gbG9jYXRpb25EYXRhWzBdLmxhdDtcbiAgICBjb25zdCBsb24gPSBsb2NhdGlvbkRhdGFbMF0ubG9uO1xuXG4gICAgcmV0dXJuIHtsYXQsIGxvbn07XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0QWxsV2VhdGhlcihwbGFjZU5hbWUpIHtcbiAgICBjb25zdCB7bGF0LCBsb259ID0gYXdhaXQgdGhpcy5nZXRMb2NhdGlvbkRhdGEocGxhY2VOYW1lKTtcblxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7dGhpcy5rZXl9YCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgY3VycmVudFdlYXRoZXIuanNvbigpO1xuXG4gICAgLy8gTmFtZVxuICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IHdlYXRoZXJEYXRhLm5hbWU7XG5cbiAgICAvLyBGYWhyZW5oZWl0LCBGID0gMS44ICogKEsgLSAyNzMuMTUpICsgMzJcbiAgICBjb25zdCBmYWhyZW5oZWl0ID0gTWF0aC5yb3VuZCgxLjggKiAod2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1KSArIDMyKTtcblxuICAgIC8vIENlbGNpdXMsICAgIEMgPSBLIC0gMjczLjE1XG4gICAgY29uc3QgY2VsY2l1cyA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1KTtcblxuICAgIC8vIFdlYXRoZXJcbiAgICBjb25zdCB3ZWF0aGVyTWFpbiA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXG4gICAgLy8gSGlnaCBhbmQgTG93XG4gICAgY29uc3QgZmFocmVuaGVpdEhpZ2ggPSBNYXRoLnJvdW5kKDEuOCAqICh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4IC0gMjczLjE1KSArIDMyKTtcbiAgICBjb25zdCBmYWhyZW5oZWl0TG93ID0gTWF0aC5yb3VuZCgxLjggKiAod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbiAtIDI3My4xNSkgKyAzMik7XG4gICAgY29uc3QgY2VsY2l1c0hpZ2ggPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXggLSAyNzMuMTUpO1xuICAgIGNvbnN0IGNlbGNpdXNMb3cgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9taW4gLSAyNzMuMTUpO1xuICBcbiAgICBjb25zb2xlLmxvZyh7bG9jYXRpb25OYW1lLCBmYWhyZW5oZWl0LCBjZWxjaXVzLCB3ZWF0aGVyTWFpbiwgd2VhdGhlckRlc2NyaXB0aW9uLCBmYWhyZW5oZWl0SGlnaCwgZmFocmVuaGVpdExvdywgY2VsY2l1c0hpZ2gsIGNlbGNpdXNMb3d9KVxuXG4gICAgY29uc3QgYWxsV2VhdGhlciA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mZXhjbHVkZT1jdXJyZW50LG1pbnV0ZWx5LGFsZXJ0cyZhcHBpZD0ke3RoaXMua2V5fWAsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCBhbGxXZWF0aGVyRGF0YSA9IGF3YWl0IGFsbFdlYXRoZXIuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGFsbFdlYXRoZXJEYXRhKTtcblxuICAgIGNvbnN0IGhvdXJseURhdGEgPSBhbGxXZWF0aGVyRGF0YS5ob3VybHkuc2xpY2UoMCwgMjUpO1xuICAgIGNvbnN0IHdlZWtseURhdGEgPSBhbGxXZWF0aGVyRGF0YS5kYWlseTtcblxuICAgIHJldHVybiB7bG9jYXRpb25OYW1lLCBmYWhyZW5oZWl0LCBjZWxjaXVzLCB3ZWF0aGVyTWFpbiwgd2VhdGhlckRlc2NyaXB0aW9uLCBmYWhyZW5oZWl0SGlnaCwgZmFocmVuaGVpdExvdywgY2VsY2l1c0hpZ2gsIGNlbGNpdXNMb3csIGhvdXJseURhdGEsIHdlZWtseURhdGF9O1xuICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyQVBJOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJJ1xuaW1wb3J0IERPTSBmcm9tICcuL21vZHVsZXMvRE9NJ1xuXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kKFVJLmhlYWRlcigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKFVJLmNvbnRlbnQoKSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKFVJLnNlYXJjaEJhcigpKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoVUkudGVtcGVyYXR1cmVNZXRyaWMoKSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKFVJLmN1cnJlbnRXZWF0aGVyKCkpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChVSS5ob3VybHlXZWF0aGVyKCkpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChVSS53ZWVrbHlXZWF0aGVyKCkpO1xuRE9NLnNlYXJjaFdlYXRoZXIoKTtcbkRPTS5jbGlja1RlbXBlcmF0dXJlTWV0cmljKCk7XG5ET00uY2hhbmdlV2VhdGhlcignTmV3IFlvcmsnKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=