(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rt_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rt-wasm */ \"./node_modules/rt-wasm/rt_wasm.js\");\n/* harmony import */ var rt_wasm_rt_wasm_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rt-wasm/rt_wasm_bg */ \"./node_modules/rt-wasm/rt_wasm_bg.wasm\");\n\n\n\nlet scene = rt_wasm__WEBPACK_IMPORTED_MODULE_0__[\"JsScene\"].new();\n\n\nlet pixels_array = new Uint8ClampedArray(rt_wasm_rt_wasm_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, scene.pixels(), scene.width() * scene.height() * 4);\nlet image_data = new ImageData(pixels_array, scene.width(), scene.height());\n\nlet canvas = document.getElementById(\"raytracing\");\ncanvas.width = scene.width();\ncanvas.height = scene.height();\n\nlet ctx = canvas.getContext(\"2d\");\n\nlet render_loop = false;\n\n\nfunction toggleRender(e) {\n    render_loop = !render_loop;\n    if (render_loop) {\n        drawRender();\n    } else {\n        requestAnimationFrame(drawPaused);\n    }\n}\n\ncanvas.addEventListener(\"click\", toggleRender);\ncanvas.addEventListener(\"touchstart\", toggleRender);\n\nconst drawRender = () => {\n    const start = performance.now();\n    scene.render();\n    console.log(`rendering took ${performance.now() - start} ms`);\n\n    ctx.putImageData(image_data, 0, 0);\n\n    scene.move_camera(0, 0, 1.0);\n\n    if (render_loop)\n        requestAnimationFrame(drawRender);\n}\n\nconst drawPaused = () => {\n    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';\n    ctx.globalCompositeOperation = 'multiply';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    ctx.restore();\n\n    ctx.globalCompositeOperation = 'source-over';\n    ctx.fillStyle = 'white';\n    ctx.font = 'bold 24px Arial';\n    ctx.textAlign = 'center';\n    ctx.fillText('Click to render', canvas.width / 2, canvas.height / 2);\n}\n\ndrawRender();\ndrawPaused();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);