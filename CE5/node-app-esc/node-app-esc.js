const { readFileSync, appendFile } = require("fs");
const http = require("http");
// const express = require("express");
const path = require("path");
// const route = require("./routes");
// const bodyParser = require("body-parser");

const homepage = readFileSync("./index.html");
const aboutpage = readFileSync("./about.html");
const contactpage = readFileSync("./contact.html");
const errorpage = readFileSync("./error.html");
const stylespage = readFileSync("./styles.css");

// const app = express();
// app.use(express.static(path.join(__dirname, "node-app-esc")));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/test", route);
// app.use((req, res) => {
//   res.status(404).send("<h1>Page not found</h1>");
// });
// const server = http.createServer(app);
// server.listen(5000);

const server = http.createServer((req, res) => {
  if (req.url == "/index") {
    // res.end("Welcome to my Webpage!");
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(aboutpage);
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(contactpage);
    res.end();
  } else if (req.url == "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(stylespage);
    res.end();
  }

  res.writeHead(404, { "content-type": "text/html" });
  res.write(errorpage);
  res.end();
  //   res.end(`
  //         <h1>Sorry.</h1>
  //         <p>This page does not exist yet.</p>
  //         <a href="/index">Go back Home</a>
  //         `);
});

// const server = http.createServer();

// server.on(`request`, (req, res) => {
//   if (req.url == "/index") {
//     res.end("Welcome to my Webpage!");
//   }
//   if (req.url == "/about") {
//     res.end("This Webpage is my blog.");
//   }
//   if (req.url == "/contact") {
//     res.end("Contact me here!");
//   }
//   res.end(`
//         <h1>Sorry.</h1>
//         <p>This page does not exist yet.</p>
//         <a href="/index">Go back Home</a>
//         `);
// });

const port = server.listen(5000);
