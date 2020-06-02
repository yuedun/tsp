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
exports.readFile = void 0;
const fs = require("fs");
exports.readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error)
                reject(error);
            resolve(data);
        });
    });
};
function a() {
    return "aaa";
}
var asyncReadFile = function () {
    return __awaiter(this, void 0, void 0, function* () {
        var f1 = yield exports.readFile('E:/TDownload/常用.txt').then(data => data);
        var f2 = yield exports.readFile('E:/TDownload/v2-config.txt');
        var f3 = yield a();
        console.log(">>>>>>>>>>>>>1", f1.toString());
        console.log(">>>>>>>>>>>>>2", f2.toString());
        console.log(">>>>>>>>>>>>>3", f3);
    });
};
//# sourceMappingURL=async-test.js.map