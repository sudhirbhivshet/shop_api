var express=require('express');
var router=express.Router();
var Orders=require('../models/orders');
var url = require('url');


router.get('/:order_id?', function (req, res, next) {
    var queryData = url.parse(req.url, true).query;

       
        Orders.getOrdersById(req.params.order_id,queryData, function(err, rows) {    
if (err) {    
                res.json(err);    
            } else {    
                var countCheckd=rows.length;
                var data={
                    status:true,
                  data:rows,
                  total:countCheckd
                }    
                res.json(data);  
        
            }    
        });    
   

    
});


   




module.exports = router;