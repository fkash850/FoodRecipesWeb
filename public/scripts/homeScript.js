$(document).ready(function(){
    console.log("ready");
    AjaxRequest();
});

function AjaxRequest(){
        $.ajax({
            type: 'GET',
            url:'https://www.themealdb.com/api/json/v1/1/random.php'
        }).done(function(response){
            console.log(response);
            populateRecipes(response);

        });
}

var counter = 1;
mealIdArray = [];
function populateRecipes(data){

    if (counter == 1) {
        let listItem = $('#firstItem');
        listItem.append($(`<h3>${data.meals[0].strMeal}</h3>`))
        listItem.append($(`<p>${data.meals[0].strCategory}</p>`))
        document.getElementById("firstImage").src = data.meals[0].strMealThumb;
        mealIdArray.push(data.meals[0].idMeal);
        counter++;
        AjaxRequest();
    }
    else if (counter == 2) {
        let listItem = $('#secondItem');
        listItem.append($(`<h3>${data.meals[0].strMeal}</h3>`))
        listItem.append($(`<p>${data.meals[0].strCategory}</p>`))
        document.getElementById("secondImage").src = data.meals[0].strMealThumb;
        mealIdArray.push(data.meals[0].idMeal);
        counter++;
        AjaxRequest();
    }
    else if (counter == 3) {
        let listItem = $('#thirdItem');
        listItem.append($(`<h3>${data.meals[0].strMeal}</h3>`))
        listItem.append($(`<p>${data.meals[0].strCategory}</p>`))
        document.getElementById("thirdImage").src = data.meals[0].strMealThumb;
        mealIdArray.push(data.meals[0].idMeal);
        counter++;
        AjaxRequest();
    }
    else if (counter == 4) {
        let listItem = $('#forthItem');
        listItem.append($(`<h3>${data.meals[0].strMeal}</h3>`))
        listItem.append($(`<p>${data.meals[0].strCategory}</p>`))
        document.getElementById("forthImage").src = data.meals[0].strMealThumb;
        mealIdArray.push(data.meals[0].idMeal);
        counter++;
        AjaxRequest();
    }
    else if (counter == 5) {
        let listItem = $('#fifthItem');
        listItem.append($(`<h3>${data.meals[0].strMeal}</h3>`))
        listItem.append($(`<p>${data.meals[0].strCategory}</p>`))
        document.getElementById("fifthImage").src = data.meals[0].strMealThumb;
        mealIdArray.push(data.meals[0].idMeal);
        counter++;
    }
    else {
        console.log("Error");
    }
}

//Information gathered to pass data from one JS file to another. Link: https://lage.us/Javascript-Pass-Variables-to-Another-Page.html#:~:text=There%20are%20two%20ways%20to,query%20string%20with%20the%20URL.

function firstImgClicked() {
    imageNum = 0;
    passMealId(imageNum);
}

function secondImgClicked() {
    imageNum = 1;
    passMealId(imageNum);
}

function thirdImgClicked() {
    imageNum = 2;
    passMealId(imageNum);
}

function forthImgClicked() {
    imageNum = 3;
    passMealId(imageNum);
}

function fifthImgClicked() {
    imageNum = 4;
    passMealId(imageNum);
}

function passMealId(imageNum) {
    if (imageNum === undefined || imageNum === null) {
        console.log("null/undefined image number")
    }
    else {
        var mealNumber = mealIdArray[imageNum];
        console.log(mealNumber);
        sessionStorage.setItem("number", mealNumber);
        loadWebPage();
    }
}
