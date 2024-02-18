//import statement 
const cors = require('cors');
const express = require('express')
const bodyParser = require('body-parser');
const { connection } = require("../Backend/utils/connection");
const AuthRoute = require("../Backend/Router/AuthRouter");




const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.json());
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  };

app.use(cors(corsOptions));

//initialize the Routes;

app.use("/api/auth" , AuthRoute);




connection().then(()=>{
    app.listen(port ,()=>{
        console.log(`Server Running On Port ${port}`);
    })
})





// //send the personal informatio to the database
// app.post('/api/personalinformation' , (req, res)=>{
//     const {firstName, lastName, email, phoneNumber, gender , ID} = req.body;
//     let sql = 'INSERT INTO personalinfo VALUES(?,?,?,?,?,?)';
//     db.query(sql,[firstName, lastName, email, phoneNumber, gender, ID], function(err, result){
//         if(err){
//             console.error('Error executing query: ' + err.stack);
//             res.status(500).send('Error saving personal information');
//             return;
//         }
//         else{
//             console.log('Personal information saved successfully');
//             res.status(200).send('Personal information saved successfully');
//         }
//     })

// });

// //personal information get from the database
// app.get('/api/personalinformation/:ID', (req,res)=>{
//     const userID = req.params.ID;
//     const sql = "SELECT * FROM personalinfo WHERE ID=?";
//     db.query(sql , [userID] , function(err,result){
//         if(err){
//             console.error('Error executing query: ' + err.stack);
//             res.status(500).send('Error fetching personal information');
//             return;
//         }
//         else{
//             if (result.length > 0) {
//                 res.status(200).send(result[0]);
//             } else {
//                 res.status(404).send('User not found');
//             }
//         }

//     })
// });

// //registration detail
// app.post('/signupinformation' , (req,res)=>{
//     const {name , email , password, regID} = req.body;
//     const sql = "INSERT INTO userdata VALUES(?,?,?,?)";
//     db.query(sql, [name , email , password , regID] , function(err, result){
//        if(err){
//             console.error('Error executing query: ' + err.stack);
//             res.status(500).send('Error Saving Data personal information');
//             return;
//        }else{
//             console.log('Registation information saved successfully');
//             res.status(200).send('Registration information saved successfully');
//        }
    
//     })

// });

// //login credentials checking
// app.post('/api/login', (req, res) => {
//     const { email, password } = req.body;
  
//     // Query the database to check if the user with the provided email and password exists
//     const sql = 'SELECT * FROM userdata WHERE email = ? AND password = ?';
//     db.query(sql, [email, password], (err, results) => {
//       if (err) {
//         console.error('Error executing query: ' + err.stack);
//         res.status(500).send('Internal Server Error');
//         return;
//       }
  
//       if (results.length > 0) {
//         // User found, send a success response
//         req.session.user = results[0];
//         console.log(req.session.user);
//         res.status(200).send('Login successful');
//       } else {
//         // No matching user found, send an unauthorized response
//         res.status(401).send('Invalid credentials');
//       }
//     });
//   });

//   //login details Storing
//   app.post('/api/details' , (req,res)=>{
//     const{email , password , loginID} = req.body;
//     const sql = "INSERT INTO logindetails VALUES(?,?,?)";
//     db.query(sql, [email, password , loginID] , function(err, result){
//         if(err){
//             console.error('Error executing query: ' + err.stack);
//             res.status(500).send('Internal Server Error');
//             return;
//         }
//         else{
//             // alert("Data Send Sucessfully To The Database");
//             res.status(200).send("Data send Sucessfully");
//         }
//     })
//   });

// app.post('/api/address' , (req,res)=>{
//     const{fullname , mobilenumber , pincode ,city, state,addr ,area,landmark ,addre}= req.body;
//     const sql = "INSERT INTO address VALUES(?,?,?,?,?,?,?,?,?)";
//     db.query(sql , [fullname , mobilenumber , pincode ,city, state, addr ,area,landmark , addre] , function(err, result){
//         if(err){
//             console.error('Error executing query: ' + err.stack);
//             res.status(500).send('Internal Server Error');
//             return;
//         }else{
//             console.log("Address Infromation Sent Sucessfully");
//             res.status(200).send("Hurray!! Address Sent Sucessfully");
//         }

//     });

// });

// app.get('/api/address/:mobilenumber' , (req,res)=>{
//     const mobile = req.params.mobilenumber;
//     const sql = "SELECT * FROM address WHERE mobilenumber=?";
//     db.query(sql,[mobile],function(err,result){
//         if(err){
//             console.log("error fetching data"+err.stack);
//             res.status(500).send("Internal Server error");
//         }else{
//             if(result.length>0){

//                 res.status(200).send(result[0]);
//                 console.log(result[0]);
//             }
//         }

//     })


// });





