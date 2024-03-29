import * as express from 'express';
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

import index from './routes/index';
import users from './routes/users';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, process.env.NODE_ENV === 'development' ? 'build/views' : 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, process.env.NODE_ENV === 'development' ? 'build/public' : 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: any) {
	var err: any = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

export default app;
