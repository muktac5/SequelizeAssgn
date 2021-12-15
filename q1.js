var Sequelize=require('sequelize');
var dbconfig = require('./db.config');


var sequelize=new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD,{
    host:dbconfig.HOST,
    dialect:dbconfig.dialect,
    pool:{
        min:dbconfig.pool.min,
        max:dbconfig.pool.max,
        acquire:dbconfig.pool.acquire,
        idle:dbconfig.pool.idle
    }
});

sequelize.authenticate().then(()=>{
    console.log("Connected to database successfully...");
}).catch(err=>{
    console.error("Unable to connect to db, because"+err);
}).finally(()=>{
    sequelize.close();
})

let userSequelize= sequelize.define('UserSequelize',{
    UserId:Sequelize.STRING,
    password:Sequelize.STRING,
    Role:Sequelize.STRING
},{
   timestamps:false 
}
);


userSequelize.sync({force:true}).then(() =>{
    console.log("Table created successfully...");
}).finally(()=>{
    sequelize.close();
})
