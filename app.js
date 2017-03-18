"use strict";

var path = require("path");
var express = require("express");
var config = require('./config')
var fs = require("fs");
var https = require("https");
var app = express();
var http = express();

var clavePrivada = fs.readFileSync(config.private_key);
var certificado = fs.readFileSync(config.certificate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

var servidor = https.createServer({ key: clavePrivada, cert: certificado }, app);

http.get("*",(req,res) => {
  res.redirect("https://carmargut.com");
});
app.get("/",(req, res) => {
    res.render("index",{});
});

http.listen(80,() => {});
servidor.listen(config.port, () => {
    console.log("Servidor corriendo en el puerto " + config.port);
});
