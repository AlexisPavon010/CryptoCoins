"use strict";
(() => {
var exports = {};
exports.id = 819;
exports.ids = [819];
exports.modules = {

/***/ 7006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ list)
/* harmony export */ });
function list(req, res) {
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1').then(res => res.json()).catch(error => res.error('Error:', error)).then(response => res.send(response));
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7006));
module.exports = __webpack_exports__;

})();