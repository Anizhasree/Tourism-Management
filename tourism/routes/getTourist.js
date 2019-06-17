var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    data = req.query;
    console.log("============================================",data);
    web3.eth.getAccounts().then((data1)=>{

    TourismManagement.methods.getTourist(data.Register)
        .call({from:data1[0]}).then((val)=>{
        console.log(val);
        val._age = web3.utils.toBN(val._age).toString();
        val._TokenBuy = web3.utils.toBN(val._TokenBuy).toString();
        val._passNo = web3.utils.toBN(val._passNo).toString();
        val._TokenBuy = web3.utils.toBN(val._TokenBuy).toString();
        res.render("getTourist",{myData:val});
    });
  });
})
module.exports = router;
