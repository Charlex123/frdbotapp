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

/***/ "(app-pages-browser)/./src/app/components/LanguagesDropDown.tsx":
/*!**************************************************!*\
  !*** ./src/app/components/LanguagesDropDown.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/languagesdropdown.module.css */ \"(app-pages-browser)/./src/app/styles/languagesdropdown.module.css\");\n/* harmony import */ var _styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronRight!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst LanguageDropdown = (param)=>{\n    let { selectedvalue, toggleLangSet } = param;\n    _s();\n    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(selectedvalue);\n    const handleChange = (event)=>{\n        setSelectedValue(event.target.value);\n    };\n    const languages = [\n        {\n            value: \"de\",\n            label: \"Deutsch (de)\"\n        },\n        {\n            value: \"en\",\n            label: \"English (en)\"\n        },\n        {\n            value: \"es\",\n            label: \"Espanol (es)\"\n        },\n        {\n            value: \"fr\",\n            label: \"Francais (fr)\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().language),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Select Language\"\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagelist),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagelistmain),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagelistmainc),\n                            children: [\n                                languages.map((lang, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagecon),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagecona),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagedet),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagename),\n                                                        children: lang.label\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                                        lineNumber: 44,\n                                                        columnNumber: 45\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languageconb),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaChevronRight, {}, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 33\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagecon),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagecona),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagedet),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagename),\n                                                    children: \"Choose Exchange\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languageconb),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaChevronRight, {}, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagecon),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagecona),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagedet),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagename),\n                                                    children: \"Delete Account\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languageconb),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaChevronRight, {}, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(LanguageDropdown, \"OrogspTUpHsZQcrEh1sfOw74qWE=\");\n_c = LanguageDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageDropdown);\nvar _c;\n$RefreshReg$(_c, \"LanguageDropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9MYW5ndWFnZXNEcm9wRG93bi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dDO0FBRW1CO0FBQ1g7QUFhaEQsTUFBTUksbUJBQW9EO1FBQUMsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUU7O0lBRXZGLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFTSTtJQUUzRCxNQUFNSSxlQUFlLENBQUNDO1FBQ2xCRixpQkFBaUJFLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUN2QztJQUVBLE1BQU1DLFlBQXNCO1FBQ3hCO1lBQUVELE9BQU87WUFBTUUsT0FBTztRQUFlO1FBQ3JDO1lBQUVGLE9BQU87WUFBTUUsT0FBTztRQUFlO1FBQ3JDO1lBQUVGLE9BQU87WUFBTUUsT0FBTztRQUFlO1FBQ3JDO1lBQUVGLE9BQU87WUFBTUUsT0FBTztRQUFnQjtLQUN6QztJQUVELHFCQUNJO2tCQUNJLDRFQUFDQztZQUFJQyxXQUFXZCxzRkFBZTs7OEJBQzNCLDhEQUFDZ0I7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0g7b0JBQUlDLFdBQVdkLDBGQUFtQjs4QkFDL0IsNEVBQUNhO3dCQUFJQyxXQUFXZCw4RkFBdUI7a0NBQ25DLDRFQUFDYTs0QkFBSUMsV0FBV2QsK0ZBQXdCOztnQ0FDbkNXLFVBQVVTLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbEIsOERBQUNUO3dDQUFJQyxXQUFXZCx5RkFBa0I7OzBEQUM5Qiw4REFBQ2E7Z0RBQUlDLFdBQVdkLDBGQUFtQjswREFDL0IsNEVBQUNhO29EQUFJQyxXQUFXZCx5RkFBa0I7OERBQzlCLDRFQUFDYTt3REFBSUMsV0FBV2QsMEZBQW1CO2tFQUM5QnFCLEtBQUtULEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBSXZCLDhEQUFDQztnREFBSUMsV0FBV2QsMEZBQW1COzBEQUMvQiw0RUFBQ0MsZ0dBQWNBOzs7Ozs7Ozs7Ozt1Q0FUa0JxQjs7Ozs7OENBYTdDLDhEQUFDVDtvQ0FBSUMsV0FBV2QseUZBQWtCOztzREFDOUIsOERBQUNhOzRDQUFJQyxXQUFXZCwwRkFBbUI7c0RBQy9CLDRFQUFDYTtnREFBSUMsV0FBV2QseUZBQWtCOzBEQUM5Qiw0RUFBQ2E7b0RBQUlDLFdBQVdkLDBGQUFtQjs4REFBRTs7Ozs7Ozs7Ozs7Ozs7OztzREFHN0MsOERBQUNhOzRDQUFJQyxXQUFXZCwwRkFBbUI7c0RBQy9CLDRFQUFDQyxnR0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR3ZCLDhEQUFDWTtvQ0FBSUMsV0FBV2QseUZBQWtCOztzREFDOUIsOERBQUNhOzRDQUFJQyxXQUFXZCwwRkFBbUI7c0RBQy9CLDRFQUFDYTtnREFBSUMsV0FBV2QseUZBQWtCOzBEQUM5Qiw0RUFBQ2E7b0RBQUlDLFdBQVdkLDBGQUFtQjs4REFBRTs7Ozs7Ozs7Ozs7Ozs7OztzREFHN0MsOERBQUNhOzRDQUFJQyxXQUFXZCwwRkFBbUI7c0RBQy9CLDRFQUFDQyxnR0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNuRDtHQTlETUM7S0FBQUE7QUFnRU4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTGFuZ3VhZ2VzRHJvcERvd24udHN4P2Q5MTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbGFuZ3VhZ2VzZHJvcGRvd24ubW9kdWxlLmNzcydcbmltcG9ydCB7IEZhQ2hldnJvblJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5pbnRlcmZhY2UgT3B0aW9uIHtcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG59XG4gIFxuaW50ZXJmYWNlIExhbmd1YWdlRHJvcGRvd25Qcm9wcyB7XG4gICAgc2VsZWN0ZWR2YWx1ZTogc3RyaW5nO1xuICAgIC8vIG9uQ2hhbmdlOiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4gdm9pZDtcbiAgICB0b2dnbGVMYW5nU2V0PzogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgTGFuZ3VhZ2VEcm9wZG93bjogTmV4dFBhZ2U8TGFuZ3VhZ2VEcm9wZG93blByb3BzPiA9ICh7IHNlbGVjdGVkdmFsdWUsIHRvZ2dsZUxhbmdTZXQgfSkgPT4ge1xuXG4gICAgY29uc3QgW3NlbGVjdGVkVmFsdWUsIHNldFNlbGVjdGVkVmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihzZWxlY3RlZHZhbHVlKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGFuZ3VhZ2VzOiBPcHRpb25bXSA9IFtcbiAgICAgICAgeyB2YWx1ZTogJ2RlJywgbGFiZWw6ICdEZXV0c2NoIChkZSknIH0sXG4gICAgICAgIHsgdmFsdWU6ICdlbicsIGxhYmVsOiAnRW5nbGlzaCAoZW4pJyB9LFxuICAgICAgICB7IHZhbHVlOiAnZXMnLCBsYWJlbDogJ0VzcGFub2wgKGVzKScgfSxcbiAgICAgICAgeyB2YWx1ZTogJ2ZyJywgbGFiZWw6ICdGcmFuY2FpcyAoZnIpJyB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZX0+XG4gICAgICAgICAgICAgICAgPGgyPlNlbGVjdCBMYW5ndWFnZTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZWxpc3R9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhbmd1YWdlbGlzdG1haW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZWxpc3RtYWluY30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhbmd1YWdlcy5tYXAoKGxhbmcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VhZ2Vjb259IGtleT17aW5kZXh9PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhbmd1YWdlY29uYX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZWRldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VhZ2VuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5nLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZWNvbmJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VhZ2Vjb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhbmd1YWdlY29uYX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhbmd1YWdlZGV0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhbmd1YWdlbmFtZX0+Q2hvb3NlIEV4Y2hhbmdlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VhZ2Vjb25ifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhbmd1YWdlY29ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZWNvbmF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZWRldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZW5hbWV9PkRlbGV0ZSBBY2NvdW50PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VhZ2Vjb25ifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VEcm9wZG93bjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiRmFDaGV2cm9uUmlnaHQiLCJMYW5ndWFnZURyb3Bkb3duIiwic2VsZWN0ZWR2YWx1ZSIsInRvZ2dsZUxhbmdTZXQiLCJzZWxlY3RlZFZhbHVlIiwic2V0U2VsZWN0ZWRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJsYW5ndWFnZXMiLCJsYWJlbCIsImRpdiIsImNsYXNzTmFtZSIsImxhbmd1YWdlIiwiaDIiLCJsYW5ndWFnZWxpc3QiLCJsYW5ndWFnZWxpc3RtYWluIiwibGFuZ3VhZ2VsaXN0bWFpbmMiLCJtYXAiLCJsYW5nIiwiaW5kZXgiLCJsYW5ndWFnZWNvbiIsImxhbmd1YWdlY29uYSIsImxhbmd1YWdlZGV0IiwibGFuZ3VhZ2VuYW1lIiwibGFuZ3VhZ2Vjb25iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/LanguagesDropDown.tsx\n"));

/***/ })

});