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

/***/ "(app-pages-browser)/./src/app/components/LanguagesDropDown.tsx":
/*!**************************************************!*\
  !*** ./src/app/components/LanguagesDropDown.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/languagesdropdown.module.css */ \"(app-pages-browser)/./src/app/styles/languagesdropdown.module.css\");\n/* harmony import */ var _styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronRight!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst LanguageDropdown = (param)=>{\n    let { selectedvalue, toggleLangSet } = param;\n    _s();\n    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(selectedvalue);\n    const handleChange = (value)=>{\n        console.log(\"clecked\", value);\n        setSelectedValue(value);\n        if (toggleLangSet) {\n            toggleLangSet();\n        }\n    };\n    const languages = [\n        {\n            value: \"de\",\n            label: \"Deutsch (de)\"\n        },\n        {\n            value: \"en\",\n            label: \"English (en)\"\n        },\n        {\n            value: \"es\",\n            label: \"Espanol (es)\"\n        },\n        {\n            value: \"fr\",\n            label: \"Francais (fr)\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().language),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Select Language\"\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagelist),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagelistmain),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagelistmainc),\n                            children: languages.map((lang, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagecon),\n                                    onClick: ()=>handleChange(lang.value),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagecona),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagedet),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languagename),\n                                                    children: lang.label\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 45\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_languagesdropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().languageconb),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaChevronRight, {}, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 33\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/LanguagesDropDown.tsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(LanguageDropdown, \"OrogspTUpHsZQcrEh1sfOw74qWE=\");\n_c = LanguageDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageDropdown);\nvar _c;\n$RefreshReg$(_c, \"LanguageDropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9MYW5ndWFnZXNEcm9wRG93bi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dDO0FBRW1CO0FBQ1g7QUFZaEQsTUFBTUksbUJBQW9EO1FBQUMsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUU7O0lBRXZGLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFTSTtJQUUzRCxNQUFNSSxlQUFlLENBQUNDO1FBQ2xCQyxRQUFRQyxHQUFHLENBQUMsV0FBVUY7UUFDdEJGLGlCQUFpQkU7UUFDakIsSUFBSUosZUFBZTtZQUNmQTtRQUNKO0lBQ0o7SUFFQSxNQUFNTyxZQUFzQjtRQUN4QjtZQUFFSCxPQUFPO1lBQU1JLE9BQU87UUFBZTtRQUNyQztZQUFFSixPQUFPO1lBQU1JLE9BQU87UUFBZTtRQUNyQztZQUFFSixPQUFPO1lBQU1JLE9BQU87UUFBZTtRQUNyQztZQUFFSixPQUFPO1lBQU1JLE9BQU87UUFBZ0I7S0FDekM7SUFFRCxxQkFDSTtrQkFDSSw0RUFBQ0M7WUFBSUMsV0FBV2Qsc0ZBQWU7OzhCQUMzQiw4REFBQ2dCOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNIO29CQUFJQyxXQUFXZCwwRkFBbUI7OEJBQy9CLDRFQUFDYTt3QkFBSUMsV0FBV2QsOEZBQXVCO2tDQUNuQyw0RUFBQ2E7NEJBQUlDLFdBQVdkLCtGQUF3QjtzQ0FDbkNXLFVBQVVTLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbEIsOERBQUNUO29DQUFJQyxXQUFXZCx5RkFBa0I7b0NBQWN3QixTQUFTLElBQU1qQixhQUFhYyxLQUFLYixLQUFLOztzREFDbEYsOERBQUNLOzRDQUFJQyxXQUFXZCwwRkFBbUI7c0RBQy9CLDRFQUFDYTtnREFBSUMsV0FBV2QseUZBQWtCOzBEQUM5Qiw0RUFBQ2E7b0RBQUlDLFdBQVdkLDBGQUFtQjs4REFDOUJxQixLQUFLVCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O3NEQUl2Qiw4REFBQ0M7NENBQUlDLFdBQVdkLDBGQUFtQjtzREFDL0IsNEVBQUNDLGdHQUFjQTs7Ozs7Ozs7Ozs7bUNBVGtCcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CekU7R0E5Q01wQjtLQUFBQTtBQWdETiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9MYW5ndWFnZXNEcm9wRG93bi50c3g/ZDkxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9sYW5ndWFnZXNkcm9wZG93bi5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgRmFDaGV2cm9uUmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbmludGVyZmFjZSBPcHRpb24ge1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbn1cbiAgXG5pbnRlcmZhY2UgTGFuZ3VhZ2VEcm9wZG93blByb3BzIHtcbiAgICBzZWxlY3RlZHZhbHVlOiBzdHJpbmc7XG4gICAgdG9nZ2xlTGFuZ1NldD86ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IExhbmd1YWdlRHJvcGRvd246IE5leHRQYWdlPExhbmd1YWdlRHJvcGRvd25Qcm9wcz4gPSAoeyBzZWxlY3RlZHZhbHVlLCB0b2dnbGVMYW5nU2V0IH0pID0+IHtcblxuICAgIGNvbnN0IFtzZWxlY3RlZFZhbHVlLCBzZXRTZWxlY3RlZFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oc2VsZWN0ZWR2YWx1ZSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xlY2tlZCcsdmFsdWUpXG4gICAgICAgIHNldFNlbGVjdGVkVmFsdWUodmFsdWUpO1xuICAgICAgICBpZiAodG9nZ2xlTGFuZ1NldCkge1xuICAgICAgICAgICAgdG9nZ2xlTGFuZ1NldCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGxhbmd1YWdlczogT3B0aW9uW10gPSBbXG4gICAgICAgIHsgdmFsdWU6ICdkZScsIGxhYmVsOiAnRGV1dHNjaCAoZGUpJyB9LFxuICAgICAgICB7IHZhbHVlOiAnZW4nLCBsYWJlbDogJ0VuZ2xpc2ggKGVuKScgfSxcbiAgICAgICAgeyB2YWx1ZTogJ2VzJywgbGFiZWw6ICdFc3Bhbm9sIChlcyknIH0sXG4gICAgICAgIHsgdmFsdWU6ICdmcicsIGxhYmVsOiAnRnJhbmNhaXMgKGZyKScgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VhZ2V9PlxuICAgICAgICAgICAgICAgIDxoMj5TZWxlY3QgTGFuZ3VhZ2U8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VhZ2VsaXN0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZWxpc3RtYWlufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VhZ2VsaXN0bWFpbmN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZXMubWFwKChsYW5nLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhbmd1YWdlY29ufSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2UobGFuZy52YWx1ZSl9PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhbmd1YWdlY29uYX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZWRldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VhZ2VuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5nLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5ndWFnZWNvbmJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZURyb3Bkb3duO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJGYUNoZXZyb25SaWdodCIsIkxhbmd1YWdlRHJvcGRvd24iLCJzZWxlY3RlZHZhbHVlIiwidG9nZ2xlTGFuZ1NldCIsInNlbGVjdGVkVmFsdWUiLCJzZXRTZWxlY3RlZFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibGFuZ3VhZ2VzIiwibGFiZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJsYW5ndWFnZSIsImgyIiwibGFuZ3VhZ2VsaXN0IiwibGFuZ3VhZ2VsaXN0bWFpbiIsImxhbmd1YWdlbGlzdG1haW5jIiwibWFwIiwibGFuZyIsImluZGV4IiwibGFuZ3VhZ2Vjb24iLCJvbkNsaWNrIiwibGFuZ3VhZ2Vjb25hIiwibGFuZ3VhZ2VkZXQiLCJsYW5ndWFnZW5hbWUiLCJsYW5ndWFnZWNvbmIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/LanguagesDropDown.tsx\n"));

/***/ })

});