var db = require('../dbconnection');

var Product={
    getAllProducts:function(callback){
        return db.query("select * from products",callback);
    }
};
module.exports=Product;