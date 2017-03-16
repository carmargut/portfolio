"use strict";

var path = require("path");
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


app.get("/", function(request, response) {
    response.render("index",{});
});

app.get("/pruebas",function(request,response){
  response.render("elements",{});
});

app.listen(80, function() {
    console.log("Servidor corriendo en el puerto " + 80);
});
