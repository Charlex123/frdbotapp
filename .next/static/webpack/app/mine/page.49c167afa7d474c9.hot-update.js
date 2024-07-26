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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tapcomponent.module.css */ \"(app-pages-browser)/./src/app/styles/tapcomponent.module.css\");\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_Boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Boost */ \"(app-pages-browser)/./src/app/components/Boost.tsx\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider */ \"(app-pages-browser)/./src/app/provider.tsx\");\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimatedText */ \"(app-pages-browser)/./src/app/components/AnimatedText.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst TapComponent = ()=>{\n    _s();\n    const [animations, setAnimations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bounce, setBounce] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { user } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram)();\n    const { appuser, fetchAndUpdateUser } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser)();\n    const apiUrl = \"http://localhost:4000\" || 0;\n    const handleImageClick = async (e)=>{\n        // if (!user) {\n        //   console.error('User not found');\n        //   return;\n        // }\n        // const chat_id = user.id;\n        const chat_id = 730149343;\n        const imgRect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - imgRect.left;\n        const y = e.clientY - imgRect.top;\n        const id = Date.now();\n        const number = appuser.multiplier; // Set the exact number to be displayed\n        setAnimations((prev)=>[\n                ...prev,\n                {\n                    id,\n                    x,\n                    y,\n                    number\n                }\n            ]);\n        // update total points\n        try {\n            const response0 = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/gettotalpoints\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response0.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const datatp = await response0.json();\n            const newTotalPoints = datatp.totalpoints + number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatetotalpoints\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    totalpoints: newTotalPoints\n                })\n            });\n            // const response = await fetch(`${apiUrl}/api/users/${chat_id}/getdailypointscounter`, {\n            //   method: 'GET',\n            //   headers: {\n            //     'Content-Type': 'application/json',\n            //   },\n            // });\n            // console.log(\"resp 1\",response)\n            // if (!response.ok) {\n            //   throw new Error('Network response was not ok');\n            // }\n            // const data = await response.json();\n            // const newdailypointscounter = data.dailypointscounter - number;\n            // await fetch(`${apiUrl}/api/users/${chat_id}/updatedailypointscounter`, {\n            //   method: 'PUT',\n            //   headers: {\n            //     'Content-Type': 'application/json',\n            //   },\n            //   body: JSON.stringify({ dailypointscounter: newdailypointscounter }),\n            // });\n            // Refresh context here\n            await fetchAndUpdateUser(730149343);\n        } catch (error) {\n            console.error(\"Failed to update total points:\", error);\n        }\n        // Trigger the combined bounce animation\n        setBounce(true);\n        setTimeout(()=>setBounce(false), 1000); // Remove the class after the animation duration\n    };\n    const handleAnimationEnd = (id)=>{\n        setAnimations((prev)=>prev.filter((anim)=>anim.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"\".concat((_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapimage), \" \").concat(bounce ? (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"bounce-all-sides\"]) : \"\"),\n                        alt: \"\",\n                        src: \"/ballwhite.png\",\n                        onClick: handleImageClick,\n                        style: {\n                            cursor: \"pointer\",\n                            outline: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    animations.map((param)=>{\n                        let { id, x, y, number } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            x: x,\n                            y: y,\n                            number: number,\n                            onAnimationEnd: ()=>handleAnimationEnd(id)\n                        }, id, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            appuser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Boost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                dailypoints: appuser.dailypoints,\n                dailypointscounter: appuser.dailypoints\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 119,\n                columnNumber: 18\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TapComponent, \"GvmRtcXiEzaIL1mR8Pb8rIFWEOk=\", false, function() {\n    return [\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram,\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser\n    ];\n});\n_c = TapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TapComponent);\nvar _c;\n$RefreshReg$(_c, \"TapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBRXNCO0FBQ1o7QUFDRDtBQUNEO0FBQ0M7QUFFMUMsTUFBTU0sZUFBeUI7O0lBQzdCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBeUQsRUFBRTtJQUN2RyxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQVU7SUFDOUMsTUFBTSxFQUFFVyxJQUFJLEVBQUUsR0FBR1Isc0RBQVdBO0lBQzVCLE1BQU0sRUFBRVMsT0FBTyxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHVCxxREFBVUE7SUFDbEQsTUFBTVUsU0FBU0MsdUJBQStCLElBQUk7SUFFbEQsTUFBTUcsbUJBQW1CLE9BQU9DO1FBQzlCLGVBQWU7UUFDZixxQ0FBcUM7UUFDckMsWUFBWTtRQUNaLElBQUk7UUFFSiwyQkFBMkI7UUFDM0IsTUFBTUMsVUFBVTtRQUNoQixNQUFNQyxVQUFVRixFQUFFRyxhQUFhLENBQUNDLHFCQUFxQjtRQUNyRCxNQUFNQyxJQUFJTCxFQUFFTSxPQUFPLEdBQUdKLFFBQVFLLElBQUk7UUFDbEMsTUFBTUMsSUFBSVIsRUFBRVMsT0FBTyxHQUFHUCxRQUFRUSxHQUFHO1FBQ2pDLE1BQU1DLEtBQUtDLEtBQUtDLEdBQUc7UUFDbkIsTUFBTUMsU0FBU3JCLFFBQVNzQixVQUFVLEVBQUUsdUNBQXVDO1FBRTNFMUIsY0FBYyxDQUFDMkIsT0FBUzttQkFDbkJBO2dCQUNIO29CQUFFTDtvQkFBSU47b0JBQUdHO29CQUFHTTtnQkFBTzthQUNwQjtRQUVELHNCQUFzQjtRQUN0QixJQUFJO1lBQ0YsTUFBTUcsWUFBWSxNQUFNQyxNQUFNLEdBQXVCakIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSxvQkFBa0I7Z0JBQzdFa0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFQSxJQUFJLENBQUNILFVBQVVJLEVBQUUsRUFBRTtnQkFDakIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTUMsU0FBUyxNQUFNTixVQUFVTyxJQUFJO1lBQ25DLE1BQU1DLGlCQUFpQkYsT0FBT0csV0FBVyxHQUFHWjtZQUU1QyxNQUFNSSxNQUFNLEdBQXVCakIsT0FBcEJOLFFBQU8sZUFBcUIsT0FBUk0sU0FBUSx1QkFBcUI7Z0JBQzlEa0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBTyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVILGFBQWFEO2dCQUFlO1lBQ3JEO1lBRUEseUZBQXlGO1lBQ3pGLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsMENBQTBDO1lBQzFDLE9BQU87WUFDUCxNQUFNO1lBQ04saUNBQWlDO1lBQ2pDLHNCQUFzQjtZQUN0QixvREFBb0Q7WUFDcEQsSUFBSTtZQUVKLHNDQUFzQztZQUN0QyxrRUFBa0U7WUFFbEUsMkVBQTJFO1lBQzNFLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsMENBQTBDO1lBQzFDLE9BQU87WUFDUCx5RUFBeUU7WUFDekUsTUFBTTtZQUVOLHVCQUF1QjtZQUN2QixNQUFNL0IsbUJBQW1CO1FBQzNCLEVBQUUsT0FBT29DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLGtDQUFrQ0E7UUFDbEQ7UUFJQSx3Q0FBd0M7UUFDeEN2QyxVQUFVO1FBQ1Z5QyxXQUFXLElBQU16QyxVQUFVLFFBQVEsT0FBTyxnREFBZ0Q7SUFDNUY7SUFFQSxNQUFNMEMscUJBQXFCLENBQUN0QjtRQUMxQnRCLGNBQWMsQ0FBQzJCLE9BQVNBLEtBQUtrQixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS3hCLEVBQUUsS0FBS0E7SUFDNUQ7SUFFQSxxQkFDRSw4REFBQ3lCO1FBQUlDLFdBQVd2RCw0RUFBVTs7MEJBQ3hCLDhEQUFDc0Q7Z0JBQUlDLFdBQVd2RCw2RUFBVzs7a0NBQ3pCLDhEQUFDMEQ7d0JBQ0NILFdBQVcsR0FBc0IvQyxPQUFuQlIsaUZBQWUsRUFBQyxLQUE0QyxPQUF6Q1EsU0FBU1IsNEZBQTBCLEdBQUc7d0JBQ3ZFNEQsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsU0FBUzdDO3dCQUNUOEMsT0FBTzs0QkFBRUMsUUFBUTs0QkFBV0MsU0FBUzt3QkFBTzs7Ozs7O29CQUU3QzNELFdBQVc0RCxHQUFHLENBQUM7NEJBQUMsRUFBRXJDLEVBQUUsRUFBRU4sQ0FBQyxFQUFFRyxDQUFDLEVBQUVNLE1BQU0sRUFBRTs2Q0FDbkMsOERBQUM1QixxREFBWUE7NEJBRVhtQixHQUFHQTs0QkFDSEcsR0FBR0E7NEJBQ0hNLFFBQVFBOzRCQUNSbUMsZ0JBQWdCLElBQU1oQixtQkFBbUJ0QjsyQkFKcENBOzs7Ozs7Ozs7Ozs7WUFRVmxCLHdCQUFVLDhEQUFDViw2REFBS0E7Z0JBQUNtRSxhQUFhekQsUUFBUXlELFdBQVc7Z0JBQUVDLG9CQUFvQjFELFFBQVF5RCxXQUFXOzs7Ozs0QkFBTTs7Ozs7OztBQUd2RztHQWhITS9EOztRQUdhSCxrREFBV0E7UUFDWUMsaURBQVVBOzs7S0FKOUNFO0FBa0hOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4P2NhYzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3RhcGNvbXBvbmVudC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQm9vc3QgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvQm9vc3RcIjtcbmltcG9ydCB7IHVzZVRlbGVncmFtIH0gZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VBcHBVc2VyIH0gZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gXCIuL0FuaW1hdGVkVGV4dFwiO1xuXG5jb25zdCBUYXBDb21wb25lbnQ6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbYW5pbWF0aW9ucywgc2V0QW5pbWF0aW9uc10gPSB1c2VTdGF0ZTx7IGlkOiBudW1iZXI7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBudW1iZXI6IG51bWJlciB9W10+KFtdKTtcbiAgY29uc3QgW2JvdW5jZSwgc2V0Qm91bmNlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VUZWxlZ3JhbSgpO1xuICBjb25zdCB7IGFwcHVzZXIsIGZldGNoQW5kVXBkYXRlVXNlciB9ID0gdXNlQXBwVXNlcigpO1xuICBjb25zdCBhcGlVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnO1xuXG4gIGNvbnN0IGhhbmRsZUltYWdlQ2xpY2sgPSBhc3luYyAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MSW1hZ2VFbGVtZW50PikgPT4ge1xuICAgIC8vIGlmICghdXNlcikge1xuICAgIC8vICAgY29uc29sZS5lcnJvcignVXNlciBub3QgZm91bmQnKTtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBjaGF0X2lkID0gdXNlci5pZDtcbiAgICBjb25zdCBjaGF0X2lkID0gNzMwMTQ5MzQzO1xuICAgIGNvbnN0IGltZ1JlY3QgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIGltZ1JlY3QubGVmdDtcbiAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gaW1nUmVjdC50b3A7XG4gICAgY29uc3QgaWQgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IG51bWJlciA9IGFwcHVzZXIhLm11bHRpcGxpZXI7IC8vIFNldCB0aGUgZXhhY3QgbnVtYmVyIHRvIGJlIGRpc3BsYXllZFxuXG4gICAgc2V0QW5pbWF0aW9ucygocHJldikgPT4gW1xuICAgICAgLi4ucHJldixcbiAgICAgIHsgaWQsIHgsIHksIG51bWJlciB9XG4gICAgXSk7XG5cbiAgICAvLyB1cGRhdGUgdG90YWwgcG9pbnRzXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlMCA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vYXBpL3VzZXJzLyR7Y2hhdF9pZH0vZ2V0dG90YWxwb2ludHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGlmICghcmVzcG9uc2UwLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGF0cCA9IGF3YWl0IHJlc3BvbnNlMC5qc29uKCk7XG4gICAgICBjb25zdCBuZXdUb3RhbFBvaW50cyA9IGRhdGF0cC50b3RhbHBvaW50cyArIG51bWJlcjtcblxuICAgICAgYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9hcGkvdXNlcnMvJHtjaGF0X2lkfS91cGRhdGV0b3RhbHBvaW50c2AsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdG90YWxwb2ludHM6IG5ld1RvdGFsUG9pbnRzIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9hcGkvdXNlcnMvJHtjaGF0X2lkfS9nZXRkYWlseXBvaW50c2NvdW50ZXJgLCB7XG4gICAgICAvLyAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAvLyAgIGhlYWRlcnM6IHtcbiAgICAgIC8vICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3AgMVwiLHJlc3BvbnNlKVxuICAgICAgLy8gaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgLy8gY29uc3QgbmV3ZGFpbHlwb2ludHNjb3VudGVyID0gZGF0YS5kYWlseXBvaW50c2NvdW50ZXIgLSBudW1iZXI7XG5cbiAgICAgIC8vIGF3YWl0IGZldGNoKGAke2FwaVVybH0vYXBpL3VzZXJzLyR7Y2hhdF9pZH0vdXBkYXRlZGFpbHlwb2ludHNjb3VudGVyYCwge1xuICAgICAgLy8gICBtZXRob2Q6ICdQVVQnLFxuICAgICAgLy8gICBoZWFkZXJzOiB7XG4gICAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkYWlseXBvaW50c2NvdW50ZXI6IG5ld2RhaWx5cG9pbnRzY291bnRlciB9KSxcbiAgICAgIC8vIH0pO1xuXG4gICAgICAvLyBSZWZyZXNoIGNvbnRleHQgaGVyZVxuICAgICAgYXdhaXQgZmV0Y2hBbmRVcGRhdGVVc2VyKDczMDE0OTM0Myk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgdG90YWwgcG9pbnRzOicsIGVycm9yKTtcbiAgICB9XG5cbiAgIFxuXG4gICAgLy8gVHJpZ2dlciB0aGUgY29tYmluZWQgYm91bmNlIGFuaW1hdGlvblxuICAgIHNldEJvdW5jZSh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEJvdW5jZShmYWxzZSksIDEwMDApOyAvLyBSZW1vdmUgdGhlIGNsYXNzIGFmdGVyIHRoZSBhbmltYXRpb24gZHVyYXRpb25cbiAgfTtcblxuICBjb25zdCBoYW5kbGVBbmltYXRpb25FbmQgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHNldEFuaW1hdGlvbnMoKHByZXYpID0+IHByZXYuZmlsdGVyKChhbmltKSA9PiBhbmltLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXBjfT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRhcGltYWdlfSAke2JvdW5jZSA/IHN0eWxlc1snYm91bmNlLWFsbC1zaWRlcyddIDogJyd9YH1cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIHNyYz1cIi9iYWxsd2hpdGUucG5nXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbWFnZUNsaWNrfVxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgLz5cbiAgICAgICAge2FuaW1hdGlvbnMubWFwKCh7IGlkLCB4LCB5LCBudW1iZXIgfSkgPT4gKFxuICAgICAgICAgIDxBbmltYXRlZFRleHRcbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgeT17eX1cbiAgICAgICAgICAgIG51bWJlcj17bnVtYmVyfVxuICAgICAgICAgICAgb25BbmltYXRpb25FbmQ9eygpID0+IGhhbmRsZUFuaW1hdGlvbkVuZChpZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHthcHB1c2VyID8gPEJvb3N0IGRhaWx5cG9pbnRzPXthcHB1c2VyLmRhaWx5cG9pbnRzfSBkYWlseXBvaW50c2NvdW50ZXI9e2FwcHVzZXIuZGFpbHlwb2ludHN9Lz4gOiAnJ31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhcENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIkJvb3N0IiwidXNlVGVsZWdyYW0iLCJ1c2VBcHBVc2VyIiwiQW5pbWF0ZWRUZXh0IiwiVGFwQ29tcG9uZW50IiwiYW5pbWF0aW9ucyIsInNldEFuaW1hdGlvbnMiLCJib3VuY2UiLCJzZXRCb3VuY2UiLCJ1c2VyIiwiYXBwdXNlciIsImZldGNoQW5kVXBkYXRlVXNlciIsImFwaVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiaGFuZGxlSW1hZ2VDbGljayIsImUiLCJjaGF0X2lkIiwiaW1nUmVjdCIsImN1cnJlbnRUYXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50WCIsImxlZnQiLCJ5IiwiY2xpZW50WSIsInRvcCIsImlkIiwiRGF0ZSIsIm5vdyIsIm51bWJlciIsIm11bHRpcGxpZXIiLCJwcmV2IiwicmVzcG9uc2UwIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwib2siLCJFcnJvciIsImRhdGF0cCIsImpzb24iLCJuZXdUb3RhbFBvaW50cyIsInRvdGFscG9pbnRzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImNvbnNvbGUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQW5pbWF0aW9uRW5kIiwiZmlsdGVyIiwiYW5pbSIsImRpdiIsImNsYXNzTmFtZSIsInRhcCIsInRhcGMiLCJpbWciLCJ0YXBpbWFnZSIsImFsdCIsInNyYyIsIm9uQ2xpY2siLCJzdHlsZSIsImN1cnNvciIsIm91dGxpbmUiLCJtYXAiLCJvbkFuaW1hdGlvbkVuZCIsImRhaWx5cG9pbnRzIiwiZGFpbHlwb2ludHNjb3VudGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TapComponent.tsx\n"));

/***/ })

});