
/**
 * 函数重载
 *
 * @param {string} name
 * @returns {string}
 */
function test(name: string): string;

function test(name: string, age: number): string;

function test(a: any): any {
    return a;
}

export default test;