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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"04ce58af89aa\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R5bGVzL2dsb2JhbC5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc3R5bGVzL2dsb2JhbC5jc3M/Yzk4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjA0Y2U1OGFmODlhYVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/TapComponent.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/TapComponent.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/tapcomponent.module.css */ \"(app-pages-browser)/./src/app/styles/tapcomponent.module.css\");\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_components_Boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/Boost */ \"(app-pages-browser)/./src/app/components/Boost.tsx\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"(app-pages-browser)/./src/app/provider.tsx\");\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AnimatedText */ \"(app-pages-browser)/./src/app/components/AnimatedText.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst TapComponent = (param)=>{\n    let { totalPoints, setTotalPoints } = param;\n    _s();\n    const [animations, setAnimations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bounce, setBounce] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { user } = (0,_provider__WEBPACK_IMPORTED_MODULE_5__.useTelegram)();\n    const [dailyPointsCounter, setDailyPointsCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { appuser, fetchAndUpdateUser } = (0,_provider__WEBPACK_IMPORTED_MODULE_5__.useAppUser)();\n    const apiUrl = \"https://webappbackend.fifareward.io/\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (appuser) {\n            setTotalPoints(appuser.totalpoints);\n            setDailyPointsCounter(appuser.dailypointscounter);\n        }\n    }, [\n        appuser\n    ]);\n    const handleImageClick = async (e)=>{\n        // if (!user) {\n        //   console.error('User not found');\n        //   return;\n        // }\n        // const chat_id = user.id;\n        const chat_id = 730149343;\n        const imgRect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - imgRect.left;\n        const y = e.clientY - imgRect.top;\n        const id = Date.now();\n        const number = appuser.multiplier; // Set the exact number to be displayed\n        setAnimations((prev)=>[\n                ...prev,\n                {\n                    id,\n                    x,\n                    y,\n                    number\n                }\n            ]);\n        // Optimistically update total points and daily points counter\n        const optimisticTotalPoints = totalPoints + number;\n        const optimisticDailyPointsCounter = dailyPointsCounter - number;\n        setTotalPoints(optimisticTotalPoints);\n        setDailyPointsCounter(optimisticDailyPointsCounter);\n        // Update total points on the backend\n        try {\n            const response0 = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/gettotalpoints\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response0.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const datatp = await response0.json();\n            const newTotalPoints = datatp.totalpoints + number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatetotalpoints\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    totalpoints: newTotalPoints\n                })\n            });\n            const response1 = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/getdailypointscounter\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response1.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response1.json();\n            const newdailypointscounter = data.dailypointscounter - number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatedailypointscounter\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    dailypointscounter: newdailypointscounter\n                })\n            });\n            // Refresh context here\n            await fetchAndUpdateUser(chat_id);\n        } catch (error) {\n            // Revert the optimistic update if the request fails\n            setTotalPoints(totalPoints - number);\n            setDailyPointsCounter(dailyPointsCounter + number);\n            console.error(\"Failed to update total points:\", error);\n        }\n        // Trigger the combined bounce animation\n        setBounce(true);\n        setTimeout(()=>setBounce(false), 100); // Remove the class after the animation duration\n    };\n    const handleAnimationEnd = (id)=>{\n        setAnimations((prev)=>prev.filter((anim)=>anim.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().tap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().tapc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"\".concat((_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().tapimage), \" \").concat(bounce ? (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"bounce-all-sides\"]) : \"\"),\n                        alt: \"\",\n                        src: \"/ballwhite.png\",\n                        onClick: handleImageClick,\n                        style: {\n                            cursor: \"pointer\",\n                            outline: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined),\n                    animations.map((param)=>{\n                        let { id, x, y, number } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            x: x,\n                            y: y,\n                            number: number,\n                            onAnimationEnd: ()=>handleAnimationEnd(id)\n                        }, id, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined),\n            appuser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Boost__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                dailypoints: appuser.dailypoints,\n                dailypointscounter: dailyPointsCounter\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 139,\n                columnNumber: 18\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n        lineNumber: 120,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TapComponent, \"WfelMgMZIJN9xgf386rq9MB43yw=\", false, function() {\n    return [\n        _provider__WEBPACK_IMPORTED_MODULE_5__.useTelegram,\n        _provider__WEBPACK_IMPORTED_MODULE_5__.useAppUser\n    ];\n});\n_c = TapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TapComponent);\nvar _c;\n$RefreshReg$(_c, \"TapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMwQjtBQUNrQjtBQUNiO0FBRXdCO0FBQ1o7QUFDRDtBQUNEO0FBQ0M7QUFPMUMsTUFBTVMsZUFBNEM7UUFBQyxFQUFFQyxXQUFXLEVBQUVDLGNBQWMsRUFBRTs7SUFDaEYsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUF5RCxFQUFFO0lBQ3ZHLE1BQU0sQ0FBQ2EsUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBVTtJQUM5QyxNQUFNLEVBQUVlLElBQUksRUFBRSxHQUFHVixzREFBV0E7SUFDNUIsTUFBTSxDQUFDVyxvQkFBb0JDLHNCQUFzQixHQUFHakIsK0NBQVFBLENBQVM7SUFDckUsTUFBTSxFQUFFa0IsT0FBTyxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHYixxREFBVUE7SUFDbEQsTUFBTWMsU0FBU0Msc0NBQStCO0lBRTlDcEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJaUIsU0FBUztZQUNYUixlQUFlUSxRQUFRTSxXQUFXO1lBQ2xDUCxzQkFBc0JDLFFBQVFPLGtCQUFrQjtRQUNsRDtJQUNGLEdBQUc7UUFBQ1A7S0FBUTtJQUVaLE1BQU1RLG1CQUFtQixPQUFPQztRQUM5QixlQUFlO1FBQ2YscUNBQXFDO1FBQ3JDLFlBQVk7UUFDWixJQUFJO1FBRUosMkJBQTJCO1FBQzNCLE1BQU1DLFVBQVU7UUFDaEIsTUFBTUMsVUFBVUYsRUFBRUcsYUFBYSxDQUFDQyxxQkFBcUI7UUFDckQsTUFBTUMsSUFBSUwsRUFBRU0sT0FBTyxHQUFHSixRQUFRSyxJQUFJO1FBQ2xDLE1BQU1DLElBQUlSLEVBQUVTLE9BQU8sR0FBR1AsUUFBUVEsR0FBRztRQUNqQyxNQUFNQyxLQUFLQyxLQUFLQyxHQUFHO1FBQ25CLE1BQU1DLFNBQVN2QixRQUFTd0IsVUFBVSxFQUFFLHVDQUF1QztRQUUzRTlCLGNBQWMsQ0FB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Ozs7OztZQVFWcEIsd0JBQVUsOERBQUNkLDZEQUFLQTtnQkFBQzRFLGFBQWE5RCxRQUFROEQsV0FBVztnQkFBRXZELG9CQUFvQlQ7Ozs7OzRCQUF5Qjs7Ozs7OztBQUd2RztHQTdITVI7O1FBR2FILGtEQUFXQTtRQUVZQyxpREFBVUE7OztLQUw5Q0U7QUErSE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1RhcENvbXBvbmVudC50c3g/Y2FjNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdGFwY29tcG9uZW50Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCb29zdCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Cb29zdFwiO1xuaW1wb3J0IHsgdXNlVGVsZWdyYW0gfSBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZUFwcFVzZXIgfSBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcbmltcG9ydCBBbmltYXRlZFRleHQgZnJvbSBcIi4vQW5pbWF0ZWRUZXh0XCI7XG5cbmludGVyZmFjZSBUYXBDb21wb25lbnRQcm9wcyB7XG4gIHRvdGFsUG9pbnRzOiBudW1iZXI7XG4gIHNldFRvdGFsUG9pbnRzOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+Pjtcbn1cblxuY29uc3QgVGFwQ29tcG9uZW50OiBOZXh0UGFnZTxUYXBDb21wb25lbnRQcm9wcz4gPSAoeyB0b3RhbFBvaW50cywgc2V0VG90YWxQb2ludHMgfSkgPT4ge1xuICBjb25zdCBbYW5pbWF0aW9ucywgc2V0QW5pbWF0aW9uc10gPSB1c2VTdGF0ZTx7IGlkOiBudW1iZXI7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBudW1iZXI6IG51bWJlciB9W10+KFtdKTtcbiAgY29uc3QgW2JvdW5jZSwgc2V0Qm91bmNlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VUZWxlZ3JhbSgpO1xuICBjb25zdCBbZGFpbHlQb2ludHNDb3VudGVyLCBzZXREYWlseVBvaW50c0NvdW50ZXJdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgeyBhcHB1c2VyLCBmZXRjaEFuZFVwZGF0ZVVzZXIgfSA9IHVzZUFwcFVzZXIoKTtcbiAgY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhcHB1c2VyKSB7XG4gICAgICBzZXRUb3RhbFBvaW50cyhhcHB1c2VyLnRvdGFscG9pbnRzKTtcbiAgICAgIHNldERhaWx5UG9pbnRzQ291bnRlcihhcHB1c2VyLmRhaWx5cG9pbnRzY291bnRlcik7XG4gICAgfVxuICB9LCBbYXBwdXNlcl0pO1xuXG4gIGNvbnN0IGhhbmRsZUltYWdlQ2xpY2sgPSBhc3luYyAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MSW1hZ2VFbGVtZW50PikgPT4ge1xuICAgIC8vIGlmICghdXNlcikge1xuICAgIC8vICAgY29uc29sZS5lcnJvcignVXNlciBub3QgZm91bmQnKTtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBjaGF0X2lkID0gdXNlci5pZDtcbiAgICBjb25zdCBjaGF0X2lkID0gNzMwMTQ5MzQzO1xuICAgIGNvbnN0IGltZ1JlY3QgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIGltZ1JlY3QubGVmdDtcbiAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gaW1nUmVjdC50b3A7XG4gICAgY29uc3QgaWQgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IG51bWJlciA9IGFwcHVzZXIhLm11bHRpcGxpZXI7IC8vIFNldCB0aGUgZXhhY3QgbnVtYmVyIHRvIGJlIGRpc3BsYXllZFxuXG4gICAgc2V0QW5pbWF0aW9ucygocHJldikgPT4gW1xuICAgICAgLi4ucHJldixcbiAgICAgIHsgaWQsIHgsIHksIG51bWJlciB9XG4gICAgXSk7XG5cbiAgICAgLy8gT3B0aW1pc3RpY2FsbHkgdXBkYXRlIHRvdGFsIHBvaW50cyBhbmQgZGFpbHkgcG9pbnRzIGNvdW50ZXJcbiAgICBjb25zdCBvcHRpbWlzdGljVG90YWxQb2ludHMgPSB0b3RhbFBvaW50cyArIG51bWJlcjtcbiAgICBjb25zdCBvcHRpbWlzdGljRGFpbHlQb2ludHNDb3VudGVyID0gZGFpbHlQb2ludHNDb3VudGVyIC0gbnVtYmVyO1xuICAgIHNldFRvdGFsUG9pbnRzKG9wdGltaXN0aWNUb3RhbFBvaW50cyk7XG4gICAgc2V0RGFpbHlQb2ludHNDb3VudGVyKG9wdGltaXN0aWNEYWlseVBvaW50c0NvdW50ZXIpO1xuXG4gICAgLy8gVXBkYXRlIHRvdGFsIHBvaW50cyBvbiB0aGUgYmFja2VuZFxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZTAgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy8ke2NoYXRfaWR9L2dldHRvdGFscG9pbnRzYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXNwb25zZTAub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YXRwID0gYXdhaXQgcmVzcG9uc2UwLmpzb24oKTtcbiAgICAgIGNvbnN0IG5ld1RvdGFsUG9pbnRzID0gZGF0YXRwLnRvdGFscG9pbnRzICsgbnVtYmVyO1xuXG4gICAgICBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy8ke2NoYXRfaWR9L3VwZGF0ZXRvdGFscG9pbnRzYCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0b3RhbHBvaW50czogbmV3VG90YWxQb2ludHMgfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UxID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9hcGkvdXNlcnMvJHtjaGF0X2lkfS9nZXRkYWlseXBvaW50c2NvdW50ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBpZiAoIXJlc3BvbnNlMS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UxLmpzb24oKTtcbiAgICAgIGNvbnN0IG5ld2RhaWx5cG9pbnRzY291bnRlciA9IGRhdGEuZGFpbHlwb2ludHNjb3VudGVyIC0gbnVtYmVyO1xuXG4gICAgICBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy8ke2NoYXRfaWR9L3VwZGF0ZWRhaWx5cG9pbnRzY291bnRlcmAsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZGFpbHlwb2ludHNjb3VudGVyOiBuZXdkYWlseXBvaW50c2NvdW50ZXIgfSksXG4gICAgICB9KTtcblxuICAgICAgLy8gUmVmcmVzaCBjb250ZXh0IGhlcmVcbiAgICAgIGF3YWl0IGZldGNoQW5kVXBkYXRlVXNlcihjaGF0X2lkKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gUmV2ZXJ0IHRoZSBvcHRpbWlzdGljIHVwZGF0ZSBpZiB0aGUgcmVxdWVzdCBmYWlsc1xuICAgICAgc2V0VG90YWxQb2ludHModG90YWxQb2ludHMgLSBudW1iZXIpO1xuICAgICAgc2V0RGFpbHlQb2ludHNDb3VudGVyKGRhaWx5UG9pbnRzQ291bnRlciArIG51bWJlcik7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHRvdGFsIHBvaW50czonLCBlcnJvcik7XG4gICAgfVxuXG4gICAgLy8gVHJpZ2dlciB0aGUgY29tYmluZWQgYm91bmNlIGFuaW1hdGlvblxuICAgIHNldEJvdW5jZSh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEJvdW5jZShmYWxzZSksIDEwMCk7IC8vIFJlbW92ZSB0aGUgY2xhc3MgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBkdXJhdGlvblxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFuaW1hdGlvbkVuZCA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0QW5pbWF0aW9ucygocHJldikgPT4gcHJldi5maWx0ZXIoKGFuaW0pID0+IGFuaW0uaWQgIT09IGlkKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhcH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhcGN9PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy50YXBpbWFnZX0gJHtib3VuY2UgPyBzdHlsZXNbJ2JvdW5jZS1hbGwtc2lkZXMnXSA6ICcnfWB9XG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICBzcmM9XCIvYmFsbHdoaXRlLnBuZ1wiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlSW1hZ2VDbGlja31cbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgb3V0bGluZTogJ25vbmUnICx9fVxuICAgICAgICAvPlxuICAgICAgICB7YW5pbWF0aW9ucy5tYXAoKHsgaWQsIHgsIHksIG51bWJlciB9KSA9PiAoXG4gICAgICAgICAgPEFuaW1hdGVkVGV4dFxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICB5PXt5fVxuICAgICAgICAgICAgbnVtYmVyPXtudW1iZXJ9XG4gICAgICAgICAgICBvbkFuaW1hdGlvbkVuZD17KCkgPT4gaGFuZGxlQW5pbWF0aW9uRW5kKGlkKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2FwcHVzZXIgPyA8Qm9vc3QgZGFpbHlwb2ludHM9e2FwcHVzZXIuZGFpbHlwb2ludHN9IGRhaWx5cG9pbnRzY291bnRlcj17ZGFpbHlQb2ludHNDb3VudGVyfSAvPiA6ICcnfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFwQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsInN0eWxlcyIsIkJvb3N0IiwidXNlVGVsZWdyYW0iLCJ1c2VBcHBVc2VyIiwiQW5pbWF0ZWRUZXh0IiwiVGFwQ29tcG9uZW50IiwidG90YWxQb2ludHMiLCJzZXRUb3RhbFBvaW50cyIsImFuaW1hdGlvbnMiLCJzZXRBbmltYXRpb25zIiwiYm91bmNlIiwic2V0Qm91bmNlIiwidXNlciIsImRhaWx5UG9pbnRzQ291bnRlciIsInNldERhaWx5UG9pbnRzQ291bnRlciIsImFwcHVzZXIiLCJmZXRjaEFuZFVwZGF0ZVVzZXIiLCJhcGlVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInRvdGFscG9pbnRzIiwiZGFpbHlwb2ludHNjb3VudGVyIiwiaGFuZGxlSW1hZ2VDbGljayIsImUiLCJjaGF0X2lkIiwiaW1nUmVjdCIsImN1cnJlbnRUYXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50WCIsImxlZnQiLCJ5IiwiY2xpZW50WSIsInRvcCIsImlkIiwiRGF0ZSIsIm5vdyIsIm51bWJlciIsIm11bHRpcGxpZXIiLCJwcmV2Iiwib3B0aW1pc3RpY1RvdGFsUG9pbnRzIiwib3B0aW1pc3RpY0RhaWx5UG9pbnRzQ291bnRlciIsInJlc3BvbnNlMCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIm9rIiwiRXJyb3IiLCJkYXRhdHAiLCJqc29uIiwibmV3VG90YWxQb2ludHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlMSIsImRhdGEiLCJuZXdkYWlseXBvaW50c2NvdW50ZXIiLCJlcnJvciIsImNvbnNvbGUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQW5pbWF0aW9uRW5kIiwiZmlsdGVyIiwiYW5pbSIsImRpdiIsImNsYXNzTmFtZSIsInRhcCIsInRhcGMiLCJ0YXBpbWFnZSIsImFsdCIsInNyYyIsIm9uQ2xpY2siLCJzdHlsZSIsImN1cnNvciIsIm91dGxpbmUiLCJtYXAiLCJvbkFuaW1hdGlvbkVuZCIsImRhaWx5cG9pbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TapComponent.tsx\n"));

/***/ })

});