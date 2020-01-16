import { Sequelize } from "sequelize";
const sequelize = new Sequelize('issue', null, null, {
	dialect: 'mysql',
	port: 3306,
	replication: {
		read: [
			{ host: 'localhost', username: 'hop', password: 'hope' },
		],
		write: { host: 'localhost', username: 'hop', password: 'hope' }//读写分离
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