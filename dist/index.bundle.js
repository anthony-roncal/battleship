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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../rotate-right-variant.svg */ "./rotate-right-variant.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../rotate-left-variant.svg */ "./rotate-left-variant.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n}\n\n.grid-container {\n    display: flex;\n    gap: 100px;\n    margin-bottom: 50px;\n}\n\n.message {\n    font-size: 26px;\n    margin: 0;\n}\n\n.player-grid,\n.computer-grid {\n    max-width: 400px;\n    max-height: 400px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.square {\n    width: 40px; \n    height: 40px; \n    border: solid 1px black; \n    box-sizing: border-box;\n}\n\n.shipyard,\n.shipyard-labels {\n    display: flex;\n    gap: 20px;\n}\n\n.shipyard-labels > p {\n    min-width: 210px;\n    text-align: center;\n}\n\n.shipyard > div {\n    min-width: 210px;\n    min-height: 220px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}\n\n.shipyard-label {\n    height: 20px;\n    margin: 0;\n}\n\n.rotateBtn-horizontal {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    transform: rotate(180deg);\n    width: 25px;\n    height: 25px;\n    border: 1px solid;\n    border-radius: 5px;\n}\n\n.rotateBtn-vertical {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    transform: rotate(90deg);\n}\n\n.ship {\n    border: 2px solid grey;\n    background-color: darkgrey;\n}\n\n.hit{\n    background-color: red !important;\n}\n\n.miss {\n    background-color: blue;\n}\n\n.restart {\n    font-size: 20px;\n    padding: 10px 25px;\n    border-radius: 25px;\n}\n\n.hide {\n    display: none;\n}\n\n#carrier,\n#battleship,\n#cruiser,\n#submarine,\n#destroyer {\n    height: 40px;\n    width: 200px;\n    box-sizing: border-box;\n}\n\n#battleship {\n    width: 160px;\n}\n\n#cruiser,\n#submarine {\n    width: 120px;\n}\n\n#destroyer {\n    width: 80px;\n}\n\n.selected {\n    border: 2px solid darkgreen;\n    background-color: green;\n}\n\n.placed {\n    opacity: 50%;\n}\n\n.hover {\n    border: 2px solid darkgreen;\n}\n\n.rotate {\n    transform: rotate(90deg);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yCAAyC;IACzC,SAAS;AACb;;AAEA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,SAAS;AACb;;AAEA;;IAEI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,yDAAoD;IACpD,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,yDAAmD;IACnD,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;;;;;IAKI,YAAY;IACZ,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;AAC5B","sourcesContent":["body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n}\n\n.grid-container {\n    display: flex;\n    gap: 100px;\n    margin-bottom: 50px;\n}\n\n.message {\n    font-size: 26px;\n    margin: 0;\n}\n\n.player-grid,\n.computer-grid {\n    max-width: 400px;\n    max-height: 400px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.square {\n    width: 40px; \n    height: 40px; \n    border: solid 1px black; \n    box-sizing: border-box;\n}\n\n.shipyard,\n.shipyard-labels {\n    display: flex;\n    gap: 20px;\n}\n\n.shipyard-labels > p {\n    min-width: 210px;\n    text-align: center;\n}\n\n.shipyard > div {\n    min-width: 210px;\n    min-height: 220px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}\n\n.shipyard-label {\n    height: 20px;\n    margin: 0;\n}\n\n.rotateBtn-horizontal {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    background-image: url('../rotate-right-variant.svg');\n    transform: rotate(180deg);\n    width: 25px;\n    height: 25px;\n    border: 1px solid;\n    border-radius: 5px;\n}\n\n.rotateBtn-vertical {\n    background-image: url('../rotate-left-variant.svg');\n    transform: rotate(90deg);\n}\n\n.ship {\n    border: 2px solid grey;\n    background-color: darkgrey;\n}\n\n.hit{\n    background-color: red !important;\n}\n\n.miss {\n    background-color: blue;\n}\n\n.restart {\n    font-size: 20px;\n    padding: 10px 25px;\n    border-radius: 25px;\n}\n\n.hide {\n    display: none;\n}\n\n#carrier,\n#battleship,\n#cruiser,\n#submarine,\n#destroyer {\n    height: 40px;\n    width: 200px;\n    box-sizing: border-box;\n}\n\n#battleship {\n    width: 160px;\n}\n\n#cruiser,\n#submarine {\n    width: 120px;\n}\n\n#destroyer {\n    width: 80px;\n}\n\n.selected {\n    border: 2px solid darkgreen;\n    background-color: green;\n}\n\n.placed {\n    opacity: 50%;\n}\n\n.hover {\n    border: 2px solid darkgreen;\n}\n\n.rotate {\n    transform: rotate(90deg);\n}\n"],"sourceRoot":""}]);
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

    function init() {
        for (let i = 0; i < 200; i++) {
            let square = document.createElement('div');
            square.classList.add("square");
            (i < 100) ? playerGrid.appendChild(square) : computerGrid.appendChild(square);
        }

        computerGameboard.ships.forEach(ship => {
            for(let i = 0; i < ship.coordinates.length; i++) {
                let shipIndex = (ship.coordinates[i].y * 10) + ship.coordinates[i].x;
                computerGrid.children[shipIndex].classList.add('ship');
            }
        })
    };

    function updateMessage(displayMessage) {
        message.textContent = displayMessage;
    }
    
    function toggleHideShipyard() {
        shipyardLabels.classList.toggle('hide');
        shipyard.classList.toggle('hide');
    }

    function playerAttack(target, isHit) {
        (isHit) ? computerGrid.children[target].classList.add('hit') : computerGrid.children[target].classList.add('miss');
    }

    function computerAttack(target, isHit) {
        let index = target.y * 10 + target.x;
        (isHit) ? playerGrid.children[index].classList.add('hit') : playerGrid.children[index].classList.add('miss');

    }

    function showRestartButton() {
        restartButton.classList.remove('hide');
    }

    function resetGame() {
        restartButton.classList.add('hide');
        Array.from(playerGrid.children).forEach(child => playerGrid.removeChild(child));
        Array.from(computerGrid.children).forEach(child => computerGrid.removeChild(child));
        init();
    }

    return {
        init,
        updateMessage,
        toggleHideShipyard,
        playerAttack,
        computerAttack,
        showRestartButton,
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Gameboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Player__WEBPACK_IMPORTED_MODULE_3__);





const playerGrid = document.querySelector('.player-grid');
const computerGrid = document.querySelector('.computer-grid');

const messageSelectShip = 'Select a ship to place';
const messagePlaceShip = 'Select a starting space to place your ';
const messagePlayGame = 'Click on the computer grid to attack';
const messagePlayerWins = 'You win!';
const messagePlayerLoses = 'You lose!';

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
display.updateMessage(messageSelectShip);
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
    document.querySelectorAll('.shipyard .ship').forEach(ship => ship.addEventListener('click', selectShip, {once: true}));
}

function removeShipyardEventListeners() {
    document.querySelectorAll('.shipyard .ship').forEach(ship => ship.removeEventListener('click', selectShip));
}

function selectShip(e) {
    e.target.classList.add('selected');
    isHorizontal = true;
    let rotateBtn = e.target.previousElementSibling;
    rotateBtn.classList.remove('hide');
    rotateBtn.addEventListener('click', rotateShip);
    selectedShipId = e.target.id;
    display.updateMessage(messagePlaceShip + selectedShipId);
    removeShipyardEventListeners();
    removePlayerGridEventListeners();
    addPlayerGridEventListeners(shipLengths[selectedShipId]);
}

function rotateShip(e) {
    e.target.classList.toggle('rotateBtn-vertical');
    let ship = e.target.nextElementSibling;
    ship.classList.toggle('rotate');
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
                playerGridArray[index - i].classList.remove('valid')
            } else if (!isHorizontal && index - (i*10) > 0) {
                playerGridArray[index - (i*10)].classList.remove('valid');
            }
        }
    })
    document.querySelectorAll('.valid').forEach(square => {
        square.addEventListener('click', placePlayerShip, {once: true});
        square.addEventListener('mouseover', hoverPlayerShip);
        square.addEventListener('mouseout', mouseoutPlayerShip);
    })
}

function removePlayerGridEventListeners() {
    Array.from(playerGrid.children).forEach(square => {
        square.classList.remove('valid');
        square.removeEventListener('click', placePlayerShip, {once: true});
        square.removeEventListener('mouseover', hoverPlayerShip);
        square.removeEventListener('mouseout', mouseoutPlayerShip);
    })
}

function hoverPlayerShip(e) {
    let target = e.target;
    const playerGridArray = Array.from(playerGrid.children);
    for(let i = 0; i < shipLengths[selectedShipId]; i++) {
        target.classList.add('hover');
        (isHorizontal) ? target = target.nextElementSibling : target = playerGridArray[playerGridArray.indexOf(target) + 10];
    }
}

function mouseoutPlayerShip(e) {
    let target = e.target;
    const playerGridArray = Array.from(playerGrid.children);
    for(let i = 0; i < shipLengths[selectedShipId]; i++) {
        target.classList.remove('hover');
        (isHorizontal) ? target = target.nextElementSibling : target = playerGridArray[playerGridArray.indexOf(target) + 10];
    }
}

function placePlayerShip(e) {
    let target = e.target;
    const playerGridArray = Array.from(playerGrid.children);
    let index = playerGridArray.indexOf(target);
    let x = index%10;
    let y = Math.floor(index/10);
    for(let i = 0; i < shipLengths[selectedShipId]; i++) {
        target.classList.add('selected');
        target.classList.remove('hover');
        (isHorizontal) ? target = target.nextElementSibling : target = playerGridArray[playerGridArray.indexOf(target) + 10];
    }
    (isHorizontal) ? 
        playerGameboard.placeShip(x, y, x + shipLengths[selectedShipId] - 1, y) : 
        playerGameboard.placeShip(x, y, x, y + shipLengths[selectedShipId] - 1);
    let selectedShip = document.querySelector('.shipyard .selected');    
    selectedShip.classList.add('placed');
    selectedShip.previousElementSibling.classList.add('hide');
    selectedShip.classList.remove('selected');
    if(playerGameboard.ships.length < 5) {
        display.updateMessage(messageSelectShip);
        addShipyardEventListeners();
        removePlayerShipEventListeners();
    } else if(playerGameboard.ships.length >= 5) {
        removePlayerShipEventListeners();
        display.updateMessage(messagePlayGame);
        addComputerGridEventListeners();
        document.querySelectorAll('.shipyard .ship').forEach(ship => ship.classList.remove('placed'));
        display.toggleHideShipyard();
    }
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
    Array.from(computerGrid.children).forEach(square => {
        console.log(square);
        square.addEventListener('click', playerAttackListener, {once: true});
    })
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
    (winner === player) ? display.updateMessage(messagePlayerWins) : display.updateMessage(messagePlayerLoses);
    display.showRestartButton();
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
    turn = 0;
    display.resetGame();
    display.updateMessage(messageSelectShip);
    display.toggleHideShipyard();
    addShipyardEventListeners();
}

/***/ }),

/***/ "./rotate-left-variant.svg":
/*!*********************************!*\
  !*** ./rotate-left-variant.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1150ad973bc3ddd6f5c6.svg";

/***/ }),

/***/ "./rotate-right-variant.svg":
/*!**********************************!*\
  !*** ./rotate-right-variant.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "560d80e79cf628a519f0.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vcm90YXRlLXJpZ2h0LXZhcmlhbnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vcm90YXRlLWxlZnQtdmFyaWFudC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5wbGF5ZXItZ3JpZCxcXG4uY29tcHV0ZXItZ3JpZCB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICB3aWR0aDogNDBweDsgXFxuICAgIGhlaWdodDogNDBweDsgXFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrOyBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnNoaXB5YXJkLFxcbi5zaGlweWFyZC1sYWJlbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5zaGlweWFyZC1sYWJlbHMgPiBwIHtcXG4gICAgbWluLXdpZHRoOiAyMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2hpcHlhcmQgPiBkaXYge1xcbiAgICBtaW4td2lkdGg6IDIxMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNoaXB5YXJkLWxhYmVsIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5yb3RhdGVCdG4taG9yaXpvbnRhbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucm90YXRlQnRuLXZlcnRpY2FsIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xcbn1cXG5cXG4uaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucmVzdGFydCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjYXJyaWVyLFxcbiNiYXR0bGVzaGlwLFxcbiNjcnVpc2VyLFxcbiNzdWJtYXJpbmUsXFxuI2Rlc3Ryb3llciB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jYmF0dGxlc2hpcCB7XFxuICAgIHdpZHRoOiAxNjBweDtcXG59XFxuXFxuI2NydWlzZXIsXFxuI3N1Ym1hcmluZSB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuI2Rlc3Ryb3llciB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucGxhY2VkIHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JlZW47XFxufVxcblxcbi5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YseURBQW9EO0lBQ3BELHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5REFBbUQ7SUFDbkQsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7Ozs7SUFLSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucGxheWVyLWdyaWQsXFxuLmNvbXB1dGVyLWdyaWQge1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gICAgd2lkdGg6IDQwcHg7IFxcbiAgICBoZWlnaHQ6IDQwcHg7IFxcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjazsgXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5zaGlweWFyZCxcXG4uc2hpcHlhcmQtbGFiZWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2hpcHlhcmQtbGFiZWxzID4gcCB7XFxuICAgIG1pbi13aWR0aDogMjEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNoaXB5YXJkID4gZGl2IHtcXG4gICAgbWluLXdpZHRoOiAyMTBweDtcXG4gICAgbWluLWhlaWdodDogMjIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaGlweWFyZC1sYWJlbCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucm90YXRlQnRuLWhvcml6b250YWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9yb3RhdGUtcmlnaHQtdmFyaWFudC5zdmcnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJvdGF0ZUJ0bi12ZXJ0aWNhbCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcm90YXRlLWxlZnQtdmFyaWFudC5zdmcnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xcbn1cXG5cXG4uaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucmVzdGFydCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjYXJyaWVyLFxcbiNiYXR0bGVzaGlwLFxcbiNjcnVpc2VyLFxcbiNzdWJtYXJpbmUsXFxuI2Rlc3Ryb3llciB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jYmF0dGxlc2hpcCB7XFxuICAgIHdpZHRoOiAxNjBweDtcXG59XFxuXFxuI2NydWlzZXIsXFxuI3N1Ym1hcmluZSB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuI2Rlc3Ryb3llciB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucGxhY2VkIHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JlZW47XFxufVxcblxcbi5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgU2hpcCA9IHJlcXVpcmUoJy4vU2hpcCcpO1xuXG5jb25zdCBHYW1lYm9hcmRGYWN0b3J5ID0gKCkgPT4geyBcblxuICAgIGxldCBzaGlwcyA9IFtdO1xuICAgIGxldCByZWNlaXZlZFNob3RzID0gW107XG4gICAgXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xuICAgICAgICBsZXQgbmV3U2hpcDtcbiAgICAgICAgaWYoc3RhcnRYID09PSBlbmRYICYmIHN0YXJ0WSA9PT0gZW5kWSkge1xuICAgICAgICAgICAgLy8gc2hpcCB0YWtlcyB1cCAxIHNwYWNlXG4gICAgICAgICAgICBsZXQgc2hpcExlbmd0aCA9IDE7XG4gICAgICAgICAgICBuZXdTaGlwID0gU2hpcChzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goe3g6IHN0YXJ0WCwgeTogc3RhcnRZfSk7XG4gICAgICAgIH0gZWxzZSBpZihzdGFydFggIT09IGVuZFggJiYgc3RhcnRZID09PSBlbmRZKSB7XG4gICAgICAgICAgICAvLyBob3Jpem9udGFsIHNoaXAgcGxhY2VtZW50XG4gICAgICAgICAgICBsZXQgc2hpcExlbmd0aCA9IGVuZFggLSBzdGFydFggKyAxO1xuICAgICAgICAgICAgbmV3U2hpcCA9IFNoaXAoc2hpcExlbmd0aCk7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IHN0YXJ0WCArIGksXG4gICAgICAgICAgICAgICAgICAgIHk6IHN0YXJ0WVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZihzdGFydFggPT09IGVuZFggJiYgc3RhcnRZICE9PSBlbmRZKSB7XG4gICAgICAgICAgICAvLyB2ZXJ0aWNhbCBzaGlwIHBsYWNlbWVudFxuICAgICAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBlbmRZIC0gc3RhcnRZICsgMTtcbiAgICAgICAgICAgIG5ld1NoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB4OiBzdGFydFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IHN0YXJ0WSArIGlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYoc3RhcnRYICE9PSBlbmRYICYmIHN0YXJ0WSAhPT0gZW5kWSkge1xuICAgICAgICAgICAgLy8gaW52YWxpZCAoZGlhZ29uYWwpIHNoaXAgcGxhY2VtZW50XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2hpcHMucHVzaCh7XG4gICAgICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXMsXG4gICAgICAgICAgICBzaGlwOiBuZXdTaGlwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2hpcHNbc2hpcHMubGVuZ3RoLTFdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soe3gsIHl9KSB7XG4gICAgICAgIHJlY2VpdmVkU2hvdHMucHVzaCh7eCwgeX0pO1xuICAgICAgICBsZXQgaXNIaXQgPSBmYWxzZTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoc2hpcC5jb29yZGluYXRlc1tpXS54ID09PSB4ICYmIHNoaXAuY29vcmRpbmF0ZXNbaV0ueSA9PT0geSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBpc0hpdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbGxTdW5rKCkge1xuICAgICAgICBsZXQgYWxsU3VuayA9IHRydWU7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFzaGlwc1tpXS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgYWxsU3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbGxTdW5rO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNoaXBzLFxuICAgICAgICByZWNlaXZlZFNob3RzLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFN1bmtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkRmFjdG9yeTsiLCJjb25zdCBQbGF5ZXJGYWN0b3J5ID0gKCkgPT4ge1xuICAgIFxuICAgIGZ1bmN0aW9uIGF0dGFjayh4LCB5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmFuZG9tQXR0YWNrKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhdHRhY2ssXG4gICAgICAgIHJhbmRvbUF0dGFja1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXJGYWN0b3J5OyIsImNvbnN0IFNoaXBGYWN0b3J5ID0gKGxlbmd0aCkgPT4ge1xuICAgIGxldCBoaXRDb3VudCA9IDA7XG5cbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0Q291bnQrKztcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0Q291bnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuaGl0Q291bnQgPj0gdGhpcy5sZW5ndGgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgaGl0Q291bnQsXG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXBGYWN0b3J5OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlDb250cm9sbGVyKHBsYXllckdhbWVib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQpIHtcbiAgICBjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ncmlkJyk7XG4gICAgY29uc3QgY29tcHV0ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWdyaWQnKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcbiAgICBjb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQnKTtcbiAgICBjb25zdCBzaGlweWFyZExhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZC1sYWJlbHMnKTtcbiAgICBjb25zdCBzaGlweWFyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZCcpO1xuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICAgICAgICAoaSA8IDEwMCkgPyBwbGF5ZXJHcmlkLmFwcGVuZENoaWxkKHNxdWFyZSkgOiBjb21wdXRlckdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBzaGlwSW5kZXggPSAoc2hpcC5jb29yZGluYXRlc1tpXS55ICogMTApICsgc2hpcC5jb29yZGluYXRlc1tpXS54O1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyR3JpZC5jaGlsZHJlbltzaGlwSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZShkaXNwbGF5TWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gZGlzcGxheU1lc3NhZ2U7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHRvZ2dsZUhpZGVTaGlweWFyZCgpIHtcbiAgICAgICAgc2hpcHlhcmRMYWJlbHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICBzaGlweWFyZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheWVyQXR0YWNrKHRhcmdldCwgaXNIaXQpIHtcbiAgICAgICAgKGlzSGl0KSA/IGNvbXB1dGVyR3JpZC5jaGlsZHJlblt0YXJnZXRdLmNsYXNzTGlzdC5hZGQoJ2hpdCcpIDogY29tcHV0ZXJHcmlkLmNoaWxkcmVuW3RhcmdldF0uY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKHRhcmdldCwgaXNIaXQpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGFyZ2V0LnkgKiAxMCArIHRhcmdldC54O1xuICAgICAgICAoaXNIaXQpID8gcGxheWVyR3JpZC5jaGlsZHJlbltpbmRleF0uY2xhc3NMaXN0LmFkZCgnaGl0JykgOiBwbGF5ZXJHcmlkLmNoaWxkcmVuW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UmVzdGFydEJ1dHRvbigpIHtcbiAgICAgICAgcmVzdGFydEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICAgICAgICByZXN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgQXJyYXkuZnJvbShwbGF5ZXJHcmlkLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHBsYXllckdyaWQucmVtb3ZlQ2hpbGQoY2hpbGQpKTtcbiAgICAgICAgQXJyYXkuZnJvbShjb21wdXRlckdyaWQuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4gY29tcHV0ZXJHcmlkLnJlbW92ZUNoaWxkKGNoaWxkKSk7XG4gICAgICAgIGluaXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0LFxuICAgICAgICB1cGRhdGVNZXNzYWdlLFxuICAgICAgICB0b2dnbGVIaWRlU2hpcHlhcmQsXG4gICAgICAgIHBsYXllckF0dGFjayxcbiAgICAgICAgY29tcHV0ZXJBdHRhY2ssXG4gICAgICAgIHNob3dSZXN0YXJ0QnV0dG9uLFxuICAgICAgICByZXNldEdhbWVcbiAgICB9XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXInO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcblxuY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItZ3JpZCcpO1xuY29uc3QgY29tcHV0ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWdyaWQnKTtcblxuY29uc3QgbWVzc2FnZVNlbGVjdFNoaXAgPSAnU2VsZWN0IGEgc2hpcCB0byBwbGFjZSc7XG5jb25zdCBtZXNzYWdlUGxhY2VTaGlwID0gJ1NlbGVjdCBhIHN0YXJ0aW5nIHNwYWNlIHRvIHBsYWNlIHlvdXIgJztcbmNvbnN0IG1lc3NhZ2VQbGF5R2FtZSA9ICdDbGljayBvbiB0aGUgY29tcHV0ZXIgZ3JpZCB0byBhdHRhY2snO1xuY29uc3QgbWVzc2FnZVBsYXllcldpbnMgPSAnWW91IHdpbiEnO1xuY29uc3QgbWVzc2FnZVBsYXllckxvc2VzID0gJ1lvdSBsb3NlISc7XG5cbmNvbnN0IHNoaXBMZW5ndGhzID0ge1xuICAgIGNhcnJpZXI6IDUsXG4gICAgYmF0dGxlc2hpcDogNCxcbiAgICBjcnVpc2VyOiAzLFxuICAgIHN1Ym1hcmluZTogMyxcbiAgICBkZXN0cm95ZXI6IDJcbn1cbmxldCBzZWxlY3RlZFNoaXBJZDtcbmxldCBpc0hvcml6b250YWwgPSB0cnVlO1xuXG5jb25zdCBwbGF5ZXIgPSBQbGF5ZXIoKTtcbmNvbnN0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG5jb25zdCBjb21wdXRlciA9IFBsYXllcigpO1xuY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbnJhbmRvbWl6ZUNvbXB1dGVyU2hpcHMoKTtcblxuY29uc3QgZGlzcGxheSA9IGRpc3BsYXlDb250cm9sbGVyKHBsYXllckdhbWVib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQpO1xuZGlzcGxheS5pbml0KCk7XG5kaXNwbGF5LnVwZGF0ZU1lc3NhZ2UobWVzc2FnZVNlbGVjdFNoaXApO1xuYWRkU2hpcHlhcmRFdmVudExpc3RlbmVycygpO1xubGV0IHR1cm4gPSAwO1xuXG5jb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQnKTtcbnJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEdhbWUpO1xuXG5mdW5jdGlvbiByYW5kb21pemVDb21wdXRlclNoaXBzKCkge1xuICAgIGxldCBzaGlwcyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgICBsZXQgeCA9IDA7XG4gICAgbGV0IHkgPSAwO1xuICAgIGxldCBzaGlwU3BhY2VzID0gW107XG4gICAgd2hpbGUoc2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgaXNIb3Jpem9udGFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpID09PSAwO1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IHNoaXBzLnNoaWZ0KCk7XG4gICAgICAgIGxldCB2YWxpZENvb3Jkc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgIHdoaWxlKCF2YWxpZENvb3Jkc0ZvdW5kKSB7XG4gICAgICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIHNoaXBMZW5ndGgpKTtcbiAgICAgICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gc2hpcExlbmd0aCkpO1xuICAgICAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaW5kZXggPSB5KjEwICsgeDtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZigoaXNIb3Jpem9udGFsICYmIHNoaXBTcGFjZXMuaW5jbHVkZXMoaW5kZXggKyBpKSkgfHwgKCFpc0hvcml6b250YWwgJiYgc2hpcFNwYWNlcy5pbmNsdWRlcyhpbmRleCArIGkqMTApKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZENvb3Jkc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkQ29vcmRzRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5kZXggPSB5KjEwICsgeDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgKGlzSG9yaXpvbnRhbCkgPyBzaGlwU3BhY2VzLnB1c2goaW5kZXggKyBpKSA6IHNoaXBTcGFjZXMucHVzaChpbmRleCArIGkqMTApO1xuICAgICAgICB9XG4gICAgICAgIChpc0hvcml6b250YWwpID8gY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKHgsIHksIHggKyBzaGlwTGVuZ3RoIC0gMSwgeSkgOiBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoeCwgeSwgeCwgeSArIHNoaXBMZW5ndGggLSAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFNoaXB5YXJkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXB5YXJkIC5zaGlwJykuZm9yRWFjaChzaGlwID0+IHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RTaGlwLCB7b25jZTogdHJ1ZX0pKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2hpcHlhcmRFdmVudExpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcHlhcmQgLnNoaXAnKS5mb3JFYWNoKHNoaXAgPT4gc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFNoaXApKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0U2hpcChlKSB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBpc0hvcml6b250YWwgPSB0cnVlO1xuICAgIGxldCByb3RhdGVCdG4gPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIHJvdGF0ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcCk7XG4gICAgc2VsZWN0ZWRTaGlwSWQgPSBlLnRhcmdldC5pZDtcbiAgICBkaXNwbGF5LnVwZGF0ZU1lc3NhZ2UobWVzc2FnZVBsYWNlU2hpcCArIHNlbGVjdGVkU2hpcElkKTtcbiAgICByZW1vdmVTaGlweWFyZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgcmVtb3ZlUGxheWVyR3JpZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgYWRkUGxheWVyR3JpZEV2ZW50TGlzdGVuZXJzKHNoaXBMZW5ndGhzW3NlbGVjdGVkU2hpcElkXSk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVNoaXAoZSkge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZUJ0bi12ZXJ0aWNhbCcpO1xuICAgIGxldCBzaGlwID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlJyk7XG4gICAgaXNIb3Jpem9udGFsID0gIWlzSG9yaXpvbnRhbDtcbiAgICByZW1vdmVQbGF5ZXJHcmlkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICBhZGRQbGF5ZXJHcmlkRXZlbnRMaXN0ZW5lcnMoc2hpcExlbmd0aHNbc2VsZWN0ZWRTaGlwSWRdKTtcbn1cblxuZnVuY3Rpb24gYWRkUGxheWVyR3JpZEV2ZW50TGlzdGVuZXJzKHNoaXBMZW5ndGgpIHtcbiAgICBjb25zdCBwbGF5ZXJHcmlkQXJyYXkgPSBBcnJheS5mcm9tKHBsYXllckdyaWQuY2hpbGRyZW4pO1xuICAgIHBsYXllckdyaWRBcnJheS5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IHBsYXllckdyaWRBcnJheS5pbmRleE9mKHNxdWFyZSk7XG4gICAgICAgIGlmKChpc0hvcml6b250YWwgJiYgaW5kZXglMTAgPD0gMTAtc2hpcExlbmd0aClcbiAgICAgICAgfHwgKCFpc0hvcml6b250YWwgJiYgTWF0aC5mbG9vcihpbmRleC8xMCkgPD0gMTAtc2hpcExlbmd0aCkpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlLnNlbGVjdGVkJykuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSBwbGF5ZXJHcmlkQXJyYXkuaW5kZXhPZihzcXVhcmUpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyR3JpZEFycmF5W2luZGV4IC0gaV0uY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQnKVxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNIb3Jpem9udGFsICYmIGluZGV4IC0gKGkqMTApID4gMCkge1xuICAgICAgICAgICAgICAgIHBsYXllckdyaWRBcnJheVtpbmRleCAtIChpKjEwKV0uY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbGlkJykuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVBsYXllclNoaXAsIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBob3ZlclBsYXllclNoaXApO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtb3VzZW91dFBsYXllclNoaXApO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVBsYXllckdyaWRFdmVudExpc3RlbmVycygpIHtcbiAgICBBcnJheS5mcm9tKHBsYXllckdyaWQuY2hpbGRyZW4pLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcCwge29uY2U6IHRydWV9KTtcbiAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhvdmVyUGxheWVyU2hpcCk7XG4gICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vdXNlb3V0UGxheWVyU2hpcCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaG92ZXJQbGF5ZXJTaGlwKGUpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgcGxheWVyR3JpZEFycmF5ID0gQXJyYXkuZnJvbShwbGF5ZXJHcmlkLmNoaWxkcmVuKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHNbc2VsZWN0ZWRTaGlwSWRdOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgIChpc0hvcml6b250YWwpID8gdGFyZ2V0ID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyA6IHRhcmdldCA9IHBsYXllckdyaWRBcnJheVtwbGF5ZXJHcmlkQXJyYXkuaW5kZXhPZih0YXJnZXQpICsgMTBdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbW91c2VvdXRQbGF5ZXJTaGlwKGUpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgcGxheWVyR3JpZEFycmF5ID0gQXJyYXkuZnJvbShwbGF5ZXJHcmlkLmNoaWxkcmVuKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHNbc2VsZWN0ZWRTaGlwSWRdOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgIChpc0hvcml6b250YWwpID8gdGFyZ2V0ID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyA6IHRhcmdldCA9IHBsYXllckdyaWRBcnJheVtwbGF5ZXJHcmlkQXJyYXkuaW5kZXhPZih0YXJnZXQpICsgMTBdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcGxhY2VQbGF5ZXJTaGlwKGUpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgcGxheWVyR3JpZEFycmF5ID0gQXJyYXkuZnJvbShwbGF5ZXJHcmlkLmNoaWxkcmVuKTtcbiAgICBsZXQgaW5kZXggPSBwbGF5ZXJHcmlkQXJyYXkuaW5kZXhPZih0YXJnZXQpO1xuICAgIGxldCB4ID0gaW5kZXglMTA7XG4gICAgbGV0IHkgPSBNYXRoLmZsb29yKGluZGV4LzEwKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHNbc2VsZWN0ZWRTaGlwSWRdOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICAoaXNIb3Jpem9udGFsKSA/IHRhcmdldCA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcgOiB0YXJnZXQgPSBwbGF5ZXJHcmlkQXJyYXlbcGxheWVyR3JpZEFycmF5LmluZGV4T2YodGFyZ2V0KSArIDEwXTtcbiAgICB9XG4gICAgKGlzSG9yaXpvbnRhbCkgPyBcbiAgICAgICAgcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcCh4LCB5LCB4ICsgc2hpcExlbmd0aHNbc2VsZWN0ZWRTaGlwSWRdIC0gMSwgeSkgOiBcbiAgICAgICAgcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcCh4LCB5LCB4LCB5ICsgc2hpcExlbmd0aHNbc2VsZWN0ZWRTaGlwSWRdIC0gMSk7XG4gICAgbGV0IHNlbGVjdGVkU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZCAuc2VsZWN0ZWQnKTsgICAgXG4gICAgc2VsZWN0ZWRTaGlwLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xuICAgIHNlbGVjdGVkU2hpcC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBzZWxlY3RlZFNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICBpZihwbGF5ZXJHYW1lYm9hcmQuc2hpcHMubGVuZ3RoIDwgNSkge1xuICAgICAgICBkaXNwbGF5LnVwZGF0ZU1lc3NhZ2UobWVzc2FnZVNlbGVjdFNoaXApO1xuICAgICAgICBhZGRTaGlweWFyZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHJlbW92ZVBsYXllclNoaXBFdmVudExpc3RlbmVycygpO1xuICAgIH0gZWxzZSBpZihwbGF5ZXJHYW1lYm9hcmQuc2hpcHMubGVuZ3RoID49IDUpIHtcbiAgICAgICAgcmVtb3ZlUGxheWVyU2hpcEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIGRpc3BsYXkudXBkYXRlTWVzc2FnZShtZXNzYWdlUGxheUdhbWUpO1xuICAgICAgICBhZGRDb21wdXRlckdyaWRFdmVudExpc3RlbmVycygpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcHlhcmQgLnNoaXAnKS5mb3JFYWNoKHNoaXAgPT4gc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZWQnKSk7XG4gICAgICAgIGRpc3BsYXkudG9nZ2xlSGlkZVNoaXB5YXJkKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVQbGF5ZXJTaGlwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgQXJyYXkuZnJvbShwbGF5ZXJHcmlkLmNoaWxkcmVuKS5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZCcpO1xuICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVBsYXllclNoaXAsIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBob3ZlclBsYXllclNoaXApO1xuICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtb3VzZW91dFBsYXllclNoaXApO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZENvbXB1dGVyR3JpZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIEFycmF5LmZyb20oY29tcHV0ZXJHcmlkLmNoaWxkcmVuKS5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNxdWFyZSk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXllckF0dGFja0xpc3RlbmVyLCB7b25jZTogdHJ1ZX0pO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHBsYXllckF0dGFja0xpc3RlbmVyKGUpIHtcbiAgICBpZih0dXJuICUgMiA9PT0gMClcbiAgICAgICAgcGxheWVyQXR0YWNrKGUpO1xufVxuXG5mdW5jdGlvbiBwbGF5ZXJBdHRhY2soZSkge1xuICAgIGxldCBpbmRleCA9IEFycmF5LmZyb20oY29tcHV0ZXJHcmlkLmNoaWxkcmVuKS5pbmRleE9mKGUudGFyZ2V0KTtcbiAgICBsZXQgYXR0YWNrID0gcGxheWVyLmF0dGFjayhpbmRleCUxMCwgTWF0aC5mbG9vcihpbmRleC8xMCkpO1xuICAgIGxldCBpc0hpdCA9IGNvbXB1dGVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrKTtcbiAgICBkaXNwbGF5LnBsYXllckF0dGFjayhpbmRleCwgaXNIaXQpO1xuICAgIGlmKGNvbXB1dGVyR2FtZWJvYXJkLmFsbFN1bmsoKSkgXG4gICAgICAgIGVuZEdhbWUocGxheWVyKTtcbiAgICB0dXJuKys7XG4gICAgY29tcHV0ZXJBdHRhY2soKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2soKSB7XG4gICAgbGV0IGF0dGFjayA9IGNvbXB1dGVyLnJhbmRvbUF0dGFjaygpO1xuICAgIHdoaWxlIChwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZWRTaG90cy5sZW5ndGggPCAxMDAgJiYgKHBsYXllckdhbWVib2FyZC5yZWNlaXZlZFNob3RzLnNvbWUoYSA9PiAoYS54ID09PSBhdHRhY2sueCAmJiBhLnkgPT09IGF0dGFjay55KSkpKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF0dGFjayA9IGNvbXB1dGVyLnJhbmRvbUF0dGFjaygpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHt9XG4gICAgfSBcbiAgICBsZXQgaXNIaXQgPSBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2spO1xuICAgIGRpc3BsYXkuY29tcHV0ZXJBdHRhY2soYXR0YWNrLCBpc0hpdCk7XG4gICAgaWYocGxheWVyR2FtZWJvYXJkLmFsbFN1bmsoKSkgXG4gICAgICAgIGVuZEdhbWUoY29tcHV0ZXIpO1xuICAgIHR1cm4rKztcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSh3aW5uZXIpIHtcbiAgICAod2lubmVyID09PSBwbGF5ZXIpID8gZGlzcGxheS51cGRhdGVNZXNzYWdlKG1lc3NhZ2VQbGF5ZXJXaW5zKSA6IGRpc3BsYXkudXBkYXRlTWVzc2FnZShtZXNzYWdlUGxheWVyTG9zZXMpO1xuICAgIGRpc3BsYXkuc2hvd1Jlc3RhcnRCdXR0b24oKTtcbiAgICBBcnJheS5mcm9tKGNvbXB1dGVyR3JpZC5jaGlsZHJlbikuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5ZXJBdHRhY2tMaXN0ZW5lciwge29uY2U6IHRydWV9KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gICAgcGxheWVyR2FtZWJvYXJkLnJlY2VpdmVkU2hvdHMubGVuZ3RoID0gMDtcbiAgICBwbGF5ZXJHYW1lYm9hcmQuc2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXAuc2hpcC5oaXRDb3VudCA9IDApO1xuICAgIHBsYXllckdhbWVib2FyZC5zaGlwcy5sZW5ndGggPSAwO1xuICAgIGNvbXB1dGVyR2FtZWJvYXJkLnJlY2VpdmVkU2hvdHMubGVuZ3RoID0gMDtcbiAgICBjb21wdXRlckdhbWVib2FyZC5zaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcC5zaGlwLmhpdENvdW50ID0gMCk7XG4gICAgdHVybiA9IDA7XG4gICAgZGlzcGxheS5yZXNldEdhbWUoKTtcbiAgICBkaXNwbGF5LnVwZGF0ZU1lc3NhZ2UobWVzc2FnZVNlbGVjdFNoaXApO1xuICAgIGRpc3BsYXkudG9nZ2xlSGlkZVNoaXB5YXJkKCk7XG4gICAgYWRkU2hpcHlhcmRFdmVudExpc3RlbmVycygpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==