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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tapcomponent.module.css */ \"(app-pages-browser)/./src/app/styles/tapcomponent.module.css\");\n/* harmony import */ var _styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_Boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Boost */ \"(app-pages-browser)/./src/app/components/Boost.tsx\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider */ \"(app-pages-browser)/./src/app/provider.tsx\");\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimatedText */ \"(app-pages-browser)/./src/app/components/AnimatedText.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TapComponent = ()=>{\n    _s();\n    const [animations, setAnimations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bounce, setBounce] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { appuser, fetchAndUpdateUser } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser)();\n    const { user } = (0,_provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram)();\n    const apiUrl = \"http://localhost:4000\" || 0;\n    const handleImageClick = async (e)=>{\n        if (!user) {\n            console.error(\"User not found\");\n            return;\n        }\n        // const chat_id = user.id;\n        const chat_id = 730149343;\n        const imgRect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - imgRect.left;\n        const y = e.clientY - imgRect.top;\n        const id = Date.now();\n        const number = appuser.multiplier; // Set the exact number to be displayed\n        setAnimations((prev)=>[\n                ...prev,\n                {\n                    id,\n                    x,\n                    y,\n                    number\n                }\n            ]);\n        try {\n            const response = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/gettotalpoints\"), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            console.log(\"\");\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response.json();\n            const newTotalPoints = data.totalpoints + number;\n            await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id, \"/updatetotalpoints\"), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    totalpoints: newTotalPoints\n                })\n            });\n            // Refresh context here\n            await fetchAndUpdateUser(chat_id);\n        } catch (error) {\n            console.error(\"Failed to update total points:\", error);\n        }\n        // Trigger the combined bounce animation\n        setBounce(true);\n        setTimeout(()=>setBounce(false), 1000); // Remove the class after the animation duration\n    };\n    const handleAnimationEnd = (id)=>{\n        setAnimations((prev)=>prev.filter((anim)=>anim.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"\".concat((_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapimage), \" \").concat(bounce ? (_styles_tapcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"bounce-all-sides\"]) : \"\"),\n                        alt: \"\",\n                        src: \"/ballwhite.png\",\n                        onClick: handleImageClick,\n                        style: {\n                            cursor: \"pointer\",\n                            outline: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    animations.map((param)=>{\n                        let { id, x, y, number } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            x: x,\n                            y: y,\n                            number: number,\n                            onAnimationEnd: ()=>handleAnimationEnd(id)\n                        }, id, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Boost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                dailypoints: appuser.dailypoints\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/components/TapComponent.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TapComponent, \"ahQ5JEX8yYd5+7bEvj3V0T0oz7w=\", false, function() {\n    return [\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useAppUser,\n        _provider__WEBPACK_IMPORTED_MODULE_4__.useTelegram\n    ];\n});\n_c = TapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TapComponent);\nvar _c;\n$RefreshReg$(_c, \"TapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBRXNCO0FBQ1o7QUFDVztBQUNaO0FBRTFDLE1BQU1NLGVBQXlCOztJQUM3QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQXlELEVBQUU7SUFDdkcsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFVO0lBQzlDLE1BQU0sRUFBRVcsT0FBTyxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHVCxxREFBVUE7SUFDbEQsTUFBTSxFQUFFVSxJQUFJLEVBQUUsR0FBR1Qsc0RBQVdBO0lBQzVCLE1BQU1VLFNBQVNDLHVCQUErQixJQUFJO0lBRWxELE1BQU1HLG1CQUFtQixPQUFPQztRQUM5QixJQUFJLENBQUNOLE1BQU07WUFDVE8sUUFBUUMsS0FBSyxDQUFDO1lBQ2Q7UUFDRjtRQUVBLDJCQUEyQjtRQUMzQixNQUFNQyxVQUFVO1FBQ2hCLE1BQU1DLFVBQVVKLEVBQUVLLGFBQWEsQ0FBQ0MscUJBQXFCO1FBQ3JELE1BQU1DLElBQUlQLEVBQUVRLE9BQU8sR0FBR0osUUFBUUssSUFBSTtRQUNsQyxNQUFNQyxJQUFJVixFQUFFVyxPQUFPLEdBQUdQLFFBQVFRLEdBQUc7UUFDakMsTUFBTUMsS0FBS0MsS0FBS0MsR0FBRztRQUNuQixNQUFNQyxTQUFTeEIsUUFBU3lCLFVBQVUsRUFBRSx1Q0FBdUM7UUFFM0U1QixjQUFjLENBQUM2QixPQUFTO21CQUNuQkE7Z0JBQ0g7b0JBQUVMO29CQUFJTjtvQkFBR0c7b0JBQUdNO2dCQUFPO2FBQ3BCO1FBRUQsSUFBSTtZQUNGLE1BQU1HLFdBQVcsTUFBTUMsTUFBTSxHQUF1QmpCLE9BQXBCUixRQUFPLGVBQXFCLE9BQVJRLFNBQVEsb0JBQWtCO2dCQUM1RWtCLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBQ0FyQixRQUFRc0IsR0FBRyxDQUFDO1lBQ1osSUFBSSxDQUFDSixTQUFTSyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUVBLE1BQU1DLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtZQUNoQyxNQUFNQyxpQkFBaUJGLEtBQUtHLFdBQVcsR0FBR2I7WUFFMUMsTUFBTUksTUFBTSxHQUF1QmpCLE9BQXBCUixRQUFPLGVBQXFCLE9BQVJRLFNBQVEsdUJBQXFCO2dCQUM5RGtCLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQVEsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFSCxhQUFhRDtnQkFBZTtZQUNyRDtZQUVBLHVCQUF1QjtZQUN2QixNQUFNbkMsbUJBQW1CVTtRQUMzQixFQUFFLE9BQU9ELE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDLGtDQUFrQ0E7UUFDbEQ7UUFFQSx3Q0FBd0M7UUFDeENYLFVBQVU7UUFDVjBDLFdBQVcsSUFBTTFDLFVBQVUsUUFBUSxPQUFPLGdEQUFnRDtJQUM1RjtJQUVBLE1BQU0yQyxxQkFBcUIsQ0FBQ3JCO1FBQzFCeEIsY0FBYyxDQUFDNkIsT0FBU0EsS0FBS2lCLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLdkIsRUFBRSxLQUFLQTtJQUM1RDtJQUVBLHFCQUNFLDhEQUFDd0I7UUFBSUMsV0FBV3hELDRFQUFVOzswQkFDeEIsOERBQUN1RDtnQkFBSUMsV0FBV3hELDZFQUFXOztrQ0FDekIsOERBQUMyRDt3QkFDQ0gsV0FBVyxHQUFzQmhELE9BQW5CUixpRkFBZSxFQUFDLEtBQTRDLE9BQXpDUSxTQUFTUiw0RkFBMEIsR0FBRzt3QkFDdkU2RCxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKQyxTQUFTOUM7d0JBQ1QrQyxPQUFPOzRCQUFFQyxRQUFROzRCQUFXQyxTQUFTO3dCQUFPOzs7Ozs7b0JBRTdDNUQsV0FBVzZELEdBQUcsQ0FBQzs0QkFBQyxFQUFFcEMsRUFBRSxFQUFFTixDQUFDLEVBQUVHLENBQUMsRUFBRU0sTUFBTSxFQUFFOzZDQUNuQyw4REFBQzlCLHFEQUFZQTs0QkFFWHFCLEdBQUdBOzRCQUNIRyxHQUFHQTs0QkFDSE0sUUFBUUE7NEJBQ1JrQyxnQkFBZ0IsSUFBTWhCLG1CQUFtQnJCOzJCQUpwQ0E7Ozs7Ozs7Ozs7OzswQkFRWCw4REFBQzlCLDZEQUFLQTtnQkFBQ29FLGFBQWEzRCxRQUFTMkQsV0FBVzs7Ozs7Ozs7Ozs7O0FBRzlDO0dBdkZNaEU7O1FBR29DSCxpREFBVUE7UUFDakNDLGtEQUFXQTs7O0tBSnhCRTtBQXlGTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGFwQ29tcG9uZW50LnRzeD9jYWM3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy90YXBjb21wb25lbnQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEJvb3N0IGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0Jvb3N0XCI7XG5pbXBvcnQgeyB1c2VBcHBVc2VyLCB1c2VUZWxlZ3JhbSB9IGZyb20gXCIuLi9wcm92aWRlclwiO1xuaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tIFwiLi9BbmltYXRlZFRleHRcIjtcblxuY29uc3QgVGFwQ29tcG9uZW50OiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2FuaW1hdGlvbnMsIHNldEFuaW1hdGlvbnNdID0gdXNlU3RhdGU8eyBpZDogbnVtYmVyOyB4OiBudW1iZXI7IHk6IG51bWJlcjsgbnVtYmVyOiBudW1iZXIgfVtdPihbXSk7XG4gIGNvbnN0IFtib3VuY2UsIHNldEJvdW5jZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IHsgYXBwdXNlciwgZmV0Y2hBbmRVcGRhdGVVc2VyIH0gPSB1c2VBcHBVc2VyKCk7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVGVsZWdyYW0oKTtcbiAgY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDo0MDAwJztcblxuICBjb25zdCBoYW5kbGVJbWFnZUNsaWNrID0gYXN5bmMgKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEltYWdlRWxlbWVudD4pID0+IHtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY29uc3QgY2hhdF9pZCA9IHVzZXIuaWQ7XG4gICAgY29uc3QgY2hhdF9pZCA9IDczMDE0OTM0MztcbiAgICBjb25zdCBpbWdSZWN0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSBpbWdSZWN0LmxlZnQ7XG4gICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIGltZ1JlY3QudG9wO1xuICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBudW1iZXIgPSBhcHB1c2VyIS5tdWx0aXBsaWVyOyAvLyBTZXQgdGhlIGV4YWN0IG51bWJlciB0byBiZSBkaXNwbGF5ZWRcblxuICAgIHNldEFuaW1hdGlvbnMoKHByZXYpID0+IFtcbiAgICAgIC4uLnByZXYsXG4gICAgICB7IGlkLCB4LCB5LCBudW1iZXIgfVxuICAgIF0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9hcGkvdXNlcnMvJHtjaGF0X2lkfS9nZXR0b3RhbHBvaW50c2AsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiXCIsKVxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3QgbmV3VG90YWxQb2ludHMgPSBkYXRhLnRvdGFscG9pbnRzICsgbnVtYmVyO1xuXG4gICAgICBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS91c2Vycy8ke2NoYXRfaWR9L3VwZGF0ZXRvdGFscG9pbnRzYCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0b3RhbHBvaW50czogbmV3VG90YWxQb2ludHMgfSksXG4gICAgICB9KTtcblxuICAgICAgLy8gUmVmcmVzaCBjb250ZXh0IGhlcmVcbiAgICAgIGF3YWl0IGZldGNoQW5kVXBkYXRlVXNlcihjaGF0X2lkKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSB0b3RhbCBwb2ludHM6JywgZXJyb3IpO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgdGhlIGNvbWJpbmVkIGJvdW5jZSBhbmltYXRpb25cbiAgICBzZXRCb3VuY2UodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRCb3VuY2UoZmFsc2UpLCAxMDAwKTsgLy8gUmVtb3ZlIHRoZSBjbGFzcyBhZnRlciB0aGUgYW5pbWF0aW9uIGR1cmF0aW9uXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQW5pbWF0aW9uRW5kID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRBbmltYXRpb25zKChwcmV2KSA9PiBwcmV2LmZpbHRlcigoYW5pbSkgPT4gYW5pbS5pZCAhPT0gaWQpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFwfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFwY30+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy50YXBpbWFnZX0gJHtib3VuY2UgPyBzdHlsZXNbJ2JvdW5jZS1hbGwtc2lkZXMnXSA6ICcnfWB9XG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICBzcmM9XCIvYmFsbHdoaXRlLnBuZ1wiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlSW1hZ2VDbGlja31cbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgb3V0bGluZTogJ25vbmUnIH19XG4gICAgICAgIC8+XG4gICAgICAgIHthbmltYXRpb25zLm1hcCgoeyBpZCwgeCwgeSwgbnVtYmVyIH0pID0+IChcbiAgICAgICAgICA8QW5pbWF0ZWRUZXh0XG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgIHk9e3l9XG4gICAgICAgICAgICBudW1iZXI9e251bWJlcn1cbiAgICAgICAgICAgIG9uQW5pbWF0aW9uRW5kPXsoKSA9PiBoYW5kbGVBbmltYXRpb25FbmQoaWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8Qm9vc3QgZGFpbHlwb2ludHM9e2FwcHVzZXIhLmRhaWx5cG9pbnRzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFwQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiQm9vc3QiLCJ1c2VBcHBVc2VyIiwidXNlVGVsZWdyYW0iLCJBbmltYXRlZFRleHQiLCJUYXBDb21wb25lbnQiLCJhbmltYXRpb25zIiwic2V0QW5pbWF0aW9ucyIsImJvdW5jZSIsInNldEJvdW5jZSIsImFwcHVzZXIiLCJmZXRjaEFuZFVwZGF0ZVVzZXIiLCJ1c2VyIiwiYXBpVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJoYW5kbGVJbWFnZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNoYXRfaWQiLCJpbWdSZWN0IiwiY3VycmVudFRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJjbGllbnRYIiwibGVmdCIsInkiLCJjbGllbnRZIiwidG9wIiwiaWQiLCJEYXRlIiwibm93IiwibnVtYmVyIiwibXVsdGlwbGllciIsInByZXYiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImxvZyIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsIm5ld1RvdGFsUG9pbnRzIiwidG90YWxwb2ludHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFRpbWVvdXQiLCJoYW5kbGVBbmltYXRpb25FbmQiLCJmaWx0ZXIiLCJhbmltIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFwIiwidGFwYyIsImltZyIsInRhcGltYWdlIiwiYWx0Iiwic3JjIiwib25DbGljayIsInN0eWxlIiwiY3Vyc29yIiwib3V0bGluZSIsIm1hcCIsIm9uQW5pbWF0aW9uRW5kIiwiZGFpbHlwb2ludHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TapComponent.tsx\n"));

/***/ })

});