
function getproducts(done){     
    // this 'done' is a callback function which gets executed after main function body code gets executed ie after all 
    //items are fetched from database in this function.
    $.get('/api/products',function(data){ 
        done(data);
    })
}


function addproduct(name,manufacturer,price,done){ 
    console.log(name,manufacturer,price);
    $.post('/api/products',{
        name:name,
        manufacturer:manufacturer,
        price:price
    },function(data){ 
        done(data);
    })
}





function addcard(product){
   return $(` <div class="col-sm-1 col-md-4 card" style="   margin: 10px; padding: 10px;" >
   <div class="col"> <h3>${product.name}</h3></div>
   <br><div> <h5>${product.manufacturer}</h5>  </div>
   <div class="row"> 
       <div class="col">${product.price}</div>
       <div class="col"> <button type="button" class="btn btn-success">Buy </button></div>
   </div>
</div>
`)


}



