var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    data = req.body;
    console.log(data);
    var SellerAddress = req.body.Seller_Addr;
  var addS = web3.utils.toChecksumAddress(data.Seller_Addr)
  console.log(data);
  console.log(parseInt(data.Register));
  

  TourismManagement.methods.addProductt(parseInt(data.ProductID),data.Product_Name,parseInt(data.Cost),parseInt(data.Quantity),addS).send({from:SellerAddress,gas:600000})
  .then(val => {
res.send("Product Registered");
}).catch(function(reason) {
  console.log(reason)
 
 });
});

module.exports = router;
