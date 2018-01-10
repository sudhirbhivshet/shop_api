var express=require('express');
var router=express.Router();
var Customers=require('../models/customers');
var url = require('url');

router.get('/:customer_id?/orders', function (req, res, next) {
    var queryData = url.parse(req.url, true).query;
    Customers.getOrdersByCustomerId(req.params.customer_id,queryData,function (err, rows) {
            if (err) {    
                res.json(err);    
            } else {    
                var countCheckd=rows.length;
                var data={
                data:rows,
                total:countCheckd
                }    
                res.json(data);  
        
            }    

        });
    
});    

module.exports = router;