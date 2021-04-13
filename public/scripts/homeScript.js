$(document).ready(function () {
    console.log("ready");
    AjaxRequest();
});

function AjaxRequest() {
    $.ajax({
        type: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/random.php'
    }).done(function (response) {
        console.log(response);
        populateRecipes(response);
    });
}

var counter = 1;
function populateRecipes(data) {


    $(document).ready(function () {
        console.log("Ready!");
        doAjaxRequest();
    });

    function doAjaxRequest() {
        $.ajax({
            type: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/random.php'
        }).done(function (response) {
            console.log(response);
            displayData(response);
        });
    }

    var counter = 1;
    function displayData(data) {
        if (counter == 1) {
            let listItem = $('#firstItem');
            listItem.append($(`<h3>${data.meals[0].strMeal}</h1>`))
            listItem.append($(`<p>${data.meals[0].strCategory}</p>`))
            document.getElementById("firstImage").src = data.meals[0].strMealThumb;
            counter++;
            AjaxRequest();
        }
        else if (counter == 2) {
            let listItem = $('#secondItem');
            listItem.append($(`<h3>${data.meals[0].strMeal}</h1>`))
            listItem.append($(`<p>${data.meals[0].strCategory}</p>`))
            document.getElementById("secondImage").src = data.meals[0].strMealThumb;
            counter++;
            AjaxRequest();
        }
        else if (counter == 3) {
            let listItem = $('#thirdItem');
            listItem.append($(`<h3>${data.meals[0].strMeal}</h1>`))
            listItem.append($(`<p>${data.meals[0].strCategory}</p>`))
            document.getElementById("thirdImage").src = data.meals[0].strMealThumb;
            counter++;
            AjaxRequest();
        }
        else if (counter == 4) {
            let listItem = $('#forthItem');
            listItem.append($(`<h3>${data.meals[0].strMeal}</h1>`))
            listItem.append($(`<p>${data.meals[0].strCategory}</p>`))
            document.getElementById("forthImage").src = data.meals[0].strMealThumb;
            counter++;
            AjaxRequest();
        }
        else if (counter == 5) {
            let listItem = $('#fifthItem');
            listItem.append($(`<h3>${data.meals[0].strMeal}</h1>`))
            listItem.append($(`<p>${data.meals[0].strCategory}</p>`))
            document.getElementById("fifthImage").src = data.meals[0].strMealThumb;
            counter++;
        }
        else {
            console.log("Error");
        }
    }
}