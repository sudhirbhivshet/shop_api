var db = require('../dbconnection');

var Orders={
   
    getOrdersById: function(id,queryData,callback) {  
        
        if(queryData.q || queryData.limit || queryData.offset)  
        {
                if(queryData.q)
                {
                    if(queryData.limit)
                    {
                        if(queryData.offset)
                        {
                          
                    return db.query("SELECT customers.customerNumber,customerName,contactLastName,contactFirstName,phone, addressLine1,addressLine2,city,state,postalCode,country,orders.orderNumber,orderDate,requiredDate,shippedDate, status,comments,products.productCode,orderdetails.quantityOrdered,orderdetails.priceEach,(orderdetails.quantityOrdered * orderdetails.priceEach) as total,products.productName,productlines.productLine FROM customers inner join orders on customers.customerNumber = orders.customerNumber inner join orderdetails on orders.orderNumber = orderdetails.orderNumber inner join products on orderdetails.productCode = products.productCode inner join productlines on products.productLine = productlines.productLine  WHERE orders.orderNumber  like ? and products.productName like ? limit ?,? ", ['%'+id+'%','%'+queryData.q+'%',parseInt(queryData.offset),parseInt(queryData.limit)], callback); 

                        }
                        else{
                            return db.query("SELECT customers.customerNumber,customerName,contactLastName,contactFirstName,phone, addressLine1,addressLine2,city,state,postalCode,country,orders.orderNumber,orderDate,requiredDate,shippedDate, status,comments,products.productCode,orderdetails.quantityOrdered,orderdetails.priceEach,(orderdetails.quantityOrdered * orderdetails.priceEach) as total,products.productName,productlines.productLine FROM customers inner join orders on customers.customerNumber = orders.customerNumber inner join orderdetails on orders.orderNumber = orderdetails.orderNumber inner join products on orderdetails.productCode = products.productCode inner join productlines on products.productLine = productlines.productLine  WHERE orders.orderNumber  like ? and products.productName like ? limit 0,?  ", ['%'+id+'%',parseInt(queryData.limit)], callback); 

                        }
                    }
                    else{
                    return db.query("SELECT customers.customerNumber,customerName,contactLastName,contactFirstName,phone, addressLine1,addressLine2,city,state,postalCode,country,orders.orderNumber,orderDate,requiredDate,shippedDate, status,comments,products.productCode,orderdetails.quantityOrdered,orderdetails.priceEach,(orderdetails.quantityOrdered * orderdetails.priceEach) as total,products.productName,productlines.productLine FROM customers inner join orders on customers.customerNumber = orders.customerNumber inner join orderdetails on orders.orderNumber = orderdetails.orderNumber inner join products on orderdetails.productCode = products.productCode inner join productlines on products.productLine = productlines.productLine  WHERE orders.orderNumber  like ? and products.productName like ? ", ['%'+id+'%','%'+queryData.q+'%'], callback); 
                    }
                }
                else{
                    if(queryData.limit)
                    {
                        if(queryData.offset)
                        {
                            return db.query("SELECT customers.customerNumber,customerName,contactLastName,contactFirstName,phone, addressLine1,addressLine2,city,state,postalCode,country,orders.orderNumber,orderDate,requiredDate,shippedDate, status,comments,products.productCode,orderdetails.quantityOrdered,orderdetails.priceEach,(orderdetails.quantityOrdered * orderdetails.priceEach) as total,products.productName,productlines.productLine FROM customers inner join orders on customers.customerNumber = orders.customerNumber inner join orderdetails on orders.orderNumber = orderdetails.orderNumber inner join products on orderdetails.productCode = products.productCode inner join productlines on products.productLine = productlines.productLine  WHERE orders.orderNumber  like ?    limit ?,? ", ['%'+id+'%',parseInt(queryData.offset),parseInt(queryData.limit)], callback); 

                        }
                        else{
                            return db.query("SELECT customers.customerNumber,customerName,contactLastName,contactFirstName,phone, addressLine1,addressLine2,city,state,postalCode,country,orders.orderNumber,orderDate,requiredDate,shippedDate, status,comments,products.productCode,orderdetails.quantityOrdered,orderdetails.priceEach,(orderdetails.quantityOrdered * orderdetails.priceEach) as total,products.productName,productlines.productLine FROM customers inner join orders on customers.customerNumber = orders.customerNumber inner join orderdetails on orders.orderNumber = orderdetails.orderNumber inner join products on orderdetails.productCode = products.productCode inner join productlines on products.productLine = productlines.productLine  WHERE orders.orderNumber  like ?   limit 0,? ", ['%'+id+'%',parseInt(queryData.limit)], callback); 

                        }
                    }
                    else{
                    return db.query("SELECT customers.customerNumber,customerName,contactLastName,contactFirstName,phone, addressLine1,addressLine2,city,state,postalCode,country,orders.orderNumber,orderDate,requiredDate,shippedDate, status,comments,products.productCode,orderdetails.quantityOrdered,orderdetails.priceEach,(orderdetails.quantityOrdered * orderdetails.priceEach) as total,products.productName,productlines.productLine FROM customers inner join orders on customers.customerNumber = orders.customerNumber inner join orderdetails on orders.orderNumber = orderdetails.orderNumber inner join products on orderdetails.productCode = products.productCode inner join productlines on products.productLine = productlines.productLine  WHERE orders.orderNumber  like ?   ", ['%'+id+'%'], callback); 
                    }

                }
                
        }                    
        else{
        return db.query("SELECT customers.customerNumber,customerName,contactLastName,contactFirstName,phone, addressLine1,addressLine2,city,state,postalCode,country,orders.orderNumber,orderDate,requiredDate,shippedDate, status,comments,products.productCode,orderdetails.quantityOrdered,orderdetails.priceEach,(orderdetails.quantityOrdered * orderdetails.priceEach) as total,products.productName,productlines.productLine FROM customers inner join orders on customers.customerNumber = orders.customerNumber inner join orderdetails on orders.orderNumber = orderdetails.orderNumber inner join products on orderdetails.productCode = products.productCode inner join productlines on products.productLine = productlines.productLine  WHERE orders.orderNumber  like ?  ", ['%'+id+'%'], callback); 
        }  

            }
};
module.exports=Orders;