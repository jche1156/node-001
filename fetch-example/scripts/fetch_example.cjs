const prompt = require('prompt-sync')();

let action = "cocktail";

if (action == "quote") {
  fetch("https://api.quotable.io/quotes/random")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
} 
else if (action == "cocktail") {
  const cocktail = prompt('What drink do you want? >');
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then((response) => response.json())
    .then((data) => cocktail_instructions(data.drinks))
    .catch((error) => console.error("Error:", error));
}


function cocktail_instructions(cocktail) {
  if (cocktail == null) {
    console.log("No such recipe found.");
  }
  else {
    cocktail = cocktail[0];
    console.log(`To make a ${cocktail.strDrink}:\n`);
    console.log(`Prepare a ${cocktail.strGlass}.\n`);

    console.log("Ingredients:");
    let ingredient_num = 1;
    while (cocktail[`strIngredient${ingredient_num}`] != null) {
      const ingredientQty = cocktail[`strMeasure${ingredient_num}`];
      const ingredientName = cocktail[`strIngredient${ingredient_num}`];
      if (ingredientQty == null) {
        console.log(`${ingredientName}`);
      } else {
        console.log(`${ingredientQty.trim()} ${ingredientName.trim()}`);
      }
      ingredient_num += 1;
    }

    console.log("\nInstructions:")
    // Split instruction by sentence, omitting last empty one
    let steps = cocktail.strInstructions.split(".");
    steps.pop();
    for (step of steps) {
      console.log(`${step.trim()}.`);
    }
  }
}

// Other Free API's:

// https://vpic.nhtsa.dot.gov/api/
// https://shibe.online/
// https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
// https://www.thecocktaildb.com/api.php