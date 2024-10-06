const express = require('express');
const app = express();
const router = require('./router/router.js');
const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Connected to DataBase');
    } catch (error) {
        console.error('Not Connected to DataBase', error);
    }
};

connectDB();

app.use(express.json())
app.get('/', (req, res)=>{
    res.json("Welcome")
})
app.use('/api', router);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
});
