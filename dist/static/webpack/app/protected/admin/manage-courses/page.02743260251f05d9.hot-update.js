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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_lib_restapi_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/lib/restapi/endpoints */ \"(app-pages-browser)/./app/lib/restapi/endpoints.ts\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _assets_vendor_spinkit_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/vendor/spinkit.css */ \"(app-pages-browser)/./app/assets/vendor/spinkit.css\");\n/* harmony import */ var _assets_css_preloader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/css/preloader.css */ \"(app-pages-browser)/./app/assets/css/preloader.css\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/app-dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ManageCourses() {\n    _s();\n    const [courseHover, setCourseHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [courses, setCourses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // const cookies = new Cookies();\n    // const userData = cookies.get(\"param-lms-user\");\n    // console.log(userData);\n    async function ListAllCourses() {\n        let _id = react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.loading(\"Please wait..\", {\n            position: \"top-center\",\n            autoClose: 1000,\n            hideProgressBar: false,\n            closeOnClick: false,\n            pauseOnHover: false,\n            draggable: false,\n            progress: undefined,\n            theme: \"light\"\n        });\n        try {\n            const data = await _app_lib_restapi_endpoints__WEBPACK_IMPORTED_MODULE_2__.Api.GET_CoursesByUserId(userData.id);\n            setCourses(data);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.dismiss(_id);\n        } catch (error) {\n            console.log(\"Error fetching courses:\", error);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.update(_id, {\n                render: \"Error loading courses\",\n                type: \"success\",\n                isLoading: false\n            });\n            setTimeout(()=>{\n                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.dismiss(_id);\n            }, 2000);\n        }\n    }\n    const editCourse = (course)=>{\n        localStorage.setItem(\"course\", JSON.stringify(course.data));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"useEffect is running\");\n    //  ListAllCourses();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mdk-drawer-layout js-mdk-drawer-layout\",\n        \"data-push\": \"\",\n        \"data-responsive-width\": \"992px\",\n        \"data-domfactory-upgraded\": \"mdk-drawer-layout\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Param-LMS-FE\\\\app\\\\protected\\\\admin\\\\manage-courses\\\\page.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Param-LMS-FE\\\\app\\\\protected\\\\admin\\\\manage-courses\\\\page.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(ManageCourses, \"I4LZN21AgpX0kRs/17Iv+gcfsVM=\");\n_c = ManageCourses;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c1 = ()=>Promise.resolve(ManageCourses), {\n    ssr: false\n}));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ManageCourses\");\n$RefreshReg$(_c1, \"%default%$dynamic\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm90ZWN0ZWQvYWRtaW4vbWFuYWdlLWNvdXJzZXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUk0QztBQUNNO0FBR0s7QUFDUjtBQUdIO0FBQ0Q7QUFDUjtBQUVuQyxTQUFTTTs7SUFFUCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQVU7SUFDeEQsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQTtJQUN0QyxpQ0FBaUM7SUFFakMsa0RBQWtEO0lBQ2xELHlCQUF5QjtJQUV6QixlQUFlVTtRQUVmLElBQUlDLE1BQU1SLGlEQUFLQSxDQUFDUyxPQUFPLENBQUMsaUJBQWlCO1lBQ3ZDQyxVQUFVO1lBQ1ZDLFdBQVc7WUFDWEMsaUJBQWlCO1lBQ2pCQyxjQUFjO1lBQ2RDLGNBQWM7WUFDZEMsV0FBVztZQUNYQyxVQUFVQztZQUNWQyxPQUFPO1FBQ1A7UUFDQSxJQUFJO1lBQ0YsTUFBTUMsT0FBTyxNQUFNckIsMkRBQUdBLENBQUNzQixtQkFBbUIsQ0FBQ0MsU0FBU0MsRUFBRTtZQUN0RGhCLFdBQVdhO1lBQ1huQixpREFBS0EsQ0FBQ3VCLE9BQU8sQ0FBQ2Y7UUFDaEIsRUFBRSxPQUFPZ0IsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUMsMkJBQTJCRjtZQUN2Q3hCLGlEQUFLQSxDQUFDMkIsTUFBTSxDQUFDbkIsS0FBSztnQkFBRW9CLFFBQVE7Z0JBQXlCQyxNQUFNO2dCQUFXQyxXQUFXO1lBQU07WUFDdkZDLFdBQVc7Z0JBQ1QvQixpREFBS0EsQ0FBQ3VCLE9BQU8sQ0FBQ2Y7WUFDaEIsR0FBRztRQUNMO0lBQ0Y7SUFHQSxNQUFNd0IsYUFBYSxDQUFDQztRQUNsQkMsYUFBYUMsT0FBTyxDQUFDLFVBQVVDLEtBQUtDLFNBQVMsQ0FBQ0osT0FBT2QsSUFBSTtJQUMzRDtJQUVBdkIsZ0RBQVNBLENBQUM7UUFDUjZCLFFBQVFDLEdBQUcsQ0FBQztJQUNkLHFCQUFxQjtJQUNyQixHQUFHLEVBQUU7SUFJTCxxQkFDRSw4REFBQ1k7UUFDQ0MsV0FBVTtRQUNWQyxhQUFVO1FBQ1ZDLHlCQUFzQjtRQUN0QkMsNEJBQXlCO2tCQUV6Qiw0RUFBQzNDLDBEQUFjQTs7Ozs7Ozs7OztBQUlyQjtHQXpEU0c7S0FBQUE7QUEyRFQsK0RBQWUsTUFBQUQsbURBQU9BLE9BQUUsSUFBTTBDLFFBQVFDLE9BQU8sQ0FBQzFDLGdCQUFnQjtJQUFDMkMsS0FBSztBQUFLLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Byb3RlY3RlZC9hZG1pbi9tYW5hZ2UtY291cnNlcy9wYWdlLnRzeD8yNjVjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIkAvYXBwL2xpYi9yZXN0YXBpL2VuZHBvaW50c1wiO1xyXG5pbXBvcnQgeyBJQ291cnNlIH0gZnJvbSBcIkAvYXBwL2ludGVyZmFjZXMvY291cnNlc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duXCI7XHJcbmltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy92ZW5kb3Ivc3BpbmtpdC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL2Nzcy9wcmVsb2FkZXIuY3NzXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcblxyXG5mdW5jdGlvbiBNYW5hZ2VDb3Vyc2VzKCkge1xyXG5cclxuICBjb25zdCBbY291cnNlSG92ZXIsIHNldENvdXJzZUhvdmVyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbY291cnNlcywgc2V0Q291cnNlc10gPSB1c2VTdGF0ZTxJQ291cnNlW10gfCBhbnk+KClcclxuICAvLyBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuXHJcbiAgLy8gY29uc3QgdXNlckRhdGEgPSBjb29raWVzLmdldChcInBhcmFtLWxtcy11c2VyXCIpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gTGlzdEFsbENvdXJzZXMoKSB7XHJcbiAgICBcclxuICBsZXQgX2lkID0gdG9hc3QubG9hZGluZyhcIlBsZWFzZSB3YWl0Li5cIiwgey8vbG9hZGVyXHJcbiAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICBhdXRvQ2xvc2U6IDEwMDAsXHJcbiAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcclxuICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgIHRoZW1lOiBcImxpZ2h0XCIsXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBBcGkuR0VUX0NvdXJzZXNCeVVzZXJJZCh1c2VyRGF0YS5pZCk7XHJcbiAgICAgIHNldENvdXJzZXMoZGF0YSlcclxuICAgICAgdG9hc3QuZGlzbWlzcyhfaWQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyBjb3Vyc2VzOlwiLCBlcnJvcik7XHJcbiAgICAgIHRvYXN0LnVwZGF0ZShfaWQsIHsgcmVuZGVyOiBcIkVycm9yIGxvYWRpbmcgY291cnNlc1wiLCB0eXBlOiBcInN1Y2Nlc3NcIiwgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdG9hc3QuZGlzbWlzcyhfaWQpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjb25zdCBlZGl0Q291cnNlID0gKGNvdXJzZTogYW55KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY291cnNlJywgSlNPTi5zdHJpbmdpZnkoY291cnNlLmRhdGEpKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2VFZmZlY3QgaXMgcnVubmluZ1wiKTtcclxuICAvLyAgTGlzdEFsbENvdXJzZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwibWRrLWRyYXdlci1sYXlvdXQganMtbWRrLWRyYXdlci1sYXlvdXRcIlxyXG4gICAgICBkYXRhLXB1c2g9XCJcIlxyXG4gICAgICBkYXRhLXJlc3BvbnNpdmUtd2lkdGg9XCI5OTJweFwiXHJcbiAgICAgIGRhdGEtZG9tZmFjdG9yeS11cGdyYWRlZD1cIm1kay1kcmF3ZXItbGF5b3V0XCJcclxuICAgID5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYyAoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKE1hbmFnZUNvdXJzZXMpLCB7c3NyOiBmYWxzZX0pXHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwaSIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJkeW5hbWljIiwiTWFuYWdlQ291cnNlcyIsImNvdXJzZUhvdmVyIiwic2V0Q291cnNlSG92ZXIiLCJjb3Vyc2VzIiwic2V0Q291cnNlcyIsIkxpc3RBbGxDb3Vyc2VzIiwiX2lkIiwibG9hZGluZyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJ0aGVtZSIsImRhdGEiLCJHRVRfQ291cnNlc0J5VXNlcklkIiwidXNlckRhdGEiLCJpZCIsImRpc21pc3MiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJyZW5kZXIiLCJ0eXBlIiwiaXNMb2FkaW5nIiwic2V0VGltZW91dCIsImVkaXRDb3Vyc2UiLCJjb3Vyc2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtcHVzaCIsImRhdGEtcmVzcG9uc2l2ZS13aWR0aCIsImRhdGEtZG9tZmFjdG9yeS11cGdyYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/protected/admin/manage-courses/page.tsx\n"));

/***/ })

});