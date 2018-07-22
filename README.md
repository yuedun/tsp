#typescript练习项目

启动服务
> npm run dev

该命令执行了package.json中的`start`命令，`start`命令又执行了run.js，run.js中利用子进程来同时执行package.json中的`tsc`和`server命令`。
不能使用`"start": "npm run tsc & npm run server"`这种方式同时执行两个命令