const express = require('express');
const env = require('dotenv');
const app = express(); //create an app
const mongoose = require('mongoose');

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
//env variable or constants
env.config();


//mongodb connection
//mongodb+srv://root:<password>@cluster0.r4dzljj.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.r4dzljj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Database connected');
});

app.use(express.json());  //sending json data
app.use('/api',authRoutes); //middlewear
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);

app.listen(process.env.PORT,() => {
    console.log(`Server is running on the port ${process.env.PORT}`);
});  //listen on the server