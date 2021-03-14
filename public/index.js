$(function(){ 

       
       let product_list=$('#product_list');
        //   this function(products) is a callback function which gets executed after getproducts function gets called and executed code
        // present in function body(getproducts),it is basically asyn function which returns promise
   getproducts(function(products){      
       product_list.empty();
       for (product of products){ 
           product_list.append(addcard(product))
       }
  })


   //or 
//    getproducts().then(function(products){ 
//        product_list.empty();
//        for product in products{ 
//            product_list.append(addcard(product));
//        }
//    }).catch(function(e){ 
//        console.log(e);
//    })









})