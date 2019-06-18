var express = require('express');
var app = express();

app.set("view engine", "pug");
app.get('/', function (req, res) {
   

    res.render("index", { title: "Hello", message: "HELLLOOOOOO MESSAGGEEEE HEEREEEE" });
});

app.get('/seite2', function (req, res) {
    res.send("Andere Seite");
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});