$(document).ready(function() {
    const drinkAPIkey = "1";
    const drinkURL = "https://www.thecocktaildb.com/api/json/v1/" + drinkAPIkey + "/";

    let ingredients = ["Vodka", "Gin"];

    searchByIngredients(ingredients);

    console.log(ingredients);

    function searchByIngredients(array) {
        let arrayArrays = [];
        let workingURL = drinkURL + "filter.php/?i=";
        for(i=0; i < array.length; i++) {
            $.get(workingURL + array[i], function(response) {
                arrayArrays[i] = array.map(value => value.key);
                console.log(arrayArrays[i]);
            })
        }
    }

})