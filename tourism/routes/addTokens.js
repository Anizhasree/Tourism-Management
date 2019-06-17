var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    data = req.body;
    console.log(data);
    var add1 = data.Tour_Add1;
    
    var weiValue = web3.utils.toWei(req.body.Topup_Amount, 'ether');

      
  TourismManagement.methods.addTokens(parseInt(data.Reg),parseInt(data.Topup_Amount)).send({from:add1,gas:600000,value:weiValue})
  .then(val => {
    res.send("Token added");
  }).catch(function(reason) {
   console.log(reason)
  
  });
});

module.exports = router;
