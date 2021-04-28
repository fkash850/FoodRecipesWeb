var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mealsRouter = require('./routes/meals');
const FoodRecipes = require('./routes/foodrecipe');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public'), { extensions: 'html' }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/meals', mealsRouter);

// Create a user from the create-account form
app.post("/create", function(req, res) {    
    const user = new FoodRecipes({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password
    });

    user.save(function(err, user) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.send("User is created");
        }
    });
});

module.exports = app;