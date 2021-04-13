/* https://github.com/RajnishKatharotiya/share-data-between-html-pages */
function loginValues() {
    console.log("loginValues() function");

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementsByClassName('email').value;

    sessionStorage.setItem("fname", fname);
    sessionStorage.setItem("lname", lname);
    sessionStorage.setItem("email", email);

    return false;
}