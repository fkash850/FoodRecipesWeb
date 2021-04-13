$(document).ready(function() {
    console.log("Ready!");
});

window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const user = params.get('fname') + " " + params.get('lname');
    const email = params.get('email');

    document.getElementById('result-user').innerHTML = user;
    document.getElementById('result-email').innerHTML = email;
})