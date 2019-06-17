var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    data = req.body;
    console.log(data);
    var add2 = data.Tour_Add2;
   
  TourismManagement.methods.buyProduct(parseInt(data.TourReg),parseInt(data.ProductId),parseInt(data.Quantity)).send({from:add2,gas:600000})
  .then(val => {
    res.send("buyProduct");
  }).catch(function(reason) {
   console.log(reason)
  
  });
});
module.exports = router;
