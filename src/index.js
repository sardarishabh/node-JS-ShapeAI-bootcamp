const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var age = Number(req.body.n1) / 15;
  if (age >= 0) {
    res.send(
      "<!DOCTYPE html><html><head><meta charset=utf-8 /><meta http-equiv=X-UA-Compatible content=IE=edge /><style>body {background-image: url(https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80);width: 811;height: 657;background-repeat: no-repeat;background-attachment: fixed;background-size: cover;background-position: center top}</style><title>Human - Dog's Age</title></head></html>" +
        "<h1 style=font-size: 45px;>Human - Dog's Age</h1>" +
        "<p style=color:grey><strong>Your age in Dog years : " +
        age.toFixed(2) +
        " dog years.</strong><br> [conversion successful]</br></p>"
    );
  } else res.send("ERROR : Wrong Input.<br>[conversion unsuccessful]</br>");
});

app.get("/home", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

app.get("/about", function (req, res) {
  res.send("<p>This is about me</p><h1>about me</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<p>This is contact me</p><h1>contact me</h1>");
});

app.get("/home", function (req, res) {
  res.send("<p>This is a home</p><h1>home</h1>");
});

app.listen(port);
