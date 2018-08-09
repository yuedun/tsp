import { Request, Response } from "express";
import * as express from "express";


var router = express.Router();
import { readFile } from './async-test';

/* GET home page. */
router.get('/', async function (req: any, res: any, next: any) {
	var f1 = await readFile('E:/TDownload/常用.txt');
	console.log(">>>>>>>>>>>>>1", f1.toString());
	var a = 1;
	res.render('index', { title: 'Express' });
});

router.get('/md', function (req: Request, res: Response) {
	res.render('md');
});

module.exports = router;
