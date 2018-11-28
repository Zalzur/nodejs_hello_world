// Made by following this guide:
// https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30

var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});