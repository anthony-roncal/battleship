(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/rotate-right-variant.svg */ "./src/rotate-right-variant.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/rotate-left-variant.svg */ "./src/rotate-left-variant.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n}\n\n.grid-container {\n    display: flex;\n    gap: 100px;\n    margin-bottom: 50px;\n}\n\n.message {\n    font-size: 26px;\n    margin-top: 0;\n}\n\n.player-grid,\n.computer-grid {\n    max-width: 400px;\n    max-height: 400px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.square {\n    width: 40px; \n    height: 40px; \n    border: solid 1px black; \n    box-sizing: border-box;\n}\n\n.shipyard,\n.shipyard-labels {\n    display: flex;\n    gap: 20px;\n}\n\n.shipyard-labels > p {\n    min-width: 210px;\n    text-align: center;\n}\n\n.shipyard > div {\n    min-width: 210px;\n    min-height: 220px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}\n\n.shipyard-label {\n    height: 20px;\n    margin: 0;\n}\n\n.rotateBtn-horizontal {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    transform: rotate(180deg);\n    width: 25px;\n    height: 25px;\n    border: 1px solid;\n    border-radius: 5px;\n}\n\n.rotateBtn-vertical {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    transform: rotate(90deg);\n}\n\n.ship {\n    border: 2px solid grey;\n    background-color: darkgrey;\n}\n\n.hit{\n    background-color: red !important;\n}\n\n.miss {\n    background-color: blue;\n}\n\n.restart {\n    font-size: 20px;\n    padding: 10px 25px;\n    border-radius: 25px;\n}\n\n.hide {\n    display: none;\n}\n\n#carrier,\n#battleship,\n#cruiser,\n#submarine,\n#destroyer {\n    height: 40px;\n    width: 200px;\n    box-sizing: border-box;\n}\n\n#battleship {\n    width: 160px;\n}\n\n#cruiser,\n#submarine {\n    width: 120px;\n}\n\n#destroyer {\n    width: 80px;\n}\n\n.selected {\n    border: 2px solid darkgreen;\n    background-color: green;\n}\n\n.placed {\n    opacity: 50%;\n}\n\n.hover {\n    border: 2px solid darkgreen;\n}\n\n.rotate {\n    transform: rotate(90deg);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yCAAyC;IACzC,SAAS;AACb;;AAEA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;;AAEA;;IAEI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,mDAAgD;IAChD,4BAA4B;IAC5B,2BAA2B;IAC3B,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,mDAA+C;IAC/C,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;;;;;IAKI,YAAY;IACZ,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;AAC5B","sourcesContent":["body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n}\n\n.grid-container {\n    display: flex;\n    gap: 100px;\n    margin-bottom: 50px;\n}\n\n.message {\n    font-size: 26px;\n    margin-top: 0;\n}\n\n.player-grid,\n.computer-grid {\n    max-width: 400px;\n    max-height: 400px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.square {\n    width: 40px; \n    height: 40px; \n    border: solid 1px black; \n    box-sizing: border-box;\n}\n\n.shipyard,\n.shipyard-labels {\n    display: flex;\n    gap: 20px;\n}\n\n.shipyard-labels > p {\n    min-width: 210px;\n    text-align: center;\n}\n\n.shipyard > div {\n    min-width: 210px;\n    min-height: 220px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}\n\n.shipyard-label {\n    height: 20px;\n    margin: 0;\n}\n\n.rotateBtn-horizontal {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    background: url('/src/rotate-right-variant.svg');\n    background-repeat: no-repeat;\n    background-position: center;\n    transform: rotate(180deg);\n    width: 25px;\n    height: 25px;\n    border: 1px solid;\n    border-radius: 5px;\n}\n\n.rotateBtn-vertical {\n    background: url('/src/rotate-left-variant.svg');\n    transform: rotate(90deg);\n}\n\n.ship {\n    border: 2px solid grey;\n    background-color: darkgrey;\n}\n\n.hit{\n    background-color: red !important;\n}\n\n.miss {\n    background-color: blue;\n}\n\n.restart {\n    font-size: 20px;\n    padding: 10px 25px;\n    border-radius: 25px;\n}\n\n.hide {\n    display: none;\n}\n\n#carrier,\n#battleship,\n#cruiser,\n#submarine,\n#destroyer {\n    height: 40px;\n    width: 200px;\n    box-sizing: border-box;\n}\n\n#battleship {\n    width: 160px;\n}\n\n#cruiser,\n#submarine {\n    width: 120px;\n}\n\n#destroyer {\n    width: 80px;\n}\n\n.selected {\n    border: 2px solid darkgreen;\n    background-color: green;\n}\n\n.placed {\n    opacity: 50%;\n}\n\n.hover {\n    border: 2px solid darkgreen;\n}\n\n.rotate {\n    transform: rotate(90deg);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./Ship */ "./src/Ship.js");

const GameboardFactory = () => { 

    let ships = [];
    let receivedShots = [];
    
    function placeShip(startX, startY, endX, endY) {
        let coordinates = [];
        let newShip;
        if(startX === endX && startY === endY) {
            // ship takes up 1 space
            let shipLength = 1;
            newShip = Ship(shipLength);
            coordinates.push({x: startX, y: startY});
        } else if(startX !== endX && startY === endY) {
            // horizontal ship placement
            let shipLength = endX - startX + 1;
            newShip = Ship(shipLength);
            for(let i = 0; i < shipLength; i++) {
                coordinates.push({
                    x: startX + i,
                    y: startY
                })
            }
        } else if(startX === endX && startY !== endY) {
            // vertical ship placement
            let shipLength = endY - startY + 1;
            newShip = Ship(shipLength);
            for(let i = 0; i < shipLength; i++) {
                coordinates.push({
                    x: startX,
                    y: startY + i
                })
            }
        } else if(startX !== endX && startY !== endY) {
            // invalid (diagonal) ship placement
            return;
        }
        ships.push({
            coordinates: coordinates,
            ship: newShip
        });
        return ships[ships.length-1];
    }

    function receiveAttack({x, y}) {
        receivedShots.push({x, y});
        let isHit = false;
        ships.forEach(ship => {
            for(let i = 0; i < ship.coordinates.length; i++) {
                if(ship.coordinates[i].x === x && ship.coordinates[i].y === y) {
                    ship.ship.hit();
                    isHit = true;
                }
            }
        })
        return isHit;
    }

    function allSunk() {
        let allSunk = true;
        for(let i = 0; i < ships.length; i++) {
            if (!ships[i].ship.isSunk()) {
                allSunk = false;
            }
        }
        return allSunk;
    }

    return {
        ships,
        receivedShots,
        placeShip,
        receiveAttack,
        allSunk
    }
}

module.exports = GameboardFactory;

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((module) => {

const PlayerFactory = () => {
    
    function attack(x, y) {
        return {
            x: x,
            y: y
        }
    }

    function randomAttack() {
        return {
            x: Math.floor(Math.random() * 10),
            y: Math.floor(Math.random() * 10)
        }
    }

    return {
        attack,
        randomAttack
    }
}

module.exports = PlayerFactory;

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((module) => {

const ShipFactory = (length) => {
    let hitCount = 0;

    function hit() {
        this.hitCount++;
        return this.hitCount;
    }

    function isSunk() {
        return (this.hitCount >= this.length);
    }

    return {
        length,
        hitCount,
        hit,
        isSunk
    }
}

module.exports = ShipFactory;

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayController)
/* harmony export */ });
function displayController(playerGameboard, computerGameboard) {
    const playerGrid = document.querySelector('.player-grid');
    const computerGrid = document.querySelector('.computer-grid');
    const message = document.querySelector('.message');
    const restartButton = document.querySelector('.restart');
    const shipyardLabels = document.querySelector('.shipyard-labels');
    const shipyard = document.querySelector('.shipyard');

    const messages = {
        messageSelectShip: 'Select a ship to place',
        messagePlaceShip: 'Select a starting space to place your ship',
        messagePlayGame: 'Click on the computer grid to attack',
        messagePlayerWins: 'You win!',
        messagePlayerLoses: 'You lose!'
    }

    function init() {
        for (let i = 0; i < 200; i++) {
            let square = document.createElement('div');
            square.classList.add("square");
            (i < 100) ? playerGrid.appendChild(square) : computerGrid.appendChild(square);
        }

        // remove following loop when finished (this displays computer's ships)
        // computerGameboard.ships.forEach(ship => {
        //     for(let i = 0; i < ship.coordinates.length; i++) {
        //         let shipIndex = (ship.coordinates[i].y * 10) + ship.coordinates[i].x;
        //         computerGrid.children[shipIndex].classList.add('ship');
        //     }
        // })
    };

    function updateMessage(displayMessage) {
        message.textContent = messages[displayMessage];
    }

    function playerAttack(target, isHit) {
        (isHit) ? computerGrid.children[target].classList.add('hit') : computerGrid.children[target].classList.add('miss');
    }

    function computerAttack(target, isHit) {
        let index = target.y * 10 + target.x;
        (isHit) ? playerGrid.children[index].classList.add('hit') : playerGrid.children[index].classList.add('miss');

    }

    function selectShip(targetShip) {
        targetShip.classList.add('selected');
        let rotateBtn = targetShip.previousElementSibling;
        rotateBtn.classList.remove('hide');
    }

    function rotateShip(rotateBtn) {
        rotateBtn.classList.toggle('rotateBtn-vertical');
        let ship = rotateBtn.nextElementSibling;
        ship.classList.toggle('rotate');
    }

    function hoverPlayerShip(target, shipLength, isHorizontal) {
        const playerGridArray = Array.from(playerGrid.children);
        for(let i = 0; i < shipLength; i++) {
            target.classList.add('hover');
            (isHorizontal) ? target = target.nextElementSibling : target = playerGridArray[playerGridArray.indexOf(target) + 10];
        }
    }

    function mouseoutPlayerShip(target, shipLength, isHorizontal) {
        const playerGridArray = Array.from(playerGrid.children);
        for(let i = 0; i < shipLength; i++) {
            target.classList.remove('hover');
            (isHorizontal) ? target = target.nextElementSibling : target = playerGridArray[playerGridArray.indexOf(target) + 10];
        }
    }

    function placePlayerShip(target, shipLength, isHorizontal, shipCount) {
        const playerGridArray = Array.from(playerGrid.children);
        for(let i = 0; i < shipLength; i++) {
            target.classList.add('selected');
            target.classList.remove('hover');
            (isHorizontal) ? target = target.nextElementSibling : target = playerGridArray[playerGridArray.indexOf(target) + 10];
        }
        let selectedShip = document.querySelector('.shipyard .selected');    
        selectedShip.classList.add('placed');
        selectedShip.previousElementSibling.classList.add('hide');
        selectedShip.classList.remove('selected');
        if(shipCount >= 5) {
            document.querySelectorAll('.shipyard .ship').forEach(ship => {
                ship.classList.remove('placed');
                ship.classList.remove('rotate');
            });
            shipyardLabels.classList.add('hide');
            shipyard.classList.add('hide');
        }
    }

    function endGame(winnerMessage) {
        updateMessage(winnerMessage);
        restartButton.classList.remove('hide');
    }

    function resetGame() {
        restartButton.classList.add('hide');
        shipyardLabels.classList.remove('hide');
        shipyard.classList.remove('hide');
        Array.from(playerGrid.children).forEach(child => playerGrid.removeChild(child));
        Array.from(computerGrid.children).forEach(child => computerGrid.removeChild(child));
        init();
    }

    return {
        init,
        updateMessage,
        playerAttack,
        computerAttack,
        selectShip,
        rotateShip,
        hoverPlayerShip,
        mouseoutPlayerShip,
        placePlayerShip,
        endGame,
        resetGame
    }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Gameboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Player__WEBPACK_IMPORTED_MODULE_3__);





const playerGrid = document.querySelector('.player-grid');
const computerGrid = document.querySelector('.computer-grid');

const shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2
}
let selectedShipId;
let isHorizontal = true;

const player = _Player__WEBPACK_IMPORTED_MODULE_3___default()();
const playerGameboard = _Gameboard__WEBPACK_IMPORTED_MODULE_2___default()();

const computer = _Player__WEBPACK_IMPORTED_MODULE_3___default()();
const computerGameboard = _Gameboard__WEBPACK_IMPORTED_MODULE_2___default()();
randomizeComputerShips();

const display = (0,_displayController__WEBPACK_IMPORTED_MODULE_1__["default"])(playerGameboard, computerGameboard);
display.init();
display.updateMessage('messageSelectShip');
addShipyardEventListeners();
let turn = 0;

const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', resetGame);

function randomizeComputerShips() {
    let ships = [5, 4, 3, 3, 2];
    let x = 0;
    let y = 0;
    let shipSpaces = [];
    while(ships.length > 0) {
        let isHorizontal = Math.floor(Math.random()*2) === 0;
        let shipLength = ships.shift();
        let validCoordsFound = false;
        while(!validCoordsFound) {
            if (isHorizontal) {
                x = Math.floor(Math.random() * (10 - shipLength));
                y = Math.floor(Math.random() * 10);
            } else {
                y = Math.floor(Math.random() * (10 - shipLength));
                x = Math.floor(Math.random() * 10);
            }
            let index = y*10 + x;
            for(let i = 0; i < shipLength; i++) {
                if((isHorizontal && shipSpaces.includes(index + i)) || (!isHorizontal && shipSpaces.includes(index + i*10))) {
                    validCoordsFound = false;
                    break;
                } else {
                    validCoordsFound = true;
                }
            }
        }
        let index = y*10 + x;
        for(let i = 0; i < shipLength; i++) {
            (isHorizontal) ? shipSpaces.push(index + i) : shipSpaces.push(index + i*10);
        }
        (isHorizontal) ? computerGameboard.placeShip(x, y, x + shipLength - 1, y) : computerGameboard.placeShip(x, y, x, y + shipLength - 1);
    }
}

function addShipyardEventListeners() {
    document.querySelectorAll('.shipyard .ship').forEach(ship => {
        if(!ship.classList.contains('placed'))
            ship.addEventListener('click', selectShip);
    });
}

function removeShipyardEventListeners() {
    document.querySelectorAll('.shipyard .ship').forEach(ship => ship.removeEventListener('click', selectShip));
}

function selectShip(e) {
    display.selectShip(e.target);
    isHorizontal = true;
    let rotateBtn = e.target.previousElementSibling;
    rotateBtn.addEventListener('click', rotateShip);
    selectedShipId = e.target.id;
    display.updateMessage('messagePlaceShip');
    removeShipyardEventListeners();
    removePlayerGridEventListeners();
    addPlayerGridEventListeners(shipLengths[selectedShipId]);
}

function rotateShip(e) {
    display.rotateShip(e.target);
    isHorizontal = !isHorizontal;
    removePlayerGridEventListeners();
    addPlayerGridEventListeners(shipLengths[selectedShipId]);
}

function addPlayerGridEventListeners(shipLength) {
    const playerGridArray = Array.from(playerGrid.children);
    playerGridArray.forEach(square => {
        let index = playerGridArray.indexOf(square);
        if((isHorizontal && index%10 <= 10-shipLength)
        || (!isHorizontal && Math.floor(index/10) <= 10-shipLength)) {
            square.classList.add('valid');
        }
    })
    document.querySelectorAll('.square.selected').forEach(square => {
        let index = playerGridArray.indexOf(square);
        for(let i = 0; i < shipLength; i++) {
            if (isHorizontal) {
                playerGridArray[index - i].classList.remove('valid');
            } else if (!isHorizontal && index - (i*10) > 0) {
                playerGridArray[index - (i*10)].classList.remove('valid');
            }
        }
    })
    document.querySelectorAll('.valid').forEach(square => {
        square.addEventListener('mouseover', hoverPlayerShip);
        square.addEventListener('mouseout', mouseoutPlayerShip);
        square.addEventListener('click', placePlayerShip, {once: true});
    })
}

function removePlayerGridEventListeners() {
    Array.from(playerGrid.children).forEach(square => {
        square.classList.remove('valid');
        square.removeEventListener('mouseover', hoverPlayerShip);
        square.removeEventListener('mouseout', mouseoutPlayerShip);
        square.removeEventListener('click', placePlayerShip, {once: true});
    })
}

function hoverPlayerShip(e) {
    display.hoverPlayerShip(e.target, shipLengths[selectedShipId], isHorizontal);
}

function mouseoutPlayerShip(e) {
    display.mouseoutPlayerShip(e.target, shipLengths[selectedShipId], isHorizontal);
}

function placePlayerShip(e) {
    let target = e.target;
    const playerGridArray = Array.from(playerGrid.children);
    let index = playerGridArray.indexOf(target);
    let x = index%10;
    let y = Math.floor(index/10);
    
    removePlayerShipEventListeners();
    (isHorizontal) ? 
        playerGameboard.placeShip(x, y, x + shipLengths[selectedShipId] - 1, y) : 
        playerGameboard.placeShip(x, y, x, y + shipLengths[selectedShipId] - 1);
    if(playerGameboard.ships.length < 5) {
        display.updateMessage('messageSelectShip');
        addShipyardEventListeners();
    } else if(playerGameboard.ships.length >= 5) {
        display.updateMessage('messagePlayGame');
        addComputerGridEventListeners();
    }
    display.placePlayerShip(target, shipLengths[selectedShipId], isHorizontal, playerGameboard.ships.length);
}

function removePlayerShipEventListeners() {
    Array.from(playerGrid.children).forEach(square => {
        square.classList.remove('valid');
        square.removeEventListener('click', placePlayerShip, {once: true});
        square.removeEventListener('mouseover', hoverPlayerShip);
        square.removeEventListener('mouseout', mouseoutPlayerShip);
    })
}

function addComputerGridEventListeners() {
    Array.from(computerGrid.children).forEach(square => square.addEventListener('click', playerAttackListener, {once: true}));
}

function playerAttackListener(e) {
    if(turn % 2 === 0)
        playerAttack(e);
}

function playerAttack(e) {
    let index = Array.from(computerGrid.children).indexOf(e.target);
    let attack = player.attack(index%10, Math.floor(index/10));
    let isHit = computerGameboard.receiveAttack(attack);
    display.playerAttack(index, isHit);
    if(computerGameboard.allSunk()) 
        endGame(player);
    turn++;
    computerAttack();
}

function computerAttack() {
    let attack = computer.randomAttack();
    while (playerGameboard.receivedShots.length < 100 && (playerGameboard.receivedShots.some(a => (a.x === attack.x && a.y === attack.y)))){
        try {
            attack = computer.randomAttack();
        }
        catch {}
    } 
    let isHit = playerGameboard.receiveAttack(attack);
    display.computerAttack(attack, isHit);
    if(playerGameboard.allSunk()) 
        endGame(computer);
    turn++;
}

function endGame(winner) {
    (winner === player) ? display.endGame('messagePlayerWins') : display.endGame('messagePlayerLoses');
    Array.from(computerGrid.children).forEach(square => {
        square.removeEventListener('click', playerAttackListener, {once: true});
    })
}

function resetGame() {
    playerGameboard.receivedShots.length = 0;
    playerGameboard.ships.forEach(ship => ship.ship.hitCount = 0);
    playerGameboard.ships.length = 0;
    computerGameboard.receivedShots.length = 0;
    computerGameboard.ships.forEach(ship => ship.ship.hitCount = 0);
    computerGameboard.ships.length = 0;
    randomizeComputerShips();
    turn = 0;
    display.resetGame();
    display.updateMessage('messageSelectShip');
    addShipyardEventListeners();
}

/***/ }),

/***/ "./src/rotate-left-variant.svg":
/*!*************************************!*\
  !*** ./src/rotate-left-variant.svg ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTQsMkg3QTIsMiAwIDAsMSA5LDRWMjBBMiwyIDAgMCwxIDcsMjJINEEyLDIgMCAwLDEgMiwyMFY0QTIsMiAwIDAsMSA0LDJNMjAsMTVBMiwyIDAgMCwxIDIyLDE3VjIwQTIsMiAwIDAsMSAyMCwyMkgxMVYxNUgyME0xNCw0QTgsOCAwIDAsMSAyMiwxMkwyMS45NCwxM0gxOS45MkwyMCwxMkE2LDYgMCAwLDAgMTQsNlY5TDEwLDVMMTQsMVY0WiIgLz48L3N2Zz4=";

/***/ }),

/***/ "./src/rotate-right-variant.svg":
/*!**************************************!*\
  !*** ./src/rotate-right-variant.svg ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEwLDRWMUwxNCw1TDEwLDlWNkE2LDYgMCAwLDAgNCwxMkw0LjA4LDEzSDIuMDZMMiwxMkE4LDggMCAwLDEgMTAsNE0xNywySDIwQTIsMiAwIDAsMSAyMiw0VjIwQTIsMiAwIDAsMSAyMCwyMkgxN0EyLDIgMCAwLDEgMTUsMjBWNEEyLDIgMCAwLDEgMTcsMk00LDE1SDEzVjIySDRBMiwyIDAgMCwxIDIsMjBWMTdBMiwyIDAgMCwxIDQsMTVaIiAvPjwvc3ZnPg==";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsV0FBVztBQUM5RSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9yb3RhdGUtcmlnaHQtdmFyaWFudC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL3JvdGF0ZS1sZWZ0LXZhcmlhbnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLnBsYXllci1ncmlkLFxcbi5jb21wdXRlci1ncmlkIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIHdpZHRoOiA0MHB4OyBcXG4gICAgaGVpZ2h0OiA0MHB4OyBcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7IFxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2hpcHlhcmQsXFxuLnNoaXB5YXJkLWxhYmVscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNoaXB5YXJkLWxhYmVscyA+IHAge1xcbiAgICBtaW4td2lkdGg6IDIxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaGlweWFyZCA+IGRpdiB7XFxuICAgIG1pbi13aWR0aDogMjEwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDIyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2hpcHlhcmQtbGFiZWwge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnJvdGF0ZUJ0bi1ob3Jpem9udGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJvdGF0ZUJ0bi12ZXJ0aWNhbCB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcXG59XFxuXFxuLmhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnJlc3RhcnQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY2FycmllcixcXG4jYmF0dGxlc2hpcCxcXG4jY3J1aXNlcixcXG4jc3VibWFyaW5lLFxcbiNkZXN0cm95ZXIge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2JhdHRsZXNoaXAge1xcbiAgICB3aWR0aDogMTYwcHg7XFxufVxcblxcbiNjcnVpc2VyLFxcbiNzdWJtYXJpbmUge1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcblxcbiNkZXN0cm95ZXIge1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnBsYWNlZCB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZWVuO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixtREFBZ0Q7SUFDaEQsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbURBQStDO0lBQy9DLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7Ozs7O0lBS0ksWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5wbGF5ZXItZ3JpZCxcXG4uY29tcHV0ZXItZ3JpZCB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICB3aWR0aDogNDBweDsgXFxuICAgIGhlaWdodDogNDBweDsgXFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrOyBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnNoaXB5YXJkLFxcbi5zaGlweWFyZC1sYWJlbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5zaGlweWFyZC1sYWJlbHMgPiBwIHtcXG4gICAgbWluLXdpZHRoOiAyMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2hpcHlhcmQgPiBkaXYge1xcbiAgICBtaW4td2lkdGg6IDIxMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNoaXB5YXJkLWxhYmVsIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5yb3RhdGVCdG4taG9yaXpvbnRhbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zcmMvcm90YXRlLXJpZ2h0LXZhcmlhbnQuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJvdGF0ZUJ0bi12ZXJ0aWNhbCB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnL3NyYy9yb3RhdGUtbGVmdC12YXJpYW50LnN2ZycpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XFxufVxcblxcbi5oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5yZXN0YXJ0IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NhcnJpZXIsXFxuI2JhdHRsZXNoaXAsXFxuI2NydWlzZXIsXFxuI3N1Ym1hcmluZSxcXG4jZGVzdHJveWVyIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNiYXR0bGVzaGlwIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbn1cXG5cXG4jY3J1aXNlcixcXG4jc3VibWFyaW5lIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4jZGVzdHJveWVyIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmVlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5wbGFjZWQge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5ob3ZlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmVlbjtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9TaGlwJyk7XG5cbmNvbnN0IEdhbWVib2FyZEZhY3RvcnkgPSAoKSA9PiB7IFxuXG4gICAgbGV0IHNoaXBzID0gW107XG4gICAgbGV0IHJlY2VpdmVkU2hvdHMgPSBbXTtcbiAgICBcbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFkpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW107XG4gICAgICAgIGxldCBuZXdTaGlwO1xuICAgICAgICBpZihzdGFydFggPT09IGVuZFggJiYgc3RhcnRZID09PSBlbmRZKSB7XG4gICAgICAgICAgICAvLyBzaGlwIHRha2VzIHVwIDEgc3BhY2VcbiAgICAgICAgICAgIGxldCBzaGlwTGVuZ3RoID0gMTtcbiAgICAgICAgICAgIG5ld1NoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaCh7eDogc3RhcnRYLCB5OiBzdGFydFl9KTtcbiAgICAgICAgfSBlbHNlIGlmKHN0YXJ0WCAhPT0gZW5kWCAmJiBzdGFydFkgPT09IGVuZFkpIHtcbiAgICAgICAgICAgIC8vIGhvcml6b250YWwgc2hpcCBwbGFjZW1lbnRcbiAgICAgICAgICAgIGxldCBzaGlwTGVuZ3RoID0gZW5kWCAtIHN0YXJ0WCArIDE7XG4gICAgICAgICAgICBuZXdTaGlwID0gU2hpcChzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgeDogc3RhcnRYICsgaSxcbiAgICAgICAgICAgICAgICAgICAgeTogc3RhcnRZXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmKHN0YXJ0WCA9PT0gZW5kWCAmJiBzdGFydFkgIT09IGVuZFkpIHtcbiAgICAgICAgICAgIC8vIHZlcnRpY2FsIHNoaXAgcGxhY2VtZW50XG4gICAgICAgICAgICBsZXQgc2hpcExlbmd0aCA9IGVuZFkgLSBzdGFydFkgKyAxO1xuICAgICAgICAgICAgbmV3U2hpcCA9IFNoaXAoc2hpcExlbmd0aCk7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IHN0YXJ0WCxcbiAgICAgICAgICAgICAgICAgICAgeTogc3RhcnRZICsgaVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZihzdGFydFggIT09IGVuZFggJiYgc3RhcnRZICE9PSBlbmRZKSB7XG4gICAgICAgICAgICAvLyBpbnZhbGlkIChkaWFnb25hbCkgc2hpcCBwbGFjZW1lbnRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5wdXNoKHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZGluYXRlcyxcbiAgICAgICAgICAgIHNoaXA6IG5ld1NoaXBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzaGlwc1tzaGlwcy5sZW5ndGgtMV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh7eCwgeX0pIHtcbiAgICAgICAgcmVjZWl2ZWRTaG90cy5wdXNoKHt4LCB5fSk7XG4gICAgICAgIGxldCBpc0hpdCA9IGZhbHNlO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihzaGlwLmNvb3JkaW5hdGVzW2ldLnggPT09IHggJiYgc2hpcC5jb29yZGluYXRlc1tpXS55ID09PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuc2hpcC5oaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgaXNIaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGlzSGl0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFsbFN1bmsoKSB7XG4gICAgICAgIGxldCBhbGxTdW5rID0gdHJ1ZTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXNoaXBzW2ldLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBhbGxTdW5rID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsbFN1bms7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hpcHMsXG4gICAgICAgIHJlY2VpdmVkU2hvdHMsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU3Vua1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmRGYWN0b3J5OyIsImNvbnN0IFBsYXllckZhY3RvcnkgPSAoKSA9PiB7XG4gICAgXG4gICAgZnVuY3Rpb24gYXR0YWNrKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByYW5kb21BdHRhY2soKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGF0dGFjayxcbiAgICAgICAgcmFuZG9tQXR0YWNrXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllckZhY3Rvcnk7IiwiY29uc3QgU2hpcEZhY3RvcnkgPSAobGVuZ3RoKSA9PiB7XG4gICAgbGV0IGhpdENvdW50ID0gMDtcblxuICAgIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRDb3VudCsrO1xuICAgICAgICByZXR1cm4gdGhpcy5oaXRDb3VudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5oaXRDb3VudCA+PSB0aGlzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBoaXRDb3VudCxcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcEZhY3Rvcnk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUNvbnRyb2xsZXIocGxheWVyR2FtZWJvYXJkLCBjb21wdXRlckdhbWVib2FyZCkge1xuICAgIGNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWdyaWQnKTtcbiAgICBjb25zdCBjb21wdXRlckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItZ3JpZCcpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xuICAgIGNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydCcpO1xuICAgIGNvbnN0IHNoaXB5YXJkTGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXB5YXJkLWxhYmVscycpO1xuICAgIGNvbnN0IHNoaXB5YXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXB5YXJkJyk7XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHtcbiAgICAgICAgbWVzc2FnZVNlbGVjdFNoaXA6ICdTZWxlY3QgYSBzaGlwIHRvIHBsYWNlJyxcbiAgICAgICAgbWVzc2FnZVBsYWNlU2hpcDogJ1NlbGVjdCBhIHN0YXJ0aW5nIHNwYWNlIHRvIHBsYWNlIHlvdXIgc2hpcCcsXG4gICAgICAgIG1lc3NhZ2VQbGF5R2FtZTogJ0NsaWNrIG9uIHRoZSBjb21wdXRlciBncmlkIHRvIGF0dGFjaycsXG4gICAgICAgIG1lc3NhZ2VQbGF5ZXJXaW5zOiAnWW91IHdpbiEnLFxuICAgICAgICBtZXNzYWdlUGxheWVyTG9zZXM6ICdZb3UgbG9zZSEnXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICAgICAgICAoaSA8IDEwMCkgPyBwbGF5ZXJHcmlkLmFwcGVuZENoaWxkKHNxdWFyZSkgOiBjb21wdXRlckdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSBmb2xsb3dpbmcgbG9vcCB3aGVuIGZpbmlzaGVkICh0aGlzIGRpc3BsYXlzIGNvbXB1dGVyJ3Mgc2hpcHMpXG4gICAgICAgIC8vIGNvbXB1dGVyR2FtZWJvYXJkLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgIC8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgICAgIGxldCBzaGlwSW5kZXggPSAoc2hpcC5jb29yZGluYXRlc1tpXS55ICogMTApICsgc2hpcC5jb29yZGluYXRlc1tpXS54O1xuICAgICAgICAvLyAgICAgICAgIGNvbXB1dGVyR3JpZC5jaGlsZHJlbltzaGlwSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSlcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZShkaXNwbGF5TWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gbWVzc2FnZXNbZGlzcGxheU1lc3NhZ2VdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYXllckF0dGFjayh0YXJnZXQsIGlzSGl0KSB7XG4gICAgICAgIChpc0hpdCkgPyBjb21wdXRlckdyaWQuY2hpbGRyZW5bdGFyZ2V0XS5jbGFzc0xpc3QuYWRkKCdoaXQnKSA6IGNvbXB1dGVyR3JpZC5jaGlsZHJlblt0YXJnZXRdLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wdXRlckF0dGFjayh0YXJnZXQsIGlzSGl0KSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRhcmdldC55ICogMTAgKyB0YXJnZXQueDtcbiAgICAgICAgKGlzSGl0KSA/IHBsYXllckdyaWQuY2hpbGRyZW5baW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2hpdCcpIDogcGxheWVyR3JpZC5jaGlsZHJlbltpbmRleF0uY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0U2hpcCh0YXJnZXRTaGlwKSB7XG4gICAgICAgIHRhcmdldFNoaXAuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgbGV0IHJvdGF0ZUJ0biA9IHRhcmdldFNoaXAucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgcm90YXRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByb3RhdGVTaGlwKHJvdGF0ZUJ0bikge1xuICAgICAgICByb3RhdGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlQnRuLXZlcnRpY2FsJyk7XG4gICAgICAgIGxldCBzaGlwID0gcm90YXRlQnRuLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBob3ZlclBsYXllclNoaXAodGFyZ2V0LCBzaGlwTGVuZ3RoLCBpc0hvcml6b250YWwpIHtcbiAgICAgICAgY29uc3QgcGxheWVyR3JpZEFycmF5ID0gQXJyYXkuZnJvbShwbGF5ZXJHcmlkLmNoaWxkcmVuKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgICAoaXNIb3Jpem9udGFsKSA/IHRhcmdldCA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcgOiB0YXJnZXQgPSBwbGF5ZXJHcmlkQXJyYXlbcGxheWVyR3JpZEFycmF5LmluZGV4T2YodGFyZ2V0KSArIDEwXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdXNlb3V0UGxheWVyU2hpcCh0YXJnZXQsIHNoaXBMZW5ndGgsIGlzSG9yaXpvbnRhbCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJHcmlkQXJyYXkgPSBBcnJheS5mcm9tKHBsYXllckdyaWQuY2hpbGRyZW4pO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgICAgIChpc0hvcml6b250YWwpID8gdGFyZ2V0ID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyA6IHRhcmdldCA9IHBsYXllckdyaWRBcnJheVtwbGF5ZXJHcmlkQXJyYXkuaW5kZXhPZih0YXJnZXQpICsgMTBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VQbGF5ZXJTaGlwKHRhcmdldCwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsLCBzaGlwQ291bnQpIHtcbiAgICAgICAgY29uc3QgcGxheWVyR3JpZEFycmF5ID0gQXJyYXkuZnJvbShwbGF5ZXJHcmlkLmNoaWxkcmVuKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgICAgIChpc0hvcml6b250YWwpID8gdGFyZ2V0ID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyA6IHRhcmdldCA9IHBsYXllckdyaWRBcnJheVtwbGF5ZXJHcmlkQXJyYXkuaW5kZXhPZih0YXJnZXQpICsgMTBdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxlY3RlZFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHlhcmQgLnNlbGVjdGVkJyk7ICAgIFxuICAgICAgICBzZWxlY3RlZFNoaXAuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgICAgIHNlbGVjdGVkU2hpcC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgc2VsZWN0ZWRTaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGlmKHNoaXBDb3VudCA+PSA1KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcHlhcmQgLnNoaXAnKS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2hpcHlhcmRMYWJlbHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgc2hpcHlhcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kR2FtZSh3aW5uZXJNZXNzYWdlKSB7XG4gICAgICAgIHVwZGF0ZU1lc3NhZ2Uod2lubmVyTWVzc2FnZSk7XG4gICAgICAgIHJlc3RhcnRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgcmVzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHNoaXB5YXJkTGFiZWxzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgc2hpcHlhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBBcnJheS5mcm9tKHBsYXllckdyaWQuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4gcGxheWVyR3JpZC5yZW1vdmVDaGlsZChjaGlsZCkpO1xuICAgICAgICBBcnJheS5mcm9tKGNvbXB1dGVyR3JpZC5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiBjb21wdXRlckdyaWQucmVtb3ZlQ2hpbGQoY2hpbGQpKTtcbiAgICAgICAgaW5pdCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQsXG4gICAgICAgIHVwZGF0ZU1lc3NhZ2UsXG4gICAgICAgIHBsYXllckF0dGFjayxcbiAgICAgICAgY29tcHV0ZXJBdHRhY2ssXG4gICAgICAgIHNlbGVjdFNoaXAsXG4gICAgICAgIHJvdGF0ZVNoaXAsXG4gICAgICAgIGhvdmVyUGxheWVyU2hpcCxcbiAgICAgICAgbW91c2VvdXRQbGF5ZXJTaGlwLFxuICAgICAgICBwbGFjZVBsYXllclNoaXAsXG4gICAgICAgIGVuZEdhbWUsXG4gICAgICAgIHJlc2V0R2FtZVxuICAgIH1cbn07IiwiaW1wb3J0ICcuLi9zcmMvc3R5bGUuY3NzJztcbmltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL2Rpc3BsYXlDb250cm9sbGVyJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5cbmNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWdyaWQnKTtcbmNvbnN0IGNvbXB1dGVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1ncmlkJyk7XG5cbmNvbnN0IHNoaXBMZW5ndGhzID0ge1xuICAgIGNhcnJpZXI6IDUsXG4gICAgYmF0dGxlc2hpcDogNCxcbiAgICBjcnVpc2VyOiAzLFxuICAgIHN1Ym1hcmluZTogMyxcbiAgICBkZXN0cm95ZXI6IDJcbn1cbmxldCBzZWxlY3RlZFNoaXBJZDtcbmxldCBpc0hvcml6b250YWwgPSB0cnVlO1xuXG5jb25zdCBwbGF5ZXIgPSBQbGF5ZXIoKTtcbmNvbnN0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG5jb25zdCBjb21wdXRlciA9IFBsYXllcigpO1xuY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbnJhbmRvbWl6ZUNvbXB1dGVyU2hpcHMoKTtcblxuY29uc3QgZGlzcGxheSA9IGRpc3BsYXlDb250cm9sbGVyKHBsYXllckdhbWVib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQpO1xuZGlzcGxheS5pbml0KCk7XG5kaXNwbGF5LnVwZGF0ZU1lc3NhZ2UoJ21lc3NhZ2VTZWxlY3RTaGlwJyk7XG5hZGRTaGlweWFyZEV2ZW50TGlzdGVuZXJzKCk7XG5sZXQgdHVybiA9IDA7XG5cbmNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydCcpO1xucmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0R2FtZSk7XG5cbmZ1bmN0aW9uIHJhbmRvbWl6ZUNvbXB1dGVyU2hpcHMoKSB7XG4gICAgbGV0IHNoaXBzID0gWzUsIDQsIDMsIDMsIDJdO1xuICAgIGxldCB4ID0gMDtcbiAgICBsZXQgeSA9IDA7XG4gICAgbGV0IHNoaXBTcGFjZXMgPSBbXTtcbiAgICB3aGlsZShzaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBpc0hvcml6b250YWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMikgPT09IDA7XG4gICAgICAgIGxldCBzaGlwTGVuZ3RoID0gc2hpcHMuc2hpZnQoKTtcbiAgICAgICAgbGV0IHZhbGlkQ29vcmRzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUoIXZhbGlkQ29vcmRzRm91bmQpIHtcbiAgICAgICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gc2hpcExlbmd0aCkpO1xuICAgICAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBzaGlwTGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpbmRleCA9IHkqMTAgKyB4O1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKChpc0hvcml6b250YWwgJiYgc2hpcFNwYWNlcy5pbmNsdWRlcyhpbmRleCArIGkpKSB8fCAoIWlzSG9yaXpvbnRhbCAmJiBzaGlwU3BhY2VzLmluY2x1ZGVzKGluZGV4ICsgaSoxMCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkQ29vcmRzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRDb29yZHNGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBpbmRleCA9IHkqMTAgKyB4O1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAoaXNIb3Jpem9udGFsKSA/IHNoaXBTcGFjZXMucHVzaChpbmRleCArIGkpIDogc2hpcFNwYWNlcy5wdXNoKGluZGV4ICsgaSoxMCk7XG4gICAgICAgIH1cbiAgICAgICAgKGlzSG9yaXpvbnRhbCkgPyBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoeCwgeSwgeCArIHNoaXBMZW5ndGggLSAxLCB5KSA6IGNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcCh4LCB5LCB4LCB5ICsgc2hpcExlbmd0aCAtIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkU2hpcHlhcmRFdmVudExpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcHlhcmQgLnNoaXAnKS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICBpZighc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpKVxuICAgICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFNoaXApO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTaGlweWFyZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlweWFyZCAuc2hpcCcpLmZvckVhY2goc2hpcCA9PiBzaGlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0U2hpcCkpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RTaGlwKGUpIHtcbiAgICBkaXNwbGF5LnNlbGVjdFNoaXAoZS50YXJnZXQpO1xuICAgIGlzSG9yaXpvbnRhbCA9IHRydWU7XG4gICAgbGV0IHJvdGF0ZUJ0biA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcCk7XG4gICAgc2VsZWN0ZWRTaGlwSWQgPSBlLnRhcmdldC5pZDtcbiAgICBkaXNwbGF5LnVwZGF0ZU1lc3NhZ2UoJ21lc3NhZ2VQbGFjZVNoaXAnKTtcbiAgICByZW1vdmVTaGlweWFyZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgcmVtb3ZlUGxheWVyR3JpZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgYWRkUGxheWVyR3JpZEV2ZW50TGlzdGVuZXJzKHNoaXBMZW5ndGhzW3NlbGVjdGVkU2hpcElkXSk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVNoaXAoZSkge1xuICAgIGRpc3BsYXkucm90YXRlU2hpcChlLnRhcmdldCk7XG4gICAgaXNIb3Jpem9udGFsID0gIWlzSG9yaXpvbnRhbDtcbiAgICByZW1vdmVQbGF5ZXJHcmlkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICBhZGRQbGF5ZXJHcmlkRXZlbnRMaXN0ZW5lcnMoc2hpcExlbmd0aHNbc2VsZWN0ZWRTaGlwSWRdKTtcbn1cblxuZnVuY3Rpb24gYWRkUGxheWVyR3JpZEV2ZW50TGlzdGVuZXJzKHNoaXBMZW5ndGgpIHtcbiAgICBjb25zdCBwbGF5ZXJHcmlkQXJyYXkgPSBBcnJheS5mcm9tKHBsYXllckdyaWQuY2hpbGRyZW4pO1xuICAgIHBsYXllckdyaWRBcnJheS5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IHBsYXllckdyaWRBcnJheS5pbmRleE9mKHNxdWFyZSk7XG4gICAgICAgIGlmKChpc0hvcml6b250YWwgJiYgaW5kZXglMTAgPD0gMTAtc2hpcExlbmd0aClcbiAgICAgICAgfHwgKCFpc0hvcml6b250YWwgJiYgTWF0aC5mbG9vcihpbmRleC8xMCkgPD0gMTAtc2hpcExlbmd0aCkpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlLnNlbGVjdGVkJykuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSBwbGF5ZXJHcmlkQXJyYXkuaW5kZXhPZihzcXVhcmUpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyR3JpZEFycmF5W2luZGV4IC0gaV0uY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzSG9yaXpvbnRhbCAmJiBpbmRleCAtIChpKjEwKSA+IDApIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJHcmlkQXJyYXlbaW5kZXggLSAoaSoxMCldLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWxpZCcpLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhvdmVyUGxheWVyU2hpcCk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vdXNlb3V0UGxheWVyU2hpcCk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcCwge29uY2U6IHRydWV9KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZW1vdmVQbGF5ZXJHcmlkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgQXJyYXkuZnJvbShwbGF5ZXJHcmlkLmNoaWxkcmVuKS5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZCcpO1xuICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaG92ZXJQbGF5ZXJTaGlwKTtcbiAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW91c2VvdXRQbGF5ZXJTaGlwKTtcbiAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VQbGF5ZXJTaGlwLCB7b25jZTogdHJ1ZX0pO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGhvdmVyUGxheWVyU2hpcChlKSB7XG4gICAgZGlzcGxheS5ob3ZlclBsYXllclNoaXAoZS50YXJnZXQsIHNoaXBMZW5ndGhzW3NlbGVjdGVkU2hpcElkXSwgaXNIb3Jpem9udGFsKTtcbn1cblxuZnVuY3Rpb24gbW91c2VvdXRQbGF5ZXJTaGlwKGUpIHtcbiAgICBkaXNwbGF5Lm1vdXNlb3V0UGxheWVyU2hpcChlLnRhcmdldCwgc2hpcExlbmd0aHNbc2VsZWN0ZWRTaGlwSWRdLCBpc0hvcml6b250YWwpO1xufVxuXG5mdW5jdGlvbiBwbGFjZVBsYXllclNoaXAoZSkge1xuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBjb25zdCBwbGF5ZXJHcmlkQXJyYXkgPSBBcnJheS5mcm9tKHBsYXllckdyaWQuY2hpbGRyZW4pO1xuICAgIGxldCBpbmRleCA9IHBsYXllckdyaWRBcnJheS5pbmRleE9mKHRhcmdldCk7XG4gICAgbGV0IHggPSBpbmRleCUxMDtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoaW5kZXgvMTApO1xuICAgIFxuICAgIHJlbW92ZVBsYXllclNoaXBFdmVudExpc3RlbmVycygpO1xuICAgIChpc0hvcml6b250YWwpID8gXG4gICAgICAgIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoeCwgeSwgeCArIHNoaXBMZW5ndGhzW3NlbGVjdGVkU2hpcElkXSAtIDEsIHkpIDogXG4gICAgICAgIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoeCwgeSwgeCwgeSArIHNoaXBMZW5ndGhzW3NlbGVjdGVkU2hpcElkXSAtIDEpO1xuICAgIGlmKHBsYXllckdhbWVib2FyZC5zaGlwcy5sZW5ndGggPCA1KSB7XG4gICAgICAgIGRpc3BsYXkudXBkYXRlTWVzc2FnZSgnbWVzc2FnZVNlbGVjdFNoaXAnKTtcbiAgICAgICAgYWRkU2hpcHlhcmRFdmVudExpc3RlbmVycygpO1xuICAgIH0gZWxzZSBpZihwbGF5ZXJHYW1lYm9hcmQuc2hpcHMubGVuZ3RoID49IDUpIHtcbiAgICAgICAgZGlzcGxheS51cGRhdGVNZXNzYWdlKCdtZXNzYWdlUGxheUdhbWUnKTtcbiAgICAgICAgYWRkQ29tcHV0ZXJHcmlkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgZGlzcGxheS5wbGFjZVBsYXllclNoaXAodGFyZ2V0LCBzaGlwTGVuZ3Roc1tzZWxlY3RlZFNoaXBJZF0sIGlzSG9yaXpvbnRhbCwgcGxheWVyR2FtZWJvYXJkLnNoaXBzLmxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVBsYXllclNoaXBFdmVudExpc3RlbmVycygpIHtcbiAgICBBcnJheS5mcm9tKHBsYXllckdyaWQuY2hpbGRyZW4pLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcCwge29uY2U6IHRydWV9KTtcbiAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhvdmVyUGxheWVyU2hpcCk7XG4gICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vdXNlb3V0UGxheWVyU2hpcCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkQ29tcHV0ZXJHcmlkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgQXJyYXkuZnJvbShjb21wdXRlckdyaWQuY2hpbGRyZW4pLmZvckVhY2goc3F1YXJlID0+IHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXllckF0dGFja0xpc3RlbmVyLCB7b25jZTogdHJ1ZX0pKTtcbn1cblxuZnVuY3Rpb24gcGxheWVyQXR0YWNrTGlzdGVuZXIoZSkge1xuICAgIGlmKHR1cm4gJSAyID09PSAwKVxuICAgICAgICBwbGF5ZXJBdHRhY2soZSk7XG59XG5cbmZ1bmN0aW9uIHBsYXllckF0dGFjayhlKSB7XG4gICAgbGV0IGluZGV4ID0gQXJyYXkuZnJvbShjb21wdXRlckdyaWQuY2hpbGRyZW4pLmluZGV4T2YoZS50YXJnZXQpO1xuICAgIGxldCBhdHRhY2sgPSBwbGF5ZXIuYXR0YWNrKGluZGV4JTEwLCBNYXRoLmZsb29yKGluZGV4LzEwKSk7XG4gICAgbGV0IGlzSGl0ID0gY29tcHV0ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2spO1xuICAgIGRpc3BsYXkucGxheWVyQXR0YWNrKGluZGV4LCBpc0hpdCk7XG4gICAgaWYoY29tcHV0ZXJHYW1lYm9hcmQuYWxsU3VuaygpKSBcbiAgICAgICAgZW5kR2FtZShwbGF5ZXIpO1xuICAgIHR1cm4rKztcbiAgICBjb21wdXRlckF0dGFjaygpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlckF0dGFjaygpIHtcbiAgICBsZXQgYXR0YWNrID0gY29tcHV0ZXIucmFuZG9tQXR0YWNrKCk7XG4gICAgd2hpbGUgKHBsYXllckdhbWVib2FyZC5yZWNlaXZlZFNob3RzLmxlbmd0aCA8IDEwMCAmJiAocGxheWVyR2FtZWJvYXJkLnJlY2VpdmVkU2hvdHMuc29tZShhID0+IChhLnggPT09IGF0dGFjay54ICYmIGEueSA9PT0gYXR0YWNrLnkpKSkpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXR0YWNrID0gY29tcHV0ZXIucmFuZG9tQXR0YWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge31cbiAgICB9IFxuICAgIGxldCBpc0hpdCA9IHBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFjayk7XG4gICAgZGlzcGxheS5jb21wdXRlckF0dGFjayhhdHRhY2ssIGlzSGl0KTtcbiAgICBpZihwbGF5ZXJHYW1lYm9hcmQuYWxsU3VuaygpKSBcbiAgICAgICAgZW5kR2FtZShjb21wdXRlcik7XG4gICAgdHVybisrO1xufVxuXG5mdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xuICAgICh3aW5uZXIgPT09IHBsYXllcikgPyBkaXNwbGF5LmVuZEdhbWUoJ21lc3NhZ2VQbGF5ZXJXaW5zJykgOiBkaXNwbGF5LmVuZEdhbWUoJ21lc3NhZ2VQbGF5ZXJMb3NlcycpO1xuICAgIEFycmF5LmZyb20oY29tcHV0ZXJHcmlkLmNoaWxkcmVuKS5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXllckF0dGFja0xpc3RlbmVyLCB7b25jZTogdHJ1ZX0pO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgICBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZWRTaG90cy5sZW5ndGggPSAwO1xuICAgIHBsYXllckdhbWVib2FyZC5zaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcC5zaGlwLmhpdENvdW50ID0gMCk7XG4gICAgcGxheWVyR2FtZWJvYXJkLnNoaXBzLmxlbmd0aCA9IDA7XG4gICAgY29tcHV0ZXJHYW1lYm9hcmQucmVjZWl2ZWRTaG90cy5sZW5ndGggPSAwO1xuICAgIGNvbXB1dGVyR2FtZWJvYXJkLnNoaXBzLmZvckVhY2goc2hpcCA9PiBzaGlwLnNoaXAuaGl0Q291bnQgPSAwKTtcbiAgICBjb21wdXRlckdhbWVib2FyZC5zaGlwcy5sZW5ndGggPSAwO1xuICAgIHJhbmRvbWl6ZUNvbXB1dGVyU2hpcHMoKTtcbiAgICB0dXJuID0gMDtcbiAgICBkaXNwbGF5LnJlc2V0R2FtZSgpO1xuICAgIGRpc3BsYXkudXBkYXRlTWVzc2FnZSgnbWVzc2FnZVNlbGVjdFNoaXAnKTtcbiAgICBhZGRTaGlweWFyZEV2ZW50TGlzdGVuZXJzKCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9