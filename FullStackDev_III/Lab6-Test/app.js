const express = require('express');
const musicFactory = require('./musicFactory.js');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.listen(3000);

app.get('/', function(req, res){
    res.sendFile(__dirname+ '/index.html');
})

app.use(express.static('public'));

app.get('/musicData',function(req, res){
    const data = musicFactory.getMusicData();
    return res.status(200).json(data);
} )

app.get('/filterMusic', function(req, res){
    const {genre, artist, album, songTitle} = req.query
    const dataFilter = musicFactory.filterMusic(genre, artist, album, songTitle);
    return res.status(200).json(dataFilter);
})

app.get('/favorite', function(req, res){
    const addFavourite = musicFactory.addFavourite(req.query.id);
    return res.status(200).json(addFavourite);
})

app.post('/download', function(req, res){
    console.log('bbbb', req.body)
    const downloadedMusic = musicFactory.downloadSong(req.body.id);
    return res.status(200).send(`Download song with id: ${req.body.id}`);
})



musicFactory.init();
musicFactory.getMusicData();
musicFactory.addFavourite(1);
musicFactory.downloadSong(5);
musicFactory.filterMusic("Hard Rock");
musicFactory.filterMusic("Country Rock");
musicFactory.filterMusic("Hip Hop");
musicFactory.filterMusic("Hard Rock", "Journey");
musicFactory.filterMusic("", "Jason Aldean");
