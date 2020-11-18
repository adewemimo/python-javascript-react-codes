var express = require('express');
var app = express();

app.listen(3000);

var requestTime = function(req, res, next){
    req.requestTime = Date.now();
    next();
}

app.use(requestTime);

app.get('/greet', function(req, res){
    console.log('GET recieved:' + req.requestTime);
    res.send('hello world');
})

app.route('/greet')
  .get(function (req, res) {
    res.send('Hello World!')
  })
  .post(function (req, res) {
    res.send('Update is coming soon to this site')
  })
  .put(function (req, res) {
    res.send('Name of site: Javascript Tutorings')
  })
  .delete(function(req,res){
      res.send('deletion completed...')
  })


