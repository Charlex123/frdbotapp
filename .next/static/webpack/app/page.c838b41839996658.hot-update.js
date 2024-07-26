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

/***/ "(app-pages-browser)/./src/app/components/TapComponent.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/TapComponent.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tapcomponent.module.css */ \"(app-pages-browser)/./src/app/styles/tapcomponent.module.css\");\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_Boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Boost */ \"(app-pages-browser)/./src/app/components/Boost.tsx\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider */ \"(app-pages-browser)/./src/app/provider.tsx\");\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimatedText */ \"(app-pages-browser)/./src/app/components/AnimatedText.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TapComponent = ()=>{\n    _s();\n    const [animations, setAnimations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [sum, setSum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [bounce, setBounce] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { appuser } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser)();\n    const { user } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram)();\n    const apiUrl = \"http://localhost:4000\" || 0;\n    const handleImageClick = async (e)=>{\n        const imgRect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - imgRect.left;\n        const y = e.clientY - imgRect.top;\n        const id = Date.now();\n        const number = appuser.multiplier; // Set the exact number to be displayed\n        setAnimations((prev)=>[\n                ...prev,\n                {\n                    id,\n                    x,\n                    y,\n                    number\n                }\n            ]);\n        try {\n            const response = await fetch(\"\".concat(apiUrl, \"/api/users/730149343/gettotalpoints\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response.json();\n            console.log(\" t points data\", data);\n            const newTotalPoints = data.totalpoints + number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/730149343/updatetotalpoints\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    totalpoints: newTotalPoints\n                })\n            });\n            Re;\n        } catch (error) {\n            console.error(\"Failed to update total points:\", error);\n        }\n        // Trigger the combined bounce animation\n        setBounce(true);\n        setTimeout(()=>setBounce(false), 1000); // Remove the class after the animation duration\n    };\n    const handleAnimationEnd = (id)=>{\n        setAnimations((prev)=>prev.filter((anim)=>anim.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"\".concat((_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapimage), \" \").concat(bounce ? (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"bounce-all-sides\"]) : \"\"),\n                        alt: \"\",\n                        src: \"/ballwhite.png\",\n                        onClick: handleImageClick,\n                        style: {\n                            cursor: \"pointer\",\n                            outline: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, undefined),\n                    animations.map((param)=>{\n                        let { id, x, y, number } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            x: x,\n                            y: y,\n                            number: number,\n                            onAnimationEnd: ()=>handleAnimationEnd(id)\n                        }, id, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Boost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                dailypoints: appuser.dailypoints\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TapComponent, \"5RkxMBeqRW/GYAvZ8ZNuyx0GNcM=\", false, function() {\n    return [\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser,\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram\n    ];\n});\n_c = TapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TapComponent);\nvar _c;\n$RefreshReg$(_c, \"TapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBRXNCO0FBQ1o7QUFDVztBQUNaO0FBRzFDLE1BQU1NLGVBQXlCOztJQUM3QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQXlELEVBQUU7SUFDdkcsTUFBTSxDQUFDUyxLQUFLQyxPQUFPLEdBQUdWLCtDQUFRQSxDQUFTO0lBQ3ZDLE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBVTtJQUM5QyxNQUFNLEVBQUVhLE9BQU8sRUFBRSxHQUFHVixxREFBVUE7SUFDOUIsTUFBTSxFQUFFVyxJQUFJLEVBQUUsR0FBR1Ysc0RBQVdBO0lBQzVCLE1BQU1XLFNBQVNDLHVCQUErQixJQUFJO0lBRWxELE1BQU1HLG1CQUFtQixPQUFPQztRQUM5QixNQUFNQyxVQUFVRCxFQUFFRSxhQUFhLENBQUNDLHFCQUFxQjtRQUNyRCxNQUFNQyxJQUFJSixFQUFFSyxPQUFPLEdBQUdKLFFBQVFLLElBQUk7UUFDbEMsTUFBTUMsSUFBSVAsRUFBRVEsT0FBTyxHQUFHUCxRQUFRUSxHQUFHO1FBQ2pDLE1BQU1DLEtBQUtDLEtBQUtDLEdBQUc7UUFDbkIsTUFBTUMsU0FBU3BCLFFBQVNxQixVQUFVLEVBQUUsdUNBQXVDO1FBRTNFMUIsY0FBYyxDQUFDMkIsT0FBUzttQkFDbkJBO2dCQUNIO29CQUFFTDtvQkFBSU47b0JBQUdHO29CQUFHTTtnQkFBTzthQUNwQjtRQUdELElBQUk7WUFDRixNQUFNRyxXQUFXLE1BQU1DLE1BQU0sR0FBVSxPQUFQdEIsUUFBTyx3Q0FBc0M7Z0JBQzNFdUIsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFQSxJQUFJLENBQUNILFNBQVNJLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDQyxRQUFRQyxHQUFHLENBQUMsa0JBQWlCSDtZQUM3QixNQUFNSSxpQkFBaUJKLEtBQUtLLFdBQVcsR0FBR2Q7WUFFMUMsTUFBTUksTUFBTSxHQUFVLE9BQVB0QixRQUFPLDJDQUF5QztnQkFDN0R1QixRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FTLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUgsYUFBYUQ7Z0JBQWU7WUFDckQ7WUFDQUs7UUFDRixFQUFFLE9BQU9DLE9BQU87WUFDZFIsUUFBUVEsS0FBSyxDQUFDLGtDQUFrQ0E7UUFDbEQ7UUFFQSx3Q0FBd0M7UUFDeEN4QyxVQUFVO1FBQ1Z5QyxXQUFXLElBQU16QyxVQUFVLFFBQVEsT0FBTyxnREFBZ0Q7SUFDNUY7SUFFQSxNQUFNMEMscUJBQXFCLENBQUN4QjtRQUMxQnRCLGNBQWMsQ0FBQzJCLE9BQVNBLEtBQUtvQixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBSzFCLEVBQUUsS0FBS0E7SUFDNUQ7SUFFQSxxQkFDRSw4REFBQzJCO1FBQUlDLFdBQVd6RCw0RUFBVTs7MEJBRXRCLDhEQUFDd0Q7Z0JBQUlDLFdBQVd6RCw2RUFBVzs7a0NBQ3ZCLDhEQUFDNEQ7d0JBQUlILFdBQVcsR0FBc0IvQyxPQUFuQlYsaUZBQWUsRUFBQyxLQUE0QyxPQUF6Q1UsU0FBU1YsNEZBQTBCLEdBQUc7d0JBQU04RCxLQUFJO3dCQUFHQyxLQUFJO3dCQUFrQkMsU0FBUzlDO3dCQUM1SCtDLE9BQU87NEJBQUVDLFFBQVE7NEJBQVdDLFNBQVM7d0JBQU87Ozs7OztvQkFDM0M3RCxXQUFXOEQsR0FBRyxDQUFDOzRCQUFDLEVBQUV2QyxFQUFFLEVBQUVOLENBQUMsRUFBRUcsQ0FBQyxFQUFFTSxNQUFNLEVBQUU7NkNBQ25DLDhEQUFDNUIscURBQVlBOzRCQUVYbUIsR0FBR0E7NEJBQ0hHLEdBQUdBOzRCQUNITSxRQUFRQTs0QkFDUnFDLGdCQUFnQixJQUFNaEIsbUJBQW1CeEI7MkJBSnBDQTs7Ozs7Ozs7Ozs7OzBCQVFULDhEQUFDNUIsNkRBQUtBO2dCQUFDcUUsYUFBYTFELFFBQVMwRCxXQUFXOzs7Ozs7Ozs7Ozs7QUFHaEQ7R0E3RU1qRTs7UUFJZ0JILGlEQUFVQTtRQUNiQyxrREFBV0E7OztLQUx4QkU7QUErRU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1RhcENvbXBvbmVudC50c3g/Y2FjNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdGFwY29tcG9uZW50Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCb29zdCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Cb29zdFwiO1xuaW1wb3J0IHsgdXNlQXBwVXNlciwgdXNlVGVsZWdyYW0gfSBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcbmltcG9ydCBBbmltYXRlZFRleHQgZnJvbSBcIi4vQW5pbWF0ZWRUZXh0XCI7XG5cblxuY29uc3QgVGFwQ29tcG9uZW50OiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2FuaW1hdGlvbnMsIHNldEFuaW1hdGlvbnNdID0gdXNlU3RhdGU8eyBpZDogbnVtYmVyOyB4OiBudW1iZXI7IHk6IG51bWJlcjsgbnVtYmVyOiBudW1iZXIgfVtdPihbXSk7XG4gIGNvbnN0IFtzdW0sIHNldFN1bV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbYm91bmNlLCBzZXRCb3VuY2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCB7IGFwcHVzZXIgfSA9IHVzZUFwcFVzZXIoKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VUZWxlZ3JhbSgpO1xuICBjb25zdCBhcGlVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnO1xuXG4gIGNvbnN0IGhhbmRsZUltYWdlQ2xpY2sgPSBhc3luYyAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MSW1hZ2VFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGltZ1JlY3QgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIGltZ1JlY3QubGVmdDtcbiAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gaW1nUmVjdC50b3A7XG4gICAgY29uc3QgaWQgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IG51bWJlciA9IGFwcHVzZXIhLm11bHRpcGxpZXI7IC8vIFNldCB0aGUgZXhhY3QgbnVtYmVyIHRvIGJlIGRpc3BsYXllZFxuXG4gICAgc2V0QW5pbWF0aW9ucygocHJldikgPT4gW1xuICAgICAgLi4ucHJldixcbiAgICAgIHsgaWQsIHgsIHksIG51bWJlciB9XG4gICAgXSk7XG4gICAgXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy83MzAxNDkzNDMvZ2V0dG90YWxwb2ludHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiIHQgcG9pbnRzIGRhdGFcIixkYXRhKVxuICAgICAgY29uc3QgbmV3VG90YWxQb2ludHMgPSBkYXRhLnRvdGFscG9pbnRzICsgbnVtYmVyO1xuXG4gICAgICBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy83MzAxNDkzNDMvdXBkYXRldG90YWxwb2ludHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRvdGFscG9pbnRzOiBuZXdUb3RhbFBvaW50cyB9KSxcbiAgICAgIH0pO1xuICAgICAgUmVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSB0b3RhbCBwb2ludHM6JywgZXJyb3IpO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgdGhlIGNvbWJpbmVkIGJvdW5jZSBhbmltYXRpb25cbiAgICBzZXRCb3VuY2UodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRCb3VuY2UoZmFsc2UpLCAxMDAwKTsgLy8gUmVtb3ZlIHRoZSBjbGFzcyBhZnRlciB0aGUgYW5pbWF0aW9uIGR1cmF0aW9uXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQW5pbWF0aW9uRW5kID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRBbmltYXRpb25zKChwcmV2KSA9PiBwcmV2LmZpbHRlcigoYW5pbSkgPT4gYW5pbS5pZCAhPT0gaWQpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFwfT5cbiAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnVuaW9uSWNvbn0gYWx0PVwiXCIgc3JjPVwiL3VuaW9uLnN2Z1wiIC8+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhcGN9PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2Ake3N0eWxlcy50YXBpbWFnZX0gJHtib3VuY2UgPyBzdHlsZXNbJ2JvdW5jZS1hbGwtc2lkZXMnXSA6ICcnfWB9IGFsdD1cIlwiIHNyYz1cIi9iYWxsd2hpdGUucG5nXCIgIG9uQ2xpY2s9e2hhbmRsZUltYWdlQ2xpY2t9XG4gICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBvdXRsaW5lOiAnbm9uZScgfX0vPlxuICAgICAgICB7YW5pbWF0aW9ucy5tYXAoKHsgaWQsIHgsIHksIG51bWJlciB9KSA9PiAoXG4gICAgICAgICAgPEFuaW1hdGVkVGV4dFxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICB5PXt5fVxuICAgICAgICAgICAgbnVtYmVyPXtudW1iZXJ9XG4gICAgICAgICAgICBvbkFuaW1hdGlvbkVuZD17KCkgPT4gaGFuZGxlQW5pbWF0aW9uRW5kKGlkKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCb29zdCBkYWlseXBvaW50cz17YXBwdXNlciEuZGFpbHlwb2ludHN9Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhcENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIkJvb3N0IiwidXNlQXBwVXNlciIsInVzZVRlbGVncmFtIiwiQW5pbWF0ZWRUZXh0IiwiVGFwQ29tcG9uZW50IiwiYW5pbWF0aW9ucyIsInNldEFuaW1hdGlvbnMiLCJzdW0iLCJzZXRTdW0iLCJib3VuY2UiLCJzZXRCb3VuY2UiLCJhcHB1c2VyIiwidXNlciIsImFwaVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiaGFuZGxlSW1hZ2VDbGljayIsImUiLCJpbWdSZWN0IiwiY3VycmVudFRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJjbGllbnRYIiwibGVmdCIsInkiLCJjbGllbnRZIiwidG9wIiwiaWQiLCJEYXRlIiwibm93IiwibnVtYmVyIiwibXVsdGlwbGllciIsInByZXYiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJuZXdUb3RhbFBvaW50cyIsInRvdGFscG9pbnRzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJSZSIsImVycm9yIiwic2V0VGltZW91dCIsImhhbmRsZUFuaW1hdGlvbkVuZCIsImZpbHRlciIsImFuaW0iLCJkaXYiLCJjbGFzc05hbWUiLCJ0YXAiLCJ0YXBjIiwiaW1nIiwidGFwaW1hZ2UiLCJhbHQiLCJzcmMiLCJvbkNsaWNrIiwic3R5bGUiLCJjdXJzb3IiLCJvdXRsaW5lIiwibWFwIiwib25BbmltYXRpb25FbmQiLCJkYWlseXBvaW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TapComponent.tsx\n"));

/***/ })

});