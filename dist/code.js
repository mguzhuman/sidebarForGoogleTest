function onOpen() {}

function getObjectData() {}

function getObject() {}

function showSidebar() {}

!function(e, a) {
    for (var i in a) e[i] = a[i];
}(this, /******/ function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) 
        /******/ return installedModules[moduleId].exports;
        /******/
        /******/ // Create a new module (and put it into the cache)
        /******/        var module = installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: !1,
            /******/ exports: {}
            /******/        };
        /******/
        /******/ // Execute the module function
        /******/        
        /******/
        /******/ // Return the exports of the module
        /******/ return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        /******/
        /******/ // Flag the module as loaded
        /******/ module.l = !0, module.exports;
        /******/    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/    
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__.m = modules, 
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules, 
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function(exports, name, getter) {
        /******/ __webpack_require__.o(exports, name) || 
        /******/ Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        })
        /******/;
    }, 
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function(exports) {
        /******/ "undefined" != typeof Symbol && Symbol.toStringTag && 
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        })
        /******/ , Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, 
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function(value, mode) {
        /******/ if (
        /******/ 1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        /******/        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        /******/        var ns = Object.create(null);
        /******/        
        /******/ if (__webpack_require__.r(ns), 
        /******/ Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        /******/        return ns;
        /******/    }, 
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function(module) {
        /******/ var getter = module && module.__esModule ? 
        /******/ function getDefault() {
            return module["default"];
        } : 
        /******/ function getModuleExports() {
            return module;
        };
        /******/        
        /******/ return __webpack_require__.d(getter, "a", getter), getter;
        /******/    }, 
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, 
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 1);
    /******/}
/************************************************************************/
/******/ ([ 
/* 0 */
/***/ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__), 
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onOpen", (function() {
        return onOpen;
    })), 
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSidebar", (function() {
        return showSidebar;
    })), 
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectData", (function() {
        return getObjectData;
    })), 
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObject", (function() {
        return getObject;
    }));
    var onOpen = function(event) {
        SlidesApp.getUi().createAddonMenu().addItem("show Sidebar", "showSidebar").addToUi();
    }, getObject = function() {
        return SlidesApp.getActivePresentation().getSelection();
    }, getObjectData = function() {
        var elements = getObject().getPageElementRange();
        if (!elements) return {
            type: "",
            text: ""
        };
        var pageElement = elements.getPageElements()[0], selectionType = pageElement.getPageElementType();
        switch (selectionType) {
          case SlidesApp.PageElementType.IMAGE:
            return {
                type: "Image",
                text: ""
            };

          case SlidesApp.PageElementType.SHAPE:
            return {
                type: "Shape",
                text: pageElement.asShape().getText().asString()
            };

          case SlidesApp.PageElementType.UNSUPPORTED:
            return {
                type: "Unsupported",
                text: '"'
            };

          case SlidesApp.PageElementType.VIDEO:
            return {
                type: "Video",
                text: ""
            };

          case SlidesApp.PageElementType.TABLE:
            return {
                type: "Table",
                text: ""
            };

          case SlidesApp.PageElementType.GROUP:
            return {
                type: "Group",
                text: ""
            };

          case SlidesApp.PageElementType.LINE:
            return {
                type: "Line",
                text: ""
            };

          case SlidesApp.PageElementType.WORD_ART:
            return {
                type: "Word art",
                text: pageElement.asWordArt().getRenderedText()
            };

          case SlidesApp.PageElementType.SHEETS_CHART:
            return {
                type: "Sheets chart",
                text: ""
            };

          default:
            return {
                type: selectionType,
                text: ""
            };
        }
    }, showSidebar = function() {
        var html = HtmlService.createHtmlOutputFromFile("sidebar").setTitle("Get info element");
        SlidesApp.getUi().showSidebar(html);
    };
}, 
/* 1 */
/***/ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__), 
    /* WEBPACK VAR INJECTION */ function(global) {
        /* harmony import */ var _slides_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
        global.onOpen = _slides_utilities__WEBPACK_IMPORTED_MODULE_0__.onOpen, global.getObjectData = _slides_utilities__WEBPACK_IMPORTED_MODULE_0__.getObjectData, 
        global.getObject = _slides_utilities__WEBPACK_IMPORTED_MODULE_0__.getObject, global.showSidebar = _slides_utilities__WEBPACK_IMPORTED_MODULE_0__.showSidebar;
    }.call(this, __webpack_require__(2))
    /***/;
}, 
/* 2 */
/***/ function(module, exports, __webpack_require__) {
    var g;
    // This works in non-strict mode
        g = function() {
        return this;
    }();
    try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
    } catch (e) {
        // This works if the window reference is available
        "object" == typeof window && (g = window);
    }
    // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}
        module.exports = g;
}
/******/ ]));