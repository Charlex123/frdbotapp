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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tabcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tabcomponent.module.css */ \"(app-pages-browser)/./src/app/styles/tabcomponent.module.css\");\n/* harmony import */ var _styles_tabcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tabcomponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_Boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Boost */ \"(app-pages-browser)/./src/app/components/Boost.tsx\");\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimatedText */ \"(app-pages-browser)/./src/app/components/AnimatedText.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst TapComponent = ()=>{\n    _s();\n    const [animations, setAnimations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [sum, setSum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [number_, setNumber_] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    const handleImageClick = (e)=>{\n        const imgRect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - imgRect.left;\n        const y = e.clientY - imgRect.top;\n        const id = Date.now();\n        const number = number_; // Set the exact number to be displayed\n        setAnimations((prev)=>[\n                ...prev,\n                {\n                    id,\n                    x,\n                    y,\n                    number\n                }\n            ]);\n        setSum((prevSum)=>{\n            const newSum = prevSum + number;\n            // sendSumToDatabase(newSum);\n            console.log(\"summm\", sum);\n            return newSum;\n        });\n    };\n    const handleAnimationEnd = (id)=>{\n        setAnimations((prev)=>prev.filter((anim)=>anim.id !== id));\n    };\n    // const sendSumToDatabase = async (newSum: number) => {\n    //   try {\n    //     const response = await fetch('/api/saveSum', {\n    //       method: 'POST',\n    //       headers: {\n    //         'Content-Type': 'application/json',\n    //       },\n    //       body: JSON.stringify({ sum: newSum }),\n    //     });\n    //     if (!response.ok) {\n    //       throw new Error('Network response was not ok');\n    //     }\n    //   } catch (error) {\n    //     console.error('Failed to send sum to database:', error);\n    //   }\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_tabcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_tabcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapc),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_tabcomponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().tapimage),\n                        alt: \"\",\n                        src: \"/soccer.png\",\n                        onClick: handleImageClick,\n                        style: {\n                            cursor: \"pointer\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/TapComponent.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined),\n                    animations.map((param)=>{\n                        let { id, x, y, number } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            x: x,\n                            y: y,\n                            number: number,\n                            onAnimationEnd: ()=>handleAnimationEnd(id)\n                        }, id, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/TapComponent.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/TapComponent.tsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Boost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/TapComponent.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/src/app/components/TapComponent.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TapComponent, \"SCX4lxuB/KLNpyFYWLcfcSPVYOY=\");\n_c = TapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TapComponent);\nvar _c;\n$RefreshReg$(_c, \"TapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFFc0I7QUFDWjtBQUNEO0FBRzFDLE1BQU1JLGVBQXlCOztJQUM3QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQXlELEVBQUU7SUFDdkcsTUFBTSxDQUFDTyxLQUFLQyxPQUFPLEdBQUdSLCtDQUFRQSxDQUFTO0lBQ3ZDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBUztJQUUvQyxNQUFNVyxtQkFBbUIsQ0FBQ0M7UUFDeEIsTUFBTUMsVUFBVUQsRUFBRUUsYUFBYSxDQUFDQyxxQkFBcUI7UUFDckQsTUFBTUMsSUFBSUosRUFBRUssT0FBTyxHQUFHSixRQUFRSyxJQUFJO1FBQ2xDLE1BQU1DLElBQUlQLEVBQUVRLE9BQU8sR0FBR1AsUUFBUVEsR0FBRztRQUNqQyxNQUFNQyxLQUFLQyxLQUFLQyxHQUFHO1FBQ25CLE1BQU1DLFNBQVNoQixTQUFTLHVDQUF1QztRQUUvREgsY0FBYyxDQUFDb0IsT0FBUzttQkFDbkJBO2dCQUNIO29CQUFFSjtvQkFBSU47b0JBQUdHO29CQUFHTTtnQkFBTzthQUNwQjtRQUNEakIsT0FBTyxDQUFDbUI7WUFDTixNQUFNQyxTQUFTRCxVQUFVRjtZQUN6Qiw2QkFBNkI7WUFDN0JJLFFBQVFDLEdBQUcsQ0FBQyxTQUFRdkI7WUFDcEIsT0FBT3FCO1FBQ1Q7SUFDRjtJQUVBLE1BQU1HLHFCQUFxQixDQUFDVDtRQUMxQmhCLGNBQWMsQ0FBQ29CLE9BQVNBLEtBQUtNLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLWCxFQUFFLEtBQUtBO0lBQzVEO0lBRUEsd0RBQXdEO0lBQ3hELFVBQVU7SUFDVixxREFBcUQ7SUFDckQsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsV0FBVztJQUNYLCtDQUErQztJQUMvQyxVQUFVO0lBRVYsMEJBQTBCO0lBQzFCLHdEQUF3RDtJQUN4RCxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLCtEQUErRDtJQUMvRCxNQUFNO0lBQ04sS0FBSztJQUVMLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFXbEMsNEVBQVU7OzBCQUV0Qiw4REFBQ2lDO2dCQUFJQyxXQUFXbEMsNkVBQVc7O2tDQUN2Qiw4REFBQ3FDO3dCQUFJSCxXQUFXbEMsaUZBQWU7d0JBQUV1QyxLQUFJO3dCQUFHQyxLQUFJO3dCQUFlQyxTQUFTL0I7d0JBQ3hFZ0MsT0FBTzs0QkFBRUMsUUFBUTt3QkFBWTs7Ozs7O29CQUM1QnZDLFdBQVd3QyxHQUFHLENBQUM7NEJBQUMsRUFBRXZCLEVBQUUsRUFBRU4sQ0FBQyxFQUFFRyxDQUFDLEVBQUVNLE1BQU0sRUFBRTs2Q0FDbkMsOERBQUN0QixxREFBWUE7NEJBRVhhLEdBQUdBOzRCQUNIRyxHQUFHQTs0QkFDSE0sUUFBUUE7NEJBQ1JxQixnQkFBZ0IsSUFBTWYsbUJBQW1CVDsyQkFKcENBOzs7Ozs7Ozs7Ozs7MEJBUVQsOERBQUNwQiw2REFBS0E7Ozs7Ozs7Ozs7O0FBR2Q7R0FqRU1FO0tBQUFBO0FBbUVOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXBDb21wb25lbnQudHN4P2NhYzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3RhYmNvbXBvbmVudC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQm9vc3QgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvQm9vc3RcIjtcbmltcG9ydCBBbmltYXRlZFRleHQgZnJvbSBcIi4vQW5pbWF0ZWRUZXh0XCI7XG5cblxuY29uc3QgVGFwQ29tcG9uZW50OiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2FuaW1hdGlvbnMsIHNldEFuaW1hdGlvbnNdID0gdXNlU3RhdGU8eyBpZDogbnVtYmVyOyB4OiBudW1iZXI7IHk6IG51bWJlcjsgbnVtYmVyOiBudW1iZXIgfVtdPihbXSk7XG4gIGNvbnN0IFtzdW0sIHNldFN1bV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbbnVtYmVyXywgc2V0TnVtYmVyX10gPSB1c2VTdGF0ZTxudW1iZXI+KDQpIFxuXG4gIGNvbnN0IGhhbmRsZUltYWdlQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MSW1hZ2VFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGltZ1JlY3QgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIGltZ1JlY3QubGVmdDtcbiAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gaW1nUmVjdC50b3A7XG4gICAgY29uc3QgaWQgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IG51bWJlciA9IG51bWJlcl87IC8vIFNldCB0aGUgZXhhY3QgbnVtYmVyIHRvIGJlIGRpc3BsYXllZFxuXG4gICAgc2V0QW5pbWF0aW9ucygocHJldikgPT4gW1xuICAgICAgLi4ucHJldixcbiAgICAgIHsgaWQsIHgsIHksIG51bWJlciB9XG4gICAgXSk7XG4gICAgc2V0U3VtKChwcmV2U3VtKSA9PiB7XG4gICAgICBjb25zdCBuZXdTdW0gPSBwcmV2U3VtICsgbnVtYmVyO1xuICAgICAgLy8gc2VuZFN1bVRvRGF0YWJhc2UobmV3U3VtKTtcbiAgICAgIGNvbnNvbGUubG9nKCdzdW1tbScsc3VtKVxuICAgICAgcmV0dXJuIG5ld1N1bTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBbmltYXRpb25FbmQgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHNldEFuaW1hdGlvbnMoKHByZXYpID0+IHByZXYuZmlsdGVyKChhbmltKSA9PiBhbmltLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIC8vIGNvbnN0IHNlbmRTdW1Ub0RhdGFiYXNlID0gYXN5bmMgKG5ld1N1bTogbnVtYmVyKSA9PiB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc2F2ZVN1bScsIHtcbiAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gIC8vICAgICAgIGhlYWRlcnM6IHtcbiAgLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAvLyAgICAgICB9LFxuICAvLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN1bTogbmV3U3VtIH0pLFxuICAvLyAgICAgfSk7XG5cbiAgLy8gICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNlbmQgc3VtIHRvIGRhdGFiYXNlOicsIGVycm9yKTtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhcH0+XG4gICAgICB7LyogPGltZyBjbGFzc05hbWU9e3N0eWxlcy51bmlvbkljb259IGFsdD1cIlwiIHNyYz1cIi91bmlvbi5zdmdcIiAvPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXBjfT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMudGFwaW1hZ2V9IGFsdD1cIlwiIHNyYz1cIi9zb2NjZXIucG5nXCIgIG9uQ2xpY2s9e2hhbmRsZUltYWdlQ2xpY2t9XG4gICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCAgfX0vPlxuICAgICAgICB7YW5pbWF0aW9ucy5tYXAoKHsgaWQsIHgsIHksIG51bWJlciB9KSA9PiAoXG4gICAgICAgICAgPEFuaW1hdGVkVGV4dFxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICB5PXt5fVxuICAgICAgICAgICAgbnVtYmVyPXtudW1iZXJ9XG4gICAgICAgICAgICBvbkFuaW1hdGlvbkVuZD17KCkgPT4gaGFuZGxlQW5pbWF0aW9uRW5kKGlkKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCb29zdCAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFwQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiQm9vc3QiLCJBbmltYXRlZFRleHQiLCJUYXBDb21wb25lbnQiLCJhbmltYXRpb25zIiwic2V0QW5pbWF0aW9ucyIsInN1bSIsInNldFN1bSIsIm51bWJlcl8iLCJzZXROdW1iZXJfIiwiaGFuZGxlSW1hZ2VDbGljayIsImUiLCJpbWdSZWN0IiwiY3VycmVudFRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJjbGllbnRYIiwibGVmdCIsInkiLCJjbGllbnRZIiwidG9wIiwiaWQiLCJEYXRlIiwibm93IiwibnVtYmVyIiwicHJldiIsInByZXZTdW0iLCJuZXdTdW0iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQW5pbWF0aW9uRW5kIiwiZmlsdGVyIiwiYW5pbSIsImRpdiIsImNsYXNzTmFtZSIsInRhcCIsInRhcGMiLCJpbWciLCJ0YXBpbWFnZSIsImFsdCIsInNyYyIsIm9uQ2xpY2siLCJzdHlsZSIsImN1cnNvciIsIm1hcCIsIm9uQW5pbWF0aW9uRW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TapComponent.tsx\n"));

/***/ })

});