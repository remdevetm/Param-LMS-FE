"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/protected/admin/manage-courses/page",{

/***/ "(app-pages-browser)/./app/protected/admin/manage-courses/page.tsx":
/*!*****************************************************!*\
  !*** ./app/protected/admin/manage-courses/page.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_lib_restapi_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/lib/restapi/endpoints */ \"(app-pages-browser)/./app/lib/restapi/endpoints.ts\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal-cookie */ \"(app-pages-browser)/./node_modules/universal-cookie/es6/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _assets_vendor_spinkit_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/vendor/spinkit.css */ \"(app-pages-browser)/./app/assets/vendor/spinkit.css\");\n/* harmony import */ var _assets_css_preloader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/css/preloader.css */ \"(app-pages-browser)/./app/assets/css/preloader.css\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/app-dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ManageCourses() {\n    _s();\n    const [courseHover, setCourseHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [courses, setCourses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n    const userData = cookies.get(\"param-lms-user\");\n    console.log(userData);\n    async function ListAllCourses() {\n        let _id = react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.loading(\"Please wait..\", {\n            position: \"top-center\",\n            autoClose: 1000,\n            hideProgressBar: false,\n            closeOnClick: false,\n            pauseOnHover: false,\n            draggable: false,\n            progress: undefined,\n            theme: \"light\"\n        });\n        try {\n            const data = await _app_lib_restapi_endpoints__WEBPACK_IMPORTED_MODULE_2__.Api.GET_CoursesByUserId(userData.id);\n            setCourses(data);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.dismiss(_id);\n        } catch (error) {\n            console.log(\"Error fetching courses:\", error);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.update(_id, {\n                render: \"Error loading courses\",\n                type: \"success\",\n                isLoading: false\n            });\n            setTimeout(()=>{\n                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.dismiss(_id);\n            }, 2000);\n        }\n    }\n    const editCourse = (course)=>{\n        localStorage.setItem(\"course\", JSON.stringify(course.data));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"useEffect is running\");\n        ListAllCourses();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mdk-drawer-layout js-mdk-drawer-layout\",\n        \"data-push\": \"\",\n        \"data-responsive-width\": \"992px\",\n        \"data-domfactory-upgraded\": \"mdk-drawer-layout\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Param-LMS-FE\\\\app\\\\protected\\\\admin\\\\manage-courses\\\\page.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Param-LMS-FE\\\\app\\\\protected\\\\admin\\\\manage-courses\\\\page.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(ManageCourses, \"I4LZN21AgpX0kRs/17Iv+gcfsVM=\");\n_c = ManageCourses;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c1 = ()=>Promise.resolve(ManageCourses), {\n    ssr: false\n}));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ManageCourses\");\n$RefreshReg$(_c1, \"%default%$dynamic\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm90ZWN0ZWQvYWRtaW4vbWFuYWdlLWNvdXJzZXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFJNEM7QUFDTTtBQUVYO0FBQ2dCO0FBQ1I7QUFHSDtBQUNEO0FBQ1I7QUFFbkMsU0FBU087O0lBRVAsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFVO0lBQ3hELE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUE7SUFDdEMsTUFBTVcsVUFBVSxJQUFJVCx3REFBT0E7SUFFM0IsTUFBTVUsV0FBV0QsUUFBUUUsR0FBRyxDQUFDO0lBQzdCQyxRQUFRQyxHQUFHLENBQUNIO0lBRVosZUFBZUk7UUFFZixJQUFJQyxNQUFNYixpREFBS0EsQ0FBQ2MsT0FBTyxDQUFDLGlCQUFpQjtZQUN2Q0MsVUFBVTtZQUNWQyxXQUFXO1lBQ1hDLGlCQUFpQjtZQUNqQkMsY0FBYztZQUNkQyxjQUFjO1lBQ2RDLFdBQVc7WUFDWEMsVUFBVUM7WUFDVkMsT0FBTztRQUNQO1FBQ0EsSUFBSTtZQUNGLE1BQU1DLE9BQU8sTUFBTTNCLDJEQUFHQSxDQUFDNEIsbUJBQW1CLENBQUNqQixTQUFTa0IsRUFBRTtZQUN0RHBCLFdBQVdrQjtZQUNYeEIsaURBQUtBLENBQUMyQixPQUFPLENBQUNkO1FBQ2hCLEVBQUUsT0FBT2UsT0FBTztZQUNkbEIsUUFBUUMsR0FBRyxDQUFDLDJCQUEyQmlCO1lBQ3ZDNUIsaURBQUtBLENBQUM2QixNQUFNLENBQUNoQixLQUFLO2dCQUFFaUIsUUFBUTtnQkFBeUJDLE1BQU07Z0JBQVdDLFdBQVc7WUFBTTtZQUN2RkMsV0FBVztnQkFDVGpDLGlEQUFLQSxDQUFDMkIsT0FBTyxDQUFDZDtZQUNoQixHQUFHO1FBQ0w7SUFDRjtJQUdBLE1BQU1xQixhQUFhLENBQUNDO1FBQ2xCQyxhQUFhQyxPQUFPLENBQUMsVUFBVUMsS0FBS0MsU0FBUyxDQUFDSixPQUFPWCxJQUFJO0lBQzNEO0lBRUE3QixnREFBU0EsQ0FBQztRQUNSZSxRQUFRQyxHQUFHLENBQUM7UUFDWkM7SUFDRixHQUFHLEVBQUU7SUFJTCxxQkFDRSw4REFBQzRCO1FBQ0NDLFdBQVU7UUFDVkMsYUFBVTtRQUNWQyx5QkFBc0I7UUFDdEJDLDRCQUF5QjtrQkFFekIsNEVBQUM3QywwREFBY0E7Ozs7Ozs7Ozs7QUFJckI7R0F6RFNHO0tBQUFBO0FBMkRULCtEQUFlLE1BQUFELG1EQUFPQSxPQUFFLElBQU00QyxRQUFRQyxPQUFPLENBQUM1QyxnQkFBZ0I7SUFBQzZDLEtBQUs7QUFBSyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wcm90ZWN0ZWQvYWRtaW4vbWFuYWdlLWNvdXJzZXMvcGFnZS50c3g/MjY1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCJAL2FwcC9saWIvcmVzdGFwaS9lbmRwb2ludHNcIjtcclxuaW1wb3J0IHsgSUNvdXJzZSB9IGZyb20gXCJAL2FwcC9pbnRlcmZhY2VzL2NvdXJzZXNcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Ecm9wZG93blwiO1xyXG5pbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvdmVuZG9yL3NwaW5raXQuY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9jc3MvcHJlbG9hZGVyLmNzc1wiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5cclxuZnVuY3Rpb24gTWFuYWdlQ291cnNlcygpIHtcclxuXHJcbiAgY29uc3QgW2NvdXJzZUhvdmVyLCBzZXRDb3Vyc2VIb3Zlcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2NvdXJzZXMsIHNldENvdXJzZXNdID0gdXNlU3RhdGU8SUNvdXJzZVtdIHwgYW55PigpXHJcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcblxyXG4gIGNvbnN0IHVzZXJEYXRhID0gY29va2llcy5nZXQoXCJwYXJhbS1sbXMtdXNlclwiKTtcclxuICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIExpc3RBbGxDb3Vyc2VzKCkge1xyXG4gICAgXHJcbiAgbGV0IF9pZCA9IHRvYXN0LmxvYWRpbmcoXCJQbGVhc2Ugd2FpdC4uXCIsIHsvL2xvYWRlclxyXG4gICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgYXV0b0Nsb3NlOiAxMDAwLFxyXG4gICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgIGNsb3NlT25DbGljazogZmFsc2UsXHJcbiAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxyXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcclxuICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICB0aGVtZTogXCJsaWdodFwiLFxyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgQXBpLkdFVF9Db3Vyc2VzQnlVc2VySWQodXNlckRhdGEuaWQpO1xyXG4gICAgICBzZXRDb3Vyc2VzKGRhdGEpXHJcbiAgICAgIHRvYXN0LmRpc21pc3MoX2lkKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZmV0Y2hpbmcgY291cnNlczpcIiwgZXJyb3IpO1xyXG4gICAgICB0b2FzdC51cGRhdGUoX2lkLCB7IHJlbmRlcjogXCJFcnJvciBsb2FkaW5nIGNvdXJzZXNcIiwgdHlwZTogXCJzdWNjZXNzXCIsIGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmRpc21pc3MoX2lkKTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgZWRpdENvdXJzZSA9IChjb3Vyc2U6IGFueSkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvdXJzZScsIEpTT04uc3RyaW5naWZ5KGNvdXJzZS5kYXRhKSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlRWZmZWN0IGlzIHJ1bm5pbmdcIik7XHJcbiAgICBMaXN0QWxsQ291cnNlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJtZGstZHJhd2VyLWxheW91dCBqcy1tZGstZHJhd2VyLWxheW91dFwiXHJcbiAgICAgIGRhdGEtcHVzaD1cIlwiXHJcbiAgICAgIGRhdGEtcmVzcG9uc2l2ZS13aWR0aD1cIjk5MnB4XCJcclxuICAgICAgZGF0YS1kb21mYWN0b3J5LXVwZ3JhZGVkPVwibWRrLWRyYXdlci1sYXlvdXRcIlxyXG4gICAgPlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkeW5hbWljICgoKSA9PiBQcm9taXNlLnJlc29sdmUoTWFuYWdlQ291cnNlcyksIHtzc3I6IGZhbHNlfSlcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBpIiwiQ29va2llcyIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJkeW5hbWljIiwiTWFuYWdlQ291cnNlcyIsImNvdXJzZUhvdmVyIiwic2V0Q291cnNlSG92ZXIiLCJjb3Vyc2VzIiwic2V0Q291cnNlcyIsImNvb2tpZXMiLCJ1c2VyRGF0YSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJMaXN0QWxsQ291cnNlcyIsIl9pZCIsImxvYWRpbmciLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwidGhlbWUiLCJkYXRhIiwiR0VUX0NvdXJzZXNCeVVzZXJJZCIsImlkIiwiZGlzbWlzcyIsImVycm9yIiwidXBkYXRlIiwicmVuZGVyIiwidHlwZSIsImlzTG9hZGluZyIsInNldFRpbWVvdXQiLCJlZGl0Q291cnNlIiwiY291cnNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhLXB1c2giLCJkYXRhLXJlc3BvbnNpdmUtd2lkdGgiLCJkYXRhLWRvbWZhY3RvcnktdXBncmFkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/protected/admin/manage-courses/page.tsx\n"));

/***/ })

});