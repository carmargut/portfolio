"use strict";

var path = require("path");
var express = require("express");

var config = require('./config')
var fs = require("fs");
var https = require("https");
var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


var clavePrivada = fs.readFileSync(config.private_key);
var certificado = fs.readFileSync(config.certificate);
//var servidor = https.createServer({ key: clavePrivada, cert: certificado }, app);

app.get("/", function(request, response) {
    response.render("index",{});
});

app.get("/pruebas",function(request,response){
  response.render("elements",{});
});


app.listen(config.port, function() {
    console.log("Servidor corriendo en el puerto " + config.port);
});
