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

/***/ "(app-pages-browser)/./src/app/components/Settings.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/Settings.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/settings.module.css */ \"(app-pages-browser)/./src/app/styles/settings.module.css\");\n/* harmony import */ var _styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronRight,FaXmark!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _components_TopHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TopHeader */ \"(app-pages-browser)/./src/app/components/TopHeader.tsx\");\n/* harmony import */ var _LanguagesDropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LanguagesDropDown */ \"(app-pages-browser)/./src/app/components/LanguagesDropDown.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Settings = (param)=>{\n    let { toggleDisplay } = param;\n    _s();\n    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [landdrpdown, setLangDrpDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showlang, setShowLang] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleChange = (event)=>{\n        setSelectedValue(event.target.value);\n    };\n    const toggleLangDropDown = ()=>{\n        setLangDrpDown((prev)=>!prev);\n    };\n    const toggleSettingsLang = ()=>{\n        setShowLang((prev)=>!prev);\n    };\n    const options = [\n        {\n            value: \"option1\",\n            label: \"Option 1\"\n        },\n        {\n            value: \"option2\",\n            label: \"Option 2\"\n        },\n        {\n            value: \"option3\",\n            label: \"Option 3\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settings),\n            id: \"settings\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().close),\n                    onClick: toggleDisplay,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.FaXmark, {}, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, undefined),\n                landdrpdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LanguagesDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    selectedvalue: selectedValue,\n                    toggleLangSet: toggleSettingsLang\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 29\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsc),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"settings\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingslist),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingslistmain),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingslistmainc),\n                                    children: [\n                                        showlang && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscon),\n                                            onClick: toggleLangDropDown,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscona),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsname),\n                                                            children: [\n                                                                \"Select Language\",\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    children: \"English\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                                    lineNumber: 58,\n                                                                    columnNumber: 45\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                            lineNumber: 56,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 55,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsconb),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.FaChevronRight, {}, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscon),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscona),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsname),\n                                                            children: [\n                                                                \"Choose Exchange\",\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    children: \"Binance\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                                    lineNumber: 71,\n                                                                    columnNumber: 45\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsconb),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.FaChevronRight, {}, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscon),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscona),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsname),\n                                                            children: \"Delete Account\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsconb),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.FaChevronRight, {}, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Settings, \"LGzMl7In3aRpsuc/eRrPskKMWSE=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNEM7QUFFTTtBQUVTO0FBQ1g7QUFDRztBQUtuRCxNQUFNTSxXQUFtQztRQUFDLEVBQUNDLGFBQWEsRUFBQzs7SUFDckQsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1QsK0NBQVFBLENBQVM7SUFDM0QsTUFBTSxDQUFDVSxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1ksVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNYyxlQUFlLENBQUNDO1FBQ2xCTixpQkFBaUJNLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUN2QztJQUVBLE1BQU1DLHFCQUFxQjtRQUN2QlAsZUFBZVEsQ0FBQUEsT0FBUSxDQUFDQTtJQUM1QjtJQUVBLE1BQU1DLHFCQUFxQjtRQUN2QlAsWUFBWU0sQ0FBQUEsT0FBUSxDQUFDQTtJQUN6QjtJQUVBLE1BQU1FLFVBQVU7UUFDWjtZQUFFSixPQUFPO1lBQVdLLE9BQU87UUFBVztRQUN0QztZQUFFTCxPQUFPO1lBQVdLLE9BQU87UUFBVztRQUN0QztZQUFFTCxPQUFPO1lBQVdLLE9BQU87UUFBVztLQUN2QztJQUVMLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFXdkIsNkVBQWU7WUFBRXlCLElBQUc7OzhCQUM5Qiw4REFBQ0g7b0JBQUlDLFdBQVd2QiwwRUFBWTtvQkFBRTJCLFNBQVNyQjs4QkFDbkMsNEVBQUNKLGtHQUFPQTs7Ozs7Ozs7OztnQkFFWE8sNkJBQWUsOERBQUNMLDBEQUFnQkE7b0JBQUN3QixlQUFpQnJCO29CQUFlc0IsZUFBaUJWOzs7Ozs7OEJBQ25GLDhEQUFDaEIsNkRBQVNBOzs7Ozs4QkFDViw4REFBQ21CO29CQUFJQyxXQUFXdkIsOEVBQWdCOztzQ0FDNUIsOERBQUNzQjs0QkFBSUMsV0FBV3ZCLDJFQUFhO3NDQUN6Qiw0RUFBQ2dDOzBDQUFHOzs7Ozs7Ozs7OztzQ0FHUiw4REFBQ1Y7NEJBQUlDLFdBQVd2QixpRkFBbUI7c0NBQy9CLDRFQUFDc0I7Z0NBQUlDLFdBQVd2QixxRkFBdUI7MENBQ25DLDRFQUFDc0I7b0NBQUlDLFdBQVd2QixzRkFBd0I7O3dDQUNuQ1csMEJBQ0QsOERBQUNXOzRDQUFJQyxXQUFXdkIsZ0ZBQWtCOzRDQUFFMkIsU0FBU1Y7OzhEQUN6Qyw4REFBQ0s7b0RBQUlDLFdBQVd2QixpRkFBbUI7OERBQy9CLDRFQUFDc0I7d0RBQUlDLFdBQVd2QixnRkFBa0I7a0VBQzlCLDRFQUFDc0I7NERBQUlDLFdBQVd2QixpRkFBbUI7O2dFQUFFOzhFQUVqQyw4REFBQ3NCOzhFQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQUluQiw4REFBQ0E7b0RBQUlDLFdBQVd2QixpRkFBbUI7OERBQy9CLDRFQUFDQyx5R0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBR3ZCLDhEQUFDcUI7NENBQUlDLFdBQVd2QixnRkFBa0I7OzhEQUM5Qiw4REFBQ3NCO29EQUFJQyxXQUFXdkIsaUZBQW1COzhEQUMvQiw0RUFBQ3NCO3dEQUFJQyxXQUFXdkIsZ0ZBQWtCO2tFQUM5Qiw0RUFBQ3NCOzREQUFJQyxXQUFXdkIsaUZBQW1COztnRUFBRTs4RUFFakMsOERBQUNzQjs4RUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4REFJakIsOERBQUNBO29EQUFJQyxXQUFXdkIsaUZBQW1COzhEQUMvQiw0RUFBQ0MseUdBQWNBOzs7Ozs7Ozs7Ozs7Ozs7O3NEQUd2Qiw4REFBQ3FCOzRDQUFJQyxXQUFXdkIsZ0ZBQWtCOzs4REFDOUIsOERBQUNzQjtvREFBSUMsV0FBV3ZCLGlGQUFtQjs4REFDL0IsNEVBQUNzQjt3REFBSUMsV0FBV3ZCLGdGQUFrQjtrRUFDOUIsNEVBQUNzQjs0REFBSUMsV0FBV3ZCLGlGQUFtQjtzRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs4REFHN0MsOERBQUNzQjtvREFBSUMsV0FBV3ZCLGlGQUFtQjs4REFDL0IsNEVBQUNDLHlHQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV25EO0dBcEZNSTtLQUFBQTtBQXNGTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MudHN4P2Y1YTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zZXR0aW5ncy5tb2R1bGUuY3NzXCJcbmltcG9ydCBCb3R0b21OYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvQm90dG9tTmF2XCI7XG5pbXBvcnQgeyBGYUNoZXZyb25SaWdodCwgRmFYbWFyaywgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5pbXBvcnQgVG9wSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1RvcEhlYWRlclwiO1xuaW1wb3J0IExhbmd1YWdlRHJvcGRvd24gZnJvbSBcIi4vTGFuZ3VhZ2VzRHJvcERvd25cIjtcblxuZXhwb3J0IHR5cGUgU2V0dGluZ3NUeXBlID0ge1xuICAgIHRvZ2dsZURpc3BsYXk/OiAoKSA9PiB2b2lkO1xufVxuY29uc3QgU2V0dGluZ3M6IE5leHRQYWdlPFNldHRpbmdzVHlwZT4gPSAoe3RvZ2dsZURpc3BsYXl9KSA9PiB7XG4gICAgY29uc3QgW3NlbGVjdGVkVmFsdWUsIHNldFNlbGVjdGVkVmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gICAgY29uc3QgW2xhbmRkcnBkb3duLCBzZXRMYW5nRHJwRG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dsYW5nLCBzZXRTaG93TGFuZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9nZ2xlTGFuZ0Ryb3BEb3duID0gKCkgPT4ge1xuICAgICAgICBzZXRMYW5nRHJwRG93bihwcmV2ID0+ICFwcmV2KVxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVNldHRpbmdzTGFuZyA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd0xhbmcocHJldiA9PiAhcHJldilcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICB7IHZhbHVlOiAnb3B0aW9uMScsIGxhYmVsOiAnT3B0aW9uIDEnIH0sXG4gICAgICAgIHsgdmFsdWU6ICdvcHRpb24yJywgbGFiZWw6ICdPcHRpb24gMicgfSxcbiAgICAgICAgeyB2YWx1ZTogJ29wdGlvbjMnLCBsYWJlbDogJ09wdGlvbiAzJyB9LFxuICAgICAgXTtcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc30gaWQ9XCJzZXR0aW5nc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX0gb25DbGljaz17dG9nZ2xlRGlzcGxheX0+XG4gICAgICAgICAgICAgICAgPEZhWG1hcmsgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xhbmRkcnBkb3duICYmIDxMYW5ndWFnZURyb3Bkb3duIHNlbGVjdGVkdmFsdWUgPSB7c2VsZWN0ZWRWYWx1ZX0gdG9nZ2xlTGFuZ1NldCA9IHt0b2dnbGVTZXR0aW5nc0xhbmd9IC8+IH1cbiAgICAgICAgICAgIDxUb3BIZWFkZXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NjfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5zZXR0aW5nczwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2xpc3R9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzbGlzdG1haW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2xpc3RtYWluY30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dsYW5nICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3Njb259IG9uQ2xpY2s9e3RvZ2dsZUxhbmdEcm9wRG93bn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3Njb25hfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NkZXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IExhbmd1YWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntgRW5nbGlzaGB9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3Njb25ifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2Nvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3Njb25hfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NkZXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hvb3NlIEV4Y2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+QmluYW5jZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzY29uYn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2Nvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3Njb25hfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NkZXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NuYW1lfT5EZWxldGUgQWNjb3VudDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzY29uYn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiRmFDaGV2cm9uUmlnaHQiLCJGYVhtYXJrIiwiVG9wSGVhZGVyIiwiTGFuZ3VhZ2VEcm9wZG93biIsIlNldHRpbmdzIiwidG9nZ2xlRGlzcGxheSIsInNlbGVjdGVkVmFsdWUiLCJzZXRTZWxlY3RlZFZhbHVlIiwibGFuZGRycGRvd24iLCJzZXRMYW5nRHJwRG93biIsInNob3dsYW5nIiwic2V0U2hvd0xhbmciLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidG9nZ2xlTGFuZ0Ryb3BEb3duIiwicHJldiIsInRvZ2dsZVNldHRpbmdzTGFuZyIsIm9wdGlvbnMiLCJsYWJlbCIsImRpdiIsImNsYXNzTmFtZSIsInNldHRpbmdzIiwiaWQiLCJjbG9zZSIsIm9uQ2xpY2siLCJzZWxlY3RlZHZhbHVlIiwidG9nZ2xlTGFuZ1NldCIsInNldHRpbmdzYyIsImhlYWRlciIsImgyIiwic2V0dGluZ3NsaXN0Iiwic2V0dGluZ3NsaXN0bWFpbiIsInNldHRpbmdzbGlzdG1haW5jIiwic2V0dGluZ3Njb24iLCJzZXR0aW5nc2NvbmEiLCJzZXR0aW5nc2RldCIsInNldHRpbmdzbmFtZSIsInNldHRpbmdzY29uYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Settings.tsx\n"));

/***/ })

});