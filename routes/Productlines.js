var express=require('express');
var router=express.Router();
var Product=require('../models/Productlines');
var url = require('url');
router.get('/', function (req, res, next) {
    var queryData = url.parse(req.url, true).query;
   
                Product.getAllProductlines(queryData,function(err, rows) {    
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