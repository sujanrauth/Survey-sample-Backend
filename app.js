const express = require('express');
const app = express();
const morgan = require('morgan');// To make a log in the terminal
const bodyParser = require('body-parser');

const surveyRoutes = require('./api/routes/survey');
const adminviewRoutes = require('./api/routes/adminview');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//app.use is a middleware handler

app.use('/survey', surveyRoutes);
app.use('/adminview',adminviewRoutes);

app.use((req, res, next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;