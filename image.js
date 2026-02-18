// // const express = require('express');
// // const app = express();
// // const path = require('path');
// // const multer = require('multer');

// // app.use(express.json());
// // app.use('/uploads', express.static('uploads'));
// // const storage = multer.diskStorage({
// //     destination: './uploads',
// //     filename: (req, file, cb) => {
// //         cb(null, Date.now() + path.extname(file.originalname));
// //     }
// // });
// // const upload = multer({ storage: storage });
// // app.post('/image-upload', upload.single('image'), (req, res) => {
// //     if (!req.file) {
// //         return res.status(400).json({
// //             message: "No image uploaded"
// //         });
// // }
// //     res.status(200).json({
// //         message: "Image uploaded successfully",
// //         file: req.file.filename,
// //         url: `/uploads/${req.file.filename}`
// //     });
// // });

// // app.listen(5000, () => {
// //     console.log("Server is Running...")
// // });




// const express = require('express');
// const app = express();
// const path = require('path');
// const multer = require('multer');

// app.use(express.json());
// app.use('/uploads', express.static('uploads'));
// const storage = multer.diskStorage({
//     destination: './uploads',
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });
// const upload = multer({ storage: storage });
// app.post('/multipleImages', upload.array('uploads'), (req, res) => {
//     if (!req.files) {
//         return res.status(400).json({
//             message: "No image uploaded"
//         });
//     }

//     res.status(200).json({
//         message: "Image uploaded successfully",
//     //      url: `/uploads/${req.files}`
//  });
// });

// app.listen(5000, () => {
//     console.log("Server is Running...")
// });





// CURD with images

const express = require('express');
const app = express();
const db = require('./db');
const multer = require('multer');
const path = require('path');
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

app.post('/register/student', upload.single('image'),(req, res) => {
    const { name, email, phone, password} = req.body;
const image=req.file.filename;

    const sqlQ = "INSERT INTO students(name,email,phone,password,image) VALUES(?,?,?,?,?)";

    db.query(sqlQ, [name, email, phone, password,image], (error, result) => {
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

// Get All with image

app.get('/AllStudents',(request,response)=>{
   
    const sqlQ="SELECT * FROM students";
    db.query(sqlQ,(error,results)=>{
        if(error){
            response.json({
                message:"Errors: "+error
            })
        }
        response.json({
            message:"All Students Fetched",
            results
        })
    })
    
})

//Update with image

app.put('/updateStudent/:id', upload.single("image"), (request, response) => {
    const sId = parseInt(request.params.id);
    const { name, email, password } = request.body;
    const image = request.file.filename;

    const sqlQ = "UPDATE students SET name=?, email=?, password=?, image=? WHERE id=?";
    db.query(sqlQ, [name, email, password, image, sId], (error, result) => {

        if (error) {
            return response.status(500).json({
                message: "Server Internal Error"
            });
        }
        if (result.affectedRows === 0) {
            return response.status(404).json({
                message: "User Not Found"
            });
        }
        return response.status(200).json({
            message: "Student Updated Successfully",
            student: { sId, name, email, password, image }
        });
    });
});

//Delate with image

app.delete('/deleteStudent/id/:id',upload.single("image"),(request,respnse)=>{
const sId=parseInt(request.params.id);
const sqlQ="DELETE FROM students WHERE id=?";

db.query(sqlQ,[sId],(error,result)=>{
   if(error){
            response.status(500).json({message:"Server internal Errors:"+error})
        }
        if(result.affectedRows===0){
   respnse.status(404).json({
        message:"Student Not Found"
    }) 
        }
        else{     
 respnse.status(201).json({
        message:"Student Deleted Successfully",
        sId
    }) 
        }
})
})

app.listen(5000, () => {
    console.log("5000 Server is Running...")
})