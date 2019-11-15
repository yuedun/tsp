import { Router, Request, Response } from 'express';
import * as jwt from "jsonwebtoken";
import { QueryTypes } from "sequelize";
import sequelize from "../libs/db";
import test from "../libs/reload";
const router = Router();

/* GET home page. */
router.get('/', async function (req: any, res: any, next: any) {
	sequelize.query(`insert into users (mobile) values ('19638527419')`, {
		type: QueryTypes.INSERT
	}).spread((results, metadata) => { }).then(() => {
		sequelize.query(`select * from users where mobile='19638527418'`, {
			type: QueryTypes.SELECT
		}).spread((results, metadata) => {
			console.log(results)
		})
	})
	res.render('index', { title: 'Express' });
});

router.get('/md', function (req: Request, res: Response) {
	console.log(test("张三", 23));
	res.render('md');
});

/**
 * 获取token
 */
router.get('/getToken', function (req: Request, res: Response) {
	let token = jwt.sign({ foo: 'bar' }, 'shhhhh');
	res.cookie("token", token);
	res.render('token', { token });
});

/**
 * 验证token
 */
router.get('/validToken', function (req: Request, res: Response) {
	let token = req.cookies['token'];
	console.log("header cookies:", token);
	try {
		var decoded = jwt.verify(token, 'shhhhh');
		res.send(decoded)
	} catch (error) {
		res.send(error)
	}
});

export default router;
