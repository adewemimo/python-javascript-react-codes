const musicFactory = require('./modules/musicFactory');
const express = require('express');
const search = require('./router/search');
const path = require('path');
const bodyParser = require('body-parser');
const { Socket } = require('dgram');
const app = express();
const server = require('http').Server(app);
const socket = require("socket.io");

const io = socket(server);

const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/NapsterApp';

const socketEvent = require('./model/socketEvent');
const downloadEvent = require('./model/downloadEvent');



mongoose.connect(connectionString, { useNewUrlParser: true }).then(
  () => {
    console.log('Mongoose connected successfully');
  },
  error => {
    console.log('Mongoose could not connect to database: ' + error);
  }
);

server.listen(3004, function () {
  console.log('Listening on port 3004!');
});

const saveSocketDetails = eventType => {
  const socketEventData = new socketEvent({
    socket: socket.id,
    type: eventType,
  });
  socketEventData.save(); 
};

const saveDownloadDetails = dataP => {
  const downloadEventData = new downloadEvent({
    socket: socket.id,
    songId: dataP
  });
  downloadEventData.save();
}

io.on('connection', socket => {
  console.log('SOCKET - CONNECTION ACCEPTED');

  //call save socket detail function
  saveSocketDetails("Connection");

  socket.on('disconnect', () => {
    console.log('SOCKET - Disconnected...');
     //call save socket detail function
    saveSocketDetails("Disconnect");
  });

  socket.on('download', data => {
    console.log(`Received client message to download music id:, ${data}`);
    socket.emit('download-received', data);
    //call save download details function
    saveDownloadDetails(data);
  });
});

app.use("/search", search);

app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

musicFactory.init();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/napster.htm'));
});

app.get('/musicData', function (req, res) {
  const data = musicFactory.getMusicData();
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
});

app.post('/download', (req, res) => {
  const params = req.body;
  console.log(params);
  musicFactory.downloadSong(params.id);
  res.status(200);
  res.send(`Downloaded song with id: ${params.id}`);
});
