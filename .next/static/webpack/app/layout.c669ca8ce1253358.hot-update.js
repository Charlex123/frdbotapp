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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppUserContext: function() { return /* binding */ AppUserContext; },\n/* harmony export */   TelegramContext: function() { return /* binding */ TelegramContext; },\n/* harmony export */   TelegramProvider: function() { return /* binding */ TelegramProvider; },\n/* harmony export */   useAppUser: function() { return /* binding */ useAppUser; },\n/* harmony export */   useTelegram: function() { return /* binding */ useTelegram; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"(app-pages-browser)/./node_modules/next/dist/api/script.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// TelegramProvider.tsx\n/* __next_internal_client_entry_do_not_use__ TelegramContext,AppUserContext,TelegramProvider,useTelegram,useAppUser auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\nconst TelegramContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nconst AppUserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n    loading: true\n});\nconst TelegramProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [webApp, setWebApp] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [appUser, setAppUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const apiUrl = \"http://localhost:4000\" || 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _window_Telegram;\n        const app = (_window_Telegram = window.Telegram) === null || _window_Telegram === void 0 ? void 0 : _window_Telegram.WebApp;\n        console.log(\"Checking for Telegram WebApp:\", app); // Debug logging\n        if (app) {\n            var _app_initDataUnsafe_user, _app_initDataUnsafe, _app_initDataUnsafe_user1, _app_initDataUnsafe1, _app_initDataUnsafe_user2, _app_initDataUnsafe2;\n            app.ready();\n            console.log(\"t user id\", (_app_initDataUnsafe = app.initDataUnsafe) === null || _app_initDataUnsafe === void 0 ? void 0 : (_app_initDataUnsafe_user = _app_initDataUnsafe.user) === null || _app_initDataUnsafe_user === void 0 ? void 0 : _app_initDataUnsafe_user.id);\n            alert((_app_initDataUnsafe1 = app.initDataUnsafe) === null || _app_initDataUnsafe1 === void 0 ? void 0 : (_app_initDataUnsafe_user1 = _app_initDataUnsafe1.user) === null || _app_initDataUnsafe_user1 === void 0 ? void 0 : _app_initDataUnsafe_user1.id);\n            const addUser = async (chat_id)=>{\n                alert(\"'add user function ran',\".concat(chat_id));\n                try {\n                    const config = {\n                        headers: {\n                            \"Content-type\": \"application/json\"\n                        }\n                    };\n                    const data = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:4000/api/users/\", {\n                        chat_id: chat_id\n                    }, config);\n                    if (data) {\n                        setAppUser(response.data);\n                        alert(response.data);\n                    }\n                } catch (error) {\n                    console.error(\"Error adding user:\", error);\n                } finally{\n                    setLoading(false); // Set loading to false after the API call\n                }\n            };\n            addUser((_app_initDataUnsafe2 = app.initDataUnsafe) === null || _app_initDataUnsafe2 === void 0 ? void 0 : (_app_initDataUnsafe_user2 = _app_initDataUnsafe2.user) === null || _app_initDataUnsafe_user2 === void 0 ? void 0 : _app_initDataUnsafe_user2.id);\n            setWebApp(app);\n        } else {\n            setLoading(false); // If the app is not available, stop loading\n        }\n    }, []);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return webApp ? {\n            webApp,\n            unsafeData: webApp.initDataUnsafe,\n            user: webApp.initDataUnsafe.user\n        } : {};\n    }, [\n        webApp\n    ]);\n    const userValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return {\n            appuser: appUser,\n            loading: loading\n        };\n    }, [\n        appUser,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TelegramContext.Provider, {\n        value: value,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_script__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: \"https://telegram.org/js/telegram-web-app.js\",\n                strategy: \"beforeInteractive\"\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/provider.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppUserContext.Provider, {\n                value: userValue,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/provider.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/provider.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TelegramProvider, \"5BGOSC/rfZK3TWP4cYWImYOOvSg=\");\n_c = TelegramProvider;\nconst useTelegram = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(TelegramContext);\n};\n_s1(useTelegram, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst useAppUser = ()=>{\n    _s2();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AppUserContext);\n};\n_s2(useAppUser, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"TelegramProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvdmlkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7OztBQUVVO0FBQytDO0FBRXREO0FBWW5CLE1BQU1PLGdDQUFrQk4sb0RBQWFBLENBQW1CLENBQUMsR0FBRztBQUM1RCxNQUFNTywrQkFBaUJQLG9EQUFhQSxDQUFrQjtJQUFFUSxTQUFTO0FBQUssR0FBRztBQUV6RSxNQUFNQyxtQkFBbUI7UUFBQyxFQUMvQkMsUUFBUSxFQUdUOztJQUNDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBaUI7SUFDckQsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUF1Qlc7SUFDN0QsTUFBTSxDQUFDUCxTQUFTUSxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1hLFNBQVNDLHVCQUErQixJQUFJO0lBSWxEaEIsZ0RBQVNBLENBQUM7WUFDSTtRQUFaLE1BQU1tQixPQUFNLDBCQUFnQkUsUUFBUSxjQUF4Qix3REFBMEJDLE1BQU07UUFFNUNDLFFBQVFDLEdBQUcsQ0FBQyxpQ0FBaUNMLE1BQU0sZ0JBQWdCO1FBQ25FLElBQUlBLEtBQUs7Z0JBRWlCQSwwQkFBQUEscUJBQ2xCQSwyQkFBQUEsc0JBdUJFQSwyQkFBQUE7WUF6QlJBLElBQUlNLEtBQUs7WUFDVEYsUUFBUUMsR0FBRyxDQUFDLGNBQVlMLHNCQUFBQSxJQUFJTyxjQUFjLGNBQWxCUCwyQ0FBQUEsMkJBQUFBLG9CQUFvQlEsSUFBSSxjQUF4QlIsK0NBQUFBLHlCQUEwQlMsRUFBRTtZQUNwREMsT0FBTVYsdUJBQUFBLElBQUlPLGNBQWMsY0FBbEJQLDRDQUFBQSw0QkFBQUEscUJBQW9CUSxJQUFJLGNBQXhCUixnREFBQUEsMEJBQTBCUyxFQUFFO1lBQ2xDLE1BQU1FLFVBQVUsT0FBT0M7Z0JBQ3JCRixNQUFNLDJCQUFtQyxPQUFSRTtnQkFDakMsSUFBSTtvQkFDQSxNQUFNQyxTQUFTO3dCQUNYQyxTQUFTOzRCQUNMLGdCQUFnQjt3QkFDcEI7b0JBQ0o7b0JBQ0YsTUFBTUMsT0FBTyxNQUFNL0IsNkNBQUtBLENBQUNnQyxJQUFJLENBQUUsb0NBQW1DO3dCQUNoRUosU0FBU0E7b0JBQ1QsR0FBR0M7b0JBQ0wsSUFBR0UsTUFBTTt3QkFDUHRCLFdBQVd3QixTQUFTRixJQUFJO3dCQUN4QkwsTUFBTU8sU0FBU0YsSUFBSTtvQkFDckI7Z0JBRUYsRUFBRSxPQUFPRyxPQUFPO29CQUNkZCxRQUFRYyxLQUFLLENBQUMsc0JBQXNCQTtnQkFDdEMsU0FBVTtvQkFDUnZCLFdBQVcsUUFBUSwwQ0FBMEM7Z0JBQy9EO1lBQ0Y7WUFDQWdCLFNBQVFYLHVCQUFBQSxJQUFJTyxjQUFjLGNBQWxCUCw0Q0FBQUEsNEJBQUFBLHFCQUFvQlEsSUFBSSxjQUF4QlIsZ0RBQUFBLDBCQUEwQlMsRUFBRTtZQUNwQ2xCLFVBQVVTO1FBRVosT0FBTztZQUNMTCxXQUFXLFFBQVEsNENBQTRDO1FBQ2pFO0lBQ0YsR0FBRyxFQUFFO0lBR0wsTUFBTXdCLFFBQVFyQyw4Q0FBT0EsQ0FBQztRQUNwQixPQUFPUSxTQUNIO1lBQ0VBO1lBQ0E4QixZQUFZOUIsT0FBT2lCLGNBQWM7WUFDakNDLE1BQU1sQixPQUFPaUIsY0FBYyxDQUFDQyxJQUFJO1FBQ2xDLElBQ0EsQ0FBQztJQUNQLEdBQUc7UUFBQ2xCO0tBQU87SUFFWCxNQUFNK0IsWUFBWXZDLDhDQUFPQSxDQUFDO1FBQ3hCLE9BQU87WUFDTHdDLFNBQVM5QjtZQUNUTCxTQUFTQTtRQUNYO0lBQ0YsR0FBRztRQUFDSztRQUFTTDtLQUFRO0lBRXJCLHFCQUNFLDhEQUFDRixnQkFBZ0JzQyxRQUFRO1FBQUNKLE9BQU9BOzswQkFFL0IsOERBQUN6QyxtREFBTUE7Z0JBQ0w4QyxLQUFJO2dCQUNKQyxVQUFTOzs7Ozs7MEJBRVgsOERBQUN2QyxlQUFlcUMsUUFBUTtnQkFBQ0osT0FBT0U7MEJBQzdCaEM7Ozs7Ozs7Ozs7OztBQUlULEVBQUU7R0FqRldEO0tBQUFBO0FBbUZOLE1BQU1zQyxjQUFjOztJQUFNOUMsT0FBQUEsaURBQVVBLENBQUNLO0FBQWUsRUFBRTtJQUFoRHlDO0FBQ04sTUFBTUMsYUFBYTs7SUFBTS9DLE9BQUFBLGlEQUFVQSxDQUFDTTtBQUFjLEVBQUU7SUFBOUN5QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb3ZpZGVyLnRzeD82ZWI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRlbGVncmFtUHJvdmlkZXIudHN4XG4ndXNlIGNsaWVudCdcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IElUZWxlZ3JhbVVzZXIsIElXZWJBcHAsIElBcHBVc2VyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZWxlZ3JhbUNvbnRleHQge1xuICB3ZWJBcHA/OiBJV2ViQXBwO1xuICB1c2VyPzogSVRlbGVncmFtVXNlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXBwVXNlckNvbnRleHQge1xuICBhcHB1c2VyPzogSUFwcFVzZXI7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBUZWxlZ3JhbUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PElUZWxlZ3JhbUNvbnRleHQ+KHt9KTtcbmV4cG9ydCBjb25zdCBBcHBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUFwcFVzZXJDb250ZXh0Pih7IGxvYWRpbmc6IHRydWUgfSk7XG5cbmV4cG9ydCBjb25zdCBUZWxlZ3JhbVByb3ZpZGVyID0gKHtcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59KSA9PiB7XG4gIGNvbnN0IFt3ZWJBcHAsIHNldFdlYkFwcF0gPSB1c2VTdGF0ZTxJV2ViQXBwIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFthcHBVc2VyLCBzZXRBcHBVc2VyXSA9IHVzZVN0YXRlPElBcHBVc2VyIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBhcGlVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnO1xuXG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXBwID0gKHdpbmRvdyBhcyBhbnkpLlRlbGVncmFtPy5XZWJBcHA7XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJDaGVja2luZyBmb3IgVGVsZWdyYW0gV2ViQXBwOlwiLCBhcHApOyAvLyBEZWJ1ZyBsb2dnaW5nXG4gICAgaWYgKGFwcCkge1xuICAgICAgYXBwLnJlYWR5KCk7XG4gICAgICBjb25zb2xlLmxvZyhcInQgdXNlciBpZFwiLGFwcC5pbml0RGF0YVVuc2FmZT8udXNlcj8uaWQpXG4gICAgICBhbGVydChhcHAuaW5pdERhdGFVbnNhZmU/LnVzZXI/LmlkKVxuICAgICAgY29uc3QgYWRkVXNlciA9IGFzeW5jIChjaGF0X2lkOiBudW1iZXIpID0+IHtcbiAgICAgICAgYWxlcnQoYCdhZGQgdXNlciBmdW5jdGlvbiByYW4nLCR7Y2hhdF9pZH1gKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdXNlcnMvYCwgeyBcbiAgICAgICAgICAgIGNoYXRfaWQ6IGNoYXRfaWQgXG4gICAgICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICAgIGlmKGRhdGEpIHtcbiAgICAgICAgICAgIHNldEFwcFVzZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgdXNlcjonLCBlcnJvcik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIFNldCBsb2FkaW5nIHRvIGZhbHNlIGFmdGVyIHRoZSBBUEkgY2FsbFxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYWRkVXNlcihhcHAuaW5pdERhdGFVbnNhZmU/LnVzZXI/LmlkKVxuICAgICAgc2V0V2ViQXBwKGFwcCk7XG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIElmIHRoZSBhcHAgaXMgbm90IGF2YWlsYWJsZSwgc3RvcCBsb2FkaW5nXG4gICAgfVxuICB9LCBbXSk7XG5cbiAgXG4gIGNvbnN0IHZhbHVlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHdlYkFwcFxuICAgICAgPyB7XG4gICAgICAgICAgd2ViQXBwLFxuICAgICAgICAgIHVuc2FmZURhdGE6IHdlYkFwcC5pbml0RGF0YVVuc2FmZSxcbiAgICAgICAgICB1c2VyOiB3ZWJBcHAuaW5pdERhdGFVbnNhZmUudXNlcixcbiAgICAgICAgfVxuICAgICAgOiB7fTtcbiAgfSwgW3dlYkFwcF0pO1xuXG4gIGNvbnN0IHVzZXJWYWx1ZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBhcHB1c2VyOiBhcHBVc2VyLFxuICAgICAgbG9hZGluZzogbG9hZGluZ1xuICAgIH07XG4gIH0sIFthcHBVc2VyLCBsb2FkaW5nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGVsZWdyYW1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICB7LyogTWFrZSBzdXJlIHRvIGluY2x1ZGUgc2NyaXB0IHRhZyB3aXRoIFwiYmVmb3JlSW50ZXJhY3RpdmVcIiBzdHJhdGVneSB0byBwcmUtbG9hZCB3ZWItYXBwIHNjcmlwdCAqL31cbiAgICAgIDxTY3JpcHRcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly90ZWxlZ3JhbS5vcmcvanMvdGVsZWdyYW0td2ViLWFwcC5qc1wiXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxuICAgICAgLz4gICAgICBcbiAgICAgIDxBcHBVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXNlclZhbHVlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9BcHBVc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L1RlbGVncmFtQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VUZWxlZ3JhbSA9ICgpID0+IHVzZUNvbnRleHQoVGVsZWdyYW1Db250ZXh0KTtcbmV4cG9ydCBjb25zdCB1c2VBcHBVc2VyID0gKCkgPT4gdXNlQ29udGV4dChBcHBVc2VyQ29udGV4dCk7XG4iXSwibmFtZXMiOlsiU2NyaXB0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJheGlvcyIsIlRlbGVncmFtQ29udGV4dCIsIkFwcFVzZXJDb250ZXh0IiwibG9hZGluZyIsIlRlbGVncmFtUHJvdmlkZXIiLCJjaGlsZHJlbiIsIndlYkFwcCIsInNldFdlYkFwcCIsImFwcFVzZXIiLCJzZXRBcHBVc2VyIiwidW5kZWZpbmVkIiwic2V0TG9hZGluZyIsImFwaVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiYXBwIiwid2luZG93IiwiVGVsZWdyYW0iLCJXZWJBcHAiLCJjb25zb2xlIiwibG9nIiwicmVhZHkiLCJpbml0RGF0YVVuc2FmZSIsInVzZXIiLCJpZCIsImFsZXJ0IiwiYWRkVXNlciIsImNoYXRfaWQiLCJjb25maWciLCJoZWFkZXJzIiwiZGF0YSIsInBvc3QiLCJyZXNwb25zZSIsImVycm9yIiwidmFsdWUiLCJ1bnNhZmVEYXRhIiwidXNlclZhbHVlIiwiYXBwdXNlciIsIlByb3ZpZGVyIiwic3JjIiwic3RyYXRlZ3kiLCJ1c2VUZWxlZ3JhbSIsInVzZUFwcFVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/provider.tsx\n"));

/***/ })

});