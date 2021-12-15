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
/*
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
*/

/*

let ProductTable= sequelize.define('ProductSequelize',{
    ProductId:
    {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    ProductName:Sequelize.STRING,
    Description:Sequelize.STRING,
    cost:Sequelize.INTEGER
},{
    timestamps:false,
    freezeTableName:true
});
/*
ProductTable.sync().then(()=>{
    console.log("Table created successfully..");
}).catch ((err)=>{
    console.error("Error is"+err);
}).finally(()=>{
    sequelize.close();
})

*/

/*
ProductTable.findByPk(102).then((data)=>{
    console.log(data.dataValues);
}).catch((err)=>{
    console.error("Error is :"+err);
})
*/

/*ProductTable.findAll ().then ((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is :"+err);
});
*/

/*
ProductTable.findAll ({where:{ProductName:'Iphone 13'},raw:true}).then ((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is :"+err);
});
*/

/*
ProductTable.findAll ({attributes:['ProductName','cost'], where:{ProductName:'Ipad air'},raw:true}).then ((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is :"+err);
});
*/

/*
ProductTable.findAndCountAll({where:{ProductId:102}}).then((data)=>{
    console.log("Number of records are : "+data.count);
}).catch((err)=>{
    console.error("Error is :"+err);
});

*/
/*
ProductTable.findAll({order:[['ProductName','DESC']],raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is :"+err);
});

*/

/*
let movieTable = sequelize.define('MovieSequelize',{
    Movie_id:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    MovieName:Sequelize.STRING,
    Type:Sequelize.STRING,
    Language:Sequelize.STRING,
    Cast:Sequelize.STRING
},{
    timestamps:false,
    freezeTableName:true
});


movieTable.bulkCreate([
    {Movie_id:101,MovieName:'The Da Vinci Code',Type:"Thriller",Language:'English',Cast:'Tom Hanks'},
    {Movie_id:102,MovieName:'Ye zindagi na milegi dobara',Type:"Drama",Language:'Hindi',Cast:'Ranbir Kapoor'},
    {Movie_id:103,MovieName:'Love Story',Type:"Drama",Language:'Telugu',Cast:'Naga Chaitanya'}
]).then((data)=>{
    console.log("Records inserted into the table sucessfully");
}).catch((err)=>{
    console.log("The error is :"+err);
})


movieTable.findAll({raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is : "+err);
});

*/


let employeeTable =sequelize.define ('EmployeeSequelize',{
    EmpId :{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    Name:Sequelize.STRING,
    Dept:Sequelize.STRING,
    Designation:Sequelize.STRING
},{
    timestamps:false,
    freezeTableName:true
});

let studentTable = sequelize.define('StudentSequelize',{
    student_id:Sequelize.INTEGER,
    Name:Sequelize.STRING,
    Stream:Sequelize.STRING,
    Marks:Sequelize.INTEGER
},{
    timestamps:false,
    freezeTableName:true
});
/*
employeeTable.sync({force:true}).then(()=>{
    console.log("Table created successfully");
}).catch((err)=>{
    console.error("Error is "+err);
}).finally (()=>{
    sequelize.close();
})




employeeTable.bulkCreate ([
    {EmpId:101,Name:'Mukta',Dept:"Full Stack",Designation:"Consultant Trainee"},
    {EmpId:102,Name:'Charan',Dept:"Full Stack",Designation:"Trainer"},
    {EmpId:103,Name:'Manikant',Dept:"Full Stack",Designation:"Consultant Trainee"},
    {EmpId:104,Name:'Viren',Dept:"Full Stack",Designation:"Technical Lead"}
]).then((data)=>{
    console.log("Records inserted into the table sucessfully");
}).catch((err)=>{
    console.log("The error is :"+err);
})



employeeTable.findAll ({raw:true}) . then ((data)=>{
    console.log(data);
}).catch ((err)=>{
    console.error("Error is : "+err);
})
*/

/*
employeeTable.findByPk(104).then((data)=>{
    console.log(data.dataValues);
}).catch((err)=>{
    console.error("error is : "+err);
});

employeeTable.findAll({where: {Name:'Mukta'},raw:true}).then( (data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is : "+err);
});

employeeTable.findAll({attributes:['Name','Dept'],raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is : "+err);
});

employeeTable.findAll({attributes:['Name','Dept'],where:{Dept:'Full Stack'},raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is : "+err);
});

employeeTable.findAndCountAll().then((data)=>{
    console.log("Number of records are : "+data.count);
}).catch((err)=>{
    console.error("Error is : "+err);
});

employeeTable.findAll({order:['Name'],raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is : "+err);
});

const Op=Sequelize.Op;
employeeTable.findAll ({
    where : {
        Name :{[Op.like]:'m%'}
    }, raw:true
}).then ((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is : "+err);
});


sequelize.query ("select * from `EmployeeSequelize`",{type:sequelize.QueryTypes.Select}).then(
    function(data){
        console.log(data);
    }
)


const Op=Sequelize.Op;
studentTable.findAll({
    where:{
        [Op.and]:[{Stream:'CS'},{Marks:{[Op.gte]:75}}]
    }, raw : true
}).then ((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("Error is : "+err);
});

employeeTable.create ({
    EmpId:107,
    Name :'Sahil',
    Dept : "Global Operations",
    Designation:"Manager"
}).then ((data)=>{
    console.log("Record inserted successfully");
}).catch((err)=>{
    console.error("Error is : "+err);
});

let employeeObj = employeeTable.build ({EmpId:108,Name:'Gaurav',Dept:"Full stack",Designation:'Senior Consultant'});
employeeObj.save();



employeeTable.update(
    {Name:'Mukta Maddipatla'},{
        where:{Name:'Mukta'}
    }).then ((data)=>{
        console.log("Record updated successfully");
    }).catch((err)=>{
        console.error("Error is : "+err);
    });

employeeTable.destroy(
    {where : {Name:'Manikant'}}
).then ((data)=>{
    console.log("Record deleted successfully...");
}).catch ((err)=>{
    console.error("Error is : "+err);
});

studentTable.drop().then ( ()=>{
    console.log("Table dropped...");
})

*/
var customer1Table = sequelize.define('Customer1Sequelize',{
    Id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name:Sequelize.STRING,
    location:Sequelize.STRING
},{
    timestamps:false,
    freezeTableName:true
}
);

var product1Table=sequelize.define('Product1Sequelize',{
    product_number:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    description:Sequelize.STRING,
    cost:Sequelize.INTEGER,
    id:{
        type:Sequelize.INTEGER,
        references:{
            model:'Customer1Sequelize',
            key:"Id"
        }
    }
},{
    timestamps:false,
    freezeTableName:true
},
);

customer1Table.sync({force:true}).then(()=>{
    console.log("Customer Table created successfully");
}).catch((err)=>{
    console.error("Error is "+err);
}).finally (()=>{
    sequelize.close();
})
product1Table.sync({force:true}).then(()=>{
    console.log("Product Table created successfully");
}).catch((err)=>{
    console.error("Error is "+err);
}).finally (()=>{
    sequelize.close();
})

customer1Table.bulkCreate([
    {Id:1,name:'Mukta',location:'Hyderabad'},
    {Id:2,name:'Padma',location:'Hyderabad'},
    {Id:3,name:'Laasya',location:'Bangalore'}
])

product1Table.bulkCreate([
    {product_number:1,description:"TV",cost:21000,id:3},
    {product_number:2,description:"Mobile",cost:22000,id:1},
    {product_number:3,description:"Watch",cost:4000,id:2}
])

sequelize.query ("select c.name,p.description from `Product1Sequelize` p inner join `Customer1Sequelize` c on p.id=c.Id",{type:sequelize.QueryTypes.Select}).then(
    function(data){
        console.log(data);
    }
).catch(err=>{
    console.log(err)
})