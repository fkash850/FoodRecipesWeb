
$(document).ready(function () {
    console.log("ready");
    AjaxRequestPasta();
});
function AjaxRequestPasta() {
    $.ajax({
        type: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta'
    }).done(function (response) {
        pastaRecipes(response);
    });
}

function AjaxRequestSeafood() {
    $.ajax({
        type: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
    }).done(function (response) {
        seafoodRecipes(response);
    });
}

function AjaxRequestBreakfast() {
    $.ajax({
        type: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast'
    }).done(function (response) {
        breakfastRecipes(response);
    });
}

function AjaxRequestDesserts() {
    $.ajax({
        type: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'
    }).done(function (response) {
        dessertRecipes(response);
    });
}

var pastaCounter = 1;
var seafoodCounter = 1;
var breakfastCounter = 1;
var dessertsCounter = 1;
var pastaMax = 8;
var seafoodMax = 24;
var breakfastMax = 7;
var dessertMax = 8;
var checkNum = 0;
mealIdArray = [];
pastaArray = [];
seafoodArray = [];
breakfastArray = [];
dessertArray = [];

function pastaRecipes(data) {
    if (pastaCounter == 1) {
        for (var j = 0; j <= 4; j++) {
            randomNumber = Math.floor(Math.random() * pastaMax)
            while (pastaArray.includes(randomNumber)) {
                console.log("edfg");
                randomNumber = Math.floor(Math.random() * pastaMax)
            }
            pastaArray.push(randomNumber);
        }
        let listItem = $('#firstItemPasta');
        listItem.append($(`<h3>${data.meals[pastaArray[0]].strMeal}</h3>`))
        document.getElementById("firstImagePasta").src = data.meals[pastaArray[0]].strMealThumb;
        mealIdArray.push(data.meals[pastaArray[0]].idMeal);
        console.log(data.meals[pastaArray[0]].idMeal);
        pastaCounter++;
        AjaxRequestPasta();
    }
    else if (pastaCounter == 2) {
        let listItem = $('#secondItemPasta');
        listItem.append($(`<h3>${data.meals[pastaArray[1]].strMeal}</h3>`))
        document.getElementById("secondImagePasta").src = data.meals[pastaArray[1]].strMealThumb;
        mealIdArray.push(data.meals[pastaArray[1]].idMeal);
        pastaCounter++;
        AjaxRequestPasta();
    }
    else if (pastaCounter == 3) {
        let listItem = $('#thirdItemPasta');
        listItem.append($(`<h3>${data.meals[pastaArray[2]].strMeal}</h3>`))
        document.getElementById("thirdImagePasta").src = data.meals[pastaArray[2]].strMealThumb;
        mealIdArray.push(data.meals[pastaArray[2]].idMeal);
        pastaCounter++;
        AjaxRequestPasta();
    }
    else if (pastaCounter == 4) {
        let listItem = $('#forthItemPasta');
        listItem.append($(`<h3>${data.meals[pastaArray[3]].strMeal}</h3>`))
        document.getElementById("forthImagePasta").src = data.meals[pastaArray[3]].strMealThumb;
        mealIdArray.push(data.meals[pastaArray[3]].idMeal);
        pastaCounter++;
        AjaxRequestPasta();
    }
    else if (pastaCounter == 5) {
        let listItem = $('#fifthItemPasta');
        listItem.append($(`<h3>${data.meals[pastaArray[4]].strMeal}</h3>`))
        document.getElementById("fifthImagePasta").src = data.meals[pastaArray[4]].strMealThumb;
        mealIdArray.push(data.meals[pastaArray[4]].idMeal);
        pastaCounter++;
        console.log("Pasta done");
        AjaxRequestSeafood();
    }
    else {
        console.log("Error");
    }
}

function seafoodRecipes(data) {
    if (seafoodCounter == 1) {
        for (var j = 0; j <= 4; j++) {
            randomNumber = Math.floor(Math.random() * seafoodMax)
            while (seafoodArray.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * seafoodMax)
            }
            seafoodArray.push(randomNumber);
        }
        let listItem = $('#firstItemseafood');
        listItem.append($(`<h3>${data.meals[seafoodArray[0]].strMeal}</h3>`))
        document.getElementById("firstImageseafood").src = data.meals[seafoodArray[0]].strMealThumb;
        mealIdArray.push(data.meals[seafoodArray[0]].idMeal);
        seafoodCounter++;
        AjaxRequestSeafood();

    }
    else if (seafoodCounter == 2) {
        let listItem = $('#secondItemseafood');
        listItem.append($(`<h3>${data.meals[seafoodArray[1]].strMeal}</h3>`))
        document.getElementById("secondImageseafood").src = data.meals[seafoodArray[1]].strMealThumb;
        mealIdArray.push(data.meals[seafoodArray[1]].idMeal);
        seafoodCounter++;
        AjaxRequestSeafood();
    }
    else if (seafoodCounter == 3) {

        let listItem = $('#thirdItemseafood');
        listItem.append($(`<h3>${data.meals[seafoodArray[2]].strMeal}</h3>`))
        document.getElementById("thirdImageseafood").src = data.meals[seafoodArray[2]].strMealThumb;
        mealIdArray.push(data.meals[seafoodArray[2]].idMeal);
        seafoodCounter++;
        AjaxRequestSeafood();
    }
    else if (seafoodCounter == 4) {

        let listItem = $('#forthItemseafood');
        listItem.append($(`<h3>${data.meals[seafoodArray[3]].strMeal}</h3>`))
        document.getElementById("forthImageseafood").src = data.meals[seafoodArray[3]].strMealThumb;
        mealIdArray.push(data.meals[seafoodArray[3]].idMeal);
        seafoodCounter++;
        AjaxRequestSeafood();
    }
    else if (seafoodCounter == 5) {

        let listItem = $('#fifthItemseafood');
        listItem.append($(`<h3>${data.meals[seafoodArray[4]].strMeal}</h3>`))
        document.getElementById("fifthImageseafood").src = data.meals[seafoodArray[4]].strMealThumb;
        mealIdArray.push(data.meals[seafoodArray[4]].idMeal);
        seafoodCounter++;
        console.log("Seafood done");
        AjaxRequestBreakfast();
    }
    else {
        console.log("Error");
    }
}

function breakfastRecipes(data) {
    if (breakfastCounter == 1) {
        for (var j = 0; j <= 4; j++) {
            randomNumber = Math.floor(Math.random() * breakfastMax)
            while (breakfastArray.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * breakfastMax)
            }
            breakfastArray.push(randomNumber);
        }
        let listItem = $('#firstItembreakfastfood');
        listItem.append($(`<h3>${data.meals[breakfastArray[0]].strMeal}</h3>`))
        document.getElementById("firstImagebreakfastfood").src = data.meals[breakfastArray[0]].strMealThumb;
        mealIdArray.push(data.meals[breakfastArray[0]].idMeal);
        breakfastCounter++;
        AjaxRequestBreakfast();

    }
    else if (breakfastCounter == 2) {
        let listItem = $('#secondItembreakfastfood');
        listItem.append($(`<h3>${data.meals[breakfastArray[1]].strMeal}</h3>`))
        document.getElementById("secondImagebreakfastfood").src = data.meals[breakfastArray[1]].strMealThumb;
        mealIdArray.push(data.meals[breakfastArray[1]].idMeal);
        breakfastCounter++;
        AjaxRequestBreakfast();
    }
    else if (breakfastCounter == 3) {
        let listItem = $('#thirdItembreakfastfood');
        listItem.append($(`<h3>${data.meals[breakfastArray[2]].strMeal}</h3>`))
        document.getElementById("thirdImagebreakfastfood").src = data.meals[breakfastArray[2]].strMealThumb;
        mealIdArray.push(data.meals[breakfastArray[2]].idMeal);
        breakfastCounter++;
        AjaxRequestBreakfast();
    }
    else if (breakfastCounter == 4) {
        let listItem = $('#forthItembreakfastfood');
        listItem.append($(`<h3>${data.meals[breakfastArray[3]].strMeal}</h3>`))
        document.getElementById("forthImagebreakfastfood").src = data.meals[breakfastArray[3]].strMealThumb;
        mealIdArray.push(data.meals[breakfastArray[3]].idMeal);
        breakfastCounter++;
        AjaxRequestBreakfast();
    }
    else if (breakfastCounter == 5) {
        let listItem = $('#fifthItembreakfastfood');
        listItem.append($(`<h3>${data.meals[breakfastArray[4]].strMeal}</h3>`))
        document.getElementById("fifthImagebreakfastfood").src = data.meals[breakfastArray[4]].strMealThumb;
        mealIdArray.push(data.meals[breakfastArray[4]].idMeal);
        breakfastCounter++;
        console.log("Breakfast done");
        AjaxRequestDesserts();
    }
    else {
        console.log("Error");
    }
}

function dessertRecipes(data) {
    if (dessertsCounter == 1) {
        for (var j = 0; j <= 4; j++) {
            randomNumber = Math.floor(Math.random() * dessertMax)
            while (dessertArray.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * dessertMax)
            }
            dessertArray.push(randomNumber);
        }
        let listItem = $('#firstItemdesserts');
        listItem.append($(`<h3>${data.meals[dessertArray[0]].strMeal}</h3>`))
        document.getElementById("firstImagedesserts").src = data.meals[dessertArray[0]].strMealThumb;
        mealIdArray.push(data.meals[dessertArray[0]].idMeal);
        dessertsCounter++;
        AjaxRequestDesserts();

    }
    else if (dessertsCounter == 2) {
        let listItem = $('#secondItemdesserts');
        listItem.append($(`<h3>${data.meals[dessertArray[1]].strMeal}</h3>`))
        document.getElementById("secondImagedesserts").src = data.meals[dessertArray[1]].strMealThumb;
        mealIdArray.push(data.meals[dessertArray[1]].idMeal);
        dessertsCounter++;
        AjaxRequestDesserts();
    }
    else if (dessertsCounter == 3) {
        let listItem = $('#thirdItemdesserts');
        listItem.append($(`<h3>${data.meals[dessertArray[2]].strMeal}</h3>`))
        document.getElementById("thirdImagedesserts").src = data.meals[dessertArray[2]].strMealThumb;
        mealIdArray.push(data.meals[dessertArray[2]].idMeal);
        dessertsCounter++;
        AjaxRequestDesserts();
    }
    else if (dessertsCounter == 4) {
        let listItem = $('#forthItemdesserts');
        listItem.append($(`<h3>${data.meals[dessertArray[3]].strMeal}</h3>`))
        document.getElementById("forthImagedesserts").src = data.meals[dessertArray[3]].strMealThumb;
        mealIdArray.push(data.meals[dessertArray[3]].idMeal);
        dessertsCounter++;
        AjaxRequestDesserts();
    }
    else if (dessertsCounter == 5) {
        let listItem = $('#fifthItemdesserts');
        listItem.append($(`<h3>${data.meals[dessertArray[4]].strMeal}</h3>`))
        document.getElementById("fifthImagedesserts").src = data.meals[dessertArray[4]].strMealThumb;
        mealIdArray.push(data.meals[dessertArray[4]].idMeal);
        dessertsCounter++;
        console.log("dessert Done");
        console.log(mealIdArray);
    }
    else {
        console.log("Error");
    }
}


//Information gathered to pass data from one JS file to another. Link: https://lage.us/Javascript-Pass-Variables-to-Another-Page.html#:~:text=There%20are%20two%20ways%20to,query%20string%20with%20the%20URL.

function firstImgPastaClicked() {
    console.log("view recipe ");
    imageNum = 0;
    passMealId(imageNum);
}

function secondImgPastaClicked() {
    imageNum = 1;
    passMealId(imageNum);
}

function thirdImgPastaClicked() {
    imageNum = 2;
    passMealId(imageNum);
}

function forthImgPastaClicked() {
    imageNum = 3;
    passMealId(imageNum);
}

function fifthImgPastaClicked() {
    imageNum = 4;
    passMealId(imageNum);
}

// seafood image click
function firstImgSeafoodClicked() {
    imageNum = 5;
    passMealId(imageNum);
}

function secondImgSeafoodClicked() {
    imageNum = 6;
    passMealId(imageNum);
}

function thirdImgSeafoodClicked() {
    imageNum = 7;
    passMealId(imageNum);
}

function forthImgSeafoodClicked() {
    imageNum = 8;
    passMealId(imageNum);
}

function fifthImgSeafoodClicked() {
    imageNum = 9;
    passMealId(imageNum);
}

// breakfast image click
function firstImgBreakfastClicked() {
    imageNum = 10;
    passMealId(imageNum);
}

function secondImgBreakfastClicked() {
    imageNum = 11;
    passMealId(imageNum);
}

function thirdImgBreakfastClicked() {
    imageNum = 12;
    passMealId(imageNum);
}

function forthImgBreakfastClicked() {
    imageNum = 13;
    passMealId(imageNum);
}

function fifthImgBreakfastClicked() {
    imageNum = 14;
    passMealId(imageNum);
}

// dessert image click
function firstImgDessertClicked() {
    imageNum = 15;
    passMealId(imageNum);
}

function secondImgDessertClicked() {
    imageNum = 16;
    passMealId(imageNum);
}

function thirdImgDessertClicked() {
    imageNum = 17;
    passMealId(imageNum);
}

function forthImgDessertClicked() {
    imageNum = 18;
    passMealId(imageNum);
}

function fifthImgDessertClicked() {
    imageNum = 19;
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