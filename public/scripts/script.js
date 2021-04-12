$(document).ready(function() {
    console.log("Ready!");
});

function createAccount() {
    console.log("createAccount() function");

    var form = document.getElementById("create-account-form");
    var text = "";

    for (var i = 0; i < x.length; i++) {
        text += form.elements[i].value + "<br>";
    }

    document.getElementById("demo").innerHTML = text;
}