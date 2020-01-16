"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('issue', null, null, {
    dialect: 'mysql',
    port: 3306,
    replication: {
        read: [
            { host: 'localhost', username: 'hop', password: 'hope' },
        ],
        write: { host: 'localhost', username: 'hop', password: 'hope' }
    },
    pool: {
        max: 20,
        idle: 30000
    },
});
sequelize.authenticate().then(() => {
    console.log('连接数据库成功！');
}).catch(err => {
    console.error('连接失败：', err);
});
exports.default = sequelize;
//# sourceMappingURL=db.js.map