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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n}\n\n.grid-container {\n    display: flex;\n    gap: 100px;\n    margin-bottom: 50px;\n}\n\n.message {\n    font-size: 26px;\n}\n\n.player-grid,\n.computer-grid {\n    max-width: 400px;\n    max-height: 400px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.square {\n    width: 40px; \n    height: 40px; \n    border: solid 1px black; \n    box-sizing: border-box;\n}\n\n.shipyard,\n.shipyard-labels {\n    display: flex;\n    gap: 20px;\n}\n\n.shipyard-labels > p {\n    min-width: 210px;\n    text-align: center;\n}\n\n.shipyard > div {\n    min-width: 210px;\n    min-height: 220px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.shipyard-label {\n    height: 20px;\n    margin: 0;\n}\n\n.ship {\n    border: 2px solid grey;\n    background-color: darkgrey;\n}\n\n.hit {\n    background-color: red;\n}\n\n.miss {\n    background-color: blue;\n}\n\n.restart {\n    font-size: 20px;\n    padding: 10px 25px;\n    border-radius: 25px;\n}\n\n.hide {\n    display: none;\n}\n\n#carrier,\n#battleship,\n#cruiser,\n#submarine,\n#destroyer {\n    height: 40px;\n    width: 200px;\n    box-sizing: border-box;\n}\n\n#battleship {\n    width: 160px;\n}\n\n#cruiser,\n#submarine {\n    width: 120px;\n}\n\n#destroyer {\n    width: 80px;\n}\n\n.selected {\n    border: 2px solid darkgreen;\n    background-color: green;\n}\n\n.placed {\n    opacity: 50%;\n}\n\n.hover {\n    border: 2px solid darkgreen;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yCAAyC;IACzC,SAAS;AACb;;AAEA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;;;;;IAKI,YAAY;IACZ,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,2BAA2B;AAC/B","sourcesContent":["body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n}\n\n.grid-container {\n    display: flex;\n    gap: 100px;\n    margin-bottom: 50px;\n}\n\n.message {\n    font-size: 26px;\n}\n\n.player-grid,\n.computer-grid {\n    max-width: 400px;\n    max-height: 400px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.square {\n    width: 40px; \n    height: 40px; \n    border: solid 1px black; \n    box-sizing: border-box;\n}\n\n.shipyard,\n.shipyard-labels {\n    display: flex;\n    gap: 20px;\n}\n\n.shipyard-labels > p {\n    min-width: 210px;\n    text-align: center;\n}\n\n.shipyard > div {\n    min-width: 210px;\n    min-height: 220px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.shipyard-label {\n    height: 20px;\n    margin: 0;\n}\n\n.ship {\n    border: 2px solid grey;\n    background-color: darkgrey;\n}\n\n.hit {\n    background-color: red;\n}\n\n.miss {\n    background-color: blue;\n}\n\n.restart {\n    font-size: 20px;\n    padding: 10px 25px;\n    border-radius: 25px;\n}\n\n.hide {\n    display: none;\n}\n\n#carrier,\n#battleship,\n#cruiser,\n#submarine,\n#destroyer {\n    height: 40px;\n    width: 200px;\n    box-sizing: border-box;\n}\n\n#battleship {\n    width: 160px;\n}\n\n#cruiser,\n#submarine {\n    width: 120px;\n}\n\n#destroyer {\n    width: 80px;\n}\n\n.selected {\n    border: 2px solid darkgreen;\n    background-color: green;\n}\n\n.placed {\n    opacity: 50%;\n}\n\n.hover {\n    border: 2px solid darkgreen;\n}"],"sourceRoot":""}]);
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
                    console.log(ship);
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

    function init() {
        // init grids
        for (let i = 0; i < 200; i++) {
            let square = document.createElement('div');
            square.classList.add("square");
            (i < 100) ? square.textContent = i : square.textContent = (i - 100); // temp
            (i < 100) ? playerGrid.appendChild(square) : computerGrid.appendChild(square);
        }

        // mark computer ship locations
        computerGameboard.ships.forEach(ship => {
            for(let i = 0; i < ship.coordinates.length; i++) {
                let shipIndex = (ship.coordinates[i].y * 10) + ship.coordinates[i].x;
                computerGrid.children[shipIndex].classList.add('ship');
            }
        })
    };

    function markPlayerShips() {
        playerGameboard.ships.forEach(ship => {
            let shipIndex = (ship.coordinates[0].y * 10) + ship.coordinates[0].x;
            playerGrid.children[shipIndex].classList.add('ship');
        })
    }

    function updateMessage(displayMessage) {
        message.textContent = displayMessage;
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
        markPlayerShips,
        updateMessage,
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
let selectedShip;

const player = _Player__WEBPACK_IMPORTED_MODULE_3___default()();
const playerGameboard = _Gameboard__WEBPACK_IMPORTED_MODULE_2___default()();

const computer = _Player__WEBPACK_IMPORTED_MODULE_3___default()();
const computerGameboard = _Gameboard__WEBPACK_IMPORTED_MODULE_2___default()();
computerGameboard.placeShip(8,1,8,3);
computerGameboard.placeShip(3,3,6,3);
computerGameboard.placeShip(3,6,5,6);
computerGameboard.placeShip(1,4,1,8);
computerGameboard.placeShip(7,8,8,8);

const display = (0,_displayController__WEBPACK_IMPORTED_MODULE_1__["default"])(playerGameboard, computerGameboard);
display.init();
display.updateMessage(messageSelectShip);
addShipyardEventListeners();
let turn = 0;

const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', resetGame);

function addShipyardEventListeners() {
    document.querySelectorAll('.shipyard .ship').forEach(ship => ship.addEventListener('click', selectShip, {once: true}));
}

function removeShipyardEventListeners() {
    document.querySelectorAll('.shipyard .ship').forEach(ship => ship.removeEventListener('click', selectShip));
}

function selectShip(e) {
    // highlight selected ship
    e.target.classList.add('selected');
    selectedShip = e.target.id;
    // let player rotate ship if desired
    /* 
        DO THIS NEXT 
        REDESIGN SHIPYARD IN INDEX.HTML TO ALLOW ROTATING SHIPS
    */
    // let player select space on grid to place ship
    display.updateMessage(messagePlaceShip + e.target.id);
    addPlayerGridEventListeners();
    // don't let player select another ship without placing selected ship first
    removeShipyardEventListeners();
}

function addPlayerGridEventListeners() {
    Array.from(playerGrid.children).forEach(square => {
        square.addEventListener('click', placePlayerShip, {once: true});
    })
    Array.from(playerGrid.children).forEach(square => {
        square.addEventListener('mouseover', hoverPlayerShip);
    })
    Array.from(playerGrid.children).forEach(square => {
        square.addEventListener('mouseout', mouseoutPlayerShip);
    })
}

function hoverPlayerShip(e) {
    let target = e.target;
    for(let i = 0; i < shipLengths[selectedShip]; i++) {
        target.classList.add('hover');
        target = target.nextElementSibling;
    }
}

function mouseoutPlayerShip(e) {
    let target = e.target;
    for(let i = 0; i < shipLengths[selectedShip]; i++) {
        target.classList.remove('hover');
        target = target.nextElementSibling;
    }
}

function placePlayerShip(e) {
    let target = e.target;
    let index = Array.from(playerGrid.children).indexOf(target);
    let x = index%10;
    let y = Math.floor(index/10);
    for(let i = 0; i < shipLengths[selectedShip]; i++) {
        target.classList.add('selected');
        target = target.nextElementSibling;
    }
    playerGameboard.placeShip(x, y, x, y);
    document.querySelector('.shipyard .selected').classList.add('placed');
    document.querySelector('.shipyard .selected').classList.remove('selected');
    // display.markPlayerShips();
    if(playerGameboard.ships.length < 5) {
        // if player has more ships to place, let player select another ship
        display.updateMessage(messageSelectShip);
        addShipyardEventListeners();
        removePlayerShipEventListeners();
    } else if(playerGameboard.ships.length >= 5) {
        // if all ships are placed, start game
        removePlayerShipEventListeners();
        display.updateMessage(messagePlayGame);
        addComputerGridEventListeners();
    }
}

function removePlayerShipEventListeners() {
    Array.from(playerGrid.children).forEach(square => {
        square.removeEventListener('click', placePlayerShip, {once: true});
    })
    Array.from(playerGrid.children).forEach(square => {
        square.removeEventListener('mouseover', hoverPlayerShip);
    })
    Array.from(playerGrid.children).forEach(square => {
        square.removeEventListener('mouseout', mouseoutPlayerShip);
    })
}

function addComputerGridEventListeners() {
    Array.from(computerGrid.children).forEach(square => {
        square.addEventListener('click', playerAttackListener, {once: true});
    })
}

function playerAttackListener(e) {
    // only attack on player's turn
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
    addShipyardEventListeners();
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVztBQUN4SDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyREFBMkQsV0FBVztBQUN0RSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsK0JBQStCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsK0JBQStCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0JBQStCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhEQUE4RCxXQUFXO0FBQ3pFLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGdFQUFnRSxXQUFXO0FBQzNFLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsV0FBVztBQUM5RSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuLnBsYXllci1ncmlkLFxcbi5jb21wdXRlci1ncmlkIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIHdpZHRoOiA0MHB4OyBcXG4gICAgaGVpZ2h0OiA0MHB4OyBcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7IFxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2hpcHlhcmQsXFxuLnNoaXB5YXJkLWxhYmVscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNoaXB5YXJkLWxhYmVscyA+IHAge1xcbiAgICBtaW4td2lkdGg6IDIxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaGlweWFyZCA+IGRpdiB7XFxuICAgIG1pbi13aWR0aDogMjEwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDIyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXB5YXJkLWxhYmVsIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnJlc3RhcnQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY2FycmllcixcXG4jYmF0dGxlc2hpcCxcXG4jY3J1aXNlcixcXG4jc3VibWFyaW5lLFxcbiNkZXN0cm95ZXIge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2JhdHRsZXNoaXAge1xcbiAgICB3aWR0aDogMTYwcHg7XFxufVxcblxcbiNjcnVpc2VyLFxcbiNzdWJtYXJpbmUge1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcblxcbiNkZXN0cm95ZXIge1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnBsYWNlZCB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZWVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7Ozs7SUFLSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuLnBsYXllci1ncmlkLFxcbi5jb21wdXRlci1ncmlkIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIHdpZHRoOiA0MHB4OyBcXG4gICAgaGVpZ2h0OiA0MHB4OyBcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7IFxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2hpcHlhcmQsXFxuLnNoaXB5YXJkLWxhYmVscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNoaXB5YXJkLWxhYmVscyA+IHAge1xcbiAgICBtaW4td2lkdGg6IDIxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaGlweWFyZCA+IGRpdiB7XFxuICAgIG1pbi13aWR0aDogMjEwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDIyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXB5YXJkLWxhYmVsIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnJlc3RhcnQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY2FycmllcixcXG4jYmF0dGxlc2hpcCxcXG4jY3J1aXNlcixcXG4jc3VibWFyaW5lLFxcbiNkZXN0cm95ZXIge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2JhdHRsZXNoaXAge1xcbiAgICB3aWR0aDogMTYwcHg7XFxufVxcblxcbiNjcnVpc2VyLFxcbiNzdWJtYXJpbmUge1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcblxcbiNkZXN0cm95ZXIge1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnBsYWNlZCB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgU2hpcCA9IHJlcXVpcmUoJy4vU2hpcCcpO1xuXG5jb25zdCBHYW1lYm9hcmRGYWN0b3J5ID0gKCkgPT4geyBcblxuICAgIGxldCBzaGlwcyA9IFtdO1xuICAgIGxldCByZWNlaXZlZFNob3RzID0gW107XG4gICAgXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xuICAgICAgICBsZXQgbmV3U2hpcDtcbiAgICAgICAgaWYoc3RhcnRYID09PSBlbmRYICYmIHN0YXJ0WSA9PT0gZW5kWSkge1xuICAgICAgICAgICAgLy8gc2hpcCB0YWtlcyB1cCAxIHNwYWNlXG4gICAgICAgICAgICBsZXQgc2hpcExlbmd0aCA9IDE7XG4gICAgICAgICAgICBuZXdTaGlwID0gU2hpcChzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goe3g6IHN0YXJ0WCwgeTogc3RhcnRZfSk7XG4gICAgICAgIH0gZWxzZSBpZihzdGFydFggIT09IGVuZFggJiYgc3RhcnRZID09PSBlbmRZKSB7XG4gICAgICAgICAgICAvLyBob3Jpem9udGFsIHNoaXAgcGxhY2VtZW50XG4gICAgICAgICAgICBsZXQgc2hpcExlbmd0aCA9IGVuZFggLSBzdGFydFggKyAxO1xuICAgICAgICAgICAgbmV3U2hpcCA9IFNoaXAoc2hpcExlbmd0aCk7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IHN0YXJ0WCArIGksXG4gICAgICAgICAgICAgICAgICAgIHk6IHN0YXJ0WVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZihzdGFydFggPT09IGVuZFggJiYgc3RhcnRZICE9PSBlbmRZKSB7XG4gICAgICAgICAgICAvLyB2ZXJ0aWNhbCBzaGlwIHBsYWNlbWVudFxuICAgICAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBlbmRZIC0gc3RhcnRZICsgMTtcbiAgICAgICAgICAgIG5ld1NoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB4OiBzdGFydFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IHN0YXJ0WSArIGlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYoc3RhcnRYICE9PSBlbmRYICYmIHN0YXJ0WSAhPT0gZW5kWSkge1xuICAgICAgICAgICAgLy8gaW52YWxpZCAoZGlhZ29uYWwpIHNoaXAgcGxhY2VtZW50XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2hpcHMucHVzaCh7XG4gICAgICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXMsXG4gICAgICAgICAgICBzaGlwOiBuZXdTaGlwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2hpcHNbc2hpcHMubGVuZ3RoLTFdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soe3gsIHl9KSB7XG4gICAgICAgIHJlY2VpdmVkU2hvdHMucHVzaCh7eCwgeX0pO1xuICAgICAgICBsZXQgaXNIaXQgPSBmYWxzZTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoc2hpcC5jb29yZGluYXRlc1tpXS54ID09PSB4ICYmIHNoaXAuY29vcmRpbmF0ZXNbaV0ueSA9PT0geSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2hpcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaXNIaXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWxsU3VuaygpIHtcbiAgICAgICAgbGV0IGFsbFN1bmsgPSB0cnVlO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghc2hpcHNbaV0uc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGFsbFN1bmsgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWxsU3VuaztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaGlwcyxcbiAgICAgICAgcmVjZWl2ZWRTaG90cyxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBhbGxTdW5rXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZEZhY3Rvcnk7IiwiY29uc3QgUGxheWVyRmFjdG9yeSA9ICgpID0+IHtcbiAgICBcbiAgICBmdW5jdGlvbiBhdHRhY2soeCwgeSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJhbmRvbUF0dGFjaygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXR0YWNrLFxuICAgICAgICByYW5kb21BdHRhY2tcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyRmFjdG9yeTsiLCJjb25zdCBTaGlwRmFjdG9yeSA9IChsZW5ndGgpID0+IHtcbiAgICBsZXQgaGl0Q291bnQgPSAwO1xuXG4gICAgZnVuY3Rpb24gaGl0KCkge1xuICAgICAgICB0aGlzLmhpdENvdW50Kys7XG4gICAgICAgIHJldHVybiB0aGlzLmhpdENvdW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmhpdENvdW50ID49IHRoaXMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGhpdENvdW50LFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3Vua1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwRmFjdG9yeTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5Q29udHJvbGxlcihwbGF5ZXJHYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkKSB7XG4gICAgY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItZ3JpZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1ncmlkJyk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XG4gICAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0Jyk7XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICAvLyBpbml0IGdyaWRzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjAwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgICAgICAgKGkgPCAxMDApID8gc3F1YXJlLnRleHRDb250ZW50ID0gaSA6IHNxdWFyZS50ZXh0Q29udGVudCA9IChpIC0gMTAwKTsgLy8gdGVtcFxuICAgICAgICAgICAgKGkgPCAxMDApID8gcGxheWVyR3JpZC5hcHBlbmRDaGlsZChzcXVhcmUpIDogY29tcHV0ZXJHcmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYXJrIGNvbXB1dGVyIHNoaXAgbG9jYXRpb25zXG4gICAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBzaGlwSW5kZXggPSAoc2hpcC5jb29yZGluYXRlc1tpXS55ICogMTApICsgc2hpcC5jb29yZGluYXRlc1tpXS54O1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyR3JpZC5jaGlsZHJlbltzaGlwSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbWFya1BsYXllclNoaXBzKCkge1xuICAgICAgICBwbGF5ZXJHYW1lYm9hcmQuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGxldCBzaGlwSW5kZXggPSAoc2hpcC5jb29yZGluYXRlc1swXS55ICogMTApICsgc2hpcC5jb29yZGluYXRlc1swXS54O1xuICAgICAgICAgICAgcGxheWVyR3JpZC5jaGlsZHJlbltzaGlwSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlKGRpc3BsYXlNZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBkaXNwbGF5TWVzc2FnZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5ZXJBdHRhY2sodGFyZ2V0LCBpc0hpdCkge1xuICAgICAgICAoaXNIaXQpID8gY29tcHV0ZXJHcmlkLmNoaWxkcmVuW3RhcmdldF0uY2xhc3NMaXN0LmFkZCgnaGl0JykgOiBjb21wdXRlckdyaWQuY2hpbGRyZW5bdGFyZ2V0XS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2sodGFyZ2V0LCBpc0hpdCkge1xuICAgICAgICBsZXQgaW5kZXggPSB0YXJnZXQueSAqIDEwICsgdGFyZ2V0Lng7XG4gICAgICAgIChpc0hpdCkgPyBwbGF5ZXJHcmlkLmNoaWxkcmVuW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdoaXQnKSA6IHBsYXllckdyaWQuY2hpbGRyZW5baW5kZXhdLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dSZXN0YXJ0QnV0dG9uKCkge1xuICAgICAgICByZXN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gICAgICAgIHJlc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBBcnJheS5mcm9tKHBsYXllckdyaWQuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4gcGxheWVyR3JpZC5yZW1vdmVDaGlsZChjaGlsZCkpO1xuICAgICAgICBBcnJheS5mcm9tKGNvbXB1dGVyR3JpZC5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiBjb21wdXRlckdyaWQucmVtb3ZlQ2hpbGQoY2hpbGQpKTtcbiAgICAgICAgaW5pdCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQsXG4gICAgICAgIG1hcmtQbGF5ZXJTaGlwcyxcbiAgICAgICAgdXBkYXRlTWVzc2FnZSxcbiAgICAgICAgcGxheWVyQXR0YWNrLFxuICAgICAgICBjb21wdXRlckF0dGFjayxcbiAgICAgICAgc2hvd1Jlc3RhcnRCdXR0b24sXG4gICAgICAgIHJlc2V0R2FtZVxuICAgIH1cbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSAnLi9kaXNwbGF5Q29udHJvbGxlcic7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuXG5jb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ncmlkJyk7XG5jb25zdCBjb21wdXRlckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItZ3JpZCcpO1xuXG5jb25zdCBtZXNzYWdlU2VsZWN0U2hpcCA9ICdTZWxlY3QgYSBzaGlwIHRvIHBsYWNlJztcbmNvbnN0IG1lc3NhZ2VQbGFjZVNoaXAgPSAnU2VsZWN0IGEgc3RhcnRpbmcgc3BhY2UgdG8gcGxhY2UgeW91ciAnO1xuY29uc3QgbWVzc2FnZVBsYXlHYW1lID0gJ0NsaWNrIG9uIHRoZSBjb21wdXRlciBncmlkIHRvIGF0dGFjayc7XG5jb25zdCBtZXNzYWdlUGxheWVyV2lucyA9ICdZb3Ugd2luISc7XG5jb25zdCBtZXNzYWdlUGxheWVyTG9zZXMgPSAnWW91IGxvc2UhJztcblxuY29uc3Qgc2hpcExlbmd0aHMgPSB7XG4gICAgY2FycmllcjogNSxcbiAgICBiYXR0bGVzaGlwOiA0LFxuICAgIGNydWlzZXI6IDMsXG4gICAgc3VibWFyaW5lOiAzLFxuICAgIGRlc3Ryb3llcjogMlxufVxubGV0IHNlbGVjdGVkU2hpcDtcblxuY29uc3QgcGxheWVyID0gUGxheWVyKCk7XG5jb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoKTtcbmNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5jb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoOCwxLDgsMyk7XG5jb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoMywzLDYsMyk7XG5jb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoMyw2LDUsNik7XG5jb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoMSw0LDEsOCk7XG5jb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoNyw4LDgsOCk7XG5cbmNvbnN0IGRpc3BsYXkgPSBkaXNwbGF5Q29udHJvbGxlcihwbGF5ZXJHYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkKTtcbmRpc3BsYXkuaW5pdCgpO1xuZGlzcGxheS51cGRhdGVNZXNzYWdlKG1lc3NhZ2VTZWxlY3RTaGlwKTtcbmFkZFNoaXB5YXJkRXZlbnRMaXN0ZW5lcnMoKTtcbmxldCB0dXJuID0gMDtcblxuY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0Jyk7XG5yZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRHYW1lKTtcblxuZnVuY3Rpb24gYWRkU2hpcHlhcmRFdmVudExpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcHlhcmQgLnNoaXAnKS5mb3JFYWNoKHNoaXAgPT4gc2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFNoaXAsIHtvbmNlOiB0cnVlfSkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTaGlweWFyZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlweWFyZCAuc2hpcCcpLmZvckVhY2goc2hpcCA9PiBzaGlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0U2hpcCkpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RTaGlwKGUpIHtcbiAgICAvLyBoaWdobGlnaHQgc2VsZWN0ZWQgc2hpcFxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgc2VsZWN0ZWRTaGlwID0gZS50YXJnZXQuaWQ7XG4gICAgLy8gbGV0IHBsYXllciByb3RhdGUgc2hpcCBpZiBkZXNpcmVkXG4gICAgLyogXG4gICAgICAgIERPIFRISVMgTkVYVCBcbiAgICAgICAgUkVERVNJR04gU0hJUFlBUkQgSU4gSU5ERVguSFRNTCBUTyBBTExPVyBST1RBVElORyBTSElQU1xuICAgICovXG4gICAgLy8gbGV0IHBsYXllciBzZWxlY3Qgc3BhY2Ugb24gZ3JpZCB0byBwbGFjZSBzaGlwXG4gICAgZGlzcGxheS51cGRhdGVNZXNzYWdlKG1lc3NhZ2VQbGFjZVNoaXAgKyBlLnRhcmdldC5pZCk7XG4gICAgYWRkUGxheWVyR3JpZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgLy8gZG9uJ3QgbGV0IHBsYXllciBzZWxlY3QgYW5vdGhlciBzaGlwIHdpdGhvdXQgcGxhY2luZyBzZWxlY3RlZCBzaGlwIGZpcnN0XG4gICAgcmVtb3ZlU2hpcHlhcmRFdmVudExpc3RlbmVycygpO1xufVxuXG5mdW5jdGlvbiBhZGRQbGF5ZXJHcmlkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgQXJyYXkuZnJvbShwbGF5ZXJHcmlkLmNoaWxkcmVuKS5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcCwge29uY2U6IHRydWV9KTtcbiAgICB9KVxuICAgIEFycmF5LmZyb20ocGxheWVyR3JpZC5jaGlsZHJlbikuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaG92ZXJQbGF5ZXJTaGlwKTtcbiAgICB9KVxuICAgIEFycmF5LmZyb20ocGxheWVyR3JpZC5jaGlsZHJlbikuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtb3VzZW91dFBsYXllclNoaXApO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGhvdmVyUGxheWVyU2hpcChlKSB7XG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Roc1tzZWxlY3RlZFNoaXBdOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtb3VzZW91dFBsYXllclNoaXAoZSkge1xuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHNbc2VsZWN0ZWRTaGlwXTsgaSsrKSB7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcGxhY2VQbGF5ZXJTaGlwKGUpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgbGV0IGluZGV4ID0gQXJyYXkuZnJvbShwbGF5ZXJHcmlkLmNoaWxkcmVuKS5pbmRleE9mKHRhcmdldCk7XG4gICAgbGV0IHggPSBpbmRleCUxMDtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoaW5kZXgvMTApO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Roc1tzZWxlY3RlZFNoaXBdOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgfVxuICAgIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoeCwgeSwgeCwgeSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXB5YXJkIC5zZWxlY3RlZCcpLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZCAuc2VsZWN0ZWQnKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIC8vIGRpc3BsYXkubWFya1BsYXllclNoaXBzKCk7XG4gICAgaWYocGxheWVyR2FtZWJvYXJkLnNoaXBzLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgLy8gaWYgcGxheWVyIGhhcyBtb3JlIHNoaXBzIHRvIHBsYWNlLCBsZXQgcGxheWVyIHNlbGVjdCBhbm90aGVyIHNoaXBcbiAgICAgICAgZGlzcGxheS51cGRhdGVNZXNzYWdlKG1lc3NhZ2VTZWxlY3RTaGlwKTtcbiAgICAgICAgYWRkU2hpcHlhcmRFdmVudExpc3RlbmVycygpO1xuICAgICAgICByZW1vdmVQbGF5ZXJTaGlwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9IGVsc2UgaWYocGxheWVyR2FtZWJvYXJkLnNoaXBzLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgIC8vIGlmIGFsbCBzaGlwcyBhcmUgcGxhY2VkLCBzdGFydCBnYW1lXG4gICAgICAgIHJlbW92ZVBsYXllclNoaXBFdmVudExpc3RlbmVycygpO1xuICAgICAgICBkaXNwbGF5LnVwZGF0ZU1lc3NhZ2UobWVzc2FnZVBsYXlHYW1lKTtcbiAgICAgICAgYWRkQ29tcHV0ZXJHcmlkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVBsYXllclNoaXBFdmVudExpc3RlbmVycygpIHtcbiAgICBBcnJheS5mcm9tKHBsYXllckdyaWQuY2hpbGRyZW4pLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VQbGF5ZXJTaGlwLCB7b25jZTogdHJ1ZX0pO1xuICAgIH0pXG4gICAgQXJyYXkuZnJvbShwbGF5ZXJHcmlkLmNoaWxkcmVuKS5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBob3ZlclBsYXllclNoaXApO1xuICAgIH0pXG4gICAgQXJyYXkuZnJvbShwbGF5ZXJHcmlkLmNoaWxkcmVuKS5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vdXNlb3V0UGxheWVyU2hpcCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkQ29tcHV0ZXJHcmlkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgQXJyYXkuZnJvbShjb21wdXRlckdyaWQuY2hpbGRyZW4pLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVyQXR0YWNrTGlzdGVuZXIsIHtvbmNlOiB0cnVlfSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcGxheWVyQXR0YWNrTGlzdGVuZXIoZSkge1xuICAgIC8vIG9ubHkgYXR0YWNrIG9uIHBsYXllcidzIHR1cm5cbiAgICBpZih0dXJuICUgMiA9PT0gMClcbiAgICAgICAgcGxheWVyQXR0YWNrKGUpO1xufVxuXG5mdW5jdGlvbiBwbGF5ZXJBdHRhY2soZSkge1xuICAgIGxldCBpbmRleCA9IEFycmF5LmZyb20oY29tcHV0ZXJHcmlkLmNoaWxkcmVuKS5pbmRleE9mKGUudGFyZ2V0KTtcbiAgICBsZXQgYXR0YWNrID0gcGxheWVyLmF0dGFjayhpbmRleCUxMCwgTWF0aC5mbG9vcihpbmRleC8xMCkpO1xuICAgIGxldCBpc0hpdCA9IGNvbXB1dGVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrKTtcbiAgICBkaXNwbGF5LnBsYXllckF0dGFjayhpbmRleCwgaXNIaXQpO1xuICAgIGlmKGNvbXB1dGVyR2FtZWJvYXJkLmFsbFN1bmsoKSkgXG4gICAgICAgIGVuZEdhbWUocGxheWVyKTtcbiAgICB0dXJuKys7XG4gICAgY29tcHV0ZXJBdHRhY2soKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2soKSB7XG4gICAgbGV0IGF0dGFjayA9IGNvbXB1dGVyLnJhbmRvbUF0dGFjaygpO1xuICAgIHdoaWxlIChwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZWRTaG90cy5sZW5ndGggPCAxMDAgJiYgKHBsYXllckdhbWVib2FyZC5yZWNlaXZlZFNob3RzLnNvbWUoYSA9PiAoYS54ID09PSBhdHRhY2sueCAmJiBhLnkgPT09IGF0dGFjay55KSkpKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF0dGFjayA9IGNvbXB1dGVyLnJhbmRvbUF0dGFjaygpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHt9XG4gICAgfSBcbiAgICBsZXQgaXNIaXQgPSBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2spO1xuICAgIGRpc3BsYXkuY29tcHV0ZXJBdHRhY2soYXR0YWNrLCBpc0hpdCk7XG4gICAgaWYocGxheWVyR2FtZWJvYXJkLmFsbFN1bmsoKSkgXG4gICAgICAgIGVuZEdhbWUoY29tcHV0ZXIpO1xuICAgIHR1cm4rKztcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSh3aW5uZXIpIHtcbiAgICAod2lubmVyID09PSBwbGF5ZXIpID8gZGlzcGxheS51cGRhdGVNZXNzYWdlKG1lc3NhZ2VQbGF5ZXJXaW5zKSA6IGRpc3BsYXkudXBkYXRlTWVzc2FnZShtZXNzYWdlUGxheWVyTG9zZXMpO1xuICAgIGRpc3BsYXkuc2hvd1Jlc3RhcnRCdXR0b24oKTtcbiAgICBBcnJheS5mcm9tKGNvbXB1dGVyR3JpZC5jaGlsZHJlbikuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5ZXJBdHRhY2tMaXN0ZW5lciwge29uY2U6IHRydWV9KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gICAgcGxheWVyR2FtZWJvYXJkLnJlY2VpdmVkU2hvdHMubGVuZ3RoID0gMDtcbiAgICBwbGF5ZXJHYW1lYm9hcmQuc2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXAuc2hpcC5oaXRDb3VudCA9IDApO1xuICAgIHBsYXllckdhbWVib2FyZC5zaGlwcy5sZW5ndGggPSAwO1xuICAgIGNvbXB1dGVyR2FtZWJvYXJkLnJlY2VpdmVkU2hvdHMubGVuZ3RoID0gMDtcbiAgICBjb21wdXRlckdhbWVib2FyZC5zaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcC5zaGlwLmhpdENvdW50ID0gMCk7XG4gICAgdHVybiA9IDA7XG4gICAgZGlzcGxheS5yZXNldEdhbWUoKTtcbiAgICBkaXNwbGF5LnVwZGF0ZU1lc3NhZ2UobWVzc2FnZVNlbGVjdFNoaXApO1xuICAgIGFkZFNoaXB5YXJkRXZlbnRMaXN0ZW5lcnMoKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=