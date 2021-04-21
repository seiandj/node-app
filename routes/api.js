var express = require('express');
var router = express.Router();

const https = require('https');



/* GET home page. */
router.get('/', function(req, res, next) {
    
    // Sample URL from mockapi
    const url = 'https://603a806df1d6aa0017a10c48.mockapi.io/restaurants';
      
    const request = https.request(url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data = data + chunk.toString();
        });
      
        response.on('end', () => {
            const body = JSON.parse(data);
            console.log(body);
            res.render('apidata', {body});
        });
        //res.render('apidata', data);
         
    })
      
    request.on('error', (error) => {
        console.log('An error', error);
    });
      
    request.end() 
    
   
  
 
});

module.exports = router;