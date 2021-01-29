// Document Ready
$(document).ready(function() {

    // API Constants
    const drinkAPIkey = "1";
    const drinkURL = "https://www.thecocktaildb.com/api/json/v1/" + drinkAPIkey + "/";
    const filterURL = "filter.php/?i=";

    // Experimental array of ingredients
    let ingredients = ["Vodka", "Gin"];

    // Call getDrinkPromises
    getDrinksPromises(ingredients);

    // getDrinkPromises function
    function getDrinksPromises(array) {
        
        // Created an array of promises, each index being the response for one of the ingredients in the array.
        for (let i = 0; i < array.length; i++) {
            array[i] = $.get(drinkURL + filterURL + array[i], function(response) {
                        return response;
                    });
        };

        // Waits for all promises, then generates a list of IDs for the drinks that use the ingredients. Sorts the list by most ingredients found to least.
        Promise.all(array).then((response) => {
            
            // The JSON object that our final list of IDs will sit in.
            let finalList = {"drinks":[]};
            
            // Array used to concat all of the drinks found for each ingredient provided.
            let arrGen = [];

            // Object used to count the number of times that each meal appears in the concat list.
            let counts = {};

            // Loop to concat the arrays of IDs together.
            for (let i = 0; i < response.length; i++)
                {
                    arrGen = arrGen.concat(response[i].drinks.map(function(v) {return v.idDrink}));
                }

            // forEach counts the number of times each ID appears in the list.
            arrGen.forEach(function(x) {
                counts[x] = (counts[x] || 0)+1;
            })

            // Converts the resulting counts object into a more easily usable JSON object.
            Object.entries(counts).forEach(e => finalList["drinks"].push({"id":e[0],"count":e[1]}))

            // Sorts the JSON object by count descending.
            finalList.drinks.sort(function(a,b) {
                return b.count - a.count
            })
            console.log(finalList);

        })
    };

    // getIDList("chicken");

    // function getIDList(ingredient) {
    //     $.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient, function(response) { 
    //         const arrayGen = response.meals.map(function(v) {return v.idMeal})
    //         console.log(arrayGen);
    //         let workingID = arrayGen[Math.floor(Math.random() * arrayGen.length)]
    //         $.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + workingID, function(response) {
    //             console.log(response);
    //      }) 

    //     });

    // }
    
})