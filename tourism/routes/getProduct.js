var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    data = req.query;
    console.log("============================================",data);
    web3.eth.getAccounts().then((data1)=>{
    TourismManagement.methods.getProduct(data.ProductID)
        .call({from:data1[0]}).then((val)=>{
        console.log(val);
        val._token = web3.utils.toBN(val._token).toString();
        val._quantity = web3.utils.toBN(val._quantity).toString();
        
        res.render("getProduct",{myData:val});
    });
  });
})
module.exports = router;
