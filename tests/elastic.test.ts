import { Elastic } from "../routes/elastic";

describe('测试', ()=>{
    test('elastic', () => {
        const elastic = new Elastic();
        elastic.search();
        console.log(">>>>>>>>>");
    
    })
})