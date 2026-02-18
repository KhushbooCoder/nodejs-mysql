// const express=require('express');
// const app=express();
// const db=require('./db');
// app.use(express.json());


// app.post('/createstudent', (req, res) => {
//   const { name, email, password } = req.body;


//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields required" });
//   }

//   const sql = 'INSERT INTO student (name, email, password) VALUES (?, ?, ?)';

//   db.query(sql, [name, email, password], (err, result) => {
//     if (err) {
//        console.error("Error inserting data:", err);
//       return res.status(500).json({message: "Database insert Failed"});
//     }
  
//     res.status(201).json({
//       message: "User added successfully",
//       data: { id: result.insertId, name, email,password }
//     });
//   });
// });

// app.listen(3000,()=>{
//     console.log("sever is running..........")
// })




// ===================
//  2nd Database
//=================


// const express=require('express');
// const app=express();
// const db=require('./db');
// app.use(express.json());

// app.post('/createstudent', (req, res) => {
//   const { name, age } = req.body;


//   if (!name || !age ) {
//     return res.status(400).json({ message: "All fields required" });
//   }

//   const sql = 'INSERT INTO student (name, age) VALUES (?, ?)';

//   db.query(sql, [name, age], (err, result) => {
//     if (err) {
//        console.error("Error inserting data:", err);
//       return res.status(500).json({message: "Database insert Failed"});
//     }
  
//     res.status(201).json({
//       message: "User added successfully",
//       data: { id: result.insertId, name, age}
//     });
//   });
// });

// app.listen(3000,()=>{
//     console.log("sever is running..........")
// })




// ===================
//  3rd Database
//=================


const express=require('express');
const app=express();
const db=require('./db');
app.use(express.json());

app.post('/createuser',(request,response)=>{
    const{name,email,password}=request.body;

    if(!name||!email||!password){
        return response.status(400).json({ message: "require all filed" });
    }

    const sql='INSERT INTO users (name, email,password) VALUES (?,?,?)';

    db.query(sql, [name, email,password], (error, result) => {
    if (error) {
      console.error("Error inserting data:", error);
      return response.status(500).json({ message: "Database insert failed" });
    }

    response.status(201).json({
          message: "User added successfully!"
    });
  });
});

app.listen(3000,()=>{
    console.log("sever is running..........")
})



// ===================
//  4th Database
//=================

const express=require('express');


