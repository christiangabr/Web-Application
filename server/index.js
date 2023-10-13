const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
// const EmployeeModel = require('./models/Employee')
const dotenv = require('dotenv');
const userRoute = require("./Routes/employee");
const qHRoute = require('./Routes/quoteHistoryRoute');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const Port = process.env.PORT;
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

// Routes
app.use('/users', userRoute);
app.use('/quoteHistory', qHRoute);


// testing api endpoint
// app.get("/api", (req,res) => {
//     res.json({ "users": ["userOne", "userTwo", "userThree"]})
// })



// Check if backend + database is running
app.listen(Port, () => {
    console.log("server is running on", Port);
    // connect();
})



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