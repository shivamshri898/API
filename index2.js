const connection = require('./connection');
const express = require('express');
const bodyParser =require('body-parser');
 var app = express();
 app.use(bodyParser.json({limit:'3mb'}))
 var cors = require('cors');
 app.use(cors())
//  var employeeList = [
//     {


 app.get('/employee',(req,res)=>{
    connection.query("SELECT * FROM new_user.new_table", (err, result, fields) => {

        res.send(result);
    });
});

app.get('/search',(req,res)=>{
    let txt = req.query.q
    connection.query("select * FROM new_user.new_table where Name like '%" + txt + "%'",(err, result, fields) => {

        res.send(result);
    });
});



app.post('/createEmployee',(req,res)=>{
    console.log("=================")
    console.log(req.body)
    
    let single_quote_start = "'";
    let single_quote_end = "'";
    let comma = ",";
    let Name = req.body.name;
    let Email = req.body.email;
    let Age = req.body.age
    let Phone = req.body.phone
    let Location = req.body.location;
    let id = Math.floor((Math.random() * 1000) +1);
    let mainSQL = id + comma + Name + comma + Email

   
    // let mainSql = id + comma + single_quote_start   + Name + single_quote_end + comma + single_quote_start + Email + single_quote_end + comma + single_quote_start
     
     var leftsql = "INSERT INTO new_table (`id`,`Name`,`Email`,`Age`,`Phone`,`Location`) VALUES (";
     var rightSql = ")"

    var finalQuery = leftsql + mainSQL + rightSql

    var sql = "INSERT INTO new_table (`id`,`Name`,`Email`,`Age`,`Phone`,`Location`) VALUES (" + id + " , '" +Name+ "','"+ Email +"','"+ Age +"',"+ Phone +",'"+ Location +"')";
  console.log(sql)
    connection.query(sql, function (err, result){ 
        if(err){
            console.log("Inside=======>")
            res.send(err)
        }
    console.log("err", err);
    console.log(result);

    });
res.send("done")
});


 app.listen(5000,'192.168.29.244',()=>console.log('Express server is running on port 4000'))



