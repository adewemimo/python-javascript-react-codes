var express = require('express');
var bodyPaser = require('body-parser');

var router = express.Router();

router.use(bodyPaser.urlencoded({extended: true}))
      .post('/', function(req,res){
        console.log('First name: '+req.body.firstname);
        console.log('Last name: '+req.body.lastname);
        res.send('Post Received');

      });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
