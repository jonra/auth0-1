(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ios-transition-becf5388-js"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ios.transition-becf5388.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ios.transition-becf5388.js ***!
    \**********************************************************************/

  /*! exports provided: iosTransitionAnimation, shadow */

  /***/
  function node_modulesIonicCoreDistEsmIosTransitionBecf5388Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function () {
      return iosTransitionAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "shadow", function () {
      return shadow;
    });
    /* harmony import */


    var _helpers_e0fdb9d0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./helpers-e0fdb9d0.js */
    "./node_modules/@ionic/core/dist/esm/helpers-e0fdb9d0.js");
    /* harmony import */


    var _animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./animation-86ecfd53.js */
    "./node_modules/@ionic/core/dist/esm/animation-86ecfd53.js");

    var DURATION = 540;

    var addSafeArea = function addSafeArea(val) {
      var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
      return "calc(".concat(val, "px + var(--ion-safe-area-").concat(side, "))");
    };

    var getClonedElement = function getClonedElement(tagName) {
      return document.querySelector("".concat(tagName, ".ion-cloned-element"));
    };

    var shadow = function shadow(el) {
      return el.shadowRoot || el;
    };

    var getLargeTitle = function getLargeTitle(refEl) {
      return refEl.querySelector('ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]');
    };

    var getBackButton = function getBackButton(refEl, backDirection) {
      var buttonsList = refEl.querySelectorAll('ion-buttons');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = buttonsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var buttons = _step.value;
          var parentHeader = buttons.closest('ion-header');
          var activeHeader = parentHeader && !parentHeader.classList.contains('header-collapse-condense-inactive');
          var backButton = buttons.querySelector('ion-back-button');
          var buttonsCollapse = buttons.classList.contains('buttons-collapse');

          if (backButton !== null && (buttonsCollapse && activeHeader && backDirection || !buttonsCollapse)) {
            return backButton;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return null;
    };

    var createLargeTitleTransition = function createLargeTitleTransition(rootAnimation, rtl, backDirection, enteringEl, leavingEl) {
      var enteringBackButton = getBackButton(enteringEl, backDirection);
      var leavingLargeTitle = getLargeTitle(leavingEl);
      var enteringLargeTitle = getLargeTitle(enteringEl);
      var leavingBackButton = getBackButton(leavingEl, backDirection);
      var shouldAnimationForward = enteringBackButton !== null && leavingLargeTitle !== null && !backDirection;
      var shouldAnimationBackward = enteringLargeTitle !== null && leavingBackButton !== null && backDirection;

      if (shouldAnimationForward) {
        animateLargeTitle(rootAnimation, rtl, backDirection, leavingLargeTitle);
        animateBackButton(rootAnimation, rtl, backDirection, enteringBackButton);
      } else if (shouldAnimationBackward) {
        animateLargeTitle(rootAnimation, rtl, backDirection, enteringLargeTitle);
        animateBackButton(rootAnimation, rtl, backDirection, leavingBackButton);
      }

      return {
        forward: shouldAnimationForward,
        backward: shouldAnimationBackward
      };
    };

    var animateBackButton = function animateBackButton(rootAnimation, rtl, backDirection, backButtonEl) {
      var START_TEXT_TRANSLATE = rtl ? '7px' : '-7px';
      var END_TEXT_TRANSLATE = rtl ? '-4px' : '4px';
      var ICON_TRANSLATE = rtl ? '-4px' : '4px';
      var TEXT_TRANSFORM_ORIGIN_X = rtl ? 'right' : 'left';
      var ICON_TRANSFORM_ORIGIN_X = rtl ? 'left' : 'right';
      var FORWARD_TEXT_KEYFRAMES = [{
        offset: 0,
        opacity: 0,
        transform: "translate(".concat(START_TEXT_TRANSLATE, ", ").concat(addSafeArea(8), ") scale(2.1)")
      }, {
        offset: 1,
        opacity: 1,
        transform: "translate(".concat(END_TEXT_TRANSLATE, ", ").concat(addSafeArea(-40), ") scale(1)")
      }];
      var BACKWARD_TEXT_KEYFRAMES = [{
        offset: 0,
        opacity: 1,
        transform: "translate(".concat(END_TEXT_TRANSLATE, ", ").concat(addSafeArea(-40), ") scale(1)")
      }, {
        offset: 0.6,
        opacity: 0
      }, {
        offset: 1,
        opacity: 0,
        transform: "translate(".concat(START_TEXT_TRANSLATE, ", ").concat(addSafeArea(8), ") scale(2.1)")
      }];
      var TEXT_KEYFRAMES = backDirection ? BACKWARD_TEXT_KEYFRAMES : FORWARD_TEXT_KEYFRAMES;
      var FORWARD_ICON_KEYFRAMES = [{
        offset: 0,
        opacity: 0,
        transform: "translate3d(".concat(ICON_TRANSLATE, ", ").concat(addSafeArea(-35), ", 0) scale(0.6)")
      }, {
        offset: 1,
        opacity: 1,
        transform: "translate3d(".concat(ICON_TRANSLATE, ", ").concat(addSafeArea(-40), ", 0) scale(1)")
      }];
      var BACKWARD_ICON_KEYFRAMES = [{
        offset: 0,
        opacity: 1,
        transform: "translate(".concat(ICON_TRANSLATE, ", ").concat(addSafeArea(-40), ") scale(1)")
      }, {
        offset: 0.2,
        opacity: 0,
        transform: "translate(".concat(ICON_TRANSLATE, ", ").concat(addSafeArea(-35), ") scale(0.6)")
      }, {
        offset: 1,
        opacity: 0,
        transform: "translate(".concat(ICON_TRANSLATE, ", ").concat(addSafeArea(-35), ") scale(0.6)")
      }];
      var ICON_KEYFRAMES = backDirection ? BACKWARD_ICON_KEYFRAMES : FORWARD_ICON_KEYFRAMES;
      var enteringBackButtonTextAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
      var enteringBackButtonIconAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
      var clonedBackButtonEl = getClonedElement('ion-back-button');
      var backButtonTextEl = clonedBackButtonEl.querySelector('.button-text');
      var backButtonIconEl = clonedBackButtonEl.querySelector('ion-icon');
      clonedBackButtonEl.text = backButtonEl.text;
      clonedBackButtonEl.mode = backButtonEl.mode;
      clonedBackButtonEl.icon = backButtonEl.icon;
      clonedBackButtonEl.color = backButtonEl.color;
      clonedBackButtonEl.disabled = backButtonEl.disabled;
      clonedBackButtonEl.style.setProperty('display', 'block');
      clonedBackButtonEl.style.setProperty('position', 'fixed');
      enteringBackButtonIconAnimation.addElement(backButtonIconEl);
      enteringBackButtonTextAnimation.addElement(backButtonTextEl);
      enteringBackButtonTextAnimation.beforeStyles({
        'transform-origin': "".concat(TEXT_TRANSFORM_ORIGIN_X, " center")
      }).beforeAddWrite(function () {
        backButtonEl.style.setProperty('display', 'none');
      }).afterAddWrite(function () {
        backButtonEl.style.setProperty('display', '');
        clonedBackButtonEl.style.setProperty('display', 'none');
      }).keyframes(TEXT_KEYFRAMES);
      enteringBackButtonIconAnimation.beforeStyles({
        'transform-origin': "".concat(ICON_TRANSFORM_ORIGIN_X, " center")
      }).keyframes(ICON_KEYFRAMES);
      rootAnimation.addAnimation([enteringBackButtonTextAnimation, enteringBackButtonIconAnimation]);
    };

    var animateLargeTitle = function animateLargeTitle(rootAnimation, rtl, backDirection, largeTitleEl) {
      var START_TRANSLATE = rtl ? '-18px' : '18px';
      var TRANSFORM_ORIGIN_X = rtl ? 'right' : 'left';
      var BACKWARDS_KEYFRAMES = [{
        offset: 0,
        opacity: 0,
        transform: "translate(".concat(START_TRANSLATE, ", ").concat(addSafeArea(0), ") scale(0.49)")
      }, {
        offset: 0.1,
        opacity: 0
      }, {
        offset: 1,
        opacity: 1,
        transform: "translate(0, ".concat(addSafeArea(49), ") scale(1)")
      }];
      var FORWARDS_KEYFRAMES = [{
        offset: 0,
        opacity: 0.99,
        transform: "translate(0, ".concat(addSafeArea(49), ") scale(1)")
      }, {
        offset: 0.6,
        opacity: 0
      }, {
        offset: 1,
        opacity: 0,
        transform: "translate(".concat(START_TRANSLATE, ", ").concat(addSafeArea(0), ") scale(0.5)")
      }];
      var KEYFRAMES = backDirection ? BACKWARDS_KEYFRAMES : FORWARDS_KEYFRAMES;
      var clonedTitleEl = getClonedElement('ion-title');
      var clonedLargeTitleAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
      clonedTitleEl.innerText = largeTitleEl.innerText;
      clonedTitleEl.size = largeTitleEl.size;
      clonedTitleEl.color = largeTitleEl.color;
      clonedLargeTitleAnimation.addElement(clonedTitleEl);
      clonedLargeTitleAnimation.beforeStyles({
        'transform-origin': "".concat(TRANSFORM_ORIGIN_X, " center"),
        'height': '46px',
        'display': '',
        'position': 'relative'
      }).beforeAddWrite(function () {
        largeTitleEl.style.setProperty('display', 'none');
      }).afterAddWrite(function () {
        largeTitleEl.style.setProperty('display', '');
        clonedTitleEl.style.setProperty('display', 'none');
      }).keyframes(KEYFRAMES);
      rootAnimation.addAnimation(clonedLargeTitleAnimation);
    };

    var iosTransitionAnimation = function iosTransitionAnimation(navEl, opts) {
      try {
        var EASING = 'cubic-bezier(0.32,0.72,0,1)';
        var OPACITY = 'opacity';
        var TRANSFORM = 'transform';
        var CENTER = '0%';
        var OFF_OPACITY = 0.8;
        var isRTL = navEl.ownerDocument.dir === 'rtl';
        var OFF_RIGHT = isRTL ? '-99.5%' : '99.5%';
        var OFF_LEFT = isRTL ? '33%' : '-33%';
        var enteringEl = opts.enteringEl;
        var leavingEl = opts.leavingEl;
        var backDirection = opts.direction === 'back';
        var contentEl = enteringEl.querySelector(':scope > ion-content');
        var headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
        var enteringToolBarEls = enteringEl.querySelectorAll(':scope > ion-header > ion-toolbar');
        var rootAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
        var enteringContentAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
        rootAnimation.addElement(enteringEl).duration(opts.duration || DURATION).easing(opts.easing || EASING).fill('both').beforeRemoveClass('ion-page-invisible');

        if (leavingEl && navEl) {
          var navDecorAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
          navDecorAnimation.addElement(navEl);
          rootAnimation.addAnimation(navDecorAnimation);
        }

        if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) {
          enteringContentAnimation.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'));
        } else {
          enteringContentAnimation.addElement(contentEl);
          enteringContentAnimation.addElement(headerEls);
        }

        rootAnimation.addAnimation(enteringContentAnimation);

        if (backDirection) {
          enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")")).fromTo(OPACITY, OFF_OPACITY, 1);
        } else {
          // entering content, forward direction
          enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")"));
        }

        if (contentEl) {
          var enteringTransitionEffectEl = shadow(contentEl).querySelector('.transition-effect');

          if (enteringTransitionEffectEl) {
            var enteringTransitionCoverEl = enteringTransitionEffectEl.querySelector('.transition-cover');
            var enteringTransitionShadowEl = enteringTransitionEffectEl.querySelector('.transition-shadow');
            var enteringTransitionEffect = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
            var enteringTransitionCover = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
            var enteringTransitionShadow = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
            enteringTransitionEffect.addElement(enteringTransitionEffectEl).beforeStyles({
              opacity: '1'
            }).afterStyles({
              opacity: ''
            });
            enteringTransitionCover.addElement(enteringTransitionCoverEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, 0, 0.1);
            enteringTransitionShadow.addElement(enteringTransitionShadowEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.03, 0.70);
            enteringTransitionEffect.addAnimation([enteringTransitionCover, enteringTransitionShadow]);
            enteringContentAnimation.addAnimation([enteringTransitionEffect]);
          }
        }

        var enteringContentHasLargeTitle = enteringEl.querySelector('ion-header.header-collapse-condense');

        var _createLargeTitleTran = createLargeTitleTransition(rootAnimation, isRTL, backDirection, enteringEl, leavingEl),
            forward = _createLargeTitleTran.forward,
            backward = _createLargeTitleTran.backward;

        enteringToolBarEls.forEach(function (enteringToolBarEl) {
          var enteringToolBar = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
          enteringToolBar.addElement(enteringToolBarEl);
          rootAnimation.addAnimation(enteringToolBar);
          var enteringTitle = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
          enteringTitle.addElement(enteringToolBarEl.querySelector('ion-title'));
          var enteringToolBarButtons = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
          var buttons = Array.from(enteringToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
          var parentHeader = enteringToolBarEl.closest('ion-header');
          var inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
          var buttonsToAnimate;

          if (backDirection) {
            buttonsToAnimate = buttons.filter(function (button) {
              var isCollapseButton = button.classList.contains('buttons-collapse');
              return isCollapseButton && !inactiveHeader || !isCollapseButton;
            });
          } else {
            buttonsToAnimate = buttons.filter(function (button) {
              return !button.classList.contains('buttons-collapse');
            });
          }

          enteringToolBarButtons.addElement(buttonsToAnimate);
          var enteringToolBarItems = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
          enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
          var enteringToolBarBg = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
          enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector('.toolbar-background'));
          var enteringBackButton = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
          var backButtonEl = enteringToolBarEl.querySelector('ion-back-button');

          if (backButtonEl) {
            enteringBackButton.addElement(backButtonEl);
          }

          enteringToolBar.addAnimation([enteringTitle, enteringToolBarButtons, enteringToolBarItems, enteringToolBarBg, enteringBackButton]);
          enteringToolBarButtons.fromTo(OPACITY, 0.01, 1);
          enteringToolBarItems.fromTo(OPACITY, 0.01, 1);

          if (backDirection) {
            if (!inactiveHeader) {
              enteringTitle.fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")")).fromTo(OPACITY, 0.01, 1);
            }

            enteringToolBarItems.fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")")); // back direction, entering page has a back button

            enteringBackButton.fromTo(OPACITY, 0.01, 1);
          } else {
            // entering toolbar, forward direction
            if (!enteringContentHasLargeTitle) {
              enteringTitle.fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")")).fromTo(OPACITY, 0.01, 1);
            }

            enteringToolBarItems.fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")"));
            enteringToolBarBg.beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.01, 1); // forward direction, entering page has a back button

            if (!forward) {
              enteringBackButton.fromTo(OPACITY, 0.01, 1);
            }

            if (backButtonEl && !forward) {
              var enteringBackBtnText = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
              enteringBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text')).fromTo("transform", isRTL ? 'translateX(-100px)' : 'translateX(100px)', 'translateX(0px)');
              enteringToolBar.addAnimation(enteringBackBtnText);
            }
          }
        }); // setup leaving view

        if (leavingEl) {
          var leavingContent = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
          var leavingContentEl = leavingEl.querySelector(':scope > ion-content');
          leavingContent.addElement(leavingContentEl);
          leavingContent.addElement(leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'));
          rootAnimation.addAnimation(leavingContent);

          if (backDirection) {
            // leaving content, back direction
            leavingContent.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? 'translateX(-100%)' : 'translateX(100%)');
          } else {
            // leaving content, forward direction
            leavingContent.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).fromTo(OPACITY, 1, OFF_OPACITY);
          }

          if (leavingContentEl) {
            var leavingTransitionEffectEl = shadow(leavingContentEl).querySelector('.transition-effect');

            if (leavingTransitionEffectEl) {
              var leavingTransitionCoverEl = leavingTransitionEffectEl.querySelector('.transition-cover');
              var leavingTransitionShadowEl = leavingTransitionEffectEl.querySelector('.transition-shadow');
              var leavingTransitionEffect = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
              var leavingTransitionCover = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
              var leavingTransitionShadow = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
              leavingTransitionEffect.addElement(leavingTransitionEffectEl).beforeStyles({
                opacity: '1'
              }).afterStyles({
                opacity: ''
              });
              leavingTransitionCover.addElement(leavingTransitionCoverEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.1, 0);
              leavingTransitionShadow.addElement(leavingTransitionShadowEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.70, 0.03);
              leavingTransitionEffect.addAnimation([leavingTransitionCover, leavingTransitionShadow]);
              leavingContent.addAnimation([leavingTransitionEffect]);
            }
          }

          var leavingToolBarEls = leavingEl.querySelectorAll(':scope > ion-header > ion-toolbar');
          leavingToolBarEls.forEach(function (leavingToolBarEl) {
            var leavingToolBar = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
            leavingToolBar.addElement(leavingToolBarEl);
            var leavingTitle = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
            leavingTitle.addElement(leavingToolBarEl.querySelector('ion-title'));
            var leavingToolBarButtons = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
            var buttons = leavingToolBarEl.querySelectorAll('ion-buttons,[menuToggle]');
            var parentHeader = leavingToolBarEl.closest('ion-header');
            var inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
            var buttonsToAnimate = Array.from(buttons).filter(function (button) {
              var isCollapseButton = button.classList.contains('buttons-collapse');
              return isCollapseButton && !inactiveHeader || !isCollapseButton;
            });
            leavingToolBarButtons.addElement(buttonsToAnimate);
            var leavingToolBarItems = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
            var leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');

            if (leavingToolBarItemEls.length > 0) {
              leavingToolBarItems.addElement(leavingToolBarItemEls);
            }

            var leavingToolBarBg = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
            leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector('.toolbar-background'));
            var leavingBackButton = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
            var backButtonEl = leavingToolBarEl.querySelector('ion-back-button');

            if (backButtonEl) {
              leavingBackButton.addElement(backButtonEl);
            }

            leavingToolBar.addAnimation([leavingTitle, leavingToolBarButtons, leavingToolBarItems, leavingBackButton, leavingToolBarBg]);
            rootAnimation.addAnimation(leavingToolBar); // fade out leaving toolbar items

            leavingBackButton.fromTo(OPACITY, 0.99, 0);
            leavingToolBarButtons.fromTo(OPACITY, 0.99, 0);
            leavingToolBarItems.fromTo(OPACITY, 0.99, 0);

            if (backDirection) {
              if (!inactiveHeader) {
                // leaving toolbar, back direction
                leavingTitle.fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? 'translateX(-100%)' : 'translateX(100%)').fromTo(OPACITY, 0.99, 0);
              }

              leavingToolBarItems.fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? 'translateX(-100%)' : 'translateX(100%)'); // leaving toolbar, back direction, and there's no entering toolbar
              // should just slide out, no fading out

              leavingToolBarBg.beforeClearStyles([OPACITY]).fromTo(OPACITY, 1, 0.01);

              if (backButtonEl && !backward) {
                var leavingBackBtnText = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
                leavingBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text')).fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat((isRTL ? -124 : 124) + 'px', ")"));
                leavingToolBar.addAnimation(leavingBackBtnText);
              }
            } else {
              // leaving toolbar, forward direction
              if (!inactiveHeader) {
                leavingTitle.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).fromTo(OPACITY, 0.99, 0).afterClearStyles([TRANSFORM, OPACITY]);
              }

              leavingToolBarItems.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).afterClearStyles([TRANSFORM, OPACITY]);
              leavingBackButton.afterClearStyles([OPACITY]);
              leavingTitle.afterClearStyles([OPACITY]);
              leavingToolBarButtons.afterClearStyles([OPACITY]);
            }
          });
        }

        return rootAnimation;
      } catch (err) {
        throw err;
      }
    };
    /***/

  }
}]); //# sourceMappingURL=ios-transition-becf5388-js-es2015.js.map
//# sourceMappingURL=ios-transition-becf5388-js-es5.js.map