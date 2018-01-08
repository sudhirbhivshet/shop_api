var express=require('express');
var router=express.Router();
var Product=require('../models/Product');

router.get('/', function (req, res, next) {
   
        Product.getAllProducts(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    
});    

module.exports = router;