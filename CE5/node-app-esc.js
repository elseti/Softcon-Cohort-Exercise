const http= require('http');
const {readFileSync} = require('fs');
//var url = require('url');

const homePage = readFileSync('./home.html');
const indexPage= readFileSync('./index.html');
const aboutPage= readFileSync('./about.html');
const contactPage= readFileSync('./contact.html')
const styles= readFileSync('./css/main.css');
const meme1= readFileSync('./src/meme1.png')
const meme2= readFileSync('./src/meme2.png')
const meme3= readFileSync('./src/meme3.png')
const meme4= readFileSync('./src/meme4.png')
const meme5= readFileSync('./src/meme5.png')
const meme6= readFileSync('./src/meme6.png')
const meme7= readFileSync('./src/meme7.png')

const server= http.createServer((req, res) => {
    const url= req.url;
    console.log(url);

    
    //homepage
    if(url==='/' || url==='/home.html'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    }
    else if(url==='/about.html'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(aboutPage);
	    res.end();
    }
    else if(url==='/index.html'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(indexPage);
	    res.end();
    }
    else if(url==='/contact.html'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(contactPage);
	    res.end();
    }
    // CSS
    else if(url==="/css/main.css"){
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(styles);
        res.end();
    }
    
    // images of my memes
    else if(url==='/src/meme1.png'){
        res.writeHead(200, {'content-type': 'image/png'});
        res.write(meme1)
        res.end();
    }   
    else if(url==='/src/meme1.png'){
        res.writeHead(200, {'content-type': 'image/png'});
        res.write(meme1)
        res.end();
    }
    else if(url==='/src/meme2.png'){
        res.writeHead(200, {'content-type': 'image/png'});
        res.write(meme2)
        res.end();
    }
        
    else if(url==='/src/meme3.png'){
        res.writeHead(200, {'content-type': 'image/png'});
        res.write(meme3)
        res.end();
    }
    else if(url==='/src/meme4.png'){
        res.writeHead(200, {'content-type': 'image/png'});
        res.write(meme4)
        res.end();
    }
    else if(url==='/src/meme5.png'){
        res.writeHead(200, {'content-type': 'image/png'});
        res.write(meme5)
        res.end();
    }
    else if(url==='/src/meme6.png'){
        res.writeHead(200, {'content-type': 'image/png'});
        res.write(meme6)
        res.end();
    }
    else if(url==='/src/meme7.png'){
        res.writeHead(200, {'content-type': 'image/png'});
        res.write(meme7)
        res.end();
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>404 not found<h1><h2>SORRY THE PAGE YOU ARE LOOKING FOR IS NOT HERE.</h2>');
        res.end();
    }
    
    
	
});

server.listen(5500);
console.log("Server running on https://localhost:5500")