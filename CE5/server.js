const http= require('http');
const {readFileSync} = require('fs')

const homepage = readFileSync('home.html')
const server= http.createServer((req, res) => {
	res.writeHead(200, {'content-type': 'text/html'});
    res.write(homepage)
	res.end();
});

server.listen(5500);
console.log("Server running on https://localhost:5500")