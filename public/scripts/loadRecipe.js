$(document).ready(function(){
    console.log("ready load recipe");
    var number = sessionStorage.getItem("number");
    loadMealFromAPI(number);
});

function loadWebPage() {
    window.location = '../pages/mealInfo.html'
}

function loadMealFromAPI(mealNumber){
    $.ajax({
        type: 'GET',
        url:'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealNumber
    }).done(function(response){
        changeRecipe(response);
    });
}

function changeRecipe(data) {
    let title = $('#title');
    title.append($(`<h2>${data.meals[0].strMeal}</h2>`))
    var image = new Image();
    image.src = data.meals[0].strMealThumb;
    document.getElementById('title').append(image);
    var x = new Boolean(true);
    while(x) {
        if (data.meals[0].strIngredient1 === "NaN" || data.meals[0].strIngredient1 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient1);
            var ing1 = data.meals[0].strIngredient1;
            var str1 = data.meals[0].strMeasure1;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient2 === "NaN" || data.meals[0].strIngredient2 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient2);
            var ing1 = data.meals[0].strIngredient2;
            var str1 = data.meals[0].strMeasure2;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient3 === "NaN" || data.meals[0].strIngredient3 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient3);
            var ing1 = data.meals[0].strIngredient3;
            var str1 = data.meals[0].strMeasure3;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient4 === "NaN" || data.meals[0].strIngredient4 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient4);
            var ing1 = data.meals[0].strIngredient4;
            var str1 = data.meals[0].strMeasure4;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient5 === "NaN" || data.meals[0].strIngredient5 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient5);
            var ing1 = data.meals[0].strIngredient5;
            var str1 = data.meals[0].strMeasure5;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient6 === "NaN" || data.meals[0].strIngredient6 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient6);
            var ing1 = data.meals[0].strIngredient6;
            var str1 = data.meals[0].strMeasure6;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient7 === "NaN" || data.meals[0].strIngredient7 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient7);
            var ing1 = data.meals[0].strIngredient7;
            var str1 = data.meals[0].strMeasure7;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient8 === "NaN" || data.meals[0].strIngredient8 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient8);
            var ing1 = data.meals[0].strIngredient8;
            var str1 = data.meals[0].strMeasure8;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient9 === "NaN" || data.meals[0].strIngredient9 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient9);
            var ing1 = data.meals[0].strIngredient9;
            var str1 = data.meals[0].strMeasure9;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient10 === "NaN" || data.meals[0].strIngredient10 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient10);
            var ing1 = data.meals[0].strIngredient10;
            var str1 = data.meals[0].strMeasure10;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient11 === "NaN" || data.meals[0].strIngredient11 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient11);
            var ing1 = data.meals[0].strIngredient11;
            var str1 = data.meals[0].strMeasure11;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient12 === "NaN" || data.meals[0].strIngredient12 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient12);
            var ing1 = data.meals[0].strIngredient12;
            var str1 = data.meals[0].strMeasure12;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient13 === "NaN" || data.meals[0].strIngredient13 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient13);
            var ing1 = data.meals[0].strIngredient13;
            var str1 = data.meals[0].strMeasure13;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient14 === "NaN" || data.meals[0].strIngredient14 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient14);
            var ing1 = data.meals[0].strIngredient14;
            var str1 = data.meals[0].strMeasure14;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient15 === "NaN" || data.meals[0].strIngredient15 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient15);
            var ing1 = data.meals[0].strIngredient15;
            var str1 = data.meals[0].strMeasure15;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient16 === "NaN" || data.meals[0].strIngredient16 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient16);
            var ing1 = data.meals[0].strIngredient16;
            var str1 = data.meals[0].strMeasure16;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient17 === "NaN" || data.meals[0].strIngredient17 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient17);
            var ing1 = data.meals[0].strIngredient17;
            var str1 = data.meals[0].strMeasure17;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient18 === "NaN" || data.meals[0].strIngredient18 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient18);
            var ing1 = data.meals[0].strIngredient18;
            var str1 = data.meals[0].strMeasure18;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient19 === "NaN" || data.meals[0].strIngredient19 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient19);
            var ing1 = data.meals[0].strIngredient19;
            var str1 = data.meals[0].strMeasure19;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
        }
        if (data.meals[0].strIngredient20 === "NaN" || data.meals[0].strIngredient20 === "") {
            x = false;
        }
        else {
            console.log(data.meals[0].strIngredient20);
            var ing1 = data.meals[0].strIngredient20;
            var str1 = data.meals[0].strMeasure20;
            var text = str1 + " " + ing1;
            $("#IngrList").append($("<li>").html(text));
            x = false;
        }
        
    }

    title.append($(`<h3>${data.meals[0].strInstructions}</h3>`))
    title.append($(`<h2>${"Ingredient List"}</h3>`))
    

}
