var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    data = req.body;
    console.log(data);
    var TouristAddress = req.body.Tour_Add;
    var weiValue = web3.utils.toWei(req.body.Token, 'ether');
    var add = web3.utils.toChecksumAddress(data.Tour_Add)
    console.log(data);
    console.log(parseInt(data.Register));
    
  
  TourismManagement.methods.addTourist(parseInt(data.Register),data.Name,parseInt(data.Age),data.Indian,data.Nationality,data.Gender,data.Blood,parseInt(data.Passport_Number),parseInt(data.Token),add).send({from:TouristAddress,gas:600000,value:weiValue})
  .then(val => {
    res.send("Person is Registered");
  }).catch(function(reason) {
   console.log(reason)
  
  });
});

module.exports = router;
