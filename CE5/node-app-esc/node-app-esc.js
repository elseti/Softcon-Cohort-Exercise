const { readFileSync } = require("fs");
const http = require("http");

const homepage = readFileSync("./index.html");
const aboutpage = readFileSync("./about.html");
const contactpage = readFileSync("./contact.html");
const errorpage = readFileSync("./error.html");
const styles = readFileSync("./styles.css");
const image1 = readFileSync("./peng.png");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(aboutpage);
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(contactpage);
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(styles);
    res.end();
  } else if (req.url === "/peng.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(image1);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(errorpage);
    res.end();
  }
});

server.listen(5000);
console.log("Server running on https://localhost:5000");
