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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tapcomponent.module.css */ \"(app-pages-browser)/./src/app/styles/tapcomponent.module.css\");\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_Boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Boost */ \"(app-pages-browser)/./src/app/components/Boost.tsx\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider */ \"(app-pages-browser)/./src/app/provider.tsx\");\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimatedText */ \"(app-pages-browser)/./src/app/components/AnimatedText.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TapComponent = ()=>{\n    _s();\n    const [animations, setAnimations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bounce, setBounce] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { appuser, fetchAndUpdateUser } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser)();\n    const { user } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram)();\n    const apiUrl = \"http://localhost:4000\" || 0;\n    const handleImageClick = async (e)=>{\n        if (!user) {\n            console.error(\"User not found\");\n            return;\n        }\n        // const chat_id = user.id;\n        const chat_id = 730149343;\n        const imgRect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - imgRect.left;\n        const y = e.clientY - imgRect.top;\n        const id = Date.now();\n        const number = appuser.multiplier; // Set the exact number to be displayed\n        setAnimations((prev)=>[\n                ...prev,\n                {\n                    id,\n                    x,\n                    y,\n                    number\n                }\n            ]);\n        try {\n            const response = await fetch(\"\".concat(apiUrl, \"/api/users/730149343/gettotalpoints\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response.json();\n            console.log(\"res data\", response, data);\n            const newTotalPoints = data.totalpoints + number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/730149343/updatetotalpoints\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    totalpoints: newTotalPoints\n                })\n            });\n            // Refresh context here\n            await fetchAndUpdateUser(730149343);\n        } catch (error) {\n            console.error(\"Failed to update total points:\", error);\n        }\n        // Trigger the combined bounce animation\n        setBounce(true);\n        setTimeout(()=>setBounce(false), 1000); // Remove the class after the animation duration\n    };\n    const handleAnimationEnd = (id)=>{\n        setAnimations((prev)=>prev.filter((anim)=>anim.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"\".concat((_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapimage), \" \").concat(bounce ? (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"bounce-all-sides\"]) : \"\"),\n                        alt: \"\",\n                        src: \"/ballwhite.png\",\n                        onClick: handleImageClick,\n                        style: {\n                            cursor: \"pointer\",\n                            outline: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    animations.map((param)=>{\n                        let { id, x, y, number } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            x: x,\n                            y: y,\n                            number: number,\n                            onAnimationEnd: ()=>handleAnimationEnd(id)\n                        }, id, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Boost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                dailypoints: appuser.dailypoints\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TapComponent, \"ahQ5JEX8yYd5+7bEvj3V0T0oz7w=\", false, function() {\n    return [\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser,\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram\n    ];\n});\n_c = TapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TapComponent);\nvar _c;\n$RefreshReg$(_c, \"TapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBRXNCO0FBQ1o7QUFDVztBQUNaO0FBRTFDLE1BQU1NLGVBQXlCOztJQUM3QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQXlELEVBQUU7SUFDdkcsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFVO0lBQzlDLE1BQU0sRUFBRVcsT0FBTyxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHVCxxREFBVUE7SUFDbEQsTUFBTSxFQUFFVSxJQUFJLEVBQUUsR0FBR1Qsc0RBQVdBO0lBQzVCLE1BQU1VLFNBQVNDLHVCQUErQixJQUFJO0lBRWxELE1BQU1HLG1CQUFtQixPQUFPQztRQUM5QixJQUFJLENBQUNOLE1BQU07WUFDVE8sUUFBUUMsS0FBSyxDQUFDO1lBQ2Q7UUFDRjtRQUVBLDJCQUEyQjtRQUMzQixNQUFNQyxVQUFVO1FBQ2hCLE1BQU1DLFVBQVVKLEVBQUVLLGFBQWEsQ0FBQ0MscUJBQXFCO1FBQ3JELE1BQU1DLElBQUlQLEVBQUVRLE9BQU8sR0FBR0osUUFBUUssSUFBSTtRQUNsQyxNQUFNQyxJQUFJVixFQUFFVyxPQUFPLEdBQUdQLFFBQVFRLEdBQUc7UUFDakMsTUFBTUMsS0FBS0MsS0FBS0MsR0FBRztRQUNuQixNQUFNQyxTQUFTeEIsUUFBU3lCLFVBQVUsRUFBRSx1Q0FBdUM7UUFFM0U1QixjQUFjLENBQUM2QixPQUFTO21CQUNuQkE7Z0JBQ0g7b0JBQUVMO29CQUFJTjtvQkFBR0c7b0JBQUdNO2dCQUFPO2FBQ3BCO1FBRUQsSUFBSTtZQUNGLE1BQU1HLFdBQVcsTUFBTUMsTUFBTSxHQUFVLE9BQVB6QixRQUFPLHdDQUFzQztnQkFDM0UwQixRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUVBLElBQUksQ0FBQ0gsU0FBU0ksRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFFQSxNQUFNQyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7WUFDaEN6QixRQUFRMEIsR0FBRyxDQUFDLFlBQVdSLFVBQVVNO1lBQ2pDLE1BQU1HLGlCQUFpQkgsS0FBS0ksV0FBVyxHQUFHYjtZQUUxQyxNQUFNSSxNQUFNLEdBQVUsT0FBUHpCLFFBQU8sMkNBQXlDO2dCQUM3RDBCLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQVEsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFSCxhQUFhRDtnQkFBZTtZQUNyRDtZQUVBLHVCQUF1QjtZQUN2QixNQUFNbkMsbUJBQW1CO1FBQzNCLEVBQUUsT0FBT1MsT0FBTztZQUNkRCxRQUFRQyxLQUFLLENBQUMsa0NBQWtDQTtRQUNsRDtRQUVBLHdDQUF3QztRQUN4Q1gsVUFBVTtRQUNWMEMsV0FBVyxJQUFNMUMsVUFBVSxRQUFRLE9BQU8sZ0RBQWdEO0lBQzVGO0lBRUEsTUFBTTJDLHFCQUFxQixDQUFDckI7UUFDMUJ4QixjQUFjLENBQUM2QixPQUFTQSxLQUFLaUIsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUt2QixFQUFFLEtBQUtBO0lBQzVEO0lBRUEscUJBQ0UsOERBQUN3QjtRQUFJQyxXQUFXeEQsNEVBQVU7OzBCQUN4Qiw4REFBQ3VEO2dCQUFJQyxXQUFXeEQsNkVBQVc7O2tDQUN6Qiw4REFBQzJEO3dCQUNDSCxXQUFXLEdBQXNCaEQsT0FBbkJSLGlGQUFlLEVBQUMsS0FBNEMsT0FBekNRLFNBQVNSLDRGQUEwQixHQUFHO3dCQUN2RTZELEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pDLFNBQVM5Qzt3QkFDVCtDLE9BQU87NEJBQUVDLFFBQVE7NEJBQVdDLFNBQVM7d0JBQU87Ozs7OztvQkFFN0M1RCxXQUFXNkQsR0FBRyxDQUFDOzRCQUFDLEVBQUVwQyxFQUFFLEVBQUVOLENBQUMsRUFBRUcsQ0FBQyxFQUFFTSxNQUFNLEVBQUU7NkNBQ25DLDhEQUFDOUIscURBQVlBOzRCQUVYcUIsR0FBR0E7NEJBQ0hHLEdBQUdBOzRCQUNITSxRQUFRQTs0QkFDUmtDLGdCQUFnQixJQUFNaEIsbUJBQW1CckI7MkJBSnBDQTs7Ozs7Ozs7Ozs7OzBCQVFYLDhEQUFDOUIsNkRBQUtBO2dCQUFDb0UsYUFBYTNELFFBQVMyRCxXQUFXOzs7Ozs7Ozs7Ozs7QUFHOUM7R0F4Rk1oRTs7UUFHb0NILGlEQUFVQTtRQUNqQ0Msa0RBQVdBOzs7S0FKeEJFO0FBMEZOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4P2NhYzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3RhcGNvbXBvbmVudC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQm9vc3QgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvQm9vc3RcIjtcbmltcG9ydCB7IHVzZUFwcFVzZXIsIHVzZVRlbGVncmFtIH0gZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gXCIuL0FuaW1hdGVkVGV4dFwiO1xuXG5jb25zdCBUYXBDb21wb25lbnQ6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbYW5pbWF0aW9ucywgc2V0QW5pbWF0aW9uc10gPSB1c2VTdGF0ZTx7IGlkOiBudW1iZXI7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBudW1iZXI6IG51bWJlciB9W10+KFtdKTtcbiAgY29uc3QgW2JvdW5jZSwgc2V0Qm91bmNlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgeyBhcHB1c2VyLCBmZXRjaEFuZFVwZGF0ZVVzZXIgfSA9IHVzZUFwcFVzZXIoKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VUZWxlZ3JhbSgpO1xuICBjb25zdCBhcGlVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnO1xuXG4gIGNvbnN0IGhhbmRsZUltYWdlQ2xpY2sgPSBhc3luYyAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MSW1hZ2VFbGVtZW50PikgPT4ge1xuICAgIGlmICghdXNlcikge1xuICAgICAgY29uc29sZS5lcnJvcignVXNlciBub3QgZm91bmQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjb25zdCBjaGF0X2lkID0gdXNlci5pZDtcbiAgICBjb25zdCBjaGF0X2lkID0gNzMwMTQ5MzQzO1xuICAgIGNvbnN0IGltZ1JlY3QgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIGltZ1JlY3QubGVmdDtcbiAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gaW1nUmVjdC50b3A7XG4gICAgY29uc3QgaWQgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IG51bWJlciA9IGFwcHVzZXIhLm11bHRpcGxpZXI7IC8vIFNldCB0aGUgZXhhY3QgbnVtYmVyIHRvIGJlIGRpc3BsYXllZFxuXG4gICAgc2V0QW5pbWF0aW9ucygocHJldikgPT4gW1xuICAgICAgLi4ucHJldixcbiAgICAgIHsgaWQsIHgsIHksIG51bWJlciB9XG4gICAgXSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy83MzAxNDkzNDMvZ2V0dG90YWxwb2ludHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzIGRhdGFcIixyZXNwb25zZSwgZGF0YSlcbiAgICAgIGNvbnN0IG5ld1RvdGFsUG9pbnRzID0gZGF0YS50b3RhbHBvaW50cyArIG51bWJlcjtcblxuICAgICAgYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9hcGkvdXNlcnMvNzMwMTQ5MzQzL3VwZGF0ZXRvdGFscG9pbnRzYCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0b3RhbHBvaW50czogbmV3VG90YWxQb2ludHMgfSksXG4gICAgICB9KTtcblxuICAgICAgLy8gUmVmcmVzaCBjb250ZXh0IGhlcmVcbiAgICAgIGF3YWl0IGZldGNoQW5kVXBkYXRlVXNlcig3MzAxNDkzNDMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHRvdGFsIHBvaW50czonLCBlcnJvcik7XG4gICAgfVxuXG4gICAgLy8gVHJpZ2dlciB0aGUgY29tYmluZWQgYm91bmNlIGFuaW1hdGlvblxuICAgIHNldEJvdW5jZSh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEJvdW5jZShmYWxzZSksIDEwMDApOyAvLyBSZW1vdmUgdGhlIGNsYXNzIGFmdGVyIHRoZSBhbmltYXRpb24gZHVyYXRpb25cbiAgfTtcblxuICBjb25zdCBoYW5kbGVBbmltYXRpb25FbmQgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHNldEFuaW1hdGlvbnMoKHByZXYpID0+IHByZXYuZmlsdGVyKChhbmltKSA9PiBhbmltLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXBjfT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRhcGltYWdlfSAke2JvdW5jZSA/IHN0eWxlc1snYm91bmNlLWFsbC1zaWRlcyddIDogJyd9YH1cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIHNyYz1cIi9iYWxsd2hpdGUucG5nXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbWFnZUNsaWNrfVxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgLz5cbiAgICAgICAge2FuaW1hdGlvbnMubWFwKCh7IGlkLCB4LCB5LCBudW1iZXIgfSkgPT4gKFxuICAgICAgICAgIDxBbmltYXRlZFRleHRcbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgeT17eX1cbiAgICAgICAgICAgIG51bWJlcj17bnVtYmVyfVxuICAgICAgICAgICAgb25BbmltYXRpb25FbmQ9eygpID0+IGhhbmRsZUFuaW1hdGlvbkVuZChpZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCb29zdCBkYWlseXBvaW50cz17YXBwdXNlciEuZGFpbHlwb2ludHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJCb29zdCIsInVzZUFwcFVzZXIiLCJ1c2VUZWxlZ3JhbSIsIkFuaW1hdGVkVGV4dCIsIlRhcENvbXBvbmVudCIsImFuaW1hdGlvbnMiLCJzZXRBbmltYXRpb25zIiwiYm91bmNlIiwic2V0Qm91bmNlIiwiYXBwdXNlciIsImZldGNoQW5kVXBkYXRlVXNlciIsInVzZXIiLCJhcGlVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImhhbmRsZUltYWdlQ2xpY2siLCJlIiwiY29uc29sZSIsImVycm9yIiwiY2hhdF9pZCIsImltZ1JlY3QiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJpZCIsIkRhdGUiLCJub3ciLCJudW1iZXIiLCJtdWx0aXBsaWVyIiwicHJldiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwibG9nIiwibmV3VG90YWxQb2ludHMiLCJ0b3RhbHBvaW50cyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0VGltZW91dCIsImhhbmRsZUFuaW1hdGlvbkVuZCIsImZpbHRlciIsImFuaW0iLCJkaXYiLCJjbGFzc05hbWUiLCJ0YXAiLCJ0YXBjIiwiaW1nIiwidGFwaW1hZ2UiLCJhbHQiLCJzcmMiLCJvbkNsaWNrIiwic3R5bGUiLCJjdXJzb3IiLCJvdXRsaW5lIiwibWFwIiwib25BbmltYXRpb25FbmQiLCJkYWlseXBvaW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TapComponent.tsx\n"));

/***/ })

});