(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-7ab22cb8-js"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/status-tap-7ab22cb8.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/status-tap-7ab22cb8.js ***!
    \******************************************************************/

  /*! exports provided: startStatusTap */

  /***/
  function node_modulesIonicCoreDistEsmStatusTap7ab22cb8Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "startStatusTap", function () {
      return startStatusTap;
    });
    /* harmony import */


    var _core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-57385ee8.js */
    "./node_modules/@ionic/core/dist/esm/core-57385ee8.js");
    /* harmony import */


    var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config-3c7f3790.js */
    "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");

    var startStatusTap = function startStatusTap() {
      var win = window;
      win.addEventListener('statusTap', function () {
        Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
          var width = win.innerWidth;
          var height = win.innerHeight;
          var el = document.elementFromPoint(width / 2, height / 2);

          if (!el) {
            return;
          }

          var contentEl = el.closest('ion-content');

          if (contentEl) {
            contentEl.componentOnReady().then(function () {
              Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
                return contentEl.scrollToTop(300);
              });
            });
          }
        });
      });
    };
    /***/

  }
}]); //# sourceMappingURL=status-tap-7ab22cb8-js-es2015.js.map
//# sourceMappingURL=status-tap-7ab22cb8-js-es5.js.map