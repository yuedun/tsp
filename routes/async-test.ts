import * as fs from 'fs';

export var readFile = function(fileName) {
	return new Promise(function(resolve, reject) {
		fs.readFile(fileName, function(error, data) {
			if (error) reject(error);
			resolve(data);
		});
	});
};

function a() {
	return "aaa";
}
var asyncReadFile = async function() {
	var f1 = await readFile('E:/TDownload/常用.txt').then(data=>data);
	var f2 = await readFile('E:/TDownload/v2-config.txt');
	var f3  =await a()
	console.log(">>>>>>>>>>>>>1",f1.toString());
	console.log(">>>>>>>>>>>>>2", f2.toString());
	console.log(">>>>>>>>>>>>>3", f3);
};

// asyncReadFile()