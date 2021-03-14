
const Products=require('../../db').Products;
const route=require('express').Router();


route.get('/',function(req,res){ 
    Products.findAll().then(function(products){ 
        res.send(products);
    }).catch(function(error){ 
        res.send("error");
    })
})



route.post('/',function(req,res){ 
        if(isNaN(req.body.price)){ 
            return res.send("enter valid price");
        }
        Products.create({ 
            name:req.body.name,
            manufacturer:req.body.manufacturer,
            price:parseFloat(req.body.price),
        }).then(function(product){ 
            res.send(product);
        }).catch(function(error){ 
            res.send(error);
        })
})








// route.get('/',async function(req,res){ 
       
//     try{ 
//         //await db.sync();
//        const products= await Products.findAll();
//         res.send(products);

//     }catch(e){ 
//         res.send(e);
//     }
// })

// route.post('/',async function(req,res){ 
//     // validate the values i.e check if price entered id float ie it should not contain Rs 
//       if(isNaN(req.body.price)){ 
//          return  res.send("error enter valid price");
//         // this return will not execute any code furthur if it finds price Nan,it will return
//       }
//     try{ 
//       //  await db.sync();
//         const products=await Products.create({ 
//             name:req.body.name,
//             manufacturer:req.body.manufacturer,
//             price:parseFloat(req.body.price),
//         })
//     }catch(e){ 
//         res.send(e);
//     }

// })






exports=module.exports={ 
    route
}


