var Sequelize = require('sequelize');
var sequelize = new Sequelize('admin', null, null, {
    dialect: 'mysql',
    port: 3306,
    replication: {
        read: [
            { host: 'localhost', username: 'root', password: 'root' },
        ],
        write: { host: 'locahost', username: 'root', password: 'root' }
    },
    pool: {
        max: 20,
        idle: 30000
    },
});
sequelize.authenticate().then(function () {
    console.log('Connection has been established successfully.');
}).catch(function (err) {
    console.error('Unable to connect to the admin:', err);
});
module.exports = sequelize;
//# sourceMappingURL=db.js.map