// const express = require('express');
// const app = express();
// const db = require('./db');
// app.use(express.json());
// // Add New Student
// app.post('/addnewstudent', (request, response) => {
//     const { c_name, c_duration } = request.body;

//     if (!c_name || !c_duration) {
//         return response.status(400).json({
//             message: "All Fields are required."
//         });
//     }

//     const sqlQ = "INSERT INTO Courses  (c_name, c_duration) VALUES (?, ?)";

//     db.query(sqlQ, [c_name, c_duration], (error, result) => {
//         if (error) {
//             return response.status(500).json({
//                 message: "Server Internal Error",
//                 error
//             });
//         }

//         response.status(201).json({
//             message: "New Student Added Successfully",
//             id: result.insertId,
//             c_name,
//             c_duration
//         });
//     });
// });

// // Fetch All Students

// app.get('/students', (request, response) => {
//     const sqlQ = "SELECT * FROM Courses;";

//     db.query(sqlQ, (error, result) => {
//         if (error) {
//             response.status(500).json({
//                 message: "Server Internal Errors: ",
//                 error
//             })
//         }
//         response.status(200).json({
//             message: "Students Fetched Successfully.",
//             result
//         })
//     })
// })

// // Fetch Student By ID

// app.get('/student/:id', (request, response) => {
//     const sId = parseInt(request.params.id);
//     const sqlQ = "SELECT * FROM Courses WHERE id=?";

//     db.query(sqlQ, [sId], (error, result) => {
//         if (error) {
//             response.status(500).json({
//                 message: "Server Internal Errors: ",
//                 error
//             })
//         }
//         response.status(200).json({
//             message: "Students Fetched Successfully.",
//             result
//         })
//     })
// });
   
// // Fetch Student By c_Name

// app.get('/student/c_name/:c_name', (request, response) => {
//     const sc_Name = request.params.c_name;
//     const sqlQ = "SELECT * FROM Courses WHERE c_name=?";

//     db.query(sqlQ, [sc_Name], (error, result) => {
//         if (error) {
//             response.status(500).json({
//                 message: "Server Internal Errors: ",
//                 error
//             })
//         }
//         response.status(200).json({
//             message: "Students Fetched Successfully.",
//             result
//         })
//     })
// })
// app.listen(3000, () => {
//     console.log("Server is Running...")
// });




/// 2Q.
// ..........hospitals..........

// const  express=require ('express');
// const app=express();
// const db=require('./db');
// app.use(express.json());


// app.post('/createstaff',(req,res)=>{
//     const {name,email,phone}=req.body;


//     if(!name||!email||!phone){
//         res.status(400).json({message:"All fields are required"})
//     }


//     const sqlQ="INSERT INTO staff(name,email,phone) VALUES (?,?,?)";


//     db.query(sqlQ,[name,email,phone],(err,result)=>{
//         if(err){
//             res.status(500).json({message:"Database insert failed",err})
//         }
//         res.status(201).json({
//             message:"New Data added successfully.",
//             name,email,phone
//         })
//     })
// })

// app.get('/staff',(req,res)=>{
//    const sqlQ= "SELECT * FROM staff";

//    db.query(sqlQ,(err,result)=>{
//    if(err){
//     req.status(500).json({message:"Internal Server Error"})
//    }
//    res.status(200).json({
//     message:"Data fetched successfully",
//     result
//    })
//  })
// })

// app.listen(3000, () => {
//     console.log("Server is Running...")
// })


/*=====================
11-02
=======================*/

const  express=require ('express');
const app=express();
const db=require('./db');
app.use(express.json());

app.post('/register/student', (request, response) => {
    const { name, email, password, phone, address } = request.body;
    const sqlQ = "INSERT INTO students (name,email,password,phone,address) VALUES (?,?,?,?,?)";
    db.query(sqlQ, [name, email, password, phone, address], (error, result) => {
        if (error) {
            response.status(500).json({
                message: "Server Internal Error" + error
            })
        }
        response.status(201).json({
            message: "Student Register Successfully",
            login_status:false
        })

    })
})

/// Login with email and password
app.post('/login/student', (request, response) => {

    const { email, password } = request.body;

    const sqlQ = "SELECT * FROM students WHERE email=? AND password=?";

    db.query(sqlQ, [email, password], (error, result) => {
        if (error) {
            return response.status(500).json({
                message: "Server Internal Error"
            });
        }

        if (result.length === 0) {
            return response.status(401).json({
                message: "Invalid email or password"
            });
        }
       
        const updatesql = "UPDATE students SET login_status=? WHERE email=?";
        db.query (updatesql,[true,email],(updateError)=>{
            if(updateError){
                response.status(500).json({
                    message:"error updating login status"
                })
            }
        })
        return response.status(200).json({
            message: "Student Login Successfully",
            login_status:true
        });
    });
});

// app.post('/login/phone/student', (request, response) => {
//     const { phone, password } = request.body;

//     const sqlQ = "SELECT * FROM students WHERE phone=? AND password=?";
//     db.query(sqlQ, [phone, password], (error, result) => {
//         if (error) {
//             response.status(500).json({
//                 message: "Server internal error" + error
//             })
//         }
//         if (result.length === 0) {
//             response.status(404).json({
//                 message: "Invalid Phone and password"
//             })
//         }
//         if (result[0].password !== password) {
//             response.status(401).json({
//                 message: "Invalid  password"
//             });
//         }
//         response.status(201).json({
//             message: "Student Login Successfully"
//         })
//     })
// })


app.listen(3000, () => {
    console.log("Server is Running...")
})