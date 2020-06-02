"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elastic_1 = require("../routes/elastic");
describe('测试', () => {
    test('elastic', () => {
        const elastic = new elastic_1.Elastic();
        elastic.search();
        console.log(">>>>>>>>>");
    });
});
//# sourceMappingURL=elastic.test.js.map