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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0NBQStDLHFFQUFvQjtBQUNuRSwrQ0FBK0Msa0VBQWlCO0FBQ2hFLCtDQUErQyxpRUFBZ0I7QUFDL0QsK0NBQStDLGlFQUFnQjtBQUMvRCxrRUFBaUI7QUFDakIsMkVBQTBCO0FBQzFCLGtFQUFpQixhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9XZWF0aGVyQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogcGFnZUZvbnQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcXG4gIGZvbnQtZmFtaWx5OiBwYWdlRm9udDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNlYXJjaC1iYXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoLWxvY2F0aW9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xcbiAgYmFja2dyb3VuZDogIzE3MTcxNztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZS1tZXRyaWMge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6ICMxNzE3MTc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uY3VycmVudC1sb2NhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmhpZ2gtbG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4uaG91cmx5LXdlYXRoZXItY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5ob3VybHktd2VhdGhlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLndlZWtseS13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi53ZWVrbHktd2VhdGhlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG59XFxuXFxuLmRheS13ZWVrLXRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5kYXktaGlnaC10ZW1wZXJhdHVyZSB7XFxuICBjb2xvcjogI2ZiYmYyNDtcXG59XFxuXFxuLmRheS1sb3ctdGVtcGVyYXR1cmUge1xcbiAgY29sb3I6ICMyMmQzZWU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBwYWdlRm9udDtcXG4gIHNyYzogdXJsKCdmb250cy9Sb2JvdG8tUmVndWxhci50dGYnKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgZm9udC1mYW1pbHk6IHBhZ2VGb250O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc2VhcmNoLWJhci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtbG9jYXRpb24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMzZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XFxuICBiYWNrZ3JvdW5kOiAjMTcxNzE3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLW1ldHJpYyB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZDogIzE3MTcxNztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5jdXJyZW50LWxvY2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY3VycmVudC10ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4uaGlnaC1sb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5ob3VybHktd2VhdGhlci1jb250YWluZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLmhvdXJseS13ZWF0aGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ud2Vla2x5LXdlYXRoZXItY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLndlZWtseS13ZWF0aGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xcbn1cXG5cXG4uZGF5LXdlZWstdGVtcGVyYXR1cmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmRheS1oaWdoLXRlbXBlcmF0dXJlIHtcXG4gIGNvbG9yOiAjZmJiZjI0O1xcbn1cXG5cXG4uZGF5LWxvdy10ZW1wZXJhdHVyZSB7XFxuICBjb2xvcjogIzIyZDNlZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBXZWF0aGVyQVBJIGZyb20gXCIuL1dlYXRoZXJBUElcIjtcblxuY2xhc3MgRE9NIHtcblxuICBzdGF0aWMgd2VhdGhlckluZm87XG4gIHN0YXRpYyBjdXJyZW50TWV0cmljID0gJ2YnO1xuXG4gIHN0YXRpYyBzZWFyY2hXZWF0aGVyKCkge1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbG9jYXRpb24nKTtcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbicpO1xuICAgIHNlYXJjaFJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB0aGlzLmtleVByZXNzKGUsIHNlYXJjaFJlc3VsdC52YWx1ZSkpO1xuICAgIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2hhbmdlV2VhdGhlcihzZWFyY2hSZXN1bHQudmFsdWUpKTtcbiAgfVxuXG4gIHN0YXRpYyBrZXlQcmVzcyhlLCBwbGFjZU5hbWUpIHtcbiAgICBpZihlLmtleUNvZGUgPT09IDEzICYmIHBsYWNlTmFtZSAhPT0gJycpIHtcbiAgICAgIHRoaXMuY2hhbmdlV2VhdGhlcihwbGFjZU5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGlja1RlbXBlcmF0dXJlTWV0cmljKCkge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlTWV0cmljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLW1ldHJpYycpO1xuICAgIHRlbXBlcmF0dXJlTWV0cmljLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jaGFuZ2VUZW1wZXJhdHVyZU1ldHJpYygpKTtcbiAgfVxuICBcbiAgc3RhdGljIGNoYW5nZVRlbXBlcmF0dXJlTWV0cmljKCkge1xuICAgIGlmKHRoaXMuY3VycmVudE1ldHJpYyA9PT0gJ2YnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10ZW1wZXJhdHVyZScpLnRleHRDb250ZW50ID0gYCR7dGhpcy53ZWF0aGVySW5mby5jZWxjaXVzfcKwQ2A7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1oaWdoJykudGV4dENvbnRlbnQgPSBgSDogJHt0aGlzLndlYXRoZXJJbmZvLmNlbGNpdXNIaWdofcKwQ2A7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1sb3cnKS50ZXh0Q29udGVudCA9IGBMOiAke3RoaXMud2VhdGhlckluZm8uY2VsY2l1c0xvd33CsENgO1xuICBcbiAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VybHktd2VhdGhlcicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQodGhpcy53ZWF0aGVySW5mby5ob3VybHlEYXRhW2NvdW50ZXJdLnRlbXAgLSAyNzMuMTUpfcKwQ2A7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgIH0pO1xuICBcbiAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlZWtseS13ZWF0aGVyJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHRoaXMud2VhdGhlckluZm8ud2Vla2x5RGF0YVtjb3VudGVyXS50ZW1wLm1pbiAtIDI3My4xNSl9wrBDYDtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHRoaXMud2VhdGhlckluZm8ud2Vla2x5RGF0YVtjb3VudGVyXS50ZW1wLmRheSAtIDI3My4xNSl9wrBDYDtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHRoaXMud2VhdGhlckluZm8ud2Vla2x5RGF0YVtjb3VudGVyXS50ZW1wLm1heCAtIDI3My4xNSl9wrBDYDtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY3VycmVudE1ldHJpYyA9ICdjJztcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLmN1cnJlbnRNZXRyaWMgPT09ICdjJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGVtcGVyYXR1cmUnKS50ZXh0Q29udGVudCA9IGAke3RoaXMud2VhdGhlckluZm8uZmFocmVuaGVpdH3CsEZgO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtaGlnaCcpLnRleHRDb250ZW50ID0gYEg6ICR7dGhpcy53ZWF0aGVySW5mby5mYWhyZW5oZWl0SGlnaH3CsEZgO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtbG93JykudGV4dENvbnRlbnQgPSBgTDogJHt0aGlzLndlYXRoZXJJbmZvLmZhaHJlbmhlaXRMb3d9wrBGYDtcbiAgXG4gICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cmx5LXdlYXRoZXInKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKDEuOCAqICh0aGlzLndlYXRoZXJJbmZvLmhvdXJseURhdGFbY291bnRlcl0udGVtcCAtIDI3My4xNSkgKyAzMil9wrBGYDtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgfSk7XG4gIFxuICAgICAgY291bnRlciA9IDA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vla2x5LXdlYXRoZXInKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoMS44ICogKHRoaXMud2VhdGhlckluZm8ud2Vla2x5RGF0YVtjb3VudGVyXS50ZW1wLm1pbiAtIDI3My4xNSkgKyAzMil9wrBGYDtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKDEuOCAqICh0aGlzLndlYXRoZXJJbmZvLndlZWtseURhdGFbY291bnRlcl0udGVtcC5kYXkgLSAyNzMuMTUpICsgMzIpfcKwRmA7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgxLjggKiAodGhpcy53ZWF0aGVySW5mby53ZWVrbHlEYXRhW2NvdW50ZXJdLnRlbXAubWF4IC0gMjczLjE1KSArIDMyKX3CsEZgO1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jdXJyZW50TWV0cmljID0gJ2YnO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjaGFuZ2VXZWF0aGVyKHBsYWNlTmFtZSkge1xuICAgIHRoaXMud2VhdGhlckluZm8gPSBhd2FpdCBXZWF0aGVyQVBJLmdldEFsbFdlYXRoZXIocGxhY2VOYW1lKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXJJbmZvKTtcblxuICAgIGlmKHRoaXMuY3VycmVudE1ldHJpYyA9PT0gJ2YnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1sb2NhdGlvbicpLnRleHRDb250ZW50ID0gYCR7dGhpcy53ZWF0aGVySW5mby5sb2NhdGlvbk5hbWV9YDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRlbXBlcmF0dXJlJykudGV4dENvbnRlbnQgPSBgJHt0aGlzLndlYXRoZXJJbmZvLmZhaHJlbmhlaXR9wrBGYDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXItaW5mbycpLnRleHRDb250ZW50ID0gYCR7dGhpcy53ZWF0aGVySW5mby53ZWF0aGVyTWFpbn1gO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtaGlnaCcpLnRleHRDb250ZW50ID0gYEg6ICR7dGhpcy53ZWF0aGVySW5mby5mYWhyZW5oZWl0SGlnaH3CsEZgO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtbG93JykudGV4dENvbnRlbnQgPSBgTDogJHt0aGlzLndlYXRoZXJJbmZvLmZhaHJlbmhlaXRMb3d9wrBGYDtcblxuICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJseS13ZWF0aGVyJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gKG5ldyBEYXRlKHRoaXMud2VhdGhlckluZm8uaG91cmx5RGF0YVtjb3VudGVyXS5kdCAqIDEwMDApKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzFdLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3RoaXMud2VhdGhlckluZm8uaG91cmx5RGF0YVtjb3VudGVyXS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoMS44ICogKHRoaXMud2VhdGhlckluZm8uaG91cmx5RGF0YVtjb3VudGVyXS50ZW1wIC0gMjczLjE1KSArIDMyKX3CsEZgO1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9KTtcblxuICAgICAgY291bnRlciA9IDA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vla2x5LXdlYXRoZXInKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSAobmV3IERhdGUodGhpcy53ZWF0aGVySW5mby53ZWVrbHlEYXRhW2NvdW50ZXJdLmR0ICogMTAwMCkpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLHt3ZWVrZGF5OiAnbG9uZyd9KTtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzFdLnNyYyA9ICBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt0aGlzLndlYXRoZXJJbmZvLndlZWtseURhdGFbY291bnRlcl0ud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoMS44ICogKHRoaXMud2VhdGhlckluZm8ud2Vla2x5RGF0YVtjb3VudGVyXS50ZW1wLm1pbiAtIDI3My4xNSkgKyAzMil9wrBGYDtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKDEuOCAqICh0aGlzLndlYXRoZXJJbmZvLndlZWtseURhdGFbY291bnRlcl0udGVtcC5kYXkgLSAyNzMuMTUpICsgMzIpfcKwRmA7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgxLjggKiAodGhpcy53ZWF0aGVySW5mby53ZWVrbHlEYXRhW2NvdW50ZXJdLnRlbXAubWF4IC0gMjczLjE1KSArIDMyKX3CsEZgO1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9KTsgICAgICBcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLmN1cnJlbnRNZXRyaWMgPT09ICdjJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtbG9jYXRpb24nKS50ZXh0Q29udGVudCA9IGAke3RoaXMud2VhdGhlckluZm8ubG9jYXRpb25OYW1lfWA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10ZW1wZXJhdHVyZScpLnRleHRDb250ZW50ID0gYCR7dGhpcy53ZWF0aGVySW5mby5jZWxjaXVzfcKwQ2A7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC13ZWF0aGVyLWluZm8nKS50ZXh0Q29udGVudCA9IGAke3RoaXMud2VhdGhlckluZm8ud2VhdGhlck1haW59YDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWhpZ2gnKS50ZXh0Q29udGVudCA9IGBIOiAke3RoaXMud2VhdGhlckluZm8uY2VsY2l1c0hpZ2h9wrBDYDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWxvdycpLnRleHRDb250ZW50ID0gYEw6ICR7dGhpcy53ZWF0aGVySW5mby5jZWxjaXVzTG93fcKwQ2A7XG4gIFxuICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJseS13ZWF0aGVyJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gKG5ldyBEYXRlKHRoaXMud2VhdGhlckluZm8uaG91cmx5RGF0YVtjb3VudGVyXS5kdCAqIDEwMDApKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzFdLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3RoaXMud2VhdGhlckluZm8uaG91cmx5RGF0YVtjb3VudGVyXS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQodGhpcy53ZWF0aGVySW5mby5ob3VybHlEYXRhW2NvdW50ZXJdLnRlbXAgLSAyNzMuMTUpfcKwQ2A7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgIH0pO1xuICBcbiAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlZWtseS13ZWF0aGVyJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gKG5ldyBEYXRlKHRoaXMud2VhdGhlckluZm8ud2Vla2x5RGF0YVtjb3VudGVyXS5kdCAqIDEwMDApKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJyx7d2Vla2RheTogJ2xvbmcnfSk7XG4gICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1sxXS5zcmMgPSAgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7dGhpcy53ZWF0aGVySW5mby53ZWVrbHlEYXRhW2NvdW50ZXJdLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHRoaXMud2VhdGhlckluZm8ud2Vla2x5RGF0YVtjb3VudGVyXS50ZW1wLm1pbiAtIDI3My4xNSl9wrBDYDtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHRoaXMud2VhdGhlckluZm8ud2Vla2x5RGF0YVtjb3VudGVyXS50ZW1wLmRheSAtIDI3My4xNSl9wrBDYDtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHRoaXMud2VhdGhlckluZm8ud2Vla2x5RGF0YVtjb3VudGVyXS50ZW1wLm1heCAtIDI3My4xNSl9wrBDYDtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTTsiLCJjbGFzcyBVSSB7XG5cbiAgc3RhdGljIGNyZWF0ZUUoZWxlbWVudCwgY2xhc3NOYW1lLCB0ZXh0KSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbWVudH1gKTtcbiAgICBlLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xuICAgIGUudGV4dENvbnRlbnQgPSBgJHt0ZXh0fWA7XG5cbiAgICByZXR1cm4gZTtcbiAgfVxuXG4gIHN0YXRpYyBoZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1dlYXRoZXIgQXBwJztcblxuICAgIHJldHVybiBoZWFkZXI7XG4gIH1cblxuICBzdGF0aWMgc2VhcmNoQmFyKCkge1xuICAgIGNvbnN0IHNlYXJjaEJhckNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRSgnZGl2JywgJ3NlYXJjaC1iYXItY29udGFpbmVyJywgJycpO1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gdGhpcy5jcmVhdGVFKCdpbnB1dCcsICdzZWFyY2gtbG9jYXRpb24nLCAnJyk7XG4gICAgc2VhcmNoSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICdMb2NhdGlvbiBOYW1lJztcbiAgICBzZWFyY2hCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuICAgIGNvbnN0IHNlYXJjaEJ0biA9IHRoaXMuY3JlYXRlRSgnYnV0dG9uJywgJ3NlYXJjaC1idXR0b24nLCAnJyk7XG4gICAgY29uc3Qgc2VhcmNoSW1nID0gdGhpcy5jcmVhdGVFKCdpJywgJ2ZhJywgJycpO1xuICAgIHNlYXJjaEltZy5jbGFzc0xpc3QuYWRkKCdmYS1zZWFyY2gnKTtcbiAgICBzZWFyY2hJbWcuYXJpYUhpZGRlbiA9ICd0cnVlJztcbiAgICBzZWFyY2hCdG4uYXBwZW5kQ2hpbGQoc2VhcmNoSW1nKTtcbiAgICBzZWFyY2hCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQnRuKTtcblxuICAgIHJldHVybiBzZWFyY2hCYXJDb250YWluZXI7XG4gIH1cblxuICBzdGF0aWMgdGVtcGVyYXR1cmVNZXRyaWMoKSB7XG4gICAgY29uc3QgdGVtcGVyYXR1cmVNZXRyaWMgPSB0aGlzLmNyZWF0ZUUoJ2RpdicsICd0ZW1wZXJhdHVyZS1tZXRyaWMnLCAnJyk7XG4gICAgdGVtcGVyYXR1cmVNZXRyaWMudGV4dENvbnRlbnQgPSAnwrBGIC8gwrBDJztcblxuICAgIHJldHVybiB0ZW1wZXJhdHVyZU1ldHJpYztcbiAgfVxuXG4gIHN0YXRpYyBjb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgY3VycmVudFdlYXRoZXIoKSB7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJDb250YWluZXIgPSB0aGlzLmNyZWF0ZUUoJ2RpdicsICdjdXJyZW50LXdlYXRoZXItY29udGFpbmVyJywgJycpO1xuXG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAnY3VycmVudC1sb2NhdGlvbicsICcnKTtcbiAgICBjdXJyZW50V2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50TG9jYXRpb24pO1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZSA9IHRoaXMuY3JlYXRlRSgnZGl2JywgJ2N1cnJlbnQtdGVtcGVyYXR1cmUnLCAnJyk7XG4gICAgY3VycmVudFdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBlcmF0dXJlKTtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlckluZm8gPSB0aGlzLmNyZWF0ZUUoJ2RpdicsICdjdXJyZW50LXdlYXRoZXItaW5mbycsICcnKTtcbiAgICBjdXJyZW50V2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckluZm8pO1xuICAgIGNvbnN0IGhpZ2hMb3dUZW1wZXJhdHVyZSA9IHRoaXMuY3JlYXRlRSgnZGl2JywgJ2hpZ2gtbG93JywgJycpO1xuICAgIGNvbnN0IGN1cnJlbnRIaWdoVGVtcGVyYXR1cmUgPSB0aGlzLmNyZWF0ZUUoJ2RpdicsICdjdXJyZW50LWhpZ2gnLCAnJyk7XG4gICAgY29uc3QgY3VycmVudExvd1RlbXBlcmF0dXJlID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAnY3VycmVudC1sb3cnLCAnJyk7XG4gICAgaGlnaExvd1RlbXBlcmF0dXJlLmFwcGVuZENoaWxkKGN1cnJlbnRIaWdoVGVtcGVyYXR1cmUpO1xuICAgIGhpZ2hMb3dUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZChjdXJyZW50TG93VGVtcGVyYXR1cmUpO1xuICAgIGN1cnJlbnRXZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhpZ2hMb3dUZW1wZXJhdHVyZSk7XG5cbiAgICByZXR1cm4gY3VycmVudFdlYXRoZXJDb250YWluZXI7XG4gIH1cblxuICBzdGF0aWMgaG91cmx5V2VhdGhlcigpIHtcbiAgICBjb25zdCBob3VybHlXZWF0aGVyQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAnaG91cmx5LXdlYXRoZXItY29udGFpbmVyJywgJycpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDI1OyBpKyspIHtcbiAgICAgIGNvbnN0IGhvdXJseVdlYXRoZXIgPSB0aGlzLmNyZWF0ZUUoJ2RpdicsICdob3VybHktd2VhdGhlcicsICcnKTtcbiAgICAgIGNvbnN0IHRpbWVIb3VyID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAndGltZS1ob3VyJywgJycpO1xuICAgICAgaG91cmx5V2VhdGhlci5hcHBlbmRDaGlsZCh0aW1lSG91cik7XG4gICAgICBjb25zdCB3ZWF0aGVySWNvbiA9IHRoaXMuY3JlYXRlRSgnaW1nJywgJ3dlYXRoZXItaWNvbicsICcnKTtcbiAgICAgIGhvdXJseVdlYXRoZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xuICAgICAgY29uc3QgaG91cmx5VGVtcGVyYXR1cmUgPSB0aGlzLmNyZWF0ZUUoJ2RpdicsICdob3VybHktdGVtcGVyYXR1cmUnLCAnJyk7XG4gICAgICBob3VybHlXZWF0aGVyLmFwcGVuZENoaWxkKGhvdXJseVRlbXBlcmF0dXJlKTtcbiAgICAgIGhvdXJseVdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5V2VhdGhlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvdXJseVdlYXRoZXJDb250YWluZXI7XG4gIH1cblxuICBzdGF0aWMgd2Vla2x5V2VhdGhlcigpIHtcbiAgICBjb25zdCB3ZWVrbHlXZWF0aGVyQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAnd2Vla2x5LXdlYXRoZXItY29udGFpbmVyJywgJycpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgY29uc3Qgd2Vla2x5V2VhdGhlciA9IHRoaXMuY3JlYXRlRSgnZGl2JywgJ3dlZWtseS13ZWF0aGVyJywgJycpO1xuICAgICAgY29uc3QgZGF5V2VlayA9IHRoaXMuY3JlYXRlRSgnZGl2JywgJ2RheS13ZWVrJywgJycpO1xuICAgICAgd2Vla2x5V2VhdGhlci5hcHBlbmRDaGlsZChkYXlXZWVrKTtcbiAgICAgIGNvbnN0IHdlYXRoZXJJY29uID0gdGhpcy5jcmVhdGVFKCdpbWcnLCAnd2VhdGhlci1pY29uJywgJycpO1xuICAgICAgd2Vla2x5V2VhdGhlci5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG4gICAgICBjb25zdCBkYXlXZWVrVGVtcGVyYXR1cmUgPSB0aGlzLmNyZWF0ZUUoJ2RpdicsICdkYXktd2Vlay10ZW1wZXJhdHVyZScsICcnKTtcbiAgICAgIGNvbnN0IGRheUxvd1RlbXBlcmF0dXJlID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAnZGF5LWxvdy10ZW1wZXJhdHVyZScsICcnKTtcbiAgICAgIGNvbnN0IGRheVRlbXBlcmF0dXJlID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAnZGF5LXRlbXBlcmF0dXJlJywgJycpO1xuICAgICAgY29uc3QgZGF5SGlnaFRlbXBlcmF0dXJlID0gdGhpcy5jcmVhdGVFKCdkaXYnLCAnZGF5LWhpZ2gtdGVtcGVyYXR1cmUnLCAnJyk7XG4gICAgICBkYXlXZWVrVGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQoZGF5TG93VGVtcGVyYXR1cmUpO1xuICAgICAgZGF5V2Vla1RlbXBlcmF0dXJlLmFwcGVuZENoaWxkKGRheVRlbXBlcmF0dXJlKTtcbiAgICAgIGRheVdlZWtUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZChkYXlIaWdoVGVtcGVyYXR1cmUpO1xuICAgICAgd2Vla2x5V2VhdGhlci5hcHBlbmRDaGlsZChkYXlXZWVrVGVtcGVyYXR1cmUpO1xuICAgICAgd2Vla2x5V2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrbHlXZWF0aGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2Vla2x5V2VhdGhlckNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVSTsiLCJjbGFzcyBXZWF0aGVyQVBJIHtcbiAgc3RhdGljIGtleSA9ICc1ZjA3MGRjNjEzNDg5MmUwOGJhZmEyZDg4ODhiOTRlZic7XG5cbiAgc3RhdGljIGFzeW5jIGdldExvY2F0aW9uRGF0YShwbGFjZU5hbWUpIHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7cGxhY2VOYW1lfSZsaW1pdD01JmFwcGlkPSR7dGhpcy5rZXl9YCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGxvY2F0aW9uLmpzb24oKTtcbiAgICBjb25zdCBsYXQgPSBsb2NhdGlvbkRhdGFbMF0ubGF0O1xuICAgIGNvbnN0IGxvbiA9IGxvY2F0aW9uRGF0YVswXS5sb247XG5cbiAgICByZXR1cm4ge2xhdCwgbG9ufTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRBbGxXZWF0aGVyKHBsYWNlTmFtZSkge1xuICAgIGNvbnN0IHtsYXQsIGxvbn0gPSBhd2FpdCB0aGlzLmdldExvY2F0aW9uRGF0YShwbGFjZU5hbWUpO1xuXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHt0aGlzLmtleX1gLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBjdXJyZW50V2VhdGhlci5qc29uKCk7XG5cbiAgICAvLyBOYW1lXG4gICAgY29uc3QgbG9jYXRpb25OYW1lID0gd2VhdGhlckRhdGEubmFtZTtcblxuICAgIC8vIEZhaHJlbmhlaXQsIEYgPSAxLjggKiAoSyAtIDI3My4xNSkgKyAzMlxuICAgIGNvbnN0IGZhaHJlbmhlaXQgPSBNYXRoLnJvdW5kKDEuOCAqICh3ZWF0aGVyRGF0YS5tYWluLnRlbXAgLSAyNzMuMTUpICsgMzIpO1xuXG4gICAgLy8gQ2VsY2l1cywgICAgQyA9IEsgLSAyNzMuMTVcbiAgICBjb25zdCBjZWxjaXVzID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXAgLSAyNzMuMTUpO1xuXG4gICAgLy8gV2VhdGhlclxuICAgIGNvbnN0IHdlYXRoZXJNYWluID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluO1xuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgICAvLyBIaWdoIGFuZCBMb3dcbiAgICBjb25zdCBmYWhyZW5oZWl0SGlnaCA9IE1hdGgucm91bmQoMS44ICogKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXggLSAyNzMuMTUpICsgMzIpO1xuICAgIGNvbnN0IGZhaHJlbmhlaXRMb3cgPSBNYXRoLnJvdW5kKDEuOCAqICh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluIC0gMjczLjE1KSArIDMyKTtcbiAgICBjb25zdCBjZWxjaXVzSGlnaCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21heCAtIDI3My4xNSk7XG4gICAgY29uc3QgY2VsY2l1c0xvdyA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbiAtIDI3My4xNSk7XG4gIFxuICAgIGNvbnNvbGUubG9nKHtsb2NhdGlvbk5hbWUsIGZhaHJlbmhlaXQsIGNlbGNpdXMsIHdlYXRoZXJNYWluLCB3ZWF0aGVyRGVzY3JpcHRpb24sIGZhaHJlbmhlaXRIaWdoLCBmYWhyZW5oZWl0TG93LCBjZWxjaXVzSGlnaCwgY2VsY2l1c0xvd30pXG5cbiAgICBjb25zdCBhbGxXZWF0aGVyID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZleGNsdWRlPWN1cnJlbnQsbWludXRlbHksYWxlcnRzJmFwcGlkPSR7dGhpcy5rZXl9YCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IGFsbFdlYXRoZXJEYXRhID0gYXdhaXQgYWxsV2VhdGhlci5qc29uKCk7XG4gICAgY29uc29sZS5sb2coYWxsV2VhdGhlckRhdGEpO1xuXG4gICAgY29uc3QgaG91cmx5RGF0YSA9IGFsbFdlYXRoZXJEYXRhLmhvdXJseS5zbGljZSgwLCAyNSk7XG4gICAgY29uc3Qgd2Vla2x5RGF0YSA9IGFsbFdlYXRoZXJEYXRhLmRhaWx5O1xuXG4gICAgcmV0dXJuIHtsb2NhdGlvbk5hbWUsIGZhaHJlbmhlaXQsIGNlbGNpdXMsIHdlYXRoZXJNYWluLCB3ZWF0aGVyRGVzY3JpcHRpb24sIGZhaHJlbmhlaXRIaWdoLCBmYWhyZW5oZWl0TG93LCBjZWxjaXVzSGlnaCwgY2VsY2l1c0xvdywgaG91cmx5RGF0YSwgd2Vla2x5RGF0YX07XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJBUEk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUknXG5pbXBvcnQgRE9NIGZyb20gJy4vbW9kdWxlcy9ET00nXG5cblxuZG9jdW1lbnQuYm9keS5hcHBlbmQoVUkuaGVhZGVyKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoVUkuY29udGVudCgpKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoVUkuc2VhcmNoQmFyKCkpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChVSS50ZW1wZXJhdHVyZU1ldHJpYygpKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoVUkuY3VycmVudFdlYXRoZXIoKSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKFVJLmhvdXJseVdlYXRoZXIoKSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKFVJLndlZWtseVdlYXRoZXIoKSk7XG5ET00uc2VhcmNoV2VhdGhlcigpO1xuRE9NLmNsaWNrVGVtcGVyYXR1cmVNZXRyaWMoKTtcbkRPTS5jaGFuZ2VXZWF0aGVyKCdOZXcgWW9yaycpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==