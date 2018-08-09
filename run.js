const { spawn } = require('child_process');
const tsc = spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['run', 'tsc']);
const server = spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['run', 'server']);

tsc.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

tsc.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

tsc.on('close', (code) => {
  console.log(`子进程退出码：${code}`);
});

server.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

server.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

server.on('close', (code) => {
  console.log(`子进程2退出码：${code}`);
});
