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

/***/ "(app-pages-browser)/./src/app/components/Header.tsx":
/*!***************************************!*\
  !*** ./src/app/components/Header.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/header.module.css */ \"(app-pages-browser)/./src/app/styles/header.module.css\");\n/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_FaGear_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaGear!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _TopHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopHeader */ \"(app-pages-browser)/./src/app/components/TopHeader.tsx\");\n/* harmony import */ var _Exchanges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Exchanges */ \"(app-pages-browser)/./src/app/components/Exchanges.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = (param)=>{\n    let { className = \"\" } = param;\n    _s();\n    const [exchanges, setExchanges] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleExchangesDisplay = ()=>{\n        console.log(\"cli\");\n        setExchanges((prev)=>!prev);\n    };\n    const toggleSettings = ()=>{\n        console.log(\"Settings clicked\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            exchanges && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Exchanges__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                toggleDisplay: toggleExchangesDisplay\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                lineNumber: 28,\n                columnNumber: 27\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().head),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().profile),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/frdlogo300.png\",\n                                alt: \"user profile\",\n                                width: 30,\n                                height: 30,\n                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().pimage)\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().badge),\n                                children: \"Charles More (Gamer Supa)\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: [\n                            (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().userinfo),\n                            className\n                        ].join(\" \"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().level),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().levelTitle),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().currentLevel),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().epic),\n                                                        children: \"Epic\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 39,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().levelIcon),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().levelImageIcon),\n                                                            loading: \"lazy\",\n                                                            alt: \"\",\n                                                            src: \"/vector-1.svg\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                            lineNumber: 41,\n                                                            columnNumber: 37\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 40,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().level610),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: \"Level \"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 50,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().span),\n                                                        children: \"6/10\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().rectangleParent),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().frameChild)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().levelBackground)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().details),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        onClick: toggleExchangesDisplay,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/union-2.svg\",\n                                            alt: \"pic\"\n                                        }, void 0, false, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().b_earn),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: \"profit per hour\"\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().bst_earn),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: \"/group-9-2.svg\",\n                                                            alt: \"img\",\n                                                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().bimg)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                            lineNumber: 67,\n                                                            columnNumber: 38\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: \"+680\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: \"/group-9-2.svg\",\n                                                            alt: \"img\",\n                                                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().bimg)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 38\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGear_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__.FaGear, {\n                                            size: 22,\n                                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().settingsicon),\n                                            onClick: toggleSettings\n                                        }, void 0, false, {\n                                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/Header.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Header, \"1KEW/8jdUhUXIV5BQnXzJ+Z/tnI=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNpQztBQUVGO0FBQ2tCO0FBQ1I7QUFDTDtBQUNBO0FBTXBDLE1BQU1NLFNBQStCO1FBQUMsRUFBRUMsWUFBWSxFQUFFLEVBQUU7O0lBQ3BELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNVSx5QkFBeUI7UUFDM0JDLFFBQVFDLEdBQUcsQ0FBQztRQUNaSCxhQUFhSSxDQUFBQSxPQUFRLENBQUNBO0lBQzFCO0lBRUEsTUFBTUMsaUJBQWlCO1FBQ25CSCxRQUFRQyxHQUFHLENBQUM7SUFDaEI7SUFFQSxxQkFDSTs7WUFDS0osMkJBQWEsOERBQUNILGtEQUFTQTtnQkFBQ1UsZUFBZUw7Ozs7OzswQkFDeEMsOERBQUNNO2dCQUFJVCxXQUFXTCx1RUFBVzs7a0NBQ3ZCLDhEQUFDRSxrREFBU0E7Ozs7O2tDQUNWLDhEQUFDWTt3QkFBSVQsV0FBV0wsMEVBQWM7OzBDQUMxQiw4REFBQ0Qsa0RBQUtBO2dDQUFDa0IsS0FBSTtnQ0FBa0JDLEtBQUk7Z0NBQWVDLE9BQU87Z0NBQUlDLFFBQVE7Z0NBQUlmLFdBQVdMLHlFQUFhOzs7Ozs7MENBQy9GLDhEQUFDYztnQ0FBSVQsV0FBV0wsd0VBQVk7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FFbEMsOERBQUN1Qjt3QkFBSWxCLFdBQVc7NEJBQUNMLDJFQUFlOzRCQUFFSzt5QkFBVSxDQUFDb0IsSUFBSSxDQUFDOzswQ0FDOUMsOERBQUNYO2dDQUFJVCxXQUFXTCx3RUFBWTs7a0RBQ3hCLDhEQUFDYzt3Q0FBSVQsV0FBV0wsNkVBQWlCOzswREFDN0IsOERBQUNjO2dEQUFJVCxXQUFXTCwrRUFBbUI7O2tFQUMvQiw4REFBQ2M7d0RBQUlULFdBQVdMLHVFQUFXO2tFQUFFOzs7Ozs7a0VBQzdCLDhEQUFDYzt3REFBSVQsV0FBV0wsNEVBQWdCO2tFQUM1Qiw0RUFBQytCOzREQUNHMUIsV0FBV0wsaUZBQXFCOzREQUNoQ2lDLFNBQVE7NERBQ1JmLEtBQUk7NERBQ0pELEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQUloQiw4REFBQ0g7Z0RBQUlULFdBQVdMLDJFQUFlOztrRUFDM0IsOERBQUNtQztrRUFBTzs7Ozs7O2tFQUNSLDhEQUFDQTt3REFBSzlCLFdBQVdMLHVFQUFXO2tFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBR3RDLDhEQUFDYzt3Q0FBSVQsV0FBV0wsa0ZBQXNCOzswREFDbEMsOERBQUNjO2dEQUFJVCxXQUFXTCw2RUFBaUI7Ozs7OzswREFDakMsOERBQUNjO2dEQUFJVCxXQUFXTCxrRkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJOUMsOERBQUNjO2dDQUFJVCxXQUFXTCwwRUFBYzs7a0RBQzFCLDhEQUFDd0M7d0NBQU9DLE1BQUs7d0NBQVNDLFNBQVNsQztrREFDM0IsNEVBQUN1Qjs0Q0FBSWQsS0FBSTs0Q0FBZUMsS0FBSTs7Ozs7Ozs7Ozs7a0RBRWhDLDhEQUFDSjt3Q0FBSVQsV0FBV0wseUVBQWE7OzBEQUN6Qiw4REFBQ2M7MERBQUk7Ozs7OzswREFDTCw4REFBQ0E7Z0RBQUlULFdBQVdMLDJFQUFlOztrRUFDM0IsOERBQUNjO2tFQUFJLDRFQUFDaUI7NERBQUlkLEtBQUk7NERBQWlCQyxLQUFJOzREQUFNYixXQUFXTCx1RUFBVzs7Ozs7Ozs7Ozs7a0VBQy9ELDhEQUFDYztrRUFBSTs7Ozs7O2tFQUNMLDhEQUFDQTtrRUFBSSw0RUFBQ2lCOzREQUFJZCxLQUFJOzREQUFpQkMsS0FBSTs0REFBTWIsV0FBV0wsdUVBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUd2RSw4REFBQ2M7a0RBQ0csNEVBQUNiLGlGQUFNQTs0Q0FBQzZDLE1BQU07NENBQUl6QyxXQUFXTCwrRUFBbUI7NENBQUUwQyxTQUFTOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdkY7R0FsRU1SO0tBQUFBO0FBb0VOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4PzhmZDEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9oZWFkZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgRmFHZWFyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuaW1wb3J0IFRvcEhlYWRlciBmcm9tIFwiLi9Ub3BIZWFkZXJcIjtcbmltcG9ydCBFeGNoYW5nZXMgZnJvbSBcIi4vRXhjaGFuZ2VzXCI7XG5cbmV4cG9ydCB0eXBlIEhlYWRlclR5cGUgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn07XG5cbmNvbnN0IEhlYWRlcjogTmV4dFBhZ2U8SGVhZGVyVHlwZT4gPSAoeyBjbGFzc05hbWUgPSBcIlwiIH0pID0+IHtcbiAgICBjb25zdCBbZXhjaGFuZ2VzLCBzZXRFeGNoYW5nZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlRXhjaGFuZ2VzRGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlcIilcbiAgICAgICAgc2V0RXhjaGFuZ2VzKHByZXYgPT4gIXByZXYpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVNldHRpbmdzID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZ3MgY2xpY2tlZCcpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7ZXhjaGFuZ2VzICYmIDxFeGNoYW5nZXMgdG9nZ2xlRGlzcGxheT17dG9nZ2xlRXhjaGFuZ2VzRGlzcGxheX0gLz59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxuICAgICAgICAgICAgICAgIDxUb3BIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ZyZGxvZ28zMDAucG5nXCIgYWx0PVwidXNlciBwcm9maWxlXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSBjbGFzc05hbWU9e3N0eWxlcy5waW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9PkNoYXJsZXMgTW9yZSAoR2FtZXIgU3VwYSk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17W3N0eWxlcy51c2VyaW5mbywgY2xhc3NOYW1lXS5qb2luKFwiIFwiKX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGV2ZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZXZlbFRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRMZXZlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXBpY30+RXBpYzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxldmVsSWNvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGV2ZWxJbWFnZUljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3ZlY3Rvci0xLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxldmVsNjEwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2BMZXZlbCBgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn0+Ni8xMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWN0YW5nbGVQYXJlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZnJhbWVDaGlsZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxldmVsQmFja2dyb3VuZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlRXhjaGFuZ2VzRGlzcGxheX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdW5pb24tMi5zdmdcIiBhbHQ9XCJwaWNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJfZWFybn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5wcm9maXQgcGVyIGhvdXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJzdF9lYXJufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW1nIHNyYz1cIi9ncm91cC05LTIuc3ZnXCIgYWx0PVwiaW1nXCIgY2xhc3NOYW1lPXtzdHlsZXMuYmltZ30gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4rNjgwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCIvZ3JvdXAtOS0yLnN2Z1wiIGFsdD1cImltZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmJpbWd9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhR2VhciBzaXplPXsyMn0gY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NpY29ufSBvbkNsaWNrPXt0b2dnbGVTZXR0aW5nc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJzdHlsZXMiLCJGYUdlYXIiLCJUb3BIZWFkZXIiLCJFeGNoYW5nZXMiLCJIZWFkZXIiLCJjbGFzc05hbWUiLCJleGNoYW5nZXMiLCJzZXRFeGNoYW5nZXMiLCJ0b2dnbGVFeGNoYW5nZXNEaXNwbGF5IiwiY29uc29sZSIsImxvZyIsInByZXYiLCJ0b2dnbGVTZXR0aW5ncyIsInRvZ2dsZURpc3BsYXkiLCJkaXYiLCJoZWFkIiwicHJvZmlsZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicGltYWdlIiwiYmFkZ2UiLCJuYXYiLCJ1c2VyaW5mbyIsImpvaW4iLCJsZXZlbCIsImxldmVsVGl0bGUiLCJjdXJyZW50TGV2ZWwiLCJlcGljIiwibGV2ZWxJY29uIiwiaW1nIiwibGV2ZWxJbWFnZUljb24iLCJsb2FkaW5nIiwibGV2ZWw2MTAiLCJzcGFuIiwicmVjdGFuZ2xlUGFyZW50IiwiZnJhbWVDaGlsZCIsImxldmVsQmFja2dyb3VuZCIsImRldGFpbHMiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImJfZWFybiIsImJzdF9lYXJuIiwiYmltZyIsInNpemUiLCJzZXR0aW5nc2ljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Header.tsx\n"));

/***/ })

});