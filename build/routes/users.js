"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
exports.default = router;
//# sourceMappingURL=users.js.map