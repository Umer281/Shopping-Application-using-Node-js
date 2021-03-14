const express=require('express');
const path=require('path')
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',require('./routes/api').route)

// this will route to  route/api folder where by default this route will go to index.js where we have handeled route for users and products i.e-
// - if client requests '/api/products' then the route will first go to api which is handeled by /api in server.js and then /api will-
// route it to /api folder in routes where 'index.js' which is default route will route '/products' to products file.similarly fo-
// 'api/users'.
app.use('/',express.static(path.join(__dirname,'/public'))); 
// this will route to home page /
app.listen(6983,function(){ 
    console.log("server running at 6983");
});