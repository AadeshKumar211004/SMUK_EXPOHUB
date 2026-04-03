const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoute = require('./routes/contactRoute');

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api",contactRoute)

const PORT =process.env.PORT || 8080;

app.listen(PORT,()=>{
    try {
        connectDB().then(()=>{
            console.log(`Mongo connect successfully and server is listening at port ${PORT}`);
        })
    } catch (error) {
        console.log(error.message);
    }
})