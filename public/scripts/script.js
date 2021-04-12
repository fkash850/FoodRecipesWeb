console.log("Ready!");

function openLogin() {
    window.location.href = "../pages/login.html";
}

function createAccount() {
    console.log("createAccount() function");

    var form = document.getElementById("create-account-form");
    var text = "";

    for (var i = 0; i < form.length; i++) {
        text += form.elements[i].value + "<br>";
    }

    document.getElementById("user").innerHTML = text;
}