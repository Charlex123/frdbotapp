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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/settings.module.css */ \"(app-pages-browser)/./src/app/styles/settings.module.css\");\n/* harmony import */ var _styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronRight,FaXmark!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _components_TopHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TopHeader */ \"(app-pages-browser)/./src/app/components/TopHeader.tsx\");\n/* harmony import */ var _LanguagesDropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LanguagesDropDown */ \"(app-pages-browser)/./src/app/components/LanguagesDropDown.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Settings = (param)=>{\n    let { toggleDisplay } = param;\n    _s();\n    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [landdrpdown, setLangDrpDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleChange = (event)=>{\n        setSelectedValue(event.target.value);\n    };\n    const toggleLangDropDown = ()=>{\n        setLangDrpDown((prev)=>!prev);\n    };\n    const options = [\n        {\n            value: \"option1\",\n            label: \"Option 1\"\n        },\n        {\n            value: \"option2\",\n            label: \"Option 2\"\n        },\n        {\n            value: \"option3\",\n            label: \"Option 3\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settings),\n            id: \"settings\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().close),\n                    onClick: toggleDisplay,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.FaXmark, {}, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, undefined),\n                landdrpdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LanguagesDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    selectedvalue: \"lang\"\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 29\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsc),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"settings\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingslist),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingslistmain),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingslistmainc),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscon),\n                                            onClick: toggleLangDropDown,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscona),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsname),\n                                                            children: [\n                                                                \"Select Language: \",\n                                                                \"English\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                            lineNumber: 49,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsconb),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.FaChevronRight, {}, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 55,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscon),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscona),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsname),\n                                                            children: \"Choose Exchange\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                            lineNumber: 61,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsconb),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.FaChevronRight, {}, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscon),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingscona),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsdet),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsname),\n                                                            children: \"Delete Account\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                            lineNumber: 71,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().settingsconb),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_FaXmark_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.FaChevronRight, {}, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Settings.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Settings, \"ZfvNNT/oFeTxRqGo3GADJ9Qm7oM=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDaUM7QUFFaUI7QUFFUztBQUNYO0FBQ0c7QUFLbkQsTUFBTU0sV0FBbUM7UUFBQyxFQUFDQyxhQUFhLEVBQUM7O0lBQ3JELE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFTO0lBQzNELE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNWSxlQUFlLENBQUNDO1FBQ2xCSixpQkFBaUJJLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUN2QztJQUVBLE1BQU1DLHFCQUFxQjtRQUN2QkwsZUFBZU0sQ0FBQUEsT0FBUSxDQUFDQTtJQUM1QjtJQUNBLE1BQU1DLFVBQVU7UUFDWjtZQUFFSCxPQUFPO1lBQVdJLE9BQU87UUFBVztRQUN0QztZQUFFSixPQUFPO1lBQVdJLE9BQU87UUFBVztRQUN0QztZQUFFSixPQUFPO1lBQVdJLE9BQU87UUFBVztLQUN2QztJQUVMLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFXcEIsNkVBQWU7WUFBRXNCLElBQUc7OzhCQUM5Qiw4REFBQ0g7b0JBQUlDLFdBQVdwQiwwRUFBWTtvQkFBRXdCLFNBQVNsQjs4QkFDbkMsNEVBQUNKLGtHQUFPQTs7Ozs7Ozs7OztnQkFFWE8sNkJBQWUsOERBQUNMLDBEQUFnQkE7b0JBQUNxQixlQUFpQjs7Ozs7OzhCQUNuRCw4REFBQ3RCLDZEQUFTQTs7Ozs7OEJBQ1YsOERBQUNnQjtvQkFBSUMsV0FBV3BCLDhFQUFnQjs7c0NBQzVCLDhEQUFDbUI7NEJBQUlDLFdBQVdwQiwyRUFBYTtzQ0FDekIsNEVBQUM0QjswQ0FBRzs7Ozs7Ozs7Ozs7c0NBR1IsOERBQUNUOzRCQUFJQyxXQUFXcEIsaUZBQW1CO3NDQUMvQiw0RUFBQ21CO2dDQUFJQyxXQUFXcEIscUZBQXVCOzBDQUNuQyw0RUFBQ21CO29DQUFJQyxXQUFXcEIsc0ZBQXdCOztzREFDcEMsOERBQUNtQjs0Q0FBSUMsV0FBV3BCLGdGQUFrQjs0Q0FBRXdCLFNBQVNUOzs4REFDekMsOERBQUNJO29EQUFJQyxXQUFXcEIsaUZBQW1COzhEQUMvQiw0RUFBQ21CO3dEQUFJQyxXQUFXcEIsZ0ZBQWtCO2tFQUM5Qiw0RUFBQ21COzREQUFJQyxXQUFXcEIsaUZBQW1COztnRUFBRTtnRUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQUkzQiw4REFBQ21CO29EQUFJQyxXQUFXcEIsaUZBQW1COzhEQUMvQiw0RUFBQ0MseUdBQWNBOzs7Ozs7Ozs7Ozs7Ozs7O3NEQUd2Qiw4REFBQ2tCOzRDQUFJQyxXQUFXcEIsZ0ZBQWtCOzs4REFDOUIsOERBQUNtQjtvREFBSUMsV0FBV3BCLGlGQUFtQjs4REFDL0IsNEVBQUNtQjt3REFBSUMsV0FBV3BCLGdGQUFrQjtrRUFDOUIsNEVBQUNtQjs0REFBSUMsV0FBV3BCLGlGQUFtQjtzRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs4REFHN0MsOERBQUNtQjtvREFBSUMsV0FBV3BCLGlGQUFtQjs4REFDL0IsNEVBQUNDLHlHQUFjQTs7Ozs7Ozs7Ozs7Ozs7OztzREFHdkIsOERBQUNrQjs0Q0FBSUMsV0FBV3BCLGdGQUFrQjs7OERBQzlCLDhEQUFDbUI7b0RBQUlDLFdBQVdwQixpRkFBbUI7OERBQy9CLDRFQUFDbUI7d0RBQUlDLFdBQVdwQixnRkFBa0I7a0VBQzlCLDRFQUFDbUI7NERBQUlDLFdBQVdwQixpRkFBbUI7c0VBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OERBRzdDLDhEQUFDbUI7b0RBQUlDLFdBQVdwQixpRkFBbUI7OERBQy9CLDRFQUFDQyx5R0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVduRDtHQXpFTUk7S0FBQUE7QUEyRU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1NldHRpbmdzLnRzeD9mNWExIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NldHRpbmdzLm1vZHVsZS5jc3NcIlxuaW1wb3J0IEJvdHRvbU5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3R0b21OYXZcIjtcbmltcG9ydCB7IEZhQ2hldnJvblJpZ2h0LCBGYVhtYXJrLCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcbmltcG9ydCBUb3BIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9wSGVhZGVyXCI7XG5pbXBvcnQgTGFuZ3VhZ2VEcm9wZG93biBmcm9tIFwiLi9MYW5ndWFnZXNEcm9wRG93blwiO1xuXG5leHBvcnQgdHlwZSBTZXR0aW5nc1R5cGUgPSB7XG4gICAgdG9nZ2xlRGlzcGxheT86ICgpID0+IHZvaWQ7XG59XG5jb25zdCBTZXR0aW5nczogTmV4dFBhZ2U8U2V0dGluZ3NUeXBlPiA9ICh7dG9nZ2xlRGlzcGxheX0pID0+IHtcbiAgICBjb25zdCBbc2VsZWN0ZWRWYWx1ZSwgc2V0U2VsZWN0ZWRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgICBjb25zdCBbbGFuZGRycGRvd24sIHNldExhbmdEcnBEb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9nZ2xlTGFuZ0Ryb3BEb3duID0gKCkgPT4ge1xuICAgICAgICBzZXRMYW5nRHJwRG93bihwcmV2ID0+ICFwcmV2KVxuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICB7IHZhbHVlOiAnb3B0aW9uMScsIGxhYmVsOiAnT3B0aW9uIDEnIH0sXG4gICAgICAgIHsgdmFsdWU6ICdvcHRpb24yJywgbGFiZWw6ICdPcHRpb24gMicgfSxcbiAgICAgICAgeyB2YWx1ZTogJ29wdGlvbjMnLCBsYWJlbDogJ09wdGlvbiAzJyB9LFxuICAgICAgXTtcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc30gaWQ9XCJzZXR0aW5nc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX0gb25DbGljaz17dG9nZ2xlRGlzcGxheX0+XG4gICAgICAgICAgICAgICAgPEZhWG1hcmsgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xhbmRkcnBkb3duICYmIDxMYW5ndWFnZURyb3Bkb3duIHNlbGVjdGVkdmFsdWUgPSB7J2xhbmcnfSAvPiB9XG4gICAgICAgICAgICA8VG9wSGVhZGVyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzY30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8aDI+c2V0dGluZ3M8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NsaXN0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2xpc3RtYWlufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NsaXN0bWFpbmN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3Njb259IG9uQ2xpY2s9e3RvZ2dsZUxhbmdEcm9wRG93bn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3Njb25hfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NkZXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgTGFuZ3VhZ2U6IHtgRW5nbGlzaGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3Njb25ifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzY29ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2NvbmF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2RldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc25hbWV9PkNob29zZSBFeGNoYW5nZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzY29uYn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc2Nvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3Njb25hfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NkZXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NuYW1lfT5EZWxldGUgQWNjb3VudDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzY29uYn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiRmFDaGV2cm9uUmlnaHQiLCJGYVhtYXJrIiwiVG9wSGVhZGVyIiwiTGFuZ3VhZ2VEcm9wZG93biIsIlNldHRpbmdzIiwidG9nZ2xlRGlzcGxheSIsInNlbGVjdGVkVmFsdWUiLCJzZXRTZWxlY3RlZFZhbHVlIiwibGFuZGRycGRvd24iLCJzZXRMYW5nRHJwRG93biIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0b2dnbGVMYW5nRHJvcERvd24iLCJwcmV2Iiwib3B0aW9ucyIsImxhYmVsIiwiZGl2IiwiY2xhc3NOYW1lIiwic2V0dGluZ3MiLCJpZCIsImNsb3NlIiwib25DbGljayIsInNlbGVjdGVkdmFsdWUiLCJzZXR0aW5nc2MiLCJoZWFkZXIiLCJoMiIsInNldHRpbmdzbGlzdCIsInNldHRpbmdzbGlzdG1haW4iLCJzZXR0aW5nc2xpc3RtYWluYyIsInNldHRpbmdzY29uIiwic2V0dGluZ3Njb25hIiwic2V0dGluZ3NkZXQiLCJzZXR0aW5nc25hbWUiLCJzZXR0aW5nc2NvbmIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Settings.tsx\n"));

/***/ })

});