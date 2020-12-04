const musicFactory = require('../modules/musicFactory');
const express = require('express');
const router = express.Router();



router.get('/filterMusic', function (req, res) {
    const queryStr = req.query;
    console.log(queryStr);
    const data = musicFactory.filterMusic(
      queryStr.genre,
      queryStr.band,
      queryStr.title,
      queryStr.albulm
    );
    res.status(200);    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  });
  
  router.get('/favorite', (req, res) => {
    const queryStr = req.query;
    console.log(queryStr);
    const song = musicFactory.addFavorite(queryStr.id);
    res.status(200);
    res.send(JSON.stringify(song));
  });



module.exports = router;

