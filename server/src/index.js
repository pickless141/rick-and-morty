//Pasos para abrir un servidor local 
//const http = require("http");
//const getCharacterById = require("./controllers/getCharacterById")
//const PORT = 3001;

//http.createServer((req, res) => {
//    res.setHeader('Access-Control-Allow-Origin', '*');
//    if(req.url.includes("/rickandmorty/character")) {
//        const id = req.url.split("/").pop();
//        getCharacterById(res, id);
//    }
//
//}).listen(PORT, "localhost");

const express = require('express');
const router = require('./routes/index');
const server = express();
const PORT = 3001;


server.listen(PORT, () => {
    console.log('Server has started on port: ' + PORT);
});