function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-text.entry.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-text.entry.js ***!
    \*************************************************************/

  /*! exports provided: ion_text */

  /***/
  function node_modulesIonicCoreDistEsmIonTextEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_text", function () {
      return Text;
    });
    /* harmony import */


    var _core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-57385ee8.js */
    "./node_modules/@ionic/core/dist/esm/core-57385ee8.js");
    /* harmony import */


    var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config-3c7f3790.js */
    "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
    /* harmony import */


    var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./theme-18cbe2cc.js */
    "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");

    var Text =
    /*#__PURE__*/
    function () {
      function Text(hostRef) {
        _classCallCheck(this, Text);

        Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(Text, [{
        key: "render",
        value: function render() {
          var mode = Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          return Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), _defineProperty({}, mode, true))
          }, Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host(.ion-color){color:var(--ion-color-base)}";
        }
      }]);

      return Text;
    }();
    /***/

  }
}]); //# sourceMappingURL=70-es2015.js.map
//# sourceMappingURL=70-es5.js.map