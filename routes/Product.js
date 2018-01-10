var express=require('express');
var router=express.Router();
var Product=require('../models/Product');
var url = require('url');


router.get('/:product_id?', function (req, res, next) {
    var queryData = url.parse(req.url, true).query;

    if (req.params.product_id) {    
        Product.getProductsById(req.params.product_id,queryData, function(err, rows) {    
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
    } else {    
        Product.getAllProducts(queryData,function(err, rows) {    
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
    } 
   

    
});


   




module.exports = router;