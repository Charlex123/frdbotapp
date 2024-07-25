"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/provider.tsx":
/*!******************************!*\
  !*** ./src/app/provider.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppUserContext: function() { return /* binding */ AppUserContext; },\n/* harmony export */   TelegramContext: function() { return /* binding */ TelegramContext; },\n/* harmony export */   TelegramProvider: function() { return /* binding */ TelegramProvider; },\n/* harmony export */   useAppUser: function() { return /* binding */ useAppUser; },\n/* harmony export */   useTelegram: function() { return /* binding */ useTelegram; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"(app-pages-browser)/./node_modules/next/dist/api/script.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// TelegramProvider.tsx\n/* __next_internal_client_entry_do_not_use__ TelegramContext,AppUserContext,TelegramProvider,useTelegram,useAppUser auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\nconst TelegramContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nconst AppUserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n    loading: true\n});\nconst TelegramProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [webApp, setWebApp] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [appUser, setAppUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const apiUrl = \"http://localhost:4000\" || 0;\n    const addUser = async (chat_id)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"\".concat(apiUrl, \"/api/users/adduser\"), {\n                chat_id\n            });\n            if (response.status === 201) {\n                setAppUser(response.data);\n            } else {\n                console.error(\"Failed to add user:\", response.statusText);\n            }\n        } catch (error) {\n            console.error(\"Error adding user:\", error);\n        } finally{\n            setLoading(false); // Set loading to false after the API call\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _window_Telegram;\n        const app = (_window_Telegram = window.Telegram) === null || _window_Telegram === void 0 ? void 0 : _window_Telegram.WebApp;\n        console.log(\"Checking for Telegram WebApp:\", app); // Debug logging\n        if (app) {\n            var _app_initDataUnsafe_user, _app_initDataUnsafe, _app_initDataUnsafe_user1, _app_initDataUnsafe1, _app_initDataUnsafe_user2, _app_initDataUnsafe2;\n            app.ready();\n            console.log(\"t user id\", (_app_initDataUnsafe = app.initDataUnsafe) === null || _app_initDataUnsafe === void 0 ? void 0 : (_app_initDataUnsafe_user = _app_initDataUnsafe.user) === null || _app_initDataUnsafe_user === void 0 ? void 0 : _app_initDataUnsafe_user.id);\n            alert(\"app id\", (_app_initDataUnsafe1 = app.initDataUnsafe) === null || _app_initDataUnsafe1 === void 0 ? void 0 : (_app_initDataUnsafe_user1 = _app_initDataUnsafe1.user) === null || _app_initDataUnsafe_user1 === void 0 ? void 0 : _app_initDataUnsafe_user1.id);\n            setWebApp(app);\n            if ((_app_initDataUnsafe2 = app.initDataUnsafe) === null || _app_initDataUnsafe2 === void 0 ? void 0 : (_app_initDataUnsafe_user2 = _app_initDataUnsafe2.user) === null || _app_initDataUnsafe_user2 === void 0 ? void 0 : _app_initDataUnsafe_user2.id) {\n                setTimeout(()=>{\n                    addUser(app.initDataUnsafe.user.id);\n                }, 6000); // Simulate loading delay of 1 second\n            } else {\n                setLoading(false); // If there's no user ID, stop loading\n            }\n        } else {\n            setLoading(false); // If the app is not available, stop loading\n        }\n    }, []);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return webApp ? {\n            webApp,\n            unsafeData: webApp.initDataUnsafe,\n            user: webApp.initDataUnsafe.user\n        } : {};\n    }, [\n        webApp\n    ]);\n    const userValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return {\n            appuser: appUser,\n            loading: loading\n        };\n    }, [\n        appUser,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TelegramContext.Provider, {\n        value: value,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_script__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: \"https://telegram.org/js/telegram-web-app.js\",\n                strategy: \"beforeInteractive\"\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/provider.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppUserContext.Provider, {\n                value: userValue,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/provider.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/provider.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TelegramProvider, \"5BGOSC/rfZK3TWP4cYWImYOOvSg=\");\n_c = TelegramProvider;\nconst useTelegram = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(TelegramContext);\n};\n_s1(useTelegram, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst useAppUser = ()=>{\n    _s2();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AppUserContext);\n};\n_s2(useAppUser, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"TelegramProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvdmlkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7OztBQUVVO0FBQytDO0FBRXREO0FBWW5CLE1BQU1PLGdDQUFrQk4sb0RBQWFBLENBQW1CLENBQUMsR0FBRztBQUM1RCxNQUFNTywrQkFBaUJQLG9EQUFhQSxDQUFrQjtJQUFFUSxTQUFTO0FBQUssR0FBRztBQUV6RSxNQUFNQyxtQkFBbUI7UUFBQyxFQUMvQkMsUUFBUSxFQUdUOztJQUNDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBaUI7SUFDckQsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUF1Qlc7SUFDN0QsTUFBTSxDQUFDUCxTQUFTUSxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1hLFNBQVNDLHVCQUErQixJQUFJO0lBRWxELE1BQU1HLFVBQVUsT0FBT0M7UUFDckIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTWxCLDZDQUFLQSxDQUFDbUIsSUFBSSxDQUFDLEdBQVUsT0FBUFAsUUFBTyx1QkFBcUI7Z0JBQUVLO1lBQVE7WUFDM0UsSUFBSUMsU0FBU0UsTUFBTSxLQUFLLEtBQUs7Z0JBQzNCWCxXQUFXUyxTQUFTRyxJQUFJO1lBQzFCLE9BQU87Z0JBQ0xDLFFBQVFDLEtBQUssQ0FBQyx1QkFBdUJMLFNBQVNNLFVBQVU7WUFDMUQ7UUFDRixFQUFFLE9BQU9ELE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDLHNCQUFzQkE7UUFDdEMsU0FBVTtZQUNSWixXQUFXLFFBQVEsMENBQTBDO1FBQy9EO0lBQ0Y7SUFFQWQsZ0RBQVNBLENBQUM7WUFDSTtRQUFaLE1BQU00QixPQUFNLDBCQUFnQkUsUUFBUSxjQUF4Qix3REFBMEJDLE1BQU07UUFFNUNOLFFBQVFPLEdBQUcsQ0FBQyxpQ0FBaUNKLE1BQU0sZ0JBQWdCO1FBQ25FLElBQUlBLEtBQUs7Z0JBRWlCQSwwQkFBQUEscUJBQ1RBLDJCQUFBQSxzQkFFWEEsMkJBQUFBO1lBSkpBLElBQUlLLEtBQUs7WUFDVFIsUUFBUU8sR0FBRyxDQUFDLGNBQVlKLHNCQUFBQSxJQUFJTSxjQUFjLGNBQWxCTiwyQ0FBQUEsMkJBQUFBLG9CQUFvQk8sSUFBSSxjQUF4QlAsK0NBQUFBLHlCQUEwQlEsRUFBRTtZQUNwREMsTUFBTSxXQUFTVCx1QkFBQUEsSUFBSU0sY0FBYyxjQUFsQk4sNENBQUFBLDRCQUFBQSxxQkFBb0JPLElBQUksY0FBeEJQLGdEQUFBQSwwQkFBMEJRLEVBQUU7WUFDM0MxQixVQUFVa0I7WUFDVixLQUFJQSx1QkFBQUEsSUFBSU0sY0FBYyxjQUFsQk4sNENBQUFBLDRCQUFBQSxxQkFBb0JPLElBQUksY0FBeEJQLGdEQUFBQSwwQkFBMEJRLEVBQUUsRUFBRTtnQkFDaENFLFdBQVc7b0JBQ1RuQixRQUFRUyxJQUFJTSxjQUFjLENBQUNDLElBQUksQ0FBQ0MsRUFBRTtnQkFDcEMsR0FBRyxPQUFPLHFDQUFxQztZQUNqRCxPQUFPO2dCQUNMdEIsV0FBVyxRQUFRLHNDQUFzQztZQUMzRDtRQUNGLE9BQU87WUFDTEEsV0FBVyxRQUFRLDRDQUE0QztRQUNqRTtJQUNGLEdBQUcsRUFBRTtJQUdMLE1BQU15QixRQUFRdEMsOENBQU9BLENBQUM7UUFDcEIsT0FBT1EsU0FDSDtZQUNFQTtZQUNBK0IsWUFBWS9CLE9BQU95QixjQUFjO1lBQ2pDQyxNQUFNMUIsT0FBT3lCLGNBQWMsQ0FBQ0MsSUFBSTtRQUNsQyxJQUNBLENBQUM7SUFDUCxHQUFHO1FBQUMxQjtLQUFPO0lBRVgsTUFBTWdDLFlBQVl4Qyw4Q0FBT0EsQ0FBQztRQUN4QixPQUFPO1lBQ0x5QyxTQUFTL0I7WUFDVEwsU0FBU0E7UUFDWDtJQUNGLEdBQUc7UUFBQ0s7UUFBU0w7S0FBUTtJQUVyQixxQkFDRSw4REFBQ0YsZ0JBQWdCdUMsUUFBUTtRQUFDSixPQUFPQTs7MEJBRS9CLDhEQUFDMUMsbURBQU1BO2dCQUNMK0MsS0FBSTtnQkFDSkMsVUFBUzs7Ozs7OzBCQUVYLDhEQUFDeEMsZUFBZXNDLFFBQVE7Z0JBQUNKLE9BQU9FOzBCQUM3QmpDOzs7Ozs7Ozs7Ozs7QUFJVCxFQUFFO0dBN0VXRDtLQUFBQTtBQStFTixNQUFNdUMsY0FBYzs7SUFBTS9DLE9BQUFBLGlEQUFVQSxDQUFDSztBQUFlLEVBQUU7SUFBaEQwQztBQUNOLE1BQU1DLGFBQWE7O0lBQU1oRCxPQUFBQSxpREFBVUEsQ0FBQ007QUFBYyxFQUFFO0lBQTlDMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm92aWRlci50c3g/NmViOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUZWxlZ3JhbVByb3ZpZGVyLnRzeFxuJ3VzZSBjbGllbnQnXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBJVGVsZWdyYW1Vc2VyLCBJV2ViQXBwLCBJQXBwVXNlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGVsZWdyYW1Db250ZXh0IHtcbiAgd2ViQXBwPzogSVdlYkFwcDtcbiAgdXNlcj86IElUZWxlZ3JhbVVzZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFVzZXJDb250ZXh0IHtcbiAgYXBwdXNlcj86IElBcHBVc2VyO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgVGVsZWdyYW1Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxJVGVsZWdyYW1Db250ZXh0Pih7fSk7XG5leHBvcnQgY29uc3QgQXBwVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PElBcHBVc2VyQ29udGV4dD4oeyBsb2FkaW5nOiB0cnVlIH0pO1xuXG5leHBvcnQgY29uc3QgVGVsZWdyYW1Qcm92aWRlciA9ICh7XG4gIGNoaWxkcmVuLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufSkgPT4ge1xuICBjb25zdCBbd2ViQXBwLCBzZXRXZWJBcHBdID0gdXNlU3RhdGU8SVdlYkFwcCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbYXBwVXNlciwgc2V0QXBwVXNlcl0gPSB1c2VTdGF0ZTxJQXBwVXNlciB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDo0MDAwJztcblxuICBjb25zdCBhZGRVc2VyID0gYXN5bmMgKGNoYXRfaWQ6IG51bWJlcikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YXBpVXJsfS9hcGkvdXNlcnMvYWRkdXNlcmAsIHsgY2hhdF9pZCB9KTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICBzZXRBcHBVc2VyKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGFkZCB1c2VyOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgdXNlcjonLCBlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAvLyBTZXQgbG9hZGluZyB0byBmYWxzZSBhZnRlciB0aGUgQVBJIGNhbGxcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhcHAgPSAod2luZG93IGFzIGFueSkuVGVsZWdyYW0/LldlYkFwcDtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIGZvciBUZWxlZ3JhbSBXZWJBcHA6XCIsIGFwcCk7IC8vIERlYnVnIGxvZ2dpbmdcbiAgICBpZiAoYXBwKSB7XG4gICAgICBhcHAucmVhZHkoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidCB1c2VyIGlkXCIsYXBwLmluaXREYXRhVW5zYWZlPy51c2VyPy5pZClcbiAgICAgIGFsZXJ0KCdhcHAgaWQnLGFwcC5pbml0RGF0YVVuc2FmZT8udXNlcj8uaWQpXG4gICAgICBzZXRXZWJBcHAoYXBwKTtcbiAgICAgIGlmIChhcHAuaW5pdERhdGFVbnNhZmU/LnVzZXI/LmlkKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFkZFVzZXIoYXBwLmluaXREYXRhVW5zYWZlLnVzZXIuaWQpO1xuICAgICAgICB9LCA2MDAwKTsgLy8gU2ltdWxhdGUgbG9hZGluZyBkZWxheSBvZiAxIHNlY29uZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIElmIHRoZXJlJ3Mgbm8gdXNlciBJRCwgc3RvcCBsb2FkaW5nXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAvLyBJZiB0aGUgYXBwIGlzIG5vdCBhdmFpbGFibGUsIHN0b3AgbG9hZGluZ1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIFxuICBjb25zdCB2YWx1ZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiB3ZWJBcHBcbiAgICAgID8ge1xuICAgICAgICAgIHdlYkFwcCxcbiAgICAgICAgICB1bnNhZmVEYXRhOiB3ZWJBcHAuaW5pdERhdGFVbnNhZmUsXG4gICAgICAgICAgdXNlcjogd2ViQXBwLmluaXREYXRhVW5zYWZlLnVzZXIsXG4gICAgICAgIH1cbiAgICAgIDoge307XG4gIH0sIFt3ZWJBcHBdKTtcblxuICBjb25zdCB1c2VyVmFsdWUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBwdXNlcjogYXBwVXNlcixcbiAgICAgIGxvYWRpbmc6IGxvYWRpbmdcbiAgICB9O1xuICB9LCBbYXBwVXNlciwgbG9hZGluZ10pO1xuXG4gIHJldHVybiAoXG4gICAgPFRlbGVncmFtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAgey8qIE1ha2Ugc3VyZSB0byBpbmNsdWRlIHNjcmlwdCB0YWcgd2l0aCBcImJlZm9yZUludGVyYWN0aXZlXCIgc3RyYXRlZ3kgdG8gcHJlLWxvYWQgd2ViLWFwcCBzY3JpcHQgKi99XG4gICAgICA8U2NyaXB0XG4gICAgICAgIHNyYz1cImh0dHBzOi8vdGVsZWdyYW0ub3JnL2pzL3RlbGVncmFtLXdlYi1hcHAuanNcIlxuICAgICAgICBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCJcbiAgICAgIC8+ICAgICAgXG4gICAgICA8QXBwVXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJWYWx1ZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQXBwVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9UZWxlZ3JhbUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVGVsZWdyYW0gPSAoKSA9PiB1c2VDb250ZXh0KFRlbGVncmFtQ29udGV4dCk7XG5leHBvcnQgY29uc3QgdXNlQXBwVXNlciA9ICgpID0+IHVzZUNvbnRleHQoQXBwVXNlckNvbnRleHQpO1xuIl0sIm5hbWVzIjpbIlNjcmlwdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiYXhpb3MiLCJUZWxlZ3JhbUNvbnRleHQiLCJBcHBVc2VyQ29udGV4dCIsImxvYWRpbmciLCJUZWxlZ3JhbVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ3ZWJBcHAiLCJzZXRXZWJBcHAiLCJhcHBVc2VyIiwic2V0QXBwVXNlciIsInVuZGVmaW5lZCIsInNldExvYWRpbmciLCJhcGlVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImFkZFVzZXIiLCJjaGF0X2lkIiwicmVzcG9uc2UiLCJwb3N0Iiwic3RhdHVzIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1c1RleHQiLCJhcHAiLCJ3aW5kb3ciLCJUZWxlZ3JhbSIsIldlYkFwcCIsImxvZyIsInJlYWR5IiwiaW5pdERhdGFVbnNhZmUiLCJ1c2VyIiwiaWQiLCJhbGVydCIsInNldFRpbWVvdXQiLCJ2YWx1ZSIsInVuc2FmZURhdGEiLCJ1c2VyVmFsdWUiLCJhcHB1c2VyIiwiUHJvdmlkZXIiLCJzcmMiLCJzdHJhdGVneSIsInVzZVRlbGVncmFtIiwidXNlQXBwVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/provider.tsx\n"));

/***/ })

});