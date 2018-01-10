var db = require('../dbconnection');

var Products={
    getAllProductlines:function(queryData,callback){
       // return db.query("select * from productlines",callback);

       if(queryData.q || queryData.limit || queryData.offset)  
       {
               if(queryData.q)
               {
                   if(queryData.limit)
                   {
                       if(queryData.offset)
                       {
                  
                   return db.query("SELECT * FROM `productlines` WHERE productline like ? limit ?,? ", ['%'+queryData.q+'%',parseInt(queryData.offset),parseInt(queryData.limit)], callback); 

                       }
                       else{
                           return db.query("SELECT * FROM `productlines` WHERE productline like ? limit 0,? ", [parseInt(queryData.limit)], callback); 

                       }
                   }
                   else{
                   return db.query("SELECT * FROM `productlines` WHERE productline like ? ", ['%'+queryData.q+'%'], callback); 
                   }
                }
                else{
                   if(queryData.limit)
                   {
                       if(queryData.offset)
                       {
                           return db.query("SELECT * FROM `productlines`   limit ?,? ", [parseInt(queryData.offset),parseInt(queryData.limit)], callback); 

                       }
                       else{
                           return db.query("SELECT * FROM `productlin'%'+id+'%',es`   limit 0,? ", [parseInt(queryData.limit)], callback); 

                       }
                   }
                   else{
                   return db.query("SELECT * FROM `productlines`   ", callback); 
                   }

                }
               
       }                    
       else{
       return db.query("SELECT * FROM `productlines`  ",callback); 
       }  




    }
};
module.exports=Products;