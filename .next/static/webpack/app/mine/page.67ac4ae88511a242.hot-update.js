"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/mine/page",{

/***/ "(app-pages-browser)/./src/app/components/Header.tsx":
/*!***************************************!*\
  !*** ./src/app/components/Header.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/header.module.css */ \"(app-pages-browser)/./src/app/styles/header.module.css\");\n/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_FaGear_react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaGear!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _TopHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopHeader */ \"(app-pages-browser)/./src/app/components/TopHeader.tsx\");\n/* harmony import */ var _Exchanges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Exchanges */ \"(app-pages-browser)/./src/app/components/Exchanges.tsx\");\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Settings */ \"(app-pages-browser)/./src/app/components/Settings.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Header = (param)=>{\n    let { className = \"\" } = param;\n    _s();\n    const [selectedExchange, setSelectedExchange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [exchanges, setExchanges] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleExchangesDisplay = ()=>{\n        setExchanges((prev)=>!prev);\n    };\n    const handleExchangeSelect = (language)=>{\n        setSelectedExchange(language);\n        setExchanges(false); // Hide dropdown when a language is selected\n    };\n    const toggleSettings = ()=>{\n        setSettings((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            exchanges && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Exchanges__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sel: true,\n                toggleDisplay: toggleExchangesDisplay,\n                onExchangeSelect: handleExchangeSelect\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                lineNumber: 36,\n                columnNumber: 27\n            }, undefined),\n            settings && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Settings__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                toggleDisplay: toggleSettings\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                lineNumber: 37,\n                columnNumber: 26\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().head),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().profile),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/frdlogo300.png\",\n                                alt: \"user profile\",\n                                width: 30,\n                                height: 30,\n                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().pimage)\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().badge),\n                                children: \"Charles More (Gamer Supa)\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: [\n                            (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().userinfo),\n                            className\n                        ].join(\" \"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().level),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().levelTitle),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().currentLevel),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().epic),\n                                                        children: \"Epic\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().levelIcon),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().levelImageIcon),\n                                                            loading: \"lazy\",\n                                                            alt: \"\",\n                                                            src: \"/vector-1.svg\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                            lineNumber: 50,\n                                                            columnNumber: 37\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().level610),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: \"Level \"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().span),\n                                                        children: \"6/10\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().rectangleParent),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().frameChild)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().levelBackground)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().details),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        onClick: toggleExchangesDisplay,\n                                        style: {\n                                            border: \"none\",\n                                            backgroundColor: \"none\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/union-2.svg\",\n                                            alt: \"pic\"\n                                        }, void 0, false, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().b_earn),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: \"profit per hour\"\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().bst_earn),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: \"/group-9-2.svg\",\n                                                            alt: \"img\",\n                                                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().bimg)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 38\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: \"+680\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: \"/group-9-2.svg\",\n                                                            alt: \"img\",\n                                                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().bimg)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 38\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGear_react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__.FaGear, {\n                                            size: 22,\n                                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().settingsicon),\n                                            onClick: toggleSettings\n                                        }, void 0, false, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Header, \"9bXRw/877FepwchCA56PbXYzlgw=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFFRjtBQUNrQjtBQUNSO0FBQ0w7QUFDQTtBQUNGO0FBTWxDLE1BQU1PLFNBQStCO1FBQUMsRUFBRUMsWUFBWSxFQUFFLEVBQUU7O0lBQ3BELE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1YsK0NBQVFBLENBQVM7SUFDakUsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNZSx5QkFBeUI7UUFDM0JILGFBQWFJLENBQUFBLE9BQVEsQ0FBQ0E7SUFDMUI7SUFFQSxNQUFNQyx1QkFBdUIsQ0FBQ0M7UUFDMUJSLG9CQUFvQlE7UUFDcEJOLGFBQWEsUUFBUSw0Q0FBNEM7SUFDckU7SUFHQSxNQUFNTyxpQkFBaUI7UUFDbkJMLFlBQVlFLENBQUFBLE9BQVEsQ0FBQ0E7SUFDekI7SUFFQSxxQkFDSTs7WUFDS0wsMkJBQWEsOERBQUNOLGtEQUFTQTtnQkFBQ2UsR0FBRztnQkFBRUMsZUFBZU47Z0JBQXdCTyxrQkFBa0JMOzs7Ozs7WUFDdEZKLDBCQUFZLDhEQUFDUCxpREFBUUE7Z0JBQUNlLGVBQWVGOzs7Ozs7MEJBQ3RDLDhEQUFDSTtnQkFBSWYsV0FBV04sdUVBQVc7O2tDQUN2Qiw4REFBQ0Usa0RBQVNBOzs7OztrQ0FDViw4REFBQ21CO3dCQUFJZixXQUFXTiwwRUFBYzs7MENBQzFCLDhEQUFDRCxrREFBS0E7Z0NBQUN5QixLQUFJO2dDQUFrQkMsS0FBSTtnQ0FBZUMsT0FBTztnQ0FBSUMsUUFBUTtnQ0FBSXJCLFdBQVdOLHlFQUFhOzs7Ozs7MENBQy9GLDhEQUFDcUI7Z0NBQUlmLFdBQVdOLHdFQUFZOzBDQUFFOzs7Ozs7Ozs7Ozs7a0NBRWxDLDhEQUFDOEI7d0JBQUl4QixXQUFXOzRCQUFDTiwyRUFBZTs0QkFBRU07eUJBQVUsQ0FBQzBCLElBQUksQ0FBQzs7MENBQzlDLDhEQUFDWDtnQ0FBSWYsV0FBV04sd0VBQVk7O2tEQUN4Qiw4REFBQ3FCO3dDQUFJZixXQUFXTiw2RUFBaUI7OzBEQUM3Qiw4REFBQ3FCO2dEQUFJZixXQUFXTiwrRUFBbUI7O2tFQUMvQiw4REFBQ3FCO3dEQUFJZixXQUFXTix1RUFBVztrRUFBRTs7Ozs7O2tFQUM3Qiw4REFBQ3FCO3dEQUFJZixXQUFXTiw0RUFBZ0I7a0VBQzVCLDRFQUFDc0M7NERBQ0doQyxXQUFXTixpRkFBcUI7NERBQ2hDd0MsU0FBUTs0REFDUmYsS0FBSTs0REFDSkQsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBSWhCLDhEQUFDSDtnREFBSWYsV0FBV04sMkVBQWU7O2tFQUMzQiw4REFBQzBDO2tFQUFPOzs7Ozs7a0VBQ1IsOERBQUNBO3dEQUFLcEMsV0FBV04sdUVBQVc7a0VBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFHdEMsOERBQUNxQjt3Q0FBSWYsV0FBV04sa0ZBQXNCOzswREFDbEMsOERBQUNxQjtnREFBSWYsV0FBV04sNkVBQWlCOzs7Ozs7MERBQ2pDLDhEQUFDcUI7Z0RBQUlmLFdBQVdOLGtGQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUk5Qyw4REFBQ3FCO2dDQUFJZixXQUFXTiwwRUFBYzs7a0RBQzFCLDhEQUFDK0M7d0NBQU9DLE1BQUs7d0NBQVNDLFNBQVNwQzt3Q0FBd0JxQyxPQUFPOzRDQUFDQyxRQUFROzRDQUFRQyxpQkFBaUI7d0NBQU07a0RBQ2xHLDRFQUFDZDs0Q0FBSWQsS0FBSTs0Q0FBZUMsS0FBSTs7Ozs7Ozs7Ozs7a0RBRWhDLDhEQUFDSjt3Q0FBSWYsV0FBV04seUVBQWE7OzBEQUN6Qiw4REFBQ3FCOzBEQUFJOzs7Ozs7MERBQ0wsOERBQUNBO2dEQUFJZixXQUFXTiwyRUFBZTs7a0VBQzNCLDhEQUFDcUI7a0VBQUksNEVBQUNpQjs0REFBSWQsS0FBSTs0REFBaUJDLEtBQUk7NERBQU1uQixXQUFXTix1RUFBVzs7Ozs7Ozs7Ozs7a0VBQy9ELDhEQUFDcUI7a0VBQUk7Ozs7OztrRUFDTCw4REFBQ0E7a0VBQUksNEVBQUNpQjs0REFBSWQsS0FBSTs0REFBaUJDLEtBQUk7NERBQU1uQixXQUFXTix1RUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBR3ZFLDhEQUFDcUI7a0RBQ0csNEVBQUNwQixpRkFBTUE7NENBQUN1RCxNQUFNOzRDQUFJbEQsV0FBV04sK0VBQW1COzRDQUFFaUQsU0FBU2hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZGO0dBMUVNWjtLQUFBQTtBQTRFTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvSGVhZGVyLnRzeD84ZmQxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaGVhZGVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IEZhR2VhciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcbmltcG9ydCBUb3BIZWFkZXIgZnJvbSBcIi4vVG9wSGVhZGVyXCI7XG5pbXBvcnQgRXhjaGFuZ2VzIGZyb20gXCIuL0V4Y2hhbmdlc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL1NldHRpbmdzXCI7XG5cbmV4cG9ydCB0eXBlIEhlYWRlclR5cGUgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn07XG5cbmNvbnN0IEhlYWRlcjogTmV4dFBhZ2U8SGVhZGVyVHlwZT4gPSAoeyBjbGFzc05hbWUgPSBcIlwiIH0pID0+IHtcbiAgICBjb25zdCBbc2VsZWN0ZWRFeGNoYW5nZSwgc2V0U2VsZWN0ZWRFeGNoYW5nZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgICBjb25zdCBbZXhjaGFuZ2VzLCBzZXRFeGNoYW5nZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzZXR0aW5ncywgc2V0U2V0dGluZ3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlRXhjaGFuZ2VzRGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgc2V0RXhjaGFuZ2VzKHByZXYgPT4gIXByZXYpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUV4Y2hhbmdlU2VsZWN0ID0gKGxhbmd1YWdlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRFeGNoYW5nZShsYW5ndWFnZSk7XG4gICAgICAgIHNldEV4Y2hhbmdlcyhmYWxzZSk7IC8vIEhpZGUgZHJvcGRvd24gd2hlbiBhIGxhbmd1YWdlIGlzIHNlbGVjdGVkXG4gICAgfTtcblxuXG4gICAgY29uc3QgdG9nZ2xlU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIHNldFNldHRpbmdzKHByZXYgPT4gIXByZXYpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtleGNoYW5nZXMgJiYgPEV4Y2hhbmdlcyBzZWwgIHRvZ2dsZURpc3BsYXk9e3RvZ2dsZUV4Y2hhbmdlc0Rpc3BsYXl9IG9uRXhjaGFuZ2VTZWxlY3Q9e2hhbmRsZUV4Y2hhbmdlU2VsZWN0fSAvPn1cbiAgICAgICAgICAgIHtzZXR0aW5ncyAmJiA8U2V0dGluZ3MgdG9nZ2xlRGlzcGxheT17dG9nZ2xlU2V0dGluZ3N9IC8+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cbiAgICAgICAgICAgICAgICA8VG9wSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9mcmRsb2dvMzAwLnBuZ1wiIGFsdD1cInVzZXIgcHJvZmlsZVwiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gY2xhc3NOYW1lPXtzdHlsZXMucGltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfT5DaGFybGVzIE1vcmUgKEdhbWVyIFN1cGEpPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e1tzdHlsZXMudXNlcmluZm8sIGNsYXNzTmFtZV0uam9pbihcIiBcIil9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxldmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGV2ZWxUaXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50TGV2ZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVwaWN9PkVwaWM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZXZlbEljb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxldmVsSW1hZ2VJY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi92ZWN0b3ItMS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZXZlbDYxMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntgTGV2ZWwgYH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYW59PjYvMTA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjdGFuZ2xlUGFyZW50fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZyYW1lQ2hpbGR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZXZlbEJhY2tncm91bmR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZUV4Y2hhbmdlc0Rpc3BsYXl9IHN0eWxlPXt7Ym9yZGVyOiAnbm9uZScsIGJhY2tncm91bmRDb2xvcjogJ25vbmUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdW5pb24tMi5zdmdcIiBhbHQ9XCJwaWNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJfZWFybn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5wcm9maXQgcGVyIGhvdXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJzdF9lYXJufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW1nIHNyYz1cIi9ncm91cC05LTIuc3ZnXCIgYWx0PVwiaW1nXCIgY2xhc3NOYW1lPXtzdHlsZXMuYmltZ30gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4rNjgwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCIvZ3JvdXAtOS0yLnN2Z1wiIGFsdD1cImltZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmJpbWd9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhR2VhciBzaXplPXsyMn0gY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NpY29ufSBvbkNsaWNrPXt0b2dnbGVTZXR0aW5nc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJzdHlsZXMiLCJGYUdlYXIiLCJUb3BIZWFkZXIiLCJFeGNoYW5nZXMiLCJTZXR0aW5ncyIsIkhlYWRlciIsImNsYXNzTmFtZSIsInNlbGVjdGVkRXhjaGFuZ2UiLCJzZXRTZWxlY3RlZEV4Y2hhbmdlIiwiZXhjaGFuZ2VzIiwic2V0RXhjaGFuZ2VzIiwic2V0dGluZ3MiLCJzZXRTZXR0aW5ncyIsInRvZ2dsZUV4Y2hhbmdlc0Rpc3BsYXkiLCJwcmV2IiwiaGFuZGxlRXhjaGFuZ2VTZWxlY3QiLCJsYW5ndWFnZSIsInRvZ2dsZVNldHRpbmdzIiwic2VsIiwidG9nZ2xlRGlzcGxheSIsIm9uRXhjaGFuZ2VTZWxlY3QiLCJkaXYiLCJoZWFkIiwicHJvZmlsZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicGltYWdlIiwiYmFkZ2UiLCJuYXYiLCJ1c2VyaW5mbyIsImpvaW4iLCJsZXZlbCIsImxldmVsVGl0bGUiLCJjdXJyZW50TGV2ZWwiLCJlcGljIiwibGV2ZWxJY29uIiwiaW1nIiwibGV2ZWxJbWFnZUljb24iLCJsb2FkaW5nIiwibGV2ZWw2MTAiLCJzcGFuIiwicmVjdGFuZ2xlUGFyZW50IiwiZnJhbWVDaGlsZCIsImxldmVsQmFja2dyb3VuZCIsImRldGFpbHMiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInN0eWxlIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiYl9lYXJuIiwiYnN0X2Vhcm4iLCJiaW1nIiwic2l6ZSIsInNldHRpbmdzaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Header.tsx\n"));

/***/ })

});