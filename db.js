// const mysql = require('mysql2');
// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"khushboo@841460",
//     database:"school"
// });
// db.connect((error)=>{
//   if(error){
//     console.log("Database Connection failed: "+error)
//   }
//   else{
//     console.log("Database Connection Successfully.")
//   }
// });

// module.exports=db;


// ===================
//  2nd Database
//=================


// const mysql = require('mysql2');
// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"khushboo@841460",
//     database:"edugaon"
// });
// db.connect((error)=>{
//   if(error){
//     console.log("Database Connection failed: "+error)
//   }
//   else{
//     console.log("Database Connection Successfully.")
//   }
// });

// module.exports=db;



// ===================
//  3rd Database  employees
//=================

// const mysql = require('mysql2');
// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"khushboo@841460",
//     database:"employees"
// });
// db.connect((error)=>{
//   if(error){
//     console.log("Database Connection failed: "+error)
//   }
//   else{
//     console.log("Database Connection Successfully.")
//   }
// });

// module.exports=db;


// =====================
//     get homework
// =====================

// 1Q


// const mysql = require('mysql2');
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "khushboo@841460",
//     database: "students"
// });
// db.connect((error) => {
//     if (error) {
//         console.log("Database Connection Failed: " + error);
//     }
//     else {
//         console.log("Database Connection Successfully.");

//     }
// });

// module.exports = db;


//2Q.

// Hospital


// const mysql = require('mysql2');
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "khushboo@841460",
//     database: "Hospitals"
// });
// db.connect((error) => {
//     if (error) {
//         console.log("Database Connection Failed: " + error);
//     }
//     else {
//         console.log("Database Connection Successfully.");

//     }
// });

// module.exports = db;




/*=====================
11-02
=======================*/


// const mysql = require('mysql2');
// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"khushboo@841460",
//     database:"school"
// });
// db.connect((error)=>{
//   if(error){
//     console.log("Database Connection failed: "+error)
//   }
//   else{
//     console.log("Database Connection Successfully.")
//   }
// });

// module.exports=db;


// const mysql = require('mysql2');
// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"khushboo@841460",
//     database:"employees"
// });
// db.connect((error)=>{
//   if(error){
//     console.log("Database Connection failed: "+error)
//   }
//   else{
//     console.log("Database Connection Successfully.")
//   }
// });

// module.exports=db;



const mysql = require('mysql2');
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"khushboo@841460",
    database:"school"
});
db.connect((error)=>{
  if(error){
    console.log("Database Connection failed: "+error)
  }
  else{
    console.log("Database Connection Successfully.")
  }
});

module.exports=db;