var express = require('express');
var counter = require("./counter.js")

var app = express();

var portNumber = 3000;

app.listen(portNumber, function(){
  console.log(`Listening on port ${portNumber}`);
});

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
     // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
});

/* GET home page. */
app.get('/counter', function (req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.json({ data: counter.getCounter() });
});

app.put('/counter/:val', function (req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  console.log(counter.setCounter(req.params.val));
  res.json({ data: counter.setCounter(req.params.val) });
});
