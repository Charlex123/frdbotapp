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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/header.module.css */ \"(app-pages-browser)/./src/app/styles/header.module.css\");\n/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_FaGear_react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaGear!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _TopHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopHeader */ \"(app-pages-browser)/./src/app/components/TopHeader.tsx\");\n/* harmony import */ var _Exchanges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Exchanges */ \"(app-pages-browser)/./src/app/components/Exchanges.tsx\");\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Settings */ \"(app-pages-browser)/./src/app/components/Settings.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Header = (param)=>{\n    let { className = \"\" } = param;\n    _s();\n    const [selectedExchange, setSelectedExchange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [exchanges, setExchanges] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleExchangesDisplay = ()=>{\n        setExchanges((prev)=>!prev);\n    };\n    const handleExchangeSelect = (language)=>{\n        setSelectedExchange(language);\n        setExchanges(false); // Hide dropdown when a language is selected\n    };\n    const toggleSettings = ()=>{\n        setSettings((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            exchanges && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Exchanges__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                selectedexchange: \"\",\n                toggleDisplay: toggleExchangesDisplay,\n                onExchangeSelect: handleExchangeSelect\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                lineNumber: 36,\n                columnNumber: 27\n            }, undefined),\n            settings && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Settings__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                toggleDisplay: toggleSettings\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                lineNumber: 37,\n                columnNumber: 26\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().head),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().profile),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/frdlogo300.png\",\n                                alt: \"user profile\",\n                                width: 30,\n                                height: 30,\n                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().pimage)\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().badge),\n                                children: \"Charles More (Gamer Supa)\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: [\n                            (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().userinfo),\n                            className\n                        ].join(\" \"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().level),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().levelTitle),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().currentLevel),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().epic),\n                                                        children: \"Epic\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().levelIcon),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().levelImageIcon),\n                                                            loading: \"lazy\",\n                                                            alt: \"\",\n                                                            src: \"/vector-1.svg\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                            lineNumber: 50,\n                                                            columnNumber: 37\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().level610),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: \"Level \"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().span),\n                                                        children: \"6/10\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().rectangleParent),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().frameChild)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().levelBackground)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().details),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        onClick: toggleExchangesDisplay,\n                                        style: {\n                                            border: \"none\",\n                                            backgroundColor: \"none\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/union-2.svg\",\n                                            alt: \"pic\"\n                                        }, void 0, false, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().b_earn),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: \"profit per hour\"\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().bst_earn),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: \"/group-9-2.svg\",\n                                                            alt: \"img\",\n                                                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().bimg)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 38\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: \"+680\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: \"/group-9-2.svg\",\n                                                            alt: \"img\",\n                                                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().bimg)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 38\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGear_react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__.FaGear, {\n                                            size: 22,\n                                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().settingsicon),\n                                            onClick: toggleSettings\n                                        }, void 0, false, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Header, \"9bXRw/877FepwchCA56PbXYzlgw=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFFRjtBQUNrQjtBQUNSO0FBQ0w7QUFDQTtBQUNGO0FBTWxDLE1BQU1PLFNBQStCO1FBQUMsRUFBRUMsWUFBWSxFQUFFLEVBQUU7O0lBQ3BELE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1YsK0NBQVFBLENBQVM7SUFDakUsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNZSx5QkFBeUI7UUFDM0JILGFBQWFJLENBQUFBLE9BQVEsQ0FBQ0E7SUFDMUI7SUFFQSxNQUFNQyx1QkFBdUIsQ0FBQ0M7UUFDMUJSLG9CQUFvQlE7UUFDcEJOLGFBQWEsUUFBUSw0Q0FBNEM7SUFDckU7SUFHQSxNQUFNTyxpQkFBaUI7UUFDbkJMLFlBQVlFLENBQUFBLE9BQVEsQ0FBQ0E7SUFDekI7SUFFQSxxQkFDSTs7WUFDS0wsMkJBQWEsOERBQUNOLGtEQUFTQTtnQkFBQ2Usa0JBQWlCO2dCQUFJQyxlQUFlTjtnQkFBd0JPLGtCQUFrQkw7Ozs7OztZQUN0R0osMEJBQVksOERBQUNQLGlEQUFRQTtnQkFBQ2UsZUFBZUY7Ozs7OzswQkFDdEMsOERBQUNJO2dCQUFJZixXQUFXTix1RUFBVzs7a0NBQ3ZCLDhEQUFDRSxrREFBU0E7Ozs7O2tDQUNWLDhEQUFDbUI7d0JBQUlmLFdBQVdOLDBFQUFjOzswQ0FDMUIsOERBQUNELGtEQUFLQTtnQ0FBQ3lCLEtBQUk7Z0NBQWtCQyxLQUFJO2dDQUFlQyxPQUFPO2dDQUFJQyxRQUFRO2dDQUFJckIsV0FBV04seUVBQWE7Ozs7OzswQ0FDL0YsOERBQUNxQjtnQ0FBSWYsV0FBV04sd0VBQVk7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FFbEMsOERBQUM4Qjt3QkFBSXhCLFdBQVc7NEJBQUNOLDJFQUFlOzRCQUFFTTt5QkFBVSxDQUFDMEIsSUFBSSxDQUFDOzswQ0FDOUMsOERBQUNYO2dDQUFJZixXQUFXTix3RUFBWTs7a0RBQ3hCLDhEQUFDcUI7d0NBQUlmLFdBQVdOLDZFQUFpQjs7MERBQzdCLDhEQUFDcUI7Z0RBQUlmLFdBQVdOLCtFQUFtQjs7a0VBQy9CLDhEQUFDcUI7d0RBQUlmLFdBQVdOLHVFQUFXO2tFQUFFOzs7Ozs7a0VBQzdCLDhEQUFDcUI7d0RBQUlmLFdBQVdOLDRFQUFnQjtrRUFDNUIsNEVBQUNzQzs0REFDR2hDLFdBQVdOLGlGQUFxQjs0REFDaEN3QyxTQUFROzREQUNSZixLQUFJOzREQUNKRCxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswREFJaEIsOERBQUNIO2dEQUFJZixXQUFXTiwyRUFBZTs7a0VBQzNCLDhEQUFDMEM7a0VBQU87Ozs7OztrRUFDUiw4REFBQ0E7d0RBQUtwQyxXQUFXTix1RUFBVztrRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUd0Qyw4REFBQ3FCO3dDQUFJZixXQUFXTixrRkFBc0I7OzBEQUNsQyw4REFBQ3FCO2dEQUFJZixXQUFXTiw2RUFBaUI7Ozs7OzswREFDakMsOERBQUNxQjtnREFBSWYsV0FBV04sa0ZBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSTlDLDhEQUFDcUI7Z0NBQUlmLFdBQVdOLDBFQUFjOztrREFDMUIsOERBQUMrQzt3Q0FBT0MsTUFBSzt3Q0FBU0MsU0FBU3BDO3dDQUF3QnFDLE9BQU87NENBQUNDLFFBQVE7NENBQVFDLGlCQUFpQjt3Q0FBTTtrREFDbEcsNEVBQUNkOzRDQUFJZCxLQUFJOzRDQUFlQyxLQUFJOzs7Ozs7Ozs7OztrREFFaEMsOERBQUNKO3dDQUFJZixXQUFXTix5RUFBYTs7MERBQ3pCLDhEQUFDcUI7MERBQUk7Ozs7OzswREFDTCw4REFBQ0E7Z0RBQUlmLFdBQVdOLDJFQUFlOztrRUFDM0IsOERBQUNxQjtrRUFBSSw0RUFBQ2lCOzREQUFJZCxLQUFJOzREQUFpQkMsS0FBSTs0REFBTW5CLFdBQVdOLHVFQUFXOzs7Ozs7Ozs7OztrRUFDL0QsOERBQUNxQjtrRUFBSTs7Ozs7O2tFQUNMLDhEQUFDQTtrRUFBSSw0RUFBQ2lCOzREQUFJZCxLQUFJOzREQUFpQkMsS0FBSTs0REFBTW5CLFdBQVdOLHVFQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFHdkUsOERBQUNxQjtrREFDRyw0RUFBQ3BCLGlGQUFNQTs0Q0FBQ3VELE1BQU07NENBQUlsRCxXQUFXTiwrRUFBbUI7NENBQUVpRCxTQUFTaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdkY7R0ExRU1aO0tBQUFBO0FBNEVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4PzhmZDEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9oZWFkZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgRmFHZWFyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuaW1wb3J0IFRvcEhlYWRlciBmcm9tIFwiLi9Ub3BIZWFkZXJcIjtcbmltcG9ydCBFeGNoYW5nZXMgZnJvbSBcIi4vRXhjaGFuZ2VzXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vU2V0dGluZ3NcIjtcblxuZXhwb3J0IHR5cGUgSGVhZGVyVHlwZSA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufTtcblxuY29uc3QgSGVhZGVyOiBOZXh0UGFnZTxIZWFkZXJUeXBlPiA9ICh7IGNsYXNzTmFtZSA9IFwiXCIgfSkgPT4ge1xuICAgIGNvbnN0IFtzZWxlY3RlZEV4Y2hhbmdlLCBzZXRTZWxlY3RlZEV4Y2hhbmdlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICAgIGNvbnN0IFtleGNoYW5nZXMsIHNldEV4Y2hhbmdlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2dnbGVFeGNoYW5nZXNEaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgICBzZXRFeGNoYW5nZXMocHJldiA9PiAhcHJldik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXhjaGFuZ2VTZWxlY3QgPSAobGFuZ3VhZ2U6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZEV4Y2hhbmdlKGxhbmd1YWdlKTtcbiAgICAgICAgc2V0RXhjaGFuZ2VzKGZhbHNlKTsgLy8gSGlkZSBkcm9wZG93biB3aGVuIGEgbGFuZ3VhZ2UgaXMgc2VsZWN0ZWRcbiAgICB9O1xuXG5cbiAgICBjb25zdCB0b2dnbGVTZXR0aW5ncyA9ICgpID0+IHtcbiAgICAgICAgc2V0U2V0dGluZ3MocHJldiA9PiAhcHJldilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2V4Y2hhbmdlcyAmJiA8RXhjaGFuZ2VzIHNlbGVjdGVkZXhjaGFuZ2U9XCJcIiAgdG9nZ2xlRGlzcGxheT17dG9nZ2xlRXhjaGFuZ2VzRGlzcGxheX0gb25FeGNoYW5nZVNlbGVjdD17aGFuZGxlRXhjaGFuZ2VTZWxlY3R9IC8+fVxuICAgICAgICAgICAge3NldHRpbmdzICYmIDxTZXR0aW5ncyB0b2dnbGVEaXNwbGF5PXt0b2dnbGVTZXR0aW5nc30gLz59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxuICAgICAgICAgICAgICAgIDxUb3BIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ZyZGxvZ28zMDAucG5nXCIgYWx0PVwidXNlciBwcm9maWxlXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSBjbGFzc05hbWU9e3N0eWxlcy5waW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9PkNoYXJsZXMgTW9yZSAoR2FtZXIgU3VwYSk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17W3N0eWxlcy51c2VyaW5mbywgY2xhc3NOYW1lXS5qb2luKFwiIFwiKX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGV2ZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZXZlbFRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRMZXZlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXBpY30+RXBpYzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxldmVsSWNvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGV2ZWxJbWFnZUljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3ZlY3Rvci0xLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxldmVsNjEwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2BMZXZlbCBgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn0+Ni8xMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWN0YW5nbGVQYXJlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZnJhbWVDaGlsZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxldmVsQmFja2dyb3VuZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlRXhjaGFuZ2VzRGlzcGxheX0gc3R5bGU9e3tib3JkZXI6ICdub25lJywgYmFja2dyb3VuZENvbG9yOiAnbm9uZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91bmlvbi0yLnN2Z1wiIGFsdD1cInBpY1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYl9lYXJufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnByb2ZpdCBwZXIgaG91cjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnN0X2Vhcm59PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiL2dyb3VwLTktMi5zdmdcIiBhbHQ9XCJpbWdcIiBjbGFzc05hbWU9e3N0eWxlcy5iaW1nfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pis2ODA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW1nIHNyYz1cIi9ncm91cC05LTIuc3ZnXCIgYWx0PVwiaW1nXCIgY2xhc3NOYW1lPXtzdHlsZXMuYmltZ30gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFHZWFyIHNpemU9ezIyfSBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2ljb259IG9uQ2xpY2s9e3RvZ2dsZVNldHRpbmdzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZSIsInN0eWxlcyIsIkZhR2VhciIsIlRvcEhlYWRlciIsIkV4Y2hhbmdlcyIsIlNldHRpbmdzIiwiSGVhZGVyIiwiY2xhc3NOYW1lIiwic2VsZWN0ZWRFeGNoYW5nZSIsInNldFNlbGVjdGVkRXhjaGFuZ2UiLCJleGNoYW5nZXMiLCJzZXRFeGNoYW5nZXMiLCJzZXR0aW5ncyIsInNldFNldHRpbmdzIiwidG9nZ2xlRXhjaGFuZ2VzRGlzcGxheSIsInByZXYiLCJoYW5kbGVFeGNoYW5nZVNlbGVjdCIsImxhbmd1YWdlIiwidG9nZ2xlU2V0dGluZ3MiLCJzZWxlY3RlZGV4Y2hhbmdlIiwidG9nZ2xlRGlzcGxheSIsIm9uRXhjaGFuZ2VTZWxlY3QiLCJkaXYiLCJoZWFkIiwicHJvZmlsZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicGltYWdlIiwiYmFkZ2UiLCJuYXYiLCJ1c2VyaW5mbyIsImpvaW4iLCJsZXZlbCIsImxldmVsVGl0bGUiLCJjdXJyZW50TGV2ZWwiLCJlcGljIiwibGV2ZWxJY29uIiwiaW1nIiwibGV2ZWxJbWFnZUljb24iLCJsb2FkaW5nIiwibGV2ZWw2MTAiLCJzcGFuIiwicmVjdGFuZ2xlUGFyZW50IiwiZnJhbWVDaGlsZCIsImxldmVsQmFja2dyb3VuZCIsImRldGFpbHMiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInN0eWxlIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiYl9lYXJuIiwiYnN0X2Vhcm4iLCJiaW1nIiwic2l6ZSIsInNldHRpbmdzaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Header.tsx\n"));

/***/ })

});