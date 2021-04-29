var express = require('express');
var app = express();
const FoodRecipes = require('../routes/foodrecipe');

var fname = document.getElementById("result-fname");
var lname = document.getElementById("result-lname");
var email = document.getElementById("result-email");
var userInfo = document.getElementsByClassName("userInfo");

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
            res.send(`${req.body.fname} ${req.body.lname}'s account is created.\n
                    Please wait for the website to redirect you.`);
            setTimeout(function() { window.open('../pages/profile.html', '_self', false); }, 3000);
            fname.value = req.body.fname;
            lname.value = req.body.lname;
            email.value = req.body.email;
            userInfo.style.display = block;
        }
    });
});

module.exports = app;

/*function loginValues() {
    console.log("loginValues() function");

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementsByClassName('email').value;

    sessionStorage.setItem("fname", fname);
    sessionStorage.setItem("lname", lname);
    sessionStorage.setItem("email", email);

    return false;
}*/