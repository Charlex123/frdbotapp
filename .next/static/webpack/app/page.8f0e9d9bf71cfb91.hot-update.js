"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Exchanges.tsx":
/*!******************************************!*\
  !*** ./src/app/components/Exchanges.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/exchanges.module.css */ \"(app-pages-browser)/./src/app/styles/exchanges.module.css\");\n/* harmony import */ var _styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronRight,FaXmark!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _components_TopHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TopHeader */ \"(app-pages-browser)/./src/app/components/TopHeader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Exchanges = (param)=>{\n    let { selectedexchange, toggleDisplay, onExchangeSelect } = param;\n    _s();\n    const [selectedExchange, setSelectedExchange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(selectedexchange);\n    const handleChange = (exchange)=>{\n        setSelectedExchange(exchange);\n        if (toggleDisplay) {\n            toggleDisplay();\n        }\n        onExchangeSelect(exchange);\n    };\n    const exchanges = [\n        {\n            name: \"Binance\",\n            image: \"/group-9-2.svg\"\n        },\n        {\n            name: \"OKX\",\n            image: \"/group-9-2.svg\"\n        },\n        {\n            name: \"Kucoin\",\n            image: \"/group-9-2.svg\"\n        },\n        {\n            name: \"Bitget\",\n            image: \"/group-9-2.svg\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2___default().exchanges),\n        id: \"exchanges\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2___default().close),\n                onClick: toggleDisplay,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_4__.FaXmark, {}, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2___default().exchangesc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Exchanges\"\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2___default().exchangeslist),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2___default().exchangeslistmain),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2___default().exchangeslistmainc),\n                                children: exchanges.map((exchange, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2___default().exchangescon),\n                                        onClick: ()=>handleChange(exchange.name),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2___default().exchangescona),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: exchange.image,\n                                                            alt: \"img\",\n                                                            className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2___default().exchangesimg)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                            lineNumber: 70,\n                                                            columnNumber: 46\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 41\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2___default().exchangesdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2___default().exchangesname),\n                                                            children: exchange.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                            lineNumber: 72,\n                                                            columnNumber: 45\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 41\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_2___default().exchangesconb),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_4__.FaChevronRight, {}, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 33\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Exchanges, \"6AGFu2ucoxJ/FoibSeOE3vGRCtQ=\");\n_c = Exchanges;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Exchanges);\nvar _c;\n$RefreshReg$(_c, \"Exchanges\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFFa0I7QUFDTztBQUNWO0FBYWhELE1BQU1LLFlBQXFDO1FBQUMsRUFBRUMsZ0JBQWdCLEVBQUNDLGFBQWEsRUFBR0MsZ0JBQWdCLEVBQUM7O0lBRTVGLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1YsK0NBQVFBLENBQVNNO0lBRWpFLE1BQU1LLGVBQWUsQ0FBQ0M7UUFDbEJGLG9CQUFvQkU7UUFDcEIsSUFBSUwsZUFBZTtZQUNmQTtRQUNKO1FBQ0FDLGlCQUFpQkk7SUFDckI7SUFFQSxNQUFNQyxZQUFzQjtRQUN4QjtZQUFFQyxNQUFNO1lBQVdDLE9BQU87UUFBaUI7UUFDM0M7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQWlCO1FBQ3ZDO1lBQUVELE1BQU07WUFBVUMsT0FBTztRQUFpQjtRQUMxQztZQUFFRCxNQUFNO1lBQVVDLE9BQU87UUFBaUI7S0FDN0M7SUFFRCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV2hCLCtFQUFnQjtRQUFFaUIsSUFBRzs7MEJBQ2pDLDhEQUFDRjtnQkFBSUMsV0FBV2hCLDJFQUFZO2dCQUFFbUIsU0FBU2I7MEJBQ25DLDRFQUFDSixrR0FBT0E7Ozs7Ozs7Ozs7MEJBRVosOERBQUNDLDZEQUFTQTs7Ozs7MEJBQ1YsOERBQUNZO2dCQUFJQyxXQUFXaEIsZ0ZBQWlCOztrQ0FDN0IsOERBQUNlO3dCQUFJQyxXQUFXaEIsNEVBQWE7a0NBQ3pCLDRFQUFDc0I7c0NBQUc7Ozs7Ozs7Ozs7O2tDQWtCUiw4REFBQ1A7d0JBQUlDLFdBQVdoQixtRkFBb0I7a0NBQ2hDLDRFQUFDZTs0QkFBSUMsV0FBV2hCLHVGQUF3QjtzQ0FDcEMsNEVBQUNlO2dDQUFJQyxXQUFXaEIsd0ZBQXlCOzBDQUNwQ1ksVUFBVWMsR0FBRyxDQUFDLENBQUNmLFVBQVNnQixzQkFDckIsOERBQUNaO3dDQUFJQyxXQUFXaEIsa0ZBQW1CO3dDQUFjbUIsU0FBUyxJQUFNVCxhQUFhQyxTQUFTRSxJQUFJOzswREFDdEYsOERBQUNFO2dEQUFJQyxXQUFXaEIsbUZBQW9COztrRUFDaEMsOERBQUNlO2tFQUFJLDRFQUFDZTs0REFBSUMsS0FBS3BCLFNBQVNHLEtBQUs7NERBQUVrQixLQUFJOzREQUFNaEIsV0FBV2hCLGtGQUFtQjs7Ozs7Ozs7Ozs7a0VBQ3ZFLDhEQUFDZTt3REFBSUMsV0FBV2hCLGtGQUFtQjtrRUFDL0IsNEVBQUNlOzREQUFJQyxXQUFXaEIsbUZBQW9CO3NFQUFHVyxTQUFTRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswREFHNUQsOERBQUNFO2dEQUFJQyxXQUFXaEIsbUZBQW9COzBEQUNoQyw0RUFBQ0MseUdBQWNBOzs7Ozs7Ozs7Ozt1Q0FSbUIwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQjFFO0dBbkVNdkI7S0FBQUE7QUFxRU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlcy50c3g/MzFjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9leGNoYW5nZXMubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBGYUNoZXZyb25SaWdodCwgRmFYbWFyayB9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcbmltcG9ydCBUb3BIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9wSGVhZGVyXCI7XG5cbmludGVyZmFjZSBPcHRpb24ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpbWFnZTogc3RyaW5nO1xufVxuICBcbmludGVyZmFjZSBFeGNoYW5nZVByb3BzIHtcbiAgICBzZWxlY3RlZGV4Y2hhbmdlOiBzdHJpbmc7XG4gICAgdG9nZ2xlRGlzcGxheT86ICgpID0+IHZvaWQ7XG4gICAgb25FeGNoYW5nZVNlbGVjdDogKHNlbGVjdGVkRXhjaGFuZ2U6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuY29uc3QgRXhjaGFuZ2VzOiBOZXh0UGFnZTxFeGNoYW5nZVByb3BzPiA9ICh7IHNlbGVjdGVkZXhjaGFuZ2UsdG9nZ2xlRGlzcGxheSAsIG9uRXhjaGFuZ2VTZWxlY3R9KSA9PiB7XG5cbiAgICBjb25zdCBbc2VsZWN0ZWRFeGNoYW5nZSwgc2V0U2VsZWN0ZWRFeGNoYW5nZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KHNlbGVjdGVkZXhjaGFuZ2UpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV4Y2hhbmdlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRFeGNoYW5nZShleGNoYW5nZSk7XG4gICAgICAgIGlmICh0b2dnbGVEaXNwbGF5KSB7XG4gICAgICAgICAgICB0b2dnbGVEaXNwbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgb25FeGNoYW5nZVNlbGVjdChleGNoYW5nZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGV4Y2hhbmdlczogT3B0aW9uW10gPSBbXG4gICAgICAgIHsgbmFtZTogJ0JpbmFuY2UnLCBpbWFnZTogJy9ncm91cC05LTIuc3ZnJyB9LFxuICAgICAgICB7IG5hbWU6ICdPS1gnLCBpbWFnZTogJy9ncm91cC05LTIuc3ZnJyB9LFxuICAgICAgICB7IG5hbWU6ICdLdWNvaW4nLCBpbWFnZTogJy9ncm91cC05LTIuc3ZnJyB9LFxuICAgICAgICB7IG5hbWU6ICdCaXRnZXQnLCBpbWFnZTogJy9ncm91cC05LTIuc3ZnJyB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2hhbmdlc30gaWQ9XCJleGNoYW5nZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9IG9uQ2xpY2s9e3RvZ2dsZURpc3BsYXl9PlxuICAgICAgICAgICAgICAgIDxGYVhtYXJrIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxUb3BIZWFkZXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhjaGFuZ2VzY30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8aDI+RXhjaGFuZ2VzPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiB7bGFuZ3VhZ2VzLm1hcCgobGFuZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZWNvbn0ga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2hhbmdlKGxhbmcubGFiZWwpfT4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZWNvbmF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VhZ2VkZXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhbmd1YWdlbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFuZy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VhZ2Vjb25ifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX0gKi99XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2hhbmdlc2xpc3R9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2hhbmdlc2xpc3RtYWlufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhjaGFuZ2VzbGlzdG1haW5jfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXhjaGFuZ2VzLm1hcCgoZXhjaGFuZ2UsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGNoYW5nZXNjb259IGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZShleGNoYW5nZS5uYW1lKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGNoYW5nZXNjb25hfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPXtleGNoYW5nZS5pbWFnZX0gYWx0PVwiaW1nXCIgY2xhc3NOYW1lPXtzdHlsZXMuZXhjaGFuZ2VzaW1nfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhjaGFuZ2VzZGV0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGNoYW5nZXNuYW1lfT57ZXhjaGFuZ2UubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGNoYW5nZXNjb25ifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhjaGFuZ2VzO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiRmFDaGV2cm9uUmlnaHQiLCJGYVhtYXJrIiwiVG9wSGVhZGVyIiwiRXhjaGFuZ2VzIiwic2VsZWN0ZWRleGNoYW5nZSIsInRvZ2dsZURpc3BsYXkiLCJvbkV4Y2hhbmdlU2VsZWN0Iiwic2VsZWN0ZWRFeGNoYW5nZSIsInNldFNlbGVjdGVkRXhjaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJleGNoYW5nZSIsImV4Y2hhbmdlcyIsIm5hbWUiLCJpbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiY2xvc2UiLCJvbkNsaWNrIiwiZXhjaGFuZ2VzYyIsImhlYWRlciIsImgyIiwiZXhjaGFuZ2VzbGlzdCIsImV4Y2hhbmdlc2xpc3RtYWluIiwiZXhjaGFuZ2VzbGlzdG1haW5jIiwibWFwIiwiaW5kZXgiLCJleGNoYW5nZXNjb24iLCJleGNoYW5nZXNjb25hIiwiaW1nIiwic3JjIiwiYWx0IiwiZXhjaGFuZ2VzaW1nIiwiZXhjaGFuZ2VzZGV0IiwiZXhjaGFuZ2VzbmFtZSIsImV4Y2hhbmdlc2NvbmIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Exchanges.tsx\n"));

/***/ })

});