var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// const FoodRecipes = require('./routes/foodrecipe');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mealsRouter = require('./routes/meals');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public'), { extensions: 'html' }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/meals', mealsRouter);

app.post("../public/pages/recipe-view.html", function(req, res) {
    // Create a user from the create-account form
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
            alert("User is created");
        }
    });
});

module.exports = app;