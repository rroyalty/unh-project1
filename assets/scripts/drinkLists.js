$(document).ready(function() {

    // List of Ingredients
    const drinkIngredients = $.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list", function(response) {
        return response;
    });

    // List of Categories
    const drinkCategories= $.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list", function(response) {
        return response;
    });

    // List of Glasses
    const drinkGlasses= $.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list", function(response) {
        return response;
    });

    // List of Alcoholic Filters
    const drinkAlcoholic= $.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list", function(response) {
        return response;

    });
});