console.log("We are creating a server....");

const http = require('http');
const { listenerCount } = require('process');

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end("This is a server created by Code Ranger");
});

server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}/`);
});