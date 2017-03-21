"use strict";

var path = require("path");
var express = require("express");
var config = require('./config');
var favicon = require("serve-favicon");
var fs = require("fs");
var https = require("https");
var app = express();
var http = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
http.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

var credentials = {
  key: fs.readFileSync(config.private_key),
  cert: fs.readFileSync(config.certificate),
  ca: fs.readFileSync(config.ca_bundle)
}
var server = https.createServer(credentials, app);

http.get("/",(req,res) => {
  res.redirect("https://carmargut.com");
});
app.get("/",(req, res) => {
    res.render("index",{});
});

http.listen(80,() => {});
server.listen(config.port, () => {
    console.log("Servidor corriendo en el puerto " + config.port);
});
