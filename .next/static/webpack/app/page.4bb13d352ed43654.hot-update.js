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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/exchanges.module.css */ \"(app-pages-browser)/./src/app/styles/exchanges.module.css\");\n/* harmony import */ var _styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronRight,FaXmark!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _components_TopHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TopHeader */ \"(app-pages-browser)/./src/app/components/TopHeader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst Exchanges = (param)=>{\n    let { selectedexchange, toggleDisplay, onExchangeSelect } = param;\n    const exchanges = [\n        {\n            value: \"de\",\n            label: \"Deutsch (de)\",\n            image: \"\"\n        },\n        {\n            value: \"en\",\n            label: \"English (en)\",\n            image: \"\"\n        },\n        {\n            value: \"es\",\n            label: \"Espanol (es)\",\n            image: \"\"\n        },\n        {\n            value: \"fr\",\n            label: \"Francais (fr)\",\n            image: \"\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchanges),\n        id: \"exchanges\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().close),\n                onClick: toggleDisplay,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaXmark, {}, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangesc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().header),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Exchanges\"\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangeslist),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangeslistmain),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangeslistmainc),\n                                children: [\n                                    exchanges.map(exchange),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangescon),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangescona),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: \"/group-9-2.svg\",\n                                                            alt: \"img\",\n                                                            className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangesimg)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 42\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 37\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangesdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangesname),\n                                                            children: \"Kucoin\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                        lineNumber: 61,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangesconb),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaChevronRight, {}, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangescon),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangescona),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: \"/group-9-2.svg\",\n                                                            alt: \"img\",\n                                                            className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangesimg)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                            lineNumber: 71,\n                                                            columnNumber: 42\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 37\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangesdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangesname),\n                                                            children: \"OKX\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                            lineNumber: 73,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangesconb),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaChevronRight, {}, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangescon),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangescona),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: \"/group-9-2.svg\",\n                                                            alt: \"img\",\n                                                            className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangesimg)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 42\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 37\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangesdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangesname),\n                                                            children: \"ByBit\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                            lineNumber: 84,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_exchanges_module_css__WEBPACK_IMPORTED_MODULE_1___default().exchangesconb),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaChevronRight, {}, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Exchanges.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Exchanges;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Exchanges);\nvar _c;\n$RefreshReg$(_c, \"Exchanges\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFbUQ7QUFDTztBQUNWO0FBY2hELE1BQU1JLFlBQXFDO1FBQUMsRUFBRUMsZ0JBQWdCLEVBQUNDLGFBQWEsRUFBR0MsZ0JBQWdCLEVBQUM7SUFFNUYsTUFBTUMsWUFBc0I7UUFDeEI7WUFBRUMsT0FBTztZQUFNQyxPQUFPO1lBQWdCQyxPQUFPO1FBQUc7UUFDaEQ7WUFBRUYsT0FBTztZQUFNQyxPQUFPO1lBQWdCQyxPQUFPO1FBQUc7UUFDaEQ7WUFBRUYsT0FBTztZQUFNQyxPQUFPO1lBQWdCQyxPQUFPO1FBQUc7UUFDaEQ7WUFBRUYsT0FBTztZQUFNQyxPQUFPO1lBQWlCQyxPQUFPO1FBQUc7S0FDcEQ7SUFFRCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV2IsK0VBQWdCO1FBQUVjLElBQUc7OzBCQUNqQyw4REFBQ0Y7Z0JBQUlDLFdBQVdiLDJFQUFZO2dCQUFFZ0IsU0FBU1Y7MEJBQ25DLDRFQUFDSixrR0FBT0E7Ozs7Ozs7Ozs7MEJBRVosOERBQUNDLDZEQUFTQTs7Ozs7MEJBQ1YsOERBQUNTO2dCQUFJQyxXQUFXYixnRkFBaUI7O2tDQUM3Qiw4REFBQ1k7d0JBQUlDLFdBQVdiLDRFQUFhO2tDQUN6Qiw0RUFBQ21CO3NDQUFHOzs7Ozs7Ozs7OztrQ0FrQlIsOERBQUNQO3dCQUFJQyxXQUFXYixtRkFBb0I7a0NBQ2hDLDRFQUFDWTs0QkFBSUMsV0FBV2IsdUZBQXdCO3NDQUNwQyw0RUFBQ1k7Z0NBQUlDLFdBQVdiLHdGQUF5Qjs7b0NBQ3BDUSxVQUFVZSxHQUFHLENBQUVDO2tEQUNoQiw4REFBQ1o7d0NBQUlDLFdBQVdiLGtGQUFtQjs7MERBQy9CLDhEQUFDWTtnREFBSUMsV0FBV2IsbUZBQW9COztrRUFDaEMsOERBQUNZO2tFQUFJLDRFQUFDZTs0REFBSUMsS0FBSTs0REFBaUJDLEtBQUk7NERBQU1oQixXQUFXYixrRkFBbUI7Ozs7Ozs7Ozs7O2tFQUN2RSw4REFBQ1k7d0RBQUlDLFdBQVdiLGtGQUFtQjtrRUFDL0IsNEVBQUNZOzREQUFJQyxXQUFXYixtRkFBb0I7c0VBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQUc5Qyw4REFBQ1k7Z0RBQUlDLFdBQVdiLG1GQUFvQjswREFDaEMsNEVBQUNDLHlHQUFjQTs7Ozs7Ozs7Ozs7Ozs7OztrREFHdkIsOERBQUNXO3dDQUFJQyxXQUFXYixrRkFBbUI7OzBEQUMvQiw4REFBQ1k7Z0RBQUlDLFdBQVdiLG1GQUFvQjs7a0VBQ2hDLDhEQUFDWTtrRUFBSSw0RUFBQ2U7NERBQUlDLEtBQUk7NERBQWlCQyxLQUFJOzREQUFNaEIsV0FBV2Isa0ZBQW1COzs7Ozs7Ozs7OztrRUFDdkUsOERBQUNZO3dEQUFJQyxXQUFXYixrRkFBbUI7a0VBQy9CLDRFQUFDWTs0REFBSUMsV0FBV2IsbUZBQW9CO3NFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzswREFHOUMsOERBQUNZO2dEQUFJQyxXQUFXYixtRkFBb0I7MERBQ2hDLDRFQUFDQyx5R0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBR3ZCLDhEQUFDVzt3Q0FBSUMsV0FBV2Isa0ZBQW1COzswREFDL0IsOERBQUNZO2dEQUFJQyxXQUFXYixtRkFBb0I7O2tFQUNoQyw4REFBQ1k7a0VBQUksNEVBQUNlOzREQUFJQyxLQUFJOzREQUFpQkMsS0FBSTs0REFBTWhCLFdBQVdiLGtGQUFtQjs7Ozs7Ozs7Ozs7a0VBQ3ZFLDhEQUFDWTt3REFBSUMsV0FBV2Isa0ZBQW1CO2tFQUMvQiw0RUFBQ1k7NERBQUlDLFdBQVdiLG1GQUFvQjtzRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBRzlDLDhEQUFDWTtnREFBSUMsV0FBV2IsbUZBQW9COzBEQUNoQyw0RUFBQ0MseUdBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNuRDtLQTlFTUc7QUFnRk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlcy50c3g/MzFjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2V4Y2hhbmdlcy5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IEZhQ2hldnJvblJpZ2h0LCBGYVhtYXJrIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuaW1wb3J0IFRvcEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub3BIZWFkZXJcIjtcblxuaW50ZXJmYWNlIE9wdGlvbiB7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGltYWdlOiBzdHJpbmc7XG59XG4gIFxuaW50ZXJmYWNlIEV4Y2hhbmdlUHJvcHMge1xuICAgIHNlbGVjdGVkZXhjaGFuZ2U6IHN0cmluZztcbiAgICB0b2dnbGVEaXNwbGF5PzogKCkgPT4gdm9pZDtcbiAgICBvbkV4Y2hhbmdlU2VsZWN0OiAoc2VsZWN0ZWRFeGNoYW5nZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5jb25zdCBFeGNoYW5nZXM6IE5leHRQYWdlPEV4Y2hhbmdlUHJvcHM+ID0gKHsgc2VsZWN0ZWRleGNoYW5nZSx0b2dnbGVEaXNwbGF5ICwgb25FeGNoYW5nZVNlbGVjdH0pID0+IHtcblxuICAgIGNvbnN0IGV4Y2hhbmdlczogT3B0aW9uW10gPSBbXG4gICAgICAgIHsgdmFsdWU6ICdkZScsIGxhYmVsOiAnRGV1dHNjaCAoZGUpJywgaW1hZ2U6ICcnIH0sXG4gICAgICAgIHsgdmFsdWU6ICdlbicsIGxhYmVsOiAnRW5nbGlzaCAoZW4pJywgaW1hZ2U6ICcnIH0sXG4gICAgICAgIHsgdmFsdWU6ICdlcycsIGxhYmVsOiAnRXNwYW5vbCAoZXMpJywgaW1hZ2U6ICcnIH0sXG4gICAgICAgIHsgdmFsdWU6ICdmcicsIGxhYmVsOiAnRnJhbmNhaXMgKGZyKScsIGltYWdlOiAnJyB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2hhbmdlc30gaWQ9XCJleGNoYW5nZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9IG9uQ2xpY2s9e3RvZ2dsZURpc3BsYXl9PlxuICAgICAgICAgICAgICAgIDxGYVhtYXJrIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxUb3BIZWFkZXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhjaGFuZ2VzY30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8aDI+RXhjaGFuZ2VzPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiB7bGFuZ3VhZ2VzLm1hcCgobGFuZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZWNvbn0ga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2hhbmdlKGxhbmcubGFiZWwpfT4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZWNvbmF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VhZ2VkZXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhbmd1YWdlbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFuZy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VhZ2Vjb25ifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX0gKi99XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2hhbmdlc2xpc3R9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2hhbmdlc2xpc3RtYWlufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhjaGFuZ2VzbGlzdG1haW5jfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXhjaGFuZ2VzLm1hcCgoZXhjaGFuZ2UpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2hhbmdlc2Nvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhjaGFuZ2VzY29uYX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiL2dyb3VwLTktMi5zdmdcIiBhbHQ9XCJpbWdcIiBjbGFzc05hbWU9e3N0eWxlcy5leGNoYW5nZXNpbWd9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2hhbmdlc2RldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGNoYW5nZXNuYW1lfT5LdWNvaW48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGNoYW5nZXNjb25ifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2hhbmdlc2Nvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhjaGFuZ2VzY29uYX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiL2dyb3VwLTktMi5zdmdcIiBhbHQ9XCJpbWdcIiBjbGFzc05hbWU9e3N0eWxlcy5leGNoYW5nZXNpbWd9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2hhbmdlc2RldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGNoYW5nZXNuYW1lfT5PS1g8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGNoYW5nZXNjb25ifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2hhbmdlc2Nvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhjaGFuZ2VzY29uYX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiL2dyb3VwLTktMi5zdmdcIiBhbHQ9XCJpbWdcIiBjbGFzc05hbWU9e3N0eWxlcy5leGNoYW5nZXNpbWd9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2hhbmdlc2RldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGNoYW5nZXNuYW1lfT5CeUJpdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2hhbmdlc2NvbmJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2hldnJvblJpZ2h0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZXM7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiRmFDaGV2cm9uUmlnaHQiLCJGYVhtYXJrIiwiVG9wSGVhZGVyIiwiRXhjaGFuZ2VzIiwic2VsZWN0ZWRleGNoYW5nZSIsInRvZ2dsZURpc3BsYXkiLCJvbkV4Y2hhbmdlU2VsZWN0IiwiZXhjaGFuZ2VzIiwidmFsdWUiLCJsYWJlbCIsImltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJjbG9zZSIsIm9uQ2xpY2siLCJleGNoYW5nZXNjIiwiaGVhZGVyIiwiaDIiLCJleGNoYW5nZXNsaXN0IiwiZXhjaGFuZ2VzbGlzdG1haW4iLCJleGNoYW5nZXNsaXN0bWFpbmMiLCJtYXAiLCJleGNoYW5nZSIsImV4Y2hhbmdlc2NvbiIsImV4Y2hhbmdlc2NvbmEiLCJpbWciLCJzcmMiLCJhbHQiLCJleGNoYW5nZXNpbWciLCJleGNoYW5nZXNkZXQiLCJleGNoYW5nZXNuYW1lIiwiZXhjaGFuZ2VzY29uYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Exchanges.tsx\n"));

/***/ })

});