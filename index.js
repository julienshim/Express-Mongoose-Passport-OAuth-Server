const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require ('./config/keys');

const app = express();
const PORT = process.env.PORT || 3000;

//set up view engine
app.set('view engine', 'ejs');

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
});

//set up routes
app.use('/auth', authRoutes);

//create home route
app.get('/', (req, res)=> {
    res.render('home');
});

app.listen(PORT, () => {
    console.log('App is now listening for request on http://localhost:'+ PORT);
})