//const Sequelize=require('sequelize')
const { Sequelize, DataTypes } = require('sequelize');
// making connection to database using orm called sequelize
const db=new Sequelize('shoppingdb','shopper','shoppass',{ 
    host:'localhost',
    dialect:'mysql'
})





// craeting a table of user in db
const User=db.define('users',{ 
    id:{ 
        type:DataTypes.INTEGER(2),
        primaryKey:true,
        autoIncrement:true
    },
    name:{ 
        type:DataTypes.STRING(20),
        allowNull:false
    }
})

// creating table of products

const Products=db.define('products',{ 
    name:{ 
        type:DataTypes.STRING(30),
        primaryKey:true,
        allowNull:false
    },
    manufacturer:{ 
        type:DataTypes.STRING(20),
        allowNull:false
    },
    price:{ 
        type:DataTypes.FLOAT,
        allowNull:false,
        defualtValue:0.0
    }
})




db.sync().then(function(){ 
    console.log("successfully created tables ")
})

module=module.exports={ 
    User,Products
}