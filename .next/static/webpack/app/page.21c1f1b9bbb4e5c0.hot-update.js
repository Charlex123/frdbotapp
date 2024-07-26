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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tapcomponent.module.css */ \"(app-pages-browser)/./src/app/styles/tapcomponent.module.css\");\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_Boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Boost */ \"(app-pages-browser)/./src/app/components/Boost.tsx\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider */ \"(app-pages-browser)/./src/app/provider.tsx\");\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimatedText */ \"(app-pages-browser)/./src/app/components/AnimatedText.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst TapComponent = ()=>{\n    _s();\n    const [animations, setAnimations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bounce, setBounce] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { user } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram)();\n    const { appuser, fetchAndUpdateUser } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser)();\n    const apiUrl = \"http://localhost:4000\" || 0;\n    const handleImageClick = async (e)=>{\n        if (!user) {\n            console.error(\"User not found\");\n            return;\n        }\n        // const chat_id = user.id;\n        const imgRect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - imgRect.left;\n        const y = e.clientY - imgRect.top;\n        const id = Date.now();\n        const number = appuser.multiplier; // Set the exact number to be displayed\n        setAnimations((prev)=>[\n                ...prev,\n                {\n                    id,\n                    x,\n                    y,\n                    number\n                }\n            ]);\n        try {\n            const response = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/gettotalpoints\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response.json();\n            const newTotalPoints = data.totalpoints + number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatetotalpoints\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    totalpoints: newTotalPoints\n                })\n            });\n            // Refresh context here\n            await fetchAndUpdateUser(730149343);\n        } catch (error) {\n            console.error(\"Failed to update total points:\", error);\n        }\n        // Trigger the combined bounce animation\n        setBounce(true);\n        setTimeout(()=>setBounce(false), 1000); // Remove the class after the animation duration\n    };\n    const handleAnimationEnd = (id)=>{\n        setAnimations((prev)=>prev.filter((anim)=>anim.id !== id));\n    };\n    console.log(\"app user o00\", appuser);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"\".concat((_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapimage), \" \").concat(bounce ? (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"bounce-all-sides\"]) : \"\"),\n                        alt: \"\",\n                        src: \"/ballwhite.png\",\n                        onClick: handleImageClick,\n                        style: {\n                            cursor: \"pointer\",\n                            outline: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    animations.map((param)=>{\n                        let { id, x, y, number } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            x: x,\n                            y: y,\n                            number: number,\n                            onAnimationEnd: ()=>handleAnimationEnd(id)\n                        }, id, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            appuser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Boost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                dailypoints: appuser.dailypoints,\n                dailypointscounter: appuser.dailypoints\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 94,\n                columnNumber: 18\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TapComponent, \"GvmRtcXiEzaIL1mR8Pb8rIFWEOk=\", false, function() {\n    return [\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram,\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser\n    ];\n});\n_c = TapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TapComponent);\nvar _c;\n$RefreshReg$(_c, \"TapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBRXNCO0FBQ1o7QUFDRDtBQUNEO0FBQ0M7QUFFMUMsTUFBTU0sZUFBeUI7O0lBQzdCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBeUQsRUFBRTtJQUN2RyxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQVU7SUFDOUMsTUFBTSxFQUFFVyxJQUFJLEVBQUUsR0FBR1Isc0RBQVdBO0lBQzVCLE1BQU0sRUFBRVMsT0FBTyxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHVCxxREFBVUE7SUFDbEQsTUFBTVUsU0FBU0MsdUJBQStCLElBQUk7SUFFbEQsTUFBTUcsbUJBQW1CLE9BQU9DO1FBQzlCLElBQUksQ0FBQ1IsTUFBTTtZQUNUUyxRQUFRQyxLQUFLLENBQUM7WUFDZDtRQUNGO1FBRUEsMkJBQTJCO1FBQzNCLE1BQU1DLFVBQVVILEVBQUVJLGFBQWEsQ0FBQ0MscUJBQXFCO1FBQ3JELE1BQU1DLElBQUlOLEVBQUVPLE9BQU8sR0FBR0osUUFBUUssSUFBSTtRQUNsQyxNQUFNQyxJQUFJVCxFQUFFVSxPQUFPLEdBQUdQLFFBQVFRLEdBQUc7UUFDakMsTUFBTUMsS0FBS0MsS0FBS0MsR0FBRztRQUNuQixNQUFNQyxTQUFTdEIsUUFBU3VCLFVBQVUsRUFBRSx1Q0FBdUM7UUFFM0UzQixjQUFjLENBQUM0QixPQUFTO21CQUNuQkE7Z0JBQ0g7b0JBQUVMO29CQUFJTjtvQkFBR0c7b0JBQUdNO2dCQUFPO2FBQ3BCO1FBRUQsSUFBSTtZQUNGLE1BQU1HLFdBQVcsTUFBTUMsTUFBTSxHQUF1QkMsT0FBcEJ6QixRQUFPLGVBQXFCLE9BQVJ5QixTQUFRLG9CQUFrQjtnQkFDNUVDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBRUEsSUFBSSxDQUFDSixTQUFTSyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUVBLE1BQU1DLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtZQUNoQyxNQUFNQyxpQkFBaUJGLEtBQUtHLFdBQVcsR0FBR2I7WUFFMUMsTUFBTUksTUFBTSxHQUF1QkMsT0FBcEJ6QixRQUFPLGVBQXFCLE9BQVJ5QixTQUFRLHVCQUFxQjtnQkFDOURDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQU8sTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFSCxhQUFhRDtnQkFBZTtZQUNyRDtZQUVBLHVCQUF1QjtZQUN2QixNQUFNakMsbUJBQW1CO1FBQzNCLEVBQUUsT0FBT1EsT0FBTztZQUNkRCxRQUFRQyxLQUFLLENBQUMsa0NBQWtDQTtRQUNsRDtRQUVBLHdDQUF3QztRQUN4Q1gsVUFBVTtRQUNWeUMsV0FBVyxJQUFNekMsVUFBVSxRQUFRLE9BQU8sZ0RBQWdEO0lBQzVGO0lBRUEsTUFBTTBDLHFCQUFxQixDQUFDckI7UUFDMUJ2QixjQUFjLENBQUM0QixPQUFTQSxLQUFLaUIsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUt2QixFQUFFLEtBQUtBO0lBQzVEO0lBRUFYLFFBQVFtQyxHQUFHLENBQUMsZ0JBQWUzQztJQUMzQixxQkFDRSw4REFBQzRDO1FBQUlDLFdBQVd4RCw0RUFBVTs7MEJBQ3hCLDhEQUFDdUQ7Z0JBQUlDLFdBQVd4RCw2RUFBVzs7a0NBQ3pCLDhEQUFDMkQ7d0JBQ0NILFdBQVcsR0FBc0JoRCxPQUFuQlIsaUZBQWUsRUFBQyxLQUE0QyxPQUF6Q1EsU0FBU1IsNEZBQTBCLEdBQUc7d0JBQ3ZFNkQsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsU0FBUzlDO3dCQUNUK0MsT0FBTzs0QkFBRUMsUUFBUTs0QkFBV0MsU0FBUzt3QkFBTzs7Ozs7O29CQUU3QzVELFdBQVc2RCxHQUFHLENBQUM7NEJBQUMsRUFBRXJDLEVBQUUsRUFBRU4sQ0FBQyxFQUFFRyxDQUFDLEVBQUVNLE1BQU0sRUFBRTs2Q0FDbkMsOERBQUM3QixxREFBWUE7NEJBRVhvQixHQUFHQTs0QkFDSEcsR0FBR0E7NEJBQ0hNLFFBQVFBOzRCQUNSbUMsZ0JBQWdCLElBQU1qQixtQkFBbUJyQjsyQkFKcENBOzs7Ozs7Ozs7Ozs7WUFRVm5CLHdCQUFVLDhEQUFDViw2REFBS0E7Z0JBQUNvRSxhQUFhMUQsUUFBUTBELFdBQVc7Z0JBQUVDLG9CQUFvQjNELFFBQVEwRCxXQUFXOzs7Ozs0QkFBTTs7Ozs7OztBQUd2RztHQXZGTWhFOztRQUdhSCxrREFBV0E7UUFDWUMsaURBQVVBOzs7S0FKOUNFO0FBeUZOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4P2NhYzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3RhcGNvbXBvbmVudC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQm9vc3QgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvQm9vc3RcIjtcbmltcG9ydCB7IHVzZVRlbGVncmFtIH0gZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VBcHBVc2VyIH0gZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gXCIuL0FuaW1hdGVkVGV4dFwiO1xuXG5jb25zdCBUYXBDb21wb25lbnQ6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbYW5pbWF0aW9ucywgc2V0QW5pbWF0aW9uc10gPSB1c2VTdGF0ZTx7IGlkOiBudW1iZXI7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBudW1iZXI6IG51bWJlciB9W10+KFtdKTtcbiAgY29uc3QgW2JvdW5jZSwgc2V0Qm91bmNlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VUZWxlZ3JhbSgpO1xuICBjb25zdCB7IGFwcHVzZXIsIGZldGNoQW5kVXBkYXRlVXNlciB9ID0gdXNlQXBwVXNlcigpO1xuICBjb25zdCBhcGlVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnO1xuXG4gIGNvbnN0IGhhbmRsZUltYWdlQ2xpY2sgPSBhc3luYyAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MSW1hZ2VFbGVtZW50PikgPT4ge1xuICAgIGlmICghdXNlcikge1xuICAgICAgY29uc29sZS5lcnJvcignVXNlciBub3QgZm91bmQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjb25zdCBjaGF0X2lkID0gdXNlci5pZDtcbiAgICBjb25zdCBpbWdSZWN0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSBpbWdSZWN0LmxlZnQ7XG4gICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIGltZ1JlY3QudG9wO1xuICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBudW1iZXIgPSBhcHB1c2VyIS5tdWx0aXBsaWVyOyAvLyBTZXQgdGhlIGV4YWN0IG51bWJlciB0byBiZSBkaXNwbGF5ZWRcblxuICAgIHNldEFuaW1hdGlvbnMoKHByZXYpID0+IFtcbiAgICAgIC4uLnByZXYsXG4gICAgICB7IGlkLCB4LCB5LCBudW1iZXIgfVxuICAgIF0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9hcGkvdXNlcnMvJHtjaGF0X2lkfS9nZXR0b3RhbHBvaW50c2AsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3QgbmV3VG90YWxQb2ludHMgPSBkYXRhLnRvdGFscG9pbnRzICsgbnVtYmVyO1xuXG4gICAgICBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy8ke2NoYXRfaWR9L3VwZGF0ZXRvdGFscG9pbnRzYCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0b3RhbHBvaW50czogbmV3VG90YWxQb2ludHMgfSksXG4gICAgICB9KTtcblxuICAgICAgLy8gUmVmcmVzaCBjb250ZXh0IGhlcmVcbiAgICAgIGF3YWl0IGZldGNoQW5kVXBkYXRlVXNlcig3MzAxNDkzNDMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHRvdGFsIHBvaW50czonLCBlcnJvcik7XG4gICAgfVxuXG4gICAgLy8gVHJpZ2dlciB0aGUgY29tYmluZWQgYm91bmNlIGFuaW1hdGlvblxuICAgIHNldEJvdW5jZSh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEJvdW5jZShmYWxzZSksIDEwMDApOyAvLyBSZW1vdmUgdGhlIGNsYXNzIGFmdGVyIHRoZSBhbmltYXRpb24gZHVyYXRpb25cbiAgfTtcblxuICBjb25zdCBoYW5kbGVBbmltYXRpb25FbmQgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHNldEFuaW1hdGlvbnMoKHByZXYpID0+IHByZXYuZmlsdGVyKChhbmltKSA9PiBhbmltLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKFwiYXBwIHVzZXIgbzAwXCIsYXBwdXNlcilcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhcH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhcGN9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGFwaW1hZ2V9ICR7Ym91bmNlID8gc3R5bGVzWydib3VuY2UtYWxsLXNpZGVzJ10gOiAnJ31gfVxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgc3JjPVwiL2JhbGx3aGl0ZS5wbmdcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUltYWdlQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIG91dGxpbmU6ICdub25lJyB9fVxuICAgICAgICAvPlxuICAgICAgICB7YW5pbWF0aW9ucy5tYXAoKHsgaWQsIHgsIHksIG51bWJlciB9KSA9PiAoXG4gICAgICAgICAgPEFuaW1hdGVkVGV4dFxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICB5PXt5fVxuICAgICAgICAgICAgbnVtYmVyPXtudW1iZXJ9XG4gICAgICAgICAgICBvbkFuaW1hdGlvbkVuZD17KCkgPT4gaGFuZGxlQW5pbWF0aW9uRW5kKGlkKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2FwcHVzZXIgPyA8Qm9vc3QgZGFpbHlwb2ludHM9e2FwcHVzZXIuZGFpbHlwb2ludHN9IGRhaWx5cG9pbnRzY291bnRlcj17YXBwdXNlci5kYWlseXBvaW50c30vPiA6ICcnfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFwQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiQm9vc3QiLCJ1c2VUZWxlZ3JhbSIsInVzZUFwcFVzZXIiLCJBbmltYXRlZFRleHQiLCJUYXBDb21wb25lbnQiLCJhbmltYXRpb25zIiwic2V0QW5pbWF0aW9ucyIsImJvdW5jZSIsInNldEJvdW5jZSIsInVzZXIiLCJhcHB1c2VyIiwiZmV0Y2hBbmRVcGRhdGVVc2VyIiwiYXBpVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJoYW5kbGVJbWFnZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImltZ1JlY3QiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJpZCIsIkRhdGUiLCJub3ciLCJudW1iZXIiLCJtdWx0aXBsaWVyIiwicHJldiIsInJlc3BvbnNlIiwiZmV0Y2giLCJjaGF0X2lkIiwibWV0aG9kIiwiaGVhZGVycyIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsIm5ld1RvdGFsUG9pbnRzIiwidG90YWxwb2ludHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFRpbWVvdXQiLCJoYW5kbGVBbmltYXRpb25FbmQiLCJmaWx0ZXIiLCJhbmltIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFwIiwidGFwYyIsImltZyIsInRhcGltYWdlIiwiYWx0Iiwic3JjIiwib25DbGljayIsInN0eWxlIiwiY3Vyc29yIiwib3V0bGluZSIsIm1hcCIsIm9uQW5pbWF0aW9uRW5kIiwiZGFpbHlwb2ludHMiLCJkYWlseXBvaW50c2NvdW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TapComponent.tsx\n"));

/***/ })

});