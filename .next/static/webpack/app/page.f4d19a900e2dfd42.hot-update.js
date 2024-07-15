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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tabcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tabcomponent.module.css */ \"(app-pages-browser)/./src/app/styles/tabcomponent.module.css\");\n/* harmony import */ var _styles_tabcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tabcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_Boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Boost */ \"(app-pages-browser)/./src/app/components/Boost.tsx\");\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimatedText */ \"(app-pages-browser)/./src/app/components/AnimatedText.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst TapComponent = ()=>{\n    _s();\n    const [animations, setAnimations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [sum, setSum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [number_, setNumber_] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    const handleImageClick = (e)=>{\n        const imgRect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - imgRect.left;\n        const y = e.clientY - imgRect.top;\n        const id = Date.now();\n        const number = number_; // Set the exact number to be displayed\n        setAnimations((prev)=>[\n                ...prev,\n                {\n                    id,\n                    x,\n                    y,\n                    number\n                }\n            ]);\n        setSum((prevSum)=>{\n            const newSum = prevSum + number;\n            sendSumToDatabase(newSum);\n            return newSum;\n        });\n    };\n    const handleAnimationEnd = (id)=>{\n        setAnimations((prev)=>prev.filter((anim)=>anim.id !== id));\n    };\n    const sendSumToDatabase = async (newSum)=>{\n        try {\n            const response = await fetch(\"/api/saveSum\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    sum: newSum\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n        } catch (error) {\n            console.error(\"Failed to send sum to database:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_tabcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().gameinfo),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_tabcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tap),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_tabcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().levelUpChild),\n                        alt: \"\",\n                        src: \"/soccer.png\",\n                        onClick: handleImageClick,\n                        style: {\n                            cursor: \"pointer\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/TapComponent.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined),\n                    animations.map((param)=>{\n                        let { id, x, y, number } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            x: x,\n                            y: y,\n                            number: number,\n                            onAnimationEnd: ()=>handleAnimationEnd(id)\n                        }, id, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/TapComponent.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/TapComponent.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Boost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/TapComponent.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/TapComponent.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TapComponent, \"SCX4lxuB/KLNpyFYWLcfcSPVYOY=\");\n_c = TapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TapComponent);\nvar _c;\n$RefreshReg$(_c, \"TapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFFc0I7QUFDWjtBQUNEO0FBRzFDLE1BQU1JLGVBQXlCOztJQUM3QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQXlELEVBQUU7SUFDdkcsTUFBTSxDQUFDTyxLQUFLQyxPQUFPLEdBQUdSLCtDQUFRQSxDQUFTO0lBQ3ZDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBUztJQUUvQyxNQUFNVyxtQkFBbUIsQ0FBQ0M7UUFDeEIsTUFBTUMsVUFBVUQsRUFBRUUsYUFBYSxDQUFDQyxxQkFBcUI7UUFDckQsTUFBTUMsSUFBSUosRUFBRUssT0FBTyxHQUFHSixRQUFRSyxJQUFJO1FBQ2xDLE1BQU1DLElBQUlQLEVBQUVRLE9BQU8sR0FBR1AsUUFBUVEsR0FBRztRQUNqQyxNQUFNQyxLQUFLQyxLQUFLQyxHQUFHO1FBQ25CLE1BQU1DLFNBQVNoQixTQUFTLHVDQUF1QztRQUUvREgsY0FBYyxDQUFDb0IsT0FBUzttQkFDbkJBO2dCQUNIO29CQUFFSjtvQkFBSU47b0JBQUdHO29CQUFHTTtnQkFBTzthQUNwQjtRQUNEakIsT0FBTyxDQUFDbUI7WUFDTixNQUFNQyxTQUFTRCxVQUFVRjtZQUN6Qkksa0JBQWtCRDtZQUNsQixPQUFPQTtRQUNUO0lBQ0Y7SUFFQSxNQUFNRSxxQkFBcUIsQ0FBQ1I7UUFDMUJoQixjQUFjLENBQUNvQixPQUFTQSxLQUFLSyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS1YsRUFBRSxLQUFLQTtJQUM1RDtJQUVBLE1BQU1PLG9CQUFvQixPQUFPRDtRQUMvQixJQUFJO1lBQ0YsTUFBTUssV0FBVyxNQUFNQyxNQUFNLGdCQUFnQjtnQkFDM0NDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFaEMsS0FBS3FCO2dCQUFPO1lBQ3JDO1lBRUEsSUFBSSxDQUFDSyxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsbUNBQW1DQTtRQUNuRDtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVc1QyxpRkFBZTs7MEJBRTNCLDhEQUFDMkM7Z0JBQUlDLFdBQVc1Qyw0RUFBVTs7a0NBQ3RCLDhEQUFDK0M7d0JBQUlILFdBQVc1QyxxRkFBbUI7d0JBQUVpRCxLQUFJO3dCQUFHQyxLQUFJO3dCQUFlQyxTQUFTekM7d0JBQzVFMEMsT0FBTzs0QkFBRUMsUUFBUTt3QkFBVTs7Ozs7O29CQUMxQmpELFdBQVdrRCxHQUFHLENBQUM7NEJBQUMsRUFBRWpDLEVBQUUsRUFBRU4sQ0FBQyxFQUFFRyxDQUFDLEVBQUVNLE1BQU0sRUFBRTs2Q0FDbkMsOERBQUN0QixxREFBWUE7NEJBRVhhLEdBQUdBOzRCQUNIRyxHQUFHQTs0QkFDSE0sUUFBUUE7NEJBQ1IrQixnQkFBZ0IsSUFBTTFCLG1CQUFtQlI7MkJBSnBDQTs7Ozs7Ozs7Ozs7OzBCQVFULDhEQUFDcEIsNkRBQUtBOzs7Ozs7Ozs7OztBQUdkO0dBaEVNRTtLQUFBQTtBQWtFTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGFwQ29tcG9uZW50LnRzeD9jYWM3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy90YWJjb21wb25lbnQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEJvb3N0IGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0Jvb3N0XCI7XG5pbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gXCIuL0FuaW1hdGVkVGV4dFwiO1xuXG5cbmNvbnN0IFRhcENvbXBvbmVudDogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFthbmltYXRpb25zLCBzZXRBbmltYXRpb25zXSA9IHVzZVN0YXRlPHsgaWQ6IG51bWJlcjsgeDogbnVtYmVyOyB5OiBudW1iZXI7IG51bWJlcjogbnVtYmVyIH1bXT4oW10pO1xuICBjb25zdCBbc3VtLCBzZXRTdW1dID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW251bWJlcl8sIHNldE51bWJlcl9dID0gdXNlU3RhdGU8bnVtYmVyPig0KSBcblxuICBjb25zdCBoYW5kbGVJbWFnZUNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEltYWdlRWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBpbWdSZWN0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSBpbWdSZWN0LmxlZnQ7XG4gICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIGltZ1JlY3QudG9wO1xuICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBudW1iZXIgPSBudW1iZXJfOyAvLyBTZXQgdGhlIGV4YWN0IG51bWJlciB0byBiZSBkaXNwbGF5ZWRcblxuICAgIHNldEFuaW1hdGlvbnMoKHByZXYpID0+IFtcbiAgICAgIC4uLnByZXYsXG4gICAgICB7IGlkLCB4LCB5LCBudW1iZXIgfVxuICAgIF0pO1xuICAgIHNldFN1bSgocHJldlN1bSkgPT4ge1xuICAgICAgY29uc3QgbmV3U3VtID0gcHJldlN1bSArIG51bWJlcjtcbiAgICAgIHNlbmRTdW1Ub0RhdGFiYXNlKG5ld1N1bSk7XG4gICAgICByZXR1cm4gbmV3U3VtO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFuaW1hdGlvbkVuZCA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0QW5pbWF0aW9ucygocHJldikgPT4gcHJldi5maWx0ZXIoKGFuaW0pID0+IGFuaW0uaWQgIT09IGlkKSk7XG4gIH07XG5cbiAgY29uc3Qgc2VuZFN1bVRvRGF0YWJhc2UgPSBhc3luYyAobmV3U3VtOiBudW1iZXIpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9zYXZlU3VtJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3VtOiBuZXdTdW0gfSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2VuZCBzdW0gdG8gZGF0YWJhc2U6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZWluZm99PlxuICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMudW5pb25JY29ufSBhbHQ9XCJcIiBzcmM9XCIvdW5pb24uc3ZnXCIgLz4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFwfT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubGV2ZWxVcENoaWxkfSBhbHQ9XCJcIiBzcmM9XCIvc29jY2VyLnBuZ1wiICBvbkNsaWNrPXtoYW5kbGVJbWFnZUNsaWNrfVxuICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fS8+XG4gICAgICAgIHthbmltYXRpb25zLm1hcCgoeyBpZCwgeCwgeSwgbnVtYmVyIH0pID0+IChcbiAgICAgICAgICA8QW5pbWF0ZWRUZXh0XG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgIHk9e3l9XG4gICAgICAgICAgICBudW1iZXI9e251bWJlcn1cbiAgICAgICAgICAgIG9uQW5pbWF0aW9uRW5kPXsoKSA9PiBoYW5kbGVBbmltYXRpb25FbmQoaWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJvb3N0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJCb29zdCIsIkFuaW1hdGVkVGV4dCIsIlRhcENvbXBvbmVudCIsImFuaW1hdGlvbnMiLCJzZXRBbmltYXRpb25zIiwic3VtIiwic2V0U3VtIiwibnVtYmVyXyIsInNldE51bWJlcl8iLCJoYW5kbGVJbWFnZUNsaWNrIiwiZSIsImltZ1JlY3QiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJpZCIsIkRhdGUiLCJub3ciLCJudW1iZXIiLCJwcmV2IiwicHJldlN1bSIsIm5ld1N1bSIsInNlbmRTdW1Ub0RhdGFiYXNlIiwiaGFuZGxlQW5pbWF0aW9uRW5kIiwiZmlsdGVyIiwiYW5pbSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZ2FtZWluZm8iLCJ0YXAiLCJpbWciLCJsZXZlbFVwQ2hpbGQiLCJhbHQiLCJzcmMiLCJvbkNsaWNrIiwic3R5bGUiLCJjdXJzb3IiLCJtYXAiLCJvbkFuaW1hdGlvbkVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TapComponent.tsx\n"));

/***/ })

});