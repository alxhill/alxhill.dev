(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/rt_wasm.js":
/*!*************************!*\
  !*** ../pkg/rt_wasm.js ***!
  \*************************/
/*! exports provided: __wbg_set_wasm, JsScene, Rgba, __wbg_new_abda76e883ba8a5f, __wbg_stack_658279fe44541cf6, __wbg_error_f851667af71bcfc6, __wbindgen_object_drop_ref, __wbg_randomFillSync_6894564c2c334c42, __wbg_getRandomValues_805f1c3d65988a5a, __wbg_crypto_e1d53a1d73fb10b8, __wbindgen_is_object, __wbg_process_038c26bf42b093f8, __wbg_versions_ab37218d2f0b24a8, __wbg_node_080f4b19d15bc1fe, __wbindgen_is_string, __wbg_msCrypto_6e7d3e1f92610cbb, __wbg_require_78a3dcfbdba9cbce, __wbindgen_is_function, __wbindgen_string_new, __wbg_newnoargs_2b8b6bd7753c76ba, __wbg_call_95d1ea488d03e4e8, __wbindgen_object_clone_ref, __wbg_self_e7c1f827057f6584, __wbg_window_a09ec664e14b1b81, __wbg_globalThis_87cbb8506fecf3a9, __wbg_global_c85a9259e621f3db, __wbindgen_is_undefined, __wbg_call_9495de66fdbe016b, __wbg_buffer_cf65c07de34b9a08, __wbg_new_537b7341ce90bb31, __wbg_set_17499e8aa4003ebd, __wbg_length_27a2afe8ab42b09f, __wbg_newwithlength_b56c882b57805732, __wbg_subarray_7526649b91a252a6, __wbindgen_throw, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rt_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rt_wasm_bg.wasm */ \"../pkg/rt_wasm_bg.wasm\");\n/* harmony import */ var _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rt_wasm_bg.js */ \"../pkg/rt_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"JsScene\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"JsScene\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Rgba\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Rgba\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_abda76e883ba8a5f\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_abda76e883ba8a5f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_658279fe44541cf6\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_stack_658279fe44541cf6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_f851667af71bcfc6\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_error_f851667af71bcfc6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_6894564c2c334c42\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_randomFillSync_6894564c2c334c42\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_805f1c3d65988a5a\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getRandomValues_805f1c3d65988a5a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_e1d53a1d73fb10b8\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_crypto_e1d53a1d73fb10b8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_object\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_object\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_process_038c26bf42b093f8\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_process_038c26bf42b093f8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_versions_ab37218d2f0b24a8\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_versions_ab37218d2f0b24a8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_node_080f4b19d15bc1fe\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_node_080f4b19d15bc1fe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_string\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_msCrypto_6e7d3e1f92610cbb\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_msCrypto_6e7d3e1f92610cbb\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_78a3dcfbdba9cbce\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_require_78a3dcfbdba9cbce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_function\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_function\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_2b8b6bd7753c76ba\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newnoargs_2b8b6bd7753c76ba\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_95d1ea488d03e4e8\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_95d1ea488d03e4e8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_clone_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_e7c1f827057f6584\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_e7c1f827057f6584\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_a09ec664e14b1b81\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_window_a09ec664e14b1b81\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_87cbb8506fecf3a9\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_globalThis_87cbb8506fecf3a9\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_c85a9259e621f3db\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_global_c85a9259e621f3db\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_9495de66fdbe016b\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_9495de66fdbe016b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_cf65c07de34b9a08\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_buffer_cf65c07de34b9a08\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_537b7341ce90bb31\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_537b7341ce90bb31\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_17499e8aa4003ebd\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_17499e8aa4003ebd\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_27a2afe8ab42b09f\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_length_27a2afe8ab42b09f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithlength_b56c882b57805732\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newwithlength_b56c882b57805732\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_subarray_7526649b91a252a6\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_subarray_7526649b91a252a6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return _rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_memory\"]; });\n\n\n\nObject(_rt_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"])(_rt_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///../pkg/rt_wasm.js?");

/***/ }),

/***/ "../pkg/rt_wasm_bg.js":
/*!****************************!*\
  !*** ../pkg/rt_wasm_bg.js ***!
  \****************************/
/*! exports provided: __wbg_set_wasm, JsScene, Rgba, __wbg_new_abda76e883ba8a5f, __wbg_stack_658279fe44541cf6, __wbg_error_f851667af71bcfc6, __wbindgen_object_drop_ref, __wbg_randomFillSync_6894564c2c334c42, __wbg_getRandomValues_805f1c3d65988a5a, __wbg_crypto_e1d53a1d73fb10b8, __wbindgen_is_object, __wbg_process_038c26bf42b093f8, __wbg_versions_ab37218d2f0b24a8, __wbg_node_080f4b19d15bc1fe, __wbindgen_is_string, __wbg_msCrypto_6e7d3e1f92610cbb, __wbg_require_78a3dcfbdba9cbce, __wbindgen_is_function, __wbindgen_string_new, __wbg_newnoargs_2b8b6bd7753c76ba, __wbg_call_95d1ea488d03e4e8, __wbindgen_object_clone_ref, __wbg_self_e7c1f827057f6584, __wbg_window_a09ec664e14b1b81, __wbg_globalThis_87cbb8506fecf3a9, __wbg_global_c85a9259e621f3db, __wbindgen_is_undefined, __wbg_call_9495de66fdbe016b, __wbg_buffer_cf65c07de34b9a08, __wbg_new_537b7341ce90bb31, __wbg_set_17499e8aa4003ebd, __wbg_length_27a2afe8ab42b09f, __wbg_newwithlength_b56c882b57805732, __wbg_subarray_7526649b91a252a6, __wbindgen_throw, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return __wbg_set_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JsScene\", function() { return JsScene; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Rgba\", function() { return Rgba; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_abda76e883ba8a5f\", function() { return __wbg_new_abda76e883ba8a5f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_658279fe44541cf6\", function() { return __wbg_stack_658279fe44541cf6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_f851667af71bcfc6\", function() { return __wbg_error_f851667af71bcfc6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_6894564c2c334c42\", function() { return __wbg_randomFillSync_6894564c2c334c42; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_805f1c3d65988a5a\", function() { return __wbg_getRandomValues_805f1c3d65988a5a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_e1d53a1d73fb10b8\", function() { return __wbg_crypto_e1d53a1d73fb10b8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_object\", function() { return __wbindgen_is_object; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_process_038c26bf42b093f8\", function() { return __wbg_process_038c26bf42b093f8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_versions_ab37218d2f0b24a8\", function() { return __wbg_versions_ab37218d2f0b24a8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_node_080f4b19d15bc1fe\", function() { return __wbg_node_080f4b19d15bc1fe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_string\", function() { return __wbindgen_is_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_msCrypto_6e7d3e1f92610cbb\", function() { return __wbg_msCrypto_6e7d3e1f92610cbb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_78a3dcfbdba9cbce\", function() { return __wbg_require_78a3dcfbdba9cbce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_function\", function() { return __wbindgen_is_function; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_2b8b6bd7753c76ba\", function() { return __wbg_newnoargs_2b8b6bd7753c76ba; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_95d1ea488d03e4e8\", function() { return __wbg_call_95d1ea488d03e4e8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_e7c1f827057f6584\", function() { return __wbg_self_e7c1f827057f6584; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_a09ec664e14b1b81\", function() { return __wbg_window_a09ec664e14b1b81; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_87cbb8506fecf3a9\", function() { return __wbg_globalThis_87cbb8506fecf3a9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_c85a9259e621f3db\", function() { return __wbg_global_c85a9259e621f3db; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_9495de66fdbe016b\", function() { return __wbg_call_9495de66fdbe016b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_cf65c07de34b9a08\", function() { return __wbg_buffer_cf65c07de34b9a08; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_537b7341ce90bb31\", function() { return __wbg_new_537b7341ce90bb31; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_17499e8aa4003ebd\", function() { return __wbg_set_17499e8aa4003ebd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_27a2afe8ab42b09f\", function() { return __wbg_length_27a2afe8ab42b09f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithlength_b56c882b57805732\", function() { return __wbg_newwithlength_b56c882b57805732; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_subarray_7526649b91a252a6\", function() { return __wbg_subarray_7526649b91a252a6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst heap = new Array(128).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 132) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        wasm.__wbindgen_exn_store(addHeapObject(e));\n    }\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n*/\nclass JsScene {\n\n    static __wrap(ptr) {\n        const obj = Object.create(JsScene.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_jsscene_free(ptr);\n    }\n    /**\n    * @returns {JsScene}\n    */\n    static new() {\n        const ret = wasm.jsscene_new();\n        return JsScene.__wrap(ret);\n    }\n    /**\n    */\n    render() {\n        wasm.jsscene_render(this.ptr);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} z\n    */\n    move_camera(x, y, z) {\n        wasm.jsscene_move_camera(this.ptr, x, y, z);\n    }\n    /**\n    * @returns {number}\n    */\n    pixels() {\n        const ret = wasm.jsscene_pixels(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = wasm.jsscene_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = wasm.jsscene_height(this.ptr);\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass Rgba {\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_rgba_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get 0() {\n        const ret = wasm.__wbg_get_rgba_0(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set 0(arg0) {\n        wasm.__wbg_set_rgba_0(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get 1() {\n        const ret = wasm.__wbg_get_rgba_1(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set 1(arg0) {\n        wasm.__wbg_set_rgba_1(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get 2() {\n        const ret = wasm.__wbg_get_rgba_2(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set 2(arg0) {\n        wasm.__wbg_set_rgba_2(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get 3() {\n        const ret = wasm.__wbg_get_rgba_3(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set 3(arg0) {\n        wasm.__wbg_set_rgba_3(this.ptr, arg0);\n    }\n}\n\nfunction __wbg_new_abda76e883ba8a5f() {\n    const ret = new Error();\n    return addHeapObject(ret);\n};\n\nfunction __wbg_stack_658279fe44541cf6(arg0, arg1) {\n    const ret = getObject(arg1).stack;\n    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbg_error_f851667af71bcfc6(arg0, arg1) {\n    try {\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        wasm.__wbindgen_free(arg0, arg1);\n    }\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_randomFillSync_6894564c2c334c42() { return handleError(function (arg0, arg1, arg2) {\n    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));\n}, arguments) };\n\nfunction __wbg_getRandomValues_805f1c3d65988a5a() { return handleError(function (arg0, arg1) {\n    getObject(arg0).getRandomValues(getObject(arg1));\n}, arguments) };\n\nfunction __wbg_crypto_e1d53a1d73fb10b8(arg0) {\n    const ret = getObject(arg0).crypto;\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_is_object(arg0) {\n    const val = getObject(arg0);\n    const ret = typeof(val) === 'object' && val !== null;\n    return ret;\n};\n\nfunction __wbg_process_038c26bf42b093f8(arg0) {\n    const ret = getObject(arg0).process;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_versions_ab37218d2f0b24a8(arg0) {\n    const ret = getObject(arg0).versions;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_node_080f4b19d15bc1fe(arg0) {\n    const ret = getObject(arg0).node;\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_is_string(arg0) {\n    const ret = typeof(getObject(arg0)) === 'string';\n    return ret;\n};\n\nfunction __wbg_msCrypto_6e7d3e1f92610cbb(arg0) {\n    const ret = getObject(arg0).msCrypto;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_require_78a3dcfbdba9cbce() { return handleError(function () {\n    const ret = module.require;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_is_function(arg0) {\n    const ret = typeof(getObject(arg0)) === 'function';\n    return ret;\n};\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    const ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_newnoargs_2b8b6bd7753c76ba(arg0, arg1) {\n    const ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_call_95d1ea488d03e4e8() { return handleError(function (arg0, arg1) {\n    const ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_object_clone_ref(arg0) {\n    const ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_self_e7c1f827057f6584() { return handleError(function () {\n    const ret = self.self;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_window_a09ec664e14b1b81() { return handleError(function () {\n    const ret = window.window;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_globalThis_87cbb8506fecf3a9() { return handleError(function () {\n    const ret = globalThis.globalThis;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_global_c85a9259e621f3db() { return handleError(function () {\n    const ret = global.global;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_is_undefined(arg0) {\n    const ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nfunction __wbg_call_9495de66fdbe016b() { return handleError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_buffer_cf65c07de34b9a08(arg0) {\n    const ret = getObject(arg0).buffer;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_new_537b7341ce90bb31(arg0) {\n    const ret = new Uint8Array(getObject(arg0));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_set_17499e8aa4003ebd(arg0, arg1, arg2) {\n    getObject(arg0).set(getObject(arg1), arg2 >>> 0);\n};\n\nfunction __wbg_length_27a2afe8ab42b09f(arg0) {\n    const ret = getObject(arg0).length;\n    return ret;\n};\n\nfunction __wbg_newwithlength_b56c882b57805732(arg0) {\n    const ret = new Uint8Array(arg0 >>> 0);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_subarray_7526649b91a252a6(arg0, arg1, arg2) {\n    const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_memory() {\n    const ret = wasm.memory;\n    return addHeapObject(ret);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../html/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! ./../html/node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///../pkg/rt_wasm_bg.js?");

/***/ }),

/***/ "../pkg/rt_wasm_bg.wasm":
/*!******************************!*\
  !*** ../pkg/rt_wasm_bg.wasm ***!
  \******************************/
/*! exports provided: memory, __wbg_rgba_free, __wbg_get_rgba_0, __wbg_set_rgba_0, __wbg_get_rgba_1, __wbg_set_rgba_1, __wbg_get_rgba_2, __wbg_set_rgba_2, __wbg_get_rgba_3, __wbg_set_rgba_3, __wbg_jsscene_free, jsscene_new, jsscene_render, jsscene_move_camera, jsscene_pixels, jsscene_width, jsscene_height, __wbindgen_free, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./rt_wasm_bg.js */ \"../pkg/rt_wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/rt_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rt_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rt-wasm */ \"../pkg/rt_wasm.js\");\n/* harmony import */ var rt_wasm_rt_wasm_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rt-wasm/rt_wasm_bg */ \"../pkg/rt_wasm_bg.wasm\");\n\n\n\nlet scene = rt_wasm__WEBPACK_IMPORTED_MODULE_0__[\"JsScene\"].new();\n\nlet length = scene.width() * scene.height() * 4;\nconsole.log(length);\nlet pixels_array = new Uint8ClampedArray(rt_wasm_rt_wasm_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, scene.pixels(), length);\nlet image_data = new ImageData(pixels_array, scene.width(), scene.height());\n\nlet canvas = document.getElementById(\"raytracing\");\ncanvas.width = scene.width();\ncanvas.height = scene.height();\n\nlet ctx = canvas.getContext(\"2d\");\n\nlet render_loop = false;\n\n\nfunction toggleRender(e) {\n    render_loop = !render_loop;\n    if (render_loop) {\n        drawRender();\n    } else {\n        requestAnimationFrame(drawPaused);\n    }\n}\n\ncanvas.addEventListener(\"click\", toggleRender);\n\nconst drawRender = () => {\n    const start = performance.now();\n    scene.render();\n    console.log(`rendering took ${performance.now() - start} ms`);\n\n    pixels_array = new Uint8ClampedArray(rt_wasm_rt_wasm_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, scene.pixels(), length);\n    image_data = new ImageData(pixels_array, scene.width(), scene.height());\n    ctx.putImageData(image_data, 0, 0);\n\n    scene.move_camera(0, 0, 1.0);\n\n    if (render_loop)\n        requestAnimationFrame(drawRender);\n}\n\nconst drawPaused = () => {\n    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';\n    ctx.globalCompositeOperation = 'multiply';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    ctx.restore();\n\n    ctx.globalCompositeOperation = 'source-over';\n    ctx.fillStyle = 'white';\n    ctx.font = 'bold 24px Arial';\n    ctx.textAlign = 'center';\n    ctx.fillText('Click to render', canvas.width / 2, canvas.height / 2);\n}\n\ndrawRender();\ndrawPaused();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);