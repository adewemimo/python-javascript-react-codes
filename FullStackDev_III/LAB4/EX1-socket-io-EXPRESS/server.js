var http = require('http')
  , url = require('url')
  , fs = require('fs')
  , io = require('socket.io')
  , server
  , express = require('express')
  , app = express();

app.listen(3000);

app.get('/html', function(req,res){
  res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/json', function(req, res){
  res.json({firstname: 'John', lastname: 'Smith'});

});

app.get('/toronto+team', function(req,res){
  res.send('<html><head><body><h1>Go Toronto</h1></body></head></html>');

});

app.get('/toronto+[a-z]*+team', function(req,res){
  res.send('<html><head><body><h1>Go Toronto</h1></body></head></html>');

});




server = http.createServer(function(req, res){
  
  var path = url.parse(req.url).pathname;
  switch (path){
    case '/':
      fs.readFile(__dirname + '/index.html', function(err, data){
          if (err) return send404(res);
          res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'})
          res.write(data, 'utf8');
          res.end();
      });
      break;

    default: send404(res);
  }
}),

send404 = function(res){
  res.writeHead(404);
  res.write('404');
  res.end();
};

server.listen(8080);

// socket.io, setup
var io = io.listen(server);

// setup socket listeners here
io.on('connection', function(socket){
  console.log('Connection made');

  socket.on('disconnect', () => {
    console.log('disconnected...')
  });

  socket.on('message', (msg) => {
    console.log('Received Message:', msg);
  });

})

