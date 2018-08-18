const { spawn } = require('child_process');
const tsc = spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['run', 'tsc']);
const server = spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['run', 'server']);

tsc.stdout.on('data', (data) => {
  console.log(`tsc stdout: ${data}`);
});

tsc.stderr.on('data', (data) => {
  console.log(`tsc stderr: ${data}`);
});

tsc.on('close', (code) => {
  console.log(`tsc子进程退出码：${code}`);
});

server.stdout.on('data', (data) => {
  console.log(`server stdout: ${data}`);
});

server.stderr.on('data', (data) => {
  console.log(`server stderr: ${data}`);
});

server.on('close', (code) => {
  console.log(`server子进程2退出码：${code}`);
});
