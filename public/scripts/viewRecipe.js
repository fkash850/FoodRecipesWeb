
$(document).ready(function () {
    console.log("ready");
    AjaxRequestPasta();
});
function AjaxRequestPasta() {
    $.ajax({
        type: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta'
    }).done(function (response) {
        populateRecipes(response);
    });
}

function AjaxRequestSeafood() {
    $.ajax({
        type: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
    }).done(function (response) {
        populateRecipes(response);
    });
}

function AjaxRequestBreakfast() {
    $.ajax({
        type: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast'
    }).done(function (response) {
        console.log(response);
        populateRecipes(response);
    });
}

function AjaxRequestDesserts() {
    $.ajax({
        type: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'
    }).done(function (response) {
        console.log(response);
        populateRecipes(response);
    });
}

var pastaCounter = 1;
var seafoodCounter = 1;
var breakfastCounter = 1;
var dessertsCounter = 1;
var array = [];

//Code used from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomInt(max) {
    if (pastaCounter > 5) {
        array = []
    }
    else if (seafoodCounter > 5) {
        array = []
    }
    else if (breakfastCounter > 5) {
        array = []
    }
    else if (dessertsCounter > 5) {
        array = []
    }


    var randomNumber = Math.floor(Math.random() * max)
    while (array.includes(randomNum)) {
        randomNumber = Math.floor(Math.random() * max)
    }
    array.push(randomNumber);
    return randomNumber;

}

var pastaMax = 8;
var seafoodMax = 24;
var breakfastMax = 7;
var dessertMax = 8;
var randomNum = 0;
var checkNum = 0;
function populateRecipes(data) {
    if (pastaCounter <= 5) {
        if (pastaCounter == 1) {
            var randomNum = randomInt(pastaMax);
            while (checkNum == randomNum) {
                var randomNum = randomInt(pastaMax);
            }
            let listItem = $('#firstItemPasta');
            listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
            document.getElementById("firstImagePasta").src = data.meals[randomNum].strMealThumb;
            pastaCounter++;
            checkNum = randomNum;
            AjaxRequestPasta();
        }
        else if (pastaCounter == 2) {
            var randomNum = randomInt(pastaMax);
            while (checkNum == randomNum) {
                var randomNum = randomInt(pastaMax);
            }
            let listItem = $('#secondItemPasta');
            listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
            document.getElementById("secondImagePasta").src = data.meals[randomNum].strMealThumb;
            pastaCounter++;
            checkNum = randomNum;
            AjaxRequestPasta();
        }
        else if (pastaCounter == 3) {
            var randomNum = randomInt(pastaMax);
            while (checkNum == randomNum) {
                var randomNum = randomInt(pastaMax);
            }
            let listItem = $('#thirdItemPasta');
            listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
            document.getElementById("thirdImagePasta").src = data.meals[randomNum].strMealThumb;
            pastaCounter++;
            checkNum = randomNum;
            AjaxRequestPasta();
        }
        else if (pastaCounter == 4) {
            var randomNum = randomInt(pastaMax);
            while (checkNum == randomNum) {
                var randomNum = randomInt(pastaMax);
            }
            let listItem = $('#forthItemPasta');
            listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
            document.getElementById("forthImagePasta").src = data.meals[randomNum].strMealThumb;
            pastaCounter++;
            checkNum = randomNum;
            AjaxRequestPasta();
        }
        else if (pastaCounter == 5) {
            var randomNum = randomInt(pastaMax);
            while (checkNum == randomNum) {
                var randomNum = randomInt(pastaMax);
            }
            let listItem = $('#fifthItemPasta');
            listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
            document.getElementById("fifthImagePasta").src = data.meals[randomNum].strMealThumb;
            pastaCounter++;
            AjaxRequestSeafood();
            console.log(pastaCounter);
        }
        else {
            console.log("Error");
        }
    }
    else if (pastaCounter > 5) {
        if (seafoodCounter <= 5) {
            if (seafoodCounter == 1) {
                var randomNum = randomInt(seafoodMax);
                while (checkNum == randomNum) {
                    var randomNum = randomInt(seafoodMax);
                }
                let listItem = $('#firstItemseafood');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("firstImageseafood").src = data.meals[randomNum].strMealThumb;
                seafoodCounter++;
                checkNum = randomNum;
                AjaxRequestSeafood();

            }
            else if (seafoodCounter == 2) {
                var randomNum = randomInt(seafoodMax);
                while (checkNum == randomNum) {
                    var randomNum = randomInt(seafoodMax);
                }
                let listItem = $('#secondItemseafood');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("secondImageseafood").src = data.meals[randomNum].strMealThumb;
                seafoodCounter++;
                checkNum = randomNum;
                AjaxRequestSeafood();
            }
            else if (seafoodCounter == 3) {
                var randomNum = randomInt(seafoodMax);
                while (checkNum == randomNum) {
                    var randomNum = randomInt(seafoodMax);
                }
                let listItem = $('#thirdItemseafood');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("thirdImageseafood").src = data.meals[randomNum].strMealThumb;
                seafoodCounter++;
                checkNum = randomNum;
                AjaxRequestSeafood();
            }
            else if (seafoodCounter == 4) {
                var randomNum = randomInt(seafoodMax);
                while (checkNum == randomNum) {
                    var randomNum = randomInt(seafoodMax);
                }
                let listItem = $('#forthItemseafood');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("forthImageseafood").src = data.meals[randomNum].strMealThumb;
                seafoodCounter++;
                checkNum = randomNum;
                AjaxRequestSeafood();
            }
            else if (seafoodCounter == 5) {
                var randomNum = randomInt(seafoodMax);
                while (checkNum == randomNum) {
                    var randomNum = randomInt(seafoodMax);
                }
                let listItem = $('#fifthItemseafood');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("fifthImageseafood").src = data.meals[randomNum].strMealThumb;
                seafoodCounter++;
                AjaxRequestBreakfast();
            }
            else {
                console.log("Error");
            }
        }
        // BreakFast
        else if (breakfastCounter <= 5) {
            if (breakfastCounter == 1) {
                var randomNum = randomInt(breakfastMax);
                while (checkNum == randomNum) {
                    console.log("heldfdf")
                    var randomNum = randomInt(breakfastMax);
                }
                console.log(breakfastMax);
                console.log(randomNum);
                let listItem = $('#firstItembreakfastfood');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("firstImagebreakfastfood").src = data.meals[randomNum].strMealThumb;
                breakfastCounter++;
                checkNum = randomNum;
                AjaxRequestBreakfast();

            }
            else if (breakfastCounter == 2) {
                var randomNum = randomInt(breakfastMax);
                while (checkNum == randomNum) {
                    console.log("heldfdf")
                    var randomNum = randomInt(breakfastMax);
                }
                console.log(breakfastMax);
                console.log(randomNum);
                let listItem = $('#secondItembreakfastfood');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("secondImagebreakfastfood").src = data.meals[randomNum].strMealThumb;
                breakfastCounter++;
                checkNum = randomNum;
                AjaxRequestBreakfast();
            }
            else if (breakfastCounter == 3) {
                var randomNum = randomInt(breakfastMax);
                while (checkNum == randomNum) {
                    console.log("heldfdf")
                    var randomNum = randomInt(breakfastMax);
                }
                console.log(breakfastMax);
                console.log(randomNum);
                let listItem = $('#thirdItembreakfastfood');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("thirdImagebreakfastfood").src = data.meals[randomNum].strMealThumb;
                breakfastCounter++;
                checkNum = randomNum;
                AjaxRequestBreakfast();
            }
            else if (breakfastCounter == 4) {
                var randomNum = randomInt(breakfastMax);
                while (checkNum == randomNum) {
                    console.log("heldfdf")
                    var randomNum = randomInt(breakfastMax);
                }
                console.log(breakfastMax);
                console.log(randomNum);
                let listItem = $('#forthItembreakfastfood');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("forthImagebreakfastfood").src = data.meals[randomNum].strMealThumb;
                breakfastCounter++;
                checkNum = randomNum;
                AjaxRequestBreakfast();
            }
            else if (breakfastCounter == 5) {
                var randomNum = randomInt(breakfastMax);
                while (checkNum == randomNum) {
                    console.log("heldfdf")
                    var randomNum = randomInt(breakfastMax);
                }
                console.log(breakfastMax);
                console.log(randomNum);
                let listItem = $('#fifthItembreakfastfood');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("fifthImagebreakfastfood").src = data.meals[randomNum].strMealThumb;
                breakfastCounter++;
                AjaxRequestDesserts();
            }
            else {
                console.log("Error");
            }
        }
        // Desserts
        else if (dessertsCounter <= 5) {
            if (dessertsCounter == 1) {
                var randomNum = randomInt(dessertMax);
                while (checkNum == randomNum) {
                    console.log("heldfdf")
                    var randomNum = randomInt(dessertMax);
                }
                console.log(dessertMax);
                console.log(randomNum);
                let listItem = $('#firstItemdesserts');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("firstImagedesserts").src = data.meals[randomNum].strMealThumb;
                dessertsCounter++;
                checkNum = randomNum;
                AjaxRequestDesserts();

            }
            else if (dessertsCounter == 2) {
                var randomNum = randomInt(dessertMax);
                while (checkNum == randomNum) {
                    console.log("heldfdf")
                    var randomNum = randomInt(dessertMax);
                }
                console.log(dessertMax);
                console.log(randomNum);
                let listItem = $('#secondItemdesserts');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("secondImagedesserts").src = data.meals[randomNum].strMealThumb;
                dessertsCounter++;
                checkNum = randomNum;
                AjaxRequestDesserts();
            }
            else if (dessertsCounter == 3) {
                var randomNum = randomInt(dessertMax);
                while (checkNum == randomNum) {
                    console.log("heldfdf")
                    var randomNum = randomInt(dessertMax);
                }
                console.log(dessertMax);
                console.log(randomNum);
                let listItem = $('#thirdItemdesserts');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("thirdImagedesserts").src = data.meals[randomNum].strMealThumb;
                dessertsCounter++;
                checkNum = randomNum;
                AjaxRequestDesserts();
            }
            else if (dessertsCounter == 4) {
                var randomNum = randomInt(dessertMax);
                while (checkNum == randomNum) {
                    console.log("heldfdf")
                    var randomNum = randomInt(dessertMax);
                }
                console.log(dessertMax);
                console.log(randomNum);
                let listItem = $('#forthItemdesserts');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("forthImagedesserts").src = data.meals[randomNum].strMealThumb;
                dessertsCounter++;
                checkNum = randomNum;
                AjaxRequestDesserts();
            }
            else if (dessertsCounter == 5) {
                var randomNum = randomInt(dessertMax);
                while (checkNum == randomNum) {
                    console.log("heldfdf")
                    var randomNum = randomInt(dessertMax);
                }
                console.log(dessertMax);
                console.log(randomNum);
                let listItem = $('#fifthItemdesserts');
                listItem.append($(`<h3>${data.meals[randomNum].strMeal}</h3>`))
                document.getElementById("fifthImagedesserts").src = data.meals[randomNum].strMealThumb;
                dessertsCounter++;
                AjaxRequestDesserts();
            }
            else {
                console.log("Error");
            }
        }
    }
}