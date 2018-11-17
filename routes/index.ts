import { Router, Request, Response } from 'express';
import * as jwt from "jsonwebtoken";
const router = Router();
import { readFile } from './async-test';
const sequelize = require('../db');

/* GET home page. */
router.get('/', async function (req: any, res: any, next: any) {
	var f1 = await readFile('E:/TDownload/常用.txt');
	console.log(">>>>>>>>>>>>>1", f1.toString());
	var a = 1;
	sequelize.query(`insert into users (mobile) values ('19638527419')`, {
		type: sequelize.QueryTypes.INSETT
	}).spread((results, metadata) => { }).then(() => {
		sequelize.query(`select * from users where mobile='19638527418'`, {
			type: sequelize.QueryTypes.SELECT
		}).spread((results, metadata) => {
			console.log(results)
		})
	})
	res.render('index', { title: 'Express' });
});

router.get('/md', function (req: Request, res: Response) {
	res.render('md');
});

router.get('/getToken', function (req: Request, res: Response) {
	let token = jwt.sign({ foo: 'bar' }, 'shhhhh');
	res.setHeader("token", token);
	res.render('token', { token });
});

router.get('/validToken', function (req: Request, res: Response) {
	let token = req.query.token;
	console.log("header:", req.headers['token']);

	try {
		var decoded: any = jwt.verify(token, 'shhhhh');
		res.send(decoded.foo)
	} catch (error) {
		res.send(error)
	}
})
module.exports = router;
