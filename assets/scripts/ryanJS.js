$(document).ready(function() {
    const drinkAPIkey = "1";
    const drinkURL = "https://www.thecocktaildb.com/api/json/v1/" + drinkAPIkey + "/";

    // let ingredients = ["Vodka", "Gin"];

    // searchByIngredients(ingredients);

    // console.log(ingredients);

    // function searchByIngredients(array) {
    //     let masterArray = []
    //     let workingURL = drinkURL + "filter.php/?i=";
    //     for(let i = 0; i < array.length; i++) {
    //         $.get(workingURL + array[i], function(response) {
    //                 const arrayGen = response.drinks.map(function(v) {return v.strDrink})
                    
    //             })
        
    //         }
    // }
    getIDList("chicken");

    function getIDList(ingredient) {
        $.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient, function(response) { 
            const arrayGen = response.meals.map(function(v) {return v.idMeal})
            console.log(arrayGen);
            let workingID = arrayGen[Math.floor(Math.random() * arrayGen.length)]
            $.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + workingID, function(response) {
                console.log(response);
         }) 

        });

    }
    
})