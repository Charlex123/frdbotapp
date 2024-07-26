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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tapcomponent.module.css */ \"(app-pages-browser)/./src/app/styles/tapcomponent.module.css\");\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_Boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Boost */ \"(app-pages-browser)/./src/app/components/Boost.tsx\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider */ \"(app-pages-browser)/./src/app/provider.tsx\");\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimatedText */ \"(app-pages-browser)/./src/app/components/AnimatedText.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst TapComponent = ()=>{\n    _s();\n    const [animations, setAnimations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bounce, setBounce] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { user } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram)();\n    const { appuser, fetchAndUpdateUser } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser)();\n    const apiUrl = \"http://localhost:4000\" || 0;\n    const handleImageClick = async (e)=>{\n        // if (!user) {\n        //   console.error('User not found');\n        //   return;\n        // }\n        // const chat_id = user.id;\n        const chat_id = 730149343;\n        const imgRect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - imgRect.left;\n        const y = e.clientY - imgRect.top;\n        const id = Date.now();\n        const number = appuser.multiplier; // Set the exact number to be displayed\n        setAnimations((prev)=>[\n                ...prev,\n                {\n                    id,\n                    x,\n                    y,\n                    number\n                }\n            ]);\n        // update total points\n        try {\n            const response = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/gettotalpoints\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response.json();\n            const newTotalPoints = data.totalpoints + number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatetotalpoints\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    totalpoints: newTotalPoints\n                })\n            });\n            // Refresh context here\n            await fetchAndUpdateUser(730149343);\n        } catch (error) {\n            console.error(\"Failed to update total points:\", error);\n        }\n        // update daily points\n        try {\n            const response = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/getdailypointscount\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response.json();\n            const newTotalPoints = data.totalpoints + number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatetotalpoints\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    totalpoints: newTotalPoints\n                })\n            });\n            // Refresh context here\n            await fetchAndUpdateUser(730149343);\n        } catch (error) {\n            console.error(\"Failed to update total points:\", error);\n        }\n        // Trigger the combined bounce animation\n        setBounce(true);\n        setTimeout(()=>setBounce(false), 1000); // Remove the class after the animation duration\n    };\n    const handleAnimationEnd = (id)=>{\n        setAnimations((prev)=>prev.filter((anim)=>anim.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"\".concat((_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapimage), \" \").concat(bounce ? (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"bounce-all-sides\"]) : \"\"),\n                        alt: \"\",\n                        src: \"/ballwhite.png\",\n                        onClick: handleImageClick,\n                        style: {\n                            cursor: \"pointer\",\n                            outline: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    animations.map((param)=>{\n                        let { id, x, y, number } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            x: x,\n                            y: y,\n                            number: number,\n                            onAnimationEnd: ()=>handleAnimationEnd(id)\n                        }, id, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            appuser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Boost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                dailypoints: appuser.dailypoints,\n                dailypointscounter: appuser.dailypoints\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 125,\n                columnNumber: 18\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TapComponent, \"GvmRtcXiEzaIL1mR8Pb8rIFWEOk=\", false, function() {\n    return [\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram,\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser\n    ];\n});\n_c = TapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TapComponent);\nvar _c;\n$RefreshReg$(_c, \"TapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBRXNCO0FBQ1o7QUFDRDtBQUNEO0FBQ0M7QUFFMUMsTUFBTU0sZUFBeUI7O0lBQzdCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBeUQsRUFBRTtJQUN2RyxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQVU7SUFDOUMsTUFBTSxFQUFFVyxJQUFJLEVBQUUsR0FBR1Isc0RBQVdBO0lBQzVCLE1BQU0sRUFBRVMsT0FBTyxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHVCxxREFBVUE7SUFDbEQsTUFBTVUsU0FBU0MsdUJBQStCLElBQUk7SUFFbEQsTUFBTUcsbUJBQW1CLE9BQU9DO1FBQzlCLGVBQWU7UUFDZixxQ0FBcUM7UUFDckMsWUFBWTtRQUNaLElBQUk7UUFFSiwyQkFBMkI7UUFDM0IsTUFBTUMsVUFBVTtRQUNoQixNQUFNQyxVQUFVRixFQUFFRyxhQUFhLENBQUNDLHFCQUFxQjtRQUNyRCxNQUFNQyxJQUFJTCxFQUFFTSxPQUFPLEdBQUdKLFFBQVFLLElBQUk7UUFDbEMsTUFBTUMsSUFBSVIsRUFBRVMsT0FBTyxHQUFHUCxRQUFRUSxHQUFHO1FBQ2pDLE1BQU1DLEtBQUtDLEtBQUtDLEdBQUc7UUFDbkIsTUFBTUMsU0FBU3JCLFFBQVNzQixVQUFVLEVBQUUsdUNBQXVDO1FBRTNFMUIsY0FBYyxDQUFDMkIsT0FBUzttQkFDbkJBO2dCQUNIO29CQUFFTDtvQkFBSU47b0JBQUdHO29CQUFHTTtnQkFBTzthQUNwQjtRQUVELHNCQUFzQjtRQUN0QixJQUFJO1lBQ0YsTUFBTUcsV0FBVyxNQUFNQyxNQUFNLEdBQXVCakIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSxvQkFBa0I7Z0JBQzVFa0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFQSxJQUFJLENBQUNILFNBQVNJLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDLE1BQU1DLGlCQUFpQkYsS0FBS0csV0FBVyxHQUFHWjtZQUUxQyxNQUFNSSxNQUFNLEdBQXVCakIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSx1QkFBcUI7Z0JBQzlEa0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBTyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVILGFBQWFEO2dCQUFlO1lBQ3JEO1lBRUEsdUJBQXVCO1lBQ3ZCLE1BQU0vQixtQkFBbUI7UUFDM0IsRUFBRSxPQUFPb0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsa0NBQWtDQTtRQUNsRDtRQUVBLHNCQUFzQjtRQUN0QixJQUFJO1lBQ0YsTUFBTWIsV0FBVyxNQUFNQyxNQUFNLEdBQXVCakIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSx5QkFBdUI7Z0JBQ2pGa0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFQSxJQUFJLENBQUNILFNBQVNJLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDLE1BQU1DLGlCQUFpQkYsS0FBS0csV0FBVyxHQUFHWjtZQUUxQyxNQUFNSSxNQUFNLEdBQXVCakIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSx1QkFBcUI7Z0JBQzlEa0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBTyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVILGFBQWFEO2dCQUFlO1lBQ3JEO1lBRUEsdUJBQXVCO1lBQ3ZCLE1BQU0vQixtQkFBbUI7UUFDM0IsRUFBRSxPQUFPb0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsa0NBQWtDQTtRQUNsRDtRQUVBLHdDQUF3QztRQUN4Q3ZDLFVBQVU7UUFDVnlDLFdBQVcsSUFBTXpDLFVBQVUsUUFBUSxPQUFPLGdEQUFnRDtJQUM1RjtJQUVBLE1BQU0wQyxxQkFBcUIsQ0FBQ3RCO1FBQzFCdEIsY0FBYyxDQUFDMkIsT0FBU0EsS0FBS2tCLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLeEIsRUFBRSxLQUFLQTtJQUM1RDtJQUVBLHFCQUNFLDhEQUFDeUI7UUFBSUMsV0FBV3ZELDRFQUFVOzswQkFDeEIsOERBQUNzRDtnQkFBSUMsV0FBV3ZELDZFQUFXOztrQ0FDekIsOERBQUMwRDt3QkFDQ0gsV0FBVyxHQUFzQi9DLE9BQW5CUixpRkFBZSxFQUFDLEtBQTRDLE9BQXpDUSxTQUFTUiw0RkFBMEIsR0FBRzt3QkFDdkU0RCxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKQyxTQUFTN0M7d0JBQ1Q4QyxPQUFPOzRCQUFFQyxRQUFROzRCQUFXQyxTQUFTO3dCQUFPOzs7Ozs7b0JBRTdDM0QsV0FBVzRELEdBQUcsQ0FBQzs0QkFBQyxFQUFFckMsRUFBRSxFQUFFTixDQUFDLEVBQUVHLENBQUMsRUFBRU0sTUFBTSxFQUFFOzZDQUNuQyw4REFBQzVCLHFEQUFZQTs0QkFFWG1CLEdBQUdBOzRCQUNIRyxHQUFHQTs0QkFDSE0sUUFBUUE7NEJBQ1JtQyxnQkFBZ0IsSUFBTWhCLG1CQUFtQnRCOzJCQUpwQ0E7Ozs7Ozs7Ozs7OztZQVFWbEIsd0JBQVUsOERBQUNWLDZEQUFLQTtnQkFBQ21FLGFBQWF6RCxRQUFReUQsV0FBVztnQkFBRUMsb0JBQW9CMUQsUUFBUXlELFdBQVc7Ozs7OzRCQUFNOzs7Ozs7O0FBR3ZHO0dBdEhNL0Q7O1FBR2FILGtEQUFXQTtRQUNZQyxpREFBVUE7OztLQUo5Q0U7QUF3SE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1RhcENvbXBvbmVudC50c3g/Y2FjNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdGFwY29tcG9uZW50Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCb29zdCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Cb29zdFwiO1xuaW1wb3J0IHsgdXNlVGVsZWdyYW0gfSBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZUFwcFVzZXIgfSBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcbmltcG9ydCBBbmltYXRlZFRleHQgZnJvbSBcIi4vQW5pbWF0ZWRUZXh0XCI7XG5cbmNvbnN0IFRhcENvbXBvbmVudDogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFthbmltYXRpb25zLCBzZXRBbmltYXRpb25zXSA9IHVzZVN0YXRlPHsgaWQ6IG51bWJlcjsgeDogbnVtYmVyOyB5OiBudW1iZXI7IG51bWJlcjogbnVtYmVyIH1bXT4oW10pO1xuICBjb25zdCBbYm91bmNlLCBzZXRCb3VuY2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZVRlbGVncmFtKCk7XG4gIGNvbnN0IHsgYXBwdXNlciwgZmV0Y2hBbmRVcGRhdGVVc2VyIH0gPSB1c2VBcHBVc2VyKCk7XG4gIGNvbnN0IGFwaVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCc7XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VDbGljayA9IGFzeW5jIChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxJbWFnZUVsZW1lbnQ+KSA9PiB7XG4gICAgLy8gaWYgKCF1c2VyKSB7XG4gICAgLy8gICBjb25zb2xlLmVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IGNoYXRfaWQgPSB1c2VyLmlkO1xuICAgIGNvbnN0IGNoYXRfaWQgPSA3MzAxNDkzNDM7XG4gICAgY29uc3QgaW1nUmVjdCA9IGUuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gaW1nUmVjdC5sZWZ0O1xuICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSBpbWdSZWN0LnRvcDtcbiAgICBjb25zdCBpZCA9IERhdGUubm93KCk7XG4gICAgY29uc3QgbnVtYmVyID0gYXBwdXNlciEubXVsdGlwbGllcjsgLy8gU2V0IHRoZSBleGFjdCBudW1iZXIgdG8gYmUgZGlzcGxheWVkXG5cbiAgICBzZXRBbmltYXRpb25zKChwcmV2KSA9PiBbXG4gICAgICAuLi5wcmV2LFxuICAgICAgeyBpZCwgeCwgeSwgbnVtYmVyIH1cbiAgICBdKTtcblxuICAgIC8vIHVwZGF0ZSB0b3RhbCBwb2ludHNcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy8ke2NoYXRfaWR9L2dldHRvdGFscG9pbnRzYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCBuZXdUb3RhbFBvaW50cyA9IGRhdGEudG90YWxwb2ludHMgKyBudW1iZXI7XG5cbiAgICAgIGF3YWl0IGZldGNoKGAke2FwaVVybH0vYXBpL3VzZXJzLyR7Y2hhdF9pZH0vdXBkYXRldG90YWxwb2ludHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRvdGFscG9pbnRzOiBuZXdUb3RhbFBvaW50cyB9KSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZWZyZXNoIGNvbnRleHQgaGVyZVxuICAgICAgYXdhaXQgZmV0Y2hBbmRVcGRhdGVVc2VyKDczMDE0OTM0Myk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgdG90YWwgcG9pbnRzOicsIGVycm9yKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgZGFpbHkgcG9pbnRzXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9hcGkvdXNlcnMvJHtjaGF0X2lkfS9nZXRkYWlseXBvaW50c2NvdW50YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCBuZXdUb3RhbFBvaW50cyA9IGRhdGEudG90YWxwb2ludHMgKyBudW1iZXI7XG5cbiAgICAgIGF3YWl0IGZldGNoKGAke2FwaVVybH0vYXBpL3VzZXJzLyR7Y2hhdF9pZH0vdXBkYXRldG90YWxwb2ludHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRvdGFscG9pbnRzOiBuZXdUb3RhbFBvaW50cyB9KSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZWZyZXNoIGNvbnRleHQgaGVyZVxuICAgICAgYXdhaXQgZmV0Y2hBbmRVcGRhdGVVc2VyKDczMDE0OTM0Myk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgdG90YWwgcG9pbnRzOicsIGVycm9yKTtcbiAgICB9XG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBjb21iaW5lZCBib3VuY2UgYW5pbWF0aW9uXG4gICAgc2V0Qm91bmNlKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Qm91bmNlKGZhbHNlKSwgMTAwMCk7IC8vIFJlbW92ZSB0aGUgY2xhc3MgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBkdXJhdGlvblxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFuaW1hdGlvbkVuZCA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0QW5pbWF0aW9ucygocHJldikgPT4gcHJldi5maWx0ZXIoKGFuaW0pID0+IGFuaW0uaWQgIT09IGlkKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhcH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhcGN9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGFwaW1hZ2V9ICR7Ym91bmNlID8gc3R5bGVzWydib3VuY2UtYWxsLXNpZGVzJ10gOiAnJ31gfVxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgc3JjPVwiL2JhbGx3aGl0ZS5wbmdcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUltYWdlQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIG91dGxpbmU6ICdub25lJyB9fVxuICAgICAgICAvPlxuICAgICAgICB7YW5pbWF0aW9ucy5tYXAoKHsgaWQsIHgsIHksIG51bWJlciB9KSA9PiAoXG4gICAgICAgICAgPEFuaW1hdGVkVGV4dFxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICB5PXt5fVxuICAgICAgICAgICAgbnVtYmVyPXtudW1iZXJ9XG4gICAgICAgICAgICBvbkFuaW1hdGlvbkVuZD17KCkgPT4gaGFuZGxlQW5pbWF0aW9uRW5kKGlkKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2FwcHVzZXIgPyA8Qm9vc3QgZGFpbHlwb2ludHM9e2FwcHVzZXIuZGFpbHlwb2ludHN9IGRhaWx5cG9pbnRzY291bnRlcj17YXBwdXNlci5kYWlseXBvaW50c30vPiA6ICcnfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFwQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiQm9vc3QiLCJ1c2VUZWxlZ3JhbSIsInVzZUFwcFVzZXIiLCJBbmltYXRlZFRleHQiLCJUYXBDb21wb25lbnQiLCJhbmltYXRpb25zIiwic2V0QW5pbWF0aW9ucyIsImJvdW5jZSIsInNldEJvdW5jZSIsInVzZXIiLCJhcHB1c2VyIiwiZmV0Y2hBbmRVcGRhdGVVc2VyIiwiYXBpVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJoYW5kbGVJbWFnZUNsaWNrIiwiZSIsImNoYXRfaWQiLCJpbWdSZWN0IiwiY3VycmVudFRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJjbGllbnRYIiwibGVmdCIsInkiLCJjbGllbnRZIiwidG9wIiwiaWQiLCJEYXRlIiwibm93IiwibnVtYmVyIiwibXVsdGlwbGllciIsInByZXYiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsIm5ld1RvdGFsUG9pbnRzIiwidG90YWxwb2ludHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiY29uc29sZSIsInNldFRpbWVvdXQiLCJoYW5kbGVBbmltYXRpb25FbmQiLCJmaWx0ZXIiLCJhbmltIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFwIiwidGFwYyIsImltZyIsInRhcGltYWdlIiwiYWx0Iiwic3JjIiwib25DbGljayIsInN0eWxlIiwiY3Vyc29yIiwib3V0bGluZSIsIm1hcCIsIm9uQW5pbWF0aW9uRW5kIiwiZGFpbHlwb2ludHMiLCJkYWlseXBvaW50c2NvdW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TapComponent.tsx\n"));

/***/ })

});