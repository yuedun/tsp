import { Elastic } from "../routes/elastic";

describe('测试elasticsearch', () => {
    test('查询', async () => {
        const elastic = new Elastic();
        const result = await elastic.search();
        console.log(">>>", result.body.hits.hits[0]);

    })
    test('ES信息', async () => {
        const elastic = new Elastic();
        const result = await elastic.info();
        console.log(">>>", result.body.name);

    })
})