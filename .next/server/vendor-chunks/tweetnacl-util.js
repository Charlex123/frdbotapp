/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tweetnacl-util";
exports.ids = ["vendor-chunks/tweetnacl-util"];
exports.modules = {

/***/ "(ssr)/./node_modules/tweetnacl-util/nacl-util.js":
/*!**************************************************!*\
  !*** ./node_modules/tweetnacl-util/nacl-util.js ***!
  \**************************************************/
/***/ (function(module) {

eval("// Written in 2014-2016 by Dmitry Chestnykh and Devi Mandiri.\n// Public domain.\n(function(root, f) {\n  'use strict';\n  if ( true && module.exports) module.exports = f();\n  else if (root.nacl) root.nacl.util = f();\n  else {\n    root.nacl = {};\n    root.nacl.util = f();\n  }\n}(this, function() {\n  'use strict';\n\n  var util = {};\n\n  function validateBase64(s) {\n    if (!(/^(?:[A-Za-z0-9+\\/]{2}[A-Za-z0-9+\\/]{2})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+\\/]{3}=)?$/.test(s))) {\n      throw new TypeError('invalid encoding');\n    }\n  }\n\n  util.decodeUTF8 = function(s) {\n    if (typeof s !== 'string') throw new TypeError('expected string');\n    var i, d = unescape(encodeURIComponent(s)), b = new Uint8Array(d.length);\n    for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);\n    return b;\n  };\n\n  util.encodeUTF8 = function(arr) {\n    var i, s = [];\n    for (i = 0; i < arr.length; i++) s.push(String.fromCharCode(arr[i]));\n    return decodeURIComponent(escape(s.join('')));\n  };\n\n  if (typeof atob === 'undefined') {\n    // Node.js\n\n    if (typeof Buffer.from !== 'undefined') {\n       // Node v6 and later\n      util.encodeBase64 = function (arr) { // v6 and later\n          return Buffer.from(arr).toString('base64');\n      };\n\n      util.decodeBase64 = function (s) {\n        validateBase64(s);\n        return new Uint8Array(Array.prototype.slice.call(Buffer.from(s, 'base64'), 0));\n      };\n\n    } else {\n      // Node earlier than v6\n      util.encodeBase64 = function (arr) { // v6 and later\n        return (new Buffer(arr)).toString('base64');\n      };\n\n      util.decodeBase64 = function(s) {\n        validateBase64(s);\n        return new Uint8Array(Array.prototype.slice.call(new Buffer(s, 'base64'), 0));\n      };\n    }\n\n  } else {\n    // Browsers\n\n    util.encodeBase64 = function(arr) {\n      var i, s = [], len = arr.length;\n      for (i = 0; i < len; i++) s.push(String.fromCharCode(arr[i]));\n      return btoa(s.join(''));\n    };\n\n    util.decodeBase64 = function(s) {\n      validateBase64(s);\n      var i, d = atob(s), b = new Uint8Array(d.length);\n      for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);\n      return b;\n    };\n\n  }\n\n  return util;\n\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHdlZXRuYWNsLXV0aWwvbmFjbC11dGlsLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUE2QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0EsOEJBQThCLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFO0FBQzNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsY0FBYztBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJkYm90YXBwLy4vbm9kZV9tb2R1bGVzL3R3ZWV0bmFjbC11dGlsL25hY2wtdXRpbC5qcz80YjQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFdyaXR0ZW4gaW4gMjAxNC0yMDE2IGJ5IERtaXRyeSBDaGVzdG55a2ggYW5kIERldmkgTWFuZGlyaS5cbi8vIFB1YmxpYyBkb21haW4uXG4oZnVuY3Rpb24ocm9vdCwgZikge1xuICAndXNlIHN0cmljdCc7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBmKCk7XG4gIGVsc2UgaWYgKHJvb3QubmFjbCkgcm9vdC5uYWNsLnV0aWwgPSBmKCk7XG4gIGVsc2Uge1xuICAgIHJvb3QubmFjbCA9IHt9O1xuICAgIHJvb3QubmFjbC51dGlsID0gZigpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIHV0aWwgPSB7fTtcblxuICBmdW5jdGlvbiB2YWxpZGF0ZUJhc2U2NChzKSB7XG4gICAgaWYgKCEoL14oPzpbQS1aYS16MC05K1xcL117Mn1bQS1aYS16MC05K1xcL117Mn0pKig/OltBLVphLXowLTkrXFwvXXsyfT09fFtBLVphLXowLTkrXFwvXXszfT0pPyQvLnRlc3QocykpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIGVuY29kaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgdXRpbC5kZWNvZGVVVEY4ID0gZnVuY3Rpb24ocykge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIHN0cmluZycpO1xuICAgIHZhciBpLCBkID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHMpKSwgYiA9IG5ldyBVaW50OEFycmF5KGQubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgZC5sZW5ndGg7IGkrKykgYltpXSA9IGQuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYjtcbiAgfTtcblxuICB1dGlsLmVuY29kZVVURjggPSBmdW5jdGlvbihhcnIpIHtcbiAgICB2YXIgaSwgcyA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGFycltpXSkpO1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKHMuam9pbignJykpKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIGF0b2IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gTm9kZS5qc1xuXG4gICAgaWYgKHR5cGVvZiBCdWZmZXIuZnJvbSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAvLyBOb2RlIHY2IGFuZCBsYXRlclxuICAgICAgdXRpbC5lbmNvZGVCYXNlNjQgPSBmdW5jdGlvbiAoYXJyKSB7IC8vIHY2IGFuZCBsYXRlclxuICAgICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShhcnIpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgIH07XG5cbiAgICAgIHV0aWwuZGVjb2RlQmFzZTY0ID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgdmFsaWRhdGVCYXNlNjQocyk7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChCdWZmZXIuZnJvbShzLCAnYmFzZTY0JyksIDApKTtcbiAgICAgIH07XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm9kZSBlYXJsaWVyIHRoYW4gdjZcbiAgICAgIHV0aWwuZW5jb2RlQmFzZTY0ID0gZnVuY3Rpb24gKGFycikgeyAvLyB2NiBhbmQgbGF0ZXJcbiAgICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKGFycikpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgIH07XG5cbiAgICAgIHV0aWwuZGVjb2RlQmFzZTY0ID0gZnVuY3Rpb24ocykge1xuICAgICAgICB2YWxpZGF0ZUJhc2U2NChzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5ldyBCdWZmZXIocywgJ2Jhc2U2NCcpLCAwKSk7XG4gICAgICB9O1xuICAgIH1cblxuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXJzXG5cbiAgICB1dGlsLmVuY29kZUJhc2U2NCA9IGZ1bmN0aW9uKGFycikge1xuICAgICAgdmFyIGksIHMgPSBbXSwgbGVuID0gYXJyLmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykgcy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYXJyW2ldKSk7XG4gICAgICByZXR1cm4gYnRvYShzLmpvaW4oJycpKTtcbiAgICB9O1xuXG4gICAgdXRpbC5kZWNvZGVCYXNlNjQgPSBmdW5jdGlvbihzKSB7XG4gICAgICB2YWxpZGF0ZUJhc2U2NChzKTtcbiAgICAgIHZhciBpLCBkID0gYXRvYihzKSwgYiA9IG5ldyBVaW50OEFycmF5KGQubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBkLmxlbmd0aDsgaSsrKSBiW2ldID0gZC5jaGFyQ29kZUF0KGkpO1xuICAgICAgcmV0dXJuIGI7XG4gICAgfTtcblxuICB9XG5cbiAgcmV0dXJuIHV0aWw7XG5cbn0pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tweetnacl-util/nacl-util.js\n");

/***/ })

};
;