const express = require('express');
const app = express();
const db = require('./db');
const multer = require('multer');
const path = require('path');
const { error } = require('console');
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Register with image 
app.post('/register/user', upload.single('image'),(req, res) => {
    const { name, email,password} = req.body;
    const image=req.file.filename;

    const sqlQ = "INSERT INTO users(name,email,password,image) VALUES(?,?,?,?)";

    db.query(sqlQ, [name, email,password,image], (error, result) => {
        if (error) {
            return res.status(500).json({
                message: "Server Internal Error",
                error: error
            });
        }
        res.status(201).json({
            message: "students Register Successfully"
        });
    });
});

// Get all users
app.get('/AllUsers',(request,response)=>{
    const sqlQ="SELECT* FROM users";
    db.query(sqlQ,(error,results)=>{
        if(error){
            response.json({
                message:"Errors:"+error
            })
        }
        response.json({
            message:"All Users Fetched",
            results
        })
    })
})

//update all users

app.put('/updateUser/:id', upload.single("image"),(request, response)=>{
    const uId=parseInt(request.params.id);
    const {name,email,password}=request.body;
    const image=request.file.filename;

    const sqlQ = "UPDATE users SET name=?, email=?, password=?, image=? WHERE id=?"
    db.query(sqlQ, [name, email, password, image, uId], (error, result) => {

         if(error){
            return response.status(500).json({
                message:"Server Internal Error"
            })
         }
        if (result.affectedRows === 0) {
            return response.status(404).json({
                message: "User Not Found"
            });
        }
        return response.status(200).json({
            message:"Student Updated Succesfully",
            user:{uId,name,email,password,image}
        })
    })
})
3
app.listen(6000, () => {
    console.log("6000 Server is Running...")
})