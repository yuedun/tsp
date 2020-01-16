"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt = require("jsonwebtoken");
const sequelize_1 = require("sequelize");
const db_1 = require("../libs/db");
const reload_1 = require("../libs/reload");
const signature = require('cookie-signature');
const router = express_1.Router();
router.get('/', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        db_1.default.query(`insert into users (mobile) values ('19638527419')`, {
            type: sequelize_1.QueryTypes.INSERT
        }).spread((results, metadata) => { }).then(() => {
            db_1.default.query(`select * from users where mobile='19638527418'`, {
                type: sequelize_1.QueryTypes.SELECT
            }).spread((results, metadata) => {
                console.log(results);
            });
        });
        res.render('index', { title: 'Express' });
    });
});
router.get('/md', function (req, res) {
    console.log(reload_1.default("张三", 23));
    res.render('md');
});
router.get('/getToken', function (req, res) {
    let token = jwt.sign({ foo: 'bar' }, 'secret', {
        expiresIn: 10
    });
    res.cookie("token", token);
    res.render('token', { token });
});
router.get('/validToken', function (req, res) {
    let token = req.cookies['token'];
    console.log("header cookies:", token);
    try {
        var decoded = jwt.verify(token, 'secret');
        res.send(decoded);
    }
    catch (error) {
        res.send(error);
    }
});
router.get('/t', function (req, res) {
    var result = signature.unsign('z87EKpyNV0ZILi5JVidpiVahxnRoF4WV.EM+iXDGF9UQ4yH+QGYzn+tLa0CeMXTWEklHVEoNYacs', 'zm-session-key');
    console.log(result);
    res.send(result);
});
exports.default = router;
//# sourceMappingURL=index.js.map