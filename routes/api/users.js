const route=require('express').Router();
const User=require('../../db').User;


route.get('/',function(req,res){ 
     User.findAll().then(function(users){ 
         res.send(users);
     }).catch(function(error){ 
         res.send("error could not get users");
     })
})



route.post('/',function(req,res){ 
    // we expect req to have name in it,thus we will create new user
    User.create({ 
        name:req.body.name
        // id:req.body.id   --this id is autoincrement even if i don't provide it,it gets autoincrement
    }).then(function(users){ 
        res.send(users);
    }).catch(function(error){ 
        res.send("error culd not post users");
    })
})
















exports=module.exports={ 
    route
}
