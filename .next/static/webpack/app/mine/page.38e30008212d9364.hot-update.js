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

/***/ "(app-pages-browser)/./src/app/components/TapComponent.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/TapComponent.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tapcomponent.module.css */ \"(app-pages-browser)/./src/app/styles/tapcomponent.module.css\");\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_Boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Boost */ \"(app-pages-browser)/./src/app/components/Boost.tsx\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider */ \"(app-pages-browser)/./src/app/provider.tsx\");\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimatedText */ \"(app-pages-browser)/./src/app/components/AnimatedText.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst TapComponent = ()=>{\n    _s();\n    const [animations, setAnimations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bounce, setBounce] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { user } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram)();\n    const { appuser, fetchAndUpdateUser } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser)();\n    const apiUrl = \"http://localhost:4000\" || 0;\n    const handleImageClick = async (e)=>{\n        // if (!user) {\n        //   console.error('User not found');\n        //   return;\n        // }\n        // const chat_id = user.id;\n        const chat_id = 730149343;\n        const imgRect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - imgRect.left;\n        const y = e.clientY - imgRect.top;\n        const id = Date.now();\n        const number = appuser.multiplier; // Set the exact number to be displayed\n        setAnimations((prev)=>[\n                ...prev,\n                {\n                    id,\n                    x,\n                    y,\n                    number\n                }\n            ]);\n        // update total points\n        try {\n            const response = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/gettotalpoints\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response.json();\n            const newTotalPoints1 = data.totalpoints + number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatetotalpoints\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    totalpoints: newTotalPoints1\n                })\n            });\n            // Refresh context here\n            await fetchAndUpdateUser(730149343);\n        } catch (error) {\n            console.error(\"Failed to update total points:\", error);\n        }\n        // update daily points\n        try {\n            const response1 = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/getdailypointscounter\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response1.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response1.json();\n            const newdailyPoints = data.totalpoints - number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatetotalpoints\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    totalpoints: newTotalPoints\n                })\n            });\n            // Refresh context here\n            await fetchAndUpdateUser(730149343);\n        } catch (error) {\n            console.error(\"Failed to update total points:\", error);\n        }\n        // Trigger the combined bounce animation\n        setBounce(true);\n        setTimeout(()=>setBounce(false), 1000); // Remove the class after the animation duration\n    };\n    const handleAnimationEnd = (id)=>{\n        setAnimations((prev)=>prev.filter((anim)=>anim.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"\".concat((_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapimage), \" \").concat(bounce ? (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"bounce-all-sides\"]) : \"\"),\n                        alt: \"\",\n                        src: \"/ballwhite.png\",\n                        onClick: handleImageClick,\n                        style: {\n                            cursor: \"pointer\",\n                            outline: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    animations.map((param)=>{\n                        let { id, x, y, number } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            x: x,\n                            y: y,\n                            number: number,\n                            onAnimationEnd: ()=>handleAnimationEnd(id)\n                        }, id, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            appuser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Boost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                dailypoints: appuser.dailypoints,\n                dailypointscounter: appuser.dailypoints\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 125,\n                columnNumber: 18\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TapComponent, \"GvmRtcXiEzaIL1mR8Pb8rIFWEOk=\", false, function() {\n    return [\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram,\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser\n    ];\n});\n_c = TapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TapComponent);\nvar _c;\n$RefreshReg$(_c, \"TapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBRXNCO0FBQ1o7QUFDRDtBQUNEO0FBQ0M7QUFFMUMsTUFBTU0sZUFBeUI7O0lBQzdCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBeUQsRUFBRTtJQUN2RyxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQVU7SUFDOUMsTUFBTSxFQUFFVyxJQUFJLEVBQUUsR0FBR1Isc0RBQVdBO0lBQzVCLE1BQU0sRUFBRVMsT0FBTyxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHVCxxREFBVUE7SUFDbEQsTUFBTVUsU0FBU0MsdUJBQStCLElBQUk7SUFFbEQsTUFBTUcsbUJBQW1CLE9BQU9DO1FBQzlCLGVBQWU7UUFDZixxQ0FBcUM7UUFDckMsWUFBWTtRQUNaLElBQUk7UUFFSiwyQkFBMkI7UUFDM0IsTUFBTUMsVUFBVTtRQUNoQixNQUFNQyxVQUFVRixFQUFFRyxhQUFhLENBQUNDLHFCQUFxQjtRQUNyRCxNQUFNQyxJQUFJTCxFQUFFTSxPQUFPLEdBQUdKLFFBQVFLLElBQUk7UUFDbEMsTUFBTUMsSUFBSVIsRUFBRVMsT0FBTyxHQUFHUCxRQUFRUSxHQUFHO1FBQ2pDLE1BQU1DLEtBQUtDLEtBQUtDLEdBQUc7UUFDbkIsTUFBTUMsU0FBU3JCLFFBQVNzQixVQUFVLEVBQUUsdUNBQXVDO1FBRTNFMUIsY0FBYyxDQUFDMkIsT0FBUzttQkFDbkJBO2dCQUNIO29CQUFFTDtvQkFBSU47b0JBQUdHO29CQUFHTTtnQkFBTzthQUNwQjtRQUVELHNCQUFzQjtRQUN0QixJQUFJO1lBQ0YsTUFBTUcsV0FBVyxNQUFNQyxNQUFNLEdBQXVCakIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSxvQkFBa0I7Z0JBQzVFa0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFQSxJQUFJLENBQUNILFNBQVNJLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDLE1BQU1DLGtCQUFpQkYsS0FBS0csV0FBVyxHQUFHWjtZQUUxQyxNQUFNSSxNQUFNLEdBQXVCakIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSx1QkFBcUI7Z0JBQzlEa0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBTyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVILGFBQWFEO2dCQUFlO1lBQ3JEO1lBRUEsdUJBQXVCO1lBQ3ZCLE1BQU0vQixtQkFBbUI7UUFDM0IsRUFBRSxPQUFPb0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsa0NBQWtDQTtRQUNsRDtRQUVBLHNCQUFzQjtRQUN0QixJQUFJO1lBQ0YsTUFBTUUsWUFBWSxNQUFNZCxNQUFNLEdBQXVCakIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSwyQkFBeUI7Z0JBQ3BGa0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFQSxJQUFJLENBQUNZLFVBQVVYLEVBQUUsRUFBRTtnQkFDakIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTUMsT0FBTyxNQUFNUyxVQUFVUixJQUFJO1lBQ2pDLE1BQU1TLGlCQUFpQlYsS0FBS0csV0FBVyxHQUFHWjtZQUUxQyxNQUFNSSxNQUFNLEdBQXVCakIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSx1QkFBcUI7Z0JBQzlEa0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBTyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVILGFBQWFEO2dCQUFlO1lBQ3JEO1lBRUEsdUJBQXVCO1lBQ3ZCLE1BQU0vQixtQkFBbUI7UUFDM0IsRUFBRSxPQUFPb0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsa0NBQWtDQTtRQUNsRDtRQUVBLHdDQUF3QztRQUN4Q3ZDLFVBQVU7UUFDVjJDLFdBQVcsSUFBTTNDLFVBQVUsUUFBUSxPQUFPLGdEQUFnRDtJQUM1RjtJQUVBLE1BQU00QyxxQkFBcUIsQ0FBQ3hCO1FBQzFCdEIsY0FBYyxDQUFDMkIsT0FBU0EsS0FBS29CLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLMUIsRUFBRSxLQUFLQTtJQUM1RDtJQUVBLHFCQUNFLDhEQUFDMkI7UUFBSUMsV0FBV3pELDRFQUFVOzswQkFDeEIsOERBQUN3RDtnQkFBSUMsV0FBV3pELDZFQUFXOztrQ0FDekIsOERBQUM0RDt3QkFDQ0gsV0FBVyxHQUFzQmpELE9BQW5CUixpRkFBZSxFQUFDLEtBQTRDLE9BQXpDUSxTQUFTUiw0RkFBMEIsR0FBRzt3QkFDdkU4RCxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKQyxTQUFTL0M7d0JBQ1RnRCxPQUFPOzRCQUFFQyxRQUFROzRCQUFXQyxTQUFTO3dCQUFPOzs7Ozs7b0JBRTdDN0QsV0FBVzhELEdBQUcsQ0FBQzs0QkFBQyxFQUFFdkMsRUFBRSxFQUFFTixDQUFDLEVBQUVHLENBQUMsRUFBRU0sTUFBTSxFQUFFOzZDQUNuQyw4REFBQzVCLHFEQUFZQTs0QkFFWG1CLEdBQUdBOzRCQUNIRyxHQUFHQTs0QkFDSE0sUUFBUUE7NEJBQ1JxQyxnQkFBZ0IsSUFBTWhCLG1CQUFtQnhCOzJCQUpwQ0E7Ozs7Ozs7Ozs7OztZQVFWbEIsd0JBQVUsOERBQUNWLDZEQUFLQTtnQkFBQ3FFLGFBQWEzRCxRQUFRMkQsV0FBVztnQkFBRUMsb0JBQW9CNUQsUUFBUTJELFdBQVc7Ozs7OzRCQUFNOzs7Ozs7O0FBR3ZHO0dBdEhNakU7O1FBR2FILGtEQUFXQTtRQUNZQyxpREFBVUE7OztLQUo5Q0U7QUF3SE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1RhcENvbXBvbmVudC50c3g/Y2FjNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdGFwY29tcG9uZW50Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCb29zdCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Cb29zdFwiO1xuaW1wb3J0IHsgdXNlVGVsZWdyYW0gfSBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZUFwcFVzZXIgfSBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcbmltcG9ydCBBbmltYXRlZFRleHQgZnJvbSBcIi4vQW5pbWF0ZWRUZXh0XCI7XG5cbmNvbnN0IFRhcENvbXBvbmVudDogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFthbmltYXRpb25zLCBzZXRBbmltYXRpb25zXSA9IHVzZVN0YXRlPHsgaWQ6IG51bWJlcjsgeDogbnVtYmVyOyB5OiBudW1iZXI7IG51bWJlcjogbnVtYmVyIH1bXT4oW10pO1xuICBjb25zdCBbYm91bmNlLCBzZXRCb3VuY2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZVRlbGVncmFtKCk7XG4gIGNvbnN0IHsgYXBwdXNlciwgZmV0Y2hBbmRVcGRhdGVVc2VyIH0gPSB1c2VBcHBVc2VyKCk7XG4gIGNvbnN0IGFwaVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCc7XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VDbGljayA9IGFzeW5jIChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxJbWFnZUVsZW1lbnQ+KSA9PiB7XG4gICAgLy8gaWYgKCF1c2VyKSB7XG4gICAgLy8gICBjb25zb2xlLmVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IGNoYXRfaWQgPSB1c2VyLmlkO1xuICAgIGNvbnN0IGNoYXRfaWQgPSA3MzAxNDkzNDM7XG4gICAgY29uc3QgaW1nUmVjdCA9IGUuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gaW1nUmVjdC5sZWZ0O1xuICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSBpbWdSZWN0LnRvcDtcbiAgICBjb25zdCBpZCA9IERhdGUubm93KCk7XG4gICAgY29uc3QgbnVtYmVyID0gYXBwdXNlciEubXVsdGlwbGllcjsgLy8gU2V0IHRoZSBleGFjdCBudW1iZXIgdG8gYmUgZGlzcGxheWVkXG5cbiAgICBzZXRBbmltYXRpb25zKChwcmV2KSA9PiBbXG4gICAgICAuLi5wcmV2LFxuICAgICAgeyBpZCwgeCwgeSwgbnVtYmVyIH1cbiAgICBdKTtcblxuICAgIC8vIHVwZGF0ZSB0b3RhbCBwb2ludHNcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy8ke2NoYXRfaWR9L2dldHRvdGFscG9pbnRzYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCBuZXdUb3RhbFBvaW50cyA9IGRhdGEudG90YWxwb2ludHMgKyBudW1iZXI7XG5cbiAgICAgIGF3YWl0IGZldGNoKGAke2FwaVVybH0vYXBpL3VzZXJzLyR7Y2hhdF9pZH0vdXBkYXRldG90YWxwb2ludHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRvdGFscG9pbnRzOiBuZXdUb3RhbFBvaW50cyB9KSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZWZyZXNoIGNvbnRleHQgaGVyZVxuICAgICAgYXdhaXQgZmV0Y2hBbmRVcGRhdGVVc2VyKDczMDE0OTM0Myk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgdG90YWwgcG9pbnRzOicsIGVycm9yKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgZGFpbHkgcG9pbnRzXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlMSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vYXBpL3VzZXJzLyR7Y2hhdF9pZH0vZ2V0ZGFpbHlwb2ludHNjb3VudGVyYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBpZiAoIXJlc3BvbnNlMS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UxLmpzb24oKTtcbiAgICAgIGNvbnN0IG5ld2RhaWx5UG9pbnRzID0gZGF0YS50b3RhbHBvaW50cyAtIG51bWJlcjtcblxuICAgICAgYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9hcGkvdXNlcnMvJHtjaGF0X2lkfS91cGRhdGV0b3RhbHBvaW50c2AsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdG90YWxwb2ludHM6IG5ld1RvdGFsUG9pbnRzIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFJlZnJlc2ggY29udGV4dCBoZXJlXG4gICAgICBhd2FpdCBmZXRjaEFuZFVwZGF0ZVVzZXIoNzMwMTQ5MzQzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSB0b3RhbCBwb2ludHM6JywgZXJyb3IpO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgdGhlIGNvbWJpbmVkIGJvdW5jZSBhbmltYXRpb25cbiAgICBzZXRCb3VuY2UodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRCb3VuY2UoZmFsc2UpLCAxMDAwKTsgLy8gUmVtb3ZlIHRoZSBjbGFzcyBhZnRlciB0aGUgYW5pbWF0aW9uIGR1cmF0aW9uXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQW5pbWF0aW9uRW5kID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRBbmltYXRpb25zKChwcmV2KSA9PiBwcmV2LmZpbHRlcigoYW5pbSkgPT4gYW5pbS5pZCAhPT0gaWQpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFwfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFwY30+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy50YXBpbWFnZX0gJHtib3VuY2UgPyBzdHlsZXNbJ2JvdW5jZS1hbGwtc2lkZXMnXSA6ICcnfWB9XG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICBzcmM9XCIvYmFsbHdoaXRlLnBuZ1wiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlSW1hZ2VDbGlja31cbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgb3V0bGluZTogJ25vbmUnIH19XG4gICAgICAgIC8+XG4gICAgICAgIHthbmltYXRpb25zLm1hcCgoeyBpZCwgeCwgeSwgbnVtYmVyIH0pID0+IChcbiAgICAgICAgICA8QW5pbWF0ZWRUZXh0XG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgIHk9e3l9XG4gICAgICAgICAgICBudW1iZXI9e251bWJlcn1cbiAgICAgICAgICAgIG9uQW5pbWF0aW9uRW5kPXsoKSA9PiBoYW5kbGVBbmltYXRpb25FbmQoaWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICB7YXBwdXNlciA/IDxCb29zdCBkYWlseXBvaW50cz17YXBwdXNlci5kYWlseXBvaW50c30gZGFpbHlwb2ludHNjb3VudGVyPXthcHB1c2VyLmRhaWx5cG9pbnRzfS8+IDogJyd9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJCb29zdCIsInVzZVRlbGVncmFtIiwidXNlQXBwVXNlciIsIkFuaW1hdGVkVGV4dCIsIlRhcENvbXBvbmVudCIsImFuaW1hdGlvbnMiLCJzZXRBbmltYXRpb25zIiwiYm91bmNlIiwic2V0Qm91bmNlIiwidXNlciIsImFwcHVzZXIiLCJmZXRjaEFuZFVwZGF0ZVVzZXIiLCJhcGlVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImhhbmRsZUltYWdlQ2xpY2siLCJlIiwiY2hhdF9pZCIsImltZ1JlY3QiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJpZCIsIkRhdGUiLCJub3ciLCJudW1iZXIiLCJtdWx0aXBsaWVyIiwicHJldiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwibmV3VG90YWxQb2ludHMiLCJ0b3RhbHBvaW50cyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJjb25zb2xlIiwicmVzcG9uc2UxIiwibmV3ZGFpbHlQb2ludHMiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQW5pbWF0aW9uRW5kIiwiZmlsdGVyIiwiYW5pbSIsImRpdiIsImNsYXNzTmFtZSIsInRhcCIsInRhcGMiLCJpbWciLCJ0YXBpbWFnZSIsImFsdCIsInNyYyIsIm9uQ2xpY2siLCJzdHlsZSIsImN1cnNvciIsIm91dGxpbmUiLCJtYXAiLCJvbkFuaW1hdGlvbkVuZCIsImRhaWx5cG9pbnRzIiwiZGFpbHlwb2ludHNjb3VudGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TapComponent.tsx\n"));

/***/ })

});