const mysql =require('mysql2');
var mysqlConnection =mysql.createConnection({
    host :'localhost',
    user:'root',
    password:'root',
    database:'new_user'
})
mysqlConnection.connect((err)=>{
    if(err){
        console.log('error in DB connection',err); 
    } else{
        console.log('DB connected successfully')
    }
})
module.exports=mysqlConnection