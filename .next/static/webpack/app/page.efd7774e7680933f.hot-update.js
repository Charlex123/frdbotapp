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

/***/ "(app-pages-browser)/./src/app/styles/global.css":
/*!***********************************!*\
  !*** ./src/app/styles/global.css ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2a64e271bd95\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R5bGVzL2dsb2JhbC5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc3R5bGVzL2dsb2JhbC5jc3M/Yzk4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjJhNjRlMjcxYmQ5NVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/TapComponent.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/TapComponent.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tapcomponent.module.css */ \"(app-pages-browser)/./src/app/styles/tapcomponent.module.css\");\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_Boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Boost */ \"(app-pages-browser)/./src/app/components/Boost.tsx\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider */ \"(app-pages-browser)/./src/app/provider.tsx\");\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimatedText */ \"(app-pages-browser)/./src/app/components/AnimatedText.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst TapComponent = ()=>{\n    _s();\n    const [animations, setAnimations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bounce, setBounce] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { user } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram)();\n    const { appuser, fetchAndUpdateUser } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser)();\n    const apiUrl = \"https://webappbackend.fifareward.io/\" || 0;\n    const handleImageClick = async (e)=>{\n        // if (!user) {\n        //   console.error('User not found');\n        //   return;\n        // }\n        // const chat_id = user.id;\n        const chat_id = 730149343;\n        const imgRect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - imgRect.left;\n        const y = e.clientY - imgRect.top;\n        const id = Date.now();\n        const number = appuser.multiplier; // Set the exact number to be displayed\n        setAnimations((prev)=>[\n                ...prev,\n                {\n                    id,\n                    x,\n                    y,\n                    number\n                }\n            ]);\n        // update total points\n        try {\n            const response0 = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/gettotalpoints\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response0.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const datatp = await response0.json();\n            const newTotalPoints = datatp.totalpoints + number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatetotalpoints\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    totalpoints: newTotalPoints\n                })\n            });\n            const response1 = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/getdailypointscounter\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response1.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response1.json();\n            const newdailypointscounter = data.dailypointscounter - number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatedailypointscounter\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    dailypointscounter: newdailypointscounter\n                })\n            });\n            // Refresh context here\n            await fetchAndUpdateUser(730149343);\n        } catch (error) {\n            console.error(\"Failed to update total points:\", error);\n        }\n        // Trigger the combined bounce animation\n        setBounce(true);\n        setTimeout(()=>setBounce(false), 100); // Remove the class after the animation duration\n    };\n    const handleAnimationEnd = (id)=>{\n        setAnimations((prev)=>prev.filter((anim)=>anim.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"\".concat((_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapimage), \" \").concat(bounce ? (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"bounce-all-sides\"]) : \"\"),\n                        alt: \"\",\n                        src: \"/ballwhite.png\",\n                        onClick: handleImageClick,\n                        style: {\n                            cursor: \"pointer\",\n                            outline: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    animations.map((param)=>{\n                        let { id, x, y, number } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            x: x,\n                            y: y,\n                            number: number,\n                            onAnimationEnd: ()=>handleAnimationEnd(id)\n                        }, id, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined),\n            appuser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Boost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                dailypoints: appuser.dailypoints,\n                dailypointscounter: appuser.dailypointscounter\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 122,\n                columnNumber: 18\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TapComponent, \"GvmRtcXiEzaIL1mR8Pb8rIFWEOk=\", false, function() {\n    return [\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram,\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser\n    ];\n});\n_c = TapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TapComponent);\nvar _c;\n$RefreshReg$(_c, \"TapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBRXNCO0FBQ1o7QUFDRDtBQUNEO0FBQ0M7QUFPMUMsTUFBTU0sZUFBeUI7O0lBQzdCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBeUQsRUFBRTtJQUN2RyxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQVU7SUFDOUMsTUFBTSxFQUFFVyxJQUFJLEVBQUUsR0FBR1Isc0RBQVdBO0lBQzVCLE1BQU0sRUFBRVMsT0FBTyxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHVCxxREFBVUE7SUFDbEQsTUFBTVUsU0FBU0Msc0NBQStCLElBQUk7SUFFbEQsTUFBTUcsbUJBQW1CLE9BQU9DO1FBQzlCLGVBQWU7UUFDZixxQ0FBcUM7UUFDckMsWUFBWTtRQUNaLElBQUk7UUFFSiwyQkFBMkI7UUFDM0IsTUFBTUMsVUFBVTtRQUNoQixNQUFNQyxVQUFVRixFQUFFRyxhQUFhLENBQUNDLHFCQUFxQjtRQUNyRCxNQUFNQyxJQUFJTCxFQUFFTSxPQUFPLEdBQUdKLFFBQVFLLElBQUk7UUFDbEMsTUFBTUMsSUFBSVIsRUFBRVMsT0FBTyxHQUFHUCxRQUFRUSxHQUFHO1FBQ2pDLE1BQU1DLEtBQUtDLEtBQUtDLEdBQUc7UUFDbkIsTUFBTUMsU0FBU3JCLFFBQVNzQixVQUFVLEVBQUUsdUNBQXVDO1FBRTNFMUIsY0FBYyxDQUFDMkIsT0FBUzttQkFDbkJBO2dCQUNIO29CQUFFTDtvQkFBSU47b0JBQUdHO29CQUFHTTtnQkFBTzthQUNwQjtRQUVELHNCQUFzQjtRQUN0QixJQUFJO1lBQ0YsTUFBTUcsWUFBWSxNQUFNQyxNQUFNLEdBQXVCakIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSxvQkFBa0I7Z0JBQzdFa0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFDQSxJQUFJLENBQUNILFVBQVVJLEVBQUUsRUFBRTtnQkFDakIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTUMsU0FBUyxNQUFNTixVQUFVTyxJQUFJO1lBQ25DLE1BQU1DLGlCQUFpQkYsT0FBT0csV0FBVyxHQUFHWjtZQUU1QyxNQUFNSSxNQUFNLEdBQXVCakIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSx1QkFBcUI7Z0JBQzlEa0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBTyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVILGFBQWFEO2dCQUFlO1lBQ3JEO1lBRUEsTUFBTUssWUFBWSxNQUFNWixNQUFNLEdBQXVCakIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSwyQkFBeUI7Z0JBQ3BGa0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFDQSxJQUFJLENBQUNVLFVBQVVULEVBQUUsRUFBRTtnQkFDakIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTVMsT0FBTyxNQUFNRCxVQUFVTixJQUFJO1lBQ2pDLE1BQU1RLHdCQUF3QkQsS0FBS0Usa0JBQWtCLEdBQUduQjtZQUV4RCxNQUFNSSxNQUFNLEdBQXVCakIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSw4QkFBNEI7Z0JBQ3JFa0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBTyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVJLG9CQUFvQkQ7Z0JBQXNCO1lBQ25FO1lBRUEsdUJBQXVCO1lBQ3ZCLE1BQU10QyxtQkFBbUI7UUFDM0IsRUFBRSxPQUFPd0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsa0NBQWtDQTtRQUNsRDtRQUlBLHdDQUF3QztRQUN4QzNDLFVBQVU7UUFDVjZDLFdBQVcsSUFBTTdDLFVBQVUsUUFBUSxNQUFNLGdEQUFnRDtJQUMzRjtJQUVBLE1BQU04QyxxQkFBcUIsQ0FBQzFCO1FBQzFCdEIsY0FBYyxDQUFDMkIsT0FBU0EsS0FBS3NCLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLNUIsRUFBRSxLQUFLQTtJQUM1RDtJQUVBLHFCQUNFLDhEQUFDNkI7UUFBSUMsV0FBVzNELDRFQUFVOzswQkFDeEIsOERBQUMwRDtnQkFBSUMsV0FBVzNELDZFQUFXOztrQ0FDekIsOERBQUM4RDt3QkFDQ0gsV0FBVyxHQUFzQm5ELE9BQW5CUixpRkFBZSxFQUFDLEtBQTRDLE9BQXpDUSxTQUFTUiw0RkFBMEIsR0FBRzt3QkFDdkVnRSxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKQyxTQUFTakQ7d0JBQ1RrRCxPQUFPOzRCQUFFQyxRQUFROzRCQUFXQyxTQUFTO3dCQUFPOzs7Ozs7b0JBRTdDL0QsV0FBV2dFLEdBQUcsQ0FBQzs0QkFBQyxFQUFFekMsRUFBRSxFQUFFTixDQUFDLEVBQUVHLENBQUMsRUFBRU0sTUFBTSxFQUFFOzZDQUNuQyw4REFBQzVCLHFEQUFZQTs0QkFFWG1CLEdBQUdBOzRCQUNIRyxHQUFHQTs0QkFDSE0sUUFBUUE7NEJBQ1J1QyxnQkFBZ0IsSUFBTWhCLG1CQUFtQjFCOzJCQUpwQ0E7Ozs7Ozs7Ozs7OztZQVFWbEIsd0JBQVUsOERBQUNWLDZEQUFLQTtnQkFBQ3VFLGFBQWE3RCxRQUFRNkQsV0FBVztnQkFBRXJCLG9CQUFvQnhDLFFBQVF3QyxrQkFBa0I7Ozs7OzRCQUFNOzs7Ozs7O0FBRzlHO0dBOUdNOUM7O1FBR2FILGtEQUFXQTtRQUNZQyxpREFBVUE7OztLQUo5Q0U7QUFnSE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1RhcENvbXBvbmVudC50c3g/Y2FjNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdGFwY29tcG9uZW50Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCb29zdCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Cb29zdFwiO1xuaW1wb3J0IHsgdXNlVGVsZWdyYW0gfSBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZUFwcFVzZXIgfSBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcbmltcG9ydCBBbmltYXRlZFRleHQgZnJvbSBcIi4vQW5pbWF0ZWRUZXh0XCI7XG5cbmludGVyZmFjZSBUYXBDb21wb25lbnRQcm9wcyB7XG4gIHRvdGFsUG9pbnRzOiBudW1iZXI7XG4gIHNldFRvdGFsUG9pbnRzOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+Pjtcbn1cblxuY29uc3QgVGFwQ29tcG9uZW50OiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2FuaW1hdGlvbnMsIHNldEFuaW1hdGlvbnNdID0gdXNlU3RhdGU8eyBpZDogbnVtYmVyOyB4OiBudW1iZXI7IHk6IG51bWJlcjsgbnVtYmVyOiBudW1iZXIgfVtdPihbXSk7XG4gIGNvbnN0IFtib3VuY2UsIHNldEJvdW5jZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVGVsZWdyYW0oKTtcbiAgY29uc3QgeyBhcHB1c2VyLCBmZXRjaEFuZFVwZGF0ZVVzZXIgfSA9IHVzZUFwcFVzZXIoKTtcbiAgY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDo0MDAwJztcblxuICBjb25zdCBoYW5kbGVJbWFnZUNsaWNrID0gYXN5bmMgKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEltYWdlRWxlbWVudD4pID0+IHtcbiAgICAvLyBpZiAoIXVzZXIpIHtcbiAgICAvLyAgIGNvbnNvbGUuZXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XG4gICAgLy8gICByZXR1cm47XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgY2hhdF9pZCA9IHVzZXIuaWQ7XG4gICAgY29uc3QgY2hhdF9pZCA9IDczMDE0OTM0MztcbiAgICBjb25zdCBpbWdSZWN0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSBpbWdSZWN0LmxlZnQ7XG4gICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIGltZ1JlY3QudG9wO1xuICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBudW1iZXIgPSBhcHB1c2VyIS5tdWx0aXBsaWVyOyAvLyBTZXQgdGhlIGV4YWN0IG51bWJlciB0byBiZSBkaXNwbGF5ZWRcblxuICAgIHNldEFuaW1hdGlvbnMoKHByZXYpID0+IFtcbiAgICAgIC4uLnByZXYsXG4gICAgICB7IGlkLCB4LCB5LCBudW1iZXIgfVxuICAgIF0pO1xuXG4gICAgLy8gdXBkYXRlIHRvdGFsIHBvaW50c1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZTAgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy8ke2NoYXRfaWR9L2dldHRvdGFscG9pbnRzYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXNwb25zZTAub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YXRwID0gYXdhaXQgcmVzcG9uc2UwLmpzb24oKTtcbiAgICAgIGNvbnN0IG5ld1RvdGFsUG9pbnRzID0gZGF0YXRwLnRvdGFscG9pbnRzICsgbnVtYmVyO1xuXG4gICAgICBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy8ke2NoYXRfaWR9L3VwZGF0ZXRvdGFscG9pbnRzYCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0b3RhbHBvaW50czogbmV3VG90YWxQb2ludHMgfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UxID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9hcGkvdXNlcnMvJHtjaGF0X2lkfS9nZXRkYWlseXBvaW50c2NvdW50ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBpZiAoIXJlc3BvbnNlMS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UxLmpzb24oKTtcbiAgICAgIGNvbnN0IG5ld2RhaWx5cG9pbnRzY291bnRlciA9IGRhdGEuZGFpbHlwb2ludHNjb3VudGVyIC0gbnVtYmVyO1xuXG4gICAgICBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy8ke2NoYXRfaWR9L3VwZGF0ZWRhaWx5cG9pbnRzY291bnRlcmAsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZGFpbHlwb2ludHNjb3VudGVyOiBuZXdkYWlseXBvaW50c2NvdW50ZXIgfSksXG4gICAgICB9KTtcblxuICAgICAgLy8gUmVmcmVzaCBjb250ZXh0IGhlcmVcbiAgICAgIGF3YWl0IGZldGNoQW5kVXBkYXRlVXNlcig3MzAxNDkzNDMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHRvdGFsIHBvaW50czonLCBlcnJvcik7XG4gICAgfVxuXG4gICBcblxuICAgIC8vIFRyaWdnZXIgdGhlIGNvbWJpbmVkIGJvdW5jZSBhbmltYXRpb25cbiAgICBzZXRCb3VuY2UodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRCb3VuY2UoZmFsc2UpLCAxMDApOyAvLyBSZW1vdmUgdGhlIGNsYXNzIGFmdGVyIHRoZSBhbmltYXRpb24gZHVyYXRpb25cbiAgfTtcblxuICBjb25zdCBoYW5kbGVBbmltYXRpb25FbmQgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHNldEFuaW1hdGlvbnMoKHByZXYpID0+IHByZXYuZmlsdGVyKChhbmltKSA9PiBhbmltLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXBjfT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRhcGltYWdlfSAke2JvdW5jZSA/IHN0eWxlc1snYm91bmNlLWFsbC1zaWRlcyddIDogJyd9YH1cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIHNyYz1cIi9iYWxsd2hpdGUucG5nXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbWFnZUNsaWNrfVxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgLz5cbiAgICAgICAge2FuaW1hdGlvbnMubWFwKCh7IGlkLCB4LCB5LCBudW1iZXIgfSkgPT4gKFxuICAgICAgICAgIDxBbmltYXRlZFRleHRcbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgeT17eX1cbiAgICAgICAgICAgIG51bWJlcj17bnVtYmVyfVxuICAgICAgICAgICAgb25BbmltYXRpb25FbmQ9eygpID0+IGhhbmRsZUFuaW1hdGlvbkVuZChpZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHthcHB1c2VyID8gPEJvb3N0IGRhaWx5cG9pbnRzPXthcHB1c2VyLmRhaWx5cG9pbnRzfSBkYWlseXBvaW50c2NvdW50ZXI9e2FwcHVzZXIuZGFpbHlwb2ludHNjb3VudGVyfS8+IDogJyd9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJCb29zdCIsInVzZVRlbGVncmFtIiwidXNlQXBwVXNlciIsIkFuaW1hdGVkVGV4dCIsIlRhcENvbXBvbmVudCIsImFuaW1hdGlvbnMiLCJzZXRBbmltYXRpb25zIiwiYm91bmNlIiwic2V0Qm91bmNlIiwidXNlciIsImFwcHVzZXIiLCJmZXRjaEFuZFVwZGF0ZVVzZXIiLCJhcGlVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImhhbmRsZUltYWdlQ2xpY2siLCJlIiwiY2hhdF9pZCIsImltZ1JlY3QiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJpZCIsIkRhdGUiLCJub3ciLCJudW1iZXIiLCJtdWx0aXBsaWVyIiwicHJldiIsInJlc3BvbnNlMCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIm9rIiwiRXJyb3IiLCJkYXRhdHAiLCJqc29uIiwibmV3VG90YWxQb2ludHMiLCJ0b3RhbHBvaW50cyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UxIiwiZGF0YSIsIm5ld2RhaWx5cG9pbnRzY291bnRlciIsImRhaWx5cG9pbnRzY291bnRlciIsImVycm9yIiwiY29uc29sZSIsInNldFRpbWVvdXQiLCJoYW5kbGVBbmltYXRpb25FbmQiLCJmaWx0ZXIiLCJhbmltIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFwIiwidGFwYyIsImltZyIsInRhcGltYWdlIiwiYWx0Iiwic3JjIiwib25DbGljayIsInN0eWxlIiwiY3Vyc29yIiwib3V0bGluZSIsIm1hcCIsIm9uQW5pbWF0aW9uRW5kIiwiZGFpbHlwb2ludHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TapComponent.tsx\n"));

/***/ })

});