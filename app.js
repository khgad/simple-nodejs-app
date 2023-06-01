var express = require('express');

var app = express(); 

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/iti', function(req, res) {
    res.send('<h2>Cloud Platform Development</h2><h3>Intake: 43</h3><h4>Author: Khaled gad</h4><h5>version: 3</h5>')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});