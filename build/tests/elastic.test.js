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
const elastic_1 = require("../routes/elastic");
describe('测试elasticsearch', () => {
    test('查询', () => __awaiter(void 0, void 0, void 0, function* () {
        const elastic = new elastic_1.Elastic();
        const result = yield elastic.search();
        console.log(">>>", result.body.hits.hits[0]);
    }));
    test('ES信息', () => __awaiter(void 0, void 0, void 0, function* () {
        const elastic = new elastic_1.Elastic();
        const result = yield elastic.info();
        console.log(">>>", result.body.name);
    }));
});
