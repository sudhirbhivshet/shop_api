var db = require('../dbconnection');

var Customers={
 

    getOrdersByCustomerId: function(id,queryData,callback) {  
        
            if(queryData.q || queryData.limit || queryData.offset)  
            {
                    if(queryData.q)
                    {
                        if(queryData.limit)
                        {
                            if(queryData.offset)
                            {
                              
                        return db.query("SELECT customers.customerNumber,customerName,contactLastName,contactFirstName,phone, addressLine1,addressLine2,city,state,postalCode,country,orderNumber,orderDate,requiredDate,shippedDate, status,comments FROM customers inner join orders on customers.customerNumber = orders.customerNumber   WHERE customers.customernumber like ? and customername like ? limit ?,? ", ['%'+id+'%','%'+queryData.q+'%',parseInt(queryData.offset),parseInt(queryData.limit)], callback); 

                            }
                            else{
                                return db.query("SELECT customers.customerNumber,customerName,contactLastName,contactFirstName,phone, addressLine1,addressLine2,city,state,postalCode,country,orderNumber,orderDate,requiredDate,shippedDate, status,comments FROM customers inner join orders on customers.customerNumber = orders.customerNumber   WHERE customers.customernumber like ? and customername like ? limit 0,?  ", ['%'+id+'%',parseInt(queryData.limit)], callback); 

                            }
                        }
                        else{
                        return db.query("SELECT customers.customerNumber,customerName,contactLastName,contactFirstName,phone, addressLine1,addressLine2,city,state,postalCode,country,orderNumber,orderDate,requiredDate,shippedDate, status,comments FROM customers inner join orders on customers.customerNumber = orders.customerNumber   WHERE customers.customernumber like ? and customername like ? ", ['%'+id+'%','%'+queryData.q+'%'], callback); 
                        }
                    }
                    else{
                        if(queryData.limit)
                        {
                            if(queryData.offset)
                            {
                                return db.query("SELECT customers.customerNumber,customerName,contactLastName,contactFirstName,phone, addressLine1,addressLine2,city,state,postalCode,country,orderNumber,orderDate,requiredDate,shippedDate, status,comments FROM customers inner join orders on customers.customerNumber = orders.customerNumber   WHERE customers.customernumber like ?   limit ?,? ", ['%'+id+'%',parseInt(queryData.offset),parseInt(queryData.limit)], callback); 

                            }
                            else{
                                return db.query("SELECT customers.customerNumber,customerName,contactLastName,contactFirstName,phone, addressLine1,addressLine2,city,state,postalCode,country,orderNumber,orderDate,requiredDate,shippedDate, status,comments FROM customers inner join orders on customers.customerNumber = orders.customerNumber   WHERE customers.customernumber like ?   limit 0,? ", ['%'+id+'%',parseInt(queryData.limit)], callback); 

                            }
                        }
                        else{
                        return db.query("SELECT customers.customerNumber,customerName,contactLastName,contactFirstName,phone, addressLine1,addressLine2,city,state,postalCode,country,orderNumber,orderDate,requiredDate,shippedDate, status,comments FROM customers inner join orders on customers.customerNumber = orders.customerNumber   WHERE customers.customernumber like ?   ", ['%'+id+'%'], callback); 
                        }

                    }
                    
            }                    
            else{
            return db.query("SELECT customers.customerNumber,customerName,contactLastName,contactFirstName,phone, addressLine1,addressLine2,city,state,postalCode,country,orderNumber,orderDate,requiredDate,shippedDate, status,comments FROM customers inner join orders on customers.customerNumber = orders.customerNumber   WHERE customers.customernumber like ?  ", ['%'+id+'%'], callback); 
            }  

        }
};
module.exports=Customers;