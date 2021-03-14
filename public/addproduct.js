$(function(){ 


 let product_name=$('#product_name').val();
 let manufacturer=$('#manufacturer_name').val();
 let price=$('#price').val();
 let btn_add=$('#btn');
 

  btn_add.click(function(){ 
  
    addproduct(product_name,manufacturer,price,function(addedproduct){ 
    //  window.alter("added" +addedproduct.name+"to database");
    console.log("added to database");
    })
  })










})