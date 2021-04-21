var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.post('/', function(req, res, next) {
    
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    
    
    console.log("Name: " + name + " Email: " + email + " Message: " + message);
  
  res.render('confirmation', { aName : name, anEmail: email, aMessage: message });
});

module.exports = router;