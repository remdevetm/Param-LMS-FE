"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/protected/admin/edit-course/page",{

/***/ "(app-pages-browser)/./app/lib/restapi/client.ts":
/*!***********************************!*\
  !*** ./app/lib/restapi/client.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: function() { return /* binding */ DELETE; },\n/* harmony export */   GET: function() { return /* binding */ GET; },\n/* harmony export */   POST: function() { return /* binding */ POST; },\n/* harmony export */   PUT: function() { return /* binding */ PUT; }\n/* harmony export */ });\n/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger/logger */ \"(app-pages-browser)/./app/lib/logger/logger.tsx\");\n\nconst axios = (__webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/dist/browser/axios.cjs\")[\"default\"]);\nconst token = \"\";\nconsole.log(token);\nlet header;\n// if (!token) {\n//   header = {\n//     Authorization: `Anonymous`,\n//     \"Access-Control-Allow-Origin\": \"*\",\n//     \"Access-Control-Allow-Headers\": \"X-Requested-With\",\n//   };\n// } else {\nheader = {\n    // Authorization: `Bearer ${token}`,\n    Authorization: \"Basic YWRtaW46cmpPdjJhU1omPXxuRDYpJQ==\",\n    \"Access-Control-Allow-Origin\": \"*\",\n    \"Access-Control-Allow-Headers\": \"X-Requested-With\",\n    \"ngrok-skip-browser-warning\": \"any\"\n};\nasync function GET(endPoint) {\n    try {\n        // const result = await axios.get(`${endPoint}`, {auth: {\n        //   username: \"admin\",\n        //   password: \"rjOv2aSZ&=|nD6)%\"\n        // }} );\n        const result = fetch(endPoint, {\n            method: \"get\",\n            headers: header\n        }).then(function(response) {\n            return response.json();\n        });\n        return result;\n    } catch (error) {\n        console.log(\"[API ERROR  : Method: GET; Endpoint: \".concat(endPoint, \"]\"), error.toJSON());\n        return error.response;\n    }\n}\nasync function POST(endPoint, payload) {\n    try {\n        const result = await axios.post(\"\".concat(endPoint), payload, {\n            headers: header\n        });\n        (0,_logger_logger__WEBPACK_IMPORTED_MODULE_0__.Diagnostic)(\"SUCCESS ON POST, returning\", result);\n        return result.data;\n    } catch (error) {\n        console.log(\"[API ERROR : Method: POST; Endpoint: \".concat(endPoint, \"]\"), error);\n        (0,_logger_logger__WEBPACK_IMPORTED_MODULE_0__.Diagnostic)(\"ERROR ON POST, returning\", error);\n        return error.response;\n    }\n}\nfunction DELETE(endPoint, params) {\n    axios.delete(\"\".concat(endPoint), {\n        headers: header,\n        params: params\n    }).then((result)=>{\n        return result;\n    }).catch((error)=>{\n        return error;\n    });\n}\nfunction PUT(endPoint, payload) {\n    let HEADER = {\n        \"Authorization\": \"Basic YWRtaW46cmpOdjJhU1omPXxuRDYpJQ==\",\n        \"Access-Control-Allow-Origin\": \"*\"\n    };\n    // Return the axios promise directly\n    return axios.put(\"\".concat(endPoint), payload, {\n        headers: HEADER\n    }).then((result)=>{\n        // Assuming result.data is the actual data returned from the API\n        return result.data;\n    }).catch((error)=>{\n        // Returning an error object or throwing an error, based on your preference\n        return error;\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvcmVzdGFwaS9jbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFHOUMsTUFBTUMsUUFBUUMsZ0hBQXdCO0FBRXRDLE1BQU1FLFFBQVE7QUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtBQUNaLElBQUlHO0FBQ0osZ0JBQWdCO0FBQ2hCLGVBQWU7QUFFZixrQ0FBa0M7QUFDbEMsMENBQTBDO0FBQzFDLDBEQUEwRDtBQUMxRCxPQUFPO0FBQ1AsV0FBVztBQUNUQSxTQUFTO0lBQ1Asb0NBQW9DO0lBQ3BDQyxlQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyw4QkFBNkI7QUFFakM7QUFFTyxlQUFlQyxJQUFJQyxRQUFnQjtJQUN4QyxJQUFJO1FBQ0YseURBQXlEO1FBQ3pELHVCQUF1QjtRQUN2QixpQ0FBaUM7UUFDakMsUUFBUTtRQUNSLE1BQU1DLFNBQVVDLE1BQU1GLFVBQVU7WUFDOUJHLFFBQVE7WUFDUkMsU0FBU1A7UUFFWCxHQUFHUSxJQUFJLENBQUMsU0FBU0MsUUFBUTtZQUN2QixPQUFPQSxTQUFTQyxJQUFJO1FBQ3RCO1FBRUEsT0FBT047SUFDVCxFQUFFLE9BQU9PLE9BQVc7UUFDbEJiLFFBQVFDLEdBQUcsQ0FDVCx3Q0FBaUQsT0FBVEksVUFBUyxNQUNqRFEsTUFBTUMsTUFBTTtRQUVkLE9BQU9ELE1BQU1GLFFBQVE7SUFDdkI7QUFDRjtBQUVPLGVBQWVJLEtBQUtWLFFBQWdCLEVBQUVXLE9BQWU7SUFDMUQsSUFBSTtRQUVGLE1BQU1WLFNBQVMsTUFBTVYsTUFBTXFCLElBQUksQ0FBQyxHQUFZLE9BQVRaLFdBQVlXLFNBQVM7WUFDdERQLFNBQVNQO1FBQ1g7UUFDQVAsMERBQVVBLENBQUMsOEJBQThCVztRQUN6QyxPQUFPQSxPQUFPWSxJQUFJO0lBQ3BCLEVBQUUsT0FBT0wsT0FBVztRQUVsQmIsUUFBUUMsR0FBRyxDQUFDLHdDQUFpRCxPQUFUSSxVQUFTLE1BQUlRO1FBQ2pFbEIsMERBQVVBLENBQUMsNEJBQTRCa0I7UUFDdkMsT0FBT0EsTUFBTUYsUUFBUTtJQUN2QjtBQUNGO0FBRU8sU0FBU1EsT0FBT2QsUUFBZ0IsRUFBRWUsTUFBYztJQUNyRHhCLE1BQ0d5QixNQUFNLENBQUMsR0FBWSxPQUFUaEIsV0FBWTtRQUFFSSxTQUFTUDtRQUFRa0IsUUFBUUE7SUFBTyxHQUN4RFYsSUFBSSxDQUFDLENBQUNKO1FBQ0wsT0FBT0E7SUFDVCxHQUNDZ0IsS0FBSyxDQUFDLENBQUNUO1FBQ04sT0FBT0E7SUFDVDtBQUNKO0FBR08sU0FBU1UsSUFBSWxCLFFBQWdCLEVBQUVXLE9BQWU7SUFDbkQsSUFBSVEsU0FBUztRQUNYLGlCQUFpQjtRQUNqQiwrQkFBK0I7SUFDakM7SUFFQSxvQ0FBb0M7SUFDcEMsT0FBTzVCLE1BQ0o2QixHQUFHLENBQUMsR0FBWSxPQUFUcEIsV0FBWVcsU0FBUztRQUFFUCxTQUFTZTtJQUFPLEdBQzlDZCxJQUFJLENBQUMsQ0FBQ0o7UUFDTCxnRUFBZ0U7UUFDaEUsT0FBT0EsT0FBT1ksSUFBSTtJQUNwQixHQUNDSSxLQUFLLENBQUMsQ0FBQ1Q7UUFDTiwyRUFBMkU7UUFDM0UsT0FBT0E7SUFDVDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9saWIvcmVzdGFwaS9jbGllbnQudHM/ZWY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaWFnbm9zdGljIH0gZnJvbSBcIi4uL2xvZ2dlci9sb2dnZXJcIjtcclxuXHJcblxyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKS5kZWZhdWx0O1xyXG5cclxuY29uc3QgdG9rZW4gPSBcIlwiO1xyXG5jb25zb2xlLmxvZyh0b2tlbik7XHJcbmxldCBoZWFkZXI6IGFueTtcclxuLy8gaWYgKCF0b2tlbikge1xyXG4vLyAgIGhlYWRlciA9IHtcclxuXHJcbi8vICAgICBBdXRob3JpemF0aW9uOiBgQW5vbnltb3VzYCxcclxuLy8gICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4vLyAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCI6IFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLFxyXG4vLyAgIH07XHJcbi8vIH0gZWxzZSB7XHJcbiAgaGVhZGVyID0ge1xyXG4gICAgLy8gQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICBBdXRob3JpemF0aW9uOlwiQmFzaWMgWVdSdGFXNDZjbXBQZGpKaFUxb21QWHh1UkRZcEpRPT1cIixcclxuICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCI6IFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLFxyXG4gICAgXCJuZ3Jvay1za2lwLWJyb3dzZXItd2FybmluZ1wiOlwiYW55XCJcclxuICAvLyB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKGVuZFBvaW50OiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke2VuZFBvaW50fWAsIHthdXRoOiB7XHJcbiAgICAvLyAgIHVzZXJuYW1lOiBcImFkbWluXCIsXHJcbiAgICAvLyAgIHBhc3N3b3JkOiBcInJqT3YyYVNaJj18bkQ2KSVcIlxyXG4gICAgLy8gfX0gKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9ICBmZXRjaChlbmRQb2ludCwge1xyXG4gICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICBoZWFkZXJzOiBoZWFkZXIsXHJcbiAgICAgIC8vIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9wdHMpXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3I6YW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgYFtBUEkgRVJST1IgIDogTWV0aG9kOiBHRVQ7IEVuZHBvaW50OiAke2VuZFBvaW50fV1gLFxyXG4gICAgICBlcnJvci50b0pTT04oKVxyXG4gICAgKTtcclxuICAgIHJldHVybiBlcnJvci5yZXNwb25zZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKGVuZFBvaW50OiBzdHJpbmcsIHBheWxvYWQ6IE9iamVjdCkge1xyXG4gIHRyeSB7XHJcbiAgXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAke2VuZFBvaW50fWAsIHBheWxvYWQsIHtcclxuICAgICAgaGVhZGVyczogaGVhZGVyLFxyXG4gICAgfSk7XHJcbiAgICBEaWFnbm9zdGljKFwiU1VDQ0VTUyBPTiBQT1NULCByZXR1cm5pbmdcIiwgcmVzdWx0KTtcclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9IGNhdGNoIChlcnJvcjphbnkpIHtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coYFtBUEkgRVJST1IgOiBNZXRob2Q6IFBPU1Q7IEVuZHBvaW50OiAke2VuZFBvaW50fV1gLCBlcnJvcik7XHJcbiAgICBEaWFnbm9zdGljKFwiRVJST1IgT04gUE9TVCwgcmV0dXJuaW5nXCIsIGVycm9yKTtcclxuICAgIHJldHVybiBlcnJvci5yZXNwb25zZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBERUxFVEUoZW5kUG9pbnQ6IHN0cmluZywgcGFyYW1zOiBPYmplY3QpIHtcclxuICBheGlvc1xyXG4gICAgLmRlbGV0ZShgJHtlbmRQb2ludH1gLCB7IGhlYWRlcnM6IGhlYWRlciwgcGFyYW1zOiBwYXJhbXMgfSlcclxuICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQVVQoZW5kUG9pbnQ6IHN0cmluZywgcGF5bG9hZDogT2JqZWN0KTogUHJvbWlzZTxhbnk+IHtcclxuICBsZXQgSEVBREVSID0ge1xyXG4gICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmFzaWMgWVdSdGFXNDZjbXBPZGpKaFUxb21QWHh1UkRZcEpRPT1cIixcclxuICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gIH07XHJcblxyXG4gIC8vIFJldHVybiB0aGUgYXhpb3MgcHJvbWlzZSBkaXJlY3RseVxyXG4gIHJldHVybiBheGlvc1xyXG4gICAgLnB1dChgJHtlbmRQb2ludH1gLCBwYXlsb2FkLCB7IGhlYWRlcnM6IEhFQURFUiB9KVxyXG4gICAgLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIC8vIEFzc3VtaW5nIHJlc3VsdC5kYXRhIGlzIHRoZSBhY3R1YWwgZGF0YSByZXR1cm5lZCBmcm9tIHRoZSBBUElcclxuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAvLyBSZXR1cm5pbmcgYW4gZXJyb3Igb2JqZWN0IG9yIHRocm93aW5nIGFuIGVycm9yLCBiYXNlZCBvbiB5b3VyIHByZWZlcmVuY2VcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfSk7XHJcbn0iXSwibmFtZXMiOlsiRGlhZ25vc3RpYyIsImF4aW9zIiwicmVxdWlyZSIsImRlZmF1bHQiLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXIiLCJBdXRob3JpemF0aW9uIiwiR0VUIiwiZW5kUG9pbnQiLCJyZXN1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJ0b0pTT04iLCJQT1NUIiwicGF5bG9hZCIsInBvc3QiLCJkYXRhIiwiREVMRVRFIiwicGFyYW1zIiwiZGVsZXRlIiwiY2F0Y2giLCJQVVQiLCJIRUFERVIiLCJwdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/restapi/client.ts\n"));

/***/ })

});