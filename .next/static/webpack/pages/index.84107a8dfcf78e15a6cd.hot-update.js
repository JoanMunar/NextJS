webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_pirates_PirateList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pirates/PirateList */ "./components/pirates/PirateList.js");

var _jsxFileName = "C:\\Users\\joan.munar\\Documents\\react\\my-app\\pages\\index.js";


var DUMMY_PIRATES = [{
  id: "p1",
  name: "Whitebeard",
  image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8ddfe70-0b23-4aef-8d58-769268414fcb/ddh2a1w-cfbbfc8f-63d5-4601-b3ab-2ebe70eef135.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4ZGRmZTcwLTBiMjMtNGFlZi04ZDU4LTc2OTI2ODQxNGZjYlwvZGRoMmExdy1jZmJiZmM4Zi02M2Q1LTQ2MDEtYjNhYi0yZWJlNzBlZWYxMzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.j7WIpfpvlhPHCYfuLAUZGRqD6gYsg2UqYTlgZEBZrhQ",
  description: "Father. Also known as the strongest man in the world."
}, {
  id: "p2",
  name: "Kaido",
  image: "https://i.pinimg.com/564x/99/a2/9c/99a29c60b94614365c2fb11bcbea21f5.jpg",
  description: "Dragon king"
}, {
  id: "p3",
  name: "Mihawk",
  image: "https://i.pinimg.com/736x/23/f9/a8/23f9a85ddb151827912c31e22b458257.jpg",
  description: "Best swordman in the world. Badass."
}, {
  id: "p4",
  name: "Zoro",
  image: "https://i.pinimg.com/originals/9d/bd/d2/9dbdd20fbba3c2e587319623776d9f59.jpg",
  description: "Coolest character. Badass sick three sworded man."
}];

function HomePage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pirates_PirateList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      pirates: DUMMY_PIRATES
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfUElSQVRFUyIsImlkIiwibmFtZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJIb21lUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLENBQ3BCO0FBQ0VDLElBQUUsRUFBRSxJQUROO0FBRUVDLE1BQUksRUFBRSxZQUZSO0FBR0VDLE9BQUssRUFDSCxvakJBSko7QUFLRUMsYUFBVyxFQUFFO0FBTGYsQ0FEb0IsRUFRcEI7QUFDRUgsSUFBRSxFQUFFLElBRE47QUFFRUMsTUFBSSxFQUFFLE9BRlI7QUFHRUMsT0FBSyxFQUFFLHlFQUhUO0FBSUVDLGFBQVcsRUFBRTtBQUpmLENBUm9CLEVBY3BCO0FBQ0VILElBQUUsRUFBRSxJQUROO0FBRUVDLE1BQUksRUFBRSxRQUZSO0FBR0VDLE9BQUssRUFBRSx5RUFIVDtBQUlFQyxhQUFXLEVBQUU7QUFKZixDQWRvQixFQW9CcEI7QUFDRUgsSUFBRSxFQUFFLElBRE47QUFFRUMsTUFBSSxFQUFFLE1BRlI7QUFHRUMsT0FBSyxFQUFFLDhFQUhUO0FBSUVDLGFBQVcsRUFBRTtBQUpmLENBcEJvQixDQUF0Qjs7QUE0QkEsU0FBU0MsUUFBVCxHQUFvQjtBQUNsQixzQkFDRSxxRUFBQyxpRUFBRDtBQUFBLDJCQUNFLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFTDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBTlFLLFE7QUFRTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODQxMDdhOGRmY2Y3OGUxNWE2Y2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgUGlyYXRlTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9waXJhdGVzL1BpcmF0ZUxpc3RcIjtcclxuXHJcbmNvbnN0IERVTU1ZX1BJUkFURVMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwicDFcIixcclxuICAgIG5hbWU6IFwiV2hpdGViZWFyZFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMtd2l4bXAtZWQzMGE4NmI4YzRjYTg4Nzc3MzU5NGMyLndpeG1wLmNvbS9mL2Q4ZGRmZTcwLTBiMjMtNGFlZi04ZDU4LTc2OTI2ODQxNGZjYi9kZGgyYTF3LWNmYmJmYzhmLTYzZDUtNDYwMS1iM2FiLTJlYmU3MGVlZjEzNS5wbmc/dG9rZW49ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKMWNtNDZZWEJ3T2pkbE1HUXhPRGc1T0RJeU5qUXpOek5oTldZd1pEUXhOV1ZoTUdReU5tVXdJaXdpYVhOeklqb2lkWEp1T21Gd2NEbzNaVEJrTVRnNE9UZ3lNalkwTXpjellUVm1NR1EwTVRWbFlUQmtNalpsTUNJc0ltOWlhaUk2VzF0N0luQmhkR2dpT2lKY0wyWmNMMlE0WkdSbVpUY3dMVEJpTWpNdE5HRmxaaTA0WkRVNExUYzJPVEkyT0RReE5HWmpZbHd2WkdSb01tRXhkeTFqWm1KaVptTTRaaTAyTTJRMUxUUTJNREV0WWpOaFlpMHlaV0psTnpCbFpXWXhNelV1Y0c1bkluMWRYU3dpWVhWa0lqcGJJblZ5YmpwelpYSjJhV05sT21acGJHVXVaRzkzYm14dllXUWlYWDAuajdXSXBmcHZsaFBIQ1lmdUxBVVpHUnFENmdZc2cyVXFZVGxnWkVCWnJoUVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRmF0aGVyLiBBbHNvIGtub3duIGFzIHRoZSBzdHJvbmdlc3QgbWFuIGluIHRoZSB3b3JsZC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcInAyXCIsXHJcbiAgICBuYW1lOiBcIkthaWRvXCIsXHJcbiAgICBpbWFnZTogXCJodHRwczovL2kucGluaW1nLmNvbS81NjR4Lzk5L2EyLzljLzk5YTI5YzYwYjk0NjE0MzY1YzJmYjExYmNiZWEyMWY1LmpwZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRHJhZ29uIGtpbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcInAzXCIsXHJcbiAgICBuYW1lOiBcIk1paGF3a1wiLFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vNzM2eC8yMy9mOS9hOC8yM2Y5YTg1ZGRiMTUxODI3OTEyYzMxZTIyYjQ1ODI1Ny5qcGdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkJlc3Qgc3dvcmRtYW4gaW4gdGhlIHdvcmxkLiBCYWRhc3MuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJwNFwiLFxyXG4gICAgbmFtZTogXCJab3JvXCIsXHJcbiAgICBpbWFnZTogXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvOWQvYmQvZDIvOWRiZGQyMGZiYmEzYzJlNTg3MzE5NjIzNzc2ZDlmNTkuanBnXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJDb29sZXN0IGNoYXJhY3Rlci4gQmFkYXNzIHNpY2sgdGhyZWUgc3dvcmRlZCBtYW4uXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8UGlyYXRlTGlzdCBwaXJhdGVzPXtEVU1NWV9QSVJBVEVTfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=