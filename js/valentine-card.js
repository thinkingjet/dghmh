var measurements = [
    "tsp",
    "oz",
    "cup",
    "lb",
    "tbsp",
    "a sprinkle of",
    "a dash of",
    "gal",
    "a dusting of",
    "slices of",
];

var endOfLetter = ["Love", "XOXO", "Will you be my valentine?", "<3"];

function addIngredientsFromList(listToAdd) {
    ingredientsList = "";
    for (let i = 0; i < listToAdd.length; i += 1) {
        let howMany = "";
        let units = measurements[Math.floor(Math.random() * measurements.length)];
        if (units[0] !== "a") {
        howMany = `${Math.floor(Math.random() * 8 + 1)} `;
        } else if (units === "slices") {
        howMany = `${Math.floor(Math.random() * 8 + 2)} `;
        }
        ingredientsList += `<li class="tab1">${howMany}${units} ${listToAdd[i]}</li>`;
    }
    return ingredientsList;
}
function showRecipe() {
    document.getElementById("display").style.display = "block";

    var name = capitalize(document.getElementById("name").value);
    var relationship = document.getElementById("relationship").value;
    var descriptor = document.getElementById("descriptor").value;
    var personality = document.getElementById("personality").value;
    var physical = document.getElementById("physical").value;
    var necessary = document.getElementById("necessary").value;
    var sender = capitalize(document.getElementById("sender").value);

    var title = `<h2>Recipe for the ${descriptor} ${relationship}<h2>`;
    var ingredientsList = "";
    var instructions = `<p>Mix it all together, and <i>voila</i>!  You have the ${descriptor} ${relationship}, also known as ${name}.</p>`;
    var signed = `<p>${
        endOfLetter[Math.floor(Math.random() * endOfLetter.length)]
    },</p><p>${sender}</p>`;

    ingredientsList +=
        addIngredientsFromList([personality]) +
        addIngredientsFromList([physical]) +
        addIngredientsFromList([necessary]);

    var recipeCard = `
    <div class="card">
        <div class="container">
        <div>${title}</div>
        <div>${ingredientsList}</div>
        <br>
        <div>${instructions}</div>
        <div>${signed}</div>
        </div>
    </div>`;
    display.innerHTML = recipeCard;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}