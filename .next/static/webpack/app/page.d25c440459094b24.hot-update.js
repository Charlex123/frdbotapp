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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a76f58317072\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R5bGVzL2dsb2JhbC5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc3R5bGVzL2dsb2JhbC5jc3M/Yzk4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImE3NmY1ODMxNzA3MlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/TapComponent.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/TapComponent.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tapcomponent.module.css */ \"(app-pages-browser)/./src/app/styles/tapcomponent.module.css\");\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_Boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Boost */ \"(app-pages-browser)/./src/app/components/Boost.tsx\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider */ \"(app-pages-browser)/./src/app/provider.tsx\");\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimatedText */ \"(app-pages-browser)/./src/app/components/AnimatedText.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst TapComponent = (param)=>{\n    let { totalPoints, setTotalPoints } = param;\n    _s();\n    const [animations, setAnimations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bounce, setBounce] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { user } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram)();\n    const { appuser, fetchAndUpdateUser } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser)();\n    const apiUrl = \"https://webappbackend.fifareward.io/\";\n    const handleImageClick = async (e)=>{\n        // if (!user) {\n        //   console.error('User not found');\n        //   return;\n        // }\n        // const chat_id = user.id;\n        const chat_id = 730149343;\n        const imgRect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - imgRect.left;\n        const y = e.clientY - imgRect.top;\n        const id = Date.now();\n        const number = appuser.multiplier; // Set the exact number to be displayed\n        setAnimations((prev)=>[\n                ...prev,\n                {\n                    id,\n                    x,\n                    y,\n                    number\n                }\n            ]);\n        // Optimistically update total points\n        const optimisticTotalPoints = totalPoints + number;\n        setTotalPoints(optimisticTotalPoints);\n        // Update total points on the backend\n        try {\n            const response0 = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/gettotalpoints\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response0.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const datatp = await response0.json();\n            const newTotalPoints = datatp.totalpoints + number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatetotalpoints\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    totalpoints: newTotalPoints\n                })\n            });\n            const response1 = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/getdailypointscounter\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response1.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response1.json();\n            const newdailypointscounter = data.dailypointscounter - number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatedailypointscounter\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    dailypointscounter: newdailypointscounter\n                })\n            });\n            // Refresh context here\n            await fetchAndUpdateUser(chat_id);\n        } catch (error) {\n            // Revert the optimistic update if the request fails\n            setTotalPoints(totalPoints - number);\n            console.error(\"Failed to update total points:\", error);\n        }\n        // Trigger the combined bounce animation\n        setBounce(true);\n        setTimeout(()=>setBounce(false), 100); // Remove the class after the animation duration\n    };\n    const handleAnimationEnd = (id)=>{\n        setAnimations((prev)=>prev.filter((anim)=>anim.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"\".concat((_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapimage), \" \").concat(bounce ? (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"bounce-all-sides\"]) : \"\"),\n                        alt: \"\",\n                        src: \"/ballwhite.png\",\n                        onClick: handleImageClick,\n                        style: {\n                            cursor: \"pointer\",\n                            outline: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    animations.map((param)=>{\n                        let { id, x, y, number } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            x: x,\n                            y: y,\n                            number: number,\n                            onAnimationEnd: ()=>handleAnimationEnd(id)\n                        }, id, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, undefined),\n            appuser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Boost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                dailypoints: appuser.dailypoints,\n                dailypointscounter: appuser.dailypointscounter\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 127,\n                columnNumber: 18\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TapComponent, \"GvmRtcXiEzaIL1mR8Pb8rIFWEOk=\", false, function() {\n    return [\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram,\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser\n    ];\n});\n_c = TapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TapComponent);\nvar _c;\n$RefreshReg$(_c, \"TapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ087QUFFc0I7QUFDWjtBQUNEO0FBQ0Q7QUFDQztBQU8xQyxNQUFNTyxlQUE0QztRQUFDLEVBQUVDLFdBQVcsRUFBRUMsY0FBYyxFQUFFOztJQUNoRixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQXlELEVBQUU7SUFDdkcsTUFBTSxDQUFDVyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFVO0lBQzlDLE1BQU0sRUFBRWEsSUFBSSxFQUFFLEdBQUdWLHNEQUFXQTtJQUM1QixNQUFNLEVBQUVXLE9BQU8sRUFBRUMsa0JBQWtCLEVBQUUsR0FBR1gscURBQVVBO0lBQ2xELE1BQU1ZLFNBQVNDLHNDQUErQjtJQUU5QyxNQUFNRyxtQkFBbUIsT0FBT0M7UUFDOUIsZUFBZTtRQUNmLHFDQUFxQztRQUNyQyxZQUFZO1FBQ1osSUFBSTtRQUVKLDJCQUEyQjtRQUMzQixNQUFNQyxVQUFVO1FBQ2hCLE1BQU1DLFVBQVVGLEVBQUVHLGFBQWEsQ0FBQ0MscUJBQXFCO1FBQ3JELE1BQU1DLElBQUlMLEVBQUVNLE9BQU8sR0FBR0osUUFBUUssSUFBSTtRQUNsQyxNQUFNQyxJQUFJUixFQUFFUyxPQUFPLEdBQUdQLFFBQVFRLEdBQUc7UUFDakMsTUFBTUMsS0FBS0MsS0FBS0MsR0FBRztRQUNuQixNQUFNQyxTQUFTckIsUUFBU3NCLFVBQVUsRUFBRSx1Q0FBdUM7UUFFM0UxQixjQUFjLENBQUMyQixPQUFTO21CQUNuQkE7Z0JBQ0g7b0JBQUVMO29CQUFJTjtvQkFBR0c7b0JBQUdNO2dCQUFPO2FBQ3BCO1FBRUQscUNBQXFDO1FBQ3JDLE1BQU1HLHdCQUF3Qi9CLGNBQWM0QjtRQUM1QzNCLGVBQWU4QjtRQUVmLHFDQUFxQztRQUNyQyxJQUFJO1lBQ0YsTUFBTUMsWUFBWSxNQUFNQyxNQUFNLEdBQXVCbEIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSxvQkFBa0I7Z0JBQzdFbUIsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFDQSxJQUFJLENBQUNILFVBQVVJLEVBQUUsRUFBRTtnQkFDakIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTUMsU0FBUyxNQUFNTixVQUFVTyxJQUFJO1lBQ25DLE1BQU1DLGlCQUFpQkYsT0FBT0csV0FBVyxHQUFHYjtZQUU1QyxNQUFNSyxNQUFNLEdBQXVCbEIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSx1QkFBcUI7Z0JBQzlEbUIsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBTyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVILGFBQWFEO2dCQUFlO1lBQ3JEO1lBRUEsTUFBTUssWUFBWSxNQUFNWixNQUFNLEdBQXVCbEIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSwyQkFBeUI7Z0JBQ3BGbUIsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFDQSxJQUFJLENBQUNVLFVBQVVULEVBQUUsRUFBRTtnQkFDakIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTVMsT0FBTyxNQUFNRCxVQUFVTixJQUFJO1lBQ2pDLE1BQU1RLHdCQUF3QkQsS0FBS0Usa0JBQWtCLEdBQUdwQjtZQUV4RCxNQUFNSyxNQUFNLEdBQXVCbEIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSw4QkFBNEI7Z0JBQ3JFbUIsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBTyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVJLG9CQUFvQkQ7Z0JBQXNCO1lBQ25FO1lBRUEsdUJBQXVCO1lBQ3ZCLE1BQU12QyxtQkFBbUJPO1FBQzNCLEVBQUUsT0FBT2tDLE9BQU87WUFDZCxvREFBb0Q7WUFDcERoRCxlQUFlRCxjQUFjNEI7WUFDN0JzQixRQUFRRCxLQUFLLENBQUMsa0NBQWtDQTtRQUNsRDtRQUVBLHdDQUF3QztRQUN4QzVDLFVBQVU7UUFDVjhDLFdBQVcsSUFBTTlDLFVBQVUsUUFBUSxNQUFNLGdEQUFnRDtJQUMzRjtJQUVBLE1BQU0rQyxxQkFBcUIsQ0FBQzNCO1FBQzFCdEIsY0FBYyxDQUFDMkIsT0FBU0EsS0FBS3VCLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLN0IsRUFBRSxLQUFLQTtJQUM1RDtJQUVBLHFCQUNFLDhEQUFDOEI7UUFBSUMsV0FBVzlELDRFQUFVOzswQkFDeEIsOERBQUM2RDtnQkFBSUMsV0FBVzlELDZFQUFXOztrQ0FDekIsOERBQUNpRTt3QkFDQ0gsV0FBVyxHQUFzQnBELE9BQW5CVixpRkFBZSxFQUFDLEtBQTRDLE9BQXpDVSxTQUFTViw0RkFBMEIsR0FBRzt3QkFDdkVtRSxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKQyxTQUFTbEQ7d0JBQ1RtRCxPQUFPOzRCQUFFQyxRQUFROzRCQUFXQyxTQUFTO3dCQUFPOzs7Ozs7b0JBRTdDaEUsV0FBV2lFLEdBQUcsQ0FBQzs0QkFBQyxFQUFFMUMsRUFBRSxFQUFFTixDQUFDLEVBQUVHLENBQUMsRUFBRU0sTUFBTSxFQUFFOzZDQUNuQyw4REFBQzlCLHFEQUFZQTs0QkFFWHFCLEdBQUdBOzRCQUNIRyxHQUFHQTs0QkFDSE0sUUFBUUE7NEJBQ1J3QyxnQkFBZ0IsSUFBTWhCLG1CQUFtQjNCOzJCQUpwQ0E7Ozs7Ozs7Ozs7OztZQVFWbEIsd0JBQVUsOERBQUNaLDZEQUFLQTtnQkFBQzBFLGFBQWE5RCxRQUFROEQsV0FBVztnQkFBRXJCLG9CQUFvQnpDLFFBQVF5QyxrQkFBa0I7Ozs7OzRCQUFPOzs7Ozs7O0FBRy9HO0dBbEhNakQ7O1FBR2FILGtEQUFXQTtRQUNZQyxpREFBVUE7OztLQUo5Q0U7QUFvSE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1RhcENvbXBvbmVudC50c3g/Y2FjNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3RhcGNvbXBvbmVudC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQm9vc3QgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvQm9vc3RcIjtcbmltcG9ydCB7IHVzZVRlbGVncmFtIH0gZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VBcHBVc2VyIH0gZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gXCIuL0FuaW1hdGVkVGV4dFwiO1xuXG5pbnRlcmZhY2UgVGFwQ29tcG9uZW50UHJvcHMge1xuICB0b3RhbFBvaW50czogbnVtYmVyO1xuICBzZXRUb3RhbFBvaW50czogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG59XG5cbmNvbnN0IFRhcENvbXBvbmVudDogTmV4dFBhZ2U8VGFwQ29tcG9uZW50UHJvcHM+ID0gKHsgdG90YWxQb2ludHMsIHNldFRvdGFsUG9pbnRzIH0pID0+IHtcbiAgY29uc3QgW2FuaW1hdGlvbnMsIHNldEFuaW1hdGlvbnNdID0gdXNlU3RhdGU8eyBpZDogbnVtYmVyOyB4OiBudW1iZXI7IHk6IG51bWJlcjsgbnVtYmVyOiBudW1iZXIgfVtdPihbXSk7XG4gIGNvbnN0IFtib3VuY2UsIHNldEJvdW5jZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVGVsZWdyYW0oKTtcbiAgY29uc3QgeyBhcHB1c2VyLCBmZXRjaEFuZFVwZGF0ZVVzZXIgfSA9IHVzZUFwcFVzZXIoKTtcbiAgY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcblxuICBjb25zdCBoYW5kbGVJbWFnZUNsaWNrID0gYXN5bmMgKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEltYWdlRWxlbWVudD4pID0+IHtcbiAgICAvLyBpZiAoIXVzZXIpIHtcbiAgICAvLyAgIGNvbnNvbGUuZXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XG4gICAgLy8gICByZXR1cm47XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgY2hhdF9pZCA9IHVzZXIuaWQ7XG4gICAgY29uc3QgY2hhdF9pZCA9IDczMDE0OTM0MztcbiAgICBjb25zdCBpbWdSZWN0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSBpbWdSZWN0LmxlZnQ7XG4gICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIGltZ1JlY3QudG9wO1xuICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBudW1iZXIgPSBhcHB1c2VyIS5tdWx0aXBsaWVyOyAvLyBTZXQgdGhlIGV4YWN0IG51bWJlciB0byBiZSBkaXNwbGF5ZWRcblxuICAgIHNldEFuaW1hdGlvbnMoKHByZXYpID0+IFtcbiAgICAgIC4uLnByZXYsXG4gICAgICB7IGlkLCB4LCB5LCBudW1iZXIgfVxuICAgIF0pO1xuXG4gICAgLy8gT3B0aW1pc3RpY2FsbHkgdXBkYXRlIHRvdGFsIHBvaW50c1xuICAgIGNvbnN0IG9wdGltaXN0aWNUb3RhbFBvaW50cyA9IHRvdGFsUG9pbnRzICsgbnVtYmVyO1xuICAgIHNldFRvdGFsUG9pbnRzKG9wdGltaXN0aWNUb3RhbFBvaW50cyk7XG5cbiAgICAvLyBVcGRhdGUgdG90YWwgcG9pbnRzIG9uIHRoZSBiYWNrZW5kXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlMCA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vYXBpL3VzZXJzLyR7Y2hhdF9pZH0vZ2V0dG90YWxwb2ludHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBpZiAoIXJlc3BvbnNlMC5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhdHAgPSBhd2FpdCByZXNwb25zZTAuanNvbigpO1xuICAgICAgY29uc3QgbmV3VG90YWxQb2ludHMgPSBkYXRhdHAudG90YWxwb2ludHMgKyBudW1iZXI7XG5cbiAgICAgIGF3YWl0IGZldGNoKGAke2FwaVVybH0vYXBpL3VzZXJzLyR7Y2hhdF9pZH0vdXBkYXRldG90YWxwb2ludHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRvdGFscG9pbnRzOiBuZXdUb3RhbFBvaW50cyB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXNwb25zZTEgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy8ke2NoYXRfaWR9L2dldGRhaWx5cG9pbnRzY291bnRlcmAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGlmICghcmVzcG9uc2UxLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZTEuanNvbigpO1xuICAgICAgY29uc3QgbmV3ZGFpbHlwb2ludHNjb3VudGVyID0gZGF0YS5kYWlseXBvaW50c2NvdW50ZXIgLSBudW1iZXI7XG5cbiAgICAgIGF3YWl0IGZldGNoKGAke2FwaVVybH0vYXBpL3VzZXJzLyR7Y2hhdF9pZH0vdXBkYXRlZGFpbHlwb2ludHNjb3VudGVyYCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkYWlseXBvaW50c2NvdW50ZXI6IG5ld2RhaWx5cG9pbnRzY291bnRlciB9KSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZWZyZXNoIGNvbnRleHQgaGVyZVxuICAgICAgYXdhaXQgZmV0Y2hBbmRVcGRhdGVVc2VyKGNoYXRfaWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBSZXZlcnQgdGhlIG9wdGltaXN0aWMgdXBkYXRlIGlmIHRoZSByZXF1ZXN0IGZhaWxzXG4gICAgICBzZXRUb3RhbFBvaW50cyh0b3RhbFBvaW50cyAtIG51bWJlcik7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHRvdGFsIHBvaW50czonLCBlcnJvcik7XG4gICAgfVxuXG4gICAgLy8gVHJpZ2dlciB0aGUgY29tYmluZWQgYm91bmNlIGFuaW1hdGlvblxuICAgIHNldEJvdW5jZSh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEJvdW5jZShmYWxzZSksIDEwMCk7IC8vIFJlbW92ZSB0aGUgY2xhc3MgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBkdXJhdGlvblxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFuaW1hdGlvbkVuZCA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0QW5pbWF0aW9ucygocHJldikgPT4gcHJldi5maWx0ZXIoKGFuaW0pID0+IGFuaW0uaWQgIT09IGlkKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhcH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhcGN9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGFwaW1hZ2V9ICR7Ym91bmNlID8gc3R5bGVzWydib3VuY2UtYWxsLXNpZGVzJ10gOiAnJ31gfVxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgc3JjPVwiL2JhbGx3aGl0ZS5wbmdcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUltYWdlQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIG91dGxpbmU6ICdub25lJyB9fVxuICAgICAgICAvPlxuICAgICAgICB7YW5pbWF0aW9ucy5tYXAoKHsgaWQsIHgsIHksIG51bWJlciB9KSA9PiAoXG4gICAgICAgICAgPEFuaW1hdGVkVGV4dFxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICB5PXt5fVxuICAgICAgICAgICAgbnVtYmVyPXtudW1iZXJ9XG4gICAgICAgICAgICBvbkFuaW1hdGlvbkVuZD17KCkgPT4gaGFuZGxlQW5pbWF0aW9uRW5kKGlkKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2FwcHVzZXIgPyA8Qm9vc3QgZGFpbHlwb2ludHM9e2FwcHVzZXIuZGFpbHlwb2ludHN9IGRhaWx5cG9pbnRzY291bnRlcj17YXBwdXNlci5kYWlseXBvaW50c2NvdW50ZXJ9IC8+IDogJyd9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkJvb3N0IiwidXNlVGVsZWdyYW0iLCJ1c2VBcHBVc2VyIiwiQW5pbWF0ZWRUZXh0IiwiVGFwQ29tcG9uZW50IiwidG90YWxQb2ludHMiLCJzZXRUb3RhbFBvaW50cyIsImFuaW1hdGlvbnMiLCJzZXRBbmltYXRpb25zIiwiYm91bmNlIiwic2V0Qm91bmNlIiwidXNlciIsImFwcHVzZXIiLCJmZXRjaEFuZFVwZGF0ZVVzZXIiLCJhcGlVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImhhbmRsZUltYWdlQ2xpY2siLCJlIiwiY2hhdF9pZCIsImltZ1JlY3QiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJpZCIsIkRhdGUiLCJub3ciLCJudW1iZXIiLCJtdWx0aXBsaWVyIiwicHJldiIsIm9wdGltaXN0aWNUb3RhbFBvaW50cyIsInJlc3BvbnNlMCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIm9rIiwiRXJyb3IiLCJkYXRhdHAiLCJqc29uIiwibmV3VG90YWxQb2ludHMiLCJ0b3RhbHBvaW50cyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UxIiwiZGF0YSIsIm5ld2RhaWx5cG9pbnRzY291bnRlciIsImRhaWx5cG9pbnRzY291bnRlciIsImVycm9yIiwiY29uc29sZSIsInNldFRpbWVvdXQiLCJoYW5kbGVBbmltYXRpb25FbmQiLCJmaWx0ZXIiLCJhbmltIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFwIiwidGFwYyIsImltZyIsInRhcGltYWdlIiwiYWx0Iiwic3JjIiwib25DbGljayIsInN0eWxlIiwiY3Vyc29yIiwib3V0bGluZSIsIm1hcCIsIm9uQW5pbWF0aW9uRW5kIiwiZGFpbHlwb2ludHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TapComponent.tsx\n"));

/***/ })

});