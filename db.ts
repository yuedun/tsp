const Sequelize = require('sequelize');
const sequelize = new Sequelize('admin', null, null, {
  dialect: 'mysql',
  port: 3306,
  replication: {
    read: [
      { host: 'localhost', username: 'root', password: 'root' },
    ],
    write: { host: 'locahost', username: 'root', password: 'root' }//读写分离
  },
  pool: { // If you want to override the options used for the read/write pool you can do so here
    max: 20,
    idle: 30000
  },
})
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the admin:', err);
});

module.exports = sequelize;