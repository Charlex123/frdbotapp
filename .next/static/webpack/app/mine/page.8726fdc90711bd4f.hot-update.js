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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/settings.module.css */ \"(app-pages-browser)/./src/app/styles/settings.module.css\");\n/* harmony import */ var _styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronRight,FaXmark!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _components_TopHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TopHeader */ \"(app-pages-browser)/./src/app/components/TopHeader.tsx\");\n/* harmony import */ var _LanguagesDropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LanguagesDropDown */ \"(app-pages-browser)/./src/app/components/LanguagesDropDown.tsx\");\n/* harmony import */ var _Exchanges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Exchanges */ \"(app-pages-browser)/./src/app/components/Exchanges.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Settings = (param)=>{\n    let { toggleDisplay } = param;\n    _s();\n    const [exchanges, setExchanges] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedLanguage, setSelectedLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [landdrpdown, setLangDrpDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showlang, setShowLang] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showexchange, setShowExchange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const toggleLangDropDown = ()=>{\n        setLangDrpDown((prev)=>!prev);\n    };\n    const toggleLangSet = ()=>{\n        setShowLang((prev)=>!prev);\n    };\n    const toggleExchangesDisplay = ()=>{\n        setExchanges((prev)=>!prev);\n    };\n    const handleExchangeSelect = (language)=>{\n        setSelectedLanguage(language);\n        setShowLang(true);\n        setLangDrpDown(false); // Hide dropdown when a language is selected\n    };\n    const handleLanguageSelect = (language)=>{\n        setSelectedLanguage(language);\n        setShowLang(true);\n        setLangDrpDown(false); // Hide dropdown when a language is selected\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settings),\n            id: \"settings\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().close),\n                    onClick: toggleDisplay,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__.FaXmark, {}, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, undefined),\n                exchanges && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Exchanges__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    toggleDisplay: toggleExchangesDisplay,\n                    onExchangeSelect: true\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 27\n                }, undefined),\n                landdrpdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LanguagesDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    selectedvalue: selectedLanguage,\n                    toggleLangSet: toggleLangSet,\n                    onLanguageSelect: handleLanguageSelect\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 29\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsc),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"settings\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingslist),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingslistmain),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingslistmainc),\n                                    children: [\n                                        showlang && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscon),\n                                            onClick: toggleLangDropDown,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscona),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsname),\n                                                            children: [\n                                                                \"Select Language\",\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    children: selectedLanguage\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                                    lineNumber: 68,\n                                                                    columnNumber: 45\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                            lineNumber: 66,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsconb),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__.FaChevronRight, {}, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        showexchange && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscon),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscona),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsname),\n                                                            children: [\n                                                                \"Choose Exchange\",\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    children: \"Binance\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                                    lineNumber: 82,\n                                                                    columnNumber: 45\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                            lineNumber: 80,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsconb),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__.FaChevronRight, {}, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 49\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscon),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscona),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsname),\n                                                            children: \"Delete Account\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                            lineNumber: 94,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsconb),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__.FaChevronRight, {}, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Settings, \"TzHhoUilA/pWa3r6duxHemT7cUk=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzRDO0FBRU07QUFFUztBQUNYO0FBQ0c7QUFDZjtBQUtwQyxNQUFNTyxXQUFtQztRQUFDLEVBQUNDLGFBQWEsRUFBQzs7SUFDckQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1csa0JBQWtCQyxvQkFBb0IsR0FBR1osK0NBQVFBLENBQVM7SUFDakUsTUFBTSxDQUFDYSxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2UsVUFBVUMsWUFBWSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDaUIsY0FBY0MsZ0JBQWdCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNbUIscUJBQXFCO1FBQ3ZCTCxlQUFlTSxDQUFBQSxPQUFRLENBQUNBO0lBQzVCO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ2xCTCxZQUFZSSxDQUFBQSxPQUFRLENBQUNBO0lBQ3pCO0lBRUEsTUFBTUUseUJBQXlCO1FBQzNCWixhQUFhVSxDQUFBQSxPQUFRLENBQUNBO0lBQzFCO0lBRUEsTUFBTUcsdUJBQXVCLENBQUNDO1FBQzFCWixvQkFBb0JZO1FBQ3BCUixZQUFZO1FBQ1pGLGVBQWUsUUFBUSw0Q0FBNEM7SUFDdkU7SUFFQSxNQUFNVyx1QkFBdUIsQ0FBQ0Q7UUFDMUJaLG9CQUFvQlk7UUFDcEJSLFlBQVk7UUFDWkYsZUFBZSxRQUFRLDRDQUE0QztJQUN2RTtJQUVGLHFCQUNFO2tCQUNFLDRFQUFDWTtZQUFJQyxXQUFXMUIsNkVBQWU7WUFBRTRCLElBQUc7OzhCQUM5Qiw4REFBQ0g7b0JBQUlDLFdBQVcxQiwwRUFBWTtvQkFBRThCLFNBQVN2Qjs4QkFDbkMsNEVBQUNMLGtHQUFPQTs7Ozs7Ozs7OztnQkFFWE0sMkJBQWEsOERBQUNILGtEQUFTQTtvQkFBQ0UsZUFBZWM7b0JBQXdCVSxnQkFBZ0I7Ozs7OztnQkFDL0VuQiw2QkFBZSw4REFBQ1IsMERBQWdCQTtvQkFBQzRCLGVBQWV0QjtvQkFBa0JVLGVBQWVBO29CQUFlYSxrQkFBa0JUOzs7Ozs7OEJBQ25ILDhEQUFDckIsNkRBQVNBOzs7Ozs4QkFDViw4REFBQ3NCO29CQUFJQyxXQUFXMUIsOEVBQWdCOztzQ0FDNUIsOERBQUN5Qjs0QkFBSUMsV0FBVzFCLDJFQUFhO3NDQUN6Qiw0RUFBQ29DOzBDQUFHOzs7Ozs7Ozs7OztzQ0FHUiw4REFBQ1g7NEJBQUlDLFdBQVcxQixpRkFBbUI7c0NBQy9CLDRFQUFDeUI7Z0NBQUlDLFdBQVcxQixxRkFBdUI7MENBQ25DLDRFQUFDeUI7b0NBQUlDLFdBQVcxQixzRkFBd0I7O3dDQUNuQ2MsMEJBQ0QsOERBQUNXOzRDQUFJQyxXQUFXMUIsZ0ZBQWtCOzRDQUFFOEIsU0FBU1o7OzhEQUN6Qyw4REFBQ087b0RBQUlDLFdBQVcxQixpRkFBbUI7OERBQy9CLDRFQUFDeUI7d0RBQUlDLFdBQVcxQixnRkFBa0I7a0VBQzlCLDRFQUFDeUI7NERBQUlDLFdBQVcxQixpRkFBbUI7O2dFQUFFOzhFQUVqQyw4REFBQ3lCOzhFQUFLZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4REFJbEIsOERBQUNlO29EQUFJQyxXQUFXMUIsaUZBQW1COzhEQUMvQiw0RUFBQ0MseUdBQWNBOzs7Ozs7Ozs7Ozs7Ozs7O3dDQUluQmUsOEJBQWdCLDhEQUFDUzs0Q0FBSUMsV0FBVzFCLGdGQUFrQjs7OERBQ2xELDhEQUFDeUI7b0RBQUlDLFdBQVcxQixpRkFBbUI7OERBQy9CLDRFQUFDeUI7d0RBQUlDLFdBQVcxQixnRkFBa0I7a0VBQzlCLDRFQUFDeUI7NERBQUlDLFdBQVcxQixpRkFBbUI7O2dFQUFFOzhFQUVqQyw4REFBQ3lCOzhFQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQUlqQiw4REFBQ0E7b0RBQUlDLFdBQVcxQixpRkFBbUI7OERBQy9CLDRFQUFDQyx5R0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBSXZCLDhEQUFDd0I7NENBQUlDLFdBQVcxQixnRkFBa0I7OzhEQUM5Qiw4REFBQ3lCO29EQUFJQyxXQUFXMUIsaUZBQW1COzhEQUMvQiw0RUFBQ3lCO3dEQUFJQyxXQUFXMUIsZ0ZBQWtCO2tFQUM5Qiw0RUFBQ3lCOzREQUFJQyxXQUFXMUIsaUZBQW1CO3NFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzhEQUc3Qyw4REFBQ3lCO29EQUFJQyxXQUFXMUIsaUZBQW1COzhEQUMvQiw0RUFBQ0MseUdBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXbkQ7R0EvRk1LO0tBQUFBO0FBaUdOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy50c3g/ZjVhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NldHRpbmdzLm1vZHVsZS5jc3NcIlxuaW1wb3J0IEJvdHRvbU5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3R0b21OYXZcIjtcbmltcG9ydCB7IEZhQ2hldnJvblJpZ2h0LCBGYVhtYXJrLCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcbmltcG9ydCBUb3BIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9wSGVhZGVyXCI7XG5pbXBvcnQgTGFuZ3VhZ2VEcm9wZG93biBmcm9tIFwiLi9MYW5ndWFnZXNEcm9wRG93blwiO1xuaW1wb3J0IEV4Y2hhbmdlcyBmcm9tIFwiLi9FeGNoYW5nZXNcIjtcblxuZXhwb3J0IHR5cGUgU2V0dGluZ3NUeXBlID0ge1xuICAgIHRvZ2dsZURpc3BsYXk/OiAoKSA9PiB2b2lkO1xufVxuY29uc3QgU2V0dGluZ3M6IE5leHRQYWdlPFNldHRpbmdzVHlwZT4gPSAoe3RvZ2dsZURpc3BsYXl9KSA9PiB7XG4gICAgY29uc3QgW2V4Y2hhbmdlcywgc2V0RXhjaGFuZ2VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRMYW5ndWFnZSwgc2V0U2VsZWN0ZWRMYW5ndWFnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgICBjb25zdCBbbGFuZGRycGRvd24sIHNldExhbmdEcnBEb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd2xhbmcsIHNldFNob3dMYW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtzaG93ZXhjaGFuZ2UsIHNldFNob3dFeGNoYW5nZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IHRvZ2dsZUxhbmdEcm9wRG93biA9ICgpID0+IHtcbiAgICAgICAgc2V0TGFuZ0RycERvd24ocHJldiA9PiAhcHJldilcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVMYW5nU2V0ID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93TGFuZyhwcmV2ID0+ICFwcmV2KVxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZUV4Y2hhbmdlc0Rpc3BsYXkgPSAoKSA9PiB7XG4gICAgICAgIHNldEV4Y2hhbmdlcyhwcmV2ID0+ICFwcmV2KTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFeGNoYW5nZVNlbGVjdCA9IChsYW5ndWFnZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkTGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICAgICAgICBzZXRTaG93TGFuZyh0cnVlKTtcbiAgICAgICAgc2V0TGFuZ0RycERvd24oZmFsc2UpOyAvLyBIaWRlIGRyb3Bkb3duIHdoZW4gYSBsYW5ndWFnZSBpcyBzZWxlY3RlZFxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVMYW5ndWFnZVNlbGVjdCA9IChsYW5ndWFnZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkTGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICAgICAgICBzZXRTaG93TGFuZyh0cnVlKTtcbiAgICAgICAgc2V0TGFuZ0RycERvd24oZmFsc2UpOyAvLyBIaWRlIGRyb3Bkb3duIHdoZW4gYSBsYW5ndWFnZSBpcyBzZWxlY3RlZFxuICAgIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc30gaWQ9XCJzZXR0aW5nc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX0gb25DbGljaz17dG9nZ2xlRGlzcGxheX0+XG4gICAgICAgICAgICAgICAgPEZhWG1hcmsgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2V4Y2hhbmdlcyAmJiA8RXhjaGFuZ2VzIHRvZ2dsZURpc3BsYXk9e3RvZ2dsZUV4Y2hhbmdlc0Rpc3BsYXl9IG9uRXhjaGFuZ2VTZWxlY3QvPn1cbiAgICAgICAgICAgIHtsYW5kZHJwZG93biAmJiA8TGFuZ3VhZ2VEcm9wZG93biBzZWxlY3RlZHZhbHVlPXtzZWxlY3RlZExhbmd1YWdlfSB0b2dnbGVMYW5nU2V0PXt0b2dnbGVMYW5nU2V0fSBvbkxhbmd1YWdlU2VsZWN0PXtoYW5kbGVMYW5ndWFnZVNlbGVjdH0gLz4gfVxuICAgICAgICAgICAgPFRvcEhlYWRlciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2N9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnNldHRpbmdzPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzbGlzdH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NsaXN0bWFpbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzbGlzdG1haW5jfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd2xhbmcgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2Nvbn0gb25DbGljaz17dG9nZ2xlTGFuZ0Ryb3BEb3dufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2NvbmF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2RldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc25hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgTGFuZ3VhZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3NlbGVjdGVkTGFuZ3VhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3Njb25ifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ZXhjaGFuZ2UgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2Nvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3Njb25hfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NkZXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hvb3NlIEV4Y2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+QmluYW5jZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzY29uYn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3Njb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzY29uYX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzZGV0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzbmFtZX0+RGVsZXRlIEFjY291bnQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2NvbmJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2hldnJvblJpZ2h0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIkZhQ2hldnJvblJpZ2h0IiwiRmFYbWFyayIsIlRvcEhlYWRlciIsIkxhbmd1YWdlRHJvcGRvd24iLCJFeGNoYW5nZXMiLCJTZXR0aW5ncyIsInRvZ2dsZURpc3BsYXkiLCJleGNoYW5nZXMiLCJzZXRFeGNoYW5nZXMiLCJzZWxlY3RlZExhbmd1YWdlIiwic2V0U2VsZWN0ZWRMYW5ndWFnZSIsImxhbmRkcnBkb3duIiwic2V0TGFuZ0RycERvd24iLCJzaG93bGFuZyIsInNldFNob3dMYW5nIiwic2hvd2V4Y2hhbmdlIiwic2V0U2hvd0V4Y2hhbmdlIiwidG9nZ2xlTGFuZ0Ryb3BEb3duIiwicHJldiIsInRvZ2dsZUxhbmdTZXQiLCJ0b2dnbGVFeGNoYW5nZXNEaXNwbGF5IiwiaGFuZGxlRXhjaGFuZ2VTZWxlY3QiLCJsYW5ndWFnZSIsImhhbmRsZUxhbmd1YWdlU2VsZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwic2V0dGluZ3MiLCJpZCIsImNsb3NlIiwib25DbGljayIsIm9uRXhjaGFuZ2VTZWxlY3QiLCJzZWxlY3RlZHZhbHVlIiwib25MYW5ndWFnZVNlbGVjdCIsInNldHRpbmdzYyIsImhlYWRlciIsImgyIiwic2V0dGluZ3NsaXN0Iiwic2V0dGluZ3NsaXN0bWFpbiIsInNldHRpbmdzbGlzdG1haW5jIiwic2V0dGluZ3Njb24iLCJzZXR0aW5nc2NvbmEiLCJzZXR0aW5nc2RldCIsInNldHRpbmdzbmFtZSIsInNldHRpbmdzY29uYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Settings.tsx\n"));

/***/ })

});