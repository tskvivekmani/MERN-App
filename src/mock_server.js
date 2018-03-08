const express = require('express');
const comments = require('./comments.json');
var app = express();

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(comments);
})

app.listen(8085, (e) => {
    console.log("listening to 8085");
    if (e) console.log(e);
})