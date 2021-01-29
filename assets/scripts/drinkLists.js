

// List of Ingredients
const drinkIngredients = $.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list", function(response) {
    return response;
})

// List of Categories
const drinkCategories  = $.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list", function(response) {
    return response;
});


// list of Glasses
const drinkGlasses = $.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list", function(response) {
    return response;
});

// list of Alcoholic 'type'
const drinkAlcoholic = $.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list", function(response) {
    return response;
});

// Example on how to call the promise.
Promise.resolve(drinkIngredients).then((response) => console.log(response) /* Your function goes here. */ )





