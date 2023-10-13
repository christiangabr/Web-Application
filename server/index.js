const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
// const EmployeeModel = require('./models/Employee')
const userRoute = require("./Routes/employee");
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();


const connect = async () => {
    try {
        mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
        });
        console.log('connected to DB')
    }catch (err) {
        throw err;
    }
}



// Original Code does routing + controller
// app.post("/login", (req, res) => {
//     const {email, password} = req.body;
//     EmployeeModel.findOne({email: email})
//     .then(user => {
//         if (user) {
//             if (user.password === password) {
//                 res.json("Success!")
//             } else {
//                 res.json("The password is incorrect.")
//             }
//         } else {
//             res.json("That email is not registered.")
//         }
//     })
// })
// app.post('/register', (req, res) => {
//     EmployeeModel.create(req.body)
//     .then(employees => res.json(employees))
//     .catch(err => res.json(err))
// })

// Routes
app.use('/user', userRoute);




// Check if backend + database is running
app.listen(3001, () => {
    console.log("server is running");
    // connect();
})