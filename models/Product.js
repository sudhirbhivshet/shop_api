var db = require('../dbconnection');

var Products={
    getAllProducts:function(queryData,callback){
        //return db.query("select * from products",callback);
        if(queryData.q || queryData.limit || queryData.offset)  
        {
                if(queryData.q)
                {
                    if(queryData.limit)
                    {
                        if(queryData.offset)
                        {
                    
                    return db.query("SELECT * FROM `products` WHERE productname like ? limit ?,? ", ['%'+queryData.q+'%',parseInt(queryData.offset),parseInt(queryData.limit)], callback); 

                        }
                        else{
                            return db.query("SELECT * FROM `products` WHERE productname like ? limit 0,? ", [parseInt(queryData.limit)], callback); 

                        }
                    }
                    else{
                    return db.query("SELECT * FROM `products` WHERE productname like ? ", ['%'+queryData.q+'%'], callback); 
                    }
                 }
                 else{
                    if(queryData.limit)
                    {
                        if(queryData.offset)
                        {
                            return db.query("SELECT * FROM `products`   limit ?,? ", ['%'+id+'%',parseInt(queryData.offset),parseInt(queryData.limit)], callback); 

                        }
                        else{
                            return db.query("SELECT * FROM `products`   limit 0,? ", [parseInt(queryData.limit)], callback); 

                        }
                    }
                    else{
                    return db.query("SELECT * FROM `products`   ", callback); 
                    }

                 }
                
        }                    
        else{
        return db.query("SELECT * FROM `products`  ",callback); 
        }  



    },
    getProductsById: function(id,queryData,callback) {  
        
                   if(queryData.q || queryData.limit || queryData.offset)  
                    {
                            if(queryData.q)
                            {
                                if(queryData.limit)
                                {
                                    if(queryData.offset)
                                    {
                                //        return db.query("SELECT * FROM `products` WHERE productcode like ? and productname like ? limit ?,? ", ['%'+id+'%','%'+queryData.q+'%',queryData.offset,queryData.limit], callback); 
                                return db.query("SELECT * FROM `products` WHERE productcode like ? and productname like ? limit ?,? ", ['%'+id+'%','%'+queryData.q+'%',parseInt(queryData.offset),parseInt(queryData.limit)], callback); 

                                    }
                                    else{
                                        return db.query("SELECT * FROM `products` WHERE productcode like ? and productname like ? limit 0,? ", ['%'+id+'%',parseInt(queryData.limit)], callback); 

                                    }
                                }
                                else{
                                return db.query("SELECT * FROM `products` WHERE productcode like ? and productname like ? ", ['%'+id+'%','%'+queryData.q+'%'], callback); 
                                }
                             }
                             else{
                                if(queryData.limit)
                                {
                                    if(queryData.offset)
                                    {
                                        return db.query("SELECT * FROM `products` WHERE productcode like ?  limit ?,? ", ['%'+id+'%',parseInt(queryData.offset),parseInt(queryData.limit)], callback); 

                                    }
                                    else{
                                        return db.query("SELECT * FROM `products` WHERE productcode like ?  limit 0,? ", ['%'+id+'%',parseInt(queryData.limit)], callback); 

                                    }
                                }
                                else{
                                return db.query("SELECT * FROM `products` WHERE productcode like ?  ", ['%'+id+'%'], callback); 
                                }

                             }
                            
                    }                    
                    else{
                    return db.query("SELECT * FROM `products` WHERE productcode like ? ", ['%'+id+'%'], callback); 
                    }  

            }
};
module.exports=Products;