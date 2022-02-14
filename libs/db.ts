import { Sequelize } from "sequelize";
import { mysqlDB } from "../config";
const sequelize = new Sequelize('issue', null, null, {
	dialect: 'mysql',
	port: 3306,
	replication: {
		read: [
			{ host: mysqlDB.host, username: mysqlDB.user, password: mysqlDB.pass },
		],
		write: { host: mysqlDB.host, username: mysqlDB.user, password: mysqlDB.pass }//读写分离
	},
	pool: { // If you want to override the options used for the read/write pool you can do so here
		max: 20,
		idle: 30000
	},
})
sequelize.authenticate().then(() => {
	console.log('连接数据库成功！');
}).catch(err => {
	console.error('连接失败：', err);
});

export default sequelize;