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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"14ada15779fa\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R5bGVzL2dsb2JhbC5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc3R5bGVzL2dsb2JhbC5jc3M/Yzk4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjE0YWRhMTU3NzlmYVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/TapComponent.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/TapComponent.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tapcomponent.module.css */ \"(app-pages-browser)/./src/app/styles/tapcomponent.module.css\");\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_Boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Boost */ \"(app-pages-browser)/./src/app/components/Boost.tsx\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider */ \"(app-pages-browser)/./src/app/provider.tsx\");\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimatedText */ \"(app-pages-browser)/./src/app/components/AnimatedText.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst TapComponent = (param)=>{\n    let { totalPoints, setTotalPoints } = param;\n    _s();\n    const [animations, setAnimations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bounce, setBounce] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { user } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram)();\n    const [dailyPointsCounter, setDailyPointsCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { appuser, fetchAndUpdateUser } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser)();\n    const apiUrl = \"https://webappbackend.fifareward.io/\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (appuser) {\n            setTotalPoints(appuser.totalpoints);\n            setDailyPointsCounter(appuser.dailypointscounter);\n        }\n    }, [\n        appuser\n    ]);\n    const handleImageClick = async (e)=>{\n        // if (!user) {\n        //   console.error('User not found');\n        //   return;\n        // }\n        // const chat_id = user.id;\n        const chat_id = 730149343;\n        const imgRect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - imgRect.left;\n        const y = e.clientY - imgRect.top;\n        const id = Date.now();\n        const number = appuser.multiplier; // Set the exact number to be displayed\n        setAnimations((prev)=>[\n                ...prev,\n                {\n                    id,\n                    x,\n                    y,\n                    number\n                }\n            ]);\n        // Optimistically update total points and daily points counter\n        const optimisticTotalPoints = totalPoints + number;\n        const optimisticDailyPointsCounter = dailyPointsCounter - number;\n        setTotalPoints(optimisticTotalPoints);\n        setDailyPointsCounter(optimisticDailyPointsCounter);\n        // Update total points on the backend\n        try {\n            const response0 = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/gettotalpoints\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response0.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const datatp = await response0.json();\n            const newTotalPoints = datatp.totalpoints + number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatetotalpoints\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    totalpoints: newTotalPoints\n                })\n            });\n            const response1 = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/getdailypointscounter\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response1.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response1.json();\n            const newdailypointscounter = data.dailypointscounter - number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatedailypointscounter\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    dailypointscounter: newdailypointscounter\n                })\n            });\n            // Refresh context here\n            await fetchAndUpdateUser(chat_id);\n        } catch (error) {\n            // Revert the optimistic update if the request fails\n            setTotalPoints(totalPoints - number);\n            console.error(\"Failed to update total points:\", error);\n        }\n        // Trigger the combined bounce animation\n        setBounce(true);\n        setTimeout(()=>setBounce(false), 100); // Remove the class after the animation duration\n    };\n    const handleAnimationEnd = (id)=>{\n        setAnimations((prev)=>prev.filter((anim)=>anim.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"\".concat((_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapimage), \" \").concat(bounce ? (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"bounce-all-sides\"]) : \"\"),\n                        alt: \"\",\n                        src: \"/ballwhite.png\",\n                        onClick: handleImageClick,\n                        style: {\n                            cursor: \"pointer\",\n                            outline: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined),\n                    animations.map((param)=>{\n                        let { id, x, y, number } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            x: x,\n                            y: y,\n                            number: number,\n                            onAnimationEnd: ()=>handleAnimationEnd(id)\n                        }, id, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined),\n            appuser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Boost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                dailypoints: appuser.dailypoints,\n                dailypointscounter: appuser.dailypointscounter\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 137,\n                columnNumber: 18\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TapComponent, \"WfelMgMZIJN9xgf386rq9MB43yw=\", false, function() {\n    return [\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram,\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser\n    ];\n});\n_c = TapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TapComponent);\nvar _c;\n$RefreshReg$(_c, \"TapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ2tCO0FBRVc7QUFDWjtBQUNEO0FBQ0Q7QUFDQztBQU8xQyxNQUFNUSxlQUE0QztRQUFDLEVBQUVDLFdBQVcsRUFBRUMsY0FBYyxFQUFFOztJQUNoRixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQXlELEVBQUU7SUFDdkcsTUFBTSxDQUFDWSxRQUFRQyxVQUFVLEdBQUdiLCtDQUFRQSxDQUFVO0lBQzlDLE1BQU0sRUFBRWMsSUFBSSxFQUFFLEdBQUdWLHNEQUFXQTtJQUM1QixNQUFNLENBQUNXLG9CQUFvQkMsc0JBQXNCLEdBQUdoQiwrQ0FBUUEsQ0FBUztJQUNyRSxNQUFNLEVBQUVpQixPQUFPLEVBQUVDLGtCQUFrQixFQUFFLEdBQUdiLHFEQUFVQTtJQUNsRCxNQUFNYyxTQUFTQyxzQ0FBK0I7SUFFOUNuQixnREFBU0EsQ0FBQztRQUNSLElBQUlnQixTQUFTO1lBQ1hSLGVBQWVRLFFBQVFNLFdBQVc7WUFDbENQLHNCQUFzQkMsUUFBUU8sa0JBQWtCO1FBQ2xEO0lBQ0YsR0FBRztRQUFDUDtLQUFRO0lBRVosTUFBTVEsbUJBQW1CLE9BQU9DO1FBQzlCLGVBQWU7UUFDZixxQ0FBcUM7UUFDckMsWUFBWTtRQUNaLElBQUk7UUFFSiwyQkFBMkI7UUFDM0IsTUFBTUMsVUFBVTtRQUNoQixNQUFNQyxVQUFVRixFQUFFRyxhQUFhLENBQUNDLHFCQUFxQjtRQUNyRCxNQUFNQyxJQUFJTCxFQUFFTSxPQUFPLEdBQUdKLFFBQVFLLElBQUk7UUFDbEMsTUFBTUMsSUFBSVIsRUFBRVMsT0FBTyxHQUFHUCxRQUFRUSxHQUFHO1FBQ2pDLE1BQU1DLEtBQUtDLEtBQUtDLEdBQUc7UUFDbkIsTUFBTUMsU0FBU3ZCLFFBQVN3QixVQUFVLEVBQUUsdUNBQXVDO1FBRTNFOUIsY0FBYyxDQUFDK0IsT0FB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RSxhQUFhL0QsUUFBUStELFdBQVc7Z0JBQUV4RCxvQkFBb0JQLFFBQVFPLGtCQUFrQjs7Ozs7NEJBQU87Ozs7Ozs7QUFHL0c7R0E1SE1qQjs7UUFHYUgsa0RBQVdBO1FBRVlDLGlEQUFVQTs7O0tBTDlDRTtBQThITiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGFwQ29tcG9uZW50LnRzeD9jYWM3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy90YXBjb21wb25lbnQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEJvb3N0IGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0Jvb3N0XCI7XG5pbXBvcnQgeyB1c2VUZWxlZ3JhbSB9IGZyb20gXCIuLi9wcm92aWRlclwiO1xuaW1wb3J0IHsgdXNlQXBwVXNlciB9IGZyb20gXCIuLi9wcm92aWRlclwiO1xuaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tIFwiLi9BbmltYXRlZFRleHRcIjtcblxuaW50ZXJmYWNlIFRhcENvbXBvbmVudFByb3BzIHtcbiAgdG90YWxQb2ludHM6IG51bWJlcjtcbiAgc2V0VG90YWxQb2ludHM6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xufVxuXG5jb25zdCBUYXBDb21wb25lbnQ6IE5leHRQYWdlPFRhcENvbXBvbmVudFByb3BzPiA9ICh7IHRvdGFsUG9pbnRzLCBzZXRUb3RhbFBvaW50cyB9KSA9PiB7XG4gIGNvbnN0IFthbmltYXRpb25zLCBzZXRBbmltYXRpb25zXSA9IHVzZVN0YXRlPHsgaWQ6IG51bWJlcjsgeDogbnVtYmVyOyB5OiBudW1iZXI7IG51bWJlcjogbnVtYmVyIH1bXT4oW10pO1xuICBjb25zdCBbYm91bmNlLCBzZXRCb3VuY2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZVRlbGVncmFtKCk7XG4gIGNvbnN0IFtkYWlseVBvaW50c0NvdW50ZXIsIHNldERhaWx5UG9pbnRzQ291bnRlcl0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCB7IGFwcHVzZXIsIGZldGNoQW5kVXBkYXRlVXNlciB9ID0gdXNlQXBwVXNlcigpO1xuICBjb25zdCBhcGlVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFwcHVzZXIpIHtcbiAgICAgIHNldFRvdGFsUG9pbnRzKGFwcHVzZXIudG90YWxwb2ludHMpO1xuICAgICAgc2V0RGFpbHlQb2ludHNDb3VudGVyKGFwcHVzZXIuZGFpbHlwb2ludHNjb3VudGVyKTtcbiAgICB9XG4gIH0sIFthcHB1c2VyXSk7XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VDbGljayA9IGFzeW5jIChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxJbWFnZUVsZW1lbnQ+KSA9PiB7XG4gICAgLy8gaWYgKCF1c2VyKSB7XG4gICAgLy8gICBjb25zb2xlLmVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IGNoYXRfaWQgPSB1c2VyLmlkO1xuICAgIGNvbnN0IGNoYXRfaWQgPSA3MzAxNDkzNDM7XG4gICAgY29uc3QgaW1nUmVjdCA9IGUuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gaW1nUmVjdC5sZWZ0O1xuICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSBpbWdSZWN0LnRvcDtcbiAgICBjb25zdCBpZCA9IERhdGUubm93KCk7XG4gICAgY29uc3QgbnVtYmVyID0gYXBwdXNlciEubXVsdGlwbGllcjsgLy8gU2V0IHRoZSBleGFjdCBudW1iZXIgdG8gYmUgZGlzcGxheWVkXG5cbiAgICBzZXRBbmltYXRpb25zKChwcmV2KSA9PiBbXG4gICAgICAuLi5wcmV2LFxuICAgICAgeyBpZCwgeCwgeSwgbnVtYmVyIH1cbiAgICBdKTtcblxuICAgICAvLyBPcHRpbWlzdGljYWxseSB1cGRhdGUgdG90YWwgcG9pbnRzIGFuZCBkYWlseSBwb2ludHMgY291bnRlclxuICAgICBjb25zdCBvcHRpbWlzdGljVG90YWxQb2ludHMgPSB0b3RhbFBvaW50cyArIG51bWJlcjtcbiAgICAgY29uc3Qgb3B0aW1pc3RpY0RhaWx5UG9pbnRzQ291bnRlciA9IGRhaWx5UG9pbnRzQ291bnRlciAtIG51bWJlcjtcbiAgICAgc2V0VG90YWxQb2ludHMob3B0aW1pc3RpY1RvdGFsUG9pbnRzKTtcbiAgICAgc2V0RGFpbHlQb2ludHNDb3VudGVyKG9wdGltaXN0aWNEYWlseVBvaW50c0NvdW50ZXIpO1xuXG4gICAgLy8gVXBkYXRlIHRvdGFsIHBvaW50cyBvbiB0aGUgYmFja2VuZFxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZTAgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy8ke2NoYXRfaWR9L2dldHRvdGFscG9pbnRzYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXNwb25zZTAub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YXRwID0gYXdhaXQgcmVzcG9uc2UwLmpzb24oKTtcbiAgICAgIGNvbnN0IG5ld1RvdGFsUG9pbnRzID0gZGF0YXRwLnRvdGFscG9pbnRzICsgbnVtYmVyO1xuXG4gICAgICBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy8ke2NoYXRfaWR9L3VwZGF0ZXRvdGFscG9pbnRzYCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0b3RhbHBvaW50czogbmV3VG90YWxQb2ludHMgfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UxID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9hcGkvdXNlcnMvJHtjaGF0X2lkfS9nZXRkYWlseXBvaW50c2NvdW50ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBpZiAoIXJlc3BvbnNlMS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UxLmpzb24oKTtcbiAgICAgIGNvbnN0IG5ld2RhaWx5cG9pbnRzY291bnRlciA9IGRhdGEuZGFpbHlwb2ludHNjb3VudGVyIC0gbnVtYmVyO1xuXG4gICAgICBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy8ke2NoYXRfaWR9L3VwZGF0ZWRhaWx5cG9pbnRzY291bnRlcmAsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZGFpbHlwb2ludHNjb3VudGVyOiBuZXdkYWlseXBvaW50c2NvdW50ZXIgfSksXG4gICAgICB9KTtcblxuICAgICAgLy8gUmVmcmVzaCBjb250ZXh0IGhlcmVcbiAgICAgIGF3YWl0IGZldGNoQW5kVXBkYXRlVXNlcihjaGF0X2lkKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gUmV2ZXJ0IHRoZSBvcHRpbWlzdGljIHVwZGF0ZSBpZiB0aGUgcmVxdWVzdCBmYWlsc1xuICAgICAgc2V0VG90YWxQb2ludHModG90YWxQb2ludHMgLSBudW1iZXIpO1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSB0b3RhbCBwb2ludHM6JywgZXJyb3IpO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgdGhlIGNvbWJpbmVkIGJvdW5jZSBhbmltYXRpb25cbiAgICBzZXRCb3VuY2UodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRCb3VuY2UoZmFsc2UpLCAxMDApOyAvLyBSZW1vdmUgdGhlIGNsYXNzIGFmdGVyIHRoZSBhbmltYXRpb24gZHVyYXRpb25cbiAgfTtcblxuICBjb25zdCBoYW5kbGVBbmltYXRpb25FbmQgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHNldEFuaW1hdGlvbnMoKHByZXYpID0+IHByZXYuZmlsdGVyKChhbmltKSA9PiBhbmltLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXBjfT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRhcGltYWdlfSAke2JvdW5jZSA/IHN0eWxlc1snYm91bmNlLWFsbC1zaWRlcyddIDogJyd9YH1cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIHNyYz1cIi9iYWxsd2hpdGUucG5nXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbWFnZUNsaWNrfVxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgLz5cbiAgICAgICAge2FuaW1hdGlvbnMubWFwKCh7IGlkLCB4LCB5LCBudW1iZXIgfSkgPT4gKFxuICAgICAgICAgIDxBbmltYXRlZFRleHRcbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgeT17eX1cbiAgICAgICAgICAgIG51bWJlcj17bnVtYmVyfVxuICAgICAgICAgICAgb25BbmltYXRpb25FbmQ9eygpID0+IGhhbmRsZUFuaW1hdGlvbkVuZChpZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHthcHB1c2VyID8gPEJvb3N0IGRhaWx5cG9pbnRzPXthcHB1c2VyLmRhaWx5cG9pbnRzfSBkYWlseXBvaW50c2NvdW50ZXI9e2FwcHVzZXIuZGFpbHlwb2ludHNjb3VudGVyfSAvPiA6ICcnfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFwQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJCb29zdCIsInVzZVRlbGVncmFtIiwidXNlQXBwVXNlciIsIkFuaW1hdGVkVGV4dCIsIlRhcENvbXBvbmVudCIsInRvdGFsUG9pbnRzIiwic2V0VG90YWxQb2ludHMiLCJhbmltYXRpb25zIiwic2V0QW5pbWF0aW9ucyIsImJvdW5jZSIsInNldEJvdW5jZSIsInVzZXIiLCJkYWlseVBvaW50c0NvdW50ZXIiLCJzZXREYWlseVBvaW50c0NvdW50ZXIiLCJhcHB1c2VyIiwiZmV0Y2hBbmRVcGRhdGVVc2VyIiwiYXBpVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJ0b3RhbHBvaW50cyIsImRhaWx5cG9pbnRzY291bnRlciIsImhhbmRsZUltYWdlQ2xpY2siLCJlIiwiY2hhdF9pZCIsImltZ1JlY3QiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJpZCIsIkRhdGUiLCJub3ciLCJudW1iZXIiLCJtdWx0aXBsaWVyIiwicHJldiIsIm9wdGltaXN0aWNUb3RhbFBvaW50cyIsIm9wdGltaXN0aWNEYWlseVBvaW50c0NvdW50ZXIiLCJyZXNwb25zZTAiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwiZGF0YXRwIiwianNvbiIsIm5ld1RvdGFsUG9pbnRzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZTEiLCJkYXRhIiwibmV3ZGFpbHlwb2ludHNjb3VudGVyIiwiZXJyb3IiLCJjb25zb2xlIiwic2V0VGltZW91dCIsImhhbmRsZUFuaW1hdGlvbkVuZCIsImZpbHRlciIsImFuaW0iLCJkaXYiLCJjbGFzc05hbWUiLCJ0YXAiLCJ0YXBjIiwiaW1nIiwidGFwaW1hZ2UiLCJhbHQiLCJzcmMiLCJvbkNsaWNrIiwic3R5bGUiLCJjdXJzb3IiLCJvdXRsaW5lIiwibWFwIiwib25BbmltYXRpb25FbmQiLCJkYWlseXBvaW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TapComponent.tsx\n"));

/***/ })

});