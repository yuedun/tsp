var fs = require("fs");

function queue(){
	return new Promise((resolve, reject)=>{
		fs.readFile("../queue.txt", "utf8", (err, data)=>{
			if (err) reject(err);
			console.log(data.toString());
			resolve(data.toString());
		})
	})
}
function account(id){
	return new Promise((resolve, reject)=>{
		fs.writeFile('../account.txt', id+'一个新账户', (err) => {
			if (err) reject(err);
			console.log('办卡成功!');
			resolve();
		});
	})
}
function money(id){
	return new Promise((resolve, reject)=>{
		fs.writeFile('../money.txt', id+'存了10万', (err) => {
			if (err) reject(err);
			console.log('存款成功!');
			resolve();
		});
	})
}
function enter(id) {
	Promise.resolve()
	.then(()=>{
		if (id=="common") {
			return queue()
		} else if (id =="vip") {
			console.log("我是VIP用户，不需要排队等待验证身份直接开户存钱")
		}
	}).then(user=>{
		if (user =="黑名单用户") {
			throw "禁止开户"
		}
		return user;
	}).then(user=>{
		return account(id);
	}).then(()=>{
		return money(id);
	}).catch(err=>{
		console.log("回家")
	})
}

// enter("vip");
enter("common");