const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/db');
const app = express();
dotenv.config();


const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: false }));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB();



app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/user', require('./routes/userRoutes'));



module.exports = connectDB;