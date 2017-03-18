"use strict";

var path = require("path");
var express = require("express");
var config = require('./config')
var fs = require("fs");
var https = require("https");
var app = express();

var clavePrivada = fs.readFileSync(config.private_key).toString();
var certificado = fs.readFileSync(config.certificate).toString();
var ca_bundle = fs.readFileSync(config.ca_bundle).toString();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));



var servidor = https.createServer({ key: clavePrivada, ca: ca_bundle, cert: certificado }, app);

app.get("/", function(request, response) {
    response.render("index",{});
});

app.get("/pruebas",function(request,response){
  response.render("elements",{});
});


servidor.listen(config.port, function() {
    console.log("Servidor corriendo en el puerto " + config.port);
});
