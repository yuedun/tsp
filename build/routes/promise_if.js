var fs = require("fs");
function queue() {
    return new Promise((resolve, reject) => {
        fs.readFile("../queue.txt", "utf8", (err, data) => {
            if (err)
                reject(err);
            console.log(data.toString());
            resolve(data.toString());
        });
    });
}
function account(id) {
    return new Promise((resolve, reject) => {
        fs.writeFile('../account.txt', id + '一个新账户', (err) => {
            if (err)
                reject(err);
            console.log('办卡成功!');
            resolve();
        });
    });
}
function money(id) {
    return new Promise((resolve, reject) => {
        fs.writeFile('../money.txt', id + '存了10万', (err) => {
            if (err)
                reject(err);
            console.log('存款成功!');
            resolve();
        });
    });
}
function enter(id) {
}
enter("common");
//# sourceMappingURL=promise_if.js.map