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

/***/ "(app-pages-browser)/./src/app/components/Settings.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/Settings.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/settings.module.css */ \"(app-pages-browser)/./src/app/styles/settings.module.css\");\n/* harmony import */ var _styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronRight,FaXmark!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _components_TopHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TopHeader */ \"(app-pages-browser)/./src/app/components/TopHeader.tsx\");\n/* harmony import */ var _LanguagesDropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LanguagesDropDown */ \"(app-pages-browser)/./src/app/components/LanguagesDropDown.tsx\");\n/* harmony import */ var _Exchanges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Exchanges */ \"(app-pages-browser)/./src/app/components/Exchanges.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Settings = (param)=>{\n    let { toggleDisplay } = param;\n    _s();\n    const [exchanges, setExchanges] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedLanguage, setSelectedLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [landdrpdown, setLangDrpDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showlang, setShowLang] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showexchange, setShowExchange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const toggleLangDropDown = ()=>{\n        setLangDrpDown((prev)=>!prev);\n    };\n    const toggleLangSet = ()=>{\n        setShowLang((prev)=>!prev);\n    };\n    const toggleExchangesDisplay = ()=>{\n        setExchanges((prev)=>!prev);\n    };\n    const handleLanguageSelect = (language)=>{\n        setSelectedLanguage(language);\n        setShowLang(true);\n        setLangDrpDown(false); // Hide dropdown when a language is selected\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settings),\n            id: \"settings\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().close),\n                    onClick: toggleDisplay,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__.FaXmark, {}, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, undefined),\n                exchanges && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Exchanges__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    toggleDisplay: toggleExchangesDisplay\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 27\n                }, undefined),\n                landdrpdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LanguagesDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    selectedvalue: selectedLanguage,\n                    toggleLangSet: toggleLangSet,\n                    onLanguageSelect: handleLanguageSelect\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 29\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsc),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"settings\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingslist),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingslistmain),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingslistmainc),\n                                    children: [\n                                        showlang && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscon),\n                                            onClick: toggleLangDropDown,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscona),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsname),\n                                                            children: [\n                                                                \"Select Language\",\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    children: selectedLanguage\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                                    lineNumber: 62,\n                                                                    columnNumber: 45\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsconb),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__.FaChevronRight, {}, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscon),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscona),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsname),\n                                                            children: \"Delete Account\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsconb),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__.FaChevronRight, {}, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Settings, \"TzHhoUilA/pWa3r6duxHemT7cUk=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzRDO0FBRU07QUFFUztBQUNYO0FBQ0c7QUFDZjtBQUtwQyxNQUFNTyxXQUFtQztRQUFDLEVBQUNDLGFBQWEsRUFBQzs7SUFDckQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1csa0JBQWtCQyxvQkFBb0IsR0FBR1osK0NBQVFBLENBQVM7SUFDakUsTUFBTSxDQUFDYSxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2UsVUFBVUMsWUFBWSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDaUIsY0FBY0MsZ0JBQWdCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNbUIscUJBQXFCO1FBQ3ZCTCxlQUFlTSxDQUFBQSxPQUFRLENBQUNBO0lBQzVCO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ2xCTCxZQUFZSSxDQUFBQSxPQUFRLENBQUNBO0lBQ3pCO0lBRUEsTUFBTUUseUJBQXlCO1FBQzNCWixhQUFhVSxDQUFBQSxPQUFRLENBQUNBO0lBQzFCO0lBRUEsTUFBTUcsdUJBQXVCLENBQUNDO1FBQzFCWixvQkFBb0JZO1FBQ3BCUixZQUFZO1FBQ1pGLGVBQWUsUUFBUSw0Q0FBNEM7SUFDdkU7SUFFRixxQkFDRTtrQkFDRSw0RUFBQ1c7WUFBSUMsV0FBV3pCLDZFQUFlO1lBQUUyQixJQUFHOzs4QkFDOUIsOERBQUNIO29CQUFJQyxXQUFXekIsMEVBQVk7b0JBQUU2QixTQUFTdEI7OEJBQ25DLDRFQUFDTCxrR0FBT0E7Ozs7Ozs7Ozs7Z0JBRVhNLDJCQUFhLDhEQUFDSCxrREFBU0E7b0JBQUNFLGVBQWVjOzs7Ozs7Z0JBQ3ZDVCw2QkFBZSw4REFBQ1IsMERBQWdCQTtvQkFBQzBCLGVBQWVwQjtvQkFBa0JVLGVBQWVBO29CQUFlVyxrQkFBa0JUOzs7Ozs7OEJBQ25ILDhEQUFDbkIsNkRBQVNBOzs7Ozs4QkFDViw4REFBQ3FCO29CQUFJQyxXQUFXekIsOEVBQWdCOztzQ0FDNUIsOERBQUN3Qjs0QkFBSUMsV0FBV3pCLDJFQUFhO3NDQUN6Qiw0RUFBQ2tDOzBDQUFHOzs7Ozs7Ozs7OztzQ0FHUiw4REFBQ1Y7NEJBQUlDLFdBQVd6QixpRkFBbUI7c0NBQy9CLDRFQUFDd0I7Z0NBQUlDLFdBQVd6QixxRkFBdUI7MENBQ25DLDRFQUFDd0I7b0NBQUlDLFdBQVd6QixzRkFBd0I7O3dDQUNuQ2MsMEJBQ0QsOERBQUNVOzRDQUFJQyxXQUFXekIsZ0ZBQWtCOzRDQUFFNkIsU0FBU1g7OzhEQUN6Qyw4REFBQ007b0RBQUlDLFdBQVd6QixpRkFBbUI7OERBQy9CLDRFQUFDd0I7d0RBQUlDLFdBQVd6QixnRkFBa0I7a0VBQzlCLDRFQUFDd0I7NERBQUlDLFdBQVd6QixpRkFBbUI7O2dFQUFFOzhFQUVqQyw4REFBQ3dCOzhFQUFLZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4REFJbEIsOERBQUNjO29EQUFJQyxXQUFXekIsaUZBQW1COzhEQUMvQiw0RUFBQ0MseUdBQWNBOzs7Ozs7Ozs7Ozs7Ozs7O3NEQU12Qiw4REFBQ3VCOzRDQUFJQyxXQUFXekIsZ0ZBQWtCOzs4REFDOUIsOERBQUN3QjtvREFBSUMsV0FBV3pCLGlGQUFtQjs4REFDL0IsNEVBQUN3Qjt3REFBSUMsV0FBV3pCLGdGQUFrQjtrRUFDOUIsNEVBQUN3Qjs0REFBSUMsV0FBV3pCLGlGQUFtQjtzRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs4REFHN0MsOERBQUN3QjtvREFBSUMsV0FBV3pCLGlGQUFtQjs4REFDL0IsNEVBQUNDLHlHQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV25EO0dBN0VNSztLQUFBQTtBQStFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MudHN4P2Y1YTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zZXR0aW5ncy5tb2R1bGUuY3NzXCJcbmltcG9ydCBCb3R0b21OYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvQm90dG9tTmF2XCI7XG5pbXBvcnQgeyBGYUNoZXZyb25SaWdodCwgRmFYbWFyaywgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5pbXBvcnQgVG9wSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1RvcEhlYWRlclwiO1xuaW1wb3J0IExhbmd1YWdlRHJvcGRvd24gZnJvbSBcIi4vTGFuZ3VhZ2VzRHJvcERvd25cIjtcbmltcG9ydCBFeGNoYW5nZXMgZnJvbSBcIi4vRXhjaGFuZ2VzXCI7XG5cbmV4cG9ydCB0eXBlIFNldHRpbmdzVHlwZSA9IHtcbiAgICB0b2dnbGVEaXNwbGF5PzogKCkgPT4gdm9pZDtcbn1cbmNvbnN0IFNldHRpbmdzOiBOZXh0UGFnZTxTZXR0aW5nc1R5cGU+ID0gKHt0b2dnbGVEaXNwbGF5fSkgPT4ge1xuICAgIGNvbnN0IFtleGNoYW5nZXMsIHNldEV4Y2hhbmdlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkTGFuZ3VhZ2UsIHNldFNlbGVjdGVkTGFuZ3VhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gICAgY29uc3QgW2xhbmRkcnBkb3duLCBzZXRMYW5nRHJwRG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dsYW5nLCBzZXRTaG93TGFuZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbc2hvd2V4Y2hhbmdlLCBzZXRTaG93RXhjaGFuZ2VdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCB0b2dnbGVMYW5nRHJvcERvd24gPSAoKSA9PiB7XG4gICAgICAgIHNldExhbmdEcnBEb3duKHByZXYgPT4gIXByZXYpXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlTGFuZ1NldCA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd0xhbmcocHJldiA9PiAhcHJldilcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVFeGNoYW5nZXNEaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgICBzZXRFeGNoYW5nZXMocHJldiA9PiAhcHJldik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTGFuZ3VhZ2VTZWxlY3QgPSAobGFuZ3VhZ2U6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZExhbmd1YWdlKGxhbmd1YWdlKTtcbiAgICAgICAgc2V0U2hvd0xhbmcodHJ1ZSk7XG4gICAgICAgIHNldExhbmdEcnBEb3duKGZhbHNlKTsgLy8gSGlkZSBkcm9wZG93biB3aGVuIGEgbGFuZ3VhZ2UgaXMgc2VsZWN0ZWRcbiAgICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3N9IGlkPVwic2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9IG9uQ2xpY2s9e3RvZ2dsZURpc3BsYXl9PlxuICAgICAgICAgICAgICAgIDxGYVhtYXJrIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtleGNoYW5nZXMgJiYgPEV4Y2hhbmdlcyB0b2dnbGVEaXNwbGF5PXt0b2dnbGVFeGNoYW5nZXNEaXNwbGF5fSAvPn1cbiAgICAgICAgICAgIHtsYW5kZHJwZG93biAmJiA8TGFuZ3VhZ2VEcm9wZG93biBzZWxlY3RlZHZhbHVlPXtzZWxlY3RlZExhbmd1YWdlfSB0b2dnbGVMYW5nU2V0PXt0b2dnbGVMYW5nU2V0fSBvbkxhbmd1YWdlU2VsZWN0PXtoYW5kbGVMYW5ndWFnZVNlbGVjdH0gLz4gfVxuICAgICAgICAgICAgPFRvcEhlYWRlciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2N9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnNldHRpbmdzPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzbGlzdH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NsaXN0bWFpbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzbGlzdG1haW5jfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd2xhbmcgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2Nvbn0gb25DbGljaz17dG9nZ2xlTGFuZ0Ryb3BEb3dufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2NvbmF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2RldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc25hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgTGFuZ3VhZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3NlbGVjdGVkTGFuZ3VhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3Njb25ifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2Nvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3Njb25hfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NkZXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NuYW1lfT5EZWxldGUgQWNjb3VudDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzY29uYn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiRmFDaGV2cm9uUmlnaHQiLCJGYVhtYXJrIiwiVG9wSGVhZGVyIiwiTGFuZ3VhZ2VEcm9wZG93biIsIkV4Y2hhbmdlcyIsIlNldHRpbmdzIiwidG9nZ2xlRGlzcGxheSIsImV4Y2hhbmdlcyIsInNldEV4Y2hhbmdlcyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwibGFuZGRycGRvd24iLCJzZXRMYW5nRHJwRG93biIsInNob3dsYW5nIiwic2V0U2hvd0xhbmciLCJzaG93ZXhjaGFuZ2UiLCJzZXRTaG93RXhjaGFuZ2UiLCJ0b2dnbGVMYW5nRHJvcERvd24iLCJwcmV2IiwidG9nZ2xlTGFuZ1NldCIsInRvZ2dsZUV4Y2hhbmdlc0Rpc3BsYXkiLCJoYW5kbGVMYW5ndWFnZVNlbGVjdCIsImxhbmd1YWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2V0dGluZ3MiLCJpZCIsImNsb3NlIiwib25DbGljayIsInNlbGVjdGVkdmFsdWUiLCJvbkxhbmd1YWdlU2VsZWN0Iiwic2V0dGluZ3NjIiwiaGVhZGVyIiwiaDIiLCJzZXR0aW5nc2xpc3QiLCJzZXR0aW5nc2xpc3RtYWluIiwic2V0dGluZ3NsaXN0bWFpbmMiLCJzZXR0aW5nc2NvbiIsInNldHRpbmdzY29uYSIsInNldHRpbmdzZGV0Iiwic2V0dGluZ3NuYW1lIiwic2V0dGluZ3Njb25iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Settings.tsx\n"));

/***/ })

});