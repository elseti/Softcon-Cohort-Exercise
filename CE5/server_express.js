const express = require('express');
const app= express();
//const logger= require('./logger')
const {readFileSync} = require('fs');

const homePage = readFileSync('./home.html');

app.get('/', (req, res)=>{
    console.log('user reach server')
    res.send(homePage)
})

app.listen(5500, ()=>{
    console.log("server listen")
})