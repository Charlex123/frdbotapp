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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f6326cce0fdf\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R5bGVzL2dsb2JhbC5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc3R5bGVzL2dsb2JhbC5jc3M/Yzk4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImY2MzI2Y2NlMGZkZlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/provider.tsx":
/*!******************************!*\
  !*** ./src/app/provider.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppUserContext: function() { return /* binding */ AppUserContext; },\n/* harmony export */   TelegramContext: function() { return /* binding */ TelegramContext; },\n/* harmony export */   TelegramProvider: function() { return /* binding */ TelegramProvider; },\n/* harmony export */   useAppUser: function() { return /* binding */ useAppUser; },\n/* harmony export */   useTelegram: function() { return /* binding */ useTelegram; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"(app-pages-browser)/./node_modules/next/dist/api/script.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ TelegramContext,AppUserContext,TelegramProvider,useTelegram,useAppUser auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\nconst TelegramContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nconst AppUserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n    loading: true,\n    fetchAndUpdateUser: async ()=>{}\n});\nconst TelegramProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [webApp, setWebApp] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [appUser, setAppUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const apiUrl = \"https://webappbackend.fifareward.io/\" || 0;\n    const fetchAndUpdateUser = async (chat_id)=>{\n        try {\n            const response = await fetch(\"\".concat(apiUrl, \"/api/users/\").concat(chat_id), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch user data\");\n            }\n            const data = await response.json();\n            setAppUser(data);\n        } catch (error) {\n            console.error(\"Error fetching user data:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _window_Telegram;\n        const app = (_window_Telegram = window.Telegram) === null || _window_Telegram === void 0 ? void 0 : _window_Telegram.WebApp;\n        if (app) {\n            app.ready();\n            // const chat_id = app.initDataUnsafe?.user?.id;\n            const chat_id = 730149343;\n            const addUser = async (chat_id)=>{\n                try {\n                    const response = await fetch(\"\".concat(apiUrl, \"/api/users/adduser\"), {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify({\n                            chat_id\n                        })\n                    });\n                    if (!response.ok) {\n                        throw new Error(\"Failed to add user\");\n                    }\n                    const data = await response.json();\n                    setAppUser(data);\n                } catch (error) {\n                    console.error(\"Error adding user:\", error);\n                } finally{\n                    setLoading(false);\n                }\n            };\n            if (chat_id) {\n                addUser(chat_id);\n                fetchAndUpdateUser(chat_id); // Fetch and update user after app is ready\n            }\n            setWebApp(app);\n        } else {\n            setLoading(false);\n        }\n    }, []);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return webApp ? {\n            webApp,\n            unsafeData: webApp.initDataUnsafe,\n            user: webApp.initDataUnsafe.user\n        } : {};\n    }, [\n        webApp\n    ]);\n    const userValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return {\n            appuser: appUser,\n            loading: loading,\n            fetchAndUpdateUser\n        };\n    }, [\n        appUser,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TelegramContext.Provider, {\n        value: value,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_script__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: \"https://telegram.org/js/telegram-web-app.js\",\n                strategy: \"beforeInteractive\"\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/provider.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppUserContext.Provider, {\n                value: userValue,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/provider.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/provider.tsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TelegramProvider, \"5BGOSC/rfZK3TWP4cYWImYOOvSg=\");\n_c = TelegramProvider;\nconst useTelegram = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(TelegramContext);\n};\n_s1(useTelegram, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst useAppUser = ()=>{\n    _s2();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AppUserContext);\n};\n_s2(useAppUser, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"TelegramProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvdmlkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQytDO0FBY3pFLE1BQU1NLGdDQUFrQkwsb0RBQWFBLENBQW1CLENBQUMsR0FBRztBQUM1RCxNQUFNTSwrQkFBaUJOLG9EQUFhQSxDQUFrQjtJQUFFTyxTQUFTO0lBQU1DLG9CQUFvQixXQUFhO0FBQUUsR0FBRztBQUU3RyxNQUFNQyxtQkFBbUI7UUFBQyxFQUMvQkMsUUFBUSxFQUdUOztJQUNDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBaUI7SUFDckQsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUF1Qlc7SUFDN0QsTUFBTSxDQUFDUixTQUFTUyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1hLFNBQVNDLHNDQUErQixJQUFJO0lBRWxELE1BQU1WLHFCQUFxQixPQUFPYTtRQUNoQyxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQXVCRixPQUFwQkosUUFBTyxlQUFxQixPQUFSSSxVQUFXO2dCQUM3REcsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFQSxJQUFJLENBQUNILFNBQVNJLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDZixXQUFXYztRQUNiLEVBQUUsT0FBT0UsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsNkJBQTZCQTtRQUM3QztJQUNGO0lBRUE1QixnREFBU0EsQ0FBQztZQUNJO1FBQVosTUFBTThCLE9BQU0sMEJBQWdCRSxRQUFRLGNBQXhCLHdEQUEwQkMsTUFBTTtRQUU1QyxJQUFJSCxLQUFLO1lBQ1BBLElBQUlJLEtBQUs7WUFDVCxnREFBZ0Q7WUFDaEQsTUFBTWYsVUFBVTtZQUNoQixNQUFNZ0IsVUFBVSxPQUFPaEI7Z0JBQ3JCLElBQUk7b0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQVUsT0FBUE4sUUFBTyx1QkFBcUI7d0JBQzFETyxRQUFRO3dCQUNSQyxTQUFTOzRCQUNQLGdCQUFnQjt3QkFDbEI7d0JBQ0FhLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzs0QkFBRW5CO3dCQUFRO29CQUNqQztvQkFFQSxJQUFJLENBQUNDLFNBQVNJLEVBQUUsRUFBRTt3QkFDaEIsTUFBTSxJQUFJQyxNQUFNO29CQUNsQjtvQkFFQSxNQUFNQyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7b0JBQ2hDZixXQUFXYztnQkFDYixFQUFFLE9BQU9FLE9BQU87b0JBQ2RDLFFBQVFELEtBQUssQ0FBQyxzQkFBc0JBO2dCQUN0QyxTQUFVO29CQUNSZCxXQUFXO2dCQUNiO1lBQ0Y7WUFFQSxJQUFJSyxTQUFTO2dCQUNYZ0IsUUFBUWhCO2dCQUNSYixtQkFBbUJhLFVBQVUsMkNBQTJDO1lBQzFFO1lBQ0FULFVBQVVvQjtRQUNaLE9BQU87WUFDTGhCLFdBQVc7UUFDYjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU15QixRQUFRdEMsOENBQU9BLENBQUM7UUFDcEIsT0FBT1EsU0FDSDtZQUNFQTtZQUNBK0IsWUFBWS9CLE9BQU9nQyxjQUFjO1lBQ2pDQyxNQUFNakMsT0FBT2dDLGNBQWMsQ0FBQ0MsSUFBSTtRQUNsQyxJQUNBLENBQUM7SUFDUCxHQUFHO1FBQUNqQztLQUFPO0lBRVgsTUFBTWtDLFlBQVkxQyw4Q0FBT0EsQ0FBQztRQUN4QixPQUFPO1lBQ0wyQyxTQUFTakM7WUFDVE4sU0FBU0E7WUFDVEM7UUFDRjtJQUNGLEdBQUc7UUFBQ0s7UUFBU047S0FBUTtJQUVyQixxQkFDRSw4REFBQ0YsZ0JBQWdCMEMsUUFBUTtRQUFDTixPQUFPQTs7MEJBQy9CLDhEQUFDMUMsbURBQU1BO2dCQUNMaUQsS0FBSTtnQkFDSkMsVUFBUzs7Ozs7OzBCQUVYLDhEQUFDM0MsZUFBZXlDLFFBQVE7Z0JBQUNOLE9BQU9JOzBCQUM3Qm5DOzs7Ozs7Ozs7Ozs7QUFJVCxFQUFFO0dBcEdXRDtLQUFBQTtBQXNHTixNQUFNeUMsY0FBYzs7SUFBTWpELE9BQUFBLGlEQUFVQSxDQUFDSTtBQUFlLEVBQUU7SUFBaEQ2QztBQUNOLE1BQU1DLGFBQWE7O0lBQU1sRCxPQUFBQSxpREFBVUEsQ0FBQ0s7QUFBYyxFQUFFO0lBQTlDNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm92aWRlci50c3g/NmViOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBJVGVsZWdyYW1Vc2VyLCBJV2ViQXBwLCBJQXBwVXNlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZWxlZ3JhbUNvbnRleHQge1xuICB3ZWJBcHA/OiBJV2ViQXBwO1xuICB1c2VyPzogSVRlbGVncmFtVXNlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXBwVXNlckNvbnRleHQge1xuICBhcHB1c2VyPzogSUFwcFVzZXI7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGZldGNoQW5kVXBkYXRlVXNlcjogKGNoYXRfaWQ6IG51bWJlcikgPT4gUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGNvbnN0IFRlbGVncmFtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SVRlbGVncmFtQ29udGV4dD4oe30pO1xuZXhwb3J0IGNvbnN0IEFwcFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJQXBwVXNlckNvbnRleHQ+KHsgbG9hZGluZzogdHJ1ZSwgZmV0Y2hBbmRVcGRhdGVVc2VyOiBhc3luYyAoKSA9PiB7fSB9KTtcblxuZXhwb3J0IGNvbnN0IFRlbGVncmFtUHJvdmlkZXIgPSAoe1xuICBjaGlsZHJlbixcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0pID0+IHtcbiAgY29uc3QgW3dlYkFwcCwgc2V0V2ViQXBwXSA9IHVzZVN0YXRlPElXZWJBcHAgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2FwcFVzZXIsIHNldEFwcFVzZXJdID0gdXNlU3RhdGU8SUFwcFVzZXIgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGFwaVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCc7XG5cbiAgY29uc3QgZmV0Y2hBbmRVcGRhdGVVc2VyID0gYXN5bmMgKGNoYXRfaWQ6IG51bWJlcikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vYXBpL3VzZXJzLyR7Y2hhdF9pZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdXNlciBkYXRhJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRBcHBVc2VyKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIGRhdGE6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFwcCA9ICh3aW5kb3cgYXMgYW55KS5UZWxlZ3JhbT8uV2ViQXBwO1xuXG4gICAgaWYgKGFwcCkge1xuICAgICAgYXBwLnJlYWR5KCk7XG4gICAgICAvLyBjb25zdCBjaGF0X2lkID0gYXBwLmluaXREYXRhVW5zYWZlPy51c2VyPy5pZDtcbiAgICAgIGNvbnN0IGNoYXRfaWQgPSA3MzAxNDkzNDM7XG4gICAgICBjb25zdCBhZGRVc2VyID0gYXN5bmMgKGNoYXRfaWQ6IG51bWJlcikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9hcGkvdXNlcnMvYWRkdXNlcmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2hhdF9pZCB9KSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGFkZCB1c2VyJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBzZXRBcHBVc2VyKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyB1c2VyOicsIGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKGNoYXRfaWQpIHtcbiAgICAgICAgYWRkVXNlcihjaGF0X2lkKTtcbiAgICAgICAgZmV0Y2hBbmRVcGRhdGVVc2VyKGNoYXRfaWQpOyAvLyBGZXRjaCBhbmQgdXBkYXRlIHVzZXIgYWZ0ZXIgYXBwIGlzIHJlYWR5XG4gICAgICB9XG4gICAgICBzZXRXZWJBcHAoYXBwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gd2ViQXBwXG4gICAgICA/IHtcbiAgICAgICAgICB3ZWJBcHAsXG4gICAgICAgICAgdW5zYWZlRGF0YTogd2ViQXBwLmluaXREYXRhVW5zYWZlLFxuICAgICAgICAgIHVzZXI6IHdlYkFwcC5pbml0RGF0YVVuc2FmZS51c2VyLFxuICAgICAgICB9XG4gICAgICA6IHt9O1xuICB9LCBbd2ViQXBwXSk7XG5cbiAgY29uc3QgdXNlclZhbHVlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwcHVzZXI6IGFwcFVzZXIsXG4gICAgICBsb2FkaW5nOiBsb2FkaW5nLFxuICAgICAgZmV0Y2hBbmRVcGRhdGVVc2VyLFxuICAgIH07XG4gIH0sIFthcHBVc2VyLCBsb2FkaW5nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGVsZWdyYW1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICA8U2NyaXB0XG4gICAgICAgIHNyYz1cImh0dHBzOi8vdGVsZWdyYW0ub3JnL2pzL3RlbGVncmFtLXdlYi1hcHAuanNcIlxuICAgICAgICBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCJcbiAgICAgIC8+ICAgICAgXG4gICAgICA8QXBwVXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJWYWx1ZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQXBwVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9UZWxlZ3JhbUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVGVsZWdyYW0gPSAoKSA9PiB1c2VDb250ZXh0KFRlbGVncmFtQ29udGV4dCk7XG5leHBvcnQgY29uc3QgdXNlQXBwVXNlciA9ICgpID0+IHVzZUNvbnRleHQoQXBwVXNlckNvbnRleHQpO1xuIl0sIm5hbWVzIjpbIlNjcmlwdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiVGVsZWdyYW1Db250ZXh0IiwiQXBwVXNlckNvbnRleHQiLCJsb2FkaW5nIiwiZmV0Y2hBbmRVcGRhdGVVc2VyIiwiVGVsZWdyYW1Qcm92aWRlciIsImNoaWxkcmVuIiwid2ViQXBwIiwic2V0V2ViQXBwIiwiYXBwVXNlciIsInNldEFwcFVzZXIiLCJ1bmRlZmluZWQiLCJzZXRMb2FkaW5nIiwiYXBpVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJjaGF0X2lkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJhcHAiLCJ3aW5kb3ciLCJUZWxlZ3JhbSIsIldlYkFwcCIsInJlYWR5IiwiYWRkVXNlciIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidmFsdWUiLCJ1bnNhZmVEYXRhIiwiaW5pdERhdGFVbnNhZmUiLCJ1c2VyIiwidXNlclZhbHVlIiwiYXBwdXNlciIsIlByb3ZpZGVyIiwic3JjIiwic3RyYXRlZ3kiLCJ1c2VUZWxlZ3JhbSIsInVzZUFwcFVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/provider.tsx\n"));

/***/ })

});