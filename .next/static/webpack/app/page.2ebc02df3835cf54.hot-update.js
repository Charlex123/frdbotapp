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

/***/ "(app-pages-browser)/./src/app/provider.tsx":
/*!******************************!*\
  !*** ./src/app/provider.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppUserContext: function() { return /* binding */ AppUserContext; },\n/* harmony export */   TelegramContext: function() { return /* binding */ TelegramContext; },\n/* harmony export */   TelegramProvider: function() { return /* binding */ TelegramProvider; },\n/* harmony export */   useAppUser: function() { return /* binding */ useAppUser; },\n/* harmony export */   useTelegram: function() { return /* binding */ useTelegram; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"(app-pages-browser)/./node_modules/next/dist/api/script.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// TelegramProvider.tsx\n/* __next_internal_client_entry_do_not_use__ TelegramContext,AppUserContext,TelegramProvider,useTelegram,useAppUser auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\nconst TelegramContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nconst AppUserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n    loading: true\n});\nconst TelegramProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [webApp, setWebApp] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [appUser, setAppUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const apiUrl = \"http://localhost:4000\" || 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _window_Telegram;\n        const app = (_window_Telegram = window.Telegram) === null || _window_Telegram === void 0 ? void 0 : _window_Telegram.WebApp;\n        console.log(\"Checking for Telegram WebApp:\", app); // Debug logging\n        if (app) {\n            var _app_initDataUnsafe_user, _app_initDataUnsafe, _app_initDataUnsafe_user1, _app_initDataUnsafe1, _app_initDataUnsafe_user2, _app_initDataUnsafe2;\n            app.ready();\n            console.log(\"t user id\", (_app_initDataUnsafe = app.initDataUnsafe) === null || _app_initDataUnsafe === void 0 ? void 0 : (_app_initDataUnsafe_user = _app_initDataUnsafe.user) === null || _app_initDataUnsafe_user === void 0 ? void 0 : _app_initDataUnsafe_user.id);\n            alert((_app_initDataUnsafe1 = app.initDataUnsafe) === null || _app_initDataUnsafe1 === void 0 ? void 0 : (_app_initDataUnsafe_user1 = _app_initDataUnsafe1.user) === null || _app_initDataUnsafe_user1 === void 0 ? void 0 : _app_initDataUnsafe_user1.id);\n            const addUser = async (chat_id)=>{\n                alert(\"'add user function ran',\".concat(chat_id));\n                try {\n                    const config = {\n                        headers: {\n                            \"Content-type\": \"application/json\"\n                        }\n                    };\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:4000/api/users/\", {\n                        chat_id: chat_id\n                    }, config);\n                    if (response) {\n                        setAppUser(response.data);\n                        alert(response.data);\n                    }\n                } catch (error) {\n                    console.error(\"Error adding user:\", error);\n                } finally{\n                    setLoading(false); // Set loading to false after the API call\n                }\n            };\n            addUser((_app_initDataUnsafe2 = app.initDataUnsafe) === null || _app_initDataUnsafe2 === void 0 ? void 0 : (_app_initDataUnsafe_user2 = _app_initDataUnsafe2.user) === null || _app_initDataUnsafe_user2 === void 0 ? void 0 : _app_initDataUnsafe_user2.id);\n            setWebApp(app);\n        } else {\n            setLoading(false); // If the app is not available, stop loading\n        }\n    }, []);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return webApp ? {\n            webApp,\n            unsafeData: webApp.initDataUnsafe,\n            user: webApp.initDataUnsafe.user\n        } : {};\n    }, [\n        webApp\n    ]);\n    const userValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return {\n            appuser: appUser,\n            loading: loading\n        };\n    }, [\n        appUser,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TelegramContext.Provider, {\n        value: value,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_script__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: \"https://telegram.org/js/telegram-web-app.js\",\n                strategy: \"beforeInteractive\"\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/provider.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppUserContext.Provider, {\n                value: userValue,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/provider.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/frdbotapp/frontend/src/app/provider.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TelegramProvider, \"5BGOSC/rfZK3TWP4cYWImYOOvSg=\");\n_c = TelegramProvider;\nconst useTelegram = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(TelegramContext);\n};\n_s1(useTelegram, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst useAppUser = ()=>{\n    _s2();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AppUserContext);\n};\n_s2(useAppUser, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"TelegramProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TixNQUFNc0MsY0FBYzs7SUFBTTlDLE9BQUFBLGlEQUFVQSxDQUFDSztBQUFlLEVBQUU7SUFBaER5QztBQUNOLE1BQU1DLGFBQWE7O0lBQU0vQyxPQUFBQSxpREFBVUEsQ0FBQ007QUFBYyxFQUFFO0lBQTlDeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm92aWRlci50c3g/NmViOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUZWxlZ3JhbVByb3ZpZGVyLnRzeFxuJ3VzZSBjbGllbnQnXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBJVGVsZWdyYW1Vc2VyLCBJV2ViQXBwLCBJQXBwVXNlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGVsZWdyYW1Db250ZXh0IHtcbiAgd2ViQXBwPzogSVdlYkFwcDtcbiAgdXNlcj86IElUZWxlZ3JhbVVzZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFVzZXJDb250ZXh0IHtcbiAgYXBwdXNlcj86IElBcHBVc2VyO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgVGVsZWdyYW1Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxJVGVsZWdyYW1Db250ZXh0Pih7fSk7XG5leHBvcnQgY29uc3QgQXBwVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PElBcHBVc2VyQ29udGV4dD4oeyBsb2FkaW5nOiB0cnVlIH0pO1xuXG5leHBvcnQgY29uc3QgVGVsZWdyYW1Qcm92aWRlciA9ICh7XG4gIGNoaWxkcmVuLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufSkgPT4ge1xuICBjb25zdCBbd2ViQXBwLCBzZXRXZWJBcHBdID0gdXNlU3RhdGU8SVdlYkFwcCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbYXBwVXNlciwgc2V0QXBwVXNlcl0gPSB1c2VTdGF0ZTxJQXBwVXNlciB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDo0MDAwJztcblxuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFwcCA9ICh3aW5kb3cgYXMgYW55KS5UZWxlZ3JhbT8uV2ViQXBwO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tpbmcgZm9yIFRlbGVncmFtIFdlYkFwcDpcIiwgYXBwKTsgLy8gRGVidWcgbG9nZ2luZ1xuICAgIGlmIChhcHApIHtcbiAgICAgIGFwcC5yZWFkeSgpO1xuICAgICAgY29uc29sZS5sb2coXCJ0IHVzZXIgaWRcIixhcHAuaW5pdERhdGFVbnNhZmU/LnVzZXI/LmlkKVxuICAgICAgYWxlcnQoYXBwLmluaXREYXRhVW5zYWZlPy51c2VyPy5pZClcbiAgICAgIGNvbnN0IGFkZFVzZXIgPSBhc3luYyAoY2hhdF9pZDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGFsZXJ0KGAnYWRkIHVzZXIgZnVuY3Rpb24gcmFuJywke2NoYXRfaWR9YClcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS91c2Vycy9gLCB7IFxuICAgICAgICAgICAgY2hhdF9pZDogY2hhdF9pZCB9LCBjb25maWcpO1xuICAgICAgICAgIGlmKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZXRBcHBVc2VyKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHVzZXI6JywgZXJyb3IpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAvLyBTZXQgbG9hZGluZyB0byBmYWxzZSBhZnRlciB0aGUgQVBJIGNhbGxcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFkZFVzZXIoYXBwLmluaXREYXRhVW5zYWZlPy51c2VyPy5pZClcbiAgICAgIHNldFdlYkFwcChhcHApO1xuICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAvLyBJZiB0aGUgYXBwIGlzIG5vdCBhdmFpbGFibGUsIHN0b3AgbG9hZGluZ1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIFxuICBjb25zdCB2YWx1ZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiB3ZWJBcHBcbiAgICAgID8ge1xuICAgICAgICAgIHdlYkFwcCxcbiAgICAgICAgICB1bnNhZmVEYXRhOiB3ZWJBcHAuaW5pdERhdGFVbnNhZmUsXG4gICAgICAgICAgdXNlcjogd2ViQXBwLmluaXREYXRhVW5zYWZlLnVzZXIsXG4gICAgICAgIH1cbiAgICAgIDoge307XG4gIH0sIFt3ZWJBcHBdKTtcblxuICBjb25zdCB1c2VyVmFsdWUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBwdXNlcjogYXBwVXNlcixcbiAgICAgIGxvYWRpbmc6IGxvYWRpbmdcbiAgICB9O1xuICB9LCBbYXBwVXNlciwgbG9hZGluZ10pO1xuXG4gIHJldHVybiAoXG4gICAgPFRlbGVncmFtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAgey8qIE1ha2Ugc3VyZSB0byBpbmNsdWRlIHNjcmlwdCB0YWcgd2l0aCBcImJlZm9yZUludGVyYWN0aXZlXCIgc3RyYXRlZ3kgdG8gcHJlLWxvYWQgd2ViLWFwcCBzY3JpcHQgKi99XG4gICAgICA8U2NyaXB0XG4gICAgICAgIHNyYz1cImh0dHBzOi8vdGVsZWdyYW0ub3JnL2pzL3RlbGVncmFtLXdlYi1hcHAuanNcIlxuICAgICAgICBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCJcbiAgICAgIC8+ICAgICAgXG4gICAgICA8QXBwVXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJWYWx1ZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQXBwVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9UZWxlZ3JhbUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVGVsZWdyYW0gPSAoKSA9PiB1c2VDb250ZXh0KFRlbGVncmFtQ29udGV4dCk7XG5leHBvcnQgY29uc3QgdXNlQXBwVXNlciA9ICgpID0+IHVzZUNvbnRleHQoQXBwVXNlckNvbnRleHQpO1xuIl0sIm5hbWVzIjpbIlNjcmlwdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiYXhpb3MiLCJUZWxlZ3JhbUNvbnRleHQiLCJBcHBVc2VyQ29udGV4dCIsImxvYWRpbmciLCJUZWxlZ3JhbVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ3ZWJBcHAiLCJzZXRXZWJBcHAiLCJhcHBVc2VyIiwic2V0QXBwVXNlciIsInVuZGVmaW5lZCIsInNldExvYWRpbmciLCJhcGlVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImFwcCIsIndpbmRvdyIsIlRlbGVncmFtIiwiV2ViQXBwIiwiY29uc29sZSIsImxvZyIsInJlYWR5IiwiaW5pdERhdGFVbnNhZmUiLCJ1c2VyIiwiaWQiLCJhbGVydCIsImFkZFVzZXIiLCJjaGF0X2lkIiwiY29uZmlnIiwiaGVhZGVycyIsInJlc3BvbnNlIiwicG9zdCIsImRhdGEiLCJlcnJvciIsInZhbHVlIiwidW5zYWZlRGF0YSIsInVzZXJWYWx1ZSIsImFwcHVzZXIiLCJQcm92aWRlciIsInNyYyIsInN0cmF0ZWd5IiwidXNlVGVsZWdyYW0iLCJ1c2VBcHBVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/provider.tsx\n"));

/***/ })

});