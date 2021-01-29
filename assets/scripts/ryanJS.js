$(document).ready(function() {
    const drinkAPIkey = "1";
    const drinkURL = "https://www.thecocktaildb.com/api/json/v1/" + drinkAPIkey + "/";
    const filterURL = "filter.php/?i=";

    masterArray = [];

    let ingredients = ["Vodka", "Gin"];

    getDrinksPromises(ingredients);

    function getDrinksPromises(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] = $.get(drinkURL + filterURL + array[i], function(response) {
                        return response;
                    });
        };
        Promise.all(array).then((response) => {
            
            let newObj = {"drinks":[]};
            let arrGen = [];
            for (let i = 0; i < response.length; i++)
                {
                    arrGen = arrGen.concat(response[i].drinks.map(function(v) {return v.idDrink}));
                }
            let counts = {};

            arrGen.forEach(function(x) {
                counts[x] = (counts[x] || 0)+1;
            })
            console.log(counts);
            Object.entries(counts).forEach(e => newObj["drinks"].push({"id":e[0],"count":e[1]}))
            newObj.drinks.sort(function(a,b) {
                return b.count - a.count
            })
            console.log(newObj);


        })
    };



    // function getDrinks(array) {
    //     let arrResponse = array.forEach(element => { $.get(drinkURL + filterURL + element, elemenet = function(response) {
    //         return response;
    //     } )});
    //     console.log(arrResponse);

    // }

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