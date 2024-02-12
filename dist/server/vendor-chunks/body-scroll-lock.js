"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/body-scroll-lock";
exports.ids = ["vendor-chunks/body-scroll-lock"];
exports.modules = {

/***/ "(ssr)/./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearAllBodyScrollLocks: () => (/* binding */ clearAllBodyScrollLocks),\n/* harmony export */   disableBodyScroll: () => (/* binding */ disableBodyScroll),\n/* harmony export */   enableBodyScroll: () => (/* binding */ enableBodyScroll)\n/* harmony export */ });\nfunction _toConsumableArray(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    } else {\n        return Array.from(arr);\n    }\n}\n// Older browsers don't support event options, feature detect it.\n// Adopted and modified solution from Bohdan Didukh (2017)\n// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi\nvar hasPassiveEvents = false;\nif (false) { var passiveTestOptions; }\nvar isIosDevice =  false && (0);\nvar locks = [];\nvar documentListenerAdded = false;\nvar initialClientY = -1;\nvar previousBodyOverflowSetting = void 0;\nvar previousBodyPaddingRight = void 0;\n// returns true if `el` should be allowed to receive touchmove events.\nvar allowTouchMove = function allowTouchMove(el) {\n    return locks.some(function(lock) {\n        if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {\n            return true;\n        }\n        return false;\n    });\n};\nvar preventDefault = function preventDefault(rawEvent) {\n    var e = rawEvent || window.event;\n    // For the case whereby consumers adds a touchmove event listener to document.\n    // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })\n    // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then\n    // the touchmove event on document will break.\n    if (allowTouchMove(e.target)) {\n        return true;\n    }\n    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).\n    if (e.touches.length > 1) return true;\n    if (e.preventDefault) e.preventDefault();\n    return false;\n};\nvar setOverflowHidden = function setOverflowHidden(options) {\n    // If previousBodyPaddingRight is already set, don't set it again.\n    if (previousBodyPaddingRight === undefined) {\n        var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;\n        var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;\n        if (_reserveScrollBarGap && scrollBarGap > 0) {\n            previousBodyPaddingRight = document.body.style.paddingRight;\n            document.body.style.paddingRight = scrollBarGap + \"px\";\n        }\n    }\n    // If previousBodyOverflowSetting is already set, don't set it again.\n    if (previousBodyOverflowSetting === undefined) {\n        previousBodyOverflowSetting = document.body.style.overflow;\n        document.body.style.overflow = \"hidden\";\n    }\n};\nvar restoreOverflowSetting = function restoreOverflowSetting() {\n    if (previousBodyPaddingRight !== undefined) {\n        document.body.style.paddingRight = previousBodyPaddingRight;\n        // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it\n        // can be set again.\n        previousBodyPaddingRight = undefined;\n    }\n    if (previousBodyOverflowSetting !== undefined) {\n        document.body.style.overflow = previousBodyOverflowSetting;\n        // Restore previousBodyOverflowSetting to undefined\n        // so setOverflowHidden knows it can be set again.\n        previousBodyOverflowSetting = undefined;\n    }\n};\n// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions\nvar isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {\n    return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;\n};\nvar handleScroll = function handleScroll(event, targetElement) {\n    var clientY = event.targetTouches[0].clientY - initialClientY;\n    if (allowTouchMove(event.target)) {\n        return false;\n    }\n    if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {\n        // element is at the top of its scroll.\n        return preventDefault(event);\n    }\n    if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {\n        // element is at the bottom of its scroll.\n        return preventDefault(event);\n    }\n    event.stopPropagation();\n    return true;\n};\nvar disableBodyScroll = function disableBodyScroll(targetElement, options) {\n    // targetElement must be provided\n    if (!targetElement) {\n        // eslint-disable-next-line no-console\n        console.error(\"disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.\");\n        return;\n    }\n    // disableBodyScroll must not have been called on this targetElement before\n    if (locks.some(function(lock) {\n        return lock.targetElement === targetElement;\n    })) {\n        return;\n    }\n    var lock = {\n        targetElement: targetElement,\n        options: options || {}\n    };\n    locks = [].concat(_toConsumableArray(locks), [\n        lock\n    ]);\n    if (isIosDevice) {\n        targetElement.ontouchstart = function(event) {\n            if (event.targetTouches.length === 1) {\n                // detect single touch.\n                initialClientY = event.targetTouches[0].clientY;\n            }\n        };\n        targetElement.ontouchmove = function(event) {\n            if (event.targetTouches.length === 1) {\n                // detect single touch.\n                handleScroll(event, targetElement);\n            }\n        };\n        if (!documentListenerAdded) {\n            document.addEventListener(\"touchmove\", preventDefault, hasPassiveEvents ? {\n                passive: false\n            } : undefined);\n            documentListenerAdded = true;\n        }\n    } else {\n        setOverflowHidden(options);\n    }\n};\nvar clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {\n    if (isIosDevice) {\n        // Clear all locks ontouchstart/ontouchmove handlers, and the references.\n        locks.forEach(function(lock) {\n            lock.targetElement.ontouchstart = null;\n            lock.targetElement.ontouchmove = null;\n        });\n        if (documentListenerAdded) {\n            document.removeEventListener(\"touchmove\", preventDefault, hasPassiveEvents ? {\n                passive: false\n            } : undefined);\n            documentListenerAdded = false;\n        }\n        // Reset initial clientY.\n        initialClientY = -1;\n    } else {\n        restoreOverflowSetting();\n    }\n    locks = [];\n};\nvar enableBodyScroll = function enableBodyScroll(targetElement) {\n    if (!targetElement) {\n        // eslint-disable-next-line no-console\n        console.error(\"enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.\");\n        return;\n    }\n    locks = locks.filter(function(lock) {\n        return lock.targetElement !== targetElement;\n    });\n    if (isIosDevice) {\n        targetElement.ontouchstart = null;\n        targetElement.ontouchmove = null;\n        if (documentListenerAdded && locks.length === 0) {\n            document.removeEventListener(\"touchmove\", preventDefault, hasPassiveEvents ? {\n                passive: false\n            } : undefined);\n            documentListenerAdded = false;\n        }\n    } else if (!locks.length) {\n        restoreOverflowSetting();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYm9keS1zY3JvbGwtbG9jay9saWIvYm9keVNjcm9sbExvY2suZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLG1CQUFtQkMsR0FBRztJQUFJLElBQUlDLE1BQU1DLE9BQU8sQ0FBQ0YsTUFBTTtRQUFFLElBQUssSUFBSUcsSUFBSSxHQUFHQyxPQUFPSCxNQUFNRCxJQUFJSyxNQUFNLEdBQUdGLElBQUlILElBQUlLLE1BQU0sRUFBRUYsSUFBSztZQUFFQyxJQUFJLENBQUNELEVBQUUsR0FBR0gsR0FBRyxDQUFDRyxFQUFFO1FBQUU7UUFBRSxPQUFPQztJQUFNLE9BQU87UUFBRSxPQUFPSCxNQUFNSyxJQUFJLENBQUNOO0lBQU07QUFBRTtBQUVsTSxpRUFBaUU7QUFFakUsMERBQTBEO0FBQzFELCtIQUErSDtBQUUvSCxJQUFJTyxtQkFBbUI7QUFDdkIsSUFBSSxLQUFrQixFQUFhLDJCQVNsQztBQUVELElBQUlPLGNBQWMsTUFBOEUsSUFBSyxFQUFrSTtBQUd2TyxJQUFJSyxRQUFRLEVBQUU7QUFDZCxJQUFJQyx3QkFBd0I7QUFDNUIsSUFBSUMsaUJBQWlCLENBQUM7QUFDdEIsSUFBSUMsOEJBQThCLEtBQUs7QUFDdkMsSUFBSUMsMkJBQTJCLEtBQUs7QUFFcEMsc0VBQXNFO0FBQ3RFLElBQUlDLGlCQUFpQixTQUFTQSxlQUFlQyxFQUFFO0lBQzdDLE9BQU9OLE1BQU1PLElBQUksQ0FBQyxTQUFVQyxJQUFJO1FBQzlCLElBQUlBLEtBQUtDLE9BQU8sQ0FBQ0osY0FBYyxJQUFJRyxLQUFLQyxPQUFPLENBQUNKLGNBQWMsQ0FBQ0MsS0FBSztZQUNsRSxPQUFPO1FBQ1Q7UUFFQSxPQUFPO0lBQ1Q7QUFDRjtBQUVBLElBQUlJLGlCQUFpQixTQUFTQSxlQUFlQyxRQUFRO0lBQ25ELElBQUlDLElBQUlELFlBQVluQixPQUFPcUIsS0FBSztJQUVoQyw4RUFBOEU7SUFDOUUsK0ZBQStGO0lBQy9GLG1GQUFtRjtJQUNuRiw4Q0FBOEM7SUFDOUMsSUFBSVIsZUFBZU8sRUFBRUUsTUFBTSxHQUFHO1FBQzVCLE9BQU87SUFDVDtJQUVBLDBIQUEwSDtJQUMxSCxJQUFJRixFQUFFRyxPQUFPLENBQUM3QixNQUFNLEdBQUcsR0FBRyxPQUFPO0lBRWpDLElBQUkwQixFQUFFRixjQUFjLEVBQUVFLEVBQUVGLGNBQWM7SUFFdEMsT0FBTztBQUNUO0FBRUEsSUFBSU0sb0JBQW9CLFNBQVNBLGtCQUFrQlAsT0FBTztJQUN4RCxrRUFBa0U7SUFDbEUsSUFBSUwsNkJBQTZCYixXQUFXO1FBQzFDLElBQUkwQix1QkFBdUIsQ0FBQyxDQUFDUixXQUFXQSxRQUFRUyxtQkFBbUIsS0FBSztRQUN4RSxJQUFJQyxlQUFlM0IsT0FBTzRCLFVBQVUsR0FBR0MsU0FBU0MsZUFBZSxDQUFDQyxXQUFXO1FBRTNFLElBQUlOLHdCQUF3QkUsZUFBZSxHQUFHO1lBQzVDZiwyQkFBMkJpQixTQUFTRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWTtZQUMzREwsU0FBU0csSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksR0FBR1AsZUFBZTtRQUNwRDtJQUNGO0lBRUEscUVBQXFFO0lBQ3JFLElBQUloQixnQ0FBZ0NaLFdBQVc7UUFDN0NZLDhCQUE4QmtCLFNBQVNHLElBQUksQ0FBQ0MsS0FBSyxDQUFDRSxRQUFRO1FBQzFETixTQUFTRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0UsUUFBUSxHQUFHO0lBQ2pDO0FBQ0Y7QUFFQSxJQUFJQyx5QkFBeUIsU0FBU0E7SUFDcEMsSUFBSXhCLDZCQUE2QmIsV0FBVztRQUMxQzhCLFNBQVNHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLEdBQUd0QjtRQUVuQyw4RUFBOEU7UUFDOUUsb0JBQW9CO1FBQ3BCQSwyQkFBMkJiO0lBQzdCO0lBRUEsSUFBSVksZ0NBQWdDWixXQUFXO1FBQzdDOEIsU0FBU0csSUFBSSxDQUFDQyxLQUFLLENBQUNFLFFBQVEsR0FBR3hCO1FBRS9CLG1EQUFtRDtRQUNuRCxrREFBa0Q7UUFDbERBLDhCQUE4Qlo7SUFDaEM7QUFDRjtBQUVBLCtGQUErRjtBQUMvRixJQUFJc0MsaUNBQWlDLFNBQVNBLCtCQUErQkMsYUFBYTtJQUN4RixPQUFPQSxnQkFBZ0JBLGNBQWNDLFlBQVksR0FBR0QsY0FBY0UsU0FBUyxJQUFJRixjQUFjRyxZQUFZLEdBQUc7QUFDOUc7QUFFQSxJQUFJQyxlQUFlLFNBQVNBLGFBQWFyQixLQUFLLEVBQUVpQixhQUFhO0lBQzNELElBQUlLLFVBQVV0QixNQUFNdUIsYUFBYSxDQUFDLEVBQUUsQ0FBQ0QsT0FBTyxHQUFHakM7SUFFL0MsSUFBSUcsZUFBZVEsTUFBTUMsTUFBTSxHQUFHO1FBQ2hDLE9BQU87SUFDVDtJQUVBLElBQUlnQixpQkFBaUJBLGNBQWNFLFNBQVMsS0FBSyxLQUFLRyxVQUFVLEdBQUc7UUFDakUsdUNBQXVDO1FBQ3ZDLE9BQU96QixlQUFlRztJQUN4QjtJQUVBLElBQUlnQiwrQkFBK0JDLGtCQUFrQkssVUFBVSxHQUFHO1FBQ2hFLDBDQUEwQztRQUMxQyxPQUFPekIsZUFBZUc7SUFDeEI7SUFFQUEsTUFBTXdCLGVBQWU7SUFDckIsT0FBTztBQUNUO0FBRU8sSUFBSUMsb0JBQW9CLFNBQVNBLGtCQUFrQlIsYUFBYSxFQUFFckIsT0FBTztJQUM5RSxpQ0FBaUM7SUFDakMsSUFBSSxDQUFDcUIsZUFBZTtRQUNsQixzQ0FBc0M7UUFDdENTLFFBQVFDLEtBQUssQ0FBQztRQUNkO0lBQ0Y7SUFFQSwyRUFBMkU7SUFDM0UsSUFBSXhDLE1BQU1PLElBQUksQ0FBQyxTQUFVQyxJQUFJO1FBQzNCLE9BQU9BLEtBQUtzQixhQUFhLEtBQUtBO0lBQ2hDLElBQUk7UUFDRjtJQUNGO0lBRUEsSUFBSXRCLE9BQU87UUFDVHNCLGVBQWVBO1FBQ2ZyQixTQUFTQSxXQUFXLENBQUM7SUFDdkI7SUFFQVQsUUFBUSxFQUFFLENBQUN5QyxNQUFNLENBQUM3RCxtQkFBbUJvQixRQUFRO1FBQUNRO0tBQUs7SUFFbkQsSUFBSWIsYUFBYTtRQUNmbUMsY0FBY1ksWUFBWSxHQUFHLFNBQVU3QixLQUFLO1lBQzFDLElBQUlBLE1BQU11QixhQUFhLENBQUNsRCxNQUFNLEtBQUssR0FBRztnQkFDcEMsdUJBQXVCO2dCQUN2QmdCLGlCQUFpQlcsTUFBTXVCLGFBQWEsQ0FBQyxFQUFFLENBQUNELE9BQU87WUFDakQ7UUFDRjtRQUNBTCxjQUFjYSxXQUFXLEdBQUcsU0FBVTlCLEtBQUs7WUFDekMsSUFBSUEsTUFBTXVCLGFBQWEsQ0FBQ2xELE1BQU0sS0FBSyxHQUFHO2dCQUNwQyx1QkFBdUI7Z0JBQ3ZCZ0QsYUFBYXJCLE9BQU9pQjtZQUN0QjtRQUNGO1FBRUEsSUFBSSxDQUFDN0IsdUJBQXVCO1lBQzFCb0IsU0FBUzVCLGdCQUFnQixDQUFDLGFBQWFpQixnQkFBZ0J0QixtQkFBbUI7Z0JBQUVFLFNBQVM7WUFBTSxJQUFJQztZQUMvRlUsd0JBQXdCO1FBQzFCO0lBQ0YsT0FBTztRQUNMZSxrQkFBa0JQO0lBQ3BCO0FBQ0YsRUFBRTtBQUVLLElBQUltQywwQkFBMEIsU0FBU0E7SUFDNUMsSUFBSWpELGFBQWE7UUFDZix5RUFBeUU7UUFDekVLLE1BQU02QyxPQUFPLENBQUMsU0FBVXJDLElBQUk7WUFDMUJBLEtBQUtzQixhQUFhLENBQUNZLFlBQVksR0FBRztZQUNsQ2xDLEtBQUtzQixhQUFhLENBQUNhLFdBQVcsR0FBRztRQUNuQztRQUVBLElBQUkxQyx1QkFBdUI7WUFDekJvQixTQUFTM0IsbUJBQW1CLENBQUMsYUFBYWdCLGdCQUFnQnRCLG1CQUFtQjtnQkFBRUUsU0FBUztZQUFNLElBQUlDO1lBQ2xHVSx3QkFBd0I7UUFDMUI7UUFFQSx5QkFBeUI7UUFDekJDLGlCQUFpQixDQUFDO0lBQ3BCLE9BQU87UUFDTDBCO0lBQ0Y7SUFFQTVCLFFBQVEsRUFBRTtBQUNaLEVBQUU7QUFFSyxJQUFJOEMsbUJBQW1CLFNBQVNBLGlCQUFpQmhCLGFBQWE7SUFDbkUsSUFBSSxDQUFDQSxlQUFlO1FBQ2xCLHNDQUFzQztRQUN0Q1MsUUFBUUMsS0FBSyxDQUFDO1FBQ2Q7SUFDRjtJQUVBeEMsUUFBUUEsTUFBTStDLE1BQU0sQ0FBQyxTQUFVdkMsSUFBSTtRQUNqQyxPQUFPQSxLQUFLc0IsYUFBYSxLQUFLQTtJQUNoQztJQUVBLElBQUluQyxhQUFhO1FBQ2ZtQyxjQUFjWSxZQUFZLEdBQUc7UUFDN0JaLGNBQWNhLFdBQVcsR0FBRztRQUU1QixJQUFJMUMseUJBQXlCRCxNQUFNZCxNQUFNLEtBQUssR0FBRztZQUMvQ21DLFNBQVMzQixtQkFBbUIsQ0FBQyxhQUFhZ0IsZ0JBQWdCdEIsbUJBQW1CO2dCQUFFRSxTQUFTO1lBQU0sSUFBSUM7WUFDbEdVLHdCQUF3QjtRQUMxQjtJQUNGLE9BQU8sSUFBSSxDQUFDRCxNQUFNZCxNQUFNLEVBQUU7UUFDeEIwQztJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcmFtLWxtcy1mZS8uL25vZGVfbW9kdWxlcy9ib2R5LXNjcm9sbC1sb2NrL2xpYi9ib2R5U2Nyb2xsTG9jay5lc20uanM/OGNiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuLy8gT2xkZXIgYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCBldmVudCBvcHRpb25zLCBmZWF0dXJlIGRldGVjdCBpdC5cblxuLy8gQWRvcHRlZCBhbmQgbW9kaWZpZWQgc29sdXRpb24gZnJvbSBCb2hkYW4gRGlkdWtoICgyMDE3KVxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDE1OTQ5OTcvaW9zLTEwLXNhZmFyaS1wcmV2ZW50LXNjcm9sbGluZy1iZWhpbmQtYS1maXhlZC1vdmVybGF5LWFuZC1tYWludGFpbi1zY3JvbGwtcG9zaVxuXG52YXIgaGFzUGFzc2l2ZUV2ZW50cyA9IGZhbHNlO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBwYXNzaXZlVGVzdE9wdGlvbnMgPSB7XG4gICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICBoYXNQYXNzaXZlRXZlbnRzID0gdHJ1ZTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBwYXNzaXZlVGVzdE9wdGlvbnMpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBwYXNzaXZlVGVzdE9wdGlvbnMpO1xufVxuXG52YXIgaXNJb3NEZXZpY2UgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0gJiYgKC9pUChhZHxob25lfG9kKS8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtKSB8fCB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIHdpbmRvdy5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxKTtcblxuXG52YXIgbG9ja3MgPSBbXTtcbnZhciBkb2N1bWVudExpc3RlbmVyQWRkZWQgPSBmYWxzZTtcbnZhciBpbml0aWFsQ2xpZW50WSA9IC0xO1xudmFyIHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyA9IHZvaWQgMDtcbnZhciBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgPSB2b2lkIDA7XG5cbi8vIHJldHVybnMgdHJ1ZSBpZiBgZWxgIHNob3VsZCBiZSBhbGxvd2VkIHRvIHJlY2VpdmUgdG91Y2htb3ZlIGV2ZW50cy5cbnZhciBhbGxvd1RvdWNoTW92ZSA9IGZ1bmN0aW9uIGFsbG93VG91Y2hNb3ZlKGVsKSB7XG4gIHJldHVybiBsb2Nrcy5zb21lKGZ1bmN0aW9uIChsb2NrKSB7XG4gICAgaWYgKGxvY2sub3B0aW9ucy5hbGxvd1RvdWNoTW92ZSAmJiBsb2NrLm9wdGlvbnMuYWxsb3dUb3VjaE1vdmUoZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufTtcblxudmFyIHByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gcHJldmVudERlZmF1bHQocmF3RXZlbnQpIHtcbiAgdmFyIGUgPSByYXdFdmVudCB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgLy8gRm9yIHRoZSBjYXNlIHdoZXJlYnkgY29uc3VtZXJzIGFkZHMgYSB0b3VjaG1vdmUgZXZlbnQgbGlzdGVuZXIgdG8gZG9jdW1lbnQuXG4gIC8vIFJlY2FsbCB0aGF0IHdlIGRvIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gIC8vIGluIGRpc2FibGVCb2R5U2Nyb2xsIC0gc28gaWYgd2UgcHJvdmlkZSB0aGlzIG9wcG9ydHVuaXR5IHRvIGFsbG93VG91Y2hNb3ZlLCB0aGVuXG4gIC8vIHRoZSB0b3VjaG1vdmUgZXZlbnQgb24gZG9jdW1lbnQgd2lsbCBicmVhay5cbiAgaWYgKGFsbG93VG91Y2hNb3ZlKGUudGFyZ2V0KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gRG8gbm90IHByZXZlbnQgaWYgdGhlIGV2ZW50IGhhcyBtb3JlIHRoYW4gb25lIHRvdWNoICh1c3VhbGx5IG1lYW5pbmcgdGhpcyBpcyBhIG11bHRpIHRvdWNoIGdlc3R1cmUgbGlrZSBwaW5jaCB0byB6b29tKS5cbiAgaWYgKGUudG91Y2hlcy5sZW5ndGggPiAxKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBzZXRPdmVyZmxvd0hpZGRlbiA9IGZ1bmN0aW9uIHNldE92ZXJmbG93SGlkZGVuKG9wdGlvbnMpIHtcbiAgLy8gSWYgcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0IGlzIGFscmVhZHkgc2V0LCBkb24ndCBzZXQgaXQgYWdhaW4uXG4gIGlmIChwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBfcmVzZXJ2ZVNjcm9sbEJhckdhcCA9ICEhb3B0aW9ucyAmJiBvcHRpb25zLnJlc2VydmVTY3JvbGxCYXJHYXAgPT09IHRydWU7XG4gICAgdmFyIHNjcm9sbEJhckdhcCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgaWYgKF9yZXNlcnZlU2Nyb2xsQmFyR2FwICYmIHNjcm9sbEJhckdhcCA+IDApIHtcbiAgICAgIHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0O1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzY3JvbGxCYXJHYXAgKyAncHgnO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyBpcyBhbHJlYWR5IHNldCwgZG9uJ3Qgc2V0IGl0IGFnYWluLlxuICBpZiAocHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgPSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93O1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgfVxufTtcblxudmFyIHJlc3RvcmVPdmVyZmxvd1NldHRpbmcgPSBmdW5jdGlvbiByZXN0b3JlT3ZlcmZsb3dTZXR0aW5nKCkge1xuICBpZiAocHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHByZXZpb3VzQm9keVBhZGRpbmdSaWdodDtcblxuICAgIC8vIFJlc3RvcmUgcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0IHRvIHVuZGVmaW5lZCBzbyBzZXRPdmVyZmxvd0hpZGRlbiBrbm93cyBpdFxuICAgIC8vIGNhbiBiZSBzZXQgYWdhaW4uXG4gICAgcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZztcblxuICAgIC8vIFJlc3RvcmUgcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nIHRvIHVuZGVmaW5lZFxuICAgIC8vIHNvIHNldE92ZXJmbG93SGlkZGVuIGtub3dzIGl0IGNhbiBiZSBzZXQgYWdhaW4uXG4gICAgcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nID0gdW5kZWZpbmVkO1xuICB9XG59O1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9zY3JvbGxIZWlnaHQjUHJvYmxlbXNfYW5kX3NvbHV0aW9uc1xudmFyIGlzVGFyZ2V0RWxlbWVudFRvdGFsbHlTY3JvbGxlZCA9IGZ1bmN0aW9uIGlzVGFyZ2V0RWxlbWVudFRvdGFsbHlTY3JvbGxlZCh0YXJnZXRFbGVtZW50KSB7XG4gIHJldHVybiB0YXJnZXRFbGVtZW50ID8gdGFyZ2V0RWxlbWVudC5zY3JvbGxIZWlnaHQgLSB0YXJnZXRFbGVtZW50LnNjcm9sbFRvcCA8PSB0YXJnZXRFbGVtZW50LmNsaWVudEhlaWdodCA6IGZhbHNlO1xufTtcblxudmFyIGhhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uIGhhbmRsZVNjcm9sbChldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICB2YXIgY2xpZW50WSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSAtIGluaXRpYWxDbGllbnRZO1xuXG4gIGlmIChhbGxvd1RvdWNoTW92ZShldmVudC50YXJnZXQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRhcmdldEVsZW1lbnQgJiYgdGFyZ2V0RWxlbWVudC5zY3JvbGxUb3AgPT09IDAgJiYgY2xpZW50WSA+IDApIHtcbiAgICAvLyBlbGVtZW50IGlzIGF0IHRoZSB0b3Agb2YgaXRzIHNjcm9sbC5cbiAgICByZXR1cm4gcHJldmVudERlZmF1bHQoZXZlbnQpO1xuICB9XG5cbiAgaWYgKGlzVGFyZ2V0RWxlbWVudFRvdGFsbHlTY3JvbGxlZCh0YXJnZXRFbGVtZW50KSAmJiBjbGllbnRZIDwgMCkge1xuICAgIC8vIGVsZW1lbnQgaXMgYXQgdGhlIGJvdHRvbSBvZiBpdHMgc2Nyb2xsLlxuICAgIHJldHVybiBwcmV2ZW50RGVmYXVsdChldmVudCk7XG4gIH1cblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgdmFyIGRpc2FibGVCb2R5U2Nyb2xsID0gZnVuY3Rpb24gZGlzYWJsZUJvZHlTY3JvbGwodGFyZ2V0RWxlbWVudCwgb3B0aW9ucykge1xuICAvLyB0YXJnZXRFbGVtZW50IG11c3QgYmUgcHJvdmlkZWRcbiAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdkaXNhYmxlQm9keVNjcm9sbCB1bnN1Y2Nlc3NmdWwgLSB0YXJnZXRFbGVtZW50IG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjYWxsaW5nIGRpc2FibGVCb2R5U2Nyb2xsIG9uIElPUyBkZXZpY2VzLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGRpc2FibGVCb2R5U2Nyb2xsIG11c3Qgbm90IGhhdmUgYmVlbiBjYWxsZWQgb24gdGhpcyB0YXJnZXRFbGVtZW50IGJlZm9yZVxuICBpZiAobG9ja3Muc29tZShmdW5jdGlvbiAobG9jaykge1xuICAgIHJldHVybiBsb2NrLnRhcmdldEVsZW1lbnQgPT09IHRhcmdldEVsZW1lbnQ7XG4gIH0pKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGxvY2sgPSB7XG4gICAgdGFyZ2V0RWxlbWVudDogdGFyZ2V0RWxlbWVudCxcbiAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9XG4gIH07XG5cbiAgbG9ja3MgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGxvY2tzKSwgW2xvY2tdKTtcblxuICBpZiAoaXNJb3NEZXZpY2UpIHtcbiAgICB0YXJnZXRFbGVtZW50Lm9udG91Y2hzdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIGRldGVjdCBzaW5nbGUgdG91Y2guXG4gICAgICAgIGluaXRpYWxDbGllbnRZID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgfVxuICAgIH07XG4gICAgdGFyZ2V0RWxlbWVudC5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIGRldGVjdCBzaW5nbGUgdG91Y2guXG4gICAgICAgIGhhbmRsZVNjcm9sbChldmVudCwgdGFyZ2V0RWxlbWVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghZG9jdW1lbnRMaXN0ZW5lckFkZGVkKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgaGFzUGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IHVuZGVmaW5lZCk7XG4gICAgICBkb2N1bWVudExpc3RlbmVyQWRkZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZXRPdmVyZmxvd0hpZGRlbihvcHRpb25zKTtcbiAgfVxufTtcblxuZXhwb3J0IHZhciBjbGVhckFsbEJvZHlTY3JvbGxMb2NrcyA9IGZ1bmN0aW9uIGNsZWFyQWxsQm9keVNjcm9sbExvY2tzKCkge1xuICBpZiAoaXNJb3NEZXZpY2UpIHtcbiAgICAvLyBDbGVhciBhbGwgbG9ja3Mgb250b3VjaHN0YXJ0L29udG91Y2htb3ZlIGhhbmRsZXJzLCBhbmQgdGhlIHJlZmVyZW5jZXMuXG4gICAgbG9ja3MuZm9yRWFjaChmdW5jdGlvbiAobG9jaykge1xuICAgICAgbG9jay50YXJnZXRFbGVtZW50Lm9udG91Y2hzdGFydCA9IG51bGw7XG4gICAgICBsb2NrLnRhcmdldEVsZW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgaWYgKGRvY3VtZW50TGlzdGVuZXJBZGRlZCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQsIGhhc1Bhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiB1bmRlZmluZWQpO1xuICAgICAgZG9jdW1lbnRMaXN0ZW5lckFkZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgaW5pdGlhbCBjbGllbnRZLlxuICAgIGluaXRpYWxDbGllbnRZID0gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmVzdG9yZU92ZXJmbG93U2V0dGluZygpO1xuICB9XG5cbiAgbG9ja3MgPSBbXTtcbn07XG5cbmV4cG9ydCB2YXIgZW5hYmxlQm9keVNjcm9sbCA9IGZ1bmN0aW9uIGVuYWJsZUJvZHlTY3JvbGwodGFyZ2V0RWxlbWVudCkge1xuICBpZiAoIXRhcmdldEVsZW1lbnQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ2VuYWJsZUJvZHlTY3JvbGwgdW5zdWNjZXNzZnVsIC0gdGFyZ2V0RWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gY2FsbGluZyBlbmFibGVCb2R5U2Nyb2xsIG9uIElPUyBkZXZpY2VzLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxvY2tzID0gbG9ja3MuZmlsdGVyKGZ1bmN0aW9uIChsb2NrKSB7XG4gICAgcmV0dXJuIGxvY2sudGFyZ2V0RWxlbWVudCAhPT0gdGFyZ2V0RWxlbWVudDtcbiAgfSk7XG5cbiAgaWYgKGlzSW9zRGV2aWNlKSB7XG4gICAgdGFyZ2V0RWxlbWVudC5vbnRvdWNoc3RhcnQgPSBudWxsO1xuICAgIHRhcmdldEVsZW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xuXG4gICAgaWYgKGRvY3VtZW50TGlzdGVuZXJBZGRlZCAmJiBsb2Nrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCBoYXNQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogdW5kZWZpbmVkKTtcbiAgICAgIGRvY3VtZW50TGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmICghbG9ja3MubGVuZ3RoKSB7XG4gICAgcmVzdG9yZU92ZXJmbG93U2V0dGluZygpO1xuICB9XG59O1xuXG4iXSwibmFtZXMiOlsiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImFycjIiLCJsZW5ndGgiLCJmcm9tIiwiaGFzUGFzc2l2ZUV2ZW50cyIsInBhc3NpdmVUZXN0T3B0aW9ucyIsInBhc3NpdmUiLCJ1bmRlZmluZWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzSW9zRGV2aWNlIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJ0ZXN0IiwibWF4VG91Y2hQb2ludHMiLCJsb2NrcyIsImRvY3VtZW50TGlzdGVuZXJBZGRlZCIsImluaXRpYWxDbGllbnRZIiwicHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nIiwicHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0IiwiYWxsb3dUb3VjaE1vdmUiLCJlbCIsInNvbWUiLCJsb2NrIiwib3B0aW9ucyIsInByZXZlbnREZWZhdWx0IiwicmF3RXZlbnQiLCJlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ0b3VjaGVzIiwic2V0T3ZlcmZsb3dIaWRkZW4iLCJfcmVzZXJ2ZVNjcm9sbEJhckdhcCIsInJlc2VydmVTY3JvbGxCYXJHYXAiLCJzY3JvbGxCYXJHYXAiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvZHkiLCJzdHlsZSIsInBhZGRpbmdSaWdodCIsIm92ZXJmbG93IiwicmVzdG9yZU92ZXJmbG93U2V0dGluZyIsImlzVGFyZ2V0RWxlbWVudFRvdGFsbHlTY3JvbGxlZCIsInRhcmdldEVsZW1lbnQiLCJzY3JvbGxIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGllbnRIZWlnaHQiLCJoYW5kbGVTY3JvbGwiLCJjbGllbnRZIiwidGFyZ2V0VG91Y2hlcyIsInN0b3BQcm9wYWdhdGlvbiIsImRpc2FibGVCb2R5U2Nyb2xsIiwiY29uc29sZSIsImVycm9yIiwiY29uY2F0Iiwib250b3VjaHN0YXJ0Iiwib250b3VjaG1vdmUiLCJjbGVhckFsbEJvZHlTY3JvbGxMb2NrcyIsImZvckVhY2giLCJlbmFibGVCb2R5U2Nyb2xsIiwiZmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js\n");

/***/ })

};
;